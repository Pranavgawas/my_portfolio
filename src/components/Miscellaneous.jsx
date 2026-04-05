import React, { useState, useEffect } from "react";
import { Container, GitBranch, Terminal, Globe, Award, Sparkles } from "lucide-react";
import { supabase } from "../lib/supabase";
import AnimatedSection from "./AnimatedSection";

const iconMap = { Container, GitBranch, Terminal, Globe, Award, Sparkles };

function Miscellaneous() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSkills() {
      try {
        const { data, error } = await supabase
          .from('skills')
          .select('*')
          .eq('category', 'other')
          .order('sort_order', { ascending: true });

        if (!error && data) {
          setSkills(data);
        }
      } catch (err) {
        console.error('Error fetching skills:', err);
      }
      setLoading(false);
    }
    fetchSkills();
  }, []);

  if (loading) return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {[1, 2, 3, 4].map(i => (
        <div key={i} className="neo-glass h-40 animate-pulse opacity-50" />
      ))}
    </div>
  );

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {skills.map((skill, index) => {
        const IconComponent = iconMap[skill.icon_name] || Terminal;
        return (
          <AnimatedSection
            key={skill.id}
            animation="fadeInUp"
            delay={index * 50}
          >
            <div className="neo-glass group p-6 flex flex-col h-full border-white/5 hover:border-neo-cyan/30 transition-all duration-500">
              <div className={`p-4 rounded-2xl bg-white/5 w-fit mb-6 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]`}>
                <IconComponent className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neo-cyan transition-colors">
                {skill.name}
              </h3>
              
              <p className="text-neo-text-muted text-sm leading-relaxed">
                {skill.description}
              </p>

              {/* Status indicator */}
              <div className="mt-auto pt-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-neo-cyan" />
                <span className="text-[10px] font-mono text-neo-cyan uppercase tracking-widest">Active Tool</span>
              </div>
            </div>
          </AnimatedSection>
        );
      })}
    </div>
  );
}

export default Miscellaneous;
