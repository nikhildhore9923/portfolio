import React, { useState } from 'react';
import { ExternalLink, Github, Layers, ChevronDown, ChevronUp, Cpu, Radio, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import PulseInteractiveDemo from './PulseInteractiveDemo';
import SparqInteractiveDemo from './SparqInteractiveDemo';

export default function Projects({ onSelectProject }) {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [showDemo, setShowDemo] = useState(false);

  const activeProject = PROJECTS[activeProjectIndex];

  return (
    <section 
      id="projects" 
      className="min-h-screen lg:min-h-screen py-12 sm:py-16 lg:py-0 lg:pt-16 lg:pb-8 flex flex-col justify-start lg:justify-center border-b border-slate-200/80 dark:border-white/[0.06] transition-colors relative overflow-hidden"
    >
      {/* Subtle Architectural Dot Grid */}
      <div className="absolute inset-0 grid-bg-light dark:grid-bg-dark pointer-events-none opacity-40" />

      {/* Atmospheric Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[700px] h-[300px] sm:h-[350px] bg-sky-500/[0.03] dark:bg-sky-500/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-3.5 sm:mb-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 text-xs font-mono mb-1.5">
            <Sparkles className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span>FEATURED WORK</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Flagship Engineering Projects
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Two deployed full-stack systems: a real-time multiplayer quiz engine and an AI-powered feedback analysis platform.
          </p>
        </div>

        {/* Project Selector Tab Switcher (Mobile Responsive Grid / Row) */}
        <div className="grid grid-cols-2 sm:flex sm:items-center sm:justify-center gap-2 max-w-md sm:max-w-none mx-auto mb-3.5 sm:mb-4">
          {PROJECTS.map((p, idx) => {
            const isSelected = activeProjectIndex === idx;
            return (
              <button
                key={p.id}
                onClick={() => {
                  setActiveProjectIndex(idx);
                  setShowDemo(false);
                }}
                className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                  isSelected
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm ring-1 ring-slate-900/10 dark:ring-white/20'
                    : 'bg-white dark:bg-[#10131A] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200/90 dark:border-white/[0.08]'
                }`}
              >
                <span className={`font-mono text-xs ${isSelected ? 'text-sky-400 dark:text-sky-600' : 'text-slate-400'}`}>
                  0{idx + 1}.
                </span>
                <span>{p.name}</span>
                <span className="text-xs opacity-70 hidden md:inline">
                  — {p.id === 'pulse' ? 'AI Customer Platform' : 'Real-Time Quiz'}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Project Card */}
        <div className="rounded-2xl sm:rounded-3xl bg-white dark:bg-[#10131A] border border-slate-200/90 dark:border-white/[0.08] p-4 sm:p-6 shadow-sm text-left transition-colors">
          
          {/* Top Bar: Status Chip & Live Action Links */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 mb-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] sm:text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                {activeProject.id === 'pulse' ? 'FastAPI & NLP Microservice' : 'Socket.io Server-Authoritative'}
              </span>
              <span className="text-[11px] sm:text-xs font-mono px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/[0.04] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/[0.06]">
                {activeProject.category}
              </span>
            </div>

            {/* Direct Action Links (Clean on mobile) */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href={activeProject.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-colors shadow-sm active:scale-95"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={activeProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/[0.08] transition-colors active:scale-95"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Title & Tagline */}
          <h3 className="text-base sm:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-1">
            {activeProject.name} — <span className="font-semibold text-slate-600 dark:text-slate-400 text-sm sm:text-lg">{activeProject.tagline}</span>
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3 sm:mb-4 max-w-4xl">
            {activeProject.summary}
          </p>

          {/* 3 Clear, Student-Appropriate Insights Aligned with Resume */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-3 mb-3.5 sm:mb-4">
            
            {/* Box 1: Core Problem & Challenge */}
            <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50 dark:bg-[#07090E]/60 border border-slate-200/80 dark:border-white/[0.06] text-xs">
              <span className="font-mono text-sky-600 dark:text-sky-400 block mb-1 font-semibold uppercase tracking-wider text-[10px] sm:text-[11px]">
                Problem Solved
              </span>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs">
                {activeProject.id === 'pulse' 
                  ? 'Unstructured customer feedback is tedious to review manually. Businesses need fast automated sentiment classification to catch negative feedback before churn occurs.'
                  : 'Traditional web apps rely on manual refreshes or HTTP polling, creating clock desynchronization, latency cheating, and poor multiplayer experience.'}
              </p>
            </div>

            {/* Box 2: Architecture & Implementation */}
            <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50 dark:bg-[#07090E]/60 border border-slate-200/80 dark:border-white/[0.06] text-xs">
              <span className="font-mono text-emerald-600 dark:text-emerald-400 block mb-1 font-semibold uppercase tracking-wider text-[10px] sm:text-[11px]">
                Engineering Solution
              </span>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs">
                {activeProject.id === 'pulse'
                  ? 'Built a React dashboard with a Node.js/Express API and a separate FastAPI service for ML (Scikit-learn TF-IDF + Logistic Regression), using MySQL for storage.'
                  : 'Engineered a Kahoot-style quiz game using Node.js and Socket.io, where the server handles timers, scoring, and answer verification to strictly prevent cheating.'}
              </p>
            </div>

            {/* Box 3: Key Features & Resilience */}
            <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50 dark:bg-[#07090E]/60 border border-slate-200/80 dark:border-white/[0.06] text-xs">
              <span className="font-mono text-amber-600 dark:text-amber-400 block mb-1 font-semibold uppercase tracking-wider text-[10px] sm:text-[11px]">
                Key Features & Fallback
              </span>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs">
                {activeProject.id === 'pulse'
                  ? 'Groq API (Llama 3) for executive summaries, plus a local fallback heuristic ensuring 100% responsiveness when the ML service is slow or cold-starting.'
                  : 'Integrated Groq API for instant 4-option trivia generation, JWT authentication for saving quizzes, and SQLite WAL mode with Vercel & Render deployment.'}
              </p>
            </div>
          </div>

          {/* Tech Tags & Inspection Triggers */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2.5 border-t border-slate-100 dark:border-white/[0.06]">
            
            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5">
              {activeProject.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.06]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Modal & Simulator Buttons (Responsive 2-column on phone) */}
            <div className="grid grid-cols-2 sm:flex sm:items-center gap-2 w-full sm:w-auto">
              <button
                onClick={() => onSelectProject(activeProject)}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/[0.08] transition-colors active:scale-95"
              >
                <Layers className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
                <span className="truncate">Architecture</span>
              </button>

              <button
                onClick={() => setShowDemo(!showDemo)}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-sky-700 dark:text-sky-400 bg-sky-50 dark:bg-sky-500/10 hover:bg-sky-100 dark:hover:bg-sky-500/20 border border-sky-200 dark:border-sky-500/30 transition-colors active:scale-95"
              >
                {activeProject.id === 'pulse' ? <Cpu className="w-3.5 h-3.5 shrink-0" /> : <Radio className="w-3.5 h-3.5 shrink-0" />}
                <span className="truncate">{showDemo ? 'Hide Demo' : 'Live Simulator'}</span>
                {showDemo ? <ChevronUp className="w-3.5 h-3.5 shrink-0" /> : <ChevronDown className="w-3.5 h-3.5 shrink-0" />}
              </button>
            </div>
          </div>

          {/* Collapsible Interactive Simulator */}
          {showDemo && (
            <div className="pt-3.5 sm:pt-4 border-t border-slate-100 dark:border-white/[0.06] mt-3.5 sm:mt-4 animate-fadeIn">
              {activeProject.id === 'pulse' ? <PulseInteractiveDemo /> : <SparqInteractiveDemo />}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
