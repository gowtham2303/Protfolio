"use client";

import { useEffect, useRef, useState } from "react";

export function AboutSection() {
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
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden bg-background"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div 
            className={`lg:col-span-5 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Upscaled%20Image%20%2812%29-ng3RrNnsPMJ5CrtOjcPTmhHg01W11q.png"
                alt="Professional portrait"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7">
            <span 
              className={`inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="w-12 h-px bg-foreground/30" />
              About me
            </span>
            
            <h2
              className={`text-4xl md:text-5xl lg:text-6xl font-display tracking-tight leading-[1.1] mb-8 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Turning complex problems into{" "}
              <span className="text-muted-foreground">elegant solutions.</span>
            </h2>

            <div 
              className={`space-y-6 text-lg text-muted-foreground leading-relaxed transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <p>
                I&apos;m a Senior Full Stack Developer based in San Francisco, with a passion for building scalable web applications and leading high-performing engineering teams.
              </p>
              <p>
                With over 8 years of experience in the tech industry, I&apos;ve worked with startups and Fortune 500 companies alike, helping them architect systems that handle millions of users and process terabytes of data daily.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me contributing to open-source projects, mentoring junior developers, or exploring the latest in cloud infrastructure and AI technologies.
              </p>
            </div>

            {/* Quick facts */}
            <div 
              className={`grid grid-cols-2 gap-6 mt-12 pt-12 border-t border-border transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {[
                { label: "Location", value: "San Francisco, CA" },
                { label: "Education", value: "MS Computer Science" },
                { label: "Languages", value: "English, Mandarin" },
                { label: "Availability", value: "Open to offers" },
              ].map((fact) => (
                <div key={fact.label}>
                  <span className="text-xs font-mono text-muted-foreground">{fact.label}</span>
                  <p className="text-foreground mt-1">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
