import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageLoader = ({ onComplete }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[10000] bg-[#0a0a1a] flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-radial-gradient(circle at center, rgba(139, 92, 246, 0.1) 0%, transparent 70%) pointer-events-none" />
      
      {/* Logo Placeholder / Symbol */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="w-20 h-20 border-2 border-neo-purple rounded-2xl flex items-center justify-center mb-8 bg-neo-purple/10 backdrop-blur-md shadow-[0_0_30px_rgba(139,92,246,0.3)]"
      >
        <span className="text-neo-purple font-bold text-3xl">P</span>
      </motion.div>

      {/* Progress Text */}
      <div className="relative mb-4">
        <span className="text-4xl md:text-6xl font-bold font-mono text-white/10 tracking-widest uppercase">
          Initializing
        </span>
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <span className="text-2xl font-mono text-neo-purple font-bold">
            {percent}%
          </span>
        </motion.div>
      </div>

      {/* Modern Progress Bar */}
      <div className="w-64 h-1 bg-white/5 rounded-full overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-neo-purple to-neo-cyan shadow-[0_0_10px_rgba(139,92,246,0.5)]"
        />
      </div>

      {/* Decorative Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mt-8 text-neo-text-muted font-mono text-xs tracking-tighter uppercase"
      >
        Creating immersive experience...
      </motion.p>
    </motion.div>
  );
};

export default PageLoader;
