import React, { useEffect } from 'react';
import { X, Printer, Mail, Phone, ExternalLink, Award, CheckCircle2 } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto bg-black/75 backdrop-blur-sm">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-white dark:bg-[#10141D] border border-slate-200 dark:border-white/[0.1] rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh] text-left">
        
        {/* Controls Bar */}
        <div className="p-4 sm:px-6 bg-slate-50 dark:bg-[#141822] border-b border-slate-200 dark:border-white/[0.08] flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-mono font-semibold text-slate-800 dark:text-slate-200">
              NIKHIL_DHORE_RESUME [VIEWER & PRINT]
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-colors shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
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

        {/* Printable Resume Canvas */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 bg-white dark:bg-[#0A0C10] text-slate-800 dark:text-slate-200 font-sans text-xs leading-relaxed print:bg-white print:text-black">
          
          {/* Header with Photo */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-white/[0.1] print:border-black/20">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-1 print:text-black">
                {PERSONAL_INFO.name}
              </h1>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 text-xs text-slate-600 dark:text-slate-400 font-mono print:text-slate-800">
                <span>{PERSONAL_INFO.phone}</span>
                <span>•</span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sky-600 dark:text-sky-400 hover:underline print:text-black">
                  {PERSONAL_INFO.email}
                </a>
                <span>•</span>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-sky-600 dark:text-sky-400 hover:underline print:text-black">
                  LinkedIn
                </a>
                <span>•</span>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-sky-600 dark:text-sky-400 hover:underline print:text-black">
                  GitHub
                </a>
              </div>
            </div>
            
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-slate-200 dark:border-white/20 print:border-black/30 shrink-0 shadow-md">
              <img
                src="/nikhil-dhore.jpg"
                alt="Nikhil Dhore"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-sky-400 pb-1 mb-2 border-b border-slate-200 dark:border-white/[0.08] print:text-black print:border-black/20">
              Summary
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed print:text-slate-900">
              {PERSONAL_INFO.shortBio}
            </p>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-sky-400 pb-1 mb-3 border-b border-slate-200 dark:border-white/[0.08] print:text-black print:border-black/20">
              Projects
            </h2>
            
            <div className="space-y-4">
              {/* Pulse */}
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <div className="font-bold text-slate-900 dark:text-slate-100 text-sm print:text-black">
                    Pulse – AI-Powered Customer Intelligence Platform
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 print:text-slate-600">
                    React, Node.js (Vercel Serverless), Python (FastAPI), Scikit-learn, Groq API, MySQL
                  </div>
                </div>
                <div className="text-[11px] font-mono text-sky-600 dark:text-sky-400 pb-0.5">
                  <a href="https://feedback-analyzer-beta.vercel.app/" target="_blank" rel="noreferrer" className="hover:underline">Live Demo</a> • <a href="https://github.com/nikhildhore9923/feedback-analyzer" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300 pl-1 print:text-slate-800">
                  <li>Migrated the Node.js backend to Vercel Serverless Functions, refactoring background cron jobs into HTTP-triggered endpoints and adapting file uploads to work with an ephemeral filesystem.</li>
                  <li>Built a fault-tolerant fallback: when the Python ML microservice times out or is cold-starting, the backend automatically switches to a local heuristic sentiment analyzer, keeping the API responsive.</li>
                  <li>Implemented an NLP pipeline in Scikit-learn (TF-IDF + Logistic Regression) that classifies feedback sentiment and topic with a confidence score.</li>
                  <li>Integrated the Groq API (Llama 3) to generate on-demand executive summaries of feedback trends from classified reviews.</li>
                </ul>
              </div>

              {/* Sparq */}
              <div className="space-y-1.5 pt-2">
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <div className="font-bold text-slate-900 dark:text-slate-100 text-sm print:text-black">
                    Sparq – Real-Time Multiplayer Quiz Platform
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 print:text-slate-600">
                    React (Vite), Node.js, Express, Socket.io, JWT, Groq API, SQLite
                  </div>
                </div>
                <div className="text-[11px] font-mono text-sky-600 dark:text-sky-400 pb-0.5">
                  <a href="https://sparq-quiz.vercel.app/" target="_blank" rel="noreferrer" className="hover:underline">Live Demo</a> • <a href="https://github.com/nikhildhore9923/sparq-quiz" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300 pl-1 print:text-slate-800">
                  <li>Built a real-time multiplayer quiz game using Node.js and Socket.io, with the server controlling all scoring, timing, and game state to prevent cheating.</li>
                  <li>Built REST endpoints (Express) for authentication and quiz management, protected by a custom JWT system with bcrypt password hashing, kept separate from the Socket.io events that drive live gameplay.</li>
                  <li>Integrated the Groq API to generate topic-based trivia questions on demand, parsing the response into the app's quiz format.</li>
                  <li>Used SQLite (better-sqlite3, WAL mode) for fast local storage, and split deployment across Vercel (frontend) and Render (backend) because the backend requires persistent WebSocket connections.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-sky-400 pb-1 mb-2 border-b border-slate-200 dark:border-white/[0.08] print:text-black print:border-black/20">
              Technical Skills
            </h2>
            <div className="space-y-1 text-slate-700 dark:text-slate-300 print:text-slate-900">
              <div><strong className="text-slate-900 dark:text-white print:text-black">Languages:</strong> Java, Python, JavaScript, SQL</div>
              <div><strong className="text-slate-900 dark:text-white print:text-black">AI/ML & Data:</strong> NLP, Scikit-learn, TF-IDF, Logistic Regression, LLM API Integration (Groq), NumPy, Pandas</div>
              <div><strong className="text-slate-900 dark:text-white print:text-black">Web / Backend:</strong> React, Node.js, Express, FastAPI, REST APIs, Socket.io, WebSockets, JWT Auth, HTML, CSS</div>
              <div><strong className="text-slate-900 dark:text-white print:text-black">Databases:</strong> MySQL, SQLite (WAL mode)</div>
              <div><strong className="text-slate-900 dark:text-white print:text-black">Tools / Cloud:</strong> Git, GitHub, Vercel (Serverless, Cron), Render</div>
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-sky-400 pb-1 mb-2 border-b border-slate-200 dark:border-white/[0.08] print:text-black print:border-black/20">
              Certifications & Achievements
            </h2>
            <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300 print:text-slate-900">
              <li><strong className="text-slate-900 dark:text-white print:text-black">Qualified GATE 2026 (Computer Science):</strong> Cleared the national-level engineering entrance exam (Score: 324).</li>
              <li><strong className="text-slate-900 dark:text-white print:text-black">Web Development Bootcamp:</strong> Completed comprehensive full-stack training under Angela Yu on Udemy.</li>
            </ul>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-sky-400 pb-1 mb-2 border-b border-slate-200 dark:border-white/[0.08] print:text-black print:border-black/20">
              Education
            </h2>
            <div className="space-y-2 text-slate-700 dark:text-slate-300 print:text-slate-900">
              <div className="flex justify-between items-baseline">
                <div>
                  <strong className="text-slate-900 dark:text-white print:text-black">KIT's College of Engineering (Autonomous), Kolhapur</strong>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 print:text-slate-600">B.Tech in Computer Science and Engineering (AI & ML)</div>
                </div>
                <div className="text-right font-mono">
                  <div>2023 – Present</div>
                  <div className="text-emerald-600 dark:text-emerald-400 print:text-black font-semibold">CGPA: 8.09 / 10</div>
                </div>
              </div>

              <div className="flex justify-between items-baseline pt-1">
                <div>
                  <strong className="text-slate-900 dark:text-white print:text-black">G.M.B. Jr. College, Arjuni Morgaon</strong>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 print:text-slate-600">HSC (Class XII)</div>
                </div>
                <div className="text-right font-mono">
                  <div>2022</div>
                  <div className="font-semibold">83.67%</div>
                </div>
              </div>

              <div className="flex justify-between items-baseline pt-1">
                <div>
                  <strong className="text-slate-900 dark:text-white print:text-black">Vidya Vihar Mandir, Lakhandur</strong>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 print:text-slate-600">SSC (Class X)</div>
                </div>
                <div className="text-right font-mono">
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
