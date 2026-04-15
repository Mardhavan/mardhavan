const Experience = () => {
  const experiences = [
    {
      title: "Business Development Associate",
      company: "Applywizz",
      period: "August 2025 - Present",
      achievements: [
        "Created dynamic lead generation strategy identifying 200+ qualified leads per quarter, improving pipeline by 35%",
        "Optimized outreach efforts through HubSpot CRM and Lemlist, achieving 35% improvement in reply rates and 40% faster response times",
        "Integrated HubSpot automation with Google Sheets, enhancing operational efficiency by 20%",
        "Collaborated with marketing and analytics teams, resulting in 22% increase in lead-to-demo conversion rates",
        "Developed custom business proposals securing contracts exceeding ₹15L in the EdTech sector",
        "Automated client onboarding process, reducing timelines by 25%",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">What I have done so far</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Work Experience.
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-muted-foreground/20 -translate-x-1/2 hidden md:block" />

          {experiences.map((exp, index) => (
            <div key={index} className="relative flex flex-col md:flex-row items-center mb-12">
              {/* Card on left */}
              <div className="w-full md:w-[45%] md:pr-12">
                <div className="p-6 md:p-8 bg-card/30 border border-primary/10 backdrop-blur-sm rounded-2xl hover:shadow-glow transition-all">
                  <h3 className="text-xl md:text-2xl font-bold mb-1 text-foreground">{exp.title}</h3>
                  <p className="text-primary font-semibold mb-4">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-secondary mr-2 mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Circle connector */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-muted border-4 border-background items-center justify-center z-10">
                <div className="w-3 h-3 rounded-full bg-primary/50" />
              </div>

              {/* Date on right */}
              <div className="w-full md:w-[45%] md:pl-12 mt-4 md:mt-0">
                <p className="text-muted-foreground font-medium text-center md:text-left">
                  {exp.period}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
