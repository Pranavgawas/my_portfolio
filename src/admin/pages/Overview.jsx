import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FolderGit2, Code2, GraduationCap, Award, User, ArrowRight, RefreshCw } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../hooks/useAuth';

const STAT_CONFIG = [
  { label: 'Projects',        table: 'projects',        icon: FolderGit2, color: 'text-neo-purple', bg: 'bg-neo-purple/10', border: 'border-neo-purple/20', path: '/admin/projects' },
  { label: 'Skills',          table: 'skills',          icon: Code2,       color: 'text-neo-cyan',   bg: 'bg-neo-cyan/10',   border: 'border-neo-cyan/20',   path: '/admin/skills' },
  { label: 'Education',       table: 'education',       icon: GraduationCap, color: 'text-neo-pink', bg: 'bg-neo-pink/10',  border: 'border-neo-pink/20',   path: '/admin/education' },
  { label: 'Certifications',  table: 'certifications',  icon: Award,       color: 'text-yellow-400', bg: 'bg-yellow-400/10', border: 'border-yellow-400/20', path: '/admin/certifications' },
];

function StatCard({ config, count, loading, index }) {
  const navigate = useNavigate();
  const Icon = config.icon;
  return (
    <motion.button
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      onClick={() => navigate(config.path)}
      className="neo-glass p-5 text-left w-full group hover:border-white/20 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`p-2.5 rounded-xl ${config.bg} border ${config.border}`}>
          <Icon className={`w-5 h-5 ${config.color}`} aria-hidden="true" />
        </div>
        <ArrowRight className="w-4 h-4 text-neo-text-muted group-hover:text-white group-hover:translate-x-1 transition-all" />
      </div>
      <div>
        {loading ? (
          <div className="h-8 w-12 bg-white/5 rounded-lg animate-pulse mb-1" />
        ) : (
          <p className="text-3xl font-bold text-white">{count ?? '—'}</p>
        )}
        <p className="text-neo-text-muted text-sm mt-0.5">{config.label}</p>
      </div>
    </motion.button>
  );
}

function Overview() {
  const { user } = useAuth();
  const [counts, setCounts] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchCounts = async () => {
    setLoading(true);
    const results = await Promise.all(
      STAT_CONFIG.map(c =>
        supabase.from(c.table).select('id', { count: 'exact', head: true })
          .then(({ count }) => ({ table: c.table, count }))
      )
    );
    const map = {};
    results.forEach(r => { map[r.table] = r.count; });
    setCounts(map);
    setLoading(false);
  };

  useEffect(() => { fetchCounts(); }, []);

  const firstName = user?.email?.split('@')[0] ?? 'Admin';

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        <div>
          <h2 className="text-2xl font-bold text-white">
            Welcome back, <span className="neo-gradient-text">{firstName}</span> 👋
          </h2>
          <p className="text-neo-text-muted text-sm mt-1">
            Manage your portfolio content from here.
          </p>
        </div>
        <button
          onClick={fetchCounts}
          disabled={loading}
          className="neo-btn-outline flex items-center gap-2 px-4 py-2 text-sm self-start sm:self-auto disabled:opacity-50"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} aria-hidden="true" />
          Refresh
        </button>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {STAT_CONFIG.map((config, i) => (
          <StatCard
            key={config.table}
            config={config}
            count={counts[config.table]}
            loading={loading}
            index={i}
          />
        ))}
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="neo-glass p-6"
      >
        <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
          <User className="w-4 h-4 text-neo-purple" aria-hidden="true" />
          Quick Actions
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { label: 'Edit Hero',       path: '/admin/hero',           icon: User,        color: 'text-neo-purple' },
            { label: 'Add Project',     path: '/admin/projects',       icon: FolderGit2,  color: 'text-neo-cyan' },
            { label: 'Add Skill',       path: '/admin/skills',         icon: Code2,       color: 'text-neo-purple' },
            { label: 'Add Education',   path: '/admin/education',      icon: GraduationCap, color: 'text-neo-pink' },
            { label: 'Add Cert',        path: '/admin/certifications', icon: Award,       color: 'text-yellow-400' },
          ].map(action => {
            const Icon = action.icon;
            return (
              <button
                key={action.path}
                onClick={() => navigate(action.path)}
                className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/3 border border-white/5 hover:bg-white/8 hover:border-white/10 transition-all duration-200 text-center group"
              >
                <Icon className={`w-5 h-5 ${action.color} group-hover:scale-110 transition-transform`} aria-hidden="true" />
                <span className="text-neo-text-muted text-xs font-medium group-hover:text-white transition-colors leading-tight">
                  {action.label}
                </span>
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="p-4 rounded-xl bg-neo-cyan/5 border border-neo-cyan/15 text-neo-text-secondary text-xs leading-relaxed"
      >
        <strong className="text-neo-cyan">Tip:</strong> All changes are saved directly to your Supabase database and reflect on the live portfolio immediately after refresh.
      </motion.div>
    </div>
  );
}

export default Overview;
