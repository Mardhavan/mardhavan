import { ArrowRight, Download, Linkedin, Mail, MapPin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";
import Magnetic from "@/components/Magnetic";

const focusAreas = ["AI Career Solutions", "SaaS", "EdTech", "GTM"];

const Hero = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-24 pt-28 md:pb-28 md:pt-36"
    >
      {/* atmospheric depth layers */}
      <div
        aria-hidden
        className="animate-soft-pulse pointer-events-none absolute -right-40 top-[-18%] h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.14),transparent_65%)] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-52 bottom-[-24%] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,hsl(var(--accent)/0.10),transparent_66%)] blur-3xl"
      />

      <div className="shell relative">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.85fr)] lg:gap-20">
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

            <h1 className="display-hero animate-fade-up delay-100 mt-7">
              <span className="block">Mardhavan</span>
              <span className="text-shine mt-1 block">Abbathini</span>
            </h1>

            <div aria-hidden className="animate-fade-up delay-200 mt-8 h-px w-full max-w-xl bg-gradient-to-r from-primary/70 via-border to-transparent" />

            <p className="animate-fade-up delay-300 prose-lede mt-7 max-w-2xl">
              Business Development Manager across{" "}
              <span className="text-foreground">AI-powered career solutions, SaaS and EdTech</span> —
              building pipeline, closing partnerships, and running GTM with a consultative, data-led
              sales process.
            </p>

            <p className="animate-fade-up delay-400 mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
              I work close to the customer: understanding the problem before pitching the product,
              qualifying honestly, and building commercial relationships that hold up after the deal
              closes.
            </p>

            <div className="animate-fade-up delay-500 mt-8 flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-border/70 bg-card/40 px-3.5 py-1.5 font-mono-ui text-[10px] uppercase tracking-[0.2em] text-muted-foreground backdrop-blur-sm transition-colors duration-300 hover:border-primary/50 hover:text-foreground"
                >
                  {area}
                </span>
              ))}
            </div>

            <div className="animate-fade-up delay-600 mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Magnetic className="w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => scrollTo("contact")}
                  className="btn-primary group w-full sm:w-auto"
                >
                  Start a conversation
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </Magnetic>
              <Magnetic className="w-full sm:w-auto">
                <a
                  href="/MARDHAVAN_ABBATHINI_BDM.pdf"
                  download="Mardhavan_Abbathini_Resume.pdf"
                  className="btn-ghost w-full sm:w-auto"
                >
                  <Download className="h-4 w-4" />
                  Download resume
                </a>
              </Magnetic>
            </div>

            <div className="animate-fade-up delay-700 mt-10 flex items-center gap-5">
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
            <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[360px] lg:max-w-none">
              <div
                aria-hidden
                className="animate-soft-pulse absolute -inset-8 rounded-[2.5rem] bg-[radial-gradient(60%_60%_at_50%_40%,hsl(var(--primary)/0.18),transparent_70%)] blur-2xl"
              />

              {/* orbiting technical ring */}
              <div
                aria-hidden
                className="animate-orbit absolute -inset-6 rounded-full border border-dashed border-border/60 opacity-50 hidden lg:block"
              />

              <div className="animate-reveal group relative overflow-hidden rounded-xl border border-border/70 bg-card/60 backdrop-blur-sm">
                <img
                  src={profilePhoto}
                  alt="Mardhavan Abbathini, Business Development Manager across AI, SaaS and EdTech"
                  className="aspect-[4/5] w-full object-cover contrast-[1.04] saturate-[0.9] transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
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
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent"
      />
    </section>
  );
};

export default Hero;
