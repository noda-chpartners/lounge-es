import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ShowcaseTeaser() {
  const rootRef = useRef<HTMLDivElement>(null);
  const imgWrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".teaser-text", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: rootRef.current, start: "top 70%" },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  const handlePlayToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.paused) {
      vid.play();
      setIsPlaying(true);
    } else {
      vid.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section
      ref={rootRef}
      className="relative bg-ink-950 py-24 md:py-36 px-4 md:px-6 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-5 flex flex-col gap-6">
          <span className="teaser-text inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-copper-400 font-mono">
            <span className="w-8 h-px bg-copper-400" />
            Chapter 03 — Inside the line
          </span>
          <h2 className="teaser-text font-sans text-4xl md:text-5xl lg:text-6xl tracking-tightest leading-[1.05] text-white text-balance">
            Watch a board
            <span className="font-serif italic text-copper-400"> come to life </span>
            in 4K.
          </h2>
          <p className="teaser-text text-white/60 text-base leading-relaxed max-w-md">
            Ten seconds. Forty-two thousand placements. Zero defects. Step
            inside our automated SMT cell and see industrial-grade precision
            in motion.
          </p>
          <div className="teaser-text flex flex-col sm:flex-row gap-3 mt-2">
            <Link
              to="/showcase"
              className="group inline-flex items-center gap-3 pl-2 pr-5 py-2 rounded-full bg-copper-500 text-ink-950 hover:bg-copper-400 transition-all cursor-pointer whitespace-nowrap"
            >
              <span className="w-9 h-9 rounded-full bg-ink-950 flex items-center justify-center">
                <i className="ri-play-fill text-copper-400 text-lg w-5 h-5 flex items-center justify-center" />
              </span>
              <span className="text-sm font-medium uppercase tracking-wider">
                Play the showcase film
              </span>
            </Link>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div
            className="teaser-text relative block rounded-2xl overflow-hidden group cursor-pointer"
            onClick={handlePlayToggle}
          >
            <div ref={imgWrapRef} className="aspect-[16/10] overflow-hidden bg-ink-900">
              <video
                ref={videoRef}
                src="https://www.pexels.com/download/video/6754826/"
                className="w-full h-full object-cover object-top"
                playsInline
                loop
                onEnded={() => setIsPlaying(false)}
              />
            </div>

            {/* gradient overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/20 to-transparent transition-opacity duration-300 ${isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}
            />

            {/* live badge */}
            <div className="absolute top-5 left-5 flex items-center gap-2 px-3 py-1.5 rounded-full bg-ink-950/70 backdrop-blur-md border border-white/10">
              <span className="w-2 h-2 rounded-full bg-red-500 pulse-dot" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/80 font-mono">
                Live · 4K Showcase
              </span>
            </div>

            {/* play / pause button */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-copper-500 group-hover:border-copper-500 transition-all">
                <i
                  className={`${isPlaying ? "ri-pause-fill" : "ri-play-fill"} text-3xl text-white group-hover:text-ink-950 w-8 h-8 flex items-center justify-center transition-colors`}
                />
              </div>
            </div>

            {/* bottom meta */}
            <div
              className={`absolute bottom-5 left-5 right-5 flex items-end justify-between transition-opacity duration-300 ${isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}
            >
              <div className="flex flex-col">
                <span className="text-xs text-white/50 uppercase tracking-[0.2em] font-mono mb-1">
                  Episode 01
                </span>
                <span className="text-lg md:text-xl text-white font-medium">
                  Inside the SMT cleanroom
                </span>
              </div>
              <span className="text-xs text-white/50 font-mono">02:14</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}