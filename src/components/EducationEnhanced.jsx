import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Award, BookOpen, ExternalLink, Calendar, MapPin, ChevronRight, Sparkles, Cpu } from 'lucide-react';

const educationData = [
  {
    id: 'cdac',
    year: '2023',
    title: 'Post Graduate Diploma (DAC)',
    institution: 'C-DAC Mumbai',
    percentage: '58.13%',
    grade: 'First Division',
    location: 'Mumbai, India',
    icon: GraduationCap,
    color: '#8b5cf6', // neo-purple
    highlights: [
      'Advanced computing & software development focus',
      'Team Lead for "Vehicle Configurator" project',
      'Full Stack Specialization (Java, .NET, React)'
    ]
  },
  {
    id: 'be',
    year: '2017 - 2021',
    title: 'Bachelor of Engineering',
    institution: 'Saraswati College of Engineering',
    percentage: '67.02%',
    grade: 'First Division',
    location: 'Navi Mumbai, India',
    icon: Cpu,
    color: '#06b6d4', // neo-cyan
    highlights: [
      'Mechanical Engineering Major',
      'Pneumatic Sheet Metal Cutting Machine Project',
      'Solid foundation in system design and analysis'
    ]
  },
  {
    id: 'ssc',
    year: '2015',
    title: 'SSC - Class 10th',
    institution: 'Maharashtra State Board',
    percentage: '86.40%',
    grade: 'Distinction',
    location: 'India',
    icon: Award,
    color: '#ec4899', // neo-pink
    highlights: [
      'Academic Excellence Award',
      'Top 1% in Mathematics and Science'
    ]
  }
];

function EducationEnhanced() {
  const [expandedId, setExpandedId] = useState('cdac');

  return (
    <div className="relative max-w-4xl mx-auto pl-8 md:pl-0 pt-10">
      {/* Vertical Timeline Track */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neo-purple via-neo-cyan to-neo-pink opacity-30 transform md:-translate-x-1/2" />

      <div className="space-y-12">
        {educationData.map((edu, index) => {
          const Icon = edu.icon;
          const isLeft = index % 2 === 0;
          const isExpanded = expandedId === edu.id;

          return (
            <div key={edu.id} className="relative">
              {/* Timeline Node */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                style={{ borderColor: edu.color }}
                className={`absolute left-[-36px] md:left-1/2 top-0 w-9 h-9 rounded-full bg-neo-bg-secondary border-2 shadow-lg z-20 flex items-center justify-center transform md:-translate-x-1/2`}
              >
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: edu.color }} />
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
                        <Icon className="w-6 h-6" style={{ color: edu.color }} />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-neo-purple uppercase tracking-widest">{edu.year}</span>
                        <h3 className="text-lg font-bold text-white leading-tight">{edu.title}</h3>
                      </div>
                    </div>

                    <p className="text-neo-text-secondary text-sm font-medium mb-2">{edu.institution}</p>
                    
                    <div className={`flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                      <span className="neo-badge text-[10px] py-1 bg-white/5 border-white/10">{edu.percentage}</span>
                      <span className="neo-badge text-[10px] py-1 bg-white/5 border-white/10" style={{ color: edu.color }}>{edu.grade}</span>
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
                            {edu.highlights.map((point, i) => (
                              <div key={i} className={`flex items-start gap-3 text-sm text-neo-text-muted ${isLeft ? 'md:flex-row-reverse md:text-right' : ''}`}>
                                <Sparkles className="w-3 h-3 mt-1 shrink-0" style={{ color: edu.color }} />
                                <p>{point}</p>
                              </div>
                            ))}
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
