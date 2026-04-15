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

  // Arrange skills in rows like the reference (6-4-3 pattern)
  const rows = [
    skills.slice(0, 6),
    skills.slice(6, 10),
    skills.slice(10, 14),
    skills.slice(14),
  ];

  return (
    <section id="skills" className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Tech</p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
          Skills.
        </h2>

        {/* Skills arranged in centered rows */}
        <div className="flex flex-col items-center gap-8 mb-16">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-wrap justify-center gap-6 md:gap-10">
              {row.map((skill, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center gap-2 hover:-translate-y-2 transition-transform duration-300 cursor-default"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-card/30 border border-primary/10 flex items-center justify-center group-hover:border-primary/40 group-hover:shadow-glow transition-all">
                    <span className="text-xs md:text-sm font-bold text-primary text-center px-1 leading-tight">
                      {skill.split(' ').length > 2 ? skill.split(' ').slice(0, 2).join(' ') : skill}
                    </span>
                  </div>
                </div>
              ))}
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
