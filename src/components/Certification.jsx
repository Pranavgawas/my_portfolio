import React, { useState, useEffect } from "react";
import { 
  Settings, 
  BookOpen, 
  Code2, 
  Zap, 
  Palette,
  ExternalLink,
  ShieldCheck
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { supabase } from "../lib/supabase";

const iconMap = {
  Settings,
  BookOpen,
  Code2,
  Zap,
  Palette,
  ShieldCheck
};

function Certification() {
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCertifications() {
      try {
        const { data, error } = await supabase
          .from('certifications')
          .select('*')
          .order('sort_order', { ascending: true });

        if (!error && data) {
          setCertifications(data);
        }
      } catch (err) {
        console.error('Error fetching certifications:', err);
      }
      setLoading(false);
    }
    fetchCertifications();
  }, []);

  const handleLink = (url) => {
    window.open(url, "_blank");
  };

  if (loading) return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map(i => (
        <div key={i} className="neo-glass h-64 animate-pulse opacity-50" />
      ))}
    </div>
  );

  return (
    <div id="certificateId" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {certifications.map((cert, index) => {
        const Icon = iconMap[cert.icon_name] || ShieldCheck;
        return (
          <AnimatedSection
            key={cert.id || index}
            animation="fadeInUp"
            delay={index * 100}
          >
            <div
              onClick={() => handleLink(cert.url)}
              className="neo-glass group p-8 flex flex-col h-full cursor-pointer hover:border-white/20 transition-all duration-500 relative overflow-hidden"
            >
              {/* Background Glow */}
              <div 
                className="absolute -top-10 -right-10 w-32 h-32 blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full"
                style={{ backgroundColor: cert.glow }}
              />

              <div className="flex justify-between items-start mb-6">
                <div className={`p-4 rounded-2xl bg-white/5 ${cert.color} transition-all duration-500 group-hover:scale-110 group-hover:bg-white/10 group-hover:shadow-[0_0_20px_${cert.glow}]`}>
                  <Icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <div className="neo-badge text-neo-text-muted group-hover:border-neo-purple/50 group-hover:text-neo-purple transition-colors">
                  <ShieldCheck className="w-3 h-3 inline mr-1" /> Verified
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neo-purple transition-colors">
                  {cert.title}
                </h3>
                <p className="text-neo-text-muted text-xs font-mono mb-4 uppercase tracking-wider">{cert.issuer}</p>
                <p className="text-neo-text-secondary text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-2 text-neo-purple font-bold text-sm tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">
                VIEW CREDENTIAL <ExternalLink className="w-4 h-4 translate-y-[-1px]" />
              </div>
            </div>
          </AnimatedSection>
        );
      })}
    </div>
  );
}

export default Certification;
