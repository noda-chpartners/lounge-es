import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SiteLayout from "@/components/feature/SiteLayout";
import { portentaSpecs, callouts } from "@/mocks/threeD";

gsap.registerPlugin(ScrollTrigger);

const calloutImages = [
  {
    src: "https://storage.readdy-site.link/project_files/35388f5a-979d-4332-8fd0-fa16b6797360/73c2d035-4e7b-402b-bd9e-bc669eaa6367_pexels-fox-58267-26510348-elementor-io-optimized.webp?v=bf7051c65762904e0b9e3c89ed1e62db",
    alt: "High-density 80-pin board-to-board connectors on the Portenta Mid Carrier",
  },
  {
    src: "https://storage.readdy-site.link/project_files/35388f5a-979d-4332-8fd0-fa16b6797360/f79f7592-3f85-4295-a05a-e5af85f46c9b_pexels-iohichu-34924858-elementor-io-optimized.webp?v=56f6faf6db462298c4b03c1f3c173f68",
    alt: "MikroBUS expansion slots on the Portenta Mid Carrier",
  },
  {
    src: "https://storage.readdy-site.link/project_files/35388f5a-979d-4332-8fd0-fa16b6797360/6ebac513-b253-4d36-8f16-f537c38bc420_pexels-pixabay-39290-elementor-io-optimized.webp?v=e5de786245e9c58da7c6d695f44f3a77",
    alt: "Industrial CAN-FD and RS-485 I/O connectors on the Portenta Mid Carrier",
  },
  {
    src: "https://storage.readdy-site.link/project_files/35388f5a-979d-4332-8fd0-fa16b6797360/2c8f6036-6690-4f1d-9e01-45f70e228101_pexels-www-erzetich-com-2628105-elementor-io-optimized.webp?v=f7e6132e216f418ff4926d2c7e2f3591",
    alt: "Wide power input section with DC barrel jack on the Portenta Mid Carrier",
  },
];

