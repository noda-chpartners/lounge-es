import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getAllCapabilities } from "@/db";
import type { Capability } from "@/db";

gsap.registerPlugin(ScrollTrigger);

export default function Capabilities() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [capabilities, setCapabilities] = useState<Capability[]>([]);

  // Fetch from data layer
  useEffect(() => {
    getAllCapabilities().then(setCapabilities);
  }, []);

  // Animations — re-run once data is loaded
  useEffect(() => {
    if (capabilities.length === 0) return;
    const ctx = gsap.context(() => {
      gsap.from(".cap-card", {
        opacity: 0,
        y: 80,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".cap-grid",
          start: "top 75%",
        },
      });
      gsap.from(".cap-heading", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cap-heading",
          start: "top 85%",
        },
      });
    }, rootRef);
    return () => ctx.revert();
  }, [capabilities]);

  return (
    <section
      ref={rootRef}
      id="capabilities"
      className="relative bg-ink-900 py-24 md:py-36 px-4 md:px-6"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="cap-heading flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 md:mb-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-copper-400 font-mono mb-4">
              <span className="w-8 h-px bg-copper-400" />
              Chapter 02 — Capabilities
            </span>
            <h2 className="font-sans text-4xl md:text-6xl lg:text-7xl tracking-tightest leading-[1.02] text-white text-balance">
              Everything between a
              <span className="font-serif italic text-copper-400"> netlist </span>
              and a finished system.
            </h2>
          </div>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-copper-400 transition-colors cursor-pointer whitespace-nowrap"
          >
            See full capability matrix
            <i className="ri-arrow-right-line text-base w-4 h-4 flex items-center justify-center" />
          </Link>
        </div>

        <div className="cap-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/10">
          {capabilities.map((c) => (
            <div
              key={c.code}
              className="cap-card group relative bg-ink-900 p-8 md:p-10 hover:bg-ink-800 transition-colors cursor-pointer overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper-500/0 to-transparent group-hover:via-copper-500/60 transition-all duration-500" />
              <div className="flex items-start justify-between mb-10">
                <span className="font-mono text-xs text-white/40">{c.code}</span>
                <div className="w-12 h-12 rounded-md bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-copper-500 group-hover:border-copper-500 transition-all">
                  <i
                    className={`${c.icon} text-xl text-white group-hover:text-ink-950 w-6 h-6 flex items-center justify-center transition-colors`}
                  />
                </div>
              </div>
              <h3 className="font-sans text-xl md:text-2xl text-white mb-3 leading-tight tracking-tight">
                {c.title}
              </h3>
              <p className="text-sm text-white/55 leading-relaxed">
                {c.description}
              </p>
              <div className="mt-8 flex items-center gap-2 text-xs text-white/40 group-hover:text-copper-400 transition-colors">
                <span className="uppercase tracking-[0.2em] font-mono">Read more</span>
                <i className="ri-arrow-right-up-line text-sm w-4 h-4 flex items-center justify-center" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}