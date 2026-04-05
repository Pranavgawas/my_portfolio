import React from 'react';
import { Share2, ExternalLink, X, Zap, Heart } from 'lucide-react';

function FeedModel() {
  const openModal = () => {
    const modal = document.getElementById("FeedId");
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
      <dialog id="FeedId" className="modal modal-bottom sm:modal-middle backdrop-blur-sm">
        <div className="modal-box neo-glass !bg-neo-bg-secondary/90 border-white/10 p-0 overflow-hidden max-w-2xl">
          {/* Header */}
          <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/5">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-neo-purple/20 text-neo-purple">
                <Share2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-xl text-white">Social Feed</h3>
            </div>
            <form method="dialog">
              <button className="p-2 hover:bg-white/5 rounded-full transition-colors text-neo-text-muted">
                <X className="w-5 h-5" />
              </button>
            </form>
          </div>

          <div className="p-8 space-y-6">
            <p className="text-neo-text-secondary leading-relaxed text-sm">
              A dynamic social media feed platform featuring real-time updates, user interactions, and a clean, responsive layout.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <h4 className="text-[10px] uppercase tracking-widest text-neo-purple font-bold mb-2">Interactions</h4>
                <ul className="text-xs text-neo-text-muted space-y-2">
                  <li className="flex items-center gap-2"><Heart className="w-3 h-3 text-neo-pink" /> Like & Share Logic</li>
                  <li className="flex items-center gap-2"><Zap className="w-3 h-3 text-neo-cyan" /> Real-time Feed Flow</li>
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <h4 className="text-[10px] uppercase tracking-widest text-neo-cyan font-bold mb-2">Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {["React", "Firebase", "Tailwind"].map(tech => (
                    <span key={tech} className="text-[10px] font-mono text-neo-text-muted px-2 py-1 bg-white/5 rounded border border-white/10">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white/5 border-t border-white/5 flex justify-between items-center">
            <button
              className="neo-btn-outline py-2 px-4 text-xs flex items-center gap-2"
              onClick={() => window.open("https://feed-page-two.vercel.app/", "_blank")}
            >
              <ExternalLink className="w-3 h-3" /> Open Preview
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

export default FeedModel;
