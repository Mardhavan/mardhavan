import { useRef, type ReactNode } from "react";

/**
 * Magnetic hover wrapper — subtle pull toward the cursor.
 * No-ops on touch devices and under prefers-reduced-motion.
 */
const Magnetic = ({
  children,
  strength = 0.22,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);

  const enabled = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const onMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    const node = ref.current;
    if (!node || !enabled()) return;
    const rect = node.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    node.style.transform = `translate3d(${dx * strength}px, ${dy * strength}px, 0)`;
  };

  const reset = () => {
    const node = ref.current;
    if (node) node.style.transform = "translate3d(0,0,0)";
  };

  return (
    <span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={`inline-block will-change-transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${className}`}
    >
      {children}
    </span>
  );
};

export default Magnetic;
