import React, { useState, useEffect } from 'react';
import { 
  Radio, 
  Clock, 
  Trophy, 
  Wifi, 
  WifiOff, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  RotateCcw, 
  Zap, 
  Award,
  Sparkles
} from 'lucide-react';

const QUESTIONS = [
  {
    id: 1,
    question: "What is the primary advantage of using WebSockets over standard HTTP requests in a live multiplayer quiz?",
    options: [
      { text: "Provides persistent bidirectional communication for instant updates without polling.", correct: true },
      { text: "Automatically converts frontend React state into a relational SQL database.", correct: false },
      { text: "Compresses all static image assets stored on the hosting web server.", correct: false },
      { text: "Completely replaces the need for any backend server or Node.js runtime.", correct: false },
    ],
    explanation: "Socket.io maintains an active TCP connection, broadcasting room scores and events in sub-30ms."
  },
  {
    id: 2,
    question: "In a multiplayer quiz room with concurrent players, where should the official timer state reside?",
    options: [
      { text: "On each client browser using a local window.setInterval countdown.", correct: false },
      { text: "On the central Node.js server to prevent client-side clock tampering and desync.", correct: true },
      { text: "Inside browser localStorage synchronized through periodic cookie checks.", correct: false },
      { text: "Inside a CSS keyframe animation running locally in the browser.", correct: false },
    ],
    explanation: "Server-authoritative timers ensure all players start, answer, and finish questions at the exact same instant."
  },
  {
    id: 3,
    question: "How does Sparq maintain a player's room session and score if their network momentarily drops?",
    options: [
      { text: "By forcing the player to register a new account and starting over from 0 points.", correct: false },
      { text: "By verifying the stored session JWT token upon socket reconnection to restore state.", correct: true },
      { text: "By caching the entire backend database directly inside the user's browser storage.", correct: false },
      { text: "By pausing the quiz for all other players until the disconnected player returns.", correct: false },
    ],
    explanation: "JWT session tokens enable seamless Socket.io reconnection and score synchronization without data loss."
  }
];

const INITIAL_PLAYERS = [
  { id: 'you', name: "You (Nikhil)", score: 1950, isYou: true },
  { id: 'sarah', name: "Sarah_K", score: 2100, isYou: false },
  { id: 'rahul', name: "Rahul_99", score: 1820, isYou: false },
  { id: 'alex', name: "Alex_Dev", score: 1540, isYou: false },
];

