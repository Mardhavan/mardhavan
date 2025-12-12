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
      
      {/* New geometric shapes - Triangles */}
      <div className="absolute top-[10%] left-[60%] w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[26px] border-b-primary/10 animate-float" style={{ animationDelay: '0.3s', animationDuration: '8s' }} />
      <div className="absolute bottom-[20%] right-[10%] w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-accent/10 animate-float" style={{ animationDelay: '1.2s', animationDuration: '10s' }} />
      <div className="absolute top-[55%] left-[5%] w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[21px] border-b-secondary/10 animate-float" style={{ animationDelay: '2.2s', animationDuration: '7s' }} />
      
      {/* Hexagons using clip-path */}
      <div className="absolute top-[30%] right-[5%] w-16 h-14 bg-primary/8 animate-float" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', animationDelay: '0.8s', animationDuration: '11s' }} />
      <div className="absolute bottom-[15%] left-[40%] w-12 h-10 bg-accent/8 animate-float" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', animationDelay: '1.8s', animationDuration: '9s' }} />
      
      {/* Diamond shapes */}
      <div className="absolute top-[65%] right-[30%] w-10 h-10 rotate-45 bg-primary/6 animate-float" style={{ animationDelay: '0.6s', animationDuration: '8s' }} />
      <div className="absolute top-[8%] left-[35%] w-8 h-8 rotate-45 bg-accent/6 animate-float" style={{ animationDelay: '1.4s', animationDuration: '10s' }} />
      <div className="absolute bottom-[40%] left-[8%] w-6 h-6 rotate-45 bg-secondary/6 animate-float" style={{ animationDelay: '2.4s', animationDuration: '7s' }} />
      
      {/* Plus/Cross shapes */}
      <div className="absolute top-[40%] left-[70%] w-6 h-6 animate-float" style={{ animationDelay: '0.4s', animationDuration: '9s' }}>
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-primary/15 -translate-y-1/2" />
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-primary/15 -translate-x-1/2" />
      </div>
      <div className="absolute bottom-[55%] right-[45%] w-8 h-8 animate-float" style={{ animationDelay: '1.6s', animationDuration: '8s' }}>
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-accent/15 -translate-y-1/2" />
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-accent/15 -translate-x-1/2" />
      </div>
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-xl animate-float" style={{ animationDelay: '0.7s', animationDuration: '10s' }} />
      <div className="absolute bottom-1/4 left-10 w-40 h-40 rounded-full bg-gradient-to-tr from-accent/10 to-transparent blur-xl animate-float" style={{ animationDelay: '2.5s', animationDuration: '8s' }} />
      
      {/* Rings */}
      <div className="absolute top-16 right-1/4 w-24 h-24 rounded-full border border-primary/10 animate-float" style={{ animationDelay: '2s', animationDuration: '11s' }} />
      <div className="absolute bottom-1/3 left-16 w-16 h-16 rounded-full border border-accent/10 animate-float" style={{ animationDelay: '1.8s', animationDuration: '9s' }} />
      
      {/* Double rings */}
      <div className="absolute top-[75%] right-[15%] w-20 h-20 rounded-full border border-primary/8 animate-float" style={{ animationDelay: '0.9s', animationDuration: '10s' }}>
        <div className="absolute inset-2 rounded-full border border-accent/8" />
      </div>
      
      {/* Dotted circle */}
      <div className="absolute top-[20%] left-[80%] w-14 h-14 rounded-full border border-dashed border-primary/10 animate-float" style={{ animationDelay: '1.1s', animationDuration: '12s' }} />

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
