import React, { useState } from 'react';
import { BUILD_PHILOSOPHY } from '../data/portfolioData';
import { CheckCircle2, Shield, Wrench, Bug, Rocket, Terminal } from 'lucide-react';
import bgPolyGeometry from '../assets/bg-poly-geometry.jpg';

export default function HowIBuild() {
  const [activeStep, setActiveStep] = useState(0);
  const stepIcons = [Shield, Terminal, Wrench, Bug, Rocket];

  return (
    <section id="how-i-build" className="min-h-screen py-10 lg:py-12 flex flex-col justify-center border-b border-slate-200 dark:border-white/[0.08] transition-colors relative overflow-hidden scroll-mt-16">
      {/* Ambient Animated Geometric Background */}
      <div className="absolute top-10 right-0 w-[600px] sm:w-[800px] h-[450px] sm:h-[550px] pointer-events-none radial-mask-poly overflow-hidden z-0 opacity-20 dark:opacity-30">
        <img
          src={bgPolyGeometry}
          alt="Geometric Architecture Mesh"
          className="w-full h-full object-cover object-center animate-ambient-float mix-blend-screen select-none filter contrast-125"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 text-xs font-mono mb-2">
            <Terminal className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span>MY WORKFLOW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How I Build Software
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            A practical, step-by-step approach to turning ideas into reliable, working software.
          </p>
        </div>

        {/* Step Selector Horizontal Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-6">
          {BUILD_PHILOSOPHY.map((item, index) => {
            const Icon = stepIcons[index];
            const isSelected = activeStep === index;
            return (
              <button
                key={item.step}
                onClick={() => setActiveStep(index)}
                className={`text-left p-3.5 rounded-2xl border transition-all duration-150 ${
                  isSelected
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md ring-1 ring-slate-900/10 dark:ring-white/20'
                    : 'bg-white dark:bg-[#12151C] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/[0.06] hover:bg-slate-50 dark:hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-xs font-bold ${isSelected ? 'text-sky-400 dark:text-sky-600' : 'text-slate-400'}`}>
                    {item.step}
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-white dark:text-slate-900' : 'text-slate-400'}`} />
                </div>
                <div className="font-semibold text-xs tracking-tight truncate">
                  {item.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Showcase Card */}
        <div className="rounded-3xl bg-white dark:bg-[#12151C] border border-slate-200 dark:border-white/[0.08] p-5 sm:p-6 lg:p-7 shadow-sm text-left transition-colors">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded bg-sky-500/10 text-sky-700 dark:text-sky-400 border border-sky-500/20">
                  STAGE {BUILD_PHILOSOPHY[activeStep].step}
                </span>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  {BUILD_PHILOSOPHY[activeStep].subtitle}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                {BUILD_PHILOSOPHY[activeStep].title}
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                {BUILD_PHILOSOPHY[activeStep].description}
              </p>

              {/* Guiding Principles */}
              <div className="pt-2">
                <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400 block mb-2">
                  Core Implementation Rules:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {BUILD_PHILOSOPHY[activeStep].principles.map((pr, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-[#0E121A] border border-slate-200 dark:border-white/[0.06] flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span className="text-xs text-slate-800 dark:text-slate-200 font-medium">
                        {pr}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Practical Context Callout */}
            <div className="lg:col-span-4 p-5 rounded-2xl bg-slate-50 dark:bg-[#0E121A] border border-slate-200 dark:border-white/[0.06] flex flex-col justify-between space-y-3 text-xs">
              <span className="font-mono text-sky-700 dark:text-sky-400 font-semibold uppercase tracking-wider text-[11px]">
                Applied In My Work
              </span>
              <p className="text-slate-600 dark:text-slate-300 italic leading-relaxed">
                {activeStep === 0 && '"In Pulse, I first understood that users need quick sentiment results and that ML endpoints shouldn\'t cause total application freezes."'}
                {activeStep === 1 && '"In Sparq, I planned the socket events carefully before coding: room creation, joining, quiz countdowns, and live scores."'}
                {activeStep === 2 && '"I kept game timers on the server so all players stay synchronized, rather than relying on individual player device clocks."'}
                {activeStep === 3 && '"Tested error cases like invalid question inputs, dropped socket connections, and token reconnection."'}
                {activeStep === 4 && '"Deployed the React frontends on Vercel and backend services on Render so anyone can easily try out live working demos."'}
              </p>
              <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                — Nikhil Dhore
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
