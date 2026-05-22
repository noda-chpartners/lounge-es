import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { sectors } from "@/mocks/home";

gsap.registerPlugin(ScrollTrigger);

export default function SectorsBand() {
  const rootRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [activeSector, setActiveSector] = useState<number | null>(null);
  const isAnimating = useRef(false);

  const openModal = useCallback((index: number) => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setActiveSector(index);
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => { isAnimating.current = false; },
    });

    tl.set([overlayRef.current, contentRef.current], { display: "flex" });
    tl.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: "power2.out" }
    );
    tl.fromTo(
      contentRef.current,
      { scale: 0.88, opacity: 0, y: 60, rotateX: 4 },
      { scale: 1, opacity: 1, y: 0, rotateX: 0, duration: 0.75, ease: "elastic.out(1, 0.7)" },
      "-=0.2"
    );
    tl.fromTo(
      ".modal-img",
      { scale: 1.15, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    );
    tl.fromTo(
      ".modal-text > *",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", stagger: 0.06 },
      "-=0.6"
    );
    tl.fromTo(
      ".modal-app-card",
      { scale: 0.85, opacity: 0, y: 20 },
      { scale: 1, opacity: 1, y: 0, duration: 0.55, ease: "elastic.out(1, 0.65)", stagger: 0.08 },
      "-=0.4"
    );
  }, []);

  const closeModal = useCallback(() => {
    if (isAnimating.current || activeSector === null) return;
    isAnimating.current = true;

    const tl = gsap.timeline({
      onComplete: () => {
        setActiveSector(null);
        document.body.style.overflow = "";
        isAnimating.current = false;
      },
    });

    tl.to(".modal-app-card", {
      scale: 0.9,
      opacity: 0,
      y: 15,
      duration: 0.25,
      ease: "power2.in",
      stagger: 0.03,
    });
    tl.to(
      ".modal-text > *",
      { y: 20, opacity: 0, duration: 0.2, ease: "power2.in", stagger: 0.02 },
      "-=0.15"
    );
    tl.to(
      ".modal-img",
      { scale: 1.1, opacity: 0, duration: 0.3, ease: "power2.in" },
      "-=0.2"
    );
    tl.to(
      contentRef.current,
      { scale: 0.92, opacity: 0, y: 30, duration: 0.35, ease: "power2.in" },
      "-=0.25"
    );
    tl.to(
      overlayRef.current,
      { opacity: 0, duration: 0.3, ease: "power2.in" },
      "-=0.2"
    );
    tl.set([overlayRef.current, contentRef.current], { display: "none" });
  }, [activeSector]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".sector-item", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: { trigger: rootRef.current, start: "top 80%" },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeModal]);

  const sector = activeSector !== null ? sectors[activeSector] : null;

  return (
    <section
      ref={rootRef}
      className="relative bg-ink-900 border-y border-white/5 py-16 md:py-20 px-4 md:px-6"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
          <div>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-copper-400 font-mono mb-3">
              <span className="w-8 h-px bg-copper-400" />
              Trusted across critical industries
            </span>
            <h3 className="font-sans text-2xl md:text-3xl text-white tracking-tight">
              Six sectors. One standard of zero compromise.
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-white/5 border border-white/10 rounded-xl overflow-hidden">
          {sectors.map((s, idx) => (
            <button
              key={s.name}
              onClick={() => openModal(idx)}
              className="sector-item bg-ink-900 hover:bg-ink-800 transition-colors p-6 flex flex-col items-start gap-4 cursor-pointer group text-left"
            >
              <div className="w-10 h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-copper-500 group-hover:border-copper-500 transition-all">
                <i
                  className={`${s.icon} text-white text-lg group-hover:text-ink-950 w-5 h-5 flex items-center justify-center transition-colors`}
                />
              </div>
              <span className="text-sm text-white/80 group-hover:text-white transition-colors leading-snug">
                {s.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Modal */}
      <div
        ref={modalRef}
        className="fixed inset-0 z-[100] hidden items-center justify-center px-4 py-6"
      >
        {/* Backdrop */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-ink-950/80 backdrop-blur-xl"
          onClick={closeModal}
          style={{ display: "none" }}
        />

        {/* Content Panel */}
        <div
          ref={contentRef}
          className="relative z-10 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl bg-ink-900 border border-white/10 shadow-2xl"
          style={{ display: "none", perspective: "1200px" }}
        >
          {sector && (
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image side */}
              <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                <img
                  ref={imageRef}
                  src={sector.image}
                  alt={sector.name}
                  className="modal-img absolute inset-0 w-full h-full object-cover object-top"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] font-mono text-white/70 bg-ink-950/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                    <i className={`${sector.icon} text-copper-400 text-sm w-4 h-4 flex items-center justify-center`} />
                    {sector.name}
                  </span>
                </div>
              </div>

              {/* Info side */}
              <div className="p-6 md:p-8 flex flex-col gap-6">
                <div className="modal-text flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-sans text-2xl md:text-3xl text-white tracking-tight">
                      {sector.name}
                    </h3>
                    <button
                      onClick={closeModal}
                      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-copper-500 hover:border-copper-500 hover:text-ink-950 text-white flex items-center justify-center transition-all cursor-pointer shrink-0"
                      aria-label="Close"
                    >
                      <i className="ri-close-line text-lg w-5 h-5 flex items-center justify-center" />
                    </button>
                  </div>
                  <p className="text-sm md:text-base text-white/60 leading-relaxed">
                    {sector.description}
                  </p>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-copper-400 font-mono">
                    Key Applications
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {sector.applications.map((app) => (
                    <div
                      key={app.title}
                      className="modal-app-card group rounded-xl bg-ink-950 border border-white/10 p-4 hover:border-copper-500/40 transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-md bg-copper-500/15 border border-copper-500/30 flex items-center justify-center">
                          <i className={`${app.icon} text-copper-400 text-sm w-4 h-4 flex items-center justify-center`} />
                        </div>
                        <span className="text-sm font-medium text-white leading-snug">
                          {app.title}
                        </span>
                      </div>
                      <p className="text-xs text-white/50 leading-relaxed pl-11">
                        {app.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}