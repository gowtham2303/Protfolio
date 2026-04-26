"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    company: "Lumen Technologies",
    role: "Information Systems Engineer",
    period: "Aug 2025 - Present",
    description: "Cloud infrastructure management with Microsoft Azure. Terraform-based Infrastructure as Code (IaC). Enterprise-scale automation using Power Automate. M365 ecosystem integration and optimization.",
    technologies: ["Azure", "Terraform", "M365", "PowerShell", "Python"],
  },
  {
    company: "Lumen Technologies",
    role: "Information Systems Intern",
    period: "Feb 2025 - Aug 2025",
    description: "Converted from intern to full-time in 7 months. Implemented automation workflows reducing manual tasks by 40%. Contributed to Azure infrastructure projects and developed internal tools.",
    technologies: ["Azure", "Power Automate", "Scripting"],
  },
  {
    company: "ZettaByte Plus",
    role: "Full Stack Developer",
    period: "Jan 2024 - Apr 2024",
    description: "Built and shipped production-ready web applications for EdTech platform. Designed RESTful APIs and database schemas. Created responsive UI components with React.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "TypeScript"],
  },
  {
    company: "Sigmoid 2025",
    role: "Technical Team Head",
    period: "2024 - 2025",
    description: "Led the development team from concept to deployment for national-level tech symposium. Handled 10,000+ visitors during the event. Integrated registration and payment systems.",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
  },
];

export function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden bg-background"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16 lg:mb-24">
          <div className="lg:col-span-7">
            <span 
              className={`inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="w-12 h-px bg-foreground/30" />
              Experience
            </span>
            
            <h2
              className={`text-5xl md:text-6xl lg:text-7xl font-display tracking-tight leading-[0.95] transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Where I&apos;ve
              <br />
              <span className="text-muted-foreground">worked.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:flex lg:items-end">
            <p 
              className={`text-lg text-muted-foreground leading-relaxed transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              From intern to engineer — a journey of building cloud infrastructure, automation systems, and production-ready applications.
            </p>
          </div>
        </div>

        {/* Experience List */}
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <div
              key={`${exp.company}-${exp.role}`}
              className={`group border-t border-border last:border-b py-8 lg:py-12 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                {/* Company & Period */}
                <div className="lg:col-span-4 flex lg:flex-col justify-between lg:justify-start gap-2">
                  <h3 className="text-2xl lg:text-3xl font-display group-hover:translate-x-2 transition-transform duration-500">
                    {exp.company}
                  </h3>
                  <span className="text-sm font-mono text-muted-foreground">{exp.period}</span>
                </div>

                {/* Role & Description */}
                <div className="lg:col-span-6">
                  <p className="text-lg text-muted-foreground mb-2">{exp.role}</p>
                  <p 
                    className={`text-sm text-muted-foreground/80 leading-relaxed transition-all duration-500 ${
                      activeIndex === index ? "opacity-100 max-h-40" : "opacity-0 max-h-0 lg:opacity-100 lg:max-h-40"
                    } overflow-hidden`}
                  >
                    {exp.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="lg:col-span-2 flex lg:flex-col lg:items-end gap-2">
                  <div className="flex flex-wrap lg:flex-col gap-2 lg:gap-1 lg:text-right">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="text-xs font-mono text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Resume Link */}
        <div 
          className={`mt-12 lg:mt-16 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors group"
          >
            <span className="text-lg">Download full resume</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
