import { useMemo } from "react";

const StarField = () => {
  const stars = useMemo(() => 
    Array.from({ length: 120 }, (_, i) => ({
      id: i,
      size: Math.random() * 2.5 + 0.5,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
      opacity: Math.random() * 0.7 + 0.1,
    })),
  []);

  const shootingStars = useMemo(() => [
    { top: '10%', left: '20%', delay: 0, duration: 1.5, angle: 35 },
    { top: '5%', left: '60%', delay: 4, duration: 1.2, angle: 40 },
    { top: '15%', left: '80%', delay: 8, duration: 1.8, angle: 30 },
    { top: '25%', left: '40%', delay: 12, duration: 1.3, angle: 45 },
  ], []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            width: star.size,
            height: star.size,
            top: star.top,
            left: star.left,
            opacity: star.opacity,
            '--twinkle-duration': `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          } as React.CSSProperties}
        />
      ))}

      {/* Shooting stars */}
      {shootingStars.map((ss, i) => (
        <div
          key={`ss-${i}`}
          className="shooting-star"
          style={{
            top: ss.top,
            left: ss.left,
            '--angle': `${ss.angle}deg`,
            '--duration': `${ss.duration}s`,
            '--delay': `${ss.delay}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default StarField;
