import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Save, Plus, X, User } from 'lucide-react';
import toast from 'react-hot-toast';

export default function HeroEditor() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [newTech, setNewTech] = useState('');

  useEffect(() => {
    async function fetch() {
      const { data: hero } = await supabase.from('hero_content').select('*').limit(1).single();
      setData(hero);
      setLoading(false);
    }
    fetch();
  }, []);

  const handleSave = async () => {
    setSaving(true);
    const { error } = await supabase
      .from('hero_content')
      .update({ heading: data.heading, subheading: data.subheading, bio: data.bio, avatar_url: data.avatar_url, tech_stack: data.tech_stack })
      .eq('id', data.id);
    if (error) toast.error(error.message);
    else toast.success('Hero section saved!');
    setSaving(false);
  };

  const addTech = () => {
    if (newTech.trim() && !data.tech_stack.includes(newTech.trim())) {
      setData({ ...data, tech_stack: [...data.tech_stack, newTech.trim()] });
      setNewTech('');
    }
  };

  const removeTech = (tech) => setData({ ...data, tech_stack: data.tech_stack.filter(t => t !== tech) });

  if (loading) return (
    <div className="flex items-center justify-center py-20">
      <div className="w-8 h-8 border-2 border-neo-purple border-t-transparent rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="max-w-2xl space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <User className="w-4 h-4 text-neo-purple" />
            <span className="text-[11px] uppercase tracking-widest font-mono text-neo-muted">Hero Section</span>
          </div>
          <h1 className="text-2xl font-bold text-white">Profile & Intro</h1>
          <p className="text-sm mt-1 text-neo-secondary">Your first impression — keep it sharp</p>
        </div>
        <button onClick={handleSave} className="neo-btn" disabled={saving}>
          <Save className="w-4 h-4" />
          {saving ? 'Saving...' : 'Save'}
        </button>
      </div>

      {/* Avatar */}
      <div className="neo-glass p-6">
        <label className="neo-label">Profile Photo</label>
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-white/10">
            {data.avatar_url
              ? <img src={data.avatar_url} alt="Avatar" className="w-full h-full object-cover" />
              : <div className="w-full h-full flex items-center justify-center" style={{ background: 'rgba(139,92,246,0.2)' }}><User className="w-8 h-8 text-neo-purple" /></div>
            }
          </div>
          <div className="flex-1">
            <input
              type="url"
              className="neo-input"
              value={data.avatar_url || ''}
              onChange={(e) => setData({ ...data, avatar_url: e.target.value })}
              placeholder="https://example.com/photo.jpg"
            />
            <p className="text-[11px] mt-2 text-neo-muted">Paste a direct image URL (Supabase Storage, Cloudinary, etc.)</p>
          </div>
        </div>
      </div>

      {/* Text fields */}
      <div className="neo-glass p-6 space-y-5">
        <div>
          <label className="neo-label">Heading</label>
          <input className="neo-input" type="text" value={data.heading || ''} onChange={(e) => setData({ ...data, heading: e.target.value })} placeholder="e.g. Building Digital Experiences" />
        </div>
        <div>
          <label className="neo-label">Subheading</label>
          <input className="neo-input" type="text" value={data.subheading || ''} onChange={(e) => setData({ ...data, subheading: e.target.value })} placeholder="e.g. Full Stack Developer" />
        </div>
        <div>
          <label className="neo-label">Bio</label>
          <textarea
            className="neo-input resize-none"
            rows={4}
            value={data.bio || ''}
            onChange={(e) => setData({ ...data, bio: e.target.value })}
            placeholder="A short bio shown in the hero section..."
          />
        </div>
      </div>

      {/* Tech stack */}
      <div className="neo-glass p-6">
        <label className="neo-label">Tech Stack Chips</label>
        <div className="flex flex-wrap gap-2 mb-4">
          {data.tech_stack?.map((tech) => (
            <span key={tech} className="neo-tag flex items-center gap-1.5">
              {tech}
              <button
                onClick={() => removeTech(tech)}
                className="hover:text-red-400 transition-colors"
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: 'inherit', lineHeight: 1 }}
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            className="neo-input flex-1"
            value={newTech}
            onChange={(e) => setNewTech(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addTech())}
            placeholder="Add a technology (press Enter)..."
          />
          <button onClick={addTech} className="neo-btn-outline px-4">
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
