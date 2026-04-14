import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal, Sparkles, Rocket, Cpu, Globe, ChevronRight } from 'lucide-react';
import { scrollToSection } from '../utils/scrollUtils';
import { supabase } from '../lib/supabase';

function Hero() {
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      setError(true);
    }, 8000);

    async function fetchHeroContent() {
      try {
        const { data, err } = await supabase
          .from('hero_content')
          .select('*')
          .limit(1)
          .single();

        if (!err && data) {
          setHeroData(data);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error('Error fetching hero content:', err);
        setError(true);
      }
      clearTimeout(timeout);
      setLoading(false);
    }
    fetchHeroContent();
    return () => clearTimeout(timeout);
  }, []);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-neo-bg-primary">
      <div className="w-12 h-12 border-4 border-neo-purple border-t-transparent rounded-full animate-spin" />
    </div>
  );

  if (error || !heroData) return (
    <div className="min-h-screen flex items-center justify-center bg-neo-bg-primary">
      <p className="text-neo-text-muted text-sm">Could not load hero content. Please refresh.</p>
    </div>
  );

  const titleWords = heroData.heading.split(" ");

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 pb-12 px-6">
      {/* Background Lighting Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neo-purple/20 blur-[120px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neo-cyan/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Text Content */}
        <div className="lg:col-span-12 xl:col-span-7 flex flex-col items-center xl:items-start text-center xl:text-left order-2 xl:order-1">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="neo-badge mb-8 flex items-center gap-3 px-6 py-2 border-white/10"
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-white font-mono text-[11px] tracking-widest uppercase">Open for Innovation</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold leading-[1.1] text-white mb-8 tracking-tight">
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className={`inline-block mr-4 ${i >= titleWords.length - 2 ? 'neo-gradient-text' : ''}`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-xl text-neo-text-secondary mb-12 max-w-2xl leading-relaxed font-medium"
          >
            {heroData.subheading} — <span className="text-neo-text-muted">{heroData.bio}</span>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
          >
            <button 
              onClick={() => scrollToSection("projectId")}
              className="neo-btn group"
            >
              <span className="relative z-10 flex items-center gap-3">
                Explore Projects
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button 
              onClick={() => scrollToSection("contactId")}
              className="neo-btn-outline group relative overflow-hidden"
            >
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </motion.div>

          {/* Tech Stack Chips */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="mt-16 flex flex-wrap justify-center xl:justify-start gap-3"
          >
            {heroData.tech_stack.map((tech, index) => (
              <span key={index} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-neo-text-muted text-xs font-bold hover:text-white hover:border-neo-purple/50 transition-all duration-300">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Visual Component */}
        <div className="lg:col-span-12 xl:col-span-5 flex justify-center items-center order-1 xl:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            {/* The Main Container */}
            <div className="neo-glass p-6 md:p-10 relative z-10 overflow-hidden group">
              <div className="aspect-square w-64 md:w-80 rounded-2xl overflow-hidden relative border border-white/10">
                <img 
                  src={heroData.avatar_url} 
                  alt="Pranav" 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neo-bg via-transparent to-transparent opacity-60" />
              </div>
              
              <div className="mt-8 flex justify-between items-center group-hover:translate-y-[-5px] transition-transform duration-500">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">Pranav Gawas</h3>
                  <p className="text-neo-text-muted text-xs font-mono tracking-widest uppercase mt-1">Full Stack Engineer</p>
                </div>
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-neo-purple">
                  <Terminal className="w-5 h-5" />
                </div>
              </div>

              {/* Decorative hardware-like line */}
              <div className="mt-8 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 p-4 neo-glass border-white/10 text-neo-cyan shadow-xl z-20 backdrop-blur-3xl"
            >
              <Cpu className="w-6 h-6" />
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 p-4 neo-glass border-white/10 text-neo-pink shadow-xl z-20 backdrop-blur-3xl"
            >
              <Rocket className="w-6 h-6" />
            </motion.div>

            {/* Orb behind */}
            <div className="absolute inset-0 bg-neo-purple/20 blur-[80px] -z-10 scale-150 animate-pulse" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default Hero;