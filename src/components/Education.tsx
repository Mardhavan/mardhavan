const Education = () => {
  const education = [
    {
      degree: "Bachelor of Business Administration",
      institution: "ICFAI Business School (IBS)",
      location: "India",
      period: "2025 — Present",
    },
    {
      degree: "Bachelor of Technology in Electronics and Communication Engineering",
      institution: "Jawaharlal Nehru Technological University",
      location: "Hyderabad, India",
      period: "2020 — 2024",
    },
  ];

  return (
    <section id="education" className="section-shell">
      <div className="mb-12 flex items-baseline gap-4">
        <span className="eyebrow-muted">06</span>
        <h2 className="text-3xl font-bold uppercase md:text-5xl">Education</h2>
      </div>

      <div className="border-t border-border">
        {education.map((edu) => (
          <div
            key={edu.degree}
            className="grid gap-3 border-b border-border py-8 md:grid-cols-[220px_1fr] md:gap-12"
          >
            <div className="font-mono-ui text-xs uppercase tracking-[0.16em] text-primary">
              {edu.period}
            </div>
            <div>
              <h3 className="text-lg font-semibold md:text-xl">{edu.degree}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {edu.institution} · {edu.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
