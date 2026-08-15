import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const facts: [string, string][] = [
  ["Role", "Business Development Manager"],
  ["Company", "Apply Wizz"],
  ["Focus", "AI Career Solutions · SaaS · EdTech"],
  ["Motion", "Inbound + outbound, consultative"],
  ["Based in", "Hyderabad, India"],
];

const About = () => (
  <section id="about" className="section-shell">
    <div className="shell">
      <SectionHeading index="01" title="Positioning" />

      <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
        <div className="space-y-6">
          <Reveal>
            <p className="prose-lede text-foreground/90">
              I build commercial momentum for products that are genuinely useful — AI-powered career
              solutions, SaaS platforms and EdTech offerings — by pairing disciplined pipeline work
              with a consultative sales process.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p className="prose-body">
              My approach starts with the market, not the pitch. I research segments, map buying
              intent, and qualify hard so that conversations happen with people who have a real
              problem to solve. From there it's structured discovery, a clear commercial narrative,
              and follow-through that keeps deals moving without pressure tactics.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p className="prose-body">
              I've owned the full cycle — prospecting, qualification, demos and consultative
              counseling, negotiation, onboarding and account growth — and partnered with education
              consultancies and institutional stakeholders to open new routes to market. Alongside
              that, I work closely with product, marketing, operations and customer success so that
              what we learn in the field improves the GTM motion rather than staying in a CRM note.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p className="prose-body">
              Decisions are data-led: CRM hygiene, pipeline analysis, conversion diagnostics and
              competitive research inform where effort goes next.
            </p>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <dl className="surface divide-y divide-border/70 px-5 md:px-6">
            {facts.map(([k, v]) => (
              <div
                key={k}
                className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <dt className="font-mono-ui text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {k}
                </dt>
                <dd className="text-sm text-foreground sm:text-right">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </div>
  </section>
);

export default About;
