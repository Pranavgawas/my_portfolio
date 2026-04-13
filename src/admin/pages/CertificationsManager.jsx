import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Pencil, Trash2, X, Save, Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import ConfirmModal from '../components/ConfirmModal';
import toast from 'react-hot-toast';

const COLOR_PRESETS = [
  { label: 'Purple',  value: '#8B5CF6' },
  { label: 'Cyan',    value: '#06B6D4' },
  { label: 'Pink',    value: '#EC4899' },
  { label: 'Yellow',  value: '#F59E0B' },
  { label: 'Green',   value: '#10B981' },
  { label: 'Red',     value: '#EF4444' },
  { label: 'Blue',    value: '#3B82F6' },
  { label: 'Orange',  value: '#F97316' },
];

const EMPTY_FORM = {
  title: '', issuer: '', description: '', url: '',
  icon: 'Award', color: '#8B5CF6', sort_order: 0,
};

function CertForm({ item, onSave, onClose }) {
  const [form, setForm] = useState(item ? { ...EMPTY_FORM, ...item } : { ...EMPTY_FORM });
  const [saving, setSaving] = useState(false);
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim()) { toast.error('Title is required'); return; }
    setSaving(true);
    await onSave(form);
    setSaving(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <motion.div
        initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 60 }} transition={{ type: 'tween', duration: 0.25 }}
        className="relative w-full sm:max-w-md neo-glass rounded-t-2xl sm:rounded-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 flex-shrink-0">
          <h3 className="font-bold text-white">{item ? 'Edit Certification' : 'Add Certification'}</h3>
          <button onClick={onClose} className="p-2 rounded-lg text-neo-text-muted hover:text-white hover:bg-white/5 transition-colors" aria-label="Close">
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="overflow-y-auto flex-1 p-6 space-y-4">
          <div>
            <label className="block text-xs font-mono text-neo-text-muted uppercase tracking-widest mb-2">
              Title <span className="text-red-400">*</span>
            </label>
            <input value={form.title} onChange={e => set('title', e.target.value)}
              className="neo-input w-full text-sm" placeholder="Problem Solving Certificate" required />
          </div>

          <div>
            <label className="block text-xs font-mono text-neo-text-muted uppercase tracking-widest mb-2">Issuer</label>
            <input value={form.issuer} onChange={e => set('issuer', e.target.value)}
              className="neo-input w-full text-sm" placeholder="HackerRank" />
          </div>

          <div>
            <label className="block text-xs font-mono text-neo-text-muted uppercase tracking-widest mb-2">Description</label>
            <textarea value={form.description} onChange={e => set('description', e.target.value)}
              rows={3} className="neo-input w-full text-sm resize-none"
              placeholder="Brief description of this certification…" />
          </div>

          <div>
            <label className="block text-xs font-mono text-neo-text-muted uppercase tracking-widest mb-2">Certificate URL</label>
            <input type="url" value={form.url} onChange={e => set('url', e.target.value)}
              className="neo-input w-full text-sm" placeholder="https://hackerrank.com/certificates/…" />
          </div>

          <div>
            <label className="block text-xs font-mono text-neo-text-muted uppercase tracking-widest mb-2">
              Icon Name <span className="text-[10px] normal-case tracking-normal font-normal">(Lucide icon)</span>
            </label>
            <input value={form.icon} onChange={e => set('icon', e.target.value)}
              className="neo-input w-full text-sm" placeholder="Award" />
          </div>

          <div>
            <label className="block text-xs font-mono text-neo-text-muted uppercase tracking-widest mb-2">Color</label>
            <div className="flex flex-wrap gap-2 mb-2">
              {COLOR_PRESETS.map(c => (
                <button key={c.value} type="button" onClick={() => set('color', c.value)}
                  title={c.label}
                  className={`w-7 h-7 rounded-lg border-2 transition-transform hover:scale-110 ${
                    form.color === c.value ? 'border-white scale-110' : 'border-transparent'
                  }`}
                  style={{ backgroundColor: c.value }}
                  aria-label={c.label}
                />
              ))}
            </div>
            <input type="text" value={form.color} onChange={e => set('color', e.target.value)}
              className="neo-input w-full text-sm font-mono" placeholder="#8B5CF6" />
          </div>

          <div>
            <label className="block text-xs font-mono text-neo-text-muted uppercase tracking-widest mb-2">Sort Order</label>
            <input type="number" value={form.sort_order} min={0}
              onChange={e => set('sort_order', Number(e.target.value))}
              className="neo-input w-full text-sm" />
          </div>
        </form>

        <div className="flex gap-3 px-6 py-4 border-t border-white/5 flex-shrink-0">
          <button type="button" onClick={onClose} className="neo-btn-outline flex-1 py-2.5 text-sm">Cancel</button>
          <button onClick={handleSubmit} disabled={saving}
            className="neo-btn flex-1 py-2.5 text-sm flex items-center justify-center gap-2 disabled:opacity-60">
            {saving ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Save className="w-4 h-4" />}
            {saving ? 'Saving…' : 'Save'}
          </button>
        </div>
      </motion.div>
    </div>
  );
}

