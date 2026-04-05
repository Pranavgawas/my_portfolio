import React from 'react';
import { PenTool, ExternalLink, X, Cpu, Code } from 'lucide-react';

function CadScriptModal() {
  const openModal = () => {
    const modal = document.getElementById("CadScriptId");
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
      <dialog id="CadScriptId" className="modal modal-bottom sm:modal-middle backdrop-blur-sm">
        <div className="modal-box neo-glass !bg-neo-bg-secondary/90 border-white/10 p-0 overflow-hidden max-w-2xl">
          {/* Header */}
          <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/5">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-neo-cyan/20 text-neo-cyan">
                <PenTool className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-xl text-white">CadScript</h3>
            </div>
            <form method="dialog">
              <button className="p-2 hover:bg-white/5 rounded-full transition-colors text-neo-text-muted">
                <X className="w-5 h-5" />
              </button>
            </form>
          </div>

          <div className="p-8 space-y-6">
            <p className="text-neo-text-secondary leading-relaxed text-sm">
              An automation tool for CAD design that leverages VBA macros to streamline part creation in SolidWorks and CATIA.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <h4 className="text-[10px] uppercase tracking-widest text-neo-cyan font-bold mb-2">Automation</h4>
                <ul className="text-xs text-neo-text-muted space-y-2">
                  <li className="flex items-center gap-2"><Cpu className="w-3 h-3 text-neo-cyan" /> VBA Macro Generation</li>
                  <li className="flex items-center gap-2"><Code className="w-3 h-3 text-neo-purple" /> SolidWorks/CATIA API</li>
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <h4 className="text-[10px] uppercase tracking-widest text-neo-purple font-bold mb-2">How it works</h4>
                <p className="text-xs text-neo-text-muted leading-relaxed">
                  Generate code snippets that can be pasted directly into CAD software macro editors for instant geometric modeling.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white/5 border-t border-white/5 flex justify-between items-center">
            <button
              className="neo-btn-outline py-2 px-4 text-xs flex items-center gap-2"
              onClick={() => window.open("https://cad-script.vercel.app/", "_blank")}
            >
              <ExternalLink className="w-3 h-3" /> Visit Tool
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

export default CadScriptModal;
