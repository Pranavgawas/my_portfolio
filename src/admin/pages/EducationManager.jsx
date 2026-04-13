import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Pencil, Trash2, X, Save, GraduationCap, ExternalLink } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import TagInput from '../components/TagInput';
import ConfirmModal from '../components/ConfirmModal';
import toast from 'react-hot-toast';

const EMPTY_FORM = {
  title: '', institution: '', year: '', description: '',
  details: [], certificate_url: '', sort_order: 0,
};

function EducationForm({ item, onSave, onClose }) {
  const [form, setForm] = useState(item
    ? { ...EMPTY_FORM, ...item, details: item.details ?? [] }
    : { ...EMPTY_FORM }
  );
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
        className="relative w-full sm:max-w-lg neo-glass rounded-t-2xl sm:rounded-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 flex-shrink-0">
          <h3 className="font-bold text-white">{item ? 'Edit Education' : 'Add Education'}</h3>
          <button onClick={onClose} className="p-2 rounded-lg text-neo-text-muted hover:text-white hover:bg-white/5 transition-colors" aria-label="Close">
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="overflow-y-auto flex-1 p-6 space-y-4">
          <div>
            <label className="block text-xs font-mono text-neo-text-muted uppercase tracking-widest mb-2">
              Degree / Title <span className="text-red-400">*</span>
            </label>
            <input value={form.title} onChange={e => set('title', e.target.value)}
              className="neo-input w-full text-sm" placeholder="Post Graduate Diploma in Advanced Computing" required />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-neo-text-muted uppercase tracking-widest mb-2">Institution</label>
              <input value={form.institution} onChange={e => set('institution', e.target.value)}
                className="neo-input w-full text-sm" placeholder="C-DAC Mumbai" />
            </div>
            <div>
              <label className="block text-xs font-mono text-neo-text-muted uppercase tracking-widest mb-2">Year</label>
              <input value={form.year} onChange={e => set('year', e.target.value)}
                className="neo-input w-full text-sm" placeholder="2023 – 2024" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-neo-text-muted uppercase tracking-widest mb-2">Description</label>
            <textarea value={form.description} onChange={e => set('description', e.target.value)}
              rows={3} className="neo-input w-full text-sm resize-none"
              placeholder="Brief overview of what you studied…" />
          </div>

          <div>
            <label className="block text-xs font-mono text-neo-text-muted uppercase tracking-widest mb-2">
              Key Details / Highlights
            </label>
            <TagInput value={form.details} onChange={v => set('details', v)}
              placeholder="Full Stack Web Development, Cloud Computing…" />
            <p className="text-[11px] text-neo-text-muted mt-1">Shown when the card is expanded</p>
          </div>

          <div>
            <label className="block text-xs font-mono text-neo-text-muted uppercase tracking-widest mb-2">Certificate URL</label>
            <input type="url" value={form.certificate_url} onChange={e => set('certificate_url', e.target.value)}
              className="neo-input w-full text-sm" placeholder="https://drive.google.com/…" />
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

function EduCard({ item, onEdit, onDelete }) {
  return (
    <motion.div layout className="neo-glass p-5 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-white leading-snug">{item.title}</p>
          <p className="text-neo-purple text-sm mt-0.5">{item.institution}</p>
          <p className="text-neo-text-muted text-xs mt-0.5">{item.year}</p>
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

      {item.details?.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {item.details.slice(0, 3).map((d, i) => (
            <span key={i} className="px-2 py-0.5 rounded-md bg-neo-purple/10 border border-neo-purple/15 text-neo-purple text-[10px]">{d}</span>
          ))}
          {item.details.length > 3 && <span className="text-[10px] text-neo-text-muted">+{item.details.length - 3} more</span>}
        </div>
      )}

      {item.certificate_url && (
        <a href={item.certificate_url} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-neo-cyan text-xs hover:underline w-fit">
          <ExternalLink className="w-3 h-3" /> View Certificate
        </a>
      )}
    </motion.div>
  );
}

function EducationManager() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => { fetchItems(); }, []);

  const fetchItems = async () => {
    setLoading(true);
    const { data } = await supabase.from('education').select('*').order('sort_order', { ascending: true });
    if (data) setItems(data);
    setLoading(false);
  };

  const handleSave = async (form) => {
    const payload = { ...form };
    delete payload.id;
    let error;
    if (editItem) {
      ({ error } = await supabase.from('education').update(payload).eq('id', editItem.id));
    } else {
      ({ error } = await supabase.from('education').insert(payload));
    }
    if (error) { toast.error(error.message); return; }
    toast.success(editItem ? 'Education updated!' : 'Education added!');
    setShowForm(false);
    setEditItem(null);
    fetchItems();
  };

  const handleDelete = async () => {
    const { error } = await supabase.from('education').delete().eq('id', deleteId);
    if (error) { toast.error(error.message); return; }
    toast.success('Education entry deleted');
    setDeleteId(null);
    fetchItems();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-neo-pink/10 border border-neo-pink/20">
            <GraduationCap className="w-5 h-5 text-neo-pink" aria-hidden="true" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Education</h2>
            <p className="text-neo-text-muted text-sm">{items.length} entr{items.length !== 1 ? 'ies' : 'y'}</p>
          </div>
        </div>
        <button onClick={() => { setEditItem(null); setShowForm(true); }}
          className="neo-btn flex items-center gap-2 px-4 py-2.5 text-sm">
          <Plus className="w-4 h-4" /> Add Entry
        </button>
      </div>

      {loading ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {[1,2].map(i => <div key={i} className="neo-glass h-40 animate-pulse opacity-50" />)}
        </div>
      ) : items.length === 0 ? (
        <div className="neo-glass p-12 text-center">
          <p className="text-neo-text-muted text-sm mb-4">No education entries yet.</p>
          <button onClick={() => { setEditItem(null); setShowForm(true); }}
            className="neo-btn flex items-center gap-2 px-4 py-2 text-sm mx-auto">
            <Plus className="w-4 h-4" /> Add education
          </button>
        </div>
      ) : (
        <motion.div layout className="grid gap-4 sm:grid-cols-2">
          {items.map(item => (
            <EduCard key={item.id} item={item}
              onEdit={() => { setEditItem(item); setShowForm(true); }}
              onDelete={() => setDeleteId(item.id)} />
          ))}
        </motion.div>
      )}

      <AnimatePresence>
        {showForm && (
          <EducationForm item={editItem} onSave={handleSave}
            onClose={() => { setShowForm(false); setEditItem(null); }} />
        )}
      </AnimatePresence>

      <ConfirmModal isOpen={!!deleteId} title="Delete Education Entry"
        message="This will permanently remove this education entry."
        onConfirm={handleDelete} onCancel={() => setDeleteId(null)} />
    </div>
  );
}

export default EducationManager;
