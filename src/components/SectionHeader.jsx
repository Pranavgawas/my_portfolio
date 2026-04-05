import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle, className = '' }) => {
  const words = title.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className={`mb-12 ${className}`}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-neo-purple font-mono text-sm tracking-widest uppercase mb-2 block"
        >
          {subtitle}
        </motion.span>
      )}
      
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-white flex flex-wrap gap-x-3"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {words.map((word, index) => (
          <motion.span
            variants={child}
            key={index}
            className="inline-block"
          >
            {word}
          </motion.span>
        ))}
      </motion.h2>
      
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.8, ease: "circOut" }}
        className="h-1 w-20 bg-gradient-to-r from-neo-purple to-neo-cyan mt-4 origin-left rounded-full"
      />
    </div>
  );
};

export default SectionHeader;
