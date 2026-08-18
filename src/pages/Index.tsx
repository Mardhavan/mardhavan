import { useState, useCallback } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Approach from "@/components/Approach";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import LoadingScreen from "@/components/LoadingScreen";
import ParticleField from "@/components/ParticleField";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = useCallback(() => setIsLoading(false), []);

  return (
    <>
      {isLoading && <LoadingScreen onLoadComplete={handleLoadComplete} />}
      <ParticleField />
      <div
        className={`relative z-10 min-h-screen ${
          isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-700"
        }`}
      >
        <ScrollProgress />
        <Navigation />
        <main>
          <Hero />
          <About />
          <Expertise />
          <Experience />
          <Work />
          <Approach />
          <Skills />
          <Education />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
