import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-ink-900 text-white px-6 md:px-10 pt-20 pb-10 border-t border-white/5">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-copper-500/60 to-transparent" />

      <div className="max-w-[1400px] mx-auto">
        {/* Top: brand + info */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 pb-16 border-b border-white/5">
          <div className="lg:w-2/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-md bg-copper-500 flex items-center justify-center">
                <span className="text-ink-950 font-serif text-xl leading-none">S</span>
              </div>
              <span className="text-white font-semibold tracking-tight text-lg">
                Lounge es
              </span>
            </div>

            <a
              href="https://www.instagram.com/m4yu._.u_?igsh=dnVsdWprZXAwaWlj&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-copper-400 transition-colors cursor-pointer"
            >
              <i className="ri-instagram-line w-4 h-4 flex items-center justify-center" />
              Instagram
            </a>
          </div>

          <div className="lg:flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.25em] text-white/40 font-mono mb-4">
                店舗情報
              </h4>
              <ul className="flex flex-col gap-3">
                <li className="text-sm text-white/80 flex items-start gap-2">
                  <i className="ri-map-pin-line text-copper-400 mt-0.5 w-4 h-4 flex items-center justify-center flex-shrink-0" />
                  <span>岩手県北上市諏訪町二丁目1-24<br />第二ふくろうビル2-A</span>
                </li>
                <li className="text-sm text-white/80 flex items-center gap-2">
                  <i className="ri-phone-line text-copper-400 w-4 h-4 flex items-center justify-center flex-shrink-0" />
                  <a href="tel:0197-72-8033" className="hover:text-copper-400 transition-colors cursor-pointer">0197-72-8033</a>
                </li>
                <li className="text-sm text-white/80 flex items-center gap-2">
                  <i className="ri-time-line text-copper-400 w-4 h-4 flex items-center justify-center flex-shrink-0" />
                  <span>20:30〜01:00</span>
                </li>
                <li className="text-sm text-white/80 flex items-center gap-2">
                  <i className="ri-calendar-close-line text-copper-400 w-4 h-4 flex items-center justify-center flex-shrink-0" />
                  <span>定休日：日曜日</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.25em] text-white/40 font-mono mb-4">
                アクセス
              </h4>
              <ul className="flex flex-col gap-3">
                <li className="text-sm text-white/80 flex items-center gap-2">
                  <i className="ri-train-line text-copper-400 w-4 h-4 flex items-center justify-center flex-shrink-0" />
                  <span>北上駅 徒歩5分</span>
                </li>
                <li className="text-sm text-white/80 flex items-start gap-2">
                  <i className="ri-sofa-line text-copper-400 mt-0.5 w-4 h-4 flex items-center justify-center flex-shrink-0" />
                  <span>カウンター 6席<br />ボックス 4席</span>
                </li>
                <li className="text-sm text-white/80 flex items-center gap-2">
                  <i className="ri-instagram-line text-copper-400 w-4 h-4 flex items-center justify-center flex-shrink-0" />
                  <a
                    href="https://www.instagram.com/m4yu._.u_?igsh=dnVsdWprZXAwaWlj&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-copper-400 transition-colors cursor-pointer"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}