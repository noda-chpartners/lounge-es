import { useEffect, useRef, useState, type FormEvent } from "react";
import { gsap } from "gsap";
import SiteLayout from "@/components/feature/SiteLayout";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-title-line", { y: 60, opacity: 0, duration: 1, ease: "power4.out", stagger: 0.1, delay: 0.2 });
      gsap.from(".contact-sub", { y: 20, opacity: 0, duration: 0.9, ease: "power3.out", delay: 0.55 });
      gsap.from(".contact-card", { y: 40, opacity: 0, duration: 0.9, ease: "power3.out", stagger: 0.1, delay: 0.4 });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const message = (formData.get("message") as string) || "";
    if (message.length > 500) {
      setErrorMsg("Message must be 500 characters or less.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    try {
      const body = new URLSearchParams();
      formData.forEach((value, key) => {
        body.append(key, value.toString());
      });

      const res = await fetch(
        "https://readdy.ai/api/form/d82mnoek6npfa23qg3t0",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: body.toString(),
        }
      );

      if (!res.ok) throw new Error("Network response was not ok");
      setStatus("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <SiteLayout>
      <div ref={rootRef}>
        {/* Hero */}
        <section className="relative pt-36 md:pt-44 pb-12 px-4 md:px-6">
          <div className="max-w-[1400px] mx-auto">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-copper-400 font-mono mb-6">
              <span className="w-8 h-px bg-copper-400" />
              Get in touch
            </span>
            <h1 className="font-sans text-5xl md:text-7xl lg:text-[88px] tracking-tightest leading-[0.95] text-white text-balance max-w-5xl">
              <span className="contact-title-line block">Let's spec</span>
              <span className="contact-title-line block">
                your <span className="font-serif italic text-copper-400">next board.</span>
              </span>
            </h1>
            <p className="contact-sub text-white/60 text-base md:text-lg max-w-2xl mt-6 leading-relaxed">
              Tell us about your project. Quotes returned in 24 hours, NDAs
              welcome, prototype turn-around from 48 hours.
            </p>
          </div>
        </section>

        {/* Form + Info */}
        <section className="pb-24 md:pb-32 px-4 md:px-6">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Form */}
            <div className="contact-card lg:col-span-8">
              <div className="rounded-2xl bg-ink-900 border border-white/10 p-6 md:p-10">
                <h2 className="font-serif italic text-3xl md:text-4xl text-white leading-tight mb-2">
                  Start a project
                </h2>
                <p className="text-white/50 text-sm mb-8">
                  All fields required unless marked optional.
                </p>

                {status === "success" ? (
                  <div className="rounded-xl bg-circuit-400/10 border border-circuit-400/30 p-8 text-center">
                    <div className="w-12 h-12 rounded-full bg-circuit-400 mx-auto flex items-center justify-center mb-4">
                      <i className="ri-check-line text-ink-950 text-2xl w-6 h-6 flex items-center justify-center" />
                    </div>
                    <h3 className="text-white text-xl font-medium mb-2">
                      Brief received.
                    </h3>
                    <p className="text-white/60 text-sm max-w-md mx-auto">
                      One of our engineers will respond within 24 working hours.
                      Check your inbox for a confirmation.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-6 text-sm text-copper-400 hover:text-copper-300 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Submit another brief →
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    data-readdy-form
                    id="pcb-stands-contact"
                    className="flex flex-col gap-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field
                        label="Full Name"
                        name="name"
                        type="text"
                        required
                        placeholder="Jane Doe"
                      />
                      <Field
                        label="Work Email"
                        name="email"
                        type="email"
                        required
                        placeholder="jane@company.com"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field
                        label="Company"
                        name="company"
                        type="text"
                        required
                        placeholder="Acme Robotics"
                      />
                      <Field
                        label="Phone (optional)"
                        name="phone"
                        type="tel"
                        placeholder="+49 711 0000 000"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="project_type"
                        className="text-[11px] uppercase tracking-[0.2em] text-white/50 font-mono"
                      >
                        Project Type
                      </label>
                      <select
                        id="project_type"
                        name="project_type"
                        required
                        defaultValue=""
                        className="bg-ink-950 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-copper-500 transition-colors cursor-pointer"
                      >
                        <option value="" disabled>
                          Select a project type
                        </option>
                        <option value="prototype">Prototype run (1–50 boards)</option>
                        <option value="low_volume">Low volume (50–5,000)</option>
                        <option value="production">Production (5,000+)</option>
                        <option value="dfm">DFM / Engineering review</option>
                        <option value="box_build">Box build / integration</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="message"
                        className="text-[11px] uppercase tracking-[0.2em] text-white/50 font-mono flex justify-between"
                      >
                        <span>Project Brief</span>
                        <span className="text-white/30">Max 500 characters</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        maxLength={500}
                        placeholder="Layer count, board size, key constraints, target volumes…"
                        className="bg-ink-950 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-copper-500 transition-colors resize-none"
                      />
                    </div>

                    <label className="flex items-start gap-3 text-sm text-white/60 cursor-pointer">
                      <input
                        type="checkbox"
                        name="nda"
                        value="yes"
                        className="mt-1 accent-copper-500 cursor-pointer"
                      />
                      <span>
                        This project requires an NDA before we share details.
                      </span>
                    </label>

                    {status === "error" && errorMsg && (
                      <div className="rounded-lg bg-red-500/10 border border-red-500/30 px-4 py-3 text-sm text-red-300">
                        {errorMsg}
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between pt-2">
                      <p className="text-xs text-white/40 max-w-sm">
                        By submitting you agree to our privacy policy. We
                        respond within 24 working hours.
                      </p>
                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="group inline-flex items-center gap-3 pl-2 pr-6 py-2 rounded-full bg-copper-500 text-ink-950 hover:bg-copper-400 transition-all cursor-pointer whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        <span className="w-10 h-10 rounded-full bg-ink-950 flex items-center justify-center">
                          <i
                            className={`${
                              status === "submitting"
                                ? "ri-loader-4-line animate-spin"
                                : "ri-send-plane-2-line"
                            } text-copper-400 text-lg w-5 h-5 flex items-center justify-center`}
                          />
                        </span>
                        <span className="text-sm font-medium uppercase tracking-wider">
                          {status === "submitting" ? "Sending…" : "Send brief"}
                        </span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-4 flex flex-col gap-5">
              <InfoCard
                icon="ri-map-pin-2-line"
                label="Headquarters"
                lines={[
                  "PCB Stands Manufacturing Co.",
                  "Heilbronner Straße 142",
                  "70191 Stuttgart, Germany",
                ]}
              />
              <InfoCard
                icon="ri-mail-line"
                label="Email"
                lines={["sales@pcb-stands.example", "support@pcb-stands.example"]}
              />
              <InfoCard
                icon="ri-phone-line"
                label="Phone"
                lines={["+49 711 0000 000", "Mon–Fri · 08:00–18:00 CET"]}
              />

              <div className="contact-card rounded-2xl bg-ink-900 border border-white/10 p-6">
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-mono mb-4 block">
                  Follow us
                </span>
                <div className="flex items-center gap-2">
                  {[
                    { icon: "ri-linkedin-fill", label: "LinkedIn", href: "https://linkedin.com" },
                    { icon: "ri-github-fill", label: "GitHub", href: "https://github.com" },
                    { icon: "ri-youtube-fill", label: "YouTube", href: "https://youtube.com" },
                    { icon: "ri-twitter-x-fill", label: "X", href: "https://x.com" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      aria-label={s.label}
                      className="w-10 h-10 rounded-full bg-ink-950 border border-white/10 hover:bg-copper-500 hover:border-copper-500 hover:text-ink-950 text-white/80 flex items-center justify-center transition-all cursor-pointer"
                    >
                      <i className={`${s.icon} text-base w-4 h-4 flex items-center justify-center`} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="contact-card rounded-2xl overflow-hidden border border-white/10">
                <iframe
                  title="PCB Stands Stuttgart"
                  src="https://www.google.com/maps?q=Heilbronner+Stra%C3%9Fe+142,+70191+Stuttgart,+Germany&output=embed"
                  className="w-full h-56 grayscale contrast-110"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-[11px] uppercase tracking-[0.2em] text-white/50 font-mono"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="bg-ink-950 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-copper-500 transition-colors"
      />
    </div>
  );
}

function InfoCard({
  icon,
  label,
  lines,
}: {
  icon: string;
  label: string;
  lines: string[];
}) {
  return (
    <div className="contact-card rounded-2xl bg-ink-900 border border-white/10 p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-md bg-copper-500/15 border border-copper-500/30 flex items-center justify-center">
          <i className={`${icon} text-copper-400 text-base w-4 h-4 flex items-center justify-center`} />
        </div>
        <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-mono">
          {label}
        </span>
      </div>
      <div className="flex flex-col gap-1">
        {lines.map((l) => (
          <span key={l} className="text-sm text-white/80 leading-relaxed">
            {l}
          </span>
        ))}
      </div>
    </div>
  );
}