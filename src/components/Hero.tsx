import { ArrowRight, Download, Linkedin, Mail, MapPin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const focusAreas = ["AI Career Solutions", "SaaS", "EdTech", "GTM"];

const Hero = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center pb-20 pt-28 md:pb-24 md:pt-32"
    >
      <div className="shell">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 xl:gap-24">
          {/* Portrait — first on mobile, left on desktop */}
          <div className="order-1 animate-reveal lg:order-1">
            <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[340px] lg:max-w-none">
              {/* soft depth halo */}
              <div
                aria-hidden
                className="animate-soft-pulse absolute -inset-6 rounded-[2rem] bg-[radial-gradient(60%_60%_at_50%_40%,hsl(var(--primary)/0.16),transparent_70%)] blur-xl"
              />
              <div className="relative overflow-hidden rounded-xl border border-border/80 bg-card">
                <img
                  src={profilePhoto}
                  alt="Mardhavan Abbathini, Business Development Manager across AI, SaaS and EdTech"
                  className="aspect-[4/5] w-full object-cover contrast-[1.03] saturate-[0.92] transition-transform duration-[1200ms] ease-out hover:scale-[1.03]"
                  loading="eager"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent"
                />
                <div aria-hidden className="absolute left-0 top-0 h-12 w-px bg-primary/80" />
                <div aria-hidden className="absolute left-0 top-0 h-px w-12 bg-primary/80" />
                <div aria-hidden className="absolute bottom-0 right-0 h-12 w-px bg-primary/80" />
                <div aria-hidden className="absolute bottom-0 right-0 h-px w-12 bg-primary/80" />
              </div>

              <div className="mt-4 flex items-center justify-center gap-2 font-mono-ui text-[10px] uppercase tracking-[0.24em] text-muted-foreground lg:justify-start">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                Hyderabad, India
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="order-2 lg:order-2">
            <div className="animate-fade-up flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="eyebrow">Business Development Manager</span>
            </div>

            <h1 className="animate-fade-up delay-100 display-xl mt-5">
              Mardhavan
              <br />
              <span className="text-shine">Abbathini</span>
            </h1>

            <p className="animate-fade-up delay-200 prose-lede mt-7 max-w-2xl">
              Business Development Manager across{" "}
              <span className="text-foreground">AI-powered career solutions, SaaS and EdTech</span> —
              building pipeline, closing partnerships, and running GTM with a consultative, data-led
              sales process.
            </p>

            <p className="animate-fade-up delay-300 mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
              I work close to the customer: understanding the problem before pitching the product,
              qualifying honestly, and building commercial relationships that hold up after the deal
              closes.
            </p>

            <div className="animate-fade-up delay-400 mt-8 flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-border/80 bg-card/60 px-3.5 py-1.5 font-mono-ui text-[10px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                >
                  {area}
                </span>
              ))}
            </div>

            <div className="animate-fade-up delay-500 mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button onClick={() => scrollTo("contact")} className="btn-primary group w-full sm:w-auto">
                Start a conversation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href="/MARDHAVAN_ABBATHINI_BDM.pdf"
                download="Mardhavan_Abbathini_Resume.pdf"
                className="btn-ghost w-full sm:w-auto"
              >
                <Download className="h-4 w-4" />
                Download resume
              </a>
            </div>

            <div className="animate-fade-up delay-600 mt-8 flex items-center gap-5">
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
              <span className="h-4 w-px bg-border" />
              <span className="font-mono-ui text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Apply Wizz · Open to BD &amp; GTM roles
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
