import { useState } from "react";
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

const Skills = () => {
  const [active, setActive] = useState(0);
  const group = skillGroups[active];

  return (
    <section id="skills" className="section-shell">
      <div className="shell">
        <SectionHeading
          kicker="Toolkit"
          title="A connected system, not a list."
          intro="Select a cluster to see the skills and platforms behind the process."
        />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
          {/* cluster selector */}
          <Reveal>
            <ul className="flex flex-wrap gap-2 lg:flex-col lg:gap-0">
              {skillGroups.map((g, i) => (
                <li key={g.category} className="lg:w-full">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={active === i}
                    className={`group flex w-full items-center gap-3 rounded-full border px-4 py-2.5 text-left font-mono-ui text-[10px] uppercase tracking-[0.2em] transition-all duration-400 lg:rounded-none lg:border-x-0 lg:border-t-0 lg:border-b lg:px-0 lg:py-4 ${
                      active === i
                        ? "border-primary/50 bg-primary/10 text-foreground lg:bg-transparent lg:border-b-primary/60"
                        : "border-border/60 text-muted-foreground hover:text-foreground lg:border-b-border/50"
                    }`}
                  >
                    <span
                      aria-hidden
                      className={`h-1.5 w-1.5 flex-shrink-0 rounded-full transition-all duration-400 ${
                        active === i
                          ? "bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.8)]"
                          : "bg-border group-hover:bg-primary/50"
                      }`}
                    />
                    {g.category}
                    <span className="ml-auto hidden text-[9px] text-muted-foreground lg:inline">
                      {String(g.skills.length).padStart(2, "0")}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* node field */}
          <Reveal delay={100}>
            <div className="group panel ticks min-h-[280px] p-7 md:p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                  background:
                    "radial-gradient(80% 60% at 20% 0%, hsl(var(--primary) / 0.07), transparent 70%)",
                }}
              />
              <div className="relative">
                <span className="eyebrow">{group.category}</span>
                <ul key={group.category} className="mt-7 flex flex-wrap gap-2.5">
                  {group.skills.map((s, i) => (
                    <li
                      key={s}
                      className="animate-fade-up rounded-full border border-border/70 bg-background/50 px-4 py-2 text-[13px] text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-foreground"
                      style={{ animationDelay: `${i * 35}ms` }}
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={140} className="mt-16">
          <h3 className="eyebrow-muted">Certifications</h3>
          <ul className="mt-5 grid gap-px overflow-hidden rounded-xl border border-border/60 bg-border/50 md:grid-cols-3">
            {certifications.map((c) => (
              <li
                key={c.name}
                className="group bg-background/60 p-6 backdrop-blur-sm transition-colors duration-500 hover:bg-card/70"
              >
                <span
                  aria-hidden
                  className="mb-4 block h-px w-6 bg-primary/60 transition-all duration-500 group-hover:w-12"
                />
                <p className="text-sm font-medium text-foreground">{c.name}</p>
                <p className="mt-1.5 font-mono-ui text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {c.issuer}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

export default Skills;
