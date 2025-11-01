import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "CRM & Outreach Platforms",
      skills: [
        { name: "HubSpot CRM", level: 90 },
        { name: "Salesforce", level: 85 },
        { name: "Apollo.io", level: 85 },
        { name: "LinkedIn Sales Navigator", level: 90 },
      ],
    },
    {
      category: "Sales & Account Management",
      skills: [
        { name: "B2C Lead Generation", level: 90 },
        { name: "Sales Pipeline Optimization", level: 85 },
        { name: "Client Acquisition", level: 90 },
        { name: "Account Retention", level: 85 },
      ],
    },
    {
      category: "Market Research & Analytics",
      skills: [
        { name: "SimilarWeb", level: 80 },
        { name: "SEMrush", level: 80 },
        { name: "Power BI", level: 85 },
        { name: "Google Analytics 4", level: 85 },
      ],
    },
    {
      category: "Communication & Automation",
      skills: [
        { name: "Email Marketing (Lemlist, Mailchimp)", level: 90 },
        { name: "Proposal Writing", level: 90 },
        { name: "ROI Modeling", level: 85 },
        { name: "Sales Automation (Zapier)", level: 80 },
      ],
    },
  ];

  const certifications = [
    "Business Development Foundations – LinkedIn Learning",
    "Sales Operations & Management – LinkedIn Learning",
    "Google Analytics for Beginners – Google Analytics Academy",
  ];

  return (
    <section id="skills" className="py-16 md:py-20 px-6 md:px-12">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-5 md:p-6 bg-card/30 border-primary/10 hover:shadow-medium transition-all backdrop-blur-sm">
              <h3 className="text-lg font-bold mb-5 gradient-text">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-hero transition-all duration-1000 ease-out rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6 md:p-8 bg-card/30 border-primary/10 backdrop-blur-sm">
          <h3 className="text-lg md:text-xl font-bold mb-5 gradient-text text-center">
            Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {certifications.map((cert, index) => (
              <Badge 
                key={index} 
                variant="secondary"
                className="text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 text-foreground hover:bg-primary/20 transition-colors border border-primary/20"
              >
                {cert}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
