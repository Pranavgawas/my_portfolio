import React from 'react';
import { 
  X, ExternalLink, Github, Eye, 
  Layers, Cpu, Zap, Share2, 
  Heart, Award, ImageIcon, Download, 
  Users, Database, Globe, PenTool, Code 
} from 'lucide-react';

const detailConfig = {
  VehicleConfigModel: {
    accentColor: 'text-neo-cyan',
    accentBg: 'bg-neo-cyan/20',
    Icon: Eye,
    sections: [
      {
        title: 'Capabilities',
        icon: <Layers className="w-3 h-3" />,
        points: ['Live Vehicle Selection', 'Constraint Validation', 'Real-time Visualization']
      },
      {
        title: 'Architecture',
        icon: <Cpu className="w-3 h-3" />,
        points: ['Java 17', 'Spring Boot 3.x', 'H2 Database (In-Memory)']
      }
    ]
  },
  FeedModel: {
    accentColor: 'text-neo-purple',
    accentBg: 'bg-neo-purple/20',
    Icon: Share2,
    sections: [
      {
        title: 'Interactions',
        icon: <Heart className="w-3 h-3" />,
        points: ['Like & Share Logic', 'Real-time Feed Flow']
      },
      {
        title: 'Stack',
        icon: <Zap className="w-3 h-3" />,
        points: ['React', 'Firebase', 'Tailwind CSS']
      }
    ]
  },
  CertifyMeModal: {
    accentColor: 'text-neo-pink',
    accentBg: 'bg-neo-pink/20',
    Icon: Award,
    sections: [
      {
        title: 'Capabilities',
        icon: <ImageIcon className="w-3 h-3" />,
        points: ['Instant Image Generation', 'PDF Export Support']
      },
      {
        title: 'Usage',
        icon: <Download className="w-3 h-3" />,
        points: ['Custom Name Input', 'Dynamic Template Loading']
      }
    ]
  },
  EmployeeDetailsModal: {
    accentColor: 'text-neo-cyan',
    accentBg: 'bg-neo-cyan/20',
    Icon: Users,
    sections: [
      {
        title: 'Architecture',
        icon: <Database className="w-3 h-3" />,
        points: ['MongoDB', 'Express.js', 'React', 'Node.js']
      },
      {
        title: 'Operations',
        icon: <Globe className="w-3 h-3" />,
        points: ['Secure CRUD Operations', 'Real-time Validation', 'Cloud Hosting']
      }
    ]
  },
  CadScriptModal: {
    accentColor: 'text-neo-cyan',
    accentBg: 'bg-neo-cyan/20',
    Icon: PenTool,
    sections: [
      {
        title: 'Automation',
        icon: <Cpu className="w-3 h-3" />,
        points: ['VBA Macro Generation', 'SolidWorks/CATIA API']
      },
      {
        title: 'How it works',
        icon: <Code className="w-3 h-3" />,
        points: ['Instant geometric modeling', 'Code snippet generation']
      }
    ]
  }
};

function ProjectModal({ project }) {
  const config = detailConfig[project.modal_reference] || {
    accentColor: 'text-neo-purple',
    accentBg: 'bg-neo-purple/20',
    Icon: Layers,
    sections: []
  };

  const openModal = () => {
    const modal = document.getElementById(`modal-${project.id}`);
    if (modal) {
      modal.showModal();
    }
  };

  const { Icon } = config;

  return (
    <>
      <button 
        className="neo-btn py-2 px-4 text-xs flex items-center gap-2" 
        onClick={openModal}
      >
        Learn More
      </button>
      
      <dialog id={`modal-${project.id}`} className="modal modal-bottom sm:modal-middle backdrop-blur-sm">
        <div className="modal-box neo-glass !bg-neo-bg-secondary/90 border-white/10 p-0 overflow-hidden max-w-2xl">
          {/* Header */}
          <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/5">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${config.accentBg} ${config.accentColor}`}>
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-xl text-white">{project.title}</h3>
            </div>
            <form method="dialog">
              <button className="p-2 hover:bg-white/5 rounded-full transition-colors text-neo-text-muted">
                <X className="w-5 h-5" />
              </button>
            </form>
          </div>

          <div className="p-8 space-y-6">
            <p className="text-neo-text-secondary leading-relaxed text-sm">
              {project.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {config.sections.map((section, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <h4 className={`text-[10px] uppercase tracking-widest ${config.accentColor} font-bold mb-2`}>
                    {section.title}
                  </h4>
                  <ul className="text-xs text-neo-text-muted space-y-2">
                    {section.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2">
                        <span className={config.accentColor}>{section.icon}</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              
              {config.sections.length === 0 && (
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 col-span-2">
                  <h4 className={`text-[10px] uppercase tracking-widest ${config.accentColor} font-bold mb-2`}>
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies?.map(tech => (
                      <span key={tech} className="text-[10px] font-mono text-neo-text-muted px-2 py-1 bg-white/5 rounded border border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="p-6 bg-white/5 border-t border-white/5 flex justify-between items-center">
            <div className="flex items-center gap-3">
              {project.live_url && (
                <button
                  className="neo-btn-outline py-2 px-4 text-xs flex items-center gap-2"
                  onClick={() => window.open(project.live_url, "_blank")}
                >
                  <ExternalLink className="w-3 h-3" /> Live Preview
                </button>
              )}
              {project.github_url && (
                <button
                  className="neo-btn-outline py-2 px-4 text-xs flex items-center gap-2"
                  onClick={() => window.open(project.github_url, "_blank")}
                >
                  <Github className="w-3 h-3" /> Code
                </button>
              )}
            </div>
            <form method="dialog">
              <button className="neo-btn py-2 px-6 text-sm">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default ProjectModal;
