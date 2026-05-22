import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { storyChapters } from "@/mocks/home";

gsap.registerPlugin(ScrollTrigger);

export default function StoryNarrative() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Horizontal progress line
      gsap.to(".story-progress", {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 60%",
          end: "bottom 40%",
          scrub: true,
        },
      });

      // Each chapter reveal
      const chapters = gsap.utils.toArray<HTMLElement>(".story-chapter");
      chapters.forEach((chapter) => {
        gsap.from(chapter, {
          opacity: 0,
          y: 80,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: chapter,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Heading parallax
      gsap.from(".story-heading", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".story-heading",
          start: "top 85%",
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="story"
      className="relative bg-ink-950 py-24 md:py-36 px-4 md:px-6"
    >
      <div className="absolute inset-0 bg-circuit-grid opacity-30" />

      <div className="relative max-w-[1400px] mx-auto">
        <div className="story-heading flex flex-col gap-4 mb-16 md:mb-24 max-w-3xl">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-copper-400 font-mono">
            <span className="w-8 h-px bg-copper-400" />
            Chapter 01 — The Story
          </span>
          <h2 className="font-sans text-4xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tightest text-white text-balance">
            Twenty-seven years of
            <span className="font-serif italic text-copper-400"> obsession </span>
            with what others overlook.
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mt-2 leading-relaxed">
            Every micron, every via, every solder joint. Scroll through the
            milestones that shaped PCB Stands into one of Europe's most trusted
            high-reliability fabrication houses.
          </p>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-[200px_1fr_1fr] gap-10 md:gap-16">
          {/* Progress rail */}
          <div className="hidden lg:block absolute left-[228px] top-0 bottom-0 w-px bg-white/5">
            <div
              className="story-progress origin-top w-px h-full bg-copper-500"
              style={{ transform: "scaleY(0)" }}
            />
          </div>

          {storyChapters.map((c, idx) => (
            <div
              key={c.year}
              className="story-chapter contents lg:grid lg:grid-cols-subgrid lg:col-span-3 lg:gap-16 mb-10 lg:mb-0 lg:items-start lg:pb-20"
            >
              <div className="flex items-baseline gap-4 lg:flex-col lg:gap-1">
                <span className="font-mono text-xs text-white/40">
                  0{idx + 1}
                </span>
                <span className="font-sans text-3xl md:text-4xl text-white font-medium tracking-tight">
                  {c.year}
                </span>
              </div>

              <div className="hidden lg:flex items-center pt-3">
                <div className="relative w-3 h-3">
                  <div className="absolute inset-0 rounded-full bg-copper-500" />
                  <div className="absolute -inset-2 rounded-full border border-copper-500/40" />
                </div>
              </div>

              <div className="lg:pt-1">
                <h3 className="font-serif italic text-2xl md:text-3xl text-white leading-tight mb-3">
                  {c.title}
                </h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-md">
                  {c.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}