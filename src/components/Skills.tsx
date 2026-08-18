import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const skillGroups = [
  {
    category: "Sales & Pipeline",
    skills: [
      "SaaS Sales",
      "EdTech Sales",
      "Lead Generation",
      "Prospecting",
      "Lead Qualification",
      "Pipeline Management",
      "Client Acquisition",
      "Sales Funnel Management",
    ],
  },
  {
    category: "Accounts & Retention",
    skills: [
      "Client Relationship Management",
      "Customer Onboarding",
      "Account Retention",
      "Customer Engagement",
      "Account Growth",
    ],
  },
  {
    category: "Market Intelligence",
    skills: ["Market Research", "Competitor Analysis", "Customer Segmentation", "Positioning"],
  },
  {
    category: "Commercial Communication",
    skills: [
      "Consultative Selling",
      "Negotiation",
      "Proposal Writing",
      "Sales Presentations",
      "Cross-Functional Collaboration",
    ],
  },
  {
    category: "CRM & Sales Tools",
    skills: ["HubSpot CRM", "LinkedIn Sales Navigator", "Mailchimp"],
  },
  {
    category: "Research & Reporting",
    skills: [
      "SEMrush",
      "SimilarWeb",
      "Ahrefs",
      "Microsoft Excel",
      "Google Sheets",
      "PowerPoint",
      "Sales Reporting",
      "Forecasting",
    ],
  },
];

const certifications = [
  { name: "Business Development Foundations", issuer: "LinkedIn Learning" },
  { name: "Sales Operations & Management", issuer: "LinkedIn Learning" },
  { name: "Google Analytics for Beginners", issuer: "Google Analytics Academy" },
];

const Skills = () => (
  <section id="skills" className="section-shell">
    <div className="shell">
      <SectionHeading index="06" title="Toolkit" intro="The skills and platforms behind the process." />

      <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.category} delay={i * 60}>
            <h3 className="eyebrow">{group.category}</h3>
            <div className="mt-3 hairline" />
            <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-2">
              {group.skills.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-border/70 px-3 py-1 text-xs text-muted-foreground transition-colors duration-300 hover:border-primary/50 hover:text-foreground"
                >
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120} className="mt-16">
        <h3 className="eyebrow-muted">Certifications</h3>
        <ul className="mt-5 grid gap-px overflow-hidden rounded-lg border border-border/80 bg-border/70 md:grid-cols-3">
          {certifications.map((c) => (
            <li key={c.name} className="bg-card/70 p-5 transition-colors hover:bg-card">
              <p className="text-sm font-medium text-foreground">{c.name}</p>
              <p className="mt-1 font-mono-ui text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {c.issuer}
              </p>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  </section>
);

export default Skills;
