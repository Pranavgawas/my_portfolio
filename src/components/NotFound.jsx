import React from 'react';
import { Home, ArrowLeft, Search, Mail } from 'lucide-react';

const NotFound = () => {
  const goHome = () => {
    window.location.href = '/';
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center space-y-8">
        {/* 404 Number */}
        <div className="space-y-4">
          <h1 className="text-9xl font-bold text-primary opacity-20">404</h1>
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-base-content">
              Page Not Found
            </h2>
            <p className="text-lg text-base-content/70">
              Oops! The page you're looking for doesn't exist.
            </p>
          </div>
        </div>

        {/* Illustration */}
        <div className="flex justify-center">
          <div className="w-64 h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center">
            <Search size={80} className="text-primary/40" />
          </div>
        </div>

        {/* Suggestions */}
        <div className="space-y-4">
          <p className="text-base-content/60">
            The page might have been moved, deleted, or you entered the wrong URL.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={goHome}
              className="btn btn-primary btn-lg min-h-[48px] gap-2"
            >
              <Home size={20} />
              Go to Homepage
            </button>
            <button
              onClick={goBack}
              className="btn btn-outline btn-lg min-h-[48px] gap-2"
            >
              <ArrowLeft size={20} />
              Go Back
            </button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="pt-8 border-t border-base-200">
          <p className="text-sm text-base-content/60 mb-4">
            Still need help? Feel free to contact me:
          </p>
          <a
            href="mailto:pranavgawas1999@gmail.com"
            className="btn btn-ghost btn-sm gap-2 text-primary hover:text-primary-focus"
          >
            <Mail size={16} />
            pranavgawas1999@gmail.com
          </a>
        </div>

        {/* Footer */}
        <div className="pt-4">
          <p className="text-xs text-base-content/40">
            © 2024 Pranav Gawas. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;