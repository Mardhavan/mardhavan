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
      <SectionHeading title="Education" />

      <div className="space-y-8">
        {education.map((edu, i) => (
          <Reveal key={edu.degree} delay={i * 80}>
            <article className="group grid gap-2 border-l border-border pl-5 transition-colors duration-300 hover:border-primary md:pl-7">
                <h3 className="text-lg font-semibold tracking-tight md:text-xl">{edu.degree}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {edu.institution} · {edu.location}
                </p>
            </article>
            <div className="mt-8 hairline" />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
