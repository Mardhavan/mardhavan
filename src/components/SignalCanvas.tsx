import { useEffect, useRef } from "react";

/** A lightweight, theme-aware field of flowing commercial signal paths. */
const SignalCanvas = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let width = 0;
    let height = 0;
    let time = 0;
    let primary = "";
    let accent = "";
    let last = 0;
    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const colors = () => {
      const style = getComputedStyle(document.documentElement);
      primary = style.getPropertyValue("--primary").trim();
      accent = style.getPropertyValue("--accent").trim();
    };
    const draw = () => {
      context.clearRect(0, 0, width, height);
      pointer.x += (pointer.targetX - pointer.x) * 0.04;
      pointer.y += (pointer.targetY - pointer.y) * 0.04;
      const lines = width < 640 ? 18 : 32;
      for (let i = 0; i < lines; i++) {
        context.beginPath();
        context.strokeStyle = `hsl(${i % 7 === 0 ? accent : primary} / ${i % 7 === 0 ? 0.28 : 0.12})`;
        context.lineWidth = i % 7 === 0 ? 1.2 : 0.65;
        for (let step = 0; step <= 80; step++) {
          const u = step / 80;
          const x = u * width;
          const spread = (i - lines / 2) * (10 + 28 * u);
          const y = height * 0.62 + Math.sin(u * 5.2 + time + i * 0.06) * height * 0.15 + spread + pointer.y * u * 18;
          if (step === 0) context.moveTo(x, y);
          else context.lineTo(x + pointer.x * u * 12, y);
        }
        context.stroke();
      }
    };
    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      const ratio = Math.min(devicePixelRatio, 1.5);
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      colors();
      draw();
    };
    const tick = (now: number) => {
      if (now - last > 32 && !document.hidden) {
        time += Math.min((now - last) / 1000, 0.05) * 0.22;
        last = now;
        draw();
      }
      frame = requestAnimationFrame(tick);
    };
    const move = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      pointer.targetX = event.clientX / innerWidth - 0.5;
      pointer.targetY = event.clientY / innerHeight - 0.5;
    };
    const theme = () => { colors(); draw(); };
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    window.addEventListener("themechange", theme);
    resize();
    if (!motion.matches) {
      frame = requestAnimationFrame(tick);
      window.addEventListener("pointermove", move, { passive: true });
    }
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("themechange", theme);
      window.removeEventListener("pointermove", move);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className="signal-canvas pointer-events-none absolute inset-0 h-full w-full" />;
};

export default SignalCanvas;