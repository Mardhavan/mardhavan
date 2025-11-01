import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 md:px-0 py-20 md:py-24 relative overflow-hidden bg-gradient-to-br from-background via-purple-50/30 to-background">
      <div className="w-full max-w-full md:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="space-y-4 md:space-y-6 animate-in fade-in slide-in-from-left duration-700 w-full">
            <p className="text-base md:text-lg lg:text-xl font-medium" style={{ color: 'hsl(25, 95%, 53%)' }}>Hello, I'm</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight gradient-text">
              MARDHAVAN ABBATHINI
            </h1>
            
            {/* Photo on mobile - shown here */}
            <div className="flex justify-center md:hidden py-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-hero rounded-full blur-[60px] opacity-40 animate-pulse"></div>
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-glow float-animation">
                  <img 
                    src={profilePhoto} 
                    alt="Mardhavan Abbathini - Business Development Associate" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-semibold pt-2">
              Business Development Associate
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl pt-2">
              Delivering Data-Driven Insights with Modern CRM Solutions
            </p>
            <p className="text-sm md:text-base text-muted-foreground/80 leading-relaxed max-w-2xl">
              Transforming business challenges into growth opportunities through strategic B2C sales, 
              client acquisition, and data-driven CRM solutions.
            </p>
            <div className="flex flex-wrap gap-4 pt-6">
            <Button 
                size="lg" 
                className="group bg-gradient-to-r from-primary via-accent to-secondary text-white hover:shadow-glow hover:scale-105 transition-all duration-300 border-0 text-base font-semibold px-8"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a 
                href="/MARDHAVAN_ABBATHINI_BDA.pdf" 
                download="Mardhavan_Abbathini_Resume.pdf"
                className="group inline-flex items-center justify-center gap-2 h-11 rounded-md px-8 bg-gradient-to-r from-primary via-accent to-secondary text-white hover:shadow-glow hover:scale-105 transition-all duration-300 font-semibold text-base border-0"
              >
                <Download className="h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </a>
            </div>
          </div>
          
          {/* Photo on desktop - shown here */}
          <div className="hidden md:flex justify-center items-center animate-in fade-in slide-in-from-right duration-700 delay-200">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero rounded-full blur-[80px] opacity-40 animate-pulse"></div>
              <div className="relative w-80 h-80 lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px] rounded-full overflow-hidden border-4 border-primary/20 shadow-glow float-animation">
                <img 
                  src={profilePhoto} 
                  alt="Mardhavan Abbathini - Business Development Associate" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
