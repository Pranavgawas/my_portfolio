import React from 'react';
import { motion } from 'framer-motion';

const GlowingDivider = ({ className = '' }) => {
  return (
    <div className={`relative py-8 ${className}`}>
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-white/5"></div>
      </div>
      <div className="relative flex justify-center">
        <motion.div 
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: '80px', opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "circOut" }}
          className="h-[1px] bg-gradient-to-r from-transparent via-neo-purple to-transparent shadow-[0_0_15px_rgba(139,92,246,0.5)]"
        />
      </div>
    </div>
  );
};

export default GlowingDivider;
