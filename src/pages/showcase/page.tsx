import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SiteLayout from "@/components/feature/SiteLayout";
import { processSteps, showcaseChapters } from "@/mocks/showcase";

gsap.registerPlugin(ScrollTrigger);

export default function ShowcasePage() {
  const rootRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".show-hero-eyebrow", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out", delay: 0.15 });
      gsap.from(".show-hero-title", { y: 60, opacity: 0, duration: 1, ease: "power4.out", delay: 0.25, stagger: 0.1 });
      gsap.from(".show-hero-sub", { y: 20, opacity: 0, duration: 0.9, ease: "power3.out", delay: 0.55 });

      gsap.from(".show-video-wrap", {
        opacity: 0,
        y: 80,
        scale: 0.96,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".show-video-wrap", start: "top 85%" },
      });

      gsap.from(".process-step", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: ".process-grid", start: "top 80%" },
      });

      gsap.from(".chapter-card", {
        opacity: 0,
        y: 60,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: ".chapter-grid", start: "top 80%" },
      });

      gsap.utils.toArray<HTMLElement>(".chapter-img").forEach((img) => {
        gsap.fromTo(
          img,
          { scale: 1.15, rotate: -2 },
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
  }, []);

  return (
    <SiteLayout>
      <div ref={rootRef}>
        {/* Hero */}
        <section className="relative pt-36 md:pt-44 pb-12 px-4 md:px-6">
          <div className="max-w-[1400px] mx-auto">
            <span className="show-hero-eyebrow inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-copper-400 font-mono mb-6">
              <span className="w-8 h-px bg-copper-400" />
              Episode 01 · 4K Showcase Film
            </span>
            <h1 className="font-sans text-5xl md:text-7xl lg:text-[88px] tracking-tightest leading-[0.95] text-white text-balance max-w-5xl">
              <span className="show-hero-title block">A board, built</span>
              <span className="show-hero-title block">
                in <span className="font-serif italic text-copper-400">142 seconds.</span>
              </span>
            </h1>
            <p className="show-hero-sub text-white/60 text-base md:text-lg max-w-2xl mt-6 leading-relaxed">
              Step inside the automated SMT cell where forty-two thousand
              components are placed, soldered and inspected — every move
              choreographed to ±25µm. Captured in 4K, no narration, no music.
              Just engineering.
            </p>
          </div>
        </section>

        {/* Video */}
        <section className="px-4 md:px-6 pb-16 md:pb-24">
          <div className="max-w-[1400px] mx-auto">
            <div className="show-video-wrap relative rounded-2xl overflow-hidden bg-ink-900 border border-white/10">
              <div className="aspect-video w-full bg-ink-950 relative">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  src="https://videos.pexels.com/video-files/5736195/5736195-hd_1920_1080_25fps.mp4"
                  poster="https://readdy.ai/api/search-image?query=Ultra%20high%20fidelity%204K%20cinematic%20still%20of%20an%20automated%20surface%20mount%20technology%20pick%20and%20place%20robot%20arm%20placing%20components%20on%20a%20glowing%20green%20circuit%20board%2C%20warm%20copper%20amber%20accent%20lighting%2C%20moody%20industrial%20deep%20black%20background%2C%20editorial%20documentary%20feel%20with%20shallow%20depth%20of%20field%2C%20premium%20photography&width=1920&height=1080&seq=show-video-poster-01&orientation=landscape"
                  muted
                  autoPlay
                  playsInline
                  loop
                  preload="auto"
                  onLoadedData={() => setVideoReady(true)}
                />

                {/* Loading overlay */}
                {!videoReady && (
                  <div className="absolute inset-0 flex items-center justify-center bg-ink-950/80 backdrop-blur-sm z-10">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-8 h-8 rounded-full border-2 border-copper-400/30 border-t-copper-400 animate-spin" />
                      <span className="text-[10px] uppercase tracking-[0.25em] text-white/60 font-mono">
                        Loading footage
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Top-left badge */}
              <div className="absolute top-5 left-5 flex items-center gap-2 px-3 py-1.5 rounded-full bg-ink-950/70 backdrop-blur-md border border-white/10 z-10">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/80 font-mono">
                  Live · Autoplay · Loop
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12">
              <div className="lg:col-span-4">
                <span className="text-xs uppercase tracking-[0.3em] text-white/40 font-mono">
                  About this film
                </span>
              </div>
              <div className="lg:col-span-8">
                <p className="font-serif italic text-2xl md:text-3xl text-white leading-snug text-balance">
                  Why we recorded this without sound.
                </p>
                <p className="text-white/60 text-base mt-5 leading-relaxed max-w-2xl">
                  The factory hums at 78 decibels. Removing it lets you hear the
                  process visually — the rhythm of the placement heads, the
                  shimmer of fresh paste under task light, the deliberate
                  geometry of every reflow zone. This is what precision looks
                  like when you take the noise away.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process steps */}
        <section className="bg-ink-900 py-24 md:py-32 px-4 md:px-6 border-y border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col gap-4 mb-14 max-w-3xl">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-copper-400 font-mono">
                <span className="w-8 h-px bg-copper-400" />
                Process Breakdown
              </span>
              <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl tracking-tightest leading-[1.02] text-white text-balance">
                Four moments that decide
                <span className="font-serif italic text-copper-400"> a board&apos;s fate.</span>
              </h2>
            </div>

            <div className="process-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              {processSteps.map((s) => (
                <div
                  key={s.code}
                  className="process-step bg-ink-900 p-8 hover:bg-ink-800 transition-colors"
                >
                  <span className="font-mono text-xs text-copper-400">{s.code}</span>
                  <h3 className="font-sans text-xl text-white mt-6 mb-3 leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-sm text-white/55 leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Chapter gallery */}
        <section className="py-24 md:py-32 px-4 md:px-6">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
              <div>
                <h2 className="font-sans text-4xl md:text-5xl tracking-tightest leading-[1.02] text-white text-balance max-w-2xl">
                  More chapters from the floor.
                </h2>
              </div>
              <p className="text-white/50 text-sm max-w-md leading-relaxed">
                A growing library of behind-the-scenes captures — from solder
                paste inspection to final box build.
              </p>
            </div>

            <div className="chapter-grid grid grid-cols-1 md:grid-cols-3 gap-5">
              {showcaseChapters.map((c) => (
                <div
                  key={c.title}
                  className="chapter-card group rounded-2xl overflow-hidden bg-ink-900 border border-white/5 cursor-pointer"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="chapter-img w-full h-full object-cover object-top will-change-transform"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="p-5">
                    <span className="inline-block text-[10px] uppercase tracking-[0.25em] font-mono text-ink-950 bg-circuit-400 px-2 py-1 rounded-md mb-3">
                      {c.tag}
                    </span>
                    <h3 className="text-white text-base md:text-lg leading-snug">
                      {c.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 flex justify-center">
              <Link
                to="/3d-model"
                className="group inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all cursor-pointer whitespace-nowrap"
              >
                <span className="text-sm font-medium uppercase tracking-wider">
                  Next · Explore the 3D Model
                </span>
                <i className="ri-arrow-right-line text-base w-4 h-4 flex items-center justify-center group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}