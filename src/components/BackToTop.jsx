import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { scrollToTop, hasScrolledPastHero } from '../utils/scrollUtils';

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(hasScrolledPastHero());
    };

    window.addEventListener('scroll', toggleVisibility);
    
    // Check initial state
    toggleVisibility();

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-gradient-to-r from-primary via-secondary to-accent text-white shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
      }`}
      aria-label="Back to top"
      title="Back to top"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
}

export default BackToTop;
