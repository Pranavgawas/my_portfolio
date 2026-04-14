import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Plus, Pencil, Trash2, Save, X, GraduationCap, ArrowLeft, ExternalLink } from 'lucide-react';
import toast from 'react-hot-toast';

const emptyEdu = { year: '', title: '', details: [], certificate_url: '', sort_order: 0 };

export default function EducationManager() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [detailInput, setDetailInput] = useState('');

  const fetchItems = async () => {
    const { data } = await supabase.from('education').select('*').order('sort_order', { ascending: false });
    setItems(data || []);
    setLoading(false);
  };

  useEffect(() => { fetchItems(); }, []);

  const handleSave = async () => {
    const { id, created_at, updated_at, ...fields } = editing;
    let error;
    if (id) {
      ({ error } = await supabase.from('education').update(fields).eq('id', id));
    } else {
      fields.sort_order = items.length + 1;
      ({ error } = await supabase.from('education').insert(fields));
    }
    if (error) toast.error(error.message);
    else { toast.success(id ? 'Updated!' : 'Added!'); setEditing(null); fetchItems(); }
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this education entry?')) return;
    const { error } = await supabase.from('education').delete().eq('id', id);
    if (error) toast.error(error.message);
    else { toast.success('Deleted!'); fetchItems(); }
  };

  const addDetail = () => {
    if (detailInput.trim()) {
      setEditing({ ...editing, details: [...editing.details, detailInput.trim()] });
      setDetailInput('');
    }
  };

  const removeDetail = (index) => setEditing({ ...editing, details: editing.details.filter((_, i) => i !== index) });

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
            <h1 className="text-xl font-bold text-white">{editing.id ? 'Edit Education' : 'New Education'}</h1>
            <p className="text-xs text-neo-muted mt-0.5">Shown on the timeline</p>
          </div>
        </div>

        <div className="neo-glass p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="neo-label">Year / Period</label>
              <input className="neo-input" value={editing.year} onChange={e => setEditing({ ...editing, year: e.target.value })} placeholder="2020 – 2024" />
            </div>
            <div>
              <label className="neo-label">Sort Order</label>
              <input type="number" className="neo-input" value={editing.sort_order} onChange={e => setEditing({ ...editing, sort_order: parseInt(e.target.value) || 0 })} />
            </div>
          </div>
          <div>
            <label className="neo-label">Title / Degree</label>
            <input className="neo-input" value={editing.title} onChange={e => setEditing({ ...editing, title: e.target.value })} placeholder="e.g. Bachelor of Engineering" />
          </div>
          <div>
            <label className="neo-label">Certificate URL <span className="text-[10px] normal-case tracking-normal opacity-60">(optional)</span></label>
            <input type="url" className="neo-input" value={editing.certificate_url || ''} onChange={e => setEditing({ ...editing, certificate_url: e.target.value })} placeholder="https://drive.google.com/..." />
          </div>
          <div>
            <label className="neo-label">Details / Bullet Points</label>
            <div className="space-y-2 mb-3">
              {editing.details.map((d, i) => (
                <div key={i} className="flex items-start gap-2 text-sm py-2 px-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <span className="text-neo-purple mt-0.5 shrink-0">•</span>
                  <span className="flex-1 text-xs text-neo-secondary">{d}</span>
                  <button onClick={() => removeDetail(i)} className="neo-btn-ghost p-0.5 hover:text-red-400" style={{ border: 'none', background: 'none' }}>
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <input className="neo-input flex-1" value={detailInput} onChange={e => setDetailInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addDetail())} placeholder="Add a bullet point (press Enter)..." />
              <button onClick={addDetail} className="neo-btn-outline px-4"><Plus className="w-4 h-4" /></button>
            </div>
          </div>

          <button onClick={handleSave} className="neo-btn w-full mt-2">
            <Save className="w-4 h-4" /> Save
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
            <GraduationCap className="w-4 h-4 text-neo-pink" />
            <span className="text-[11px] uppercase tracking-widest font-mono text-neo-muted">Education</span>
          </div>
          <h1 className="text-2xl font-bold text-white">Education Manager</h1>
          <p className="text-sm mt-1 text-neo-secondary">{items.length} entries · higher sort_order shown first</p>
        </div>
        <button onClick={() => setEditing({ ...emptyEdu })} className="neo-btn">
          <Plus className="w-4 h-4" />
          <span className="hidden sm:inline">Add Entry</span>
        </button>
      </div>

      <div className="space-y-3">
        {items.map(item => (
          <div key={item.id} className="neo-glass p-4 flex flex-col sm:flex-row sm:items-center gap-3 group hover:border-white/20 transition-all duration-200">
            <div className="p-2.5 rounded-xl shrink-0" style={{ background: 'rgba(236,72,153,0.1)' }}>
              <GraduationCap className="w-4 h-4 text-neo-pink" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-semibold text-white text-sm">{item.title}</h3>
                <span className="text-[10px] font-mono text-neo-muted">{item.year}</span>
              </div>
              <p className="text-xs mt-1 text-neo-muted">
                {item.details?.length} bullet{item.details?.length !== 1 ? 's' : ''}
                {item.certificate_url && ' · Certificate linked'}
              </p>
            </div>
            <div className="flex items-center gap-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
              {item.certificate_url && (
                <a href={item.certificate_url} target="_blank" rel="noopener noreferrer" className="neo-btn-ghost p-2">
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <button onClick={() => setEditing({ ...item })} className="neo-btn-ghost p-2"><Pencil className="w-3.5 h-3.5" /></button>
              <button onClick={() => handleDelete(item.id)} className="neo-btn-ghost p-2 hover:text-red-400"><Trash2 className="w-3.5 h-3.5" /></button>
            </div>
          </div>
        ))}
        {items.length === 0 && (
          <div className="neo-glass p-12 text-center">
            <GraduationCap className="w-10 h-10 mx-auto mb-3" style={{ color: 'var(--neo-text-muted)' }} />
            <p className="text-neo-muted text-sm">No education entries yet.</p>
            <button onClick={() => setEditing({ ...emptyEdu })} className="neo-btn mt-4 mx-auto">
              <Plus className="w-4 h-4" /> Add First Entry
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
