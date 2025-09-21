import React, { Suspense } from "react";
import Welcome from "./components/Welcome.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx";
import "./App.css";

function App() {
  return (
    <ErrorBoundary message="There was an error loading the portfolio. Please refresh the page.">
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <LoadingSpinner size="xl" />
            <p className="mt-4 text-base-content/70">Loading portfolio...</p>
          </div>
        </div>
      }>
        <Welcome />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
