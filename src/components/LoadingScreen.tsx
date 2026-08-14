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
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-opacity duration-400 ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="w-64">
        <div className="font-mono-ui text-sm uppercase tracking-[0.3em]">
          M<span className="text-primary">A</span>
        </div>
        <div className="mt-4 h-px w-full bg-border">
          <div
            className="h-px bg-primary transition-all duration-200 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        <div className="mt-3 flex justify-between font-mono-ui text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          <span>Loading</span>
          <span>{Math.min(Math.round(progress), 100)}%</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
