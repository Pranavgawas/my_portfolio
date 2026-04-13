import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx";
import "./App.css";

const AdminApp = lazy(() => import("./admin/AdminApp.jsx"));

function FullPageSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a1a]">
      <LoadingSpinner size="xl" />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary message="There was an error loading the page. Please refresh.">
      <BrowserRouter>
        <Suspense fallback={<FullPageSpinner />}>
          <Routes>
            {/* Admin dashboard — lazy loaded, fully isolated */}
            <Route path="/admin/*" element={<AdminApp />} />

            {/* Portfolio — all other paths */}
            <Route
              path="/*"
              element={
                <Suspense fallback={<FullPageSpinner />}>
                  <Welcome />
                </Suspense>
              }
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
