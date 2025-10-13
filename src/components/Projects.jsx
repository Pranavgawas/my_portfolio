import React, { useState, useEffect } from "react";
import VehicleConfigModel from "./Modal/VehicleConfigModel";
import FeedModel from "./Modal/FeedModel";
import CertifyMeModal from "./Modal/CertifyMeModal";
import EmployeeDetailsModal from "./Modal/EmployeeDetailsModal";
import CadScriptModal from "./Modal/CadScriptModal";
import AnimatedSection from "./AnimatedSection";
import { SkeletonCard } from "./SkeletonLoaders";
import { Car, MessageSquare, Award, Users, FileCode, ExternalLink, Code2, Sparkles, Palette } from "lucide-react";

function Projects() {
  const [loading, setLoading] = useState(true);

  const projects = [
    {
      title: "Bhakti Sagar",
      description: "Spiritual content platform with divine bhajans, mantras, and devotional resources built with modern React.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Responsive Design"],
      icon: Sparkles,
      gradient: "from-amber-500 to-orange-500",
      modal: null,
      buttons: [
        {
          text: "View Live",
          url: "https://bhakti-sagar-react.vercel.app/"
        }
      ],
      status: "Live",
      date: "2025"
    },
    {
      title: "Pixel Perfect",
      description: "Stunning pixel-perfect design showcase with attention to detail and modern UI/UX principles.",
      technologies: ["React", "JavaScript", "CSS3", "Responsive Design"],
      icon: Palette,
      gradient: "from-pink-500 to-rose-500",
      modal: null,
      buttons: [
        {
          text: "View Live",
          url: "https://pixel-perfect-six.vercel.app/"
        }
      ],
      status: "Live",
      date: "2025"
    },
    {
      title: "Vehicle Configurator",
      description: "Full-stack microservices application for vehicle customization with JWT authentication and Docker deployment.",
      technologies: ["Spring Boot 3", "REST API", "MySQL 8", "JPA", "JWT", "Microservices", "Docker", ".NET Core", "SQL Server"],
      icon: Car,
      gradient: "from-blue-500 to-cyan-500",
      modal: VehicleConfigModel,
      buttons: [],
      status: "Completed",
      date: "2024"
    },
    {
      title: "Feed App", 
      description: "Social media feed application with real-time updates, featuring a modern React frontend and Spring Boot backend.",
      technologies: ["Spring Boot 3", "REST API", "MySQL 8", "JPA", "React", "Javascript"],
      icon: MessageSquare,
      gradient: "from-purple-500 to-pink-500",
      modal: FeedModel,
      buttons: [],
      status: "Completed",
      date: "2024"
    },
    {
      title: "CertifyMe",
      description: "Certificate generation and management platform with beautiful UI and responsive design.",
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      icon: Award,
      gradient: "from-green-500 to-emerald-500",
      modal: CertifyMeModal,
      buttons: [
        {
          text: "View Live",
          url: "https://certify-me-liart.vercel.app/"
        }
      ],
      status: "Live",
      date: "2024"
    },
    {
      title: "Employee Details Management",
      description: "Full-stack MERN application for managing employee records with CRUD operations and authentication.",
      technologies: ["React", "JavaScript", "MongoDB", "Express.js", "Node.js"],
      icon: Users,
      gradient: "from-orange-500 to-red-500",
      modal: EmployeeDetailsModal,
      buttons: [
        {
          text: "View Live", 
          url: "https://employee-details-management.onrender.com/"
        }
      ],
      status: "Live",
      date: "2024"
    },
    {
      title: "CadScript",
      description: "Interactive CAD scripting platform with code editor and real-time preview capabilities.",
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      icon: FileCode,
      gradient: "from-indigo-500 to-purple-500",
      modal: CadScriptModal,
      buttons: [
        {
          text: "View Live",
          url: "https://cad-script.vercel.app/"
        }
      ],
      status: "Live",
      date: "2024"
    }
  ];

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
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
          const ModalComponent = project.modal;
          const IconComponent = project.icon;
          const hasModal = ModalComponent !== null;
          
          // Status badge color
          const statusColor = project.status === "Live" 
            ? "badge-success" 
            : "badge-info";
          
          return (
            <AnimatedSection
              key={index}
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
                    {project.buttons.map((button, btnIndex) => (
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
