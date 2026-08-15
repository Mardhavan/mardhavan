import { useEffect, useRef } from "react";

/**
 * Restrained ambient particle field.
 * - Slow drift, subtle cursor parallax, soft connecting filaments.
 * - Fully static (no rAF loop) when the user prefers reduced motion.
 */
const ParticleField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = 0;
    let height = 0;
    let raf = 0;

    type P = { x: number; y: number; vx: number; vy: number; r: number; a: number };
    let particles: P[] = [];

    const pointer = { x: -9999, y: -9999, tx: -9999, ty: -9999 };

    const seed = () => {
      const density = window.innerWidth < 768 ? 26000 : 17000;
      const count = Math.min(90, Math.max(24, Math.round((width * height) / density)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
        r: Math.random() * 1.3 + 0.5,
        a: Math.random() * 0.4 + 0.18,
      }));
    };

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
      if (reduceMotion) draw(true);
    };

    function draw(staticFrame = false) {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // filaments
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < 120) {
            ctx.strokeStyle = `hsla(38, 90%, 62%, ${(1 - dist / 120) * 0.05})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        const dx = p.x - pointer.x;
        const dy = p.y - pointer.y;
        const d = Math.hypot(dx, dy);
        const near = d < 150 ? 1 - d / 150 : 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r + near * 0.9, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${40 - near * 6}, ${60 + near * 30}%, ${72 + near * 10}%, ${p.a + near * 0.35})`;
        ctx.fill();

        if (!staticFrame) {
          p.x += p.vx + (near ? (-dx / (d || 1)) * near * 0.25 : 0);
          p.y += p.vy + (near ? (-dy / (d || 1)) * near * 0.25 : 0);
          if (p.x < -20) p.x = width + 20;
          if (p.x > width + 20) p.x = -20;
          if (p.y < -20) p.y = height + 20;
          if (p.y > height + 20) p.y = -20;
        }
      }
    }

    const loop = () => {
      pointer.x += (pointer.tx - pointer.x) * 0.06;
      pointer.y += (pointer.ty - pointer.y) * 0.06;
      draw();
      raf = requestAnimationFrame(loop);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      const rect = canvas.getBoundingClientRect();
      pointer.tx = e.clientX - rect.left;
      pointer.ty = e.clientY - rect.top;
    };

    const onPointerLeave = () => {
      pointer.tx = -9999;
      pointer.ty = -9999;
    };

    resize();
    window.addEventListener("resize", resize);

    if (!reduceMotion) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      window.addEventListener("pointerleave", onPointerLeave);
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <canvas ref={canvasRef} className="h-full w-full opacity-70" />
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-background/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background/85 to-transparent" />
    </div>
  );
};

export default ParticleField;
