import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SiteLayout from "@/components/feature/SiteLayout";
import {
  getAllAboutValues,
  getAllTeamMembers,
  getAllCertifications,
} from "@/db";
import type { AboutValue, TeamMember, Certification } from "@/db";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const rootRef = useRef<HTMLDivElement>(null);

  const [aboutValues, setAboutValues] = useState<AboutValue[]>([]);
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [dataReady, setDataReady] = useState(false);

  // Fetch all data from the db layer
  useEffect(() => {
    Promise.all([
      getAllAboutValues(),
      getAllTeamMembers(),
      getAllCertifications(),
    ]).then(([values, members, certs]) => {
      setAboutValues(values);
      setTeam(members);
      setCertifications(certs);
      setDataReady(true);
    });
  }, []);

  useEffect(() => {
    if (!dataReady) return;
    const ctx = gsap.context(() => {
      gsap.from(".about-title-line", { y: 60, opacity: 0, duration: 1, ease: "power4.out", stagger: 0.1, delay: 0.2 });
      gsap.from(".about-sub", { y: 20, opacity: 0, duration: 0.9, ease: "power3.out", delay: 0.55 });

      gsap.from(".value-card", {
        opacity: 0,
        y: 60,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: ".values-grid", start: "top 80%" },
      });

      gsap.from(".quote-block", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".quote-block", start: "top 80%" },
      });

      gsap.from(".team-card", {
        opacity: 0,
        y: 60,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: ".team-grid", start: "top 80%" },
      });

      gsap.from(".cert-pill", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.05,
        scrollTrigger: { trigger: ".cert-grid", start: "top 85%" },
      });

      // Scroll-driven scale + rotate settle on portrait & team images
      gsap.utils.toArray<HTMLElement>(".about-scroll-img").forEach((img) => {
        gsap.fromTo(
          img,
          { scale: 1.12, rotate: -1.5 },
          {
            scale: 1,
            rotate: 0,
            ease: "none",
            scrollTrigger: {
              trigger: img.parentElement,
              start: "top 110%",
              end: "center center",
              scrub: true,
            },
          }
        );
      });
    }, rootRef);
    return () => ctx.revert();
  }, [dataReady]);

  return (
    <SiteLayout>
      <div ref={rootRef}>
        {/* Hero */}
        <section className="relative pt-36 md:pt-44 pb-12 px-4 md:px-6">
          <div className="max-w-[1400px] mx-auto">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-copper-400 font-mono mb-6">
              <span className="w-8 h-px bg-copper-400" />
              About PCB Stands
            </span>
            <h1 className="font-sans text-5xl md:text-7xl lg:text-[88px] tracking-tightest leading-[0.95] text-white text-balance max-w-5xl">
              <span className="about-title-line block">
                A workshop that
              </span>
              <span className="about-title-line block">
                became a <span className="font-serif italic text-copper-400">flight-grade</span>
              </span>
              <span className="about-title-line block text-white/40">fabrication house.</span>
            </h1>
            <p className="about-sub text-white/60 text-base md:text-lg max-w-2xl mt-6 leading-relaxed">
              We've been etching boards since 1998. The company has grown,
              the cleanrooms have multiplied, the satellites we power are
              now in low-Earth orbit — but our standard for tolerance has
              never moved.
            </p>
          </div>
        </section>

        {/* Quote / Founder */}
        <section className="py-20 md:py-32 px-4 md:px-6">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="quote-block lg:col-span-7">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/40 font-mono mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-circuit-400" />
                From the Chief Engineer
              </span>
              <p className="font-serif italic text-3xl md:text-5xl text-white leading-tight text-balance">
                <span className="text-copper-400">"</span>
                A printed circuit board is not a commodity. It's a contract
                between a designer's intent and a piece of physics. We've spent
                twenty-seven years honoring that contract.
                <span className="text-copper-400">"</span>
              </p>
              <div className="mt-8 flex items-center gap-3">
                <span className="text-white font-medium">Dr. Lena Vogel</span>
                <span className="text-white/30">—</span>
                <span className="text-white/60 text-sm">Chief Engineer, PCB Stands</span>
                <i className="ri-verified-badge-fill text-circuit-400 text-base w-4 h-4 flex items-center justify-center ml-1" />
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-ink-900 border border-white/10">
                <img
                  src="https://readdy.ai/api/search-image?query=Cinematic%20black%20and%20white%20editorial%20portrait%20of%20a%20professional%20female%20chief%20engineer%20in%20her%20fifties%20with%20short%20gray%20hair%20wearing%20a%20dark%20technical%20jacket%2C%20three%20quarter%20angle%2C%20head%20slightly%20tilted%20upward%2C%20gaze%20directed%20upward%2C%20pure%20deep%20black%20studio%20background%2C%20dramatic%20rim%20lighting%2C%20premium%20documentary%20photography%20style%20with%20a%20moody%20industrial%20feel&width=800&height=1000&seq=about-portrait-01&orientation=portrait"
                  alt="Dr. Lena Vogel, Chief Engineer"
                  className="about-scroll-img w-full h-full object-cover object-top will-change-transform"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-ink-900 border-y border-white/5 py-24 md:py-32 px-4 md:px-6">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col gap-4 mb-14 max-w-3xl">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-copper-400 font-mono">
                <span className="w-8 h-px bg-copper-400" />
                What we believe
              </span>
              <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl tracking-tightest leading-[1.02] text-white text-balance">
                Three principles that
                <span className="font-serif italic text-copper-400"> run the floor.</span>
              </h2>
            </div>
            <div className="values-grid grid grid-cols-1 md:grid-cols-3 gap-5">
              {aboutValues.map((v) => (
                <div
                  key={v.code}
                  className="value-card rounded-2xl bg-ink-950 border border-white/10 p-8"
                >
                  <span className="font-mono text-xs text-copper-400">{v.code}</span>
                  <h3 className="font-serif italic text-2xl text-white mt-6 mb-4 leading-tight">
                    {v.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 md:py-32 px-4 md:px-6">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col gap-4 mb-14 max-w-3xl">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-copper-400 font-mono">
                <span className="w-8 h-px bg-copper-400" />
                The Team
              </span>
              <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl tracking-tightest leading-[1.02] text-white text-balance">
                The hands behind
                <span className="font-serif italic text-copper-400"> the boards.</span>
              </h2>
            </div>
            <div className="team-grid grid grid-cols-2 md:grid-cols-4 gap-5">
              {team.map((p) => (
                <div key={p.name} className="team-card group">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-ink-900 border border-white/10 mb-4">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="about-scroll-img w-full h-full object-cover object-top will-change-transform"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h4 className="text-white text-base md:text-lg font-medium leading-tight">
                    {p.name}
                  </h4>
                  <p className="text-xs text-white/50 mt-1 font-mono uppercase tracking-[0.15em]">
                    {p.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="bg-ink-900 border-t border-white/5 py-20 md:py-28 px-4 md:px-6">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
              <h2 className="font-sans text-3xl md:text-4xl tracking-tightest leading-[1.05] text-white text-balance max-w-xl">
                Certifications & Compliance
              </h2>
              <p className="text-white/50 text-sm max-w-md leading-relaxed">
                Independently audited and renewed annually. Documentation
                available on request under NDA.
              </p>
            </div>
            <div className="cert-grid flex flex-wrap gap-3">
              {certifications.map((c) => (
                <span
                  key={c}
                  className="cert-pill inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-ink-950 border border-white/10 text-sm text-white/80 whitespace-nowrap"
                >
                  <i className="ri-shield-check-line text-circuit-400 text-base w-4 h-4 flex items-center justify-center" />
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
            <h2 className="font-sans text-3xl md:text-5xl tracking-tightest leading-[1.05] text-white text-balance">
              Want to tour the facility?
            </h2>
            <p className="text-white/60 text-base max-w-xl">
              We host engineering teams and procurement decision-makers every
              Thursday. Book a slot below.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 pl-2 pr-6 py-2 rounded-full bg-white text-ink-950 hover:bg-copper-400 transition-all cursor-pointer whitespace-nowrap"
            >
              <span className="w-10 h-10 rounded-full bg-copper-500 flex items-center justify-center">
                <i className="ri-calendar-event-line text-ink-950 text-lg w-5 h-5 flex items-center justify-center" />
              </span>
              <span className="text-sm font-medium uppercase tracking-wider">
                Book a tour
              </span>
            </Link>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}