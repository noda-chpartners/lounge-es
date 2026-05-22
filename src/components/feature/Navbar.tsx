import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { to: "/", label: "ホーム" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink-950/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="px-6 md:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 cursor-pointer group">
          <div className="w-9 h-9 rounded-md bg-copper-500 flex items-center justify-center relative overflow-hidden">
            <span className="text-ink-950 font-serif text-lg leading-none">S</span>
            <div className="absolute inset-0 bg-gradient-to-tr from-copper-600 to-copper-300 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white font-semibold tracking-tight text-base">
              Lounge es
            </span>
            <span className="text-[10px] text-white/40 uppercase tracking-[0.25em] mt-1 font-mono">
              Premium Lounge
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-1.5 py-1.5 backdrop-blur-md">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `relative text-sm px-4 py-1.5 rounded-full transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "text-ink-950 bg-white"
                    : "text-white/70 hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href="#info"
            className="text-sm px-4 py-1.5 rounded-full text-white/70 hover:text-white transition-all whitespace-nowrap cursor-pointer"
          >
            店舗情報
          </a>
          <a
            href="#contact"
            className="text-sm px-4 py-1.5 rounded-full text-white/70 hover:text-white transition-all whitespace-nowrap cursor-pointer"
          >
            お問い合わせ
          </a>
          <a
            href="tel:0197-72-8033"
            className="text-sm px-4 py-1.5 rounded-full text-white/70 hover:text-white transition-all whitespace-nowrap cursor-pointer"
          >
            ご予約
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://www.instagram.com/m4yu._.u_?igsh=dnVsdWprZXAwaWlj&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-copper-500 hover:border-copper-500 hover:text-ink-950 text-white/70 flex items-center justify-center transition-all cursor-pointer"
            aria-label="Instagram"
          >
            <i className="ri-instagram-line text-lg w-5 h-5 flex items-center justify-center" />
          </a>
          <a
            href="tel:0197-72-8033"
            className="w-10 h-10 rounded-full bg-copper-500 hover:bg-copper-400 transition-colors flex items-center justify-center cursor-pointer"
            aria-label="電話で予約"
          >
            <i className="ri-phone-line text-ink-950 text-lg w-5 h-5 flex items-center justify-center" />
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer"
          aria-label="メニュー"
        >
          <i
            className={`${
              open ? "ri-close-line" : "ri-menu-line"
            } text-white text-xl w-5 h-5 flex items-center justify-center`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-2 flex flex-col gap-1 bg-ink-950/95 backdrop-blur-xl border-b border-white/5">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `text-sm px-4 py-3 rounded-md transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "text-ink-950 bg-white"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href="#info"
            className="text-sm px-4 py-3 rounded-md text-white/70 hover:text-white hover:bg-white/5 transition-all whitespace-nowrap cursor-pointer"
          >
            店舗情報
          </a>
          <a
            href="#contact"
            className="text-sm px-4 py-3 rounded-md text-white/70 hover:text-white hover:bg-white/5 transition-all whitespace-nowrap cursor-pointer"
          >
            お問い合わせ
          </a>
          <a
            href="https://www.instagram.com/m4yu._.u_?igsh=dnVsdWprZXAwaWlj&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-3 rounded-md text-white/70 hover:text-white hover:bg-white/5 transition-all whitespace-nowrap cursor-pointer"
          >
            Instagram
          </a>
          <a
            href="tel:0197-72-8033"
            className="mt-2 text-sm px-4 py-3 rounded-md bg-copper-500 text-ink-950 font-medium text-center cursor-pointer whitespace-nowrap"
          >
            電話でご予約 0197-72-8033
          </a>
        </div>
      </div>
    </header>
  );
}