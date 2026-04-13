import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skills = [
    "HubSpot CRM", "Salesforce", "Apollo.io", "LinkedIn Sales Navigator",
    "B2C Lead Generation", "Sales Pipeline", "Client Acquisition", "Account Retention",
    "SimilarWeb", "SEMrush", "Power BI", "Google Analytics 4",
    "Lemlist", "Mailchimp", "Zapier", "ROI Modeling", "Proposal Writing",
  ];

  const certifications = [
    "Business Development Foundations – LinkedIn Learning",
    "Sales Operations & Management – LinkedIn Learning",
    "Google Analytics for Beginners – Google Analytics Academy",
  ];

  return (
    <section id="skills" className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Tech</p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
          Skills.
        </h2>

        {/* Floating skill badges - arranged in rows like the reference's icon layout */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group px-5 py-3 rounded-xl bg-card/50 border border-primary/10 hover:border-primary/40 hover:shadow-glow backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 cursor-default"
            >
              <span className="text-sm md:text-base font-medium text-foreground group-hover:text-primary transition-colors">
                {skill}
              </span>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-xl font-bold mb-6 text-foreground">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <Badge 
                key={index} 
                variant="secondary"
                className="text-xs md:text-sm px-4 py-2 bg-primary/10 text-foreground hover:bg-primary/20 transition-colors border border-primary/20"
              >
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
