import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MapSection() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".map-header", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 75%",
        },
      });
      gsap.from(".map-frame", {
        opacity: 0,
        y: 40,
        scale: 0.98,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 65%",
        },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="map"
      ref={rootRef}
      className="relative py-24 md:py-32 px-4 md:px-6 bg-ink-950"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section header */}
        <div className="map-header text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-copper-400 font-mono mb-4">
            <span className="w-8 h-px bg-copper-400" />
            Access
            <span className="w-8 h-px bg-copper-400" />
          </span>
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl tracking-tightest leading-[1.02] text-white text-balance">
            アクセス
          </h2>
          <p className="text-white/50 mt-4 text-sm md:text-base max-w-lg mx-auto">
            北上駅から徒歩5分。落ち着いた大人の空間へお越しください。
          </p>
        </div>

        {/* Map frame */}
        <div className="map-frame relative rounded-2xl overflow-hidden border border-white/10 aspect-[16/9] md:aspect-[21/9]">
          <iframe
            src="https://www.google.com/maps?q=%E5%B2%A9%E6%89%8B%E7%9C%8C%E5%8C%97%E4%B8%8A%E5%B8%82%E8%AB%8F%E8%A8%AA%E7%94%BA%E4%BA%8C%E4%B8%81%E7%9B%AE1-24+%E7%AC%AC%E4%BA%8C%E3%81%B5%E3%81%8F%E3%82%8D%E3%81%86%E3%83%93%E3%83%AB&output=embed&hl=ja"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lounge es 所在地"
            className="absolute inset-0 w-full h-full"
          />
        </div>

        {/* Info below map */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/10">
            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
              <i className="ri-map-pin-line text-copper-400 w-5 h-5 flex items-center justify-center" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-mono block">
                住所
              </span>
              <span className="text-sm text-white/80">
                岩手県北上市諏訪町二丁目1-24
                <br />
                第二ふくろうビル2-A
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/10">
            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
              <i className="ri-train-line text-copper-400 w-5 h-5 flex items-center justify-center" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-mono block">
                最寄駅
              </span>
              <span className="text-sm text-white/80">
                北上駅から徒歩5分
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/10">
            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
              <i className="ri-phone-line text-copper-400 w-5 h-5 flex items-center justify-center" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-mono block">
                電話番号
              </span>
              <a
                href="tel:0197-72-8033"
                className="text-sm text-white/80 hover:text-copper-400 transition-colors cursor-pointer"
              >
                0197-72-8033
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}