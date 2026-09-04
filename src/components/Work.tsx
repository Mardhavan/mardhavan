import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const work = [
  {
    tag: "Sales Operations",
    title: "Lead automation & outreach system",
    stack: ["LinkedIn Sales Navigator", "HubSpot", "Mailchimp"],
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
    stack: ["Segmentation", "Negotiation", "Referral channels"],
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
    stack: ["SEMrush", "SimilarWeb", "Ahrefs", "CRM analytics"],
    challenge:
      "Outreach was spread thin across markets without a clear read on where conversion actually happened.",
    approach:
      "Combined CRM pipeline analysis with competitive research in SEMrush, SimilarWeb and Ahrefs to re-segment the market, then reworked messaging and targeting per segment.",
    outcome:
      "Sharper positioning, better-qualified conversations and effort concentrated where intent was strongest.",
  },
];

const Work = () => {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="work" className="section-shell">
      <div className="shell">
        <SectionHeading
          kicker="Selected work"
          title="Case studies, not bullet points."
          intro="A few representative initiatives, described the way I'd walk a stakeholder through them."
        />

        <div className="overflow-hidden rounded-xl border border-border/60">
          {work.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.title} delay={i * 70}>
                <article
                  className={`group relative border-b border-border/50 transition-colors duration-500 last:border-b-0 ${
                    isOpen ? "bg-card/50" : "bg-background/40 hover:bg-card/30"
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      aria-controls={`work-panel-${i}`}
                      className="flex w-full items-start justify-between gap-6 px-6 py-7 text-left md:px-10 md:py-9"
                    >
                      <span className="min-w-0">
                        <span className="eyebrow block">{item.tag}</span>
                        <span className="mt-3 block text-xl font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary md:text-[1.9rem]">
                          {item.title}
                        </span>
                      </span>
                      <span
                        aria-hidden
                        className={`mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-border/70 text-primary transition-all duration-500 ${
                          isOpen ? "rotate-90 border-primary/60 bg-primary/10" : ""
                        }`}
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </button>
                  </h3>

                  <div
                    id={`work-panel-${i}`}
                    className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0">
                      <div className="px-6 pb-9 md:px-10 md:pb-12">
                        <dl className="grid gap-8 border-t border-border/50 pt-8 md:grid-cols-3 md:gap-10">
                          {[
                            ["Challenge", item.challenge],
                            ["Approach", item.approach],
                            ["Outcome", item.outcome],
                          ].map(([label, body]) => (
                            <div key={label}>
                              <dt className="font-mono-ui text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                                {label}
                              </dt>
                              <dd className="mt-2.5 text-sm leading-relaxed text-foreground/80">
                                {body}
                              </dd>
                            </div>
                          ))}
                        </dl>
                        <ul className="mt-8 flex flex-wrap gap-2">
                          {item.stack.map((s) => (
                            <li
                              key={s}
                              className="rounded-full border border-border/70 px-3 py-1 font-mono-ui text-[10px] uppercase tracking-[0.16em] text-muted-foreground"
                            >
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;
