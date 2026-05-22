import { useEffect, useRef, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";

/**
 * Wraps content with a fade-in animation on every route change.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    gsap.fromTo(
      el,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.55, ease: "power3.out" }
    );
  }, [location.pathname]);

  return (
    <div ref={containerRef} className="min-h-screen">
      {children}
    </div>
  );
}