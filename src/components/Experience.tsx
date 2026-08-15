import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const experiences = [
  {
    title: "Business Development Manager — AI Solutions",
    company: "Apply Wizz",
    period: "Jun 2026 — Present",
    summary:
      "Own business development for AI-powered career solutions across inbound and outbound motion.",
    achievements: [
      "Direct business development for AI-powered career solutions, running inbound and outbound opportunities through a consultative, structured pipeline process.",
      "Build GTM strategies grounded in CRM data, market research, customer segmentation and inbound lead analysis to widen the qualified pipeline in priority markets.",
      "Manage the end-to-end sales cycle with product, operations and customer success — converting inquiries, onboarding clients and strengthening retention.",
      "Improve sales performance through CRM reporting, KPI tracking, pipeline analysis and forecasting, so commercial decisions are made on evidence rather than instinct.",
    ],
  },
  {
    title: "Senior Business Development Associate",
    company: "Apply Wizz",
    period: "Jan 2026 — May 2026",
    summary:
      "Led high-intent EdTech counseling and partnership development across priority segments.",
    achievements: [
      "Ran high-consideration learner counseling and pipeline conversion for B2C EdTech, coaching peers on discovery quality and follow-up discipline.",
      "Expanded opportunity coverage through targeted prospecting on LinkedIn Sales Navigator across priority markets and customer segments.",
      "Used HubSpot CRM to manage pipeline progression, forecast opportunities and track every interaction across the lead-to-enrollment lifecycle.",
      "Deepened client relationships with consultative selling and structured follow-up, lifting retention, referrals and long-term account growth.",
      "Negotiated partnerships with education consultancies and institutional stakeholders to broaden market presence and create repeatable referral channels.",
      "Worked with marketing and leadership to refine campaigns, analyse conversion performance and sharpen outreach using pipeline data.",
    ],
  },
  {
    title: "Business Development Associate",
    company: "Apply Wizz",
    period: "Aug 2025 — Dec 2025",
    summary: "Built the outbound foundation: sourcing, qualification and competitive intelligence.",
    achievements: [
      "Converted qualified prospects sourced through LinkedIn Sales Navigator and targeted outreach, while adding education partners and consultancies to the pipeline.",
      "Qualified leads against real requirement and engagement signals, improving meeting conversion rates and overall opportunity quality.",
      "Kept prospect records and follow-up schedules accurate in HubSpot CRM for dependable pipeline tracking.",
      "Researched competitor offerings with SEMrush, SimilarWeb and Ahrefs to read market trends, evaluate positioning and sharpen targeting.",
      "Executed email outreach campaigns in Mailchimp with marketing to strengthen prospect engagement and nurturing.",
      "Prepared sales presentations, proposals and client-facing material for partners, universities and consultancies.",
    ],
  },
];

const Experience = () => (
  <section id="experience" className="section-shell">
    <div className="shell">
      <SectionHeading
        index="03"
        title="Experience"
        intro="What I owned, the problems I worked on, and how the sales process was built."
      />

      <div className="relative">
        <span
          aria-hidden
          className="absolute left-0 top-2 hidden h-[calc(100%-1rem)] w-px bg-border md:block"
        />
        <div className="space-y-12 md:space-y-16">
          {experiences.map((exp, i) => (
            <Reveal key={exp.period} delay={i * 80}>
              <article className="group relative grid gap-5 md:grid-cols-[230px_1fr] md:gap-12 md:pl-8">
                <span
                  aria-hidden
                  className="absolute -left-[3px] top-2 hidden h-[7px] w-[7px] rounded-full bg-primary transition-transform duration-300 group-hover:scale-150 md:block"
                />
                <div>
                  <div className="font-mono-ui text-[11px] uppercase tracking-[0.2em] text-primary">
                    {exp.period}
                  </div>
                  <div className="mt-2 font-mono-ui text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {exp.company}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold tracking-tight md:text-2xl">{exp.title}</h3>
                  <p className="mt-2 text-sm text-foreground/80">{exp.summary}</p>
                  <ul className="mt-6 space-y-3">
                    {exp.achievements.map((a) => (
                      <li key={a} className="marker flex text-sm leading-relaxed text-muted-foreground">
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
