import { GraduationCap, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const Education = () => {
  const education = [
    {
      degree: "Master of Science",
      field: "Computer Science",
      institution: "University Name",
      period: "2016 - 2018",
      description: "Specialized in Machine Learning and Data Science. Graduated with honors.",
      achievements: [
        "GPA: 3.8/4.0",
        "Research published in international journals",
        "Teaching Assistant for Advanced Algorithms",
      ],
    },
    {
      degree: "Bachelor of Technology",
      field: "Information Technology",
      institution: "College Name",
      period: "2012 - 2016",
      description: "Foundation in software engineering principles and computer science fundamentals.",
      achievements: [
        "First Class with Distinction",
        "President of Computer Science Club",
        "Winner of multiple hackathons",
      ],
    },
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Education & <span className="gradient-text">Learning</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Academic foundation and continuous pursuit of knowledge
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-medium transition-all bg-gradient-card relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-hero"></div>
              <div className="ml-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-1">
                      {edu.degree} - {edu.field}
                    </h3>
                    <div className="flex items-center text-primary gap-2">
                      <GraduationCap className="h-5 w-5" />
                      <span className="font-semibold">{edu.institution}</span>
                    </div>
                  </div>
                  <div className="text-muted-foreground mt-2 md:mt-0 font-medium">
                    {edu.period}
                  </div>
                </div>
                
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  {edu.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                    <Award className="h-4 w-4" />
                    <h4>Key Highlights:</h4>
                  </div>
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, i) => (
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

export default Education;
