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
      <SectionHeading kicker="How I work" title="Five principles, one process." />

      <div className="relative">
        <span
          aria-hidden
          className="absolute left-0 right-0 top-[7px] hidden h-px bg-gradient-to-r from-primary/60 via-border to-transparent lg:block"
        />
        <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {steps.map((step, i) => (
            <Reveal key={step.label} delay={i * 70} as="li" className="relative">
              <span
                aria-hidden
                className="absolute -top-[3px] left-0 hidden h-[9px] w-[9px] rounded-full border border-primary/70 bg-background lg:block"
              />
              <div className="lg:pt-10">
                <span
                  aria-hidden
                  className="mb-4 block h-px w-8 bg-primary/60 lg:hidden"
                />
                <h3 className="text-base font-semibold tracking-tight md:text-lg">{step.label}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

export default Approach;
