"use client";

import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/gowtham2303" },
  { name: "LinkedIn", href: "https://linkedin.com/in/gowthamsree" },
];

export function FooterSection() {
  return (
    <footer className="relative bg-black">
      {/* Panoramic banner image */}
      <div className="relative w-full h-[200px] md:h-[280px] overflow-hidden">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Upscaled%20Image%20%2810%29-UnDKstODkIENp5xqTYUEpt0Sm8tNOw.png"
          alt="Atmospheric landscape"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      {/* Footer content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="py-16 lg:py-20">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div>
              <a href="#" className="inline-flex items-center gap-2 mb-6">
                <span className="text-3xl font-display text-white">Gowtham Sree</span>
              </a>

              <p className="text-white/50 leading-relaxed mb-8 max-w-xs text-sm">
                Information Systems Engineer at Lumen Technologies. Building cloud infrastructure, automation pipelines, and full-stack applications.
              </p>

              {/* Social Links */}
              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/40 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-sm font-medium text-white mb-6">Navigation</h3>
              <ul className="space-y-4">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-white/40 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-medium text-white mb-6">Contact</h3>
              <ul className="space-y-4 text-sm text-white/40">
                <li>
                  <a href="mailto:gowtham.sree@example.com" className="hover:text-white transition-colors">
                    gowtham.sree@example.com
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/gowthamsree" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    linkedin.com/in/gowthamsree
                  </a>
                </li>
                <li>Bengaluru, Karnataka, India</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/30">
            &copy; {new Date().getFullYear()} Gowtham Sree. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-sm text-white/30">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Available for hire
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
