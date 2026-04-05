import React, { useState, useEffect } from "react";
import { Coffee, Code2, Zap, Braces, Database, Terminal, Layers } from "lucide-react";
import { supabase } from "../lib/supabase";
import AnimatedSection from "./AnimatedSection";

const iconMap = { Coffee, Code2, Zap, Braces, Database, Terminal, Layers };

function ProgrammingSkills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSkills() {
      try {
        const { data, error } = await supabase
          .from('skills')
          .select('*')
          .eq('category', 'programming')
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
        const IconComponent = iconMap[skill.icon_name] || Code2;
        return (
          <AnimatedSection
            key={skill.id}
            animation="fadeInUp"
            delay={index * 50}
          >
            <div className="neo-glass group p-6 flex flex-col h-full border-white/5 hover:border-neo-purple/30 transition-all duration-500">
              <div className={`p-4 rounded-2xl bg-white/5 w-fit mb-6 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]`}>
                <IconComponent className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neo-purple transition-colors">
                {skill.name}
              </h3>
              
              <p className="text-neo-text-muted text-sm leading-relaxed">
                {skill.description}
              </p>

              {/* Skill level indicator (Visual decorative) */}
              <div className="mt-auto pt-6 flex items-center gap-2">
                <div className="h-1 flex-1 bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-neo-purple to-neo-cyan w-[85%]" 
                  />
                </div>
                <span className="text-[10px] font-mono text-neo-purple">ESTABLISHED</span>
              </div>
            </div>
          </AnimatedSection>
        );
      })}
    </div>
  );
}

export default ProgrammingSkills;
