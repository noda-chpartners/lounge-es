import { Link } from "react-router-dom";
import SiteLayout from "@/components/feature/SiteLayout";

export default function NotFound() {
  return (
    <SiteLayout>
      <div className="relative flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
        <h1 className="absolute bottom-0 text-9xl md:text-[12rem] font-black text-white/[0.03] select-none pointer-events-none z-0">
          404
        </h1>
        <div className="relative z-10 flex flex-col items-center gap-6">
          <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
            <i className="ri-ghost-line text-white/30 text-2xl w-6 h-6 flex items-center justify-center" />
          </div>
          <h2 className="text-xl md:text-3xl font-semibold text-white">
            Page not found
          </h2>
          <p className="text-white/50 text-base max-w-md">
            The route you requested doesn't exist in our stack. Double-check the path or head back.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-copper-500 text-ink-950 hover:bg-copper-400 transition-all cursor-pointer whitespace-nowrap text-sm font-medium uppercase tracking-wider"
          >
            <i className="ri-arrow-left-line text-base w-4 h-4 flex items-center justify-center" />
            Back to home
          </Link>
        </div>
      </div>
    </SiteLayout>
  );
}