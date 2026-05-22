import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const rootRef = useRef<HTMLDivElement>(null);
  const imgWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".cta-bg", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.fromTo(
        ".cta-bg",
        { scale: 1.12, rotate: 1.5 },
        {
          scale: 1,
          rotate: 0,
          ease: "none",
          scrollTrigger: {
            trigger: imgWrapRef.current,
            start: "top 110%",
            end: "center center",
            scrub: true,
          },
        }
      );

      gsap.from(".cta-item", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: rootRef.current, start: "top 70%" },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={rootRef}
      className="relative min-h-[70vh] flex items-center justify-center px-4 md:px-6 py-24 md:py-32 overflow-hidden"
    >
      <div ref={imgWrapRef} className="absolute inset-0 overflow-hidden">
        <img
          src="https://static.readdy.ai/image/68f89381c4c7240bb69246b185e50103/b6072bd10c7030b9f927b8289c4f959f.jpeg"
          alt="Lounge es 店内"
          className="cta-bg w-full h-[120%] object-cover object-top will-change-transform"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-ink-950/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-transparent to-ink-950" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
        <span className="cta-item inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-copper-400 font-mono">
          <span className="w-8 h-px bg-copper-400" />
          Reservation
          <span className="w-8 h-px bg-copper-400" />
        </span>
        <h2 className="cta-item font-sans text-4xl md:text-6xl lg:text-7xl tracking-tightest leading-[1.02] text-white text-balance">
          ご予約・お問い合わせ
        </h2>
        <p className="cta-item text-white/70 text-base md:text-lg max-w-xl leading-relaxed text-left md:text-center">
          お電話にてご予約を承っております。
          どうぞお気軽にお問い合わせください。
        </p>
        <div className="cta-item flex flex-col items-center gap-3 mt-2 w-full max-w-xs">
          <a
            href="tel:0197-72-8033"
            className="group inline-flex items-center justify-center gap-3 pl-2 pr-6 py-3 w-full rounded-full bg-copper-500 text-ink-950 hover:bg-copper-400 transition-all cursor-pointer whitespace-nowrap"
          >
            <span className="w-10 h-10 rounded-full bg-ink-950 flex items-center justify-center">
              <i className="ri-phone-line text-copper-400 text-lg w-5 h-5 flex items-center justify-center" />
            </span>
            <span className="text-sm font-medium uppercase tracking-wider">
              0197-72-8033
            </span>
          </a>
          <a
            href="https://www.instagram.com/m4yu._.u_?igsh=dnVsdWprZXAwaWlj&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 pl-2 pr-6 py-3 w-full rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all cursor-pointer whitespace-nowrap"
          >
            <span className="w-10 h-10 rounded-full bg-ink-950 flex items-center justify-center">
              <i className="ri-instagram-line text-copper-400 text-lg w-5 h-5 flex items-center justify-center" />
            </span>
            <span className="text-sm font-medium uppercase tracking-wider">
              Instagram
            </span>
          </a>
          <span className="text-xs text-white/40 font-mono tracking-wide">
            営業時間 20:30〜01:00 / 定休日 日曜日
          </span>
        </div>
      </div>
    </section>
  );
}