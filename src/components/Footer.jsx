import React from 'react';
import { ArrowUp, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import profilePhoto from '../assets/nikhil-dhore.jpg';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#080A0E] py-6 sm:py-8 text-slate-500 dark:text-slate-400 text-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          
          {/* Left: Candidate Name & Title */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 shrink-0 shadow-sm">
              <img
                src={profilePhoto}
                alt="Nikhil Dhore"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="text-left">
              <span className="font-semibold text-slate-900 dark:text-slate-200 block text-xs sm:text-sm">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                {PERSONAL_INFO.title}
              </span>
            </div>
          </div>

          {/* Center: Clean Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 font-mono text-[11px]">
            <a href="#about" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">About</a>
            <a href="#projects" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">Skills</a>
            <a href="#education" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">Education</a>
            <a href="#contact" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">Contact</a>
            <button onClick={onOpenResume} className="text-sky-600 dark:text-sky-400 hover:underline">Resume</button>
          </div>

          {/* Right: Socials, Copyright, and Scroll to top */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 sm:gap-4">
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] text-slate-600 dark:text-slate-300 transition-colors active:scale-95"
                aria-label="GitHub"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] text-slate-600 dark:text-slate-300 transition-colors active:scale-95"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
              </a>
            </div>

            <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 dark:text-slate-500">
              © Nikhil Dhore • All rights reserved
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/[0.06] transition-colors active:scale-95"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
