import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Plus, Pencil, Trash2, ExternalLink, Save, X, ArrowUp, ArrowDown, FolderKanban, ArrowLeft } from 'lucide-react';
import toast from 'react-hot-toast';

const emptyProject = {
  title: '', description: '', technologies: [], icon_name: 'FileCode',
  gradient: 'from-blue-500 to-cyan-500', live_url: '', github_url: '',
  modal_reference: '', status: 'Completed', date: new Date().getFullYear().toString(), sort_order: 0,
};

const iconOptions = ['FileCode', 'Sparkles', 'Code2', 'Car', 'MessageSquare', 'Award', 'Users', 'Palette', 'Globe', 'Cpu'];
const statusOptions = ['Live', 'Completed', 'In Progress'];
const gradientOptions = [
  { label: 'Blue → Cyan', value: 'from-blue-500 to-cyan-500' },
  { label: 'Purple → Pink', value: 'from-purple-600 to-pink-600' },
  { label: 'Teal → Emerald', value: 'from-teal-500 to-emerald-600' },
  { label: 'Rose → Orange', value: 'from-rose-500 to-orange-500' },
  { label: 'Amber → Orange', value: 'from-amber-500 to-orange-500' },
  { label: 'Indigo → Purple', value: 'from-indigo-500 to-purple-500' },
  { label: 'Cyan → Blue', value: 'from-cyan-600 to-blue-600' },
  { label: 'Green → Emerald', value: 'from-green-500 to-emerald-500' },
];

const statusBadge = (status) => {
  if (status === 'Live') return 'neo-badge-green';
  if (status === 'In Progress') return 'neo-badge-yellow';
  return 'neo-badge-cyan';
};

