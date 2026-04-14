import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import image from "../assets/image.json";
import { scrollToSection, getCurrentSection } from "../utils/scrollUtils";

function Navbar() {
  const avatarUrl = image["avatar"];
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let timeoutId = null;
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (timeoutId) clearTimeout(timeoutId);
      
      timeoutId = setTimeout(() => {
        const currentSection = getCurrentSection();
        setActiveSection(currentSection);
      }, 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "projectId", label: "Projects" },
    { id: "educationId", label: "Experience" },
    { id: "skillsId", label: "Skills" },
    { id: "contactId", label: "Contact" },
  ];

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-4 md:px-8 py-6 ${
        isScrolled ? 'py-4 translate-y-0' : 'py-8'
      }`}
    >
      <div className={`max-w-5xl mx-auto neo-glass flex items-center justify-between px-6 py-3 transition-all duration-500 ${
        isScrolled ? 'shadow-[0_8px_32px_rgba(0,0,0,0.5)] border-white/20' : 'border-white/10'
      }`}>
        <div className="flex items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-10 h-10 rounded-xl border border-white/10 overflow-hidden shadow-lg"
          >
            <img alt="Pranav" src={avatarUrl} className="w-full h-full object-cover" />
          </motion.div>
          <button 
            className="text-lg font-bold text-white tracking-tight hover:text-neo-purple transition-colors"
            onClick={() => handleNavClick("hero")}
          >
            Pranav <span className="neo-gradient-text">Gawas</span>
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-5 py-2.5 text-sm font-bold tracking-wide transition-all duration-300 relative rounded-xl ${
                activeSection === item.id 
                  ? 'text-white bg-white/10' 
                  : 'text-neo-text-secondary hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-neo-purple rounded-full shadow-[0_0_10px_var(--neo-purple)]"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-24 left-4 right-4 lg:hidden neo-glass p-4"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-5 py-4 rounded-2xl font-bold transition-all ${
                    activeSection === item.id 
                      ? 'bg-white/10 text-white border border-white/10' 
                      : 'text-neo-text-secondary hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
