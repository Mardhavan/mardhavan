import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const education = [
  {
    degree: "Bachelor of Business Administration",
    institution: "ICFAI Business School (IBS)",
    location: "India",
  },
  {
    degree: "B.Tech, Electronics and Communication Engineering",
    institution: "Jawaharlal Nehru Technological University",
    location: "Hyderabad, India",
  },
];

const Education = () => (
  <section id="education" className="section-shell">
    <div className="shell">
      <SectionHeading kicker="Education" title="Foundations." />

      <div className="grid gap-px overflow-hidden rounded-xl border border-border/60 bg-border/50 md:grid-cols-2">
        {education.map((edu, i) => (
          <Reveal key={edu.degree} delay={i * 80} className="h-full">
            <article className="group relative h-full overflow-hidden bg-background/60 p-8 backdrop-blur-sm transition-colors duration-500 hover:bg-card/70 md:p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(70% 70% at 0% 0%, hsl(var(--primary) / 0.08), transparent 70%)",
                }}
              />
              <div className="relative">
                <span
                  aria-hidden
                  className="mb-6 block h-px w-8 bg-primary/60 transition-all duration-500 group-hover:w-16"
                />
                <h3 className="text-lg font-semibold tracking-tight md:text-2xl">{edu.degree}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{edu.institution}</p>
                <p className="mt-1 font-mono-ui text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  {edu.location}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
