import { useEffect, useState } from 'react';

interface ShootingStar {
  id: number;
  top: string;
  left: string;
  delay: number;
  duration: number;
  angle: number;
}

const ShootingStars = () => {
  const [stars, setStars] = useState<ShootingStar[]>([]);

  useEffect(() => {
    // Generate initial shooting stars
    const generateStars = () => {
      const newStars: ShootingStar[] = Array.from({ length: 5 }, (_, i) => ({
        id: i,
        top: `${Math.random() * 50}%`,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 8,
        duration: Math.random() * 1.5 + 0.8,
        angle: Math.random() * 20 + 35,
      }));
      setStars(newStars);
    };

    generateStars();
    
    // Regenerate stars periodically
    const interval = setInterval(generateStars, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="shooting-star"
          style={{
            top: star.top,
            left: star.left,
            '--delay': `${star.delay}s`,
            '--duration': `${star.duration}s`,
            '--angle': `${star.angle}deg`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default ShootingStars;
