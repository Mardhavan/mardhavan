import { Target, Users, LineChart, Handshake } from "lucide-react";

const About = () => {
  const capabilities = [
    {
      icon: Target,
      title: "Pipeline & Acquisition",
      description:
        "Lead generation, prospecting, qualification and full sales-funnel management across inbound and outbound motion.",
    },
    {
      icon: Users,
      title: "Team Leadership",
      description:
        "Leading an 8-member business development team with structured follow-ups, performance reviews and quota ownership.",
    },
    {
      icon: LineChart,
      title: "Revenue & Forecasting",
      description:
        "CRM reporting, KPI tracking, pipeline analysis and revenue forecasting that drive data-backed sales decisions.",
    },
    {
      icon: Handshake,
      title: "Partnerships & Retention",
      description:
        "Negotiating with consultancies and institutional stakeholders while growing accounts through consultative selling.",
    },
  ];

  return (
    <section id="about" className="section-shell">
      <div className="mb-12 flex items-baseline gap-4">
        <span className="eyebrow-muted">01</span>
        <h2 className="text-3xl font-bold uppercase md:text-5xl">Profile</h2>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>
            Business Development professional with hands-on experience in{" "}
            <span className="text-foreground">AI-powered career solutions, SaaS and EdTech sales</span>,
            specialising in lead generation, client acquisition, account management and revenue growth.
          </p>
          <p>
            Proven track record of leading an 8-member business development team generating approximately{" "}
            <span className="text-foreground">$80,000 in monthly team revenue</span> through consultative
            selling, pipeline management and GTM execution.
          </p>
          <p>
            Skilled in CRM platforms, market research, customer segmentation, sales forecasting and business
            performance reporting — and experienced in collaborating with product, operations, marketing and
            customer success teams to optimise sales processes and deliver measurable outcomes across
            competitive markets.
          </p>
        </div>

        <dl className="divide-y divide-border border-y border-border">
          {[
            ["Current role", "Business Development Manager — AI Solutions"],
            ["Company", "Apply Wizz"],
            ["Focus", "AI Career Solutions · SaaS · EdTech"],
            ["Location", "Hyderabad, India"],
            ["Experience", "Aug 2025 — Present"],
          ].map(([k, v]) => (
            <div key={k} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <dt className="font-mono-ui text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {k}
              </dt>
              <dd className="text-sm text-foreground sm:text-right">{v}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((c) => (
          <div key={c.title} className="group bg-card p-6 transition-colors hover:bg-secondary">
            <c.icon className="h-5 w-5 text-primary" />
            <h3 className="mt-4 text-base font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
