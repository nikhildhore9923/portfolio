import React from 'react';
import { Cpu, Code2, Server, Database, Brain, Cloud, Check } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      accent: "sky",
      skills: [
        { name: "Java", highlight: true, note: "Core Language • OOP • Data Structures & Algorithms" },
        { name: "JavaScript", highlight: true, note: "ES6+ • Async/Await • Node.js & React" },
        { name: "SQL", highlight: false, note: "Relational Queries • Normalization • Joins" },
      ]
    },
    {
      title: "Web / Backend",
      icon: Server,
      accent: "emerald",
      skills: [
        { name: "React", highlight: true, note: "Component Architecture & Hooks" },
        { name: "Node.js", highlight: true, note: "Asynchronous Runtime" },
        { name: "Express", highlight: true, note: "REST APIs & Middleware" },
        { name: "FastAPI", highlight: true, note: "Python ML Microservices" },
        { name: "REST APIs", highlight: false, note: "Endpoint Contracts & JSON" },
        { name: "Socket.io", highlight: true, note: "Real-Time Bidirectional Sync" },
        { name: "WebSockets", highlight: false, note: "Persistent TCP Connections" },
        { name: "JWT", highlight: false, note: "Stateless Auth & Session Tokens" },
        { name: "HTML & CSS", highlight: false, note: "Responsive UI & Tailwind" },
      ]
    },
    {
      title: "Databases",
      icon: Database,
      accent: "amber",
      skills: [
        { name: "MySQL", highlight: true, note: "Relational Storage in Pulse" },
        { name: "SQLite", highlight: true, note: "Fast WAL Mode in Sparq" },
      ]
    },
    {
      title: "AI/ML & Data",
      icon: Brain,
      accent: "indigo",
      skills: [
        { name: "NLP", highlight: true, note: "Text Preprocessing & Tokenization" },
        { name: "Scikit-learn", highlight: true, note: "TF-IDF + Logistic Regression" },
        { name: "NumPy", highlight: false, note: "Vectorized Operations" },
        { name: "Pandas", highlight: false, note: "Dataset Transformation & Cleaning" },
      ]
    },
    {
      title: "Tools / Cloud",
      icon: Cloud,
      accent: "purple",
      skills: [
        { name: "Git", highlight: true, note: "Version Control & Branching" },
        { name: "GitHub", highlight: true, note: "Collaboration & Actions CI/CD" },
        { name: "Vercel", highlight: true, note: "Frontend Edge & Serverless Functions" },
        { name: "Render", highlight: false, note: "Persistent Node.js Socket Deployment" },
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      className="min-h-screen lg:min-h-screen py-12 sm:py-16 lg:py-0 lg:pt-16 lg:pb-8 flex flex-col justify-start lg:justify-center border-b border-slate-200/80 dark:border-white/[0.06] transition-colors relative overflow-hidden"
    >
      {/* Subtle Architectural Dot Grid */}
      <div className="absolute inset-0 grid-bg-light dark:grid-bg-dark pointer-events-none opacity-40" />

      {/* Atmospheric Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[700px] h-[300px] sm:h-[350px] bg-sky-500/[0.03] dark:bg-sky-500/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-3.5 sm:mb-5">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 text-xs font-mono mb-1.5">
            <Cpu className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span>TECHNICAL SKILLS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technical Skills & Technologies
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Directly aligned with my resume across languages, backend engineering, databases, machine learning, and cloud tools.
          </p>
        </div>

        {/* 5 Clean Domain Panels (Responsive Bento Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-4 items-stretch">
          
          {/* Card 1: Languages (lg: 2 cols) */}
          <div className="lg:col-span-2 p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#10131A] border border-slate-200/90 dark:border-white/[0.08] shadow-sm text-left flex flex-col justify-between hover:border-slate-300 dark:hover:border-white/15 transition-all">
            <div>
              <div className="flex items-center gap-2 pb-2.5 mb-2.5 border-b border-slate-100 dark:border-white/[0.06]">
                <div className="w-7 h-7 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 flex items-center justify-center shrink-0">
                  <Code2 className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                  Languages
                </h3>
              </div>

              <div className="space-y-2">
                {skillCategories[0].skills.map((s, idx) => (
                  <div key={idx} className="p-2 sm:p-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.05]">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-xs text-slate-900 dark:text-white">{s.name}</span>
                      {s.highlight && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-sky-500/10 text-sky-700 dark:text-sky-400 font-semibold">
                          Core
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">{s.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Web & Backend (lg: 4 cols) */}
          <div className="lg:col-span-4 p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#10131A] border border-slate-200/90 dark:border-white/[0.08] shadow-sm text-left flex flex-col justify-between hover:border-slate-300 dark:hover:border-white/15 transition-all">
            <div>
              <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-100 dark:border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0">
                    <Server className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                    Web / Backend Engineering
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Full-Stack
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {skillCategories[1].skills.map((s, idx) => (
                  <div key={idx} className="p-2 sm:p-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.05] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-xs text-slate-900 dark:text-white">{s.name}</span>
                        {s.highlight && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>}
                      </div>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">{s.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: Databases (lg: 2 cols) */}
          <div className="lg:col-span-2 p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#10131A] border border-slate-200/90 dark:border-white/[0.08] shadow-sm text-left flex flex-col justify-between hover:border-slate-300 dark:hover:border-white/15 transition-all">
            <div>
              <div className="flex items-center gap-2 pb-2.5 mb-2.5 border-b border-slate-100 dark:border-white/[0.06]">
                <div className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <Database className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                  Databases
                </h3>
              </div>

              <div className="space-y-2">
                {skillCategories[2].skills.map((s, idx) => (
                  <div key={idx} className="p-2 sm:p-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.05]">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-xs text-slate-900 dark:text-white">{s.name}</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-400">
                        Relational
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">{s.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 4: AI/ML & Data (lg: 2 cols) */}
          <div className="lg:col-span-2 p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#10131A] border border-slate-200/90 dark:border-white/[0.08] shadow-sm text-left flex flex-col justify-between hover:border-slate-300 dark:hover:border-white/15 transition-all">
            <div>
              <div className="flex items-center gap-2 pb-2.5 mb-2.5 border-b border-slate-100 dark:border-white/[0.06]">
                <div className="w-7 h-7 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 flex items-center justify-center shrink-0">
                  <Brain className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                  AI/ML & Data
                </h3>
              </div>

              <div className="space-y-2">
                {skillCategories[3].skills.map((s, idx) => (
                  <div key={idx} className="p-2 sm:p-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.05]">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-xs text-slate-900 dark:text-white">{s.name}</span>
                      {s.highlight && <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>}
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">{s.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 5: Tools & Cloud (lg: 2 cols) */}
          <div className="lg:col-span-2 p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#10131A] border border-slate-200/90 dark:border-white/[0.08] shadow-sm text-left flex flex-col justify-between hover:border-slate-300 dark:hover:border-white/15 transition-all">
            <div>
              <div className="flex items-center gap-2 pb-2.5 mb-2.5 border-b border-slate-100 dark:border-white/[0.06]">
                <div className="w-7 h-7 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 flex items-center justify-center shrink-0">
                  <Cloud className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                  Tools / Cloud
                </h3>
              </div>

              <div className="space-y-2">
                {skillCategories[4].skills.map((s, idx) => (
                  <div key={idx} className="p-2 sm:p-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.05]">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-xs text-slate-900 dark:text-white">{s.name}</span>
                      {s.highlight && <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>}
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">{s.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
