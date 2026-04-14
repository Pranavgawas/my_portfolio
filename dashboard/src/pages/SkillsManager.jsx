import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Plus, Pencil, Trash2, Save, X, Wrench, Code2, ArrowLeft } from 'lucide-react';
import toast from 'react-hot-toast';

const iconOptions = ['Coffee', 'Code2', 'Zap', 'Braces', 'Database', 'Container', 'GitBranch', 'Terminal', 'Globe', 'Sparkles', 'Layers', 'Cpu'];
const emptySkill = { name: '', description: '', icon_name: 'Code2', category: 'programming', sort_order: 0 };

export default function SkillsManager() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState('programming');
  const [editing, setEditing] = useState(null);

  const fetchSkills = async () => {
    const { data } = await supabase.from('skills').select('*').order('sort_order');
    setSkills(data || []);
    setLoading(false);
  };

  useEffect(() => { fetchSkills(); }, []);

  const filtered = skills.filter(s => s.category === tab);

  const handleSave = async () => {
    const { id, created_at, updated_at, ...fields } = editing;
    fields.category = tab;
    let error;
    if (id) {
      ({ error } = await supabase.from('skills').update(fields).eq('id', id));
    } else {
      fields.sort_order = filtered.length + 1;
      ({ error } = await supabase.from('skills').insert(fields));
    }
    if (error) toast.error(error.message);
    else { toast.success(id ? 'Skill updated!' : 'Skill added!'); setEditing(null); fetchSkills(); }
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this skill?')) return;
    const { error } = await supabase.from('skills').delete().eq('id', id);
    if (error) toast.error(error.message);
    else { toast.success('Deleted!'); fetchSkills(); }
  };

  if (loading) return (
    <div className="flex items-center justify-center py-20">
      <div className="w-8 h-8 border-2 border-neo-purple border-t-transparent rounded-full animate-spin" />
    </div>
  );

  // Edit form
  if (editing) {
    return (
      <div className="max-w-lg space-y-6">
        <div className="flex items-center gap-3">
          <button onClick={() => setEditing(null)} className="neo-btn-ghost p-2">
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-white">{editing.id ? 'Edit Skill' : 'New Skill'}</h1>
            <p className="text-xs text-neo-muted mt-0.5 capitalize">{tab} category</p>
          </div>
        </div>

        <div className="neo-glass p-6 space-y-4">
          <div>
            <label className="neo-label">Skill Name</label>
            <input className="neo-input" value={editing.name} onChange={e => setEditing({ ...editing, name: e.target.value })} placeholder="e.g. React" />
          </div>
          <div>
            <label className="neo-label">Description</label>
            <textarea className="neo-input resize-none" rows={3} value={editing.description} onChange={e => setEditing({ ...editing, description: e.target.value })} placeholder="Short description of how you use this skill..." />
          </div>
          <div>
            <label className="neo-label">Icon</label>
            <select className="neo-input" value={editing.icon_name} onChange={e => setEditing({ ...editing, icon_name: e.target.value })}>
              {iconOptions.map(i => <option key={i} value={i}>{i}</option>)}
            </select>
          </div>

          <button onClick={handleSave} className="neo-btn w-full mt-2">
            <Save className="w-4 h-4" /> Save Skill
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Wrench className="w-4 h-4 text-neo-purple" />
            <span className="text-[11px] uppercase tracking-widest font-mono text-neo-muted">Skills</span>
          </div>
          <h1 className="text-2xl font-bold text-white">Skills Manager</h1>
          <p className="text-sm mt-1 text-neo-secondary">{skills.length} total skills across all categories</p>
        </div>
        <button onClick={() => setEditing({ ...emptySkill, category: tab })} className="neo-btn">
          <Plus className="w-4 h-4" />
          <span className="hidden sm:inline">Add Skill</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2">
        {[['programming', 'Programming'], ['other', 'Other Tools']].map(([key, label]) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${tab === key ? 'neo-btn' : 'neo-btn-outline'}`}
          >
            {label}
            <span className="ml-2 text-[10px] opacity-60">({skills.filter(s => s.category === key).length})</span>
          </button>
        ))}
      </div>

      {/* Skills list */}
      <div className="space-y-3">
        {filtered.map(skill => (
          <div key={skill.id} className="neo-glass p-4 flex items-center gap-4 group hover:border-white/20 transition-all duration-200">
            <div className="p-2.5 rounded-xl shrink-0" style={{ background: 'rgba(139,92,246,0.1)' }}>
              <Code2 className="w-4 h-4 text-neo-purple" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-white text-sm">{skill.name}</h3>
              <p className="text-xs mt-0.5 truncate text-neo-muted">{skill.description}</p>
            </div>
            <span className="neo-tag hidden sm:inline-flex">{skill.icon_name}</span>
            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={() => setEditing({ ...skill })} className="neo-btn-ghost p-2">
                <Pencil className="w-3.5 h-3.5" />
              </button>
              <button onClick={() => handleDelete(skill.id)} className="neo-btn-ghost p-2 hover:text-red-400">
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="neo-glass p-12 text-center">
            <Wrench className="w-10 h-10 mx-auto mb-3" style={{ color: 'var(--neo-text-muted)' }} />
            <p className="text-neo-muted text-sm">No skills in this category yet.</p>
            <button onClick={() => setEditing({ ...emptySkill, category: tab })} className="neo-btn mt-4 mx-auto">
              <Plus className="w-4 h-4" /> Add First Skill
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
