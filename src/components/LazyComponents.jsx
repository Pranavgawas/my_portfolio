import React, { lazy, Suspense } from 'react';
import LoadingSpinner from './LoadingSpinner';

const createLazyComponent = (importFunction, fallback = <LoadingSpinner size="lg" className="min-h-[200px]" />) => {
  const LazyComponent = lazy(importFunction);
  
  return (props) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

// Lazy load heavy components
export const LazyProjects = createLazyComponent(() => import('./Projects'));
export const LazySkills = createLazyComponent(() => import('./Skills'));
export const LazyEducation = createLazyComponent(() => import('./Education'));
export const LazyCertification = createLazyComponent(() => import('./Certification'));

export default createLazyComponent;