
import { useState, useEffect } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsShowcase } from "@/components/SkillsShowcase";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <ScrollProgress progress={scrollProgress} />
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <AchievementsSection />
          <ExperienceSection />
          <SkillsShowcase />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
