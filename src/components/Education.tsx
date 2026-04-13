import { GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Electronics and Communication Engineering",
      institution: "Jawaharlal Nehru Technological University, Hyderabad",
      period: "2020 - 2024",
      achievements: [
        "Developed expertise in technical problem-solving and analytical thinking",
        "Applied engineering concepts to business development strategies",
        "Balanced academic excellence with practical business skills development",
      ],
    },
  ];

  return (
    <section id="education" className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Academic Background</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Education.
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-muted-foreground/20 -translate-x-1/2 hidden md:block" />

          {education.map((edu, index) => (
            <div key={index} className="relative flex flex-col md:flex-row items-center mb-12">
              {/* Card on left */}
              <div className="w-full md:w-[45%] md:pr-12">
                <Card className="p-6 md:p-8 bg-card/50 border-primary/10 backdrop-blur-sm hover:shadow-glow transition-all">
                  <h3 className="text-xl md:text-2xl font-bold mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-primary font-semibold mb-1">{edu.field}</p>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <GraduationCap className="h-4 w-4" />
                    <span className="text-sm">{edu.institution}</span>
                  </div>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-secondary mr-2 mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>

              {/* Circle connector */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-muted border-4 border-background items-center justify-center z-10">
                <div className="w-3 h-3 rounded-full bg-primary/50" />
              </div>

              {/* Date on right */}
              <div className="w-full md:w-[45%] md:pl-12 mt-4 md:mt-0">
                <p className="text-muted-foreground font-medium text-center md:text-left">
                  {edu.period}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
