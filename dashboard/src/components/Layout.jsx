import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { LayoutDashboard, User, FolderKanban, Wrench, GraduationCap, LogOut, Menu, X, ShieldCheck, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { to: '/', icon: LayoutDashboard, label: 'Overview' },
  { to: '/hero', icon: User, label: 'Hero' },
  { to: '/projects', icon: FolderKanban, label: 'Projects' },
  { to: '/skills', icon: Wrench, label: 'Skills' },
  { to: '/education', icon: GraduationCap, label: 'Education' },
  { to: '/certifications', icon: ShieldCheck, label: 'Certifications' },
];

export default function Layout() {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async () => {
    await signOut();
    navigate('/login');
  };

  return (
    <div className="flex h-screen overflow-hidden" style={{ background: 'var(--neo-bg)' }}>
      {/* Background orbs */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[120px]" style={{ background: 'rgba(139,92,246,0.08)' }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[120px]" style={{ background: 'rgba(6,182,212,0.05)' }} />
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-30 bg-black/70 backdrop-blur-sm md:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static z-40 h-full w-64 flex flex-col transition-transform duration-300 md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
        style={{ background: 'rgba(255,255,255,0.02)', borderRight: '1px solid rgba(255,255,255,0.06)' }}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-5 py-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)' }}>
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <div>
              <span className="font-bold text-sm text-white block leading-none">Pranav</span>
              <span className="text-[10px] uppercase tracking-widest font-mono" style={{ color: 'var(--neo-text-muted)' }}>Dashboard</span>
            </div>
          </div>
          <button className="md:hidden neo-btn-ghost p-2" onClick={() => setSidebarOpen(false)}>
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          <p className="text-[9px] font-mono uppercase tracking-widest px-3 py-2 mb-1" style={{ color: 'var(--neo-text-muted)' }}>Content</p>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setSidebarOpen(false)}
              className="block no-underline"
            >
              {({ isActive }) => (
                <div
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive ? 'text-white' : 'hover:text-white'
                  }`}
                  style={isActive
                    ? { background: 'rgba(139,92,246,0.15)', color: 'white', borderLeft: '2px solid #8b5cf6' }
                    : { color: 'var(--neo-text-muted)', borderLeft: '2px solid transparent' }
                  }
                >
                  <item.icon className="w-4 h-4 shrink-0" />
                  {item.label}
                  {isActive && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full" style={{ background: '#8b5cf6' }} />
                  )}
                </div>
              )}
            </NavLink>
          ))}

          <div className="pt-4">
            <p className="text-[9px] font-mono uppercase tracking-widest px-3 py-2 mb-1" style={{ color: 'var(--neo-text-muted)' }}>Links</p>
            <a
              href="http://localhost:5173"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 no-underline"
              style={{ color: 'var(--neo-text-muted)', borderLeft: '2px solid transparent' }}
              onMouseEnter={e => { e.currentTarget.style.color = 'white'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--neo-text-muted)'; e.currentTarget.style.background = 'transparent'; }}
            >
              <ExternalLink className="w-4 h-4 shrink-0" />
              View Portfolio
            </a>
          </div>
        </nav>

        {/* User footer */}
        <div className="p-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl mb-2" style={{ background: 'rgba(255,255,255,0.03)' }}>
            <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white shrink-0" style={{ background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)' }}>
              {user?.email?.[0]?.toUpperCase() || 'P'}
            </div>
            <span className="text-xs truncate" style={{ color: 'var(--neo-text-secondary)' }}>{user?.email}</span>
          </div>
          <button
            onClick={handleLogout}
            className="neo-btn-ghost w-full text-sm py-2.5"
            style={{ justifyContent: 'flex-start', paddingLeft: '0.75rem' }}
          >
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile header */}
        <header className="md:hidden flex items-center justify-between px-4 py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
          <button onClick={() => setSidebarOpen(true)} className="neo-btn-ghost p-2">
            <Menu className="w-5 h-5" />
          </button>
          <span className="font-bold text-white text-sm">Dashboard</span>
          <div className="w-9" />
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
