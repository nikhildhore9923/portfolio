import React, { useState, useEffect } from 'react';
import { Search, Layers, Cpu, GraduationCap, Mail, FileText, Github, Linkedin, Terminal, Sparkles, User } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function CommandMenu({ isOpen, onClose, onOpenResume, onShowToast }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose ? onClose() : null;
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      category: 'Navigation',
      title: 'About Nikhil Dhore',
      detail: 'Core background, Java specialization, and systems engineering focus',
      icon: User,
      action: () => {
        onClose();
        window.location.hash = '#about';
      }
    },
    {
      category: 'Projects',
      title: 'Pulse — AI Customer Intelligence Platform',
      detail: 'NLP, Scikit-learn, FastAPI, Serverless Fallback',
      icon: Sparkles,
      action: () => {
        onClose();
        window.location.hash = '#projects';
      }
    },
    {
      category: 'Projects',
      title: 'Sparq — Real-Time Multiplayer Quiz',
      detail: 'Socket.io, Server-Authoritative Clock, SQLite WAL',
      icon: Layers,
      action: () => {
        onClose();
        window.location.hash = '#projects';
      }
    },
    {
      category: 'Navigation',
      title: 'Technical Skills Matrix',
      detail: 'Java, Python, Node.js, FastAPI, SQL, WebSockets',
      icon: Cpu,
      action: () => {
        onClose();
        window.location.hash = '#skills';
      }
    },
    {
      category: 'Navigation',
      title: 'Education & GATE 2026 Milestone',
      detail: 'KIT CoE Kolhapur (CGPA 8.09), GATE CS Score 324',
      icon: GraduationCap,
      action: () => {
        onClose();
        window.location.hash = '#education';
      }
    },
    {
      category: 'Navigation',
      title: 'Contact & Opportunities',
      detail: 'Direct email, phone, location, and recruiter messaging form',
      icon: Mail,
      action: () => {
        onClose();
        window.location.hash = '#contact';
      }
    },
    {
      category: 'Actions',
      title: 'View & Print Resume',
      detail: 'Complete verified CV with academic & project details',
      icon: FileText,
      action: () => {
        onClose();
        onOpenResume();
      }
    },
    {
      category: 'Actions',
      title: 'Copy Email Address',
      detail: PERSONAL_INFO.email,
      icon: Mail,
      action: () => {
        onClose();
        navigator.clipboard.writeText(PERSONAL_INFO.email);
        if (onShowToast) onShowToast(`Copied ${PERSONAL_INFO.email} to clipboard!`);
      }
    },
    {
      category: 'External',
      title: 'Visit GitHub Profile',
      detail: PERSONAL_INFO.github,
      icon: Github,
      action: () => {
        onClose();
        window.open(PERSONAL_INFO.github, '_blank');
      }
    },
    {
      category: 'External',
      title: 'Visit LinkedIn Profile',
      detail: PERSONAL_INFO.linkedin,
      icon: Linkedin,
      action: () => {
        onClose();
        window.open(PERSONAL_INFO.linkedin, '_blank');
      }
    },
  ];

  const filtered = actions.filter(
    (a) =>
      a.title.toLowerCase().includes(query.toLowerCase()) ||
      a.detail.toLowerCase().includes(query.toLowerCase()) ||
      a.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 p-4 bg-black/70 backdrop-blur-sm">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-xl bg-white dark:bg-[#12151C] border border-slate-200 dark:border-white/[0.1] rounded-3xl shadow-2xl overflow-hidden z-10 text-left">
        
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-black/30">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, skills, credentials, or commands..."
            className="w-full bg-transparent text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none"
          />
          <kbd className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200 dark:bg-white/[0.08] text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-white/[0.08]">
            ESC
          </kbd>
        </div>

        {/* Results list */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="p-6 text-center text-xs text-slate-400">
              No matching commands or sections found.
            </div>
          ) : (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  onClick={item.action}
                  className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-slate-100 dark:hover:bg-white/[0.05] text-left transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-slate-300 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-900 dark:text-slate-100">
                        {item.title}
                      </div>
                      <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        {item.detail}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.05] text-slate-500 dark:text-slate-400">
                    {item.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 border-t border-slate-200 dark:border-white/[0.06] bg-slate-50 dark:bg-black/30 text-[11px] font-mono text-slate-400 flex items-center justify-between">
          <span>Tip: Press ⌘K or Ctrl+K anywhere</span>
          <span>Nikhil Dhore Portfolio</span>
        </div>

      </div>
    </div>
  );
}
