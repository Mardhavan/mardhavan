const Skills = () => {
  const skillGroups = [
    {
      category: "Business Development & Sales",
      skills: [
        "SaaS Sales",
        "EdTech Sales",
        "Lead Generation",
        "Prospecting",
        "Lead Qualification",
        "Sales Pipeline Management",
        "Client Acquisition",
        "Customer Onboarding",
        "Sales Funnel Management",
        "Sales Outreach",
      ],
    },
    {
      category: "Customer Success & Account Management",
      skills: [
        "Client Relationship Management",
        "Account Retention",
        "Customer Engagement",
        "Customer Retention Strategies",
        "Account Growth Support",
      ],
    },
    {
      category: "Market Research & Competitive Intelligence",
      skills: ["Market Research", "Competitor Analysis", "SEMrush", "SimilarWeb", "Ahrefs"],
    },
    {
      category: "Communication & Business Operations",
      skills: [
        "Proposal Writing",
        "Sales Presentations",
        "Negotiation",
        "Business Communication",
        "Cross-Functional Collaboration",
      ],
    },
    {
      category: "Reporting & Productivity Tools",
      skills: [
        "Microsoft Excel",
        "Google Sheets",
        "Microsoft PowerPoint",
        "Sales Reporting",
        "Pipeline Tracking",
      ],
    },
    {
      category: "CRM & Sales Tools",
      skills: ["HubSpot CRM", "LinkedIn Sales Navigator", "Mailchimp"],
    },
  ];

  const projects = [
    {
      name: "B2C Lead Automation & Analytics Initiative",
      points: [
        "Organised prospect and outreach data in Excel and Google Sheets, creating a structured reporting process that improved visibility into sales activity and follow-up progress.",
        "Consolidated engagement and pipeline information from multiple sources for accurate tracking of prospect interactions.",
        "Evaluated sales funnel performance through regular data analysis, identifying improvement opportunities for business development planning.",
      ],
    },
    {
      name: "Strategic Partnership Outreach Campaign",
      points: [
        "Conducted market research using SEMrush, SimilarWeb and competitor analysis to identify partnership opportunities across EdTech and SaaS segments.",
        "Developed business proposals and sales presentations to communicate partnership opportunities and align stakeholder expectations.",
        "Supported partner engagement through professional business communication, contributing to partnership discussions and market expansion.",
      ],
    },
  ];

  const certifications = [
    "Business Development Foundations — LinkedIn Learning",
    "Sales Operations & Management — LinkedIn Learning",
    "Google Analytics for Beginners — Google Analytics Academy",
  ];

  return (
    <section id="skills" className="section-shell">
      <div className="mb-12 flex items-baseline gap-4">
        <span className="eyebrow-muted">03</span>
        <h2 className="text-3xl font-bold uppercase md:text-5xl">Capabilities</h2>
      </div>

      <div className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.category} className="bg-card p-6">
            <h3 className="font-mono-ui text-[11px] uppercase tracking-[0.18em] text-primary">
              {group.category}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((s) => (
                <li
                  key={s}
                  className="border border-border px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="mb-8 flex items-baseline gap-4 text-2xl font-bold uppercase md:text-3xl">
          <span className="eyebrow-muted">04</span> Projects
        </h3>
        <div className="grid gap-px border border-border bg-border md:grid-cols-2">
          {projects.map((p) => (
            <div key={p.name} className="bg-card p-6 md:p-8">
              <h4 className="text-lg font-semibold">{p.name}</h4>
              <ul className="mt-4 space-y-3">
                {p.points.map((pt) => (
                  <li key={pt} className="marker flex text-sm leading-relaxed text-muted-foreground">
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="mb-6 flex items-baseline gap-4 text-2xl font-bold uppercase md:text-3xl">
          <span className="eyebrow-muted">05</span> Certifications
        </h3>
        <ul className="divide-y divide-border border-y border-border">
          {certifications.map((c) => (
            <li key={c} className="flex items-center gap-4 py-4">
              <span className="h-px w-6 flex-shrink-0 bg-primary" />
              <span className="text-sm text-foreground md:text-base">{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
