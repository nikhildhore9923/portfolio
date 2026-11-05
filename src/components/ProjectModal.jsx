import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Github, Layers, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('architecture');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-white dark:bg-[#12151C] border border-slate-200 dark:border-white/[0.1] rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 my-auto text-left flex flex-col max-h-[92vh]">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-white/[0.02] flex items-start justify-between gap-3">
          <div>
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
              <span className="text-[10px] sm:text-[11px] font-mono font-medium px-2 sm:px-2.5 py-0.5 rounded-full bg-slate-200 dark:bg-white/[0.06] text-slate-700 dark:text-slate-300">
                {project.category}
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono px-2 sm:px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                {project.statusBadge}
              </span>
            </div>
            <h2 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              {project.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-xl bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/[0.08] transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Tabs */}
        <div className="flex items-center gap-1 px-4 sm:px-6 pt-2.5 sm:pt-3 border-b border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-white/[0.01] overflow-x-auto">
          {[
            { id: 'architecture', label: 'System Architecture' },
            { id: 'challenges', label: 'Challenges Solved' },
            { id: 'features', label: 'Key Capabilities' },
            { id: 'stack', label: 'Tech Stack & Deployment' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 sm:px-3.5 py-2 text-xs font-medium rounded-t-lg transition-all shrink-0 border-b-2 ${
                activeTab === tab.id
                  ? 'border-sky-600 text-sky-700 dark:border-sky-400 dark:text-sky-300 bg-white dark:bg-white/[0.04]'
                  : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 flex-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          
          {/* TAB 1: System Architecture */}
          {activeTab === 'architecture' && (
            <div className="space-y-4">
              <div>
                <h3 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1">
                  {project.architectureOverview.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {project.architectureOverview.description}
                </p>
              </div>

              {/* Architectural Nodes Flowchart */}
              <div className="space-y-2.5 sm:space-y-3">
                {project.architectureOverview.nodes.map((node, i) => (
                  <div
                    key={i}
                    className="p-3 sm:p-3.5 rounded-2xl bg-slate-50 dark:bg-[#0E121A] border border-slate-200 dark:border-white/[0.06] transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 mb-1">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-slate-200 dark:bg-white/[0.1] text-slate-800 dark:text-slate-200 font-mono text-[10px] flex items-center justify-center font-bold shrink-0">
                          {i + 1}
                        </span>
                        <span className="font-semibold text-xs text-slate-900 dark:text-slate-100">
                          {node.layer}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {node.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-white dark:bg-white/[0.05] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.06]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed sm:pl-7">
                      {node.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: Challenges Solved */}
          {activeTab === 'challenges' && (
            <div className="space-y-3 sm:space-y-4">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Key architectural bottlenecks encountered during implementation and the concrete engineering solutions applied:
              </p>
              {project.engineeringChallenges.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 dark:bg-[#0E121A] border border-slate-200 dark:border-white/[0.06] space-y-2 text-left"
                >
                  <div className="flex items-start gap-2.5">
                    <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] sm:text-[11px] font-mono text-amber-600 dark:text-amber-400 uppercase tracking-wide block font-semibold">
                        Challenge #{idx + 1}
                      </span>
                      <p className="text-xs font-medium text-slate-900 dark:text-slate-100 mt-0.5">
                        {item.challenge}
                      </p>
                    </div>
                  </div>

                  <div className="sm:pl-6 sm:border-l-2 border-slate-300 dark:border-white/20 sm:ml-2 space-y-1 pt-1">
                    <div className="text-xs text-slate-700 dark:text-slate-300">
                      <strong className="text-slate-900 dark:text-white font-medium">Engineered Solution: </strong>
                      {item.solution}
                    </div>
                    <div className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                      ✓ Measured Impact: {item.impact}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: Features */}
          {activeTab === 'features' && (
            <div className="space-y-3">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Core technical capabilities designed and deployed in {project.name}:
              </p>
              <div className="grid grid-cols-1 gap-2 sm:gap-2.5">
                {project.keyFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-3 sm:p-3.5 rounded-2xl bg-slate-50 dark:bg-[#0E121A] border border-slate-200 dark:border-white/[0.06] flex items-start gap-2.5 sm:gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: Tech Stack */}
          {activeTab === 'stack' && (
            <div className="space-y-3 sm:space-y-4">
              <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 dark:bg-[#0E121A] border border-slate-200 dark:border-white/[0.06] space-y-2.5">
                <span className="text-xs font-mono font-semibold text-slate-900 dark:text-slate-100 block">
                  Technologies Utilized
                </span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 sm:px-3 py-1 rounded-xl text-xs font-mono bg-white dark:bg-white/[0.05] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/[0.08]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 dark:bg-[#0E121A] border border-slate-200 dark:border-white/[0.06] text-xs space-y-2">
                <span className="font-semibold text-slate-900 dark:text-slate-100 block">
                  Architectural Summary:
                </span>
                <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400">
                  {project.technicalHighlights.map((hl, idx) => (
                    <li key={idx}>{hl}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer / Actions */}
        <div className="p-3 sm:p-4 border-t border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-white/[0.02] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3">
          <div className="flex items-center gap-2">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-colors shadow-sm active:scale-95"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-white/[0.04] hover:bg-slate-100 dark:hover:bg-white/[0.08] border border-slate-300 dark:border-white/[0.1] transition-colors active:scale-95"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-3.5 py-2 rounded-xl text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
}
