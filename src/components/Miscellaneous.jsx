import React, { useState, useEffect } from "react";
import { Container, GitBranch, Terminal } from "lucide-react";
import { supabase } from "../lib/supabase";
import { fallbackSkills } from "../data/fallbackData";

// Map icon name strings to actual lucide-react components
const iconMap = { Container, GitBranch, Terminal };

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

        if (error || !data || data.length === 0) {
          console.warn('Other skills not found or Supabase error. Using fallback data.');
          setSkills(fallbackSkills.filter(s => s.category === 'other'));
        } else {
          setSkills(data);
        }
      } catch (err) {
        console.error('Connection error in other skills. Using fallback data.');
        setSkills(fallbackSkills.filter(s => s.category === 'other'));
      }
      setLoading(false);
    }
    fetchSkills();
  }, []);

  if (loading) {
    return (
      <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="card bg-base-100 shadow-lg animate-pulse overflow-hidden">
            <div className="h-24 bg-base-300"></div>
            <div className="card-body p-5">
              <div className="h-5 bg-base-300 rounded w-24 mb-2"></div>
              <div className="h-4 bg-base-300 rounded w-full"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {skills.map((skill) => {
        const IconComponent = iconMap[skill.icon_name] || Terminal;
        return (
          <div 
            key={skill.id}
            className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-base-200 hover:border-primary/30 overflow-hidden group"
          >
            {/* Gradient header */}
            <div className={`relative h-24 bg-gradient-to-br ${skill.gradient} flex items-center justify-center overflow-hidden`}>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors"></div>
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/20 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              </div>
              <div className="relative z-10">
                <IconComponent className="w-12 h-12 text-white drop-shadow-lg" strokeWidth={1.5} />
              </div>
            </div>

            {/* Content */}
            <div className="card-body p-5 sm:p-6">
              <h2 className="card-title text-lg sm:text-xl font-bold text-base-content mb-2">
                {skill.name}
              </h2>
              <p className="text-sm text-base-content/70 leading-relaxed">
                {skill.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Miscellaneous;
