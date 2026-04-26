"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export function ContactSection() {
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
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden bg-background"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span 
            className={`inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="w-12 h-px bg-foreground/30" />
            Get in touch
          </span>
          
          <h2
            className={`text-5xl md:text-6xl lg:text-[100px] font-display tracking-tight leading-[0.95] transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Let&apos;s work
            <br />
            <span className="text-muted-foreground">together.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div 
            className={`lg:col-span-5 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you. Let&apos;s create something amazing together.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-border flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <span className="text-xs font-mono text-muted-foreground block mb-1">Email</span>
                  <a href="mailto:alex@example.com" className="text-foreground hover:text-muted-foreground transition-colors">
                    alex.chen@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-border flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <span className="text-xs font-mono text-muted-foreground block mb-1">Phone</span>
                  <a href="tel:+14155551234" className="text-foreground hover:text-muted-foreground transition-colors">
                    +1 (415) 555-1234
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-border flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <span className="text-xs font-mono text-muted-foreground block mb-1">Location</span>
                  <p className="text-foreground">San Francisco, California</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12 pt-12 border-t border-border">
              <span className="text-xs font-mono text-muted-foreground block mb-4">Find me on</span>
              <div className="flex gap-6">
                {["GitHub", "LinkedIn", "Twitter"].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="text-sm text-foreground hover:text-muted-foreground transition-colors flex items-center gap-1 group"
                  >
                    {platform}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className={`lg:col-span-7 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="text-xs font-mono text-muted-foreground block mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    className="bg-transparent border-border h-12 rounded-none focus:border-foreground transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-xs font-mono text-muted-foreground block mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-transparent border-border h-12 rounded-none focus:border-foreground transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="text-xs font-mono text-muted-foreground block mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Project inquiry"
                  className="bg-transparent border-border h-12 rounded-none focus:border-foreground transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-xs font-mono text-muted-foreground block mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="bg-transparent border-border rounded-none focus:border-foreground transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full md:w-auto bg-foreground hover:bg-foreground/90 text-background rounded-full px-12 h-14"
              >
                Send message
                <ArrowUpRight className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
