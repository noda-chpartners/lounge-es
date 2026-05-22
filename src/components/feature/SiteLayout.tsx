import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useScrollToTop } from "@/hooks/useScrollToTop";

interface SiteLayoutProps {
  children: ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  useScrollToTop();
  return (
    <div className="min-h-screen bg-ink-950 text-white flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}