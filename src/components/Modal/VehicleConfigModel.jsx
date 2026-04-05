import React from "react";
import { Github, ExternalLink, X, Code2, Cpu, Layout } from "lucide-react";

function VehicleConfigModel() {
  const vehicleConfigModal = () => {
    const modal = document.getElementById("vehicleConfig");
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <>
      <button 
        className="neo-btn py-2 px-4 text-xs flex items-center gap-2" 
        onClick={vehicleConfigModal}
      >
        Learn More
      </button>
      <dialog id="vehicleConfig" className="modal modal-bottom sm:modal-middle backdrop-blur-sm">
        <div className="modal-box neo-glass !bg-neo-bg-secondary/90 border-white/10 p-0 overflow-hidden max-w-2xl">
          {/* Header */}
          <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/5">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-neo-purple/20 text-neo-purple">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-xl text-white">Vehicle Configurator</h3>
            </div>
            <form method="dialog">
              <button className="p-2 hover:bg-white/5 rounded-full transition-colors text-neo-text-muted">
                <X className="w-5 h-5" />
              </button>
            </form>
          </div>

          <div className="p-8 space-y-6">
            <p className="text-neo-text-secondary leading-relaxed text-sm">
              Developed a comprehensive B2B portal designed for a car leasing company, allowing rental businesses to purchase and customize vehicles in bulk.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <h4 className="text-[10px] uppercase tracking-widest text-neo-purple font-bold mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {["Spring Boot 3", "MySQL", "React", "Docker", "Microservices"].map(tech => (
                    <span key={tech} className="text-[10px] font-mono text-neo-text-muted px-2 py-1 bg-white/5 rounded border border-white/10">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <h4 className="text-[10px] uppercase tracking-widest text-neo-cyan font-bold mb-2">Key Features</h4>
                <ul className="text-xs text-neo-text-muted space-y-1">
                  <li>• Dynamic Customization</li>
                  <li>• PDF Invoice Generation</li>
                  <li>• Scalable Microservices</li>
                </ul>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Code2 className="w-4 h-4 text-neo-purple" /> Source Code
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  className="neo-btn-outline py-2 px-3 text-[10px] flex items-center justify-center gap-2"
                  onClick={() => window.open("https://github.com/Pranavgawas/VehicleConfigurator", "_blank")}
                >
                  <Github className="w-3 h-3" /> Java / Spring
                </button>
                <button
                  className="neo-btn-outline py-2 px-3 text-[10px] flex items-center justify-center gap-2"
                  onClick={() => window.open("https://github.com/Pranavgawas/DotnetVehicleConfigurator", "_blank")}
                >
                  <Github className="w-3 h-3" /> .NET / C#
                </button>
                <button
                  className="neo-btn-outline py-2 px-3 text-[10px] flex items-center justify-center gap-2"
                  onClick={() => window.open("https://github.com/Pranavgawas/VehicleConfiguratorFrontEnd", "_blank")}
                >
                  <Github className="w-3 h-3" /> React / UI
                </button>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white/5 border-t border-white/5 flex justify-end">
            <form method="dialog">
              <button className="neo-btn py-2 px-6 text-sm">Close Project</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default VehicleConfigModel;
