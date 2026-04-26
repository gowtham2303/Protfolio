import { Navigation } from "@/components/portfolio/navigation";
import { HeroSection } from "@/components/portfolio/hero-section";
import { AboutSection } from "@/components/portfolio/about-section";
import { SkillsSection } from "@/components/portfolio/skills-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { FooterSection } from "@/components/portfolio/footer-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
