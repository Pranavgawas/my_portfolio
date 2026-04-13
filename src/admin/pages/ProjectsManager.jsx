import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Pencil, Trash2, ExternalLink, Github, X, Save, FolderGit2 } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import TagInput from '../components/TagInput';
import ConfirmModal from '../components/ConfirmModal';
import toast from 'react-hot-toast';

const EMPTY_FORM = {
  title: '', description: '', technologies: [], github_url: '',
  live_url: '', sort_order: 0, status: 'Active', icon_name: 'Layers',
  modal_reference: '', date: '',
};

function Field({ label, required, hint, children }) {
  return (
    <div>
      <label className="flex items-center gap-1 text-xs font-mono text-neo-text-muted uppercase tracking-widest mb-2">
        {label}
        {required && <span className="text-red-400">*</span>}
      </label>
      {children}
      {hint && <p className="text-[11px] text-neo-text-muted mt-1">{hint}</p>}
    </div>
  );
}

function ProjectForm({ item, onSave, onClose }) {
  const [form, setForm] = useState(item
    ? { ...EMPTY_FORM, ...item, technologies: item.technologies ?? [] }
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
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 60 }}
        transition={{ type: 'tween', duration: 0.25 }}
        className="relative w-full sm:max-w-xl neo-glass rounded-t-2xl sm:rounded-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Form Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 flex-shrink-0">
          <h3 className="font-bold text-white">{item ? 'Edit Project' : 'Add Project'}</h3>
          <button onClick={onClose} className="p-2 rounded-lg text-neo-text-muted hover:text-white hover:bg-white/5 transition-colors" aria-label="Close">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable form body */}
        <form onSubmit={handleSubmit} className="overflow-y-auto flex-1 p-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Title" required>
              <input value={form.title} onChange={e => set('title', e.target.value)}
                className="neo-input w-full text-sm" placeholder="Vehicle Config App" required />
            </Field>
            <Field label="Date">
              <input value={form.date} onChange={e => set('date', e.target.value)}
                className="neo-input w-full text-sm" placeholder="Jan 2024" />
            </Field>
          </div>

          <Field label="Description">
            <textarea value={form.description} onChange={e => set('description', e.target.value)}
              rows={3} className="neo-input w-full text-sm resize-none" placeholder="What does this project do?" />
          </Field>

          <Field label="Technologies" hint="Press Enter to add each tech">
            <TagInput value={form.technologies} onChange={v => set('technologies', v)} placeholder="React, Java, MySQL…" />
          </Field>

          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="GitHub URL">
              <input type="url" value={form.github_url} onChange={e => set('github_url', e.target.value)}
                className="neo-input w-full text-sm" placeholder="https://github.com/…" />
            </Field>
            <Field label="Live URL">
              <input type="url" value={form.live_url} onChange={e => set('live_url', e.target.value)}
                className="neo-input w-full text-sm" placeholder="https://…" />
            </Field>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <Field label="Status">
              <input value={form.status} onChange={e => set('status', e.target.value)}
                className="neo-input w-full text-sm" placeholder="Live / Active" />
            </Field>
            <Field label="Sort Order">
              <input type="number" value={form.sort_order} onChange={e => set('sort_order', Number(e.target.value))}
                className="neo-input w-full text-sm" min={0} />
            </Field>
            <Field label="Icon Name" hint="Lucide icon name">
              <input value={form.icon_name} onChange={e => set('icon_name', e.target.value)}
                className="neo-input w-full text-sm" placeholder="Layers" />
            </Field>
          </div>

          <Field label="Modal Reference" hint="Used for the detail modal (e.g. VehicleConfigModel)">
            <input value={form.modal_reference} onChange={e => set('modal_reference', e.target.value)}
              className="neo-input w-full text-sm" placeholder="VehicleConfigModel" />
          </Field>
        </form>

        {/* Footer */}
        <div className="flex gap-3 px-6 py-4 border-t border-white/5 flex-shrink-0 bg-white/2">
          <button type="button" onClick={onClose} className="neo-btn-outline flex-1 py-2.5 text-sm">Cancel</button>
          <button type="submit" form="project-form" disabled={saving}
            onClick={handleSubmit}
            className="neo-btn flex-1 py-2.5 text-sm flex items-center justify-center gap-2 disabled:opacity-60">
            {saving ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Save className="w-4 h-4" />}
            {saving ? 'Saving…' : 'Save'}
          </button>
        </div>
      </motion.div>
    </div>
  );
}

