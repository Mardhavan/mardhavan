import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const areas = [
  {
    title: "Business Development",
    note: "Opening new markets, segments and revenue routes end to end.",
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
        index="02"
        title="Core expertise"
        intro="The disciplines I operate in daily — from first-touch prospecting through to partnership and account growth."
      />

      <div className="grid gap-px overflow-hidden rounded-lg border border-border/80 bg-border/70 sm:grid-cols-2 lg:grid-cols-3">
        {areas.map((area, i) => (
          <Reveal key={area.title} delay={i * 45}>
            <div className="group h-full bg-card/70 p-6 transition-colors duration-300 hover:bg-card md:p-7">
              <span className="font-mono-ui text-[10px] tracking-[0.2em] text-primary/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-base font-semibold tracking-tight text-foreground md:text-lg">
                {area.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{area.note}</p>
              <span className="mt-5 block h-px w-8 bg-primary/50 transition-all duration-500 group-hover:w-16" />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Expertise;