function CertCard({ item, onEdit, onDelete }) {
  return (
    <motion.div layout className="neo-glass p-5 flex flex-col gap-3 group">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl" style={{ backgroundColor: `${item.color}20`, border: `1px solid ${item.color}30` }}>
            <Award className="w-5 h-5" style={{ color: item.color }} aria-hidden="true" />
          </div>
          <div>
            <p className="font-semibold text-white text-sm leading-snug">{item.title}</p>
            <p className="text-neo-text-muted text-xs">{item.issuer}</p>
          </div>
        </div>
        <div className="flex gap-1 flex-shrink-0">
          <button onClick={onEdit} className="p-1.5 rounded-lg text-neo-text-muted hover:text-white hover:bg-white/5 transition-colors" aria-label="Edit">
            <Pencil className="w-3.5 h-3.5" />
          </button>
          <button onClick={onDelete} className="p-1.5 rounded-lg text-neo-text-muted hover:text-red-400 hover:bg-red-500/5 transition-colors" aria-label="Delete">
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {item.description && (
        <p className="text-neo-text-muted text-xs leading-relaxed line-clamp-2">{item.description}</p>
      )}

      <div className="flex items-center justify-between pt-1 border-t border-white/5">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-3 h-3 text-green-400" aria-hidden="true" />
          <span className="text-green-400 text-[10px] font-mono">Verified</span>
        </div>
        {item.url && (
          <a href={item.url} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1 text-neo-cyan text-xs hover:underline">
            <ExternalLink className="w-3 h-3" /> View
          </a>
        )}
      </div>
    </motion.div>
  );
}

function CertificationsManager() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => { fetchItems(); }, []);

  const fetchItems = async () => {
    setLoading(true);
    const { data } = await supabase.from('certifications').select('*').order('sort_order', { ascending: true });
    if (data) setItems(data);
    setLoading(false);
  };

  const handleSave = async (form) => {
    const payload = { ...form };
    delete payload.id;
    let error;
    if (editItem) {
      ({ error } = await supabase.from('certifications').update(payload).eq('id', editItem.id));
    } else {
      ({ error } = await supabase.from('certifications').insert(payload));
    }
    if (error) { toast.error(error.message); return; }
    toast.success(editItem ? 'Certification updated!' : 'Certification added!');
    setShowForm(false);
    setEditItem(null);
    fetchItems();
  };

  const handleDelete = async () => {
    const { error } = await supabase.from('certifications').delete().eq('id', deleteId);
    if (error) { toast.error(error.message); return; }
    toast.success('Certification deleted');
    setDeleteId(null);
    fetchItems();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-yellow-400/10 border border-yellow-400/20">
            <Award className="w-5 h-5 text-yellow-400" aria-hidden="true" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Certifications</h2>
            <p className="text-neo-text-muted text-sm">{items.length} certification{items.length !== 1 ? 's' : ''}</p>
          </div>
        </div>
        <button onClick={() => { setEditItem(null); setShowForm(true); }}
          className="neo-btn flex items-center gap-2 px-4 py-2.5 text-sm">
          <Plus className="w-4 h-4" /> Add Cert
        </button>
      </div>

      {loading ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1,2,3].map(i => <div key={i} className="neo-glass h-40 animate-pulse opacity-50" />)}
        </div>
      ) : items.length === 0 ? (
        <div className="neo-glass p-12 text-center">
          <p className="text-neo-text-muted text-sm mb-4">No certifications yet.</p>
          <button onClick={() => { setEditItem(null); setShowForm(true); }}
            className="neo-btn flex items-center gap-2 px-4 py-2 text-sm mx-auto">
            <Plus className="w-4 h-4" /> Add certification
          </button>
        </div>
      ) : (
        <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(item => (
            <CertCard key={item.id} item={item}
              onEdit={() => { setEditItem(item); setShowForm(true); }}
              onDelete={() => setDeleteId(item.id)} />
          ))}
        </motion.div>
      )}

      <AnimatePresence>
        {showForm && (
          <CertForm item={editItem} onSave={handleSave}
            onClose={() => { setShowForm(false); setEditItem(null); }} />
        )}
      </AnimatePresence>

      <ConfirmModal isOpen={!!deleteId} title="Delete Certification"
        message="This will permanently remove this certification."
        onConfirm={handleDelete} onCancel={() => setDeleteId(null)} />
    </div>
  );
}

export default CertificationsManager;
