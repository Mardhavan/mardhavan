import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const education = [
  {
    degree: "Bachelor of Business Administration",
    institution: "ICFAI Business School (IBS)",
    location: "India",
    period: "2025 — Present",
  },
  {
    degree: "B.Tech, Electronics and Communication Engineering",
    institution: "Jawaharlal Nehru Technological University",
    location: "Hyderabad, India",
    period: "2020 — 2024",
  },
];

const Education = () => (
  <section id="education" className="section-shell">
    <div className="shell">
      <SectionHeading index="07" title="Education" />

      <div className="space-y-8">
        {education.map((edu, i) => (
          <Reveal key={edu.degree} delay={i * 80}>
            <div className="grid gap-3 md:grid-cols-[230px_1fr] md:gap-12">
              <div className="font-mono-ui text-[11px] uppercase tracking-[0.2em] text-primary">
                {edu.period}
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-tight md:text-xl">{edu.degree}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {edu.institution} · {edu.location}
                </p>
              </div>
            </div>
            <div className="mt-8 hairline" />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
