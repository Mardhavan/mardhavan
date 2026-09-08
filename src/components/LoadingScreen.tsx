import { useEffect, useState } from "react";

const LoadingScreen = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsExiting(true);
          setTimeout(onLoadComplete, 400);
          return 100;
        }
        return prev + Math.random() * 15 + 6;
      });
    }, 90);
    return () => clearInterval(timer);
  }, [onLoadComplete]);

  return (
    <div
      className={`fixed inset-0 z-[70] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_40%_at_50%_50%,hsl(var(--primary)/0.10),transparent_70%)]"
      />
      <div className="relative w-64">
        <div className="font-mono-ui text-sm uppercase tracking-[0.4em]">
          M<span className="text-primary">A</span>
        </div>
        <div className="mt-5 h-px w-full bg-border">
          <div
            className="h-px bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.8)] transition-all duration-200 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        <div className="mt-3 flex justify-between font-mono-ui text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          <span>Loading</span>
          <span>{Math.min(Math.round(progress), 100)}%</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
