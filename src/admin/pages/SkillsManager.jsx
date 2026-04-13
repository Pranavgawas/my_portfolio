import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Pencil, Trash2, X, Save, Code2 } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import ConfirmModal from '../components/ConfirmModal';
import toast from 'react-hot-toast';

const PROGRAMMING_ICONS = ['Coffee', 'Code2', 'Zap', 'Braces', 'Database', 'Terminal', 'Layers'];
const OTHER_ICONS = ['Container', 'GitBranch', 'Terminal', 'Globe', 'Award', 'Sparkles', 'Cpu'];

const EMPTY_FORM = { name: '', description: '', icon_name: 'Code2', category: 'programming', sort_order: 0 };

function SkillForm({ item, defaultCategory, onSave, onClose }) {
  const [form, setForm] = useState(item
    ? { ...EMPTY_FORM, ...item }
    : { ...EMPTY_FORM, category: defaultCategory }
  );
  const [saving, setSaving] = useState(false);
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const icons = form.category === 'programming' ? PROGRAMMING_ICONS : OTHER_ICONS;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim()) { toast.error('Name is required'); return; }
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
        className="relative w-full sm:max-w-md neo-glass rounded-t-2xl sm:rounded-2xl overflow-hidden flex flex-col max-h-[85vh]"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 flex-shrink-0">
          <h3 className="font-bold text-white">{item ? 'Edit Skill' : 'Add Skill'}</h3>
          <button onClick={onClose} className="p-2 rounded-lg text-neo-text-muted hover:text-white hover:bg-white/5 transition-colors" aria-label="Close">
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="overflow-y-auto flex-1 p-6 space-y-4">
          <div>
            <label className="block text-xs font-mono text-neo-text-muted uppercase tracking-widest mb-2">
              Name <span className="text-red-400">*</span>
            </label>
            <input value={form.name} onChange={e => set('name', e.target.value)}
              className="neo-input w-full text-sm" placeholder="Java" required />
          </div>

          <div>
            <label className="block text-xs font-mono text-neo-text-muted uppercase tracking-widest mb-2">Description</label>
            <textarea value={form.description} onChange={e => set('description', e.target.value)}
              rows={3} className="neo-input w-full text-sm resize-none"
              placeholder="Backend development with Spring Boot…" />
          </div>

          <div>
            <label className="block text-xs font-mono text-neo-text-muted uppercase tracking-widest mb-2">Category</label>
            <div className="flex gap-2">
              {['programming', 'other'].map(cat => (
                <button key={cat} type="button" onClick={() => set('category', cat)}
                  className={`flex-1 py-2 rounded-xl text-sm font-medium border transition-all ${
                    form.category === cat
                      ? 'bg-neo-purple/20 border-neo-purple/40 text-white'
                      : 'border-white/10 text-neo-text-muted hover:border-white/20 hover:text-white'
                  }`}>
                  {cat === 'programming' ? 'Programming' : 'Tools'}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-neo-text-muted uppercase tracking-widest mb-2">Icon</label>
            <div className="grid grid-cols-4 gap-2">
              {icons.map(icon => (
                <button key={icon} type="button" onClick={() => set('icon_name', icon)}
                  className={`py-2 px-1 rounded-xl text-xs font-mono border transition-all truncate ${
                    form.icon_name === icon
                      ? 'bg-neo-purple/20 border-neo-purple/40 text-neo-purple'
                      : 'border-white/8 text-neo-text-muted hover:border-white/20 hover:text-white'
                  }`}>
                  {icon}
                </button>
              ))}
            </div>
            <p className="text-[11px] text-neo-text-muted mt-1">Or type any Lucide icon name:</p>
            <input value={form.icon_name} onChange={e => set('icon_name', e.target.value)}
              className="neo-input w-full text-sm mt-1" placeholder="Code2" />
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

function SkillCard({ item, accentColor, onEdit, onDelete }) {
  return (
    <motion.div layout className="neo-glass p-4 flex items-start gap-4 group">
      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
        <span className={`text-xs font-mono ${accentColor} font-bold`}>{item.icon_name?.slice(0, 2) ?? '?'}</span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-white text-sm">{item.name}</p>
        {item.description && (
          <p className="text-neo-text-muted text-xs mt-0.5 line-clamp-2">{item.description}</p>
        )}
        <p className="text-[10px] font-mono text-neo-text-muted mt-1">icon: {item.icon_name} · order: {item.sort_order}</p>
      </div>
      <div className="flex flex-col gap-1 flex-shrink-0">
        <button onClick={onEdit} className="p-1.5 rounded-lg text-neo-text-muted hover:text-white hover:bg-white/5 transition-colors" aria-label="Edit">
          <Pencil className="w-3.5 h-3.5" />
        </button>
        <button onClick={onDelete} className="p-1.5 rounded-lg text-neo-text-muted hover:text-red-400 hover:bg-red-500/5 transition-colors" aria-label="Delete">
          <Trash2 className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
}

function SkillsManager() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('programming');
  const [showForm, setShowForm] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => { fetchItems(); }, []);

  const fetchItems = async () => {
    setLoading(true);
    const { data } = await supabase.from('skills').select('*').order('sort_order', { ascending: true });
    if (data) setItems(data);
    setLoading(false);
  };

  const handleSave = async (form) => {
    const payload = { ...form };
    delete payload.id;
    let error;
    if (editItem) {
      ({ error } = await supabase.from('skills').update(payload).eq('id', editItem.id));
    } else {
      ({ error } = await supabase.from('skills').insert(payload));
    }
    if (error) { toast.error(error.message); return; }
    toast.success(editItem ? 'Skill updated!' : 'Skill added!');
    setShowForm(false);
    setEditItem(null);
    fetchItems();
  };

  const handleDelete = async () => {
    const { error } = await supabase.from('skills').delete().eq('id', deleteId);
    if (error) { toast.error(error.message); return; }
    toast.success('Skill deleted');
    setDeleteId(null);
    fetchItems();
  };

  const filtered = items.filter(i => i.category === activeTab);
  const progCount = items.filter(i => i.category === 'programming').length;
  const otherCount = items.filter(i => i.category === 'other').length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-neo-cyan/10 border border-neo-cyan/20">
            <Code2 className="w-5 h-5 text-neo-cyan" aria-hidden="true" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Skills</h2>
            <p className="text-neo-text-muted text-sm">{items.length} skill{items.length !== 1 ? 's' : ''}</p>
          </div>
        </div>
        <button onClick={() => { setEditItem(null); setShowForm(true); }}
          className="neo-btn flex items-center gap-2 px-4 py-2.5 text-sm">
          <Plus className="w-4 h-4" /> Add Skill
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2">
        {[
          { key: 'programming', label: `Programming (${progCount})`, color: 'text-neo-purple' },
          { key: 'other',       label: `Tools (${otherCount})`,       color: 'text-neo-cyan'   },
        ].map(tab => (
          <button key={tab.key} onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all ${
              activeTab === tab.key
                ? 'bg-white/10 border-white/20 text-white'
                : 'border-white/5 text-neo-text-muted hover:border-white/10 hover:text-white'
            }`}>
            {tab.label}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="grid gap-3 sm:grid-cols-2">
          {[1,2,3,4].map(i => <div key={i} className="neo-glass h-20 animate-pulse opacity-50" />)}
        </div>
      ) : filtered.length === 0 ? (
        <div className="neo-glass p-10 text-center">
          <p className="text-neo-text-muted text-sm mb-4">No {activeTab === 'programming' ? 'programming skills' : 'tools'} yet.</p>
          <button onClick={() => { setEditItem(null); setShowForm(true); }}
            className="neo-btn flex items-center gap-2 px-4 py-2 text-sm mx-auto">
            <Plus className="w-4 h-4" /> Add skill
          </button>
        </div>
      ) : (
        <motion.div layout className="grid gap-3 sm:grid-cols-2">
          {filtered.map(item => (
            <SkillCard key={item.id} item={item}
              accentColor={activeTab === 'programming' ? 'text-neo-purple' : 'text-neo-cyan'}
              onEdit={() => { setEditItem(item); setShowForm(true); }}
              onDelete={() => setDeleteId(item.id)} />
          ))}
        </motion.div>
      )}

      <AnimatePresence>
        {showForm && (
          <SkillForm item={editItem} defaultCategory={activeTab} onSave={handleSave}
            onClose={() => { setShowForm(false); setEditItem(null); }} />
        )}
      </AnimatePresence>

      <ConfirmModal isOpen={!!deleteId} title="Delete Skill"
        message="This will remove the skill from your portfolio."
        onConfirm={handleDelete} onCancel={() => setDeleteId(null)} />
    </div>
  );
}

export default SkillsManager;
