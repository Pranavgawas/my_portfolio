import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectModal from "./Modal/ProjectModal";
import AnimatedSection from "./AnimatedSection";
import { supabase } from "../lib/supabase";
import {
  Car, MessageSquare, Award, Users, FileCode,
  ExternalLink, Code2, Sparkles, Palette,
  Layout, Github, ArrowUpRight
} from "lucide-react";

const iconMap = {
  Car, MessageSquare, Award, Users, FileCode,
  Code2, Sparkles, Palette, ExternalLink, Layout
};

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('sort_order', { ascending: true });

        if (!error && data) {
          setProjects(data);
        }
      } catch (err) {
        console.error('Error fetching projects:', err);
      }
      setLoading(false);
    }
    fetchProjects();
  }, []);

  if (loading) return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3].map(i => (
        <div key={i} className="neo-glass h-[400px] animate-pulse opacity-50" />
      ))}
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => {
        const IconComponent = iconMap[project.icon_name] || FileCode;
        
        return (
          <AnimatedSection
            key={project.id}
            animation="fadeInUp"
            delay={index * 100}
          >
            <motion.article 
              whileHover={{ y: -10 }}
              className="neo-glass group h-full flex flex-col overflow-hidden border-white/5 hover:border-neo-purple/30 transition-all duration-500"
            >
              {/* Card Header/Icon Area */}
              <div className={`relative h-48 flex items-center justify-center overflow-hidden bg-gradient-to-br ${project.gradient || 'from-neo-purple/20 to-neo-cyan/20'}`}>
                <div className="absolute inset-0 bg-neo-bg-primary/20 backdrop-blur-[2px]" />
                
                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '12px 12px' }} />
                
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative z-10 p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl"
                >
                  <IconComponent className="w-12 h-12 text-white" strokeWidth={1.5} />
                </motion.div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className={`neo-badge py-1 px-3 text-[10px] ${project.status === 'Live' ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-neo-cyan/20 text-neo-cyan border-neo-cyan/30'}`}>
                    {project.status || 'Active'}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-neo-purple transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-[10px] font-mono text-neo-text-muted mt-1 uppercase">
                    {project.date}
                  </span>
                </div>
                
                <p className="text-neo-text-secondary text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.technologies?.slice(0, 3).map((tech, i) => (
                    <span key={i} className="text-[10px] font-mono py-1 px-2 rounded-md bg-white/5 border border-white/10 text-neo-text-muted">
                      {tech}
                    </span>
                  ))}
                  {project.technologies?.length > 3 && (
                    <span className="text-[10px] font-mono py-1 px-2 text-neo-text-muted">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <ProjectModal project={project} />
                  
                  {project.github_url && (
                    <button
                      onClick={() => window.open(project.github_url, "_blank")}
                      className="neo-btn-outline py-2 px-4 text-xs flex items-center gap-2"
                      title="GitHub Repository"
                    >
                      <Github className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>
            </motion.article>
          </AnimatedSection>
        );
      })}
    </div>
  );
}

export default Projects;
