const Experience = () => {
  const experiences = [
    {
      title: "Business Development Manager — AI Solutions",
      company: "Apply Wizz",
      period: "Jun 2026 — Present",
      achievements: [
        "Directed business development for AI-powered career solutions, generating approximately $70,000 in monthly revenue by managing inbound and outbound sales opportunities, consultative selling and structured pipeline execution.",
        "Developed GTM strategies using CRM, market research, customer segmentation and inbound lead analysis to expand the qualified pipeline and improve customer acquisition across target markets.",
        "Managed the end-to-end sales cycle by collaborating with product, operations and customer success teams to convert inbound inquiries, onboard clients and strengthen customer retention.",
        "Optimised sales performance through CRM reporting, KPI tracking, pipeline analysis and revenue forecasting, enabling data-driven decisions and consistent business growth.",
      ],
    },
    {
      title: "Senior Business Development Associate",
      company: "Apply Wizz",
      period: "Jan 2026 — May 2026",
      achievements: [
        "Led a 4-member B2C EdTech sales team, managing high-ticket learner counseling, pipeline conversion and revenue execution while generating approximately $55,000 in monthly revenue.",
        "Expanded business opportunities through targeted prospecting using LinkedIn Sales Navigator, generating 200+ qualified leads across priority markets and customer segments.",
        "Leveraged HubSpot CRM to manage pipeline progression, forecast opportunities and track customer interactions across the complete lead-to-enrollment lifecycle.",
        "Strengthened client relationships through consultative selling and structured follow-up, improving retention, referrals and long-term account growth.",
        "Negotiated partnerships with education consultancies and institutional stakeholders, aligning commercial discussions and collaboration strategies to expand market presence.",
        "Collaborated with marketing and leadership to optimise campaigns, analyse conversion performance and refine outreach through data-driven decision-making.",
      ],
    },
    {
      title: "Business Development Associate",
      company: "Apply Wizz",
      period: "Aug 2025 — Dec 2025",
      achievements: [
        "Generated over $25,000 in revenue by converting qualified prospects through LinkedIn Sales Navigator and sales outreach, while adding 150+ prospective education partners and consultancies to the pipeline.",
        "Conducted lead qualification by assessing prospect requirements and engagement potential, improving meeting conversion rates and opportunity quality.",
        "Maintained accurate prospect records and follow-up schedules in HubSpot CRM, ensuring reliable pipeline tracking and timely outreach execution.",
        "Researched competitor offerings using SEMrush, SimilarWeb and Ahrefs to identify market trends, evaluate positioning and support prospect targeting.",
        "Executed targeted email outreach campaigns with Mailchimp and coordinated with marketing to strengthen prospect engagement and lead nurturing.",
        "Prepared sales presentations, proposals and client-facing materials in PowerPoint and Excel for prospective partners, universities and consultancies.",
      ],
    },
  ];

  return (
    <section id="experience" className="section-shell">
      <div className="mb-12 flex items-baseline gap-4">
        <span className="eyebrow-muted">02</span>
        <h2 className="text-3xl font-bold uppercase md:text-5xl">Experience</h2>
      </div>

      <div className="border-t border-border">
        {experiences.map((exp) => (
          <article
            key={exp.period}
            className="group grid gap-6 border-b border-border py-10 md:grid-cols-[220px_1fr] md:gap-12"
          >
            <div>
              <div className="font-mono-ui text-xs uppercase tracking-[0.16em] text-primary">
                {exp.period}
              </div>
              <div className="mt-2 font-mono-ui text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {exp.company}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold md:text-2xl">{exp.title}</h3>
              <ul className="mt-5 space-y-3">
                {exp.achievements.map((a) => (
                  <li key={a} className="marker flex text-sm leading-relaxed text-muted-foreground">
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
