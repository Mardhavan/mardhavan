import { Target, Lightbulb, TrendingUp, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: "CRM & Sales Tech",
    },
    {
      icon: Users,
      title: "Client Acquisition",
    },
    {
      icon: Lightbulb,
      title: "Strategic Thinker",
    },
    {
      icon: TrendingUp,
      title: "Revenue Growth",
    },
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Introduction</p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
          Overview.
        </h2>

        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-start mb-12">
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-3xl">
            As a Business Development Associate at Applywizz, I specialize in B2C sales, client acquisition, 
            and account management. My expertise lies in leveraging CRM platforms like HubSpot, Salesforce, 
            Apollo.io and LinkedIn Sales Navigator to efficiently manage sales pipelines and drive lead generation. 
            I've successfully optimized outreach efforts, achieving a 35% improvement in reply rates, 
            a 20% increase in operational efficiency, and secured contracts exceeding ₹15L in the EdTech sector.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {highlights.map((highlight, index) => (
            <Card 
              key={index} 
              className="group p-6 text-center hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-card/50 border-primary/20 hover:border-primary/40 backdrop-blur-sm"
            >
              <div className="mb-4 flex justify-center">
                <div className="w-14 h-14 rounded-full bg-gradient-hero flex items-center justify-center group-hover:scale-110 transition-transform">
                  <highlight.icon className="h-7 w-7 text-primary-foreground" />
                </div>
              </div>
              <h3 className="font-bold text-sm md:text-base">{highlight.title}</h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
