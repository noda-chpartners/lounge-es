import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to the top whenever the route changes.
 * Works with Lenis smooth scroll if available.
 */
export function useScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    const lenis = window.__lenis__;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [pathname]);
}