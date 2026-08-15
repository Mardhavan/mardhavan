import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const steps = [
  {
    label: "Consultative",
    body: "Discovery before pitch. Understand the buyer's actual constraint, then decide whether there's a fit worth pursuing.",
  },
  {
    label: "Data-led",
    body: "CRM hygiene, pipeline analysis, conversion diagnostics and competitive research decide where the next hour goes.",
  },
  {
    label: "Customer-focused",
    body: "Honest qualification and clear expectations — the relationship has to survive onboarding, not just the close.",
  },
  {
    label: "Commercial",
    body: "Negotiate on value with a clean line between what's promised and what gets delivered.",
  },
  {
    label: "Strategic",
    body: "Feed field learning back into positioning, targeting and GTM so each cycle compounds on the last.",
  },
];

const Approach = () => (
  <section id="approach" className="section-shell">
    <div className="shell">
      <SectionHeading index="05" title="How I work" />

      <div className="grid gap-px overflow-hidden rounded-lg border border-border/80 bg-border/70 md:grid-cols-5">
        {steps.map((step, i) => (
          <Reveal key={step.label} delay={i * 70} className="h-full">
            <div className="group relative h-full bg-card/70 p-6 transition-colors duration-300 hover:bg-card">
              <div className="flex items-center gap-2 font-mono-ui text-[10px] uppercase tracking-[0.2em] text-primary">
                {String(i + 1).padStart(2, "0")}
                <span className="h-px w-5 bg-primary/40 transition-all duration-500 group-hover:w-9" />
              </div>
              <h3 className="mt-4 text-base font-semibold tracking-tight">{step.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Approach;