function ProjectCard({ item, onEdit, onDelete }) {
  return (
    <motion.div layout className="neo-glass p-5 flex flex-col gap-3 group">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-white truncate">{item.title}</p>
          <p className="text-neo-text-muted text-xs mt-0.5">{item.date}</p>
        </div>
        <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono border flex-shrink-0 ${
          item.status === 'Live' ? 'bg-green-500/10 border-green-500/20 text-green-400'
                                 : 'bg-neo-cyan/10 border-neo-cyan/20 text-neo-cyan'
        }`}>
          {item.status ?? 'Active'}
        </span>
      </div>

      {item.description && (
        <p className="text-neo-text-muted text-xs leading-relaxed line-clamp-2">{item.description}</p>
      )}

      {item.technologies?.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {item.technologies.slice(0, 4).map(t => (
            <span key={t} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/8 text-neo-text-muted text-[10px] font-mono">{t}</span>
          ))}
          {item.technologies.length > 4 && (
            <span className="text-[10px] text-neo-text-muted">+{item.technologies.length - 4}</span>
          )}
        </div>
      )}

      <div className="flex items-center gap-2 pt-1 border-t border-white/5 mt-auto">
        {item.github_url && (
          <a href={item.github_url} target="_blank" rel="noopener noreferrer"
            className="p-1.5 rounded-lg text-neo-text-muted hover:text-white hover:bg-white/5 transition-colors" aria-label="GitHub">
            <Github className="w-3.5 h-3.5" />
          </a>
        )}
        {item.live_url && (
          <a href={item.live_url} target="_blank" rel="noopener noreferrer"
            className="p-1.5 rounded-lg text-neo-text-muted hover:text-neo-cyan hover:bg-neo-cyan/5 transition-colors" aria-label="Live">
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
        <div className="flex gap-1.5 ml-auto">
          <button onClick={onEdit}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-neo-text-muted hover:text-white hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
            <Pencil className="w-3 h-3" /> Edit
          </button>
          <button onClick={onDelete}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-neo-text-muted hover:text-red-400 hover:bg-red-500/5 transition-colors border border-transparent hover:border-red-500/10">
            <Trash2 className="w-3 h-3" /> Delete
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectsManager() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => { fetchItems(); }, []);

  const fetchItems = async () => {
    setLoading(true);
    const { data } = await supabase.from('projects').select('*').order('sort_order', { ascending: true });
    if (data) setItems(data);
    setLoading(false);
  };

  const handleSave = async (form) => {
    const payload = { ...form };
    delete payload.id;
    let error;
    if (editItem) {
      ({ error } = await supabase.from('projects').update(payload).eq('id', editItem.id));
    } else {
      ({ error } = await supabase.from('projects').insert(payload));
    }
    if (error) { toast.error(error.message); return; }
    toast.success(editItem ? 'Project updated!' : 'Project added!');
    setShowForm(false);
    setEditItem(null);
    fetchItems();
  };

  const handleDelete = async () => {
    const { error } = await supabase.from('projects').delete().eq('id', deleteId);
    if (error) { toast.error(error.message); return; }
    toast.success('Project deleted');
    setDeleteId(null);
    fetchItems();
  };

  const openAdd = () => { setEditItem(null); setShowForm(true); };
  const openEdit = (item) => { setEditItem(item); setShowForm(true); };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-neo-purple/10 border border-neo-purple/20">
            <FolderGit2 className="w-5 h-5 text-neo-purple" aria-hidden="true" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Projects</h2>
            <p className="text-neo-text-muted text-sm">{items.length} project{items.length !== 1 ? 's' : ''}</p>
          </div>
        </div>
        <button onClick={openAdd} className="neo-btn flex items-center gap-2 px-4 py-2.5 text-sm">
          <Plus className="w-4 h-4" aria-hidden="true" /> Add Project
        </button>
      </div>

      {loading ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1,2,3].map(i => <div key={i} className="neo-glass h-48 animate-pulse opacity-50" />)}
        </div>
      ) : items.length === 0 ? (
        <EmptyState label="projects" onAdd={openAdd} />
      ) : (
        <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(item => (
            <ProjectCard key={item.id} item={item}
              onEdit={() => openEdit(item)}
              onDelete={() => setDeleteId(item.id)} />
          ))}
        </motion.div>
      )}

      <AnimatePresence>
        {showForm && (
          <ProjectForm item={editItem} onSave={handleSave} onClose={() => { setShowForm(false); setEditItem(null); }} />
        )}
      </AnimatePresence>

      <ConfirmModal
        isOpen={!!deleteId}
        title="Delete Project"
        message="This will permanently remove the project from your portfolio."
        onConfirm={handleDelete}
        onCancel={() => setDeleteId(null)}
      />
    </div>
  );
}

function EmptyState({ label, onAdd }) {
  return (
    <div className="neo-glass p-12 text-center">
      <p className="text-neo-text-muted text-sm mb-4">No {label} yet.</p>
      <button onClick={onAdd} className="neo-btn flex items-center gap-2 px-4 py-2 text-sm mx-auto">
        <Plus className="w-4 h-4" /> Add your first {label.slice(0, -1)}
      </button>
    </div>
  );
}

export default ProjectsManager;
