import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Award, BookOpen, ExternalLink, Calendar, MapPin, ChevronRight, Sparkles, Cpu } from 'lucide-react';
import { supabase } from "../lib/supabase";

const iconMap = {
  GraduationCap: GraduationCap,
  Award: Award,
  BookOpen: BookOpen,
  Cpu: Cpu
};

const getThemeForEdu = (title) => {
  const t = title.toLowerCase();
  if (t.includes('c-dac') || t.includes('computing')) return { icon: GraduationCap, color: '#8b5cf6' };
  if (t.includes('bachelor') || t.includes('engineering')) return { icon: Cpu, color: '#06b6d4' };
  if (t.includes('hsc') || t.includes('12th')) return { icon: BookOpen, color: '#fbbf24' };
  return { icon: Award, color: '#ec4899' };
};

function EducationEnhanced() {
  const [educationData, setEducationData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    async function fetchEducation() {
      try {
        const { data, error } = await supabase
          .from('education')
          .select('*')
          .order('sort_order', { ascending: false });

        if (!error && data) {
          setEducationData(data);
          if (data.length > 0) setExpandedId(data[0].id);
        }
      } catch (err) {
        console.error('Error fetching education:', err);
      }
      setLoading(false);
    }
    fetchEducation();
  }, []);

  if (loading) return null;

  return (
    <div className="relative max-w-4xl mx-auto pl-8 md:pl-0 pt-10">
      {/* Vertical Timeline Track */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neo-purple via-neo-cyan to-neo-pink opacity-30 transform md:-translate-x-1/2" />

      <div className="space-y-12">
        {educationData.map((edu, index) => {
          const { icon: Icon, color } = getThemeForEdu(edu.title);
          const isLeft = index % 2 === 0;
          const isExpanded = expandedId === edu.id;

          return (
            <div key={edu.id} className="relative">
              {/* Timeline Node */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                style={{ borderColor: color }}
                className={`absolute left-[-36px] md:left-1/2 top-0 w-9 h-9 rounded-full bg-neo-bg-secondary border-2 shadow-lg z-20 flex items-center justify-center transform md:-translate-x-1/2`}
              >
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: color }} />
              </motion.div>

              <div className={`flex flex-col md:flex-row items-center justify-between gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Content Card */}
                <motion.div 
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`w-full md:w-[45%] ${isLeft ? 'md:text-right' : 'md:text-left'}`}
                >
                  <div 
                    onClick={() => setExpandedId(isExpanded ? null : edu.id)}
                    className="neo-glass p-6 cursor-pointer border-white/5 hover:border-white/10 transition-all duration-500 group"
                  >
                    <div className={`flex items-center gap-4 mb-4 ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                      <div className="p-3 rounded-xl bg-white/5 text-white border border-white/10 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" style={{ color: color }} />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-neo-purple uppercase tracking-widest">{edu.year}</span>
                        <h3 className="text-lg font-bold text-white leading-tight">{edu.title}</h3>
                      </div>
                    </div>

                    {/* Show first highlight as subtitle if exists */}
                    {edu.details && edu.details.length > 0 && (
                      <p className="text-neo-text-secondary text-sm font-medium mb-2">{edu.details[0]}</p>
                    )}
                    
                    <div className={`flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                      <span className="neo-badge text-[10px] py-1 bg-white/5 border-white/10">Verified</span>
                      {edu.certificate_url && (
                        <span className="neo-badge text-[10px] py-1 bg-neo-purple/20 text-neo-purple border-neo-purple/30">Certificate Available</span>
                      )}
                    </div>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-6 mt-6 border-t border-white/5 space-y-3">
                            {edu.details.map((point, i) => (
                              <div key={i} className={`flex items-start gap-3 text-sm text-neo-text-muted ${isLeft ? 'md:flex-row-reverse md:text-right' : ''}`}>
                                <Sparkles className="w-3 h-3 mt-1 shrink-0" style={{ color: color }} />
                                <p>{point}</p>
                              </div>
                            ))}
                            {edu.certificate_url && (
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  window.open(edu.certificate_url, '_blank');
                                }}
                                className="mt-4 neo-btn-outline py-2 px-4 text-xs w-full flex items-center justify-center gap-2"
                              >
                                <ExternalLink className="w-3 h-3" />
                                View Certificate
                              </button>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className={`mt-4 flex items-center gap-1 text-[10px] text-neo-text-muted opacity-50 group-hover:opacity-100 transition-opacity ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                      <ChevronRight className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                      <span>{isExpanded ? 'Show less' : 'View details'}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Empty State for layout balance */}
                <div className="hidden md:block w-[45%]" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EducationEnhanced;
