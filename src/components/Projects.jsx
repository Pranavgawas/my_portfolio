import React, { useState, useEffect } from "react";
import VehicleConfigModel from "./Modal/VehicleConfigModel";
import FeedModel from "./Modal/FeedModel";
import CertifyMeModal from "./Modal/CertifyMeModal";
import EmployeeDetailsModal from "./Modal/EmployeeDetailsModal";
import CadScriptModal from "./Modal/CadScriptModal";
import AnimatedSection from "./AnimatedSection";
import { SkeletonCard } from "./SkeletonLoaders";
import { supabase } from "../lib/supabase";
import {
  Car, MessageSquare, Award, Users, FileCode,
  ExternalLink, Code2, Sparkles, Palette
} from "lucide-react";

// Map icon name strings to actual lucide-react components
const iconMap = {
  Car, MessageSquare, Award, Users, FileCode,
  Code2, Sparkles, Palette, ExternalLink
};

// Map modal reference strings to actual modal components
const modalMap = {
  VehicleConfigModel,
  FeedModel,
  CertifyMeModal,
  EmployeeDetailsModal,
  CadScriptModal
};

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('sort_order', { ascending: true });

      if (error) {
        console.error('Error fetching projects:', error);
      } else {
        setProjects(data || []);
      }
      setLoading(false);
    }
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {[...Array(5)].map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {projects.map((project, index) => {
          const IconComponent = iconMap[project.icon_name] || FileCode;
          const ModalComponent = project.modal_reference ? modalMap[project.modal_reference] : null;
          const hasModal = ModalComponent !== null && ModalComponent !== undefined;
          
          // Build buttons array from URLs
          const buttons = [];
          if (project.live_url) {
            buttons.push({ text: "View Live", url: project.live_url });
          }
          if (project.github_url) {
            buttons.push({ text: "GitHub", url: project.github_url });
          }

          // Status badge color
          const statusColor = project.status === "Live" 
            ? "badge-success" 
            : "badge-info";
          
          return (
            <AnimatedSection
              key={project.id}
              animation="fadeInUp"
              delay={index * 150}
              duration={600}
            >
              <article className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-base-200 hover:border-primary/30 h-full">
                {/* Icon header with gradient */}
                <div className={`relative overflow-hidden bg-gradient-to-br ${project.gradient} p-8 sm:p-10`}>
                  <div className="absolute inset-0 bg-black/10" aria-hidden="true"></div>
                  <div className="relative z-10 flex justify-between items-start">
                    <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                      <IconComponent className="w-12 h-12 sm:w-16 sm:h-16 text-white" strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className={`badge ${statusColor} badge-sm text-white`}>
                        {project.status}
                      </span>
                      <span className="badge badge-outline badge-sm bg-white/20 text-white border-white/40">
                        {project.date}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="card-body p-5 sm:p-6">
                  <h3 className="card-title text-xl sm:text-2xl font-bold text-base-content mb-3 flex items-center gap-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-base-content/80 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4" role="list" aria-label="Technologies used">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="badge badge-sm badge-outline text-xs"
                        role="listitem"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="badge badge-sm badge-outline text-xs" role="listitem">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="card-actions justify-start mt-auto flex-wrap gap-2">
                    {buttons.map((button, btnIndex) => (
                      <button
                        key={btnIndex}
                        className="btn btn-sm sm:btn-md min-h-[44px] px-4 sm:px-6 text-sm sm:text-base gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                        onClick={() => window.open(button.url, "_blank")}
                        aria-label={`${button.text} for ${project.title}`}
                      >
                        <ExternalLink className="w-4 h-4" aria-hidden="true" />
                        {button.text}
                      </button>
                    ))}
                    {hasModal && <ModalComponent />}
                  </div>
                </div>
              </article>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
