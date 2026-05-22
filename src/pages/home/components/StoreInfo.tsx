import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StoreInfo() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".info-item", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 75%",
        },
      });
      gsap.from(".info-image", {
        opacity: 0,
        scale: 1.05,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 70%",
        },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  const infoRows = [
    { label: "店舗名", value: "Lounge es", icon: "ri-store-2-line" },
    { label: "電話番号", value: "0197-72-8033", icon: "ri-phone-line", isTel: true },
    { label: "住所", value: "岩手県北上市諏訪町二丁目1-24\n第二ふくろうビル2-A", icon: "ri-map-pin-line" },
    { label: "最寄駅", value: "北上駅 徒歩5分", icon: "ri-train-line" },
    { label: "営業時間", value: "20:30 〜 01:00", icon: "ri-time-line" },
    { label: "定休日", value: "日曜日", icon: "ri-calendar-close-line" },
    { label: "座席", value: "カウンター 6席 / ボックス 4席", icon: "ri-sofa-line" },
  ];

  return (
    <section
      id="info"
      ref={rootRef}
      className="relative py-24 md:py-32 px-4 md:px-6 bg-ink-950"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section header */}
        <div className="info-item text-center mb-16 md:mb-20">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-copper-400 font-mono mb-4">
            <span className="w-8 h-px bg-copper-400" />
            Store Information
            <span className="w-8 h-px bg-copper-400" />
          </span>
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl tracking-tightest leading-[1.02] text-white text-balance">
            店舗情報
          </h2>
        </div>

        {/* Two column layout: info left, image right */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch">
          {/* Left: Store info */}
          <div className="w-full lg:w-1/2 flex flex-col gap-1">
            {infoRows.map((row) => (
              <div
                key={row.label}
                className="info-item flex items-start gap-4 py-5 border-b border-white/10"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className={`${row.icon} text-copper-400 w-5 h-5 flex items-center justify-center`} />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-mono">
                    {row.label}
                  </span>
                  {row.isTel ? (
                    <a
                      href="tel:0197-72-8033"
                      className="text-white text-base md:text-lg hover:text-copper-400 transition-colors cursor-pointer whitespace-pre-line"
                    >
                      {row.value}
                    </a>
                  ) : (
                    <span className="text-white text-base md:text-lg whitespace-pre-line leading-relaxed">
                      {row.value}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right: Store image */}
          <div className="w-full lg:w-1/2 info-image h-full">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 h-full">
              <img
                src="https://readdy.ai/api/search-image?query=Elegant%20Japanese%20lounge%20interior%20photography%2C%20warm%20pink%20ambient%20lighting%20and%20rose%20colored%20accent%20lights%2C%20soft%20pink%20bokeh%20glow%20over%20polished%20dark%20wooden%20bar%20counter%2C%20premium%20leather%20counter%20seats%2C%20crystal%20glassware%20on%20shelves%2C%20moody%20intimate%20atmosphere%2C%20sophisticated%20adult%20nightlife%20space%2C%20dark%20walls%20with%20pink%20and%20rose%20gold%20accents%2C%20no%20people%2C%20high-end%20editorial%20interior%20photography%2C%20ultra%20realistic%20textures&width=1200&height=900&seq=lounge-es-interior-pink-01&orientation=landscape"
                alt="Lounge es 店内"
                className="w-full h-full object-cover object-top"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}