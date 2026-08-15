import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const work = [
  {
    tag: "Sales Operations",
    title: "Lead automation & outreach system",
    challenge:
      "Prospect research and follow-up were manual, inconsistent and slow to scale across segments.",
    approach:
      "Designed an automated lead-generation and outreach workflow — sourcing on LinkedIn Sales Navigator, enriching records in HubSpot, and sequencing nurture through Mailchimp with clear qualification criteria.",
    outcome:
      "A repeatable prospecting engine with cleaner data, faster follow-up and consistent pipeline coverage instead of ad-hoc effort.",
  },
  {
    tag: "Partnerships",
    title: "Strategic partnership campaign",
    challenge:
      "Direct outbound alone limited reach into education consultancies and institutional buyers.",
    approach:
      "Mapped and prioritised partner segments, ran tailored commercial conversations, and negotiated collaboration terms aligned to each partner's own student and client outcomes.",
    outcome:
      "New referral routes to market and a partner base that compounds beyond individual deal cycles.",
  },
  {
    tag: "GTM",
    title: "Data-led GTM refinement",
    challenge:
      "Outreach was spread thin across markets without a clear read on where conversion actually happened.",
    approach:
      "Combined CRM pipeline analysis with competitive research in SEMrush, SimilarWeb and Ahrefs to re-segment the market, then reworked messaging and targeting per segment.",
    outcome:
      "Sharper positioning, better-qualified conversations and effort concentrated where intent was strongest.",
  },
];

const Work = () => (
  <section id="work" className="section-shell">
    <div className="shell">
      <SectionHeading
        index="04"
        title="Selected work"
        intro="A few representative initiatives, described the way I'd walk a stakeholder through them."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {work.map((item, i) => (
          <Reveal key={item.title} delay={i * 90} className="h-full">
            <article className="surface flex h-full flex-col p-6 md:p-8">
              <span className="eyebrow">{item.tag}</span>
              <h3 className="mt-4 text-xl font-semibold tracking-tight md:text-[1.4rem]">
                {item.title}
              </h3>

              <dl className="mt-6 space-y-5">
                {[
                  ["Challenge", item.challenge],
                  ["Approach", item.approach],
                  ["Outcome", item.outcome],
                ].map(([label, body]) => (
                  <div key={label}>
                    <dt className="font-mono-ui text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                      {label}
                    </dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-foreground/80">{body}</dd>
                  </div>
                ))}
              </dl>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Work;
