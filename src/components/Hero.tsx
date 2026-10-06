import { ArrowRight, Download, Linkedin, Mail, MapPin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";
import Magnetic from "@/components/Magnetic";
import { Button } from "@/components/ui/button";
import SignalCanvas from "@/components/SignalCanvas";

const focusAreas = ["AI Career Solutions", "SaaS", "EdTech", "GTM"];

const Hero = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="portfolio-opening relative overflow-x-clip"
    >
      <SignalCanvas />
      <div className="shell relative">
        <div className="opening-layout grid items-center gap-9 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.8fr)] lg:gap-14">
          {/* ---- Copy (desktop left) ---- */}
          <div className="order-2 lg:order-1">
            <div className="animate-fade-up flex flex-wrap items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="eyebrow">Business Development Manager</span>
              <span aria-hidden className="hidden h-px w-12 bg-border sm:block" />
              <span className="eyebrow-muted hidden sm:inline">Apply Wizz</span>
            </div>

            <h1 className="display-hero animate-fade-up delay-100 mt-6">
              <span className="block">Mardhavan</span>
              <span className="mt-1 block text-primary">Abbathini</span>
            </h1>

            <div aria-hidden className="animate-fade-up delay-200 mt-6 h-px w-20 bg-primary/70" />

            <p className="animate-fade-up delay-300 prose-lede mt-6 max-w-2xl">
              Business Development Manager across{" "}
              <span className="text-foreground">AI-powered career solutions, SaaS and EdTech</span> —
              building pipeline, closing partnerships, and running GTM with a consultative, data-led
              sales process.
            </p>

            <details className="opening-detail animate-fade-up delay-400 mt-4 max-w-xl">
              <summary className="w-fit cursor-pointer text-xs text-muted-foreground transition-colors hover:text-primary">My approach</summary>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              I work close to the customer: understanding the problem before pitching the product,
              qualifying honestly, and building commercial relationships that hold up after the deal
              closes.
            </p>
            </details>

            <div className="animate-fade-up delay-500 mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {focusAreas.map((area) => (
                <Button
                  key={area}
                  variant="ghost"
                  onClick={() => scrollTo(area === "GTM" ? "work" : "expertise")}
                  className="focus-control h-9 rounded-none border-b border-border px-0 font-mono-ui text-[10px] uppercase text-muted-foreground hover:bg-transparent hover:text-primary"
                >
                  {area}
                </Button>
              ))}
            </div>

            <div className="animate-fade-up delay-600 mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Magnetic className="w-full sm:w-auto">
                <Button
                  type="button"
                  onClick={() => scrollTo("contact")}
                  className="btn-primary group w-full sm:w-auto"
                >
                  Start a conversation
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Magnetic>
              <Magnetic className="w-full sm:w-auto">
                <Button asChild variant="outline" className="btn-ghost w-full sm:w-auto">
                <a
                  href="/MARDHAVAN_ABBATHINI_BDM.pdf"
                  download="Mardhavan_Abbathini_Resume.pdf"
                >
                  <Download className="h-4 w-4" />
                  Download resume
                </a>
                </Button>
              </Magnetic>
            </div>

            <div className="animate-fade-up delay-700 mt-7 flex items-center gap-5">
              <a
                href="https://www.linkedin.com/in/mardhavan-abbathini-b34b59259"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Linkedin className="h-[18px] w-[18px]" />
              </a>
              <a
                href="mailto:mardhavan5320@gmail.com"
                aria-label="Email Mardhavan"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-[18px] w-[18px]" />
              </a>
              <span aria-hidden className="h-4 w-px bg-border" />
              <span className="font-mono-ui text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                <MapPin className="mr-1.5 inline h-3.5 w-3.5 text-primary" />
                Hyderabad, India
              </span>
            </div>
          </div>

          {/* ---- Portrait (first on mobile) ---- */}
          <div className="order-1 lg:order-2">
            <div className="opening-portrait relative mx-auto w-full max-w-[300px] sm:max-w-[360px] lg:max-w-none">
              <div className="animate-reveal group relative overflow-hidden bg-card">
                <img
                  src={profilePhoto}
                  alt="Mardhavan Abbathini, Business Development Manager across AI, SaaS and EdTech"
                   className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.025]"
                  loading="eager"
                  decoding="async"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent"
                />
                {/* slow scan line */}
                <div
                  aria-hidden
                  className="animate-sweep pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
                />
                <div aria-hidden className="absolute left-0 top-0 h-14 w-px bg-primary/80" />
                <div aria-hidden className="absolute left-0 top-0 h-px w-14 bg-primary/80" />
                <div aria-hidden className="absolute bottom-0 right-0 h-14 w-px bg-primary/80" />
                <div aria-hidden className="absolute bottom-0 right-0 h-px w-14 bg-primary/80" />

                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-4 py-3 font-mono-ui text-[9px] uppercase tracking-[0.24em] text-muted-foreground">
                  <span>Apply Wizz</span>
                  <span className="text-primary">BD · GTM</span>
                </div>
              </div>
              <div aria-hidden className="mt-4 h-px w-full bg-border" />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
