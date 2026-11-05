import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import EducationAchievements from './components/EducationAchievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';
import CommandMenu from './components/CommandMenu';
import SpaceParticlesCanvas from './components/SpaceParticlesCanvas';
import { CheckCircle2, Home, Sparkles, Cpu, FileText, Mail } from 'lucide-react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [commandMenuOpen, setCommandMenuOpen] = useState(false);
  const [toast, setToast] = useState(null);

  // Theme state: 'dark' or 'light'
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) return saved;
    return 'dark'; // Default dark first as requested
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Keyboard shortcut: Cmd/Ctrl + K opens Command Palette
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandMenuOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFC] dark:bg-[#07090E] text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200 relative overflow-x-hidden">
      
      {/* Interactive Space Starfield & Constellation Canvas */}
      <SpaceParticlesCanvas theme={theme} />

      {/* Sticky Navigation */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        onOpenCommandMenu={() => setCommandMenuOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenResume={() => setResumeOpen(true)}
          onShowToast={showToast}
        />
        <About />
        <Projects
          onSelectProject={(proj) => setSelectedProject(proj)}
        />
        <Skills />
        <EducationAchievements />
        <Contact
          onShowToast={showToast}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Deep Dive Project Architecture Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Printable / Downloadable Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      {/* Cmd+K Command Palette */}
      <CommandMenu
        isOpen={commandMenuOpen}
        onClose={() => setCommandMenuOpen(false)}
        onOpenResume={() => setResumeOpen(true)}
        onShowToast={showToast}
      />

      {/* Clean Toast Notification */}
      {toast && (
        <div className="fixed bottom-16 sm:bottom-6 right-4 sm:right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs font-semibold shadow-2xl border border-slate-700 dark:border-white/20 animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          <span>{toast}</span>
        </div>
      )}

      {/* Modern iOS-Style Mobile Bottom Quick Dock (< sm) */}
      <nav 
        aria-label="Mobile Navigation Dock"
        className="sm:hidden fixed bottom-3 left-4 right-4 z-30 max-w-sm mx-auto bg-white/90 dark:bg-[#0E121A]/90 backdrop-blur-xl border border-slate-200/90 dark:border-white/10 rounded-2xl shadow-xl shadow-slate-900/10 dark:shadow-black/40 px-2 py-1.5 flex items-center justify-around"
      >
        <a
          href="#home"
          className="flex flex-col items-center justify-center py-1 px-2.5 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors active:scale-90"
        >
          <Home className="w-4 h-4" />
          <span className="text-[9px] font-mono mt-0.5 font-medium">Home</span>
        </a>

        <a
          href="#projects"
          className="flex flex-col items-center justify-center py-1 px-2.5 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors active:scale-90"
        >
          <Sparkles className="w-4 h-4 text-sky-600 dark:text-sky-400" />
          <span className="text-[9px] font-mono mt-0.5 font-medium">Projects</span>
        </a>

        <a
          href="#skills"
          className="flex flex-col items-center justify-center py-1 px-2.5 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors active:scale-90"
        >
          <Cpu className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span className="text-[9px] font-mono mt-0.5 font-medium">Skills</span>
        </a>

        <button
          onClick={() => setResumeOpen(true)}
          className="flex flex-col items-center justify-center py-1 px-2.5 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors active:scale-90"
        >
          <FileText className="w-4 h-4 text-amber-500" />
          <span className="text-[9px] font-mono mt-0.5 font-medium">Resume</span>
        </button>

        <a
          href="#contact"
          className="flex flex-col items-center justify-center py-1 px-2.5 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors active:scale-90"
        >
          <Mail className="w-4 h-4 text-purple-500" />
          <span className="text-[9px] font-mono mt-0.5 font-medium">Contact</span>
        </a>
      </nav>

    </div>
  );
}
