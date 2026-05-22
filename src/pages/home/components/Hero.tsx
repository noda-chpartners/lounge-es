import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-eyebrow", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.1,
      });
      gsap.from(".hero-line", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.12,
        delay: 0.2,
      });
      gsap.from(".hero-sub", {
        y: 20,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.7,
      });
      gsap.from(".hero-cta", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.9,
      });
      gsap.to(".hero-bg", {
        scale: 1.08,
        duration: 14,
        ease: "none",
        yoyo: true,
        repeat: -1,
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative min-h-screen pt-28 pb-12 px-4 md:px-6 flex items-center"
    >
      {/* Background image — full bleed, edge to edge */}
      <div className="absolute -inset-[5%] overflow-hidden">
        <img
          src="https://static.readdy.ai/image/68f89381c4c7240bb69246b185e50103/3a420641895e5ad87bbad352d0346fbd.jpeg"
          alt="Lounge es 店内"
          className="hero-bg w-full h-full object-cover object-top will-change-transform"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/40 to-ink-950/90" />
        <div className="absolute inset-0 bg-circuit-grid opacity-30 mix-blend-overlay" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
          <div className="hero-eyebrow inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-copper-400 pulse-dot" />
            <span className="text-xs uppercase tracking-[0.25em] text-white/80 font-mono">
              岩手県北上市 / 北上駅徒歩5分
            </span>
          </div>

          <h1 className="font-sans text-white tracking-tightest leading-[0.95] text-5xl md:text-7xl lg:text-[88px] font-medium">
            <span className="hero-line block overflow-hidden">
              <span className="block">Lounge</span>
            </span>
            <span className="hero-line block overflow-hidden">
              <span className="block">
                <span className="font-serif italic text-copper-400">es</span>
              </span>
            </span>
          </h1>

          <p className="hero-sub text-white/70 text-base md:text-lg max-w-xl leading-relaxed text-balance">
            大人のための特別な時間を。
            落ち着いた空間で、上質なひとときをお過ごしください。
          </p>

          <div className="hero-cta flex flex-col sm:flex-row gap-3 mt-2">
            <a
              href="tel:0197-72-8033"
              className="group inline-flex items-center gap-3 pl-2 pr-5 py-2 rounded-full bg-white text-ink-950 hover:bg-copper-400 transition-all cursor-pointer whitespace-nowrap"
            >
              <span className="w-9 h-9 rounded-full bg-copper-500 flex items-center justify-center group-hover:bg-ink-950 transition-colors">
                <i className="ri-phone-line text-ink-950 group-hover:text-copper-400 text-lg w-5 h-5 flex items-center justify-center" />
              </span>
              <span className="text-sm font-medium uppercase tracking-wider">
                ご予約はこちら
              </span>
            </a>
            <a
              href="#info"
              className="group inline-flex items-center gap-3 px-5 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all cursor-pointer whitespace-nowrap"
            >
              <span className="text-sm font-medium uppercase tracking-wider">
                店舗情報
              </span>
              <i className="ri-arrow-down-line text-base w-4 h-4 flex items-center justify-center group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}