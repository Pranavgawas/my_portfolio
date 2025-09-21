import React, { useState, useRef, useEffect } from 'react';
import { ImageOff, Loader2 } from 'lucide-react';

const SmartImage = ({ 
  src, 
  alt, 
  className = '', 
  fallbackSrc = null,
  showSkeleton = true,
  onLoad = () => {},
  onError = () => {},
  ...props 
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const imgRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    setError(false);
    setCurrentSrc(src);
  }, [src]);

  const handleLoad = () => {
    setLoading(false);
    setError(false);
    onLoad();
  };

  const handleError = () => {
    setLoading(false);
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    } else {
      setError(true);
      onError();
    }
  };

  if (error) {
    return (
      <div className={`flex items-center justify-center bg-base-200 text-base-content/60 ${className}`}>
        <div className="text-center">
          <ImageOff size={48} className="mx-auto mb-2 opacity-50" />
          <p className="text-sm">Image not available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {loading && showSkeleton && (
        <div className={`absolute inset-0 bg-base-300 animate-pulse flex items-center justify-center ${className}`}>
          <Loader2 size={32} className="animate-spin text-primary" />
        </div>
      )}
      <img
        ref={imgRef}
        src={currentSrc}
        alt={alt}
        className={`${className} ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </div>
  );
};

export default SmartImage;