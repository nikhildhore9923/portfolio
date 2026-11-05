import React from 'react';
import { EDUCATION, ACHIEVEMENTS } from '../data/portfolioData';
import { GraduationCap, Award, Calendar, MapPin, Check, Code2 } from 'lucide-react';

export default function EducationAchievements() {
  const btech = EDUCATION[0];
  const secondarySchooling = EDUCATION.slice(1);

  return (
    <section 
      id="education" 
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
            <GraduationCap className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span>EDUCATION & CREDENTIALS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education & Qualifications
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Academic degree, national entrance qualification, and foundational education credentials from my resume.
          </p>
        </div>

        {/* 2x2 Bento Grid: Essential Qualifications (Mobile Responsive) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 items-stretch">
          
          {/* Card 1: Primary Degree B.Tech */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#10131A] border border-slate-200/90 dark:border-white/[0.08] shadow-sm text-left hover:border-slate-300 dark:hover:border-white/15 transition-all flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-700 dark:text-sky-400 font-mono text-[11px] font-semibold mb-1 border border-sky-500/20">
                    CURRENT DEGREE (FINAL YEAR)
                  </div>
                  <h3 className="font-bold text-sm sm:text-base lg:text-lg text-slate-900 dark:text-white tracking-tight">
                    {btech.degree}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 mt-0.5">
                    {btech.institution}
                  </p>
                </div>

                {btech.grade && (
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25 shrink-0">
                    {btech.grade}
                  </span>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400 mb-2">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-sky-500" />
                  {btech.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-sky-500" />
                  {btech.location}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-2 border-t border-slate-100 dark:border-white/[0.06]">
              Specializing in Artificial Intelligence & Machine Learning with strong foundations in Java, Data Structures, OOP, and practical full-stack projects.
            </p>
          </div>

          {/* Card 2: GATE Examination Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#10131A] border border-amber-500/30 dark:border-amber-500/25 shadow-sm text-left hover:border-amber-500/50 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/30">
                  {ACHIEVEMENTS[0].badge}
                </span>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  National Examination
                </span>
              </div>

              <h3 className="font-bold text-sm sm:text-base lg:text-lg text-slate-900 dark:text-white tracking-tight">
                {ACHIEVEMENTS[0].title}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 mt-0.5 mb-2">
                {ACHIEVEMENTS[0].issuer}
              </p>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Cleared the competitive national-level engineering entrance exam for CS & IT, evaluating core fundamentals: Algorithms, Operating Systems, Computer Networks, and DBMS.
              </p>
            </div>

            <div className="pt-2 mt-2 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between text-xs font-mono">
              <span className="text-slate-500 dark:text-slate-400">Examination Status:</span>
              <span className="text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1">
                <Check className="w-3.5 h-3.5" />
                National Qualified
              </span>
            </div>
          </div>

          {/* Card 3: Schooling Credentials (HSC & SSC responsive grid) */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#10131A] border border-slate-200/90 dark:border-white/[0.08] shadow-sm text-left hover:border-slate-300 dark:hover:border-white/15 transition-all flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 h-full">
              {secondarySchooling.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-[#07090E]/60 border border-slate-200/80 dark:border-white/[0.05] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400">{edu.period}</span>
                      <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                        {edu.grade.replace('Percentage: ', '')}
                      </span>
                    </div>
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white leading-snug">
                      {edu.degree.includes('HSC') ? 'HSC (Class XII)' : 'SSC (Class X)'}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="pt-1.5 mt-2 border-t border-slate-200/60 dark:border-white/[0.05] text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    {edu.degree.includes('HSC') ? 'Science Stream' : 'General Curriculum'}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 4: Web Development Bootcamp */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#10131A] border border-slate-200/90 dark:border-white/[0.08] shadow-sm text-left hover:border-slate-300 dark:hover:border-white/15 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-md bg-sky-500/10 text-sky-700 dark:text-sky-400 border border-sky-500/20">
                  {ACHIEVEMENTS[1].badge}
                </span>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  Course Credential
                </span>
              </div>

              <h4 className="font-bold text-xs sm:text-base text-slate-900 dark:text-white">
                {ACHIEVEMENTS[1].title}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 mb-2">
                {ACHIEVEMENTS[1].issuer}
              </p>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Comprehensive practical training covering React frontend development, Node.js and Express REST APIs, and database fundamentals.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-white/[0.06]">
              {['React', 'Node.js', 'Express', 'JavaScript', 'HTML & CSS', 'SQL'].map((t, i) => (
                <span key={i} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 text-xs font-mono">
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