export default function ThreeDModelPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [activeCallout, setActiveCallout] = useState(0);
  const imageTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".td-eyebrow", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out", delay: 0.15 });
      gsap.from(".td-title-line", { y: 60, opacity: 0, duration: 1, ease: "power4.out", delay: 0.25, stagger: 0.1 });
      gsap.from(".td-sub", { y: 20, opacity: 0, duration: 0.9, ease: "power3.out", delay: 0.55 });

      gsap.from(".td-viewer", {
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: { trigger: ".td-viewer", start: "top 80%" },
      });

      gsap.from(".spec-row", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: { trigger: ".spec-list", start: "top 80%" },
      });

      const calloutItems = gsap.utils.toArray<HTMLElement>(".callout-item");
      calloutItems.forEach((el, i) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 60%",
          end: "bottom 40%",
          onEnter: () => setActiveCallout(i),
          onEnterBack: () => setActiveCallout(i),
        });
        gsap.from(el, {
          opacity: 0,
          y: 80,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      // Scroll-driven vertical image slide in sticky panel
      if (imageTrackRef.current && calloutItems.length > 0) {
        gsap.fromTo(
          imageTrackRef.current,
          { yPercent: 0 },
          {
            yPercent: -100 * (calloutImages.length - 1),
            ease: "none",
            scrollTrigger: {
              trigger: ".callouts-column",
              start: "top center",
              end: "bottom center",
              scrub: 0.5,
            },
          }
        );
      }
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <SiteLayout>
      <div ref={rootRef}>
        {/* Hero */}
        <section className="relative pt-36 md:pt-44 pb-12 px-4 md:px-6">
          <div className="max-w-[1400px] mx-auto">
            <span className="td-eyebrow inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-copper-400 font-mono mb-6">
              <span className="w-8 h-px bg-copper-400" />
              Interactive 3D Library
            </span>
            <h1 className="font-sans text-5xl md:text-7xl lg:text-[88px] tracking-tightest leading-[0.95] text-white text-balance max-w-5xl">
              <span className="td-title-line block">Arduino Portenta</span>
              <span className="td-title-line block">
                <span className="font-serif italic text-copper-400">Mid Carrier.</span>
              </span>
            </h1>
            <p className="td-sub text-white/60 text-base md:text-lg max-w-2xl mt-6 leading-relaxed">
              An industrial-grade expansion carrier built around the Arduino
              Portenta module. Drag to orbit, scroll to zoom — every connector,
              every via, modeled to scale.
            </p>
          </div>
        </section>

        {/* Viewer + Specs */}
        <section className="px-4 md:px-6 pb-20 md:pb-28">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            <div className="td-viewer lg:col-span-8">
              <div className="sketchfab-embed-wrapper relative rounded-2xl overflow-hidden bg-ink-900 border border-white/10">
                <div className="aspect-[4/3] w-full">
                  <iframe
                    title="Arduino Portenta Mid Carrier"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    src="https://sketchfab.com/models/492e351236d34292bf93db97944c9ee0/embed"
                    className="w-full h-full"
                  />
                </div>
                <div className="absolute top-5 left-5 flex items-center gap-2 px-3 py-1.5 rounded-full bg-ink-950/70 backdrop-blur-md border border-white/10 pointer-events-none">
                  <span className="w-2 h-2 rounded-full bg-circuit-400 pulse-dot" />
                  <span className="text-[10px] uppercase tracking-[0.25em] text-white/80 font-mono">
                    Live · Drag · Zoom · Orbit
                  </span>
                </div>
              </div>
              <p className="text-xs text-white/40 mt-3 font-mono">
                Model courtesy of{" "}
                <a
                  href="https://sketchfab.com/Fa_Sketch"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-copper-400 hover:underline cursor-pointer"
                >
                  F2A
                </a>{" "}
                on Sketchfab.
              </p>
            </div>

            <div className="lg:col-span-4">
              <div className="rounded-2xl bg-ink-900 border border-white/10 p-6 md:p-8 sticky top-28">
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-copper-400 font-mono mb-6">
                  <span className="w-6 h-px bg-copper-400" />
                  Technical Spec
                </span>
                <h3 className="font-serif italic text-2xl text-white leading-tight mb-6">
                  Built for the factory floor.
                </h3>
                <div className="spec-list flex flex-col gap-px bg-white/5 rounded-lg overflow-hidden">
                  {portentaSpecs.map((s) => (
                    <div
                      key={s.label}
                      className="spec-row bg-ink-900 px-4 py-3 flex flex-col gap-1"
                    >
                      <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-mono">
                        {s.label}
                      </span>
                      <span className="text-sm text-white leading-snug">
                        {s.value}
                      </span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="group mt-6 inline-flex items-center justify-center gap-2 px-5 py-3 w-full rounded-full bg-copper-500 text-ink-950 hover:bg-copper-400 transition-all cursor-pointer whitespace-nowrap"
                >
                  <span className="text-sm font-medium uppercase tracking-wider">
                    Request datasheet
                  </span>
                  <i className="ri-arrow-right-up-line text-base w-4 h-4 flex items-center justify-center group-hover:rotate-12 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Scroll-driven callouts with detail images */}
        <section className="relative bg-ink-900 border-y border-white/5 py-24 md:py-32 px-4 md:px-6">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col gap-4 mb-14 max-w-3xl">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-copper-400 font-mono">
                <span className="w-8 h-px bg-copper-400" />
                Anatomy of the Carrier
              </span>
              <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl tracking-tightest leading-[1.02] text-white text-balance">
                Four details worth
                <span className="font-serif italic text-copper-400"> rotating for.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Sticky detail image panel */}
              <div className="lg:col-span-5 hidden lg:block">
                <div className="sticky top-32">
                  <div className="aspect-square rounded-2xl bg-ink-950 border border-white/10 overflow-hidden relative">
                    {/* Sliding image track */}
                    <div ref={imageTrackRef} className="absolute inset-0">
                      {calloutImages.map((img, i) => (
                        <img
                          key={img.src}
                          src={img.src}
                          alt={img.alt}
                          className="absolute inset-x-0 w-full h-full object-cover object-top will-change-transform"
                          style={{ transform: `translateY(${i * 100}%)` }}
                          loading={i === 0 ? "eager" : "lazy"}
                          decoding="async"
                        />
                      ))}
                    </div>

                    {/* Overlay badge */}
                    <div className="absolute top-5 left-5 flex items-center gap-2 px-3 py-1.5 rounded-full bg-ink-950/70 backdrop-blur-md border border-white/10 z-10">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-white/80 font-mono">
                        Detail {callouts[activeCallout]?.number}
                      </span>
                    </div>
                    {/* Dot indicators */}
                    <div className="absolute bottom-5 left-5 flex gap-1.5 z-10">
                      {callouts.map((_, i) => (
                        <span
                          key={i}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            i === activeCallout
                              ? "w-8 bg-copper-500"
                              : "w-4 bg-white/20 hover:bg-white/40"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Caption below image */}
                  <div className="mt-4">
                    <h3 className="font-serif italic text-xl text-white leading-tight mb-1">
                      {callouts[activeCallout]?.title}
                    </h3>
                    <p className="text-xs text-white/40 font-mono uppercase tracking-[0.2em]">
                      {callouts[activeCallout]?.body.slice(0, 80)}…
                    </p>
                  </div>
                </div>
              </div>

              {/* Callout text cards — mobile images inline, desktop text-only */}
              <div className="callouts-column lg:col-span-7 flex flex-col gap-5">
                {callouts.map((c, i) => (
                  <div
                    key={c.number}
                    className="callout-item rounded-2xl bg-ink-950 border border-white/10 overflow-hidden hover:border-copper-500/40 transition-colors"
                  >
                    {/* Mobile-only image */}
                    <div className="lg:hidden aspect-[16/10] overflow-hidden relative">
                      <img
                        src={calloutImages[i].src}
                        alt={calloutImages[i].alt}
                        className="w-full h-full object-cover object-top will-change-transform"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex items-center gap-2">
                        <span className="font-mono text-xs text-copper-400">{c.number}</span>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-mono">
                          {c.title}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 md:p-8">
                      <div className="flex items-baseline gap-4 mb-4">
                        <span className="font-mono text-xs text-copper-400">{c.number}</span>
                        <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-mono">
                          Detail
                        </span>
                      </div>
                      <h3 className="font-sans text-2xl md:text-3xl text-white mb-3 tracking-tight leading-tight">
                        {c.title}
                      </h3>
                      <p className="text-white/60 text-base leading-relaxed max-w-xl">
                        {c.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
            <h2 className="font-sans text-3xl md:text-5xl tracking-tightest leading-[1.05] text-white text-balance">
              Want this board manufactured?
            </h2>
            <p className="text-white/60 text-base max-w-xl">
              From a single prototype to 100,000-unit production runs — our team
              is ready to spec and quote within 24 hours.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 pl-2 pr-6 py-2 rounded-full bg-white text-ink-950 hover:bg-copper-400 transition-all cursor-pointer whitespace-nowrap"
            >
              <span className="w-10 h-10 rounded-full bg-copper-500 flex items-center justify-center">
                <i className="ri-send-plane-2-line text-ink-950 text-lg w-5 h-5 flex items-center justify-center" />
              </span>
              <span className="text-sm font-medium uppercase tracking-wider">
                Start a Project
              </span>
            </Link>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}