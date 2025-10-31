import { Code, Target, Lightbulb, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Technical Expert",
      description: "Deep expertise in modern technologies and best practices",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Focused on delivering measurable business impact",
    },
    {
      icon: Lightbulb,
      title: "Innovative Thinker",
      description: "Creative problem-solver with fresh perspectives",
    },
    {
      icon: TrendingUp,
      title: "Continuous Learner",
      description: "Always evolving with the latest industry trends",
    },
  ];

  const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "50+", label: "Projects Completed" },
    { value: "95%", label: "Client Satisfaction" },
    { value: "15+", label: "Technologies" },
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
              With over 3 years of experience in the industry, I specialize in creating innovative solutions 
              that drive business success. My expertise spans across multiple domains, and I'm passionate 
              about leveraging technology to solve complex challenges and deliver measurable results.
              <br /><br />
              I believe in continuous learning and staying ahead of industry trends. My approach combines 
              technical excellence with strategic thinking to create solutions that not only work but also 
              provide real value to users and stakeholders.
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
