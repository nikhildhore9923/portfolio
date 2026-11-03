import React, { useState } from 'react';
import { Server, Cpu, Database, Radio, Shield, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

export default function HeroVisual() {
  const [activeNode, setActiveNode] = useState('gateway');

  const nodes = [
    {
      id: 'gateway',
      name: 'Serverless Gateway',
      subtitle: 'Node.js / Vercel Edge',
      icon: Server,
      color: 'indigo',
      status: '200 OK (18ms)',
      details: 'HTTP routing, JWT token verification, and intelligent circuit-breaker failover interceptor.',
      metric: 'Ephemeral File Streaming',
    },
    {
      id: 'ml_service',
      name: 'ML Inference Microservice',
      subtitle: 'FastAPI / Scikit-learn',
      icon: Cpu,
      color: 'purple',
      status: 'Active (TF-IDF + LogReg)',
      details: 'NLP classification with confidence score. Shielded by zero-downtime local heuristic fallback.',
      metric: 'Auto-Fallback Protection',
    },
    {
      id: 'realtime',
      name: 'Server-Authoritative Engine',
      subtitle: 'Socket.io / Event Loop',
      icon: Radio,
      color: 'cyan',
      status: 'Synced (15s Ticker)',
      details: 'Centralized countdown clock and anti-tamper answer validation preventing client clock drift.',
      metric: 'Zero-Trust Client Clock',
    },
    {
      id: 'database',
      name: 'Persistent Storage',
      subtitle: 'SQLite (WAL) / MySQL',
      icon: Database,
      color: 'emerald',
      status: 'WAL Mode Active',
      details: 'Write-Ahead Logging provides lock-free concurrency for high-speed multiplayer writes.',
      metric: 'Sub-millisecond disk writes',
    },
  ];

  const currentNode = nodes.find((n) => n.id === activeNode) || nodes[0];

  return (
    <div className="relative w-full rounded-2xl bg-gradient-to-b from-[#0F1626]/90 to-[#0A0E18]/90 border border-white/[0.08] p-5 sm:p-6 shadow-2xl shadow-indigo-950/20 backdrop-blur-xl">
      {/* Visual Header / System Status Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-5">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 -ml-4"></span>
          <span className="text-xs font-mono font-medium text-slate-300">
            SYSTEM_TOPOLOGY :: RESILIENT_SERVICES
          </span>
        </div>
        <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400 bg-white/[0.03] px-2.5 py-1 rounded border border-white/[0.04]">
          <Zap className="w-3 h-3 text-amber-400" />
          <span>Interactive Topology</span>
        </div>
      </div>

      {/* Nodes Grid / Flow */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        {nodes.map((node) => {
          const Icon = node.icon;
          const isSelected = activeNode === node.id;
          return (
            <button
              key={node.id}
              onClick={() => setActiveNode(node.id)}
              className={`text-left p-3.5 rounded-xl border transition-all duration-200 relative overflow-hidden ${
                isSelected
                  ? 'bg-indigo-600/10 border-indigo-500/60 shadow-lg shadow-indigo-500/10 ring-1 ring-indigo-500/30'
                  : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.12]'
              }`}
            >
              {isSelected && (
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-indigo-500/20 to-transparent pointer-events-none" />
              )}
              <div className="flex items-center justify-between mb-2">
                <div
                  className={`p-2 rounded-lg ${
                    isSelected ? 'bg-indigo-500 text-white' : 'bg-white/[0.06] text-slate-400'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.05] text-slate-300 border border-white/[0.05]">
                  {node.status.split(' ')[0]}
                </span>
              </div>
              <div className="font-semibold text-xs text-slate-200 tracking-tight">
                {node.name}
              </div>
              <div className="text-[11px] font-mono text-slate-400 truncate">
                {node.subtitle}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Node Deep Dive Inspector */}
      <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold text-indigo-400 uppercase tracking-wide">
              {currentNode.name}
            </span>
            <span className="text-[11px] text-slate-400 font-mono">
              ({currentNode.subtitle})
            </span>
          </div>
          <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" />
            {currentNode.status}
          </span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed mb-3">
          {currentNode.details}
        </p>
        <div className="flex items-center justify-between pt-2.5 border-t border-white/[0.06] text-[11px] font-mono">
          <span className="text-slate-400">Architectural Highlight:</span>
          <span className="text-indigo-300 font-medium bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
            {currentNode.metric}
          </span>
        </div>
      </div>

      {/* Subtext info */}
      <div className="mt-3 text-center">
        <span className="text-[11px] text-slate-400 font-mono">
          Click any microservice node above to inspect resilience & failover details
        </span>
      </div>
    </div>
  );
}
