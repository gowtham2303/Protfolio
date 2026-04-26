"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const roles = ["Full Stack Developer", "Cloud Architect", "DevOps Engineer", "Tech Lead"];

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-start overflow-hidden bg-black">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="w-full h-full object-cover object-center opacity-80"
        >
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-hero-0BnFGdr81Ifnj3WbBZoNt1KE4D5DMT.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
      </div>

      {/* Subtle grid lines */}
      <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none opacity-20">
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-white/10"
            style={{
              top: `${12.5 * (i + 1)}%`,
              left: 0,
              right: 0,
            }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-white/10"
            style={{
              left: `${8.33 * (i + 1)}%`,
              top: 0,
              bottom: 0,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40">
        <div className="lg:max-w-[65%]">
          {/* Eyebrow */}
          <div 
            className={`mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-white/60">
              <span className="w-8 h-px bg-white/30" />
              Available for opportunities
            </span>
          </div>
          
          {/* Main headline */}
          <div className="mb-8">
            <h1 
              className={`text-left text-[clamp(2.5rem,8vw,8rem)] font-display leading-[0.92] tracking-tight text-white transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="block">Alex Chen</span>
              <span className="block text-muted-foreground text-[0.5em]">
                {roles[roleIndex]}
              </span>
            </h1>
          </div>

          {/* Description */}
          <p 
            className={`text-lg lg:text-xl text-white/70 max-w-xl mb-10 leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Building scalable systems and leading engineering teams. 8+ years crafting digital experiences that matter.
          </p>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-wrap gap-4 mb-12 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button
              size="lg"
              className="bg-white hover:bg-white/90 text-black rounded-full px-8"
              asChild
            >
              <a href="#contact">Get in touch</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 rounded-full px-8"
              asChild
            >
              <a href="#projects">View work</a>
            </Button>
          </div>

          {/* Social Links */}
          <div 
            className={`flex gap-6 transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:alex@example.com" className="text-white/50 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Stats */}
      <div 
        className={`absolute bottom-12 left-0 right-0 px-6 lg:px-12 transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-start gap-10 lg:gap-20">
          {[
            { value: "8+", label: "years experience" },
            { value: "50+", label: "projects delivered" },
            { value: "20+", label: "happy clients" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2">
              <span className="text-3xl lg:text-4xl font-display text-white">{stat.value}</span>
              <span className="text-xs text-white/50 leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 right-6 lg:right-12 hidden lg:flex">
        <a href="#about" className="text-white/30 hover:text-white/60 transition-colors">
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
