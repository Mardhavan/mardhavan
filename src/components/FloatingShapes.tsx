const FloatingShapes = () => {
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
      
      {/* Small dots */}
      <div className="absolute top-1/2 left-1/3 w-3 h-3 rounded-full bg-primary/20 animate-float" style={{ animationDelay: '3s', animationDuration: '5s' }} />
      <div className="absolute top-60 right-1/3 w-4 h-4 rounded-full bg-secondary/20 animate-float" style={{ animationDelay: '1.2s', animationDuration: '6s' }} />
      <div className="absolute bottom-20 right-10 w-2 h-2 rounded-full bg-accent/30 animate-float" style={{ animationDelay: '0.3s', animationDuration: '4s' }} />
      
      {/* Rings */}
      <div className="absolute top-16 right-1/4 w-24 h-24 rounded-full border border-primary/10 animate-float" style={{ animationDelay: '2s', animationDuration: '11s' }} />
      <div className="absolute bottom-1/3 left-16 w-16 h-16 rounded-full border border-accent/10 animate-float" style={{ animationDelay: '1.8s', animationDuration: '9s' }} />
    </div>
  );
};

export default FloatingShapes;
