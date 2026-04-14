import React from "react";
import { motion } from "framer-motion";
import { scrollToSection } from "../utils/scrollUtils";
import { Github, Linkedin, Twitter, Instagram, Heart } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/Pranavgawas/", icon: Github },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/pranavgawas/", icon: Linkedin },
    { name: "Twitter", url: "https://twitter.com/PranavGawas1999", icon: Twitter },
    { name: "Instagram", url: "https://www.instagram.com/_pranav_gawas_/", icon: Instagram }
  ];

  const quickLinks = [
    { text: "Projects", id: "projectId" },
    { text: "Experience", id: "educationId" },
    { text: "Skills", id: "skillsId" },
    { text: "Contact", id: "contactId" }
  ];

  return (
    <footer className="relative mt-20 pb-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="neo-glass p-8 md:p-12 flex flex-col items-center text-center gap-8">
          {/* Logo / Name */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Pranav <span className="neo-gradient-text">Gawas</span>
            </h2>
            <p className="text-neo-text-muted text-sm font-medium tracking-widest uppercase">Full Stack Developer</p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {quickLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-neo-text-secondary hover:text-neo-purple text-sm font-medium transition-colors duration-300"
              >
                {link.text}
              </button>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 text-neo-text-secondary hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300 border border-white/5"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Bottom Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 text-neo-text-muted text-xs font-medium">
            <p>© {currentYear} Pranav Gawas. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Built with <Heart className="w-3 h-3 text-neo-pink fill-neo-pink" /> {currentYear}
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Orbs */}
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-neo-purple/10 blur-[100px] -z-10 rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-neo-pink/5 blur-[100px] -z-10 rounded-full" />
    </footer>
  );
}

export default Footer;
