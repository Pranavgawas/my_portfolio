import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { FolderKanban, Wrench, GraduationCap, ShieldCheck, User, ArrowUpRight, Database } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const quickLinks = [
  { to: '/hero', icon: User, label: 'Edit Hero', desc: 'Update your intro & photo', color: 'var(--neo-purple)', glow: 'rgba(139,92,246,0.2)' },
  { to: '/projects', icon: FolderKanban, label: 'Manage Projects', desc: 'Add, edit or reorder', color: 'var(--neo-cyan)', glow: 'rgba(6,182,212,0.2)' },
  { to: '/skills', icon: Wrench, label: 'Update Skills', desc: 'Programming & tools', color: 'var(--neo-pink)', glow: 'rgba(236,72,153,0.2)' },
  { to: '/certifications', icon: ShieldCheck, label: 'Certifications', desc: 'Manage credentials', color: '#f59e0b', glow: 'rgba(245,158,11,0.2)' },
];

export default function DashboardHome() {
  const { user } = useAuth();
  const [stats, setStats] = useState({ projects: 0, skills: 0, education: 0, certifications: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      const [p, s, e, c] = await Promise.all([
        supabase.from('projects').select('id', { count: 'exact', head: true }),
        supabase.from('skills').select('id', { count: 'exact', head: true }),
        supabase.from('education').select('id', { count: 'exact', head: true }),
        supabase.from('certifications').select('id', { count: 'exact', head: true }),
      ]);
      setStats({ projects: p.count || 0, skills: s.count || 0, education: e.count || 0, certifications: c.count || 0 });
      setLoading(false);
    }
    fetchStats();
  }, []);

  const statCards = [
    { label: 'Projects', value: stats.projects, icon: FolderKanban, color: 'var(--neo-cyan)', glow: 'rgba(6,182,212,0.15)' },
    { label: 'Skills', value: stats.skills, icon: Wrench, color: 'var(--neo-purple)', glow: 'rgba(139,92,246,0.15)' },
    { label: 'Education', value: stats.education, icon: GraduationCap, color: 'var(--neo-pink)', glow: 'rgba(236,72,153,0.15)' },
    { label: 'Certifications', value: stats.certifications, icon: ShieldCheck, color: '#f59e0b', glow: 'rgba(245,158,11,0.15)' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="neo-badge-purple mb-3">
            <Database className="w-3 h-3 inline mr-1" /> Live Database
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Welcome back, <span className="neo-gradient-text">Pranav</span>
          </h1>
          <p className="text-sm mt-1" style={{ color: 'var(--neo-text-muted)' }}>
            {user?.email} · Changes reflect instantly on your portfolio
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((card) => (
          <div key={card.label} className="neo-glass p-5 relative overflow-hidden group">
            <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: card.glow }} />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl" style={{ background: card.glow }}>
                  <card.icon className="w-4 h-4" style={{ color: card.color }} />
                </div>
              </div>
              <p className="text-3xl font-bold text-white">{loading ? '—' : card.value}</p>
              <p className="text-xs font-medium mt-1" style={{ color: 'var(--neo-text-muted)' }}>{card.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <div>
        <h2 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--neo-text-muted)' }}>Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {quickLinks.map((link) => (
            <Link key={link.to} to={link.to} className="neo-glass p-5 group hover:border-white/20 transition-all duration-300 no-underline block relative overflow-hidden">
              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: link.glow }} />
              <div className="relative z-10 flex items-center gap-4">
                <div className="p-3 rounded-xl transition-transform duration-300 group-hover:scale-110" style={{ background: link.glow }}>
                  <link.icon className="w-5 h-5" style={{ color: link.color }} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white text-sm">{link.label}</h3>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--neo-text-muted)' }}>{link.desc}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" style={{ color: link.color }} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
