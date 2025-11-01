import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
            <p className="text-muted-foreground text-lg">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="gradient-text">Mardhavan Abbathini</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
              Business Development Associate
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              A results-driven Business Development Associate with hands-on experience in B2C sales, 
              client acquisition, and account management. Specialized in leveraging CRM platforms and 
              sales automation tools to drive lead generation and increase customer retention.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-hero hover:opacity-90 transition-all shadow-medium"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
                asChild
              >
                <a href="/MARDHAVAN_ABBATHINI_BDA.pdf" download="Mardhavan_Abbathini_Resume.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center animate-in fade-in slide-in-from-right duration-700 delay-200">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-large">
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
