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
      <SectionHeading kicker="Positioning" title="Commercial momentum, built deliberately." />

      <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-24">
        <div className="relative">
          {/* vertical spine */}
          <span
            aria-hidden
            className="absolute left-0 top-1 hidden h-full w-px bg-gradient-to-b from-primary/60 via-border to-transparent lg:block"
          />
          <div className="space-y-8 lg:pl-10">
            <Reveal>
              <p className="text-xl font-medium leading-[1.55] text-foreground md:text-[1.6rem] md:leading-[1.45]">
                I build commercial momentum for products that are genuinely useful — AI-powered
                career solutions, SaaS platforms and EdTech offerings — by pairing disciplined
                pipeline work with a consultative sales process.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p className="prose-body">
                My approach starts with the market, not the pitch. I research segments, map buying
                intent, and qualify hard so that conversations happen with people who have a real
                problem to solve. From there it's structured discovery, a clear commercial
                narrative, and follow-through that keeps deals moving without pressure tactics.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="prose-body">
                I've owned the full cycle — prospecting, qualification, demos and consultative
                counseling, negotiation, onboarding and account growth — and partnered with
                education consultancies and institutional stakeholders to open new routes to market.
                Alongside that, I work closely with product, marketing, operations and customer
                success so that what we learn in the field improves the GTM motion rather than
                staying in a CRM note.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <p className="prose-body">
                Decisions are data-led: CRM hygiene, pipeline analysis, conversion diagnostics and
                competitive research inform where effort goes next.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={120}>
          <div className="group panel ticks p-6 md:p-8 lg:sticky lg:top-28">
            <span className="eyebrow-muted">Profile</span>
            <dl className="mt-6 divide-y divide-border/50">
              {facts.map(([k, v]) => (
                <div
                  key={k}
                  className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <dt className="font-mono-ui text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    {k}
                  </dt>
                  <dd className="text-sm text-foreground sm:text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default About;
