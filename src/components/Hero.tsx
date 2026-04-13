import { ArrowRight, Download, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";
import FloatingShapes from "./FloatingShapes";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 md:px-12 py-20 relative overflow-hidden">
      <FloatingShapes />
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          <div className="space-y-4 animate-in fade-in slide-in-from-left duration-700 w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Hi, I'm
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              <span className="gradient-text">Mardhavan</span>
            </h1>
            
            {/* Photo on mobile */}
            <div className="flex justify-center md:hidden py-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-hero rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow float-animation group cursor-pointer">
                  <img 
                    src={profilePhoto} 
                    alt="Mardhavan Abbathini - Business Development Associate" 
                    className="w-full h-full object-cover object-center scale-110 transition-transform duration-500 group-hover:scale-125"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
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
          
          {/* Photo on desktop */}
          <div className="hidden md:flex justify-center items-center animate-in fade-in slide-in-from-right duration-700 delay-200">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow float-animation group cursor-pointer">
                <img 
                  src={profilePhoto} 
                  alt="Mardhavan Abbathini - Business Development Associate" 
                  className="w-full h-full object-cover object-center scale-110 transition-transform duration-500 group-hover:scale-125"
                />
              </div>
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
    </section>
  );
};

export default Hero;
