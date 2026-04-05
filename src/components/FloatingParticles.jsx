import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const FloatingParticles = ({ count = 25 }) => {
  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 20,
      delay: Math.random() * -40,
      opacity: Math.random() * 0.4 + 0.1,
    }));
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-neo-purple/30"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity,
            filter: 'blur(2px)',
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
        />
      ))}
      
      {/* Larger Decorative Blur Orbs */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-neo-purple/20 rounded-full filter blur-[120px] pointer-events-none"
      />
      <motion.div 
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-neo-cyan/15 rounded-full filter blur-[100px] pointer-events-none"
      />
    </div>
  );
};

export default FloatingParticles;
