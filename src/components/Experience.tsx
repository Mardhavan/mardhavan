import { Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Business Development Manager – AI Solutions",
      company: "Apply Wizz",
      period: "Jun 2026 - Present",
      description:
        "Directing business development for AI-powered career solutions, owning the end-to-end sales cycle from inbound and outbound opportunity generation through onboarding and retention.",
      achievements: [
        "Generating approximately $70,000 in monthly revenue through consultative selling and structured pipeline execution",
        "Developed GTM strategies using CRM, market research, customer segmentation, and inbound lead analysis to expand the qualified pipeline",
        "Managed the end-to-end sales cycle with product, operations, and customer success teams to convert inquiries and strengthen retention",
        "Optimized sales performance via CRM reporting, KPI tracking, pipeline analysis, and revenue forecasting",
      ],
    },
    {
      title: "Senior Business Development Associate",
      company: "Apply Wizz",
      period: "Jan 2026 - May 2026",
      description:
        "Led a 4-member B2C EdTech sales team, managing high-ticket learner counseling, pipeline conversion, and revenue execution.",
      achievements: [
        "Generated approximately $55,000 in monthly revenue through structured follow-ups and performance reviews",
        "Generated 200+ qualified leads across priority markets using LinkedIn Sales Navigator",
        "Leveraged HubSpot CRM to manage pipeline progression, forecasting, and the full lead-to-enrollment lifecycle",
        "Improved customer retention and referrals through consultative selling and proactive engagement",
        "Negotiated partnerships with education consultancies and institutional stakeholders to expand market presence",
        "Collaborated with marketing and leadership to optimize campaigns and refine outreach through data-driven decisions",
      ],
    },
    {
      title: "Business Development Associate",
      company: "Apply Wizz",
      period: "Aug 2025 - Dec 2025",
      description:
        "Drove prospecting, lead qualification, and outreach execution across EdTech and SaaS segments while supporting partnership development.",
      achievements: [
        "Generated over $25,000 in revenue by converting qualified prospects through LinkedIn Sales Navigator and sales outreach",
        "Added 150+ prospective education partners and consultancies to the pipeline",
        "Maintained accurate prospect records and follow-up schedules in HubSpot CRM for reliable pipeline tracking",
        "Researched competitor offerings using SEMrush, SimilarWeb, and Ahrefs to guide prospect targeting",
        "Executed targeted email outreach campaigns with Mailchimp to strengthen lead nurturing",
        "Prepared sales presentations and proposals in PowerPoint and Excel for universities and consultancies",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 md:px-0 cursor-glow-section">
      <div className="w-full max-w-full md:px-8 lg:px-12">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Work Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A journey of growth, learning, and delivering exceptional results
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-glow transition-all bg-gradient-card relative overflow-hidden group hover-glow-card"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-hero"></div>
              <div className="ml-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
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
