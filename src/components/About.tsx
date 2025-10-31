import { Code, Target, Lightbulb, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "CRM & Sales Tech",
      description: "Expert in HubSpot, Salesforce, Apollo.io, and LinkedIn Sales Navigator",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "35% improvement in pipeline efficiency and 22% increase in conversions",
    },
    {
      icon: Lightbulb,
      title: "Strategic Thinker",
      description: "Data-driven approach to sales optimization and lead generation",
    },
    {
      icon: TrendingUp,
      title: "Revenue Growth",
      description: "Secured contracts exceeding ₹15L through strategic partnerships",
    },
  ];

  const stats = [
    { value: "200+", label: "Qualified Leads/Quarter" },
    { value: "35%", label: "Pipeline Growth" },
    { value: "₹15L+", label: "Contracts Secured" },
    { value: "25%", label: "Faster Onboarding" },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about turning ideas into reality and driving innovation through technology
          </p>
        </div>

        <div className="mb-16">
          <Card className="p-8 bg-gradient-card border-primary/20 shadow-medium">
            <p className="text-lg leading-relaxed text-foreground/90">
              As a Business Development Associate at Applywizz, I specialize in B2C sales, client acquisition, 
              and account management. My expertise lies in leveraging CRM platforms (HubSpot, Salesforce), 
              sales automation tools (Lemlist, Apollo.io), and analytics software (Power BI, GA4) to 
              efficiently manage sales pipelines and drive lead generation.
              <br /><br />
              I've successfully optimized outreach efforts, achieving a 35% improvement in reply rates and 
              a 20% increase in operational efficiency. My approach combines data-driven decision-making 
              with strategic relationship building to deliver measurable outcomes and drive revenue growth 
              in the SaaS and EdTech sectors.
            </p>
          </Card>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <Card 
              key={index} 
              className="p-6 text-center hover:shadow-medium transition-all hover:-translate-y-1 bg-gradient-card"
            >
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center">
                  <highlight.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">{highlight.title}</h3>
              <p className="text-sm text-muted-foreground">{highlight.description}</p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
