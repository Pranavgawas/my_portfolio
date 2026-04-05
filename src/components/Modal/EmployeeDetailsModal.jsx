import React from 'react';
import { Users, ExternalLink, X, Database, Globe } from 'lucide-react';

function EmployeeDetailsModal() {
  const openModal = () => {
    const modal = document.getElementById("EmpDetailId");
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <>
      <button 
        className="neo-btn py-2 px-4 text-xs flex items-center gap-2" 
        onClick={openModal}
      >
        Learn More
      </button>
      <dialog id="EmpDetailId" className="modal modal-bottom sm:modal-middle backdrop-blur-sm">
        <div className="modal-box neo-glass !bg-neo-bg-secondary/90 border-white/10 p-0 overflow-hidden max-w-2xl">
          {/* Header */}
          <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/5">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-neo-cyan/20 text-neo-cyan">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-xl text-white">Employee Management</h3>
            </div>
            <form method="dialog">
              <button className="p-2 hover:bg-white/5 rounded-full transition-colors text-neo-text-muted">
                <X className="w-5 h-5" />
              </button>
            </form>
          </div>

          <div className="p-8 space-y-6">
            <p className="text-neo-text-secondary leading-relaxed text-sm">
              A full-stack employee details management system built with the MERN stack, featuring secure data handling and responsive user interfaces.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <h4 className="text-[10px] uppercase tracking-widest text-neo-cyan font-bold mb-2">Architecture</h4>
                <div className="flex flex-wrap gap-2">
                  {["MongoDB", "Express", "React", "Node.js"].map(tech => (
                    <span key={tech} className="text-[10px] font-mono text-neo-text-muted px-2 py-1 bg-white/5 rounded border border-white/10">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <h4 className="text-[10px] uppercase tracking-widest text-neo-purple font-bold mb-2">Operations</h4>
                <ul className="text-xs text-neo-text-muted space-y-1">
                  <li>• Secure CRUD Operations</li>
                  <li>• Real-time Data Validation</li>
                  <li>• Cloud Hosting (Render)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white/5 border-t border-white/5 flex justify-between items-center">
            <button
              className="neo-btn-outline py-2 px-4 text-xs flex items-center gap-2"
              onClick={() => window.open("https://employee-details-management.onrender.com/", "_blank")}
            >
              <Globe className="w-3 h-3" /> Live Website
            </button>
            <form method="dialog">
              <button className="neo-btn py-2 px-6 text-sm">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default EmployeeDetailsModal;
