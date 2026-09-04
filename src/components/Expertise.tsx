import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const areas = [
  {
    title: "Business Development",
    note: "Opening new markets, segments and commercial routes end to end.",
  },
  { title: "SaaS Sales", note: "Value-led selling for subscription and platform products." },
  {
    title: "Strategic Partnerships",
    note: "Consultancies and institutional stakeholders as distribution.",
  },
  { title: "GTM Strategy", note: "Positioning, targeting and channel execution that compounds." },
  { title: "Pipeline Development", note: "Prospecting, qualification and clean funnel discipline." },
  { title: "Consultative Selling", note: "Discovery first; the recommendation follows the problem." },
  { title: "Account Growth", note: "Retention, expansion and referral motion after onboarding." },
  { title: "Data-Led Sales", note: "CRM analytics, conversion diagnostics and forecasting." },
  { title: "AI & EdTech Solutions", note: "Translating technical capability into buyer outcomes." },
];

const Expertise = () => (
  <section id="expertise" className="section-shell">
    <div className="shell">
      <SectionHeading
        kicker="Core expertise"
        title="The operating disciplines."
        intro="From first-touch prospecting through to partnership and account growth."
      />

      <div className="grid gap-px overflow-hidden rounded-xl border border-border/60 bg-border/50 sm:grid-cols-2 lg:grid-cols-3">
        {areas.map((area, i) => (
          <Reveal key={area.title} delay={i * 45} className="h-full">
            <div className="group relative h-full overflow-hidden bg-background/60 p-7 backdrop-blur-sm transition-colors duration-500 hover:bg-card/70 md:p-8">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(70% 70% at 50% 0%, hsl(var(--primary) / 0.09), transparent 70%)",
                }}
              />
              <div className="relative">
                <span
                  aria-hidden
                  className="mb-5 block h-px w-8 bg-primary/60 transition-all duration-500 group-hover:w-16"
                />
                <h3 className="text-base font-semibold tracking-tight text-foreground md:text-lg">
                  {area.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{area.note}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Expertise;
