import astronautImg from "@/assets/astronaut-about.png";
import gemIcon1 from "@/assets/gem-icon-1.png";
import gemIcon2 from "@/assets/gem-icon-2.png";
import gemIcon3 from "@/assets/gem-icon-3.png";
import gemIcon4 from "@/assets/gem-icon-4.png";

const About = () => {
  const highlights = [
    { icon: gemIcon1, title: "CRM & Sales Tech" },
    { icon: gemIcon2, title: "Client Acquisition" },
    { icon: gemIcon3, title: "Strategic Thinker" },
    { icon: gemIcon4, title: "Revenue Growth" },
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Introduction</p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
          Overview.
        </h2>

        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-start mb-16">
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-3xl">
            As a Business Development Associate at Applywizz, I specialize in B2C sales, client acquisition, 
            and account management. My expertise lies in leveraging CRM platforms like HubSpot, Salesforce, 
            Apollo.io and LinkedIn Sales Navigator to efficiently manage sales pipelines and drive lead generation. 
            I've successfully optimized outreach efforts, achieving a 35% improvement in reply rates, 
            a 20% increase in operational efficiency, and secured contracts exceeding ₹15L in the EdTech sector.
          </p>
          <div className="hidden md:block">
            <img 
              src={astronautImg} 
              alt="Astronaut illustration" 
              className="w-64 lg:w-80 float-animation"
              loading="lazy"
              width={800}
              height={800}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {highlights.map((highlight, index) => (
            <div 
              key={index} 
              className="group p-6 text-center rounded-2xl bg-card/30 border border-cyan-500/20 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(0,255,255,0.1)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-4 flex justify-center">
                <img 
                  src={highlight.icon} 
                  alt={highlight.title} 
                  className="w-16 h-16 object-contain group-hover:scale-110 transition-transform"
                  loading="lazy"
                  width={512}
                  height={512}
                />
              </div>
              <h3 className="font-bold text-sm md:text-base text-foreground">{highlight.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
