import React, { useState } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Github, 
  Linkedin, 
  Award, 
  GraduationCap, 
  Code2, 
  Copy, 
  Check 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import profilePhoto from '../assets/nikhil-dhore.jpg';

export default function Hero({ onOpenResume, onShowToast }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    if (onShowToast) {
      onShowToast(`Copied ${PERSONAL_INFO.email} to clipboard!`);
    }
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-20 pb-10 sm:pt-20 sm:pb-12 lg:pt-16 lg:pb-8 flex flex-col justify-start lg:justify-center border-b border-slate-200/80 dark:border-white/[0.06] transition-colors overflow-hidden"
    >
      {/* Subtle Architectural Dot Grid */}
      <div className="absolute inset-0 grid-bg-light dark:grid-bg-dark pointer-events-none opacity-40 sm:opacity-50" />

      {/* Atmospheric Top Spotlight Aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[340px] sm:w-[700px] lg:w-[1000px] h-[300px] sm:h-[450px] bg-gradient-to-b from-sky-500/[0.07] via-transparent to-transparent dark:from-sky-500/[0.06] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN: Student Profile & Credibility                                 */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-1">
            
            {/* Student Status Pill */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-emerald-500/[0.08] dark:bg-emerald-500/[0.12] border border-emerald-500/25 text-emerald-700 dark:text-emerald-400 text-[11px] sm:text-xs font-mono mb-3 sm:mb-4 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-medium tracking-tight">Final-Year B.Tech CSE (AI & ML)</span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-[-0.03em] leading-[1.15] mb-2.5 sm:mb-3.5">
              Building practical software.{' '}
              <span className="bg-gradient-to-r from-slate-500 via-slate-700 to-slate-500 dark:from-slate-200 dark:via-slate-400 dark:to-slate-500 bg-clip-text text-transparent font-medium block sm:inline">
                Solving real problems.
              </span>
            </h1>

            {/* Clear, Grounded Introduction from Updated Resume */}
            <p className="text-xs sm:text-sm lg:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-4 sm:mb-5 max-w-2xl font-normal">
              I'm <strong className="font-semibold text-slate-900 dark:text-white">Nikhil Dhore</strong>, a Computer Science & Engineering (AI & ML) student who has built and deployed two full-stack projects: <strong className="text-slate-900 dark:text-white font-semibold">Sparq</strong> (real-time quiz platform) and <strong className="text-slate-900 dark:text-white font-semibold">Pulse</strong> (AI customer intelligence). Strong foundation in <strong className="text-slate-900 dark:text-white font-medium">Java, DSA, REST APIs</strong>, and machine learning, backed by a <strong className="text-slate-900 dark:text-white font-semibold">GATE 2026 score of 324</strong>.
            </p>

            {/* 3 Core Highlights (Balanced 3-column grid on both mobile & desktop) */}
            <div className="grid grid-cols-3 gap-2 sm:gap-2.5 w-full mb-4 sm:mb-5">
              {/* Highlight 1: GATE CS */}
              <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.08] shadow-sm hover:border-slate-300 dark:hover:border-white/15 transition-all text-left">
                <div className="flex items-center gap-1 mb-1 text-slate-500 dark:text-slate-400">
                  <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-500 shrink-0" />
                  <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider truncate">GATE 2026</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Score: 324</div>
                <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 truncate">CS & IT Qualified</div>
              </div>

              {/* Highlight 2: Degree */}
              <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.08] shadow-sm hover:border-slate-300 dark:hover:border-white/15 transition-all text-left">
                <div className="flex items-center gap-1 mb-1 text-slate-500 dark:text-slate-400">
                  <GraduationCap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-sky-500 shrink-0" />
                  <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider truncate">B.Tech Degree</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">CGPA: 8.09</div>
                <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 truncate">KIT Autonomous</div>
              </div>

              {/* Highlight 3: Practical Projects */}
              <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.08] shadow-sm hover:border-slate-300 dark:hover:border-white/15 transition-all text-left">
                <div className="flex items-center gap-1 mb-1 text-slate-500 dark:text-slate-400">
                  <Code2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-500 shrink-0" />
                  <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider truncate">Projects</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">Sparq & Pulse</div>
                <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 truncate">Full-Stack & AI</div>
              </div>
            </div>

            {/* Action Buttons & Fast Social Connect */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 w-full sm:w-auto">
              <a
                href="#projects"
                className="group flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-all shadow-sm active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-white/[0.04] hover:bg-slate-100 dark:hover:bg-white/[0.08] border border-slate-300/80 dark:border-white/[0.1] transition-all shadow-sm active:scale-95"
              >
                <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-600 dark:text-sky-400" />
                <span>Resume</span>
              </button>

              {/* Fast Connect Icons */}
              <div className="flex items-center gap-1.5 pl-0.5 w-full sm:w-auto justify-center sm:justify-start mt-1 sm:mt-0">
                <button
                  onClick={handleCopyEmail}
                  className="p-2 sm:p-2.5 rounded-xl bg-white dark:bg-white/[0.04] hover:bg-slate-100 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 transition-all shadow-sm active:scale-95"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                  <span className="sr-only">Copy Email</span>
                </button>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 sm:p-2.5 rounded-xl bg-white dark:bg-white/[0.04] hover:bg-slate-100 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 transition-all shadow-sm active:scale-95"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                  <span className="sr-only">GitHub</span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 sm:p-2.5 rounded-xl bg-white dark:bg-white/[0.04] hover:bg-slate-100 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 transition-all shadow-sm active:scale-95"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: Clean Portrait Card Showcase                                */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end order-2 mt-2 sm:mt-0">
            <div className="w-full max-w-[260px] sm:max-w-xs lg:max-w-sm rounded-2xl sm:rounded-3xl bg-white dark:bg-[#10131A] border border-slate-200/90 dark:border-white/[0.08] p-3 sm:p-4 shadow-xl shadow-slate-200/50 dark:shadow-black/50 text-left transition-all">
              
              {/* Portrait Frame */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden mb-2.5 sm:mb-3 border border-slate-200/80 dark:border-white/10 shadow-sm bg-slate-100 dark:bg-white/[0.02]">
                <div className="w-full aspect-[4/4] overflow-hidden">
                  <img
                    src={profilePhoto}
                    alt="Nikhil Dhore"
                    className="w-full h-full object-cover object-top filter brightness-[0.99] contrast-[1.01]"
                  />
                </div>

                {/* Floating Clean Badge */}
                <div className="absolute bottom-2 left-2 right-2 bg-white/95 dark:bg-[#07090E]/90 backdrop-blur-md px-2.5 py-1 sm:py-1.5 rounded-xl border border-slate-200 dark:border-white/10 flex items-center justify-between text-xs font-mono shadow-sm">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-semibold text-slate-900 dark:text-white font-sans text-xs">
                      {PERSONAL_INFO.name}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-600 dark:text-slate-300 font-medium">
                    CSE (AI & ML)
                  </span>
                </div>
              </div>

              {/* Minimalist Profile Identity & Direct Links */}
              <div className="flex items-center justify-between pt-0.5">
                <div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-slate-100">
                    B.Tech CSE (AI & ML) Student
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                    Java • React • Node • SQL • ML
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/[0.05] hover:bg-slate-200 dark:hover:bg-white/[0.1] transition-colors"
                  >
                    <Github className="w-3 h-3" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] font-medium text-sky-700 dark:text-sky-400 bg-sky-50 dark:bg-sky-500/[0.08] hover:bg-sky-100 dark:hover:bg-sky-500/[0.15] transition-colors"
                  >
                    <Linkedin className="w-3 h-3" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
