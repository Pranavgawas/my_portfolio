import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Layout from './components/Layout';
import Login from './pages/Login';
import DashboardHome from './pages/DashboardHome';
import HeroEditor from './pages/HeroEditor';
import ProjectsManager from './pages/ProjectsManager';
import SkillsManager from './pages/SkillsManager';
import EducationManager from './pages/EducationManager';
import CertificationsManager from './pages/CertificationsManager';

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--neo-bg)' }}>
      <div className="w-8 h-8 border-2 border-t-transparent rounded-full animate-spin" style={{ borderColor: 'rgba(139,92,246,0.3)', borderTopColor: '#8b5cf6' }} />
    </div>
  );
  return user ? children : <Navigate to="/login" />;
}

function PublicRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return null;
  return user ? <Navigate to="/" /> : children;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: 'rgba(5,1,29,0.95)',
              color: '#f1f5f9',
              border: '1px solid rgba(255,255,255,0.1)',
              fontSize: '0.875rem',
              backdropFilter: 'blur(20px)',
              borderRadius: '0.75rem',
            },
            success: { iconTheme: { primary: '#8b5cf6', secondary: 'white' } },
            error: { iconTheme: { primary: '#ef4444', secondary: 'white' } },
          }}
        />
        <Routes>
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
            <Route index element={<DashboardHome />} />
            <Route path="hero" element={<HeroEditor />} />
            <Route path="projects" element={<ProjectsManager />} />
            <Route path="skills" element={<SkillsManager />} />
            <Route path="education" element={<EducationManager />} />
            <Route path="certifications" element={<CertificationsManager />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
