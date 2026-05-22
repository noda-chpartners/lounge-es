import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const standardFeatures = [
  "飲み放題（基本ドリンク）",
  "レディースドリンク別 一杯700円",
  "別途TAX15%",
];

const setFeatures = [
  "セット料金 時間無制限",
  "アイス / ミネラル / 炭酸 各700円",
  "ピッチャー 1000円",
  "ボトルキープ 3500円〜",
];

export default function PlanSection() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".plan-header",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 85%",
          },
        }
      );
      gsap.fromTo(
        ".plan-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 75%",
          },
        }
      );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="plan"
      ref={rootRef}
      className="relative py-24 md:py-32 px-4 md:px-6 bg-ink-950"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section header */}
        <div className="plan-header text-center mb-16 md:mb-20">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-copper-400 font-mono mb-4">
            <span className="w-8 h-px bg-copper-400" />
            Pricing
            <span className="w-8 h-px bg-copper-400" />
          </span>
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl tracking-tightest leading-[1.02] text-white text-balance">
            料金プラン
          </h2>
          <p className="text-white/50 mt-4 text-sm md:text-base max-w-lg mx-auto">
            ご利用シーンに合わせて、最適なプランをお選びください。
          </p>
        </div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto items-stretch">
          {/* Standard Plan */}
          <div
            className="plan-card relative flex flex-col h-full rounded-2xl border p-6 md:p-8 transition-all hover:-translate-y-1 border-white/10 bg-white/[0.02] hover:border-white/20"
          >
            <h3 className="text-lg font-medium text-white mt-2 mb-1">
              飲み放題 スタンダードプラン
            </h3>
            <p className="text-sm text-white/50 leading-relaxed mb-6">
              お一人様から気軽にご利用いただけるスタンダードプラン。
            </p>

            <div className="flex flex-col gap-3 mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                  ¥3,500
                </span>
                <span className="text-sm text-white/40">/ 1時間 1名様</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl md:text-3xl font-semibold text-white/80 tracking-tight">
                  ¥3,000
                </span>
                <span className="text-sm text-white/40">/ 1時間 2名様〜</span>
              </div>
            </div>

            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {standardFeatures.map((feat) => (
                <li
                  key={feat}
                  className="flex items-start gap-2.5 text-sm text-white/70"
                >
                  <i className="ri-check-line text-copper-400 mt-0.5 w-4 h-4 flex items-center justify-center flex-shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <a
              href="tel:0197-72-8033"
              className="mt-auto w-full inline-flex items-center justify-center gap-2 py-3 rounded-full text-sm font-medium transition-all cursor-pointer whitespace-nowrap bg-white/5 border border-white/10 text-white hover:bg-white/10"
            >
              <i className="ri-phone-line w-4 h-4 flex items-center justify-center" />
              電話で予約する
            </a>
          </div>

          {/* Set Plan */}
          <div
            className="plan-card relative flex flex-col h-full rounded-2xl border p-6 md:p-8 transition-all hover:-translate-y-1 border-copper-500/60 bg-gradient-to-b from-copper-500/10 to-transparent"
          >
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-copper-500 text-ink-950 text-[11px] font-semibold uppercase tracking-wider whitespace-nowrap">
              <i className="ri-star-fill w-3 h-3 flex items-center justify-center" />
              人気No.1
            </span>

            <h3 className="text-lg font-medium text-white mt-2 mb-1">
              セット料金プラン
            </h3>
            <p className="text-sm text-white/50 leading-relaxed mb-6">
              時間無制限でゆっくりとお楽しみいただけます。
            </p>

            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                ¥2,500
              </span>
              <span className="text-sm text-white/40">/ お一人様 時間無制限</span>
            </div>

            <div className="mb-4">
              <h4 className="text-xs uppercase tracking-[0.2em] text-copper-400 font-mono mb-3">
                割りもの
              </h4>
              <ul className="flex flex-col gap-2 mb-4">
                <li className="flex items-start gap-2.5 text-sm text-white/70">
                  <i className="ri-drop-line text-copper-400 w-4 h-4 flex items-center justify-center flex-shrink-0" />
                  <span>アイス 700円</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-white/70">
                  <i className="ri-drop-line text-copper-400 w-4 h-4 flex items-center justify-center flex-shrink-0" />
                  <span>ミネラル 700円</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-white/70">
                  <i className="ri-bubble-chart-line text-copper-400 w-4 h-4 flex items-center justify-center flex-shrink-0" />
                  <span>炭酸 700円</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-white/70">
                  <i className="ri-goblet-line text-copper-400 w-4 h-4 flex items-center justify-center flex-shrink-0" />
                  <span>ピッチャー 1000円</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-white/70">
                  <i className="ri-vip-diamond-line text-copper-400 w-4 h-4 flex items-center justify-center flex-shrink-0" />
                  <span>ボトルキープ 3500円〜</span>
                </li>
              </ul>
            </div>

            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {setFeatures.map((feat) => (
                <li
                  key={feat}
                  className="flex items-start gap-2.5 text-sm text-white/70"
                >
                  <i className="ri-check-line text-copper-400 mt-0.5 w-4 h-4 flex items-center justify-center flex-shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <a
              href="tel:0197-72-8033"
              className="mt-auto w-full inline-flex items-center justify-center gap-2 py-3 rounded-full text-sm font-medium transition-all cursor-pointer whitespace-nowrap bg-copper-500 text-ink-950 hover:bg-copper-400"
            >
              <i className="ri-phone-line w-4 h-4 flex items-center justify-center" />
              電話で予約する
            </a>
          </div>
        </div>

        <p className="text-center text-xs text-white/30 mt-10 font-mono tracking-wide">
          ※ 詳細はお電話にてお問い合わせください。
        </p>
      </div>
    </section>
  );
}