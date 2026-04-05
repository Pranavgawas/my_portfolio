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

function Certification() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleLink = (url) => {
    window.open(url, "_blank");
  };

  const certifications = [
    {
      title: "Hardware and Networking",
      issuer: "Professional Certification",
      description: "Advanced architecture and network infrastructure protocols.",
      url: "https://drive.google.com/file/d/14lMUVkzOm1QGJKpFYbO2GKNqYTDvJwXf/view",
      icon: Settings,
      color: "text-blue-400",
      glow: "rgba(59,130,246,0.5)"
    },
    {
      title: "Precat Certification",
      issuer: "Academic Badge",
      description: "Validation of analytical and logical reasoning proficiency.",
      url: "https://drive.google.com/file/d/1iDZCrAr-jyE9i5yI4TtGXaXUCIzwubt_/view",
      icon: BookOpen,
      color: "text-green-400",
      glow: "rgba(34,197,94,0.5)"
    },
    {
      title: "HackerRank Verified",
      issuer: "HackerRank",
      description: "Problem solving and algorithms implementation.",
      url: "https://www.hackerrank.com/profile/pranavgawas1999",
      icon: Code2,
      color: "text-emerald-400",
      glow: "rgba(16,185,129,0.5)"
    },
    {
      title: "LeetCode Proficiency",
      issuer: "LeetCode",
      description: "Data Structures and algorithm complexity analysis.",
      url: "https://leetcode.com/pranavgawas1999/",
      icon: Zap,
      color: "text-yellow-400",
      glow: "rgba(250,204,21,0.5)"
    },
    {
      title: "Autodesk CAD/CAM/CAE",
      issuer: "Coursera / Autodesk",
      description: "Specialization in digital manufacturing and design.",
      url: "https://www.coursera.org/account/accomplishments/specialization/YL7UHT3T6MXB",
      icon: Palette,
      color: "text-neo-purple",
      glow: "rgba(139,92,246,0.5)"
    }
  ];

  if (loading) return null;

  return (
    <div id="certificateId" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {certifications.map((cert, index) => {
        const Icon = cert.icon;
        return (
          <AnimatedSection
            key={index}
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
