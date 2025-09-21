import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const AnimatedSection = ({ 
  children, 
  className = '', 
  animation = 'fadeInUp',
  delay = 0,
  duration = 600 
}) => {
  const { elementRef, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px'
  });

  const animations = {
    fadeInUp: {
      initial: 'opacity-0 translate-y-8',
      animate: 'opacity-100 translate-y-0'
    },
    fadeInLeft: {
      initial: 'opacity-0 -translate-x-8',
      animate: 'opacity-100 translate-x-0'
    },
    fadeInRight: {
      initial: 'opacity-0 translate-x-8',
      animate: 'opacity-100 translate-x-0'
    },
    fadeIn: {
      initial: 'opacity-0',
      animate: 'opacity-100'
    },
    scaleIn: {
      initial: 'opacity-0 scale-95',
      animate: 'opacity-100 scale-100'
    }
  };

  const selectedAnimation = animations[animation] || animations.fadeInUp;
  
  return (
    <div
      ref={elementRef}
      className={`
        transform transition-all duration-${duration} ease-out
        ${hasIntersected ? selectedAnimation.animate : selectedAnimation.initial}
        ${className}
      `}
      style={{ 
        transitionDelay: hasIntersected ? `${delay}ms` : '0ms',
        transitionDuration: `${duration}ms`
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;