import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 md:px-12 py-20 bg-gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-30"></div>
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-4 animate-in fade-in slide-in-from-left duration-700">
            <p className="text-muted-foreground text-base md:text-lg">Hi, I'm</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="gradient-text">MARDHAVAN ABBATHINI</span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-primary font-bold typing-animation inline-block">
              Business Development Associate
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl pt-2">
              Transforming business challenges into growth opportunities through strategic B2C sales, 
              client acquisition, and data-driven CRM solutions.
            </p>
            <div className="flex flex-wrap gap-4 pt-6">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary via-accent to-secondary text-white hover:shadow-glow transition-all duration-300 border-0"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <a 
                href="/MARDHAVAN_ABBATHINI_BDA.pdf" 
                download="Mardhavan_Abbathini_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 h-11 rounded-md px-8 bg-gradient-to-r from-primary via-accent to-secondary text-white hover:shadow-glow transition-all duration-300 font-medium text-sm border-0"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </div>
          
          <div className="flex justify-center animate-in fade-in slide-in-from-right duration-700 delay-200">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow float-animation">
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
