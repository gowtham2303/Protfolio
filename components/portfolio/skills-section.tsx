"use client";

import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    title: "Cloud & Infrastructure",
    skills: ["Microsoft Azure", "Terraform", "M365", "Cloud Provisioning", "Infrastructure Monitoring"],
  },
  {
    title: "Process Automation",
    skills: ["Power Automate", "CI/CD Pipelines", "PowerShell", "Shell Scripting", "System Integration"],
  },
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5/CSS3", "Responsive Design"],
  },
  {
    title: "Backend & Database",
    skills: ["Node.js", "Express.js", "Python", "PostgreSQL", "MySQL", "MongoDB"],
  },
];

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
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
      id="skills"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden bg-black"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span 
            className={`inline-flex items-center gap-3 text-sm font-mono text-white/50 mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="w-12 h-px bg-white/30" />
            Technical Skills
          </span>
          
          <h2
            className={`text-5xl md:text-6xl lg:text-7xl font-display tracking-tight leading-[0.95] text-white transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Tools I use to
            <br />
            <span className="text-white/40">build things.</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`group transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${catIndex * 100}ms` }}
            >
              <div className="border border-white/10 p-6 lg:p-8 hover:border-white/30 transition-colors duration-500 h-full">
                <h3 className="text-lg font-display text-white mb-6 flex items-center gap-3">
                  <span className="text-xs font-mono text-white/30">0{catIndex + 1}</span>
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skill}
                      className={`text-white/60 hover:text-white transition-colors duration-300 flex items-center gap-2 ${
                        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                      }`}
                      style={{ transitionDelay: `${catIndex * 100 + skillIndex * 50}ms` }}
                    >
                      <span className="w-1 h-1 bg-white/40 rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom marquee */}
        <div className="mt-20 lg:mt-32 overflow-hidden">
          <div className="marquee whitespace-nowrap">
            <span className="inline-block text-[120px] lg:text-[200px] font-display text-white/5 tracking-tight">
              Azure &middot; Terraform &middot; React &middot; Node.js &middot; Python &middot; Power Automate &middot;&nbsp;
            </span>
            <span className="inline-block text-[120px] lg:text-[200px] font-display text-white/5 tracking-tight">
              Azure &middot; Terraform &middot; React &middot; Node.js &middot; Python &middot; Power Automate &middot;&nbsp;
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
