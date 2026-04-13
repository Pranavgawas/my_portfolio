import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard, User, FolderGit2, Code2,
  GraduationCap, Award, LogOut, ExternalLink,
  Menu, X, ChevronRight
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import toast from 'react-hot-toast';

const NAV_ITEMS = [
  { path: '/admin/dashboard', label: 'Overview',        icon: LayoutDashboard },
  { path: '/admin/hero',      label: 'Hero',            icon: User },
  { path: '/admin/projects',  label: 'Projects',        icon: FolderGit2 },
  { path: '/admin/skills',    label: 'Skills',          icon: Code2 },
  { path: '/admin/education', label: 'Education',       icon: GraduationCap },
  { path: '/admin/certifications', label: 'Certs',     icon: Award },
];

function NavItem({ item, active, onClick }) {
  const Icon = item.icon;
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group ${
        active
          ? 'bg-neo-purple/20 text-white border border-neo-purple/30 shadow-[0_0_15px_rgba(139,92,246,0.1)]'
          : 'text-neo-text-muted hover:text-white hover:bg-white/5 border border-transparent'
      }`}
    >
      <Icon className={`w-4 h-4 flex-shrink-0 ${active ? 'text-neo-purple' : 'group-hover:text-neo-purple transition-colors'}`} />
      <span>{item.label}</span>
      {active && <ChevronRight className="w-3 h-3 ml-auto text-neo-purple" />}
    </button>
  );
}

function SidebarContent({ location, navigate, onNavClick, signOut }) {
  const { user } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    toast.success('Signed out');
    navigate('/admin/login');
  };

  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="p-5 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-neo-purple/20 border border-neo-purple/30 flex items-center justify-center">
            <span className="text-neo-purple font-bold text-sm">P</span>
          </div>
          <div>
            <p className="text-white font-bold text-sm leading-none">Portfolio Admin</p>
            <p className="text-neo-text-muted text-[10px] mt-0.5 truncate max-w-[140px]">{user?.email}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        <p className="text-[10px] font-mono text-neo-text-muted uppercase tracking-widest px-3 mb-3">Content</p>
        {NAV_ITEMS.map(item => (
          <NavItem
            key={item.path}
            item={item}
            active={location.pathname === item.path}
            onClick={() => { navigate(item.path); onNavClick?.(); }}
          />
        ))}
      </nav>

      {/* Footer actions */}
      <div className="p-3 border-t border-white/5 space-y-1">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-neo-text-muted hover:text-neo-cyan hover:bg-neo-cyan/5 transition-all duration-200 border border-transparent"
        >
          <ExternalLink className="w-4 h-4" />
          View Portfolio
        </a>
        <button
          onClick={handleSignOut}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-neo-text-muted hover:text-red-400 hover:bg-red-500/5 transition-all duration-200 border border-transparent"
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>
    </div>
  );
}

function AdminLayout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { signOut } = useAuth();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const currentNav = NAV_ITEMS.find(item => item.path === location.pathname);

  return (
    <div className="min-h-screen bg-[#0a0a1a] flex">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-64 w-96 h-96 bg-neo-purple/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-neo-cyan/3 rounded-full blur-3xl" />
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-60 fixed h-full border-r border-white/5 bg-[#0f0f2a]/70 backdrop-blur-xl z-30">
        <SidebarContent
          location={location}
          navigate={navigate}
          signOut={signOut}
        />
      </aside>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setDrawerOpen(false)}
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
              className="lg:hidden fixed left-0 top-0 h-full w-64 bg-[#0f0f2a] border-r border-white/5 z-50 flex flex-col"
            >
              <div className="flex items-center justify-end p-3 border-b border-white/5">
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="p-2 rounded-lg text-neo-text-muted hover:text-white hover:bg-white/5 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 overflow-hidden">
                <SidebarContent
                  location={location}
                  navigate={navigate}
                  signOut={signOut}
                  onNavClick={() => setDrawerOpen(false)}
                />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 lg:ml-60 flex flex-col min-h-screen relative z-10">
        {/* Mobile Header */}
        <header className="sticky top-0 z-20 flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#0a0a1a]/80 backdrop-blur-xl lg:px-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setDrawerOpen(true)}
              className="lg:hidden p-2 rounded-lg text-neo-text-muted hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-white font-semibold text-sm sm:text-base">
                {currentNav?.label ?? 'Dashboard'}
              </h1>
              <p className="text-neo-text-muted text-[10px] font-mono hidden sm:block">
                {location.pathname}
              </p>
            </div>
          </div>

          {/* Desktop: show path breadcrumb */}
          <div className="hidden lg:flex items-center gap-2 text-xs text-neo-text-muted">
            <span>Admin</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-neo-purple">{currentNav?.label ?? 'Dashboard'}</span>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
