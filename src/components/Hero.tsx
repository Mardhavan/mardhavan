import { ArrowRight, Download, MapPin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const metrics = [
  { value: "$80K", label: "Monthly team revenue" },
  { value: "8", label: "Member BD team led" },
  { value: "350+", label: "Qualified leads & partners" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-5 pb-16 pt-28 md:px-10 md:pt-32 lg:px-16"
    >
      <div className="w-full">
        <div className="grid items-center gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
          <div className="animate-fade-up">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />
              <span className="eyebrow">Business Development Manager</span>
            </div>

            <h1 className="text-[2.6rem] font-bold uppercase leading-[0.95] sm:text-6xl lg:text-8xl">
              Mardhavan
              <br />
              <span className="text-primary">Abbathini</span>
            </h1>

            {/* Portrait — mobile placement */}
            <div className="my-8 lg:hidden">
              <div className="relative w-full max-w-[280px] border border-border">
                <img
                  src={profilePhoto}
                  alt="Mardhavan Abbathini, Business Development Manager based in Hyderabad, India"
                  className="aspect-[4/5] w-full object-cover grayscale-[35%] contrast-[1.05]"
                />
              </div>
            </div>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Revenue-focused business development leader working across AI-powered career
              solutions, SaaS and EdTech — building pipeline, closing partnerships and running
              GTM with a consultative, data-led sales process.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono-ui text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                Hyderabad, India
              </span>
              <span className="hidden h-3 w-px bg-border sm:block" />
              <span>Apply Wizz</span>
              <span className="hidden h-3 w-px bg-border sm:block" />
              <span>Open to senior BD & GTM roles</span>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <button
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className="group inline-flex h-12 items-center gap-2 bg-primary px-7 font-mono-ui text-xs uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-primary-light"
              >
                Get in touch
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href="/MARDHAVAN_ABBATHINI_BDM.pdf"
                download="Mardhavan_Abbathini_Resume.pdf"
                className="group inline-flex h-12 items-center gap-2 border border-border px-7 font-mono-ui text-xs uppercase tracking-[0.18em] text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Download className="h-4 w-4" />
                Download resume
              </a>
            </div>
          </div>

          {/* Portrait — desktop placement */}
          <div className="hidden animate-fade-up delay-200 lg:block">
            <div className="relative border border-border">
              <div className="absolute -left-px -top-px h-10 w-px bg-primary" />
              <div className="absolute -left-px -top-px h-px w-10 bg-primary" />
              <img
                src={profilePhoto}
                alt="Mardhavan Abbathini, Business Development Manager based in Hyderabad, India"
                className="aspect-[4/5] w-full object-cover grayscale-[35%] contrast-[1.05]"
              />
            </div>
          </div>
        </div>

        {/* Metric strip */}
        <div className="mt-14 grid grid-cols-1 border border-border sm:grid-cols-3">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={`px-6 py-6 ${i > 0 ? "border-t border-border sm:border-l sm:border-t-0" : ""}`}
            >
              <div className="text-3xl font-bold text-primary md:text-4xl">{m.value}</div>
              <div className="mt-1 font-mono-ui text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
