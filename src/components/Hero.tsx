import { Linkedin, Download } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 md:px-12 py-20 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          <div className="space-y-4 animate-in fade-in slide-in-from-left duration-700 w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
              Hi, I'm
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              <span className="gradient-text">Mardhavan</span>
            </h1>
            
            <div className="flex flex-wrap gap-3 pt-6">
              <a
                href="https://www.linkedin.com/in/mardhavan-abbathini-b34b59259"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:scale-105 transition-all duration-300 hover:shadow-glow"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
              <a 
                href="/MARDHAVAN_ABBATHINI_BDA.pdf" 
                download="Mardhavan_Abbathini_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-primary/30 text-foreground font-semibold hover:scale-105 hover:border-primary/60 transition-all duration-300"
              >
                <Download className="h-5 w-5" />
                Resume
              </a>
            </div>
          </div>
          
          {/* Hero illustration */}
          <div className="flex justify-center items-center animate-in fade-in slide-in-from-right duration-700 delay-200">
            <div className="relative float-animation">
              <img 
                src={heroIllustration} 
                alt="Business Development Illustration" 
                className="w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] object-contain"
                width={1024}
                height={1024}
              />
            </div>
          </div>
        </div>

        {/* Scrolling role text at bottom */}
        <div className="mt-16 overflow-hidden opacity-10">
          <p className="text-6xl md:text-8xl font-extrabold whitespace-nowrap animate-scroll-text text-foreground">
            Business Development Associate. Business Development Associate.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 rounded-full bg-muted-foreground/50 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
