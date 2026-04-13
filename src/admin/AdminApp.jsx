import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import ProtectedRoute from './components/ProtectedRoute';
import AdminLayout from './components/AdminLayout';

import Login from './pages/Login';
import Overview from './pages/Overview';
import HeroEditor from './pages/HeroEditor';
import ProjectsManager from './pages/ProjectsManager';
import SkillsManager from './pages/SkillsManager';
import EducationManager from './pages/EducationManager';
import CertificationsManager from './pages/CertificationsManager';

function AdminApp() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: 'rgba(15,15,42,0.95)',
            border: '1px solid rgba(139,92,246,0.2)',
            color: '#F1F5F9',
            backdropFilter: 'blur(12px)',
          },
          success: { iconTheme: { primary: '#8B5CF6', secondary: '#fff' } },
          error:   { iconTheme: { primary: '#EF4444', secondary: '#fff' } },
        }}
      />
      <Routes>
        {/* Public */}
        <Route path="login" element={<Login />} />

        {/* Protected */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Routes>
                  <Route index element={<Navigate to="dashboard" replace />} />
                  <Route path="dashboard"      element={<Overview />} />
                  <Route path="hero"           element={<HeroEditor />} />
                  <Route path="projects"       element={<ProjectsManager />} />
                  <Route path="skills"         element={<SkillsManager />} />
                  <Route path="education"      element={<EducationManager />} />
                  <Route path="certifications" element={<CertificationsManager />} />
                  <Route path="*"              element={<Navigate to="dashboard" replace />} />
                </Routes>
              </AdminLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default AdminApp;
