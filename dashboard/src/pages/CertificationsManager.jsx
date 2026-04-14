import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Plus, Pencil, Trash2, Save, X, ShieldCheck, ArrowLeft, ExternalLink } from 'lucide-react';
import toast from 'react-hot-toast';

const emptyCert = { title: '', issuer: '', description: '', url: '', icon_name: 'ShieldCheck', color: 'text-neo-purple', glow: '#8b5cf6', sort_order: 0 };

const iconOptions = ['ShieldCheck', 'Award', 'BookOpen', 'Code2', 'Zap', 'Palette', 'Settings', 'Star', 'Cpu', 'Globe'];
const colorOptions = [
  { label: 'Purple', value: 'text-neo-purple' },
  { label: 'Cyan', value: 'text-neo-cyan' },
  { label: 'Pink', value: 'text-neo-pink' },
  { label: 'Yellow', value: 'text-yellow-400' },
  { label: 'Green', value: 'text-green-400' },
  { label: 'Orange', value: 'text-orange-400' },
];

export default function CertificationsManager() {
  const [certs, setCerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null);

  const fetchCerts = async () => {
    const { data } = await supabase.from('certifications').select('*').order('sort_order');
    setCerts(data || []);
    setLoading(false);
  };

  useEffect(() => { fetchCerts(); }, []);

  const handleSave = async () => {
    const { id, created_at, updated_at, ...fields } = editing;
    let error;
    if (id) {
      ({ error } = await supabase.from('certifications').update(fields).eq('id', id));
    } else {
      fields.sort_order = certs.length + 1;
      ({ error } = await supabase.from('certifications').insert(fields));
    }
    if (error) toast.error(error.message);
    else { toast.success(id ? 'Certification updated!' : 'Certification added!'); setEditing(null); fetchCerts(); }
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this certification?')) return;
    const { error } = await supabase.from('certifications').delete().eq('id', id);
    if (error) toast.error(error.message);
    else { toast.success('Deleted!'); fetchCerts(); }
  };

  if (loading) return (
    <div className="flex items-center justify-center py-20">
      <div className="w-8 h-8 border-2 border-neo-purple border-t-transparent rounded-full animate-spin" />
    </div>
  );

  if (editing) {
    return (
      <div className="max-w-lg space-y-6">
        <div className="flex items-center gap-3">
          <button onClick={() => setEditing(null)} className="neo-btn-ghost p-2">
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-white">{editing.id ? 'Edit Certification' : 'New Certification'}</h1>
            <p className="text-xs text-neo-muted mt-0.5">Shown in the Certifications section</p>
          </div>
        </div>

        <div className="neo-glass p-6 space-y-4">
          <div>
            <label className="neo-label">Title</label>
            <input className="neo-input" value={editing.title} onChange={e => setEditing({ ...editing, title: e.target.value })} placeholder="e.g. AWS Solutions Architect" />
          </div>
          <div>
            <label className="neo-label">Issuer / Platform</label>
            <input className="neo-input" value={editing.issuer} onChange={e => setEditing({ ...editing, issuer: e.target.value })} placeholder="e.g. Amazon Web Services" />
          </div>
          <div>
            <label className="neo-label">Description</label>
            <textarea className="neo-input resize-none" rows={3} value={editing.description} onChange={e => setEditing({ ...editing, description: e.target.value })} placeholder="What this certification covers..." />
          </div>
          <div>
            <label className="neo-label">Credential URL</label>
            <input type="url" className="neo-input" value={editing.url || ''} onChange={e => setEditing({ ...editing, url: e.target.value })} placeholder="https://..." />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="neo-label">Icon</label>
              <select className="neo-input" value={editing.icon_name} onChange={e => setEditing({ ...editing, icon_name: e.target.value })}>
                {iconOptions.map(i => <option key={i} value={i}>{i}</option>)}
              </select>
            </div>
            <div>
              <label className="neo-label">Color</label>
              <select className="neo-input" value={editing.color} onChange={e => setEditing({ ...editing, color: e.target.value })}>
                {colorOptions.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label className="neo-label">Glow Color (hex)</label>
            <div className="flex gap-3 items-center">
              <input type="color" value={editing.glow || '#8b5cf6'} onChange={e => setEditing({ ...editing, glow: e.target.value })} className="w-12 h-10 rounded-lg cursor-pointer" style={{ background: 'none', border: '1px solid rgba(255,255,255,0.1)', padding: '2px' }} />
              <input className="neo-input flex-1" value={editing.glow || ''} onChange={e => setEditing({ ...editing, glow: e.target.value })} placeholder="#8b5cf6" />
            </div>
          </div>

          <button onClick={handleSave} className="neo-btn w-full mt-2">
            <Save className="w-4 h-4" /> Save Certification
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck className="w-4 h-4" style={{ color: '#f59e0b' }} />
            <span className="text-[11px] uppercase tracking-widest font-mono text-neo-muted">Certifications</span>
          </div>
          <h1 className="text-2xl font-bold text-white">Certifications Manager</h1>
          <p className="text-sm mt-1 text-neo-secondary">{certs.length} credentials · click a card to edit</p>
        </div>
        <button onClick={() => setEditing({ ...emptyCert })} className="neo-btn">
          <Plus className="w-4 h-4" />
          <span className="hidden sm:inline">Add Cert</span>
        </button>
      </div>

      <div className="space-y-3">
        {certs.map(cert => (
          <div key={cert.id} className="neo-glass p-4 flex flex-col sm:flex-row sm:items-center gap-3 group hover:border-white/20 transition-all duration-200">
            <div className="p-2.5 rounded-xl shrink-0" style={{ background: `${cert.glow}20` || 'rgba(245,158,11,0.1)' }}>
              <ShieldCheck className="w-4 h-4" style={{ color: cert.glow || '#f59e0b' }} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-semibold text-white text-sm">{cert.title}</h3>
                <span className="text-[10px] font-mono text-neo-muted uppercase tracking-wider">{cert.issuer}</span>
              </div>
              <p className="text-xs mt-1 truncate text-neo-muted">{cert.description}</p>
            </div>
            <div className="flex items-center gap-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
              {cert.url && (
                <a href={cert.url} target="_blank" rel="noopener noreferrer" className="neo-btn-ghost p-2">
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <button onClick={() => setEditing({ ...cert })} className="neo-btn-ghost p-2"><Pencil className="w-3.5 h-3.5" /></button>
              <button onClick={() => handleDelete(cert.id)} className="neo-btn-ghost p-2 hover:text-red-400"><Trash2 className="w-3.5 h-3.5" /></button>
            </div>
          </div>
        ))}
        {certs.length === 0 && (
          <div className="neo-glass p-12 text-center">
            <ShieldCheck className="w-10 h-10 mx-auto mb-3" style={{ color: 'var(--neo-text-muted)' }} />
            <p className="text-neo-muted text-sm">No certifications yet.</p>
            <button onClick={() => setEditing({ ...emptyCert })} className="neo-btn mt-4 mx-auto">
              <Plus className="w-4 h-4" /> Add First Certification
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
