import React, { useState } from 'react';
import { Cpu, Sparkles, AlertTriangle, CheckCircle, RefreshCw } from 'lucide-react';

const PRESETS = [
  {
    text: "The payment gateway timed out twice during checkout, and our billing report is corrupted. Unacceptable service.",
    sentiment: "Severe Negative",
    score: 0.96,
    topic: "Billing & Payment Gateway",
    latency: "38ms",
  },
  {
    text: "The new analytics dashboard and real-time event filtering are blazingly fast. Our team solved 5 bottlenecks today!",
    sentiment: "Positive",
    score: 0.98,
    topic: "Dashboard & Real-time Analytics",
    latency: "32ms",
  },
  {
    text: "Decent application, but the mobile navigation drawer occasionally stutters when scrolling through long lists.",
    sentiment: "Neutral / Slight Negative",
    score: 0.74,
    topic: "Mobile UI / Responsiveness",
    latency: "41ms",
  }
];

export default function PulseInteractiveDemo() {
  const [inputText, setInputText] = useState(PRESETS[0].text);
  const [simulateColdStart, setSimulateColdStart] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(PRESETS[0]);

  const handleAnalyze = (textToAnalyze, coldStartMode = simulateColdStart) => {
    setAnalyzing(true);
    setTimeout(() => {
      const lower = textToAnalyze.toLowerCase();
      let sentiment = "Neutral";
      let score = 0.85;
      let topic = "General Feedback";

      if (lower.includes("crash") || lower.includes("unacceptable") || lower.includes("timed out") || lower.includes("corrupt") || lower.includes("worst") || lower.includes("failed")) {
        sentiment = "Severe Negative";
        score = 0.95;
        topic = lower.includes("billing") || lower.includes("payment") ? "Billing & Payment Gateway" : "System Reliability & Runtime";
      } else if (lower.includes("love") || lower.includes("fast") || lower.includes("great") || lower.includes("smooth") || lower.includes("solved")) {
        sentiment = "Positive";
        score = 0.98;
        topic = "Product Experience & Performance";
      } else if (lower.includes("slow") || lower.includes("bug") || lower.includes("issue") || lower.includes("stutter")) {
        sentiment = "Negative";
        score = 0.82;
        topic = "UI Responsiveness & Performance";
      }

      setResult({
        text: textToAnalyze,
        sentiment,
        score,
        topic,
        latency: coldStartMode ? "Local Fallback Mode" : "Scikit-learn ML Pipeline",
      });
      setAnalyzing(false);
    }, coldStartMode ? 150 : 350);
  };

  return (
    <div className="rounded-2xl bg-slate-50 dark:bg-[#0E121A] border border-slate-200 dark:border-white/[0.08] p-4 sm:p-5 text-left text-xs transition-colors">
      {/* Simulation Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-200 dark:border-white/[0.06]">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span className="font-mono font-medium text-slate-800 dark:text-slate-200">
            Interactive Sentiment Analysis Simulator
          </span>
        </div>

        {/* Fallback toggle */}
        <label className="flex items-center gap-2 cursor-pointer bg-white dark:bg-white/[0.05] hover:bg-slate-100 dark:hover:bg-white/[0.08] px-2.5 py-1 rounded-lg border border-slate-200 dark:border-white/[0.08] transition-colors">
          <input
            type="checkbox"
            checked={simulateColdStart}
            onChange={(e) => {
              const val = e.target.checked;
              setSimulateColdStart(val);
              handleAnalyze(inputText, val);
            }}
            className="w-3.5 h-3.5 rounded text-sky-600 focus:ring-0 bg-transparent border-slate-300 dark:border-white/20"
          />
          <span className="text-[11px] font-mono text-slate-700 dark:text-slate-300">
            Simulate Local Fallback
          </span>
        </label>
      </div>

      {/* Preset Review Pills */}
      <div className="mb-3">
        <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block mb-1.5">
          Select sample customer review:
        </span>
        <div className="flex flex-wrap gap-1.5">
          {PRESETS.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => {
                setInputText(preset.text);
                handleAnalyze(preset.text);
              }}
              className={`text-xs px-2.5 py-1 rounded-md transition-colors text-left ${
                inputText === preset.text
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-medium'
                  : 'bg-white dark:bg-white/[0.04] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-200 dark:border-white/[0.06]'
              }`}
            >
              Preset {idx + 1}: {preset.sentiment.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Input Textarea */}
      <div className="mb-3">
        <textarea
          rows={2}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type or paste sample customer feedback..."
          className="w-full text-xs font-mono bg-white dark:bg-black/50 border border-slate-200 dark:border-white/[0.08] rounded-lg p-2.5 text-slate-900 dark:text-slate-200 focus:outline-none focus:border-sky-500"
        />
        <button
          onClick={() => handleAnalyze(inputText)}
          disabled={analyzing}
          className="mt-1.5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-colors disabled:opacity-50"
        >
          {analyzing ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Sparkles className="w-3.5 h-3.5" />}
          <span>{analyzing ? 'Classifying...' : 'Run Pipeline'}</span>
        </button>
      </div>

      {/* Active Route Status Callout */}
      {simulateColdStart ? (
        <div className="mb-3 p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-[11px] font-mono text-amber-800 dark:text-amber-300 flex items-start gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong>Circuit-Breaker Engaged:</strong> Python FastAPI microservice is cold-starting.
            Backend automatically switched to the local heuristic analyzer in 14ms! 100% API uptime preserved.
          </div>
        </div>
      ) : (
        <div className="mb-3 p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-800 dark:text-emerald-300 flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5" />
            Active Route: Python FastAPI ML Microservice (TF-IDF + Logistic Regression)
          </span>
          <span className="text-slate-500 dark:text-slate-400">Status: 200 OK</span>
        </div>
      )}

      {/* Results Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3 rounded-lg bg-white dark:bg-black/40 border border-slate-200 dark:border-white/[0.06] text-[11px] font-mono">
        <div>
          <span className="text-slate-500 dark:text-slate-400 block mb-0.5">Sentiment:</span>
          <span className={`font-semibold ${result.sentiment.includes('Negative') ? 'text-rose-600 dark:text-rose-400' : 'text-emerald-600 dark:text-emerald-400'}`}>
            {result.sentiment}
          </span>
        </div>
        <div>
          <span className="text-slate-500 dark:text-slate-400 block mb-0.5">Confidence:</span>
          <span className="font-semibold text-slate-900 dark:text-slate-100">
            {(result.score * 100).toFixed(1)}%
          </span>
        </div>
        <div>
          <span className="text-slate-500 dark:text-slate-400 block mb-0.5">Category:</span>
          <span className="font-semibold text-slate-800 dark:text-slate-200 truncate block">
            {result.topic}
          </span>
        </div>
        <div>
          <span className="text-slate-500 dark:text-slate-400 block mb-0.5">Response Time:</span>
          <span className="font-semibold text-sky-600 dark:text-sky-400">{result.latency}</span>
        </div>
      </div>
    </div>
  );
}
