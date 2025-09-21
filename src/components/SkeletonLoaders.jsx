import React from 'react';

const SkeletonCard = ({ className = '' }) => {
  return (
    <div className={`card bg-base-100 shadow-lg animate-pulse ${className}`}>
      <div className="h-48 sm:h-56 lg:h-64 bg-base-300 rounded-t-lg"></div>
      <div className="card-body p-4 sm:p-6">
        <div className="h-6 bg-base-300 rounded-md mb-3"></div>
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-base-300 rounded-md"></div>
          <div className="h-4 bg-base-300 rounded-md"></div>
          <div className="h-4 bg-base-300 rounded-md w-3/4"></div>
        </div>
        <div className="flex justify-end gap-2">
          <div className="h-10 w-24 bg-base-300 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

const SkeletonCertification = ({ className = '' }) => {
  return (
    <div className={`card bg-base-100 shadow-lg animate-pulse p-4 sm:p-6 min-h-[120px] sm:min-h-[140px] ${className}`}>
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="w-12 h-12 bg-base-300 rounded-lg flex-shrink-0"></div>
        <div className="flex-1">
          <div className="h-5 bg-base-300 rounded-md mb-2"></div>
          <div className="h-4 bg-base-300 rounded-md"></div>
          <div className="h-4 bg-base-300 rounded-md w-2/3 mt-1"></div>
        </div>
      </div>
      <div className="mt-3 sm:mt-4">
        <div className="h-4 w-32 bg-base-300 rounded-md"></div>
      </div>
    </div>
  );
};

export { SkeletonCard, SkeletonCertification };