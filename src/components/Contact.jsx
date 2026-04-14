import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Facebook, Instagram, Send, Copy, Check, ExternalLink, Sparkles } from 'lucide-react';
import AnimatedSection from "./AnimatedSection";

function Contact() {
  const [emailCopied, setEmailCopied] = useState(false);
  const email = "pranavgawas.work@gmail.com";

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/Pranavgawas/", icon: Github, color: "text-white", glow: "rgba(255,255,255,0.1)" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/pranavgawas/", icon: Linkedin, color: "text-[#0077b5]", glow: "rgba(0,119,181,0.2)" },
    { name: "Twitter", url: "https://twitter.com/PranavGawas1999", icon: Twitter, color: "text-[#1da1f2]", glow: "rgba(29,161,242,0.2)" },
    { name: "Instagram", url: "https://www.instagram.com/_pranav_gawas_/", icon: Instagram, color: "text-[#e1306c]", glow: "rgba(225,48,108,0.2)" }
  ];

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <div id="contactId" className="max-w-5xl mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left: Contact CTA */}
        <AnimatedSection animation="fadeInLeft">
          <div className="neo-glass p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Send className="w-32 h-32 rotate-12" />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 neo-badge mb-6 border-neo-purple/20 bg-neo-purple/10 text-neo-purple">
                <Sparkles className="w-3 h-3" />
                <span>Ready for new challenges</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Let's build something <span className="neo-gradient-text">extraordinary</span> together.
              </h2>
              
              <p className="text-neo-text-secondary text-lg mb-10 leading-relaxed max-w-md">
                Currently open to freelance opportunities and full-time roles in full-stack development and system design.
              </p>

              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => window.location.href = `mailto:${email}`}
                  className="neo-btn px-8 py-4 flex items-center gap-3 group/btn"
                >
                  <Mail className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                  Send a Message
                </button>

                <button 
                  onClick={handleCopyEmail}
                  className="neo-btn-outline px-8 py-4 flex items-center gap-3"
                >
                  <AnimatePresence mode="wait">
                    {emailCopied ? (
                      <motion.div
                        key="check"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="flex items-center gap-2 text-green-400"
                      >
                        <Check className="w-5 h-5" />
                        <span>Copied!</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="copy"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="flex items-center gap-2"
                      >
                        <Copy className="w-5 h-5" />
                        <span>Copy Email</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>

              <div className="mt-12 pt-12 border-t border-white/5">
                <p className="text-[10px] font-mono text-neo-text-muted uppercase tracking-[0.2em] mb-4">Direct Email</p>
                <a href={`mailto:${email}`} className="text-xl md:text-2xl font-bold text-neo-purple hover:text-neo-cyan transition-colors duration-300">
                  {email}
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Right: Social Grid */}
        <div className="grid grid-cols-2 gap-6">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <AnimatedSection 
                key={social.name} 
                animation="fadeInUp" 
                delay={index * 100}
              >
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-glass p-8 flex flex-col items-center justify-center gap-4 text-center group hover:border-white/20 transition-all duration-500"
                  style={{ '--glow-color': social.glow }}
                >
                  <div className={`p-4 rounded-2xl bg-white/5 ${social.color} transition-all duration-500 group-hover:scale-110 group-hover:bg-white/10 group-hover:shadow-[0_0_30px_var(--glow-color)]`}>
                    <Icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-white font-bold text-lg block">{social.name}</span>
                    <span className="text-[10px] font-mono text-neo-text-muted flex items-center gap-1 justify-center mt-1">
                      FOLLOW <ExternalLink className="w-2 h-2" />
                    </span>
                  </div>
                </a>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Contact;
