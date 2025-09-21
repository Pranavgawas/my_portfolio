import React from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }
    
    // Here you could send error to logging service
    // logErrorToService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[400px] flex items-center justify-center p-4">
          <div className="text-center max-w-md">
            <div className="mb-6">
              <AlertTriangle size={64} className="mx-auto text-error mb-4" />
              <h2 className="text-2xl font-bold text-base-content mb-2">
                Oops! Something went wrong
              </h2>
              <p className="text-base-content/70">
                {this.props.message || "We're sorry, but something unexpected happened. Please try refreshing the page."}
              </p>
            </div>
            
            <div className="space-y-3">
              <button
                onClick={() => window.location.reload()}
                className="btn btn-primary gap-2"
              >
                <RefreshCw size={16} />
                Refresh Page
              </button>
              
              <button
                onClick={() => window.location.href = '/'}
                className="btn btn-outline gap-2"
              >
                <Home size={16} />
                Go Home
              </button>
            </div>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm text-base-content/60 hover:text-base-content">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 p-3 bg-base-200 rounded text-xs overflow-auto">
                  {this.state.error.toString()}
                  <br />
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Higher-order component for easier usage
export const withErrorBoundary = (Component, errorMessage) => {
  return (props) => (
    <ErrorBoundary message={errorMessage}>
      <Component {...props} />
    </ErrorBoundary>
  );
};

export default ErrorBoundary;