export default function SparqInteractiveDemo() {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [timerActive, setTimerActive] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [scoreEarned, setScoreEarned] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [players, setPlayers] = useState(INITIAL_PLAYERS);
  const [networkDrop, setNetworkDrop] = useState(false);
  const [reconnected, setReconnected] = useState(false);

  const currentQ = QUESTIONS[currentQIndex];

  // =========================================================================
  // Countdown Timer: strictly counts down to 0, stops, and DOES NOT loop!
  // =========================================================================
  useEffect(() => {
    if (!timerActive || networkDrop || isFinished || hasAnswered) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setTimerActive(false);
          setHasAnswered(true); // Time's up
          setScoreEarned(0);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timerActive, networkDrop, isFinished, hasAnswered, currentQIndex]);

  // =========================================================================
  // Handle Option Selection
  // =========================================================================
  const handleSelectOption = (idx) => {
    if (hasAnswered || networkDrop || !timerActive) return;

    // Immediately stop the timer to prevent any further countdown or looping
    setTimerActive(false);
    setSelectedOption(idx);
    setHasAnswered(true);

    const isCorrect = currentQ.options[idx].correct;
    let earned = 0;

    if (isCorrect) {
      // Calculate score: base 500 + speed bonus proportional to time left
      earned = 500 + (timeLeft * 30);
      setCorrectCount((prev) => prev + 1);
    }
    setScoreEarned(earned);

    // Update player scores and sort leaderboard
    setPlayers((prevPlayers) => {
      return prevPlayers.map((p) => {
        if (p.isYou) {
          return { ...p, score: p.score + earned };
        }
        // Simulate concurrent rival players answering with small random scores
        const rivalBoost = isCorrect ? Math.floor(Math.random() * 250) + 300 : Math.floor(Math.random() * 300) + 400;
        return { ...p, score: p.score + rivalBoost };
      });
    });
  };

  // =========================================================================
  // Advance to Next Question or Final Podium
  // =========================================================================
  const handleNextQuestion = () => {
    if (currentQIndex < QUESTIONS.length - 1) {
      setCurrentQIndex((prev) => prev + 1);
      setTimeLeft(15);
      setSelectedOption(null);
      setHasAnswered(false);
      setScoreEarned(0);
      setTimerActive(true);
    } else {
      setIsFinished(true);
    }
  };

  // =========================================================================
  // Reset / Play Again
  // =========================================================================
  const handleRestart = () => {
    setCurrentQIndex(0);
    setTimeLeft(15);
    setTimerActive(true);
    setSelectedOption(null);
    setHasAnswered(false);
    setScoreEarned(0);
    setCorrectCount(0);
    setIsFinished(false);
    setPlayers(INITIAL_PLAYERS);
    setNetworkDrop(false);
    setReconnected(false);
  };

  // =========================================================================
  // Simulate Network Drop & Reconnection with Session Token
  // =========================================================================
  const handleSimulateDrop = () => {
    if (networkDrop) return;
    setNetworkDrop(true);
    setReconnected(false);

    // After 1.4s, simulate client auto-reconnecting with JWT session token
    setTimeout(() => {
      setNetworkDrop(false);
      setReconnected(true);
      setTimeout(() => setReconnected(false), 3000);
    }, 1400);
  };

  // Sorted leaderboard (highest score first)
  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);
  const yourRank = sortedPlayers.findIndex((p) => p.isYou) + 1;

  return (
    <div className="rounded-2xl bg-slate-50 dark:bg-[#0E121A] border border-slate-200 dark:border-white/[0.08] p-3.5 sm:p-5 text-left text-xs transition-colors">
      
      {/* Top Socket State Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-200 dark:border-white/[0.06]">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${networkDrop ? 'bg-rose-400' : 'bg-emerald-400'} opacity-75`}></span>
            <span className={`relative inline-flex rounded-full h-2 w-2 ${networkDrop ? 'bg-rose-500' : 'bg-emerald-500'}`}></span>
          </span>
          <Radio className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
          <span className="font-mono font-medium text-slate-800 dark:text-slate-200 text-xs">
            Live Quiz Room #SPARQ-104 • {networkDrop ? 'Disconnected' : 'Connected via Socket.io'}
          </span>
        </div>

        <button
          onClick={handleSimulateDrop}
          disabled={networkDrop || isFinished}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white dark:bg-white/[0.04] hover:bg-slate-100 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 transition-colors disabled:opacity-50"
          title="Test Socket.io auto-reconnection and session recovery"
        >
          {networkDrop ? (
            <WifiOff className="w-3.5 h-3.5 text-rose-500" />
          ) : (
            <Wifi className="w-3.5 h-3.5 text-emerald-500" />
          )}
          <span>Simulate Network Drop</span>
        </button>
      </div>

      {/* Disconnection Alert */}
      {networkDrop && (
        <div className="mb-3 p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-[11px] font-mono text-rose-700 dark:text-rose-300 flex items-center gap-2 animate-pulse">
          <WifiOff className="w-4 h-4 text-rose-500 shrink-0" />
          <span>Connection dropped. Socket.io client reconnecting with JWT session token...</span>
        </div>
      )}

      {/* Reconnected Alert */}
      {reconnected && (
        <div className="mb-3 p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-700 dark:text-emerald-300 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
          <span>Reconnected! Room scores and quiz clock synchronized via session token.</span>
        </div>
      )}

      {/* Main Simulation View: Quiz or Completed Podium */}
      {!isFinished ? (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 sm:gap-4 items-start">
          
          {/* Left Column: Active Question & Interactive Options (8 Cols) */}
          <div className="md:col-span-8 space-y-3">
            
            {/* Header: Question Progress & Timer */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-sky-700 dark:text-sky-300 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
                  Question 0{currentQIndex + 1} / 0{QUESTIONS.length}
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  Room Capacity: 4 Players
                </span>
              </div>

              {/* Countdown Clock Display */}
              <div className={`flex items-center gap-1.5 text-xs font-mono font-bold px-2 py-0.5 rounded-md ${
                timeLeft === 0 
                  ? 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20'
                  : timeLeft <= 5
                    ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 animate-pulse'
                    : 'bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.08]'
              }`}>
                <Clock className="w-3.5 h-3.5" />
                <span>
                  {timeLeft === 0 ? "Time's Up!" : `${timeLeft}s remaining`}
                </span>
              </div>
            </div>

            {/* Question Text Card */}
            <div className="p-3 sm:p-3.5 rounded-xl bg-white dark:bg-[#12151C] border border-slate-200 dark:border-white/[0.06] font-medium text-slate-900 dark:text-white leading-relaxed text-xs sm:text-sm">
              {currentQ.question}
            </div>

            {/* 4 Interactive Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {currentQ.options.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                const showCorrect = hasAnswered && opt.correct;
                const showIncorrect = hasAnswered && isSelected && !opt.correct;

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={hasAnswered || networkDrop}
                    className={`p-2.5 sm:p-3 rounded-xl text-left border transition-all text-xs flex items-center justify-between ${
                      showCorrect
                        ? 'bg-emerald-500/15 border-emerald-500/50 text-emerald-800 dark:text-emerald-300 font-semibold shadow-sm'
                        : showIncorrect
                          ? 'bg-rose-500/15 border-rose-500/50 text-rose-800 dark:text-rose-300 font-semibold'
                          : isSelected
                            ? 'bg-sky-500/15 border-sky-500/50 text-sky-800 dark:text-sky-300 font-semibold'
                            : 'bg-white dark:bg-[#12151C] border-slate-200 dark:border-white/[0.06] text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-white/20'
                    } disabled:cursor-default`}
                  >
                    <span className="leading-snug">{opt.text}</span>
                    {showCorrect && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 ml-1.5" />
                    )}
                    {showIncorrect && (
                      <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 ml-1.5" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Post-Answer Socket Feedback & Action Button */}
            {hasAnswered && (
              <div className="p-2.5 rounded-xl bg-white dark:bg-[#12151C] border border-slate-200 dark:border-white/[0.06] flex flex-wrap items-center justify-between gap-2.5">
                <div className="text-xs">
                  {selectedOption !== null && currentQ.options[selectedOption]?.correct ? (
                    <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold font-mono">
                      <Zap className="w-4 h-4" />
                      <span>Correct! +{scoreEarned} pts (Speed Bonus included)</span>
                    </div>
                  ) : timeLeft === 0 ? (
                    <div className="text-amber-600 dark:text-amber-400 font-mono font-medium">
                      Time expired! The correct answer is highlighted in green.
                    </div>
                  ) : (
                    <div className="text-rose-600 dark:text-rose-400 font-mono font-medium">
                      Incorrect answer. The correct option is highlighted above.
                    </div>
                  )}
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    {currentQ.explanation}
                  </p>
                </div>

                <button
                  onClick={handleNextQuestion}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-colors shadow-sm ml-auto"
                >
                  <span>
                    {currentQIndex < QUESTIONS.length - 1 ? 'Next Question' : 'View Results'}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

          </div>

          {/* Right Column: Live Room Leaderboard (4 Cols) */}
          <div className="md:col-span-4 p-3 rounded-xl bg-white dark:bg-[#12151C] border border-slate-200 dark:border-white/[0.06] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-slate-700 dark:text-slate-300 font-semibold mb-2.5 pb-2 border-b border-slate-100 dark:border-white/[0.06]">
                <div className="flex items-center gap-1.5">
                  <Trophy className="w-3.5 h-3.5 text-amber-500" />
                  <span>Live Leaderboard</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.05] text-slate-500">
                  Rank: #{yourRank}
                </span>
              </div>

              <div className="space-y-1.5">
                {sortedPlayers.map((pl, idx) => (
                  <div
                    key={pl.id}
                    className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg text-[11px] font-mono transition-all ${
                      pl.isYou
                        ? 'bg-sky-500/10 text-sky-800 dark:text-sky-300 font-bold border border-sky-500/25'
                        : 'text-slate-600 dark:text-slate-400 bg-slate-50/60 dark:bg-white/[0.02]'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 truncate">
                      <span className={`w-4 font-bold text-center ${idx === 0 ? 'text-amber-500' : 'text-slate-400'}`}>
                        {idx + 1}.
                      </span>
                      <span className="truncate">{pl.name}</span>
                    </div>
                    <span className="font-bold shrink-0">{pl.score} pts</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3 pt-2 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>Sync: Socket.io</span>
              <span className="text-emerald-600 dark:text-emerald-400">● 24ms ping</span>
            </div>
          </div>

        </div>
      ) : (
        /* Final Results & Podium Screen */
        <div className="p-4 sm:p-6 rounded-xl bg-white dark:bg-[#12151C] border border-slate-200 dark:border-white/[0.06] text-center max-w-xl mx-auto space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/20 flex items-center justify-center mx-auto">
            <Trophy className="w-6 h-6" />
          </div>

          <div>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-semibold mb-1">
              <Sparkles className="w-3 h-3" />
              Quiz Round Complete!
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              {yourRank === 1 ? '🎉 Outstanding! 1st Place Victory!' : `Great Game! You Finished in #${yourRank} Place!`}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">
              Accuracy: {correctCount} of {QUESTIONS.length} correct • Final Score: {players.find(p => p.isYou)?.score} pts
            </p>
          </div>

          {/* Final Standings Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
            {sortedPlayers.map((pl, idx) => (
              <div 
                key={pl.id} 
                className={`p-2.5 rounded-xl border text-center font-mono ${
                  pl.isYou 
                    ? 'bg-sky-500/10 border-sky-500/30 text-sky-800 dark:text-sky-300 font-bold'
                    : 'bg-slate-50 dark:bg-white/[0.02] border-slate-200/80 dark:border-white/[0.05] text-slate-600 dark:text-slate-400'
                }`}
              >
                <div className="text-[10px] text-slate-400">Rank #{idx + 1}</div>
                <div className="text-xs font-semibold truncate mt-0.5">{pl.name}</div>
                <div className="text-xs font-bold text-slate-900 dark:text-white mt-0.5">{pl.score} pts</div>
              </div>
            ))}
          </div>

          <div className="pt-2 flex justify-center">
            <button
              onClick={handleRestart}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-colors shadow-sm active:scale-95"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Play Again / Restart Simulator</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
