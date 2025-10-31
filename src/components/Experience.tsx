import { Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      company: "Company Name",
      position: "Senior Position",
      period: "2022 - Present",
      description: "Leading strategic initiatives and driving innovation in technology solutions. Successfully delivered multiple high-impact projects that improved operational efficiency by 30%.",
      achievements: [
        "Increased team productivity by 40%",
        "Reduced project delivery time by 25%",
        "Implemented best practices across teams",
      ],
    },
    {
      company: "Previous Company",
      position: "Mid-Level Position",
      period: "2020 - 2022",
      description: "Developed and maintained critical business applications. Collaborated with cross-functional teams to deliver high-quality solutions.",
      achievements: [
        "Delivered 15+ successful projects",
        "Improved code quality by 35%",
        "Mentored junior team members",
      ],
    },
    {
      company: "First Company",
      position: "Junior Position",
      period: "2018 - 2020",
      description: "Started career building foundational skills in software development. Contributed to various projects and learned industry best practices.",
      achievements: [
        "Completed comprehensive training program",
        "Contributed to 10+ projects",
        "Received excellence award",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A journey of growth, learning, and delivering exceptional results
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-medium transition-all bg-gradient-card relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-hero"></div>
              <div className="ml-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{exp.position}</h3>
                    <div className="flex items-center text-primary gap-2">
                      <Briefcase className="h-4 w-4" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                  </div>
                  <div className="text-muted-foreground mt-2 md:mt-0 font-medium">
                    {exp.period}
                  </div>
                </div>
                
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-primary">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-secondary mr-2">▸</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
