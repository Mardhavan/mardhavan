import { useEffect, useRef } from "react";

/**
 * Soft cursor-reactive glow. Pointer-fine devices only, rAF-throttled,
 * disabled under prefers-reduced-motion. Transform-only (GPU friendly).
 */
const CursorGlow = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let cx = x;
    let cy = y;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      node.style.opacity = "1";
    };

    const loop = () => {
      cx += (x - cx) * 0.08;
      cy += (y - cy) * 0.08;
      node.style.transform = `translate3d(${cx - 320}px, ${cy - 320}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 h-[640px] w-[640px] rounded-full opacity-0 transition-opacity duration-700"
      style={{
        background:
          "radial-gradient(circle, hsl(var(--primary) / 0.10) 0%, hsl(var(--primary) / 0.04) 35%, transparent 68%)",
      }}
    />
  );
};

export default CursorGlow;
