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
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive technical skillset built through years of hands-on experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 bg-gradient-card hover:shadow-medium transition-all">
              <h3 className="text-xl font-bold mb-6 text-primary">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
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

        <Card className="p-8 bg-gradient-card">
          <h3 className="text-xl font-bold mb-6 text-primary text-center">
            Certifications & Achievements
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <Badge 
                key={index} 
                variant="secondary"
                className="text-sm px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
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
