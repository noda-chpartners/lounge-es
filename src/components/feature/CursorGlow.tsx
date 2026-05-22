import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * A subtle cursor-following glow. Only visible on desktop.
 */
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return; // skip touch
    const el = ref.current;
    if (!el) return;

    const move = (e: MouseEvent) => {
      gsap.to(el, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    const onEnterInteractive = () => {
      gsap.to(el, { scale: 1.6, opacity: 0.5, duration: 0.35, ease: "power3.out" });
    };
    const onLeaveInteractive = () => {
      gsap.to(el, { scale: 1, opacity: 0.3, duration: 0.35, ease: "power3.out" });
    };

    window.addEventListener("mousemove", move, { passive: true });

    const targets = document.querySelectorAll(
      "a, button, [role=button], input, textarea, select"
    );
    targets.forEach((t) => {
      t.addEventListener("mouseenter", onEnterInteractive);
      t.addEventListener("mouseleave", onLeaveInteractive);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      targets.forEach((t) => {
        t.removeEventListener("mouseenter", onEnterInteractive);
        t.removeEventListener("mouseleave", onLeaveInteractive);
      });
    };
  }, []);

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block"
      style={{ transform: "translate(-50%, -50%)" }}
    >
      <div
        className="w-64 h-64 rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(233,106,31,0.18) 0%, rgba(233,106,31,0) 70%)",
        }}
      />
    </div>
  );
}