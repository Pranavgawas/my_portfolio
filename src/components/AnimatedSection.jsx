import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({ 
  children, 
  className = '', 
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.6,
  threshold = 0.2,
  once = true
}) => {
  const variants = {
    fadeInUp: {
      hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
      visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
    },
    fadeInDown: {
      hidden: { opacity: 0, y: -30, filter: 'blur(8px)' },
      visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
    },
    fadeInLeft: {
      hidden: { opacity: 0, x: -30, filter: 'blur(8px)' },
      visible: { opacity: 1, x: 0, filter: 'blur(0px)' }
    },
    fadeInRight: {
      hidden: { opacity: 0, x: 30, filter: 'blur(8px)' },
      visible: { opacity: 1, x: 0, filter: 'blur(0px)' }
    },
    fadeIn: {
      hidden: { opacity: 0, filter: 'blur(8px)' },
      visible: { opacity: 1, filter: 'blur(0px)' }
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.9, filter: 'blur(8px)' },
      visible: { opacity: 1, scale: 1, filter: 'blur(0px)' }
    }
  };

  const selectedVariant = variants[animation] || variants.fadeInUp;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      transition={{ 
        duration, 
        delay: delay / 1000,
        ease: [0.25, 0.1, 0.25, 1] // Custom ease-out
      }}
      variants={selectedVariant}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;