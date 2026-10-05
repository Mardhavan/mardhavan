import { ArrowRight, ArrowDownToLine, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";
import Magnetic from "@/components/Magnetic";

const focusAreas = ["AI Career Solutions", "SaaS", "EdTech", "GTM"];

const Hero = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative overflow-x-clip pb-20 pt-32 md:pb-28 md:pt-40">
      <div className="shell relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* ---- Portrait (first on mobile) ---- */}
          <div className="order-1 lg:order-2 lg:col-span-5">
            <figure className="animate-reveal relative mx-auto w-full max-w-[340px] sm:max-w-[400px] lg:ml-auto lg:max-w-[460px]">
              <div className="group relative overflow-hidden rounded-sm bg-card">
                <img
                  src={profilePhoto}
                  alt="Mardhavan Abbathini, Business Development Manager across AI, SaaS and EdTech"
                  className="aspect-[4/5] w-full object-cover saturate-[0.92] transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <figcaption className="mt-4 flex items-center justify-between border-t border-border pt-4 text-[12px] text-muted-foreground">
                <span className="font-mono-ui uppercase tracking-[0.2em]">Apply Wizz</span>
                <span>Hyderabad, India</span>
              </figcaption>
            </figure>
          </div>

          {/* ---- Copy ---- */}
          <div className="order-2 flex flex-col justify-center lg:order-1 lg:col-span-7">
            <p className="eyebrow animate-fade-up">Business Development Manager</p>

            <h1 className="display-hero animate-fade-up delay-100 mt-6">
              Mardhavan
              <br />
              <span className="italic text-primary">Abbathini</span>
            </h1>

            <p className="animate-fade-up delay-200 prose-lede mt-8 max-w-xl">
              Business Development Manager across{" "}
              <span className="text-foreground">AI-powered career solutions, SaaS and EdTech</span> —
              building pipeline, closing partnerships, and running GTM with a consultative, data-led
              sales process.
            </p>

            <p className="animate-fade-up delay-300 mt-5 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
              I work close to the customer: understanding the problem before pitching the product,
              qualifying honestly, and building commercial relationships that hold up after the deal
              closes.
            </p>

            <div className="animate-fade-up delay-400 mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
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
                  <ArrowDownToLine className="h-4 w-4" />
                  Download resume
                </a>
              </Magnetic>
            </div>

            <div className="animate-fade-up delay-500 mt-12 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-border pt-6">
              <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-muted-foreground">
                {focusAreas.map((area) => (
                  <li key={area} className="flex items-center gap-2">
                    <span aria-hidden className="h-1 w-1 rounded-full bg-primary" />
                    {area}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2 sm:ml-auto">
                <a
                  href="https://www.linkedin.com/in/mardhavan-abbathini-b34b59259"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="mailto:mardhavan5320@gmail.com"
                  aria-label="Email Mardhavan"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
