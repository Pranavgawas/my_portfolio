import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Save, User, RefreshCw } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import TagInput from '../components/TagInput';
import toast from 'react-hot-toast';

function Field({ label, hint, children }) {
  return (
    <div>
      <label className="block text-xs font-mono text-neo-text-muted uppercase tracking-widest mb-2">{label}</label>
      {children}
      {hint && <p className="text-[11px] text-neo-text-muted mt-1">{hint}</p>}
    </div>
  );
}

function HeroEditor() {
  const [form, setForm] = useState({
    heading: '',
    subheading: '',
    bio: '',
    avatar_url: '',
    tech_stack: [],
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [heroId, setHeroId] = useState(null);

  useEffect(() => { fetchHero(); }, []);

  const fetchHero = async () => {
    setLoading(true);
    const { data } = await supabase.from('hero_content').select('*').limit(1).single();
    if (data) {
      setHeroId(data.id);
      setForm({
        heading:    data.heading    ?? '',
        subheading: data.subheading ?? '',
        bio:        data.bio        ?? '',
        avatar_url: data.avatar_url ?? '',
        tech_stack: Array.isArray(data.tech_stack) ? data.tech_stack : [],
      });
    }
    setLoading(false);
  };

  const set = (key, val) => setForm(f => ({ ...f, [key]: val }));

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    let error;
    if (heroId) {
      ({ error } = await supabase.from('hero_content').update(form).eq('id', heroId));
    } else {
      ({ error } = await supabase.from('hero_content').insert(form));
    }
    if (error) {
      toast.error('Failed to save: ' + error.message);
    } else {
      toast.success('Hero content saved!');
      fetchHero();
    }
    setSaving(false);
  };

  if (loading) return <PageSkeleton />;

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-neo-purple/10 border border-neo-purple/20">
            <User className="w-5 h-5 text-neo-purple" aria-hidden="true" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Hero Section</h2>
            <p className="text-neo-text-muted text-sm">Your portfolio intro &amp; headline</p>
          </div>
        </div>
        <button onClick={fetchHero} className="neo-btn-outline p-2" aria-label="Refresh">
          <RefreshCw className="w-4 h-4" aria-hidden="true" />
        </button>
      </motion.div>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08 }}
        onSubmit={handleSave}
        className="neo-glass p-6 space-y-5"
      >
        <Field label="Heading" hint="Your main headline, e.g. 'Full Stack Developer'">
          <input
            type="text"
            value={form.heading}
            onChange={e => set('heading', e.target.value)}
            className="neo-input w-full text-sm"
            placeholder="Full Stack Developer"
          />
        </Field>

        <Field label="Subheading" hint="A short tagline shown below the heading">
          <input
            type="text"
            value={form.subheading}
            onChange={e => set('subheading', e.target.value)}
            className="neo-input w-full text-sm"
            placeholder="Building scalable web applications"
          />
        </Field>

        <Field label="Bio" hint="2–4 sentences about yourself">
          <textarea
            value={form.bio}
            onChange={e => set('bio', e.target.value)}
            rows={4}
            className="neo-input w-full text-sm resize-none"
            placeholder="I'm a passionate developer..."
          />
        </Field>

        <Field label="Avatar URL" hint="Direct link to your profile image">
          <div className="flex gap-3 items-start">
            <input
              type="url"
              value={form.avatar_url}
              onChange={e => set('avatar_url', e.target.value)}
              className="neo-input flex-1 text-sm"
              placeholder="https://..."
            />
            {form.avatar_url && (
              <img
                src={form.avatar_url}
                alt="Avatar preview"
                className="w-12 h-12 rounded-xl object-cover border border-white/10 flex-shrink-0"
                onError={e => { e.target.style.display = 'none'; }}
              />
            )}
          </div>
        </Field>

        <Field label="Tech Stack" hint="Press Enter or click Add to add a technology badge">
          <TagInput
            value={form.tech_stack}
            onChange={val => set('tech_stack', val)}
            placeholder="Java, React, Spring Boot…"
          />
        </Field>

        <div className="flex justify-end pt-2">
          <button
            type="submit"
            disabled={saving}
            className="neo-btn flex items-center gap-2 px-6 py-2.5 disabled:opacity-60"
          >
            {saving
              ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              : <Save className="w-4 h-4" aria-hidden="true" />
            }
            {saving ? 'Saving…' : 'Save Changes'}
          </button>
        </div>
      </motion.form>
    </div>
  );
}

function PageSkeleton() {
  return (
    <div className="max-w-2xl mx-auto neo-glass p-6 space-y-5 animate-pulse">
      {[1, 2, 3, 4, 5].map(i => (
        <div key={i}>
          <div className="h-3 w-20 bg-white/5 rounded mb-2" />
          <div className="h-10 bg-white/5 rounded-xl" />
        </div>
      ))}
    </div>
  );
}

export default HeroEditor;
