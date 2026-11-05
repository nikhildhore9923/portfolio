import React from 'react';
import { User, Code2, Globe, Cpu, Award, GraduationCap, Server } from 'lucide-react';

export default function About() {
  return (
    <section 
      id="about" 
      className="min-h-screen lg:min-h-screen py-12 sm:py-16 lg:py-0 lg:pt-16 lg:pb-8 flex flex-col justify-start lg:justify-center border-b border-slate-200/80 dark:border-white/[0.06] transition-colors relative overflow-hidden"
    >
      {/* Subtle Architectural Dot Grid */}
      <div className="absolute inset-0 grid-bg-light dark:grid-bg-dark pointer-events-none opacity-40" />

      {/* Soft Ambient Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] h-[300px] sm:h-[350px] bg-sky-500/[0.03] dark:bg-sky-500/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-3.5 sm:mb-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 text-xs font-mono mb-1.5">
            <User className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span>BACKGROUND & SUMMARY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Background & Technical Focus
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Final-year B.Tech CSE (AI & ML) student, practical problem solver, and software developer.
          </p>
        </div>

        {/* Asymmetric Bento Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 items-stretch">
          
          {/* Card 1: Core Persona & Story (Large Bento Tile - 8 Cols) */}
          <div className="lg:col-span-8 p-4 sm:p-5 lg:p-6 rounded-2xl bg-white dark:bg-[#10131A] border border-slate-200/90 dark:border-white/[0.08] shadow-sm text-left flex flex-col justify-between hover:border-slate-300 dark:hover:border-white/15 transition-all">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-sky-600 dark:text-sky-400 font-semibold uppercase tracking-wider">
                  Profile & Focus
                </span>
                <span className="text-[11px] sm:text-xs font-mono text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/[0.04] border border-slate-200/60 dark:border-white/[0.06]">
                  CGPA: 8.09 / 10
                </span>
              </div>

              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-1.5">
                Full-Stack Systems & Applied Machine Learning
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Final-year Computer Science & Engineering student specializing in <strong className="text-slate-900 dark:text-white font-semibold">Artificial Intelligence & Machine Learning</strong> at KIT's College of Engineering (Autonomous), Kolhapur. 
                I have built and deployed two complete projects: <strong className="text-slate-900 dark:text-white font-semibold">Sparq</strong> (a real-time multiplayer quiz platform) and <strong className="text-slate-900 dark:text-white font-semibold">Pulse</strong> (an AI-powered customer intelligence platform). My core foundation is rooted in <strong className="text-slate-900 dark:text-white font-semibold">Java, Data Structures, REST APIs</strong>, and systematic algorithmic problem solving.
              </p>
            </div>

            {/* Quick Status Pill */}
            <div className="pt-2.5 mt-2.5 border-t border-slate-100 dark:border-white/[0.06] flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 font-medium">
                <GraduationCap className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-[11px] sm:text-xs">B.Tech CSE (AI & ML) • Final Year</span>
              </div>
              <span className="text-[11px] sm:text-xs font-mono text-slate-500 dark:text-slate-400">
                Available for Software Engineering Roles
              </span>
            </div>
          </div>

          {/* Card 2: National Examination Milestone (4 Cols) */}
          <div className="lg:col-span-4 p-4 sm:p-5 lg:p-6 rounded-2xl bg-white dark:bg-[#10131A] border border-amber-500/30 dark:border-amber-500/25 shadow-sm text-left flex flex-col justify-between hover:border-amber-500/50 transition-all">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-mono font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
                  Verified Milestone
                </span>
                <Award className="w-4 h-4 text-amber-500" />
              </div>

              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Score: 324
              </div>

              <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-1">
                Qualified GATE 2026 (CS & IT)
              </h4>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
                National-level engineering entrance exam evaluating core computer science fundamentals:
              </p>

              <div className="flex flex-wrap gap-1">
                {['Algorithms', 'Data Structures', 'DBMS', 'OS', 'Networks'].map((topic, i) => (
                  <span 
                    key={i}
                    className="px-1.5 sm:px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-800 dark:text-amber-300 text-[10px] sm:text-xs font-mono border border-amber-500/20"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 mt-2 border-t border-slate-100 dark:border-white/[0.06] text-[11px] sm:text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center justify-between">
              <span>National Examination</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">✓ Qualified</span>
            </div>
          </div>

          {/* Card 3: Java & Problem Solving (4 Cols) */}
          <div className="lg:col-span-4 p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-[#10131A] border border-slate-200/90 dark:border-white/[0.08] shadow-sm text-left flex flex-col justify-between hover:border-slate-300 dark:hover:border-white/15 transition-all">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-7 h-7 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 flex items-center justify-center">
                  <Code2 className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                  Java & Problem Solving
                </h4>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-2.5">
                Primary object-oriented language. Strong foundation in OOP, data structures, algorithms, and systematic problem solving.
              </p>
            </div>
            <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-100 dark:border-white/[0.06]">
              {['Java', 'OOP', 'Data Structures', 'Algorithms'].map((t, i) => (
                <span key={i} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-slate-300 text-[11px] font-mono">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Card 4: Web & Backend Stack (4 Cols) */}
          <div className="lg:col-span-4 p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-[#10131A] border border-slate-200/90 dark:border-white/[0.08] shadow-sm text-left flex flex-col justify-between hover:border-slate-300 dark:hover:border-white/15 transition-all">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center justify-center">
                  <Server className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                  Web & Backend Stack
                </h4>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-2.5">
                Responsive React frontends, Node.js & Express REST APIs, FastAPI microservices, and real-time Socket.io WebSockets.
              </p>
            </div>
            <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-100 dark:border-white/[0.06]">
              {['React', 'Node.js', 'Express', 'FastAPI', 'Socket.io', 'JWT'].map((t, i) => (
                <span key={i} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-slate-300 text-[11px] font-mono">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Card 5: AI & Machine Learning (4 Cols) */}
          <div className="lg:col-span-4 p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-[#10131A] border border-slate-200/90 dark:border-white/[0.08] shadow-sm text-left flex flex-col justify-between hover:border-slate-300 dark:hover:border-white/15 transition-all">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-7 h-7 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 flex items-center justify-center">
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                  Applied AI & Machine Learning
                </h4>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-2.5">
                Specialization in AI & ML with hands-on NLP text preprocessing, Scikit-learn (TF-IDF + Logistic Regression), and Groq LLMs.
              </p>
            </div>
            <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-100 dark:border-white/[0.06]">
              {['NLP', 'Scikit-learn', 'TF-IDF', 'Groq API', 'NumPy'].map((t, i) => (
                <span key={i} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-slate-300 text-[11px] font-mono">
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
