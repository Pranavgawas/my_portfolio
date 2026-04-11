import React, { useRef, useCallback, useEffect } from 'react';
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
        icon: <Layers className="w-3 h-3" aria-hidden="true" />,
        points: ['Live Vehicle Selection', 'Constraint Validation', 'Real-time Visualization']
      },
      {
        title: 'Architecture',
        icon: <Cpu className="w-3 h-3" aria-hidden="true" />,
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
        icon: <Heart className="w-3 h-3" aria-hidden="true" />,
        points: ['Like & Share Logic', 'Real-time Feed Flow']
      },
      {
        title: 'Stack',
        icon: <Zap className="w-3 h-3" aria-hidden="true" />,
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
        icon: <ImageIcon className="w-3 h-3" aria-hidden="true" />,
        points: ['Instant Image Generation', 'PDF Export Support']
      },
      {
        title: 'Usage',
        icon: <Download className="w-3 h-3" aria-hidden="true" />,
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
        icon: <Database className="w-3 h-3" aria-hidden="true" />,
        points: ['MongoDB', 'Express.js', 'React', 'Node.js']
      },
      {
        title: 'Operations',
        icon: <Globe className="w-3 h-3" aria-hidden="true" />,
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
        icon: <Cpu className="w-3 h-3" aria-hidden="true" />,
        points: ['VBA Macro Generation', 'SolidWorks/CATIA API']
      },
      {
        title: 'How it works',
        icon: <Code className="w-3 h-3" aria-hidden="true" />,
        points: ['Instant geometric modeling', 'Code snippet generation']
      }
    ]
  }
};

const FOCUSABLE_SELECTORS =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

function ProjectModal({ project }) {
  const config = detailConfig[project.modal_reference] || {
    accentColor: 'text-neo-purple',
    accentBg: 'bg-neo-purple/20',
    Icon: Layers,
    sections: []
  };

  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const triggerButtonRef = useRef(null);

  const openModal = useCallback(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    // Focus the close button when the dialog opens
    const handleOpenFocus = () => {
      setTimeout(() => closeButtonRef.current?.focus(), 0);
    };

    // Trap focus inside the dialog while it is open
    const handleKeyDown = (e) => {
      if (!dialog.open) return;

      if (e.key === 'Tab') {
        const focusable = Array.from(dialog.querySelectorAll(FOCUSABLE_SELECTORS));
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    // Return focus to the trigger button when the dialog closes
    const handleClose = () => {
      triggerButtonRef.current?.focus();
    };

    const observer = new MutationObserver(() => {
      if (dialog.open) handleOpenFocus();
    });
    observer.observe(dialog, { attributes: true, attributeFilter: ['open'] });

    dialog.addEventListener('keydown', handleKeyDown);
    dialog.addEventListener('close', handleClose);

    return () => {
      observer.disconnect();
      dialog.removeEventListener('keydown', handleKeyDown);
      dialog.removeEventListener('close', handleClose);
    };
  }, []);

  const { Icon } = config;
  const titleId = `modal-title-${project.id}`;

  return (
    <>
      <button
        ref={triggerButtonRef}
        className="neo-btn py-2 px-4 text-xs flex items-center gap-2"
        onClick={openModal}
        aria-haspopup="dialog"
      >
        Learn More
      </button>

      <dialog
        ref={dialogRef}
        id={`modal-${project.id}`}
        className="modal modal-bottom sm:modal-middle backdrop-blur-sm"
        aria-labelledby={titleId}
        aria-modal="true"
      >
        <div className="modal-box neo-glass !bg-neo-bg-secondary/90 border-white/10 p-0 overflow-hidden max-w-2xl">
          {/* Header */}
          <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/5">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${config.accentBg} ${config.accentColor}`}>
                <Icon className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 id={titleId} className="font-bold text-xl text-white">{project.title}</h3>
            </div>
            <form method="dialog">
              <button
                ref={closeButtonRef}
                className="p-2 hover:bg-white/5 rounded-full transition-colors text-neo-text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neo-purple"
                aria-label={`Close ${project.title} details`}
              >
                <X className="w-5 h-5" aria-hidden="true" />
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
                        <span className={config.accentColor} aria-hidden="true">{section.icon}</span>
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
                <a
                  href={project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-btn-outline py-2 px-4 text-xs flex items-center gap-2"
                >
                  <ExternalLink className="w-3 h-3" aria-hidden="true" /> Live Preview
                </a>
              )}
              {project.github_url && (
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-btn-outline py-2 px-4 text-xs flex items-center gap-2"
                >
                  <Github className="w-3 h-3" aria-hidden="true" /> Code
                </a>
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
