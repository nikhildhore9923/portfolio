import React from 'react';
import { Cpu, Code2, Globe, Brain, Wrench } from 'lucide-react';

export default function Skills() {
  const skillGroups = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: [
        { name: "Java", level: "Primary", note: "Object-oriented programming, standard data structures, and algorithmic problem-solving." },
        { name: "JavaScript", level: "Intermediate", note: "ES6+ syntax, asynchronous flow (async/await), and DOM event handling." },
        { name: "Python", level: "Basic", note: "Basic syntax, data handling, and running machine learning scripts." },
        { name: "SQL", level: "Intermediate", note: "Writing queries, table schemas, normalization, and relational joins." },
      ]
    },
    {
      title: "Web & Frontend",
      icon: Globe,
      skills: [
        { name: "HTML5 & CSS3", level: "Proficient", note: "Semantic structure, responsive mobile-friendly layouts, and Tailwind CSS." },
        { name: "React", level: "Intermediate", note: "Component-based UI development, hooks, and frontend state management." },
        { name: "Node.js & Express", level: "Intermediate", note: "Building RESTful API endpoints, request routing, and server logic." },
        { name: "Socket.io", level: "Practical", note: "Real-time communication for live interactive web apps like Sparq." },
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: [
        { name: "NLP Basics", level: "Applied", note: "Text preprocessing, tokenization, and sentiment polarity classification." },
        { name: "Scikit-learn", level: "Applied", note: "TF-IDF text feature extraction and Logistic Regression classification models." },
        { name: "Groq LLM API", level: "Applied", note: "Connecting to Groq (Llama 3.1) for automated text summaries." },
        { name: "NumPy & Pandas", level: "Basic", note: "Basic dataset loading, filtering, and numerical array operations." },
      ]
    },
    {
      title: "Tools & Fundamentals",
      icon: Wrench,
      skills: [
        { name: "Git & GitHub", level: "Proficient", note: "Version control, commits, branching, and repository collaboration." },
        { name: "REST APIs & JSON", level: "Intermediate", note: "Structuring client-server requests, status codes, and data payloads." },
        { name: "JWT Authentication", level: "Practical", note: "User authentication, protected routes, and session tokens." },
        { name: "Web Deployment", level: "Practical", note: "Hosting web applications on platforms like Vercel and Render." },
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      className="min-h-screen pt-16 pb-8 flex flex-col justify-center border-b border-slate-200/80 dark:border-white/[0.06] transition-colors relative overflow-hidden"
    >
      {/* Subtle Architectural Dot Grid */}
      <div className="absolute inset-0 grid-bg-light dark:grid-bg-dark pointer-events-none opacity-40" />

      {/* Atmospheric Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-sky-500/[0.03] dark:bg-sky-500/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-5">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 text-xs font-mono mb-1.5">
            <Cpu className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span>TECHNICAL SKILLS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technical Skills & Technologies
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Technologies I have learned and applied through coursework, independent study, and hands-on projects.
          </p>
        </div>

        {/* 4 Clean Domain Panels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {skillGroups.map((group, idx) => {
            const GroupIcon = group.icon;
            return (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#10131A] border border-slate-200/90 dark:border-white/[0.08] shadow-sm text-left transition-all hover:border-slate-300 dark:hover:border-white/15 flex flex-col justify-between"
              >
                <div>
                  {/* Column Header */}
                  <div className="flex items-center gap-2 pb-2.5 mb-2.5 border-b border-slate-100 dark:border-white/[0.06]">
                    <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] flex items-center justify-center text-slate-900 dark:text-white shrink-0">
                      <GroupIcon className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                    </div>
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white tracking-tight">
                      {group.title}
                    </h3>
                  </div>

                  {/* Skill Items */}
                  <div className="space-y-2">
                    {group.skills.map((skill, sIdx) => {
                      const isPrimary = skill.level === 'Primary';
                      const isProficient = skill.level === 'Proficient';
                      const isIntermediate = skill.level === 'Intermediate';
                      const isBasic = skill.level === 'Basic';
                      return (
                        <div
                          key={sIdx}
                          className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#07090E]/60 border border-slate-200/80 dark:border-white/[0.05] space-y-1 hover:border-slate-300 dark:hover:border-white/20 transition-all"
                        >
                          <div className="flex items-center justify-between gap-1">
                            <span className="font-semibold text-xs text-slate-900 dark:text-slate-100">
                              {skill.name}
                            </span>
                            <span 
                              className={`text-[10px] font-mono px-2 py-0.5 rounded-md border font-medium shrink-0 ${
                                isPrimary 
                                  ? 'bg-sky-500/10 text-sky-700 dark:text-sky-400 border-sky-500/25'
                                  : isIntermediate
                                  ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/25'
                                  : isProficient
                                  ? 'bg-amber-500/10 text-amber-800 dark:text-amber-300 border-amber-500/25'
                                  : isBasic
                                  ? 'bg-slate-200/60 dark:bg-white/[0.08] text-slate-700 dark:text-slate-300 border-slate-300 dark:border-white/10'
                                  : 'bg-slate-100 dark:bg-white/[0.05] text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/[0.06]'
                              }`}
                            >
                              {skill.level}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                            {skill.note}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