export default function ProjectsManager() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [techInput, setTechInput] = useState('');

  const fetchProjects = async () => {
    const { data } = await supabase.from('projects').select('*').order('sort_order');
    setProjects(data || []);
    setLoading(false);
  };

  useEffect(() => { fetchProjects(); }, []);

  const handleSave = async () => {
    const { id, created_at, updated_at, ...fields } = editing;
    let error;
    if (id) {
      ({ error } = await supabase.from('projects').update(fields).eq('id', id));
    } else {
      fields.sort_order = projects.length + 1;
      ({ error } = await supabase.from('projects').insert(fields));
    }
    if (error) toast.error(error.message);
    else { toast.success(id ? 'Project updated!' : 'Project added!'); setEditing(null); fetchProjects(); }
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this project?')) return;
    const { error } = await supabase.from('projects').delete().eq('id', id);
    if (error) toast.error(error.message);
    else { toast.success('Deleted!'); fetchProjects(); }
  };

  const addTech = () => {
    if (techInput.trim() && !editing.technologies.includes(techInput.trim())) {
      setEditing({ ...editing, technologies: [...editing.technologies, techInput.trim()] });
      setTechInput('');
    }
  };

  const removeTech = (t) => setEditing({ ...editing, technologies: editing.technologies.filter(x => x !== t) });

  const moveProject = async (index, direction) => {
    const swapIndex = index + direction;
    if (swapIndex < 0 || swapIndex >= projects.length) return;
    const a = projects[index], b = projects[swapIndex];
    await Promise.all([
      supabase.from('projects').update({ sort_order: b.sort_order }).eq('id', a.id),
      supabase.from('projects').update({ sort_order: a.sort_order }).eq('id', b.id),
    ]);
    fetchProjects();
  };

  if (loading) return (
    <div className="flex items-center justify-center py-20">
      <div className="w-8 h-8 border-2 border-neo-purple border-t-transparent rounded-full animate-spin" />
    </div>
  );

  // Edit form
  if (editing) {
    return (
      <div className="max-w-2xl space-y-6">
        <div className="flex items-center gap-3">
          <button onClick={() => setEditing(null)} className="neo-btn-ghost p-2">
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-white">{editing.id ? 'Edit Project' : 'New Project'}</h1>
            <p className="text-xs text-neo-muted mt-0.5">Changes save directly to Supabase</p>
          </div>
        </div>

        <div className="neo-glass p-6 space-y-4">
          <div>
            <label className="neo-label">Title</label>
            <input className="neo-input" value={editing.title} onChange={e => setEditing({ ...editing, title: e.target.value })} placeholder="Project name" />
          </div>
          <div>
            <label className="neo-label">Description</label>
            <textarea className="neo-input resize-none" rows={4} value={editing.description} onChange={e => setEditing({ ...editing, description: e.target.value })} placeholder="Describe what this project does..." />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="neo-label">Status</label>
              <select className="neo-input" value={editing.status} onChange={e => setEditing({ ...editing, status: e.target.value })}>
                {statusOptions.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className="neo-label">Year</label>
              <input className="neo-input" value={editing.date} onChange={e => setEditing({ ...editing, date: e.target.value })} placeholder="2024" />
            </div>
          </div>

          <div>
            <label className="neo-label">Live URL</label>
            <input type="url" className="neo-input" value={editing.live_url || ''} onChange={e => setEditing({ ...editing, live_url: e.target.value })} placeholder="https://..." />
          </div>
          <div>
            <label className="neo-label">GitHub URL</label>
            <input type="url" className="neo-input" value={editing.github_url || ''} onChange={e => setEditing({ ...editing, github_url: e.target.value })} placeholder="https://github.com/..." />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="neo-label">Icon</label>
              <select className="neo-input" value={editing.icon_name} onChange={e => setEditing({ ...editing, icon_name: e.target.value })}>
                {iconOptions.map(i => <option key={i} value={i}>{i}</option>)}
              </select>
            </div>
            <div>
              <label className="neo-label">Gradient</label>
              <select className="neo-input" value={editing.gradient} onChange={e => setEditing({ ...editing, gradient: e.target.value })}>
                {gradientOptions.map(g => <option key={g.value} value={g.value}>{g.label}</option>)}
              </select>
            </div>
          </div>

          <div>
            <label className="neo-label">Technologies</label>
            <div className="flex flex-wrap gap-2 mb-3">
              {editing.technologies.map(t => (
                <span key={t} className="neo-tag flex items-center gap-1.5">
                  {t}
                  <button onClick={() => removeTech(t)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: 'inherit', lineHeight: 1 }}>
                    <X className="w-3 h-3 hover:text-red-400" />
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input className="neo-input flex-1" value={techInput} onChange={e => setTechInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addTech())} placeholder="Add technology (press Enter)..." />
              <button onClick={addTech} className="neo-btn-outline px-4"><Plus className="w-4 h-4" /></button>
            </div>
          </div>

          <div>
            <label className="neo-label">Modal Reference <span className="text-[10px] normal-case tracking-normal opacity-60">(optional)</span></label>
            <input className="neo-input" value={editing.modal_reference || ''} onChange={e => setEditing({ ...editing, modal_reference: e.target.value })} placeholder="e.g. VehicleConfigModel" />
          </div>

          <button onClick={handleSave} className="neo-btn w-full mt-2">
            <Save className="w-4 h-4" /> Save Project
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
            <FolderKanban className="w-4 h-4 text-neo-cyan" />
            <span className="text-[11px] uppercase tracking-widest font-mono text-neo-muted">Projects</span>
          </div>
          <h1 className="text-2xl font-bold text-white">Projects Manager</h1>
          <p className="text-sm mt-1 text-neo-secondary">{projects.length} projects · drag arrows to reorder</p>
        </div>
        <button onClick={() => setEditing({ ...emptyProject })} className="neo-btn">
          <Plus className="w-4 h-4" />
          <span className="hidden sm:inline">Add Project</span>
        </button>
      </div>

      <div className="space-y-3">
        {projects.map((project, index) => (
          <div key={project.id} className="neo-glass p-4 flex flex-col sm:flex-row sm:items-center gap-3 group hover:border-white/20 transition-all duration-200">
            {/* Reorder */}
            <div className="flex gap-1 shrink-0">
              <button onClick={() => moveProject(index, -1)} className="neo-btn-ghost p-1.5" disabled={index === 0}><ArrowUp className="w-3.5 h-3.5" /></button>
              <button onClick={() => moveProject(index, 1)} className="neo-btn-ghost p-1.5" disabled={index === projects.length - 1}><ArrowDown className="w-3.5 h-3.5" /></button>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-semibold text-white text-sm">{project.title}</h3>
                <span className={statusBadge(project.status)}>{project.status}</span>
                <span className="text-[10px] font-mono text-neo-muted">{project.date}</span>
              </div>
              <p className="text-xs mt-1 truncate text-neo-muted">{project.description}</p>
              {project.technologies?.length > 0 && (
                <div className="flex gap-1 mt-2 flex-wrap">
                  {project.technologies.slice(0, 4).map(t => <span key={t} className="neo-tag">{t}</span>)}
                  {project.technologies.length > 4 && <span className="neo-tag">+{project.technologies.length - 4}</span>}
                </div>
              )}
            </div>

            <div className="flex items-center gap-1 shrink-0">
              {project.live_url && (
                <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="neo-btn-ghost p-2">
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <button onClick={() => setEditing({ ...project })} className="neo-btn-ghost p-2"><Pencil className="w-3.5 h-3.5" /></button>
              <button onClick={() => handleDelete(project.id)} className="neo-btn-ghost p-2 hover:text-red-400"><Trash2 className="w-3.5 h-3.5" /></button>
            </div>
          </div>
        ))}
        {projects.length === 0 && (
          <div className="neo-glass p-12 text-center">
            <FolderKanban className="w-10 h-10 mx-auto mb-3" style={{ color: 'var(--neo-text-muted)' }} />
            <p className="text-neo-muted text-sm">No projects yet.</p>
            <button onClick={() => setEditing({ ...emptyProject })} className="neo-btn mt-4 mx-auto">
              <Plus className="w-4 h-4" /> Add First Project
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
