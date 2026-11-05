import React, { useState, useEffect } from 'react';
import { FileText, Command, Menu, X, Sun, Moon } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Navbar({ onOpenResume, onOpenCommandMenu, theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled || mobileMenuOpen
          ? 'bg-white/90 dark:bg-[#07090E]/90 backdrop-blur-md border-b border-slate-200/90 dark:border-white/[0.08] shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-14 flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <a
            href="#"
            className="group flex items-center gap-2.5 sm:gap-3 text-slate-900 dark:text-slate-100 transition-colors"
          >
            <div className="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-xl overflow-hidden bg-slate-100 dark:bg-white/[0.05] border border-slate-300 dark:border-white/10 group-hover:border-sky-500 transition-all shadow-sm shrink-0">
              <img
                src="/nikhil-dhore.jpg"
                alt="Nikhil Dhore"
                className="w-full h-full object-cover object-top"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-[#0A0C10]"></span>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-semibold text-xs sm:text-sm tracking-tight text-slate-900 dark:text-white leading-tight">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono text-slate-500 dark:text-slate-400 leading-tight">
                CSE (AI & ML)
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.06] rounded-full px-3 py-1 backdrop-blur-md shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-white/[0.06] rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Controls: Desktop */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-xl bg-slate-100 dark:bg-white/[0.05] hover:bg-slate-200 dark:hover:bg-white/[0.1] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 transition-colors"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Command Palette Trigger */}
            <button
              onClick={onOpenCommandMenu}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/[0.08] text-xs text-slate-600 dark:text-slate-300 transition-all"
              title="Quick Search (Ctrl+K or Cmd+K)"
            >
              <Command className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
              <span className="text-slate-500 dark:text-slate-400 text-xs">Search</span>
              <kbd className="font-mono text-[10px] bg-slate-200 dark:bg-white/[0.08] px-1.5 py-0.5 rounded text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-white/[0.06]">
                ⌘K
              </kbd>
            </button>

            {/* Resume CTA */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-all shadow-sm active:scale-95"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Right Controls: Compact & Touch-Friendly */}
          <div className="flex sm:hidden items-center gap-1.5">
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-xl bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 active:scale-95"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            <button
              onClick={onOpenCommandMenu}
              className="p-2 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 active:scale-95"
              aria-label="Open Command Menu"
            >
              <Command className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 active:scale-95"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer (Properly positioned absolute below top bar) */}
      {mobileMenuOpen && (
        <div className="sm:hidden absolute top-14 left-0 right-0 w-full bg-white/95 dark:bg-[#0C1017]/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/[0.08] shadow-2xl px-4 py-4 space-y-3 animate-fadeIn">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3.5 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.05] rounded-xl transition-colors text-left"
              >
                <span>{link.name}</span>
                <span className="text-slate-400 text-xs">→</span>
              </a>
            ))}
          </nav>
          
          <div className="pt-2 border-t border-slate-200 dark:border-white/[0.08]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 transition-colors shadow-sm active:scale-95"
            >
              <FileText className="w-4 h-4" />
              <span>View Resume (PDF)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
