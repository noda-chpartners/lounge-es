import { marqueeWords } from "@/mocks/home";

export default function Marquee() {
  const items = [...marqueeWords, ...marqueeWords];
  return (
    <div className="relative bg-ink-900 border-y border-white/5 py-6 overflow-hidden">
      <div className="flex marquee-track whitespace-nowrap gap-12 will-change-transform">
        {items.map((word, idx) => (
          <div key={`${word}-${idx}`} className="flex items-center gap-12 shrink-0">
            <span className="text-3xl md:text-4xl font-serif italic text-white/80">
              {word}
            </span>
            <span className="w-2 h-2 rounded-full bg-copper-500" />
          </div>
        ))}
      </div>
    </div>
  );
}