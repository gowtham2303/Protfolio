"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Banking Application",
    description: "Full-stack banking app with core financial operations. Features user authentication, transaction management (deposits, withdrawals, transfers), account balance tracking, and secure transaction processing.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Upscaled%20Image%20%2810%29-UnDKstODkIENp5xqTYUEpt0Sm8tNOw.png",
    technologies: ["TypeScript", "React", "Node.js", "Express", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "https://github.com/gowtham2303",
  },
  {
    title: "Sigmoid 2K25 Website",
    description: "Official website for national-level technical symposium. Led the development team from concept to deployment, handling 10,000+ visitors during the event with integrated registration and payment systems.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Upscaled%20Image%20%2812%29-ng3RrNnsPMJ5CrtOjcPTmhHg01W11q.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    liveUrl: "#",
    githubUrl: "https://github.com/gowtham2303",
  },
  {
    title: "SVUCE College Web App",
    description: "Official web application for Sri Venkateswara University. Student and faculty information portal with course management, announcements, notifications, and resource sharing platform. Used by 5000+ users.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-hero-0BnFGdr81Ifnj3WbBZoNt1KE4D5DMT.mp4",
    technologies: ["JavaScript", "React", "Node.js", "CMS"],
    liveUrl: "#",
    githubUrl: "https://github.com/gowtham2303",
    isVideo: true,
  },
];

export function ProjectsSection() {
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
      id="projects"
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
            Selected Work
          </span>
          
          <h2
            className={`text-5xl md:text-6xl lg:text-7xl font-display tracking-tight leading-[0.95] text-white transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Projects I&apos;m
            <br />
            <span className="text-white/40">proud of.</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16 lg:space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group grid lg:grid-cols-12 gap-8 lg:gap-12 items-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              } ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? "lg:col-start-7" : ""} lg:col-span-6 relative overflow-hidden`}>
                <div className="relative aspect-[16/10] overflow-hidden border border-white/10">
                  {project.isVideo ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    >
                      <source src={project.image} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""} lg:col-span-6`}>
                <span className="text-xs font-mono text-white/30 mb-4 block">0{index + 1}</span>
                <h3 className="text-3xl lg:text-4xl font-display text-white mb-4 group-hover:translate-x-2 transition-transform duration-500">
                  {project.title}
                </h3>
                <p className="text-lg text-white/60 leading-relaxed mb-6">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1 border border-white/20 text-white/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white/20 text-white hover:bg-white/10 rounded-full"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      View project
                      <ArrowUpRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white/60 hover:text-white hover:bg-white/10 rounded-full"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
