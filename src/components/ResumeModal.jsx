import React, { useEffect } from 'react';
import { X, Printer, ExternalLink, Mail, Phone, MapPin, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-white dark:bg-[#0F131C] border border-slate-200 dark:border-white/[0.1] rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh] text-left">
        
        {/* Controls Bar */}
        <div className="px-4 py-3 sm:px-6 bg-slate-50 dark:bg-[#151923] border-b border-slate-200 dark:border-white/[0.08] flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-mono font-semibold text-slate-800 dark:text-slate-200 tracking-tight">
              NIKHIL_DHORE_RESUME.PDF
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-colors shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-200 dark:bg-white/[0.06] hover:bg-slate-300 dark:hover:bg-white/[0.1] text-slate-600 dark:text-slate-300 transition-colors"
              aria-label="Close resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Canvas */}
        <div className="p-4 sm:p-8 md:p-10 overflow-y-auto space-y-5 bg-white dark:bg-[#0B0E14] text-slate-800 dark:text-slate-200 font-sans text-xs leading-relaxed print:bg-white print:text-black print:p-0">
          
          {/* Header */}
          <div className="text-center pb-3 border-b border-slate-300 dark:border-white/[0.15] print:border-black/30">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-1.5 print:text-black">
              Nikhil Dhore
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-600 dark:text-slate-300 font-mono print:text-slate-800">
              <span>{PERSONAL_INFO.phone}</span>
              <span>|</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sky-600 dark:text-sky-400 hover:underline print:text-black">
                {PERSONAL_INFO.email}
              </a>
              <span>|</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-sky-600 dark:text-sky-400 hover:underline print:text-black">
                LinkedIn
              </a>
              <span>|</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-sky-600 dark:text-sky-400 hover:underline print:text-black">
                GitHub
              </a>
              <span>|</span>
              <a href="#home" onClick={onClose} className="text-sky-600 dark:text-sky-400 hover:underline print:text-black">
                Portfolio
              </a>
            </div>
          </div>

          {/* SUMMARY */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-sky-400 pb-1 mb-1.5 border-b border-slate-200 dark:border-white/[0.08] print:text-black print:border-black/20">
              SUMMARY
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs print:text-slate-900">
              Final-year B.Tech CSE (AI & ML) student who has built and deployed two full-stack projects: a real-time multiplayer quiz platform and an AI-powered feedback analysis platform. Strong foundation in Java, DSA, REST APIs, and machine learning, backed by a GATE 2026 score of 324.
            </p>
          </div>

          {/* PROJECTS */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-sky-400 pb-1 mb-2.5 border-b border-slate-200 dark:border-white/[0.08] print:text-black print:border-black/20">
              PROJECTS
            </h2>
            
            <div className="space-y-4">
              
              {/* Project 1: Sparq */}
              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm print:text-black">
                    Sparq – Real-Time Multiplayer Quiz Platform
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 italic print:text-slate-600">
                    React, Node.js, Express, Socket.io, JWT, Groq API, SQLite
                  </div>
                </div>
                
                <div className="text-[11px] font-mono text-sky-600 dark:text-sky-400 pb-0.5">
                  <a href="https://sparq-quiz.vercel.app/" target="_blank" rel="noreferrer" className="hover:underline">Live Demo</a>
                  <span className="text-slate-400 dark:text-slate-600 mx-1.5">|</span>
                  <a href="https://github.com/nikhildhore9923/sparq-quiz" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
                </div>

                <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300 pl-0.5 text-xs print:text-slate-800">
                  <li>Built a Kahoot-style real-time quiz game using Node.js and Socket.io, where the server handles timers, scoring, and answer checking to prevent cheating.</li>
                  <li>Integrated the Groq API (LLM) to generate 4-option trivia questions on any topic, so hosts can create a quiz instantly.</li>
                  <li>Implemented host login with JWT and bcrypt password hashing, plus Express REST APIs to save and reuse quizzes, while live gameplay runs separately over Socket.io.</li>
                  <li>Stored game data in SQLite (better-sqlite3, WAL mode) and deployed the React frontend on Vercel and the Socket.io server on Render.</li>
                </ul>
              </div>

              {/* Project 2: Pulse */}
              <div className="space-y-1 pt-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm print:text-black">
                    Pulse – AI-Powered Customer Intelligence Platform
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 italic print:text-slate-600">
                    React, Node.js, FastAPI, Scikit-learn, Groq API, MySQL
                  </div>
                </div>

                <div className="text-[11px] font-mono text-sky-600 dark:text-sky-400 pb-0.5">
                  <a href="https://feedback-analyzer-beta.vercel.app/" target="_blank" rel="noreferrer" className="hover:underline">Live Demo</a>
                  <span className="text-slate-400 dark:text-slate-600 mx-1.5">|</span>
                  <a href="https://github.com/nikhildhore9923/feedback-analyzer" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
                </div>

                <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300 pl-0.5 text-xs print:text-slate-800">
                  <li>Built a full-stack customer feedback platform with a React dashboard, a Node.js/Express API, and a separate FastAPI service for machine learning, using MySQL for storage.</li>
                  <li>Implemented an NLP pipeline in Scikit-learn (TF-IDF + Logistic Regression) that classifies feedback sentiment and topic and returns a confidence score.</li>
                  <li>Integrated the Groq API (Llama 3) to generate on-demand executive summaries of customer feedback trends.</li>
                  <li>Added a fallback so the app stays responsive when the ML service is slow or cold-starting: after a short timeout, the backend switches to a simple keyword-based sentiment check.</li>
                </ul>
              </div>

            </div>
          </div>

          {/* TECHNICAL SKILLS */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-sky-400 pb-1 mb-1.5 border-b border-slate-200 dark:border-white/[0.08] print:text-black print:border-black/20">
              TECHNICAL SKILLS
            </h2>
            <div className="space-y-1 text-slate-700 dark:text-slate-300 text-xs print:text-slate-900">
              <div><strong className="text-slate-900 dark:text-white print:text-black">• Languages:</strong> Java, JavaScript, SQL</div>
              <div><strong className="text-slate-900 dark:text-white print:text-black">• Web / Backend:</strong> React, Node.js, Express, FastAPI, REST APIs, Socket.io, WebSockets, JWT, HTML, CSS</div>
              <div><strong className="text-slate-900 dark:text-white print:text-black">• Databases:</strong> MySQL, SQLite</div>
              <div><strong className="text-slate-900 dark:text-white print:text-black">• AI/ML & Data:</strong> NLP, Scikit-learn, NumPy, Pandas</div>
              <div><strong className="text-slate-900 dark:text-white print:text-black">• Tools / Cloud:</strong> Git, GitHub, Vercel, Render</div>
            </div>
          </div>

          {/* CERTIFICATIONS & ACHIEVEMENTS */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-sky-400 pb-1 mb-1.5 border-b border-slate-200 dark:border-white/[0.08] print:text-black print:border-black/20">
              CERTIFICATIONS & ACHIEVEMENTS
            </h2>
            <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300 text-xs print:text-slate-900">
              <li>Qualified GATE 2026 (Computer Science) with a score of 324 in the national-level engineering exam.</li>
              <li>Completed full-stack Web Development Bootcamp by Angela Yu on Udemy.</li>
            </ul>
          </div>

          {/* EDUCATION */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-sky-400 pb-1 mb-1.5 border-b border-slate-200 dark:border-white/[0.08] print:text-black print:border-black/20">
              EDUCATION
            </h2>
            <div className="space-y-2 text-slate-700 dark:text-slate-300 text-xs print:text-slate-900">
              
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5">
                <div>
                  <strong className="text-slate-900 dark:text-white print:text-black">KIT's College of Engineering (Autonomous), Kolhapur</strong>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400">B.Tech in Computer Science and Engineering (AI & ML)</div>
                </div>
                <div className="text-left sm:text-right font-mono text-xs">
                  <div>2023 – Present</div>
                  <div className="font-semibold text-emerald-600 dark:text-emerald-400 print:text-black">CGPA: 8.09 / 10</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5 pt-1">
                <div>
                  <strong className="text-slate-900 dark:text-white print:text-black">G.M.B. Jr. College, Arjuni Morgaon</strong>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400">HSC (Class XII)</div>
                </div>
                <div className="text-left sm:text-right font-mono text-xs">
                  <div>2022</div>
                  <div className="font-semibold">83.67%</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5 pt-1">
                <div>
                  <strong className="text-slate-900 dark:text-white print:text-black">Vidya Vihar Mandir, Lakhandur</strong>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400">SSC (Class X)</div>
                </div>
                <div className="text-left sm:text-right font-mono text-xs">
                  <div>2020</div>
                  <div className="font-semibold">83.60%</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
