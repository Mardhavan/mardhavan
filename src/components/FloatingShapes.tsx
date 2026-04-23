const FloatingShapes = () => {
  // Generate random small particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 4,
    duration: Math.random() * 3 + 2,
    type: Math.random() > 0.5 ? 'sparkle' : 'twinkle',
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating circles */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/10 animate-float" style={{ animationDelay: '0s', animationDuration: '6s' }} />
      <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-accent/10 animate-float" style={{ animationDelay: '1s', animationDuration: '8s' }} />
      <div className="absolute bottom-32 left-1/4 w-12 h-12 rounded-full bg-secondary/10 animate-float" style={{ animationDelay: '2s', animationDuration: '7s' }} />
      
      {/* Floating squares */}
      <div className="absolute top-1/3 left-20 w-8 h-8 rotate-45 bg-primary/5 animate-float" style={{ animationDelay: '0.5s', animationDuration: '9s' }} />
      <div className="absolute bottom-40 right-1/4 w-14 h-14 rotate-12 bg-accent/5 animate-float" style={{ animationDelay: '1.5s', animationDuration: '7s' }} />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-xl animate-float" style={{ animationDelay: '0.7s', animationDuration: '10s' }} />
      <div className="absolute bottom-1/4 left-10 w-40 h-40 rounded-full bg-gradient-to-tr from-accent/10 to-transparent blur-xl animate-float" style={{ animationDelay: '2.5s', animationDuration: '8s' }} />
      
      {/* Rings */}
      <div className="absolute top-16 right-1/4 w-24 h-24 rounded-full border border-primary/10 animate-float" style={{ animationDelay: '2s', animationDuration: '11s' }} />
      <div className="absolute bottom-1/3 left-16 w-16 h-16 rounded-full border border-accent/10 animate-float" style={{ animationDelay: '1.8s', animationDuration: '9s' }} />

      {/* Sparkle particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute rounded-full ${particle.type === 'sparkle' ? 'animate-sparkle bg-primary/40' : 'animate-twinkle bg-accent/30'}`}
          style={{
            width: particle.size,
            height: particle.size,
            top: particle.top,
            left: particle.left,
            '--sparkle-duration': `${particle.duration}s`,
            '--twinkle-duration': `${particle.duration + 1}s`,
            animationDelay: `${particle.delay}s`,
          } as React.CSSProperties}
        />
      ))}

      {/* Additional medium sparkle dots */}
      <div className="absolute top-[15%] left-[25%] w-2 h-2 rounded-full bg-primary/50 animate-sparkle" style={{ '--sparkle-duration': '1.5s', animationDelay: '0.2s' } as React.CSSProperties} />
      <div className="absolute top-[45%] right-[15%] w-3 h-3 rounded-full bg-accent/40 animate-twinkle" style={{ '--twinkle-duration': '2.5s', animationDelay: '0.8s' } as React.CSSProperties} />
      <div className="absolute bottom-[25%] left-[45%] w-2 h-2 rounded-full bg-secondary/50 animate-sparkle" style={{ '--sparkle-duration': '2s', animationDelay: '1.2s' } as React.CSSProperties} />
      <div className="absolute top-[70%] left-[15%] w-2.5 h-2.5 rounded-full bg-primary/30 animate-twinkle" style={{ '--twinkle-duration': '3s', animationDelay: '0.5s' } as React.CSSProperties} />
      <div className="absolute top-[25%] right-[35%] w-1.5 h-1.5 rounded-full bg-accent/60 animate-sparkle" style={{ '--sparkle-duration': '1.8s', animationDelay: '1.5s' } as React.CSSProperties} />
      <div className="absolute bottom-[45%] right-[25%] w-2 h-2 rounded-full bg-primary/40 animate-twinkle" style={{ '--twinkle-duration': '2.2s', animationDelay: '0.3s' } as React.CSSProperties} />
    </div>
  );
};

export default FloatingShapes;
