import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, Github, Linkedin, ExternalLink, MessageSquare, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact({ onShowToast }) {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const quickTopics = [
    { label: 'Software Engineer Role', subject: 'Software Engineering Role Inquiry' },
    { label: 'Campus Placement', subject: 'Campus Placement / Graduate Opportunity' },
    { label: 'Technical Interview', subject: 'Technical Interview Schedule' },
    { label: 'Project Discussion', subject: 'Inquiry regarding Sparq & Pulse Projects' }
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    if (onShowToast) {
      onShowToast(`Copied ${PERSONAL_INFO.email} to clipboard!`);
    }
    setTimeout(() => setCopied(false), 2500);
  };

  const getSubjectText = () => subject || 'Software Engineering Opportunity';
  const getMessageText = () => message || 'Hi Nikhil,\n\nI reviewed your portfolio and would like to connect regarding a software engineering role.';

  // Guaranteed to work in any browser without needing desktop Outlook/Mail app
  const handleSendGmail = (e) => {
    if (e) e.preventDefault();
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      PERSONAL_INFO.email
    )}&su=${encodeURIComponent(getSubjectText())}&body=${encodeURIComponent(getMessageText())}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    if (onShowToast) {
      onShowToast('Opening Gmail compose window...');
    }
  };

  // Standard mailto handler for devices with native mail apps configured
  const handleSendMailto = (e) => {
    if (e) e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      getSubjectText()
    )}&body=${encodeURIComponent(getMessageText())}`;
    window.location.href = mailtoUrl;
    if (onShowToast) {
      onShowToast('Opening default email app...');
    }
  };

  // Quick 1-click copy for manual dispatch anywhere
  const handleCopyDraft = (e) => {
    if (e) e.preventDefault();
    const draft = `To: ${PERSONAL_INFO.email}\nSubject: ${getSubjectText()}\n\n${getMessageText()}`;
    navigator.clipboard.writeText(draft);
    if (onShowToast) {
      onShowToast('Draft message copied to clipboard!');
    }
  };

  return (
    <section 
      id="contact" 
      className="min-h-screen lg:min-h-screen py-12 sm:py-16 lg:py-0 lg:pt-16 lg:pb-8 flex flex-col justify-start lg:justify-center border-b border-slate-200/80 dark:border-white/[0.06] transition-colors relative overflow-hidden"
    >
      {/* Subtle Architectural Dot Grid */}
      <div className="absolute inset-0 grid-bg-light dark:grid-bg-dark pointer-events-none opacity-40" />

      {/* Atmospheric Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[700px] h-[300px] sm:h-[350px] bg-sky-500/[0.03] dark:bg-sky-500/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-3.5 sm:mb-5">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 text-xs font-mono mb-1.5">
            <Mail className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span>CONTACT & OPPORTUNITIES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            I am actively seeking software engineering roles, technical interviews, and campus placements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-5 items-stretch">
          
          {/* Left Column: Direct Contact Info & Verified Profiles (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3 text-left">
            
            {/* Email Card with 1-click Copy & Live Status */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#10131A] border border-slate-200/90 dark:border-white/[0.08] shadow-sm hover:border-slate-300 dark:hover:border-white/15 transition-all text-left">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">
                  Direct Inquiries
                </span>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[10px] font-mono border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Open to Roles
                </span>
              </div>

              <div className="flex items-center justify-between gap-2 bg-slate-50 dark:bg-[#07090E]/60 p-2 sm:p-3 rounded-xl border border-slate-200/80 dark:border-white/[0.06]">
                <span className="font-mono text-xs sm:text-sm text-slate-900 dark:text-white font-medium select-all truncate">
                  {PERSONAL_INFO.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-colors shrink-0 shadow-sm active:scale-95"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Quick Contact Points (Phone & Location) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              <div className="p-3 sm:p-3.5 rounded-2xl bg-white dark:bg-[#10131A] border border-slate-200/90 dark:border-white/[0.08] shadow-sm flex items-center gap-3 hover:border-slate-300 dark:hover:border-white/15 transition-all text-left">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.04] text-slate-800 dark:text-slate-200 shrink-0">
                  <Phone className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 block uppercase">Phone</span>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="text-xs font-mono font-medium text-slate-900 dark:text-slate-200 hover:underline truncate block">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="p-3 sm:p-3.5 rounded-2xl bg-white dark:bg-[#10131A] border border-slate-200/90 dark:border-white/[0.08] shadow-sm flex items-center gap-3 hover:border-slate-300 dark:hover:border-white/15 transition-all text-left">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.04] text-slate-800 dark:text-slate-200 shrink-0">
                  <MapPin className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 block uppercase">Location</span>
                  <span className="text-xs font-medium text-slate-900 dark:text-slate-200 truncate block">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Verified Social Profiles */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#10131A] border border-slate-200/90 dark:border-white/[0.08] shadow-sm space-y-2 text-left hover:border-slate-300 dark:hover:border-white/15 transition-all">
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider block">
                Verified Profiles
              </span>
              <div className="flex flex-col gap-2">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-slate-50 dark:bg-[#07090E]/60 hover:bg-slate-100 dark:hover:bg-white/[0.05] border border-slate-200/80 dark:border-white/[0.06] transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                    <span className="text-xs font-medium text-slate-800 dark:text-slate-200">Connect on LinkedIn</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700 dark:group-hover:text-white transition-colors" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-slate-50 dark:bg-[#07090E]/60 hover:bg-slate-100 dark:hover:bg-white/[0.05] border border-slate-200/80 dark:border-white/[0.06] transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-slate-800 dark:text-slate-200" />
                    <span className="text-xs font-medium text-slate-800 dark:text-slate-200">Review Code on GitHub</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700 dark:group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Pre-composed Mail Form (7 cols) */}
          <div className="lg:col-span-7 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white dark:bg-[#10131A] border border-slate-200/90 dark:border-white/[0.08] shadow-sm text-left flex flex-col justify-between hover:border-slate-300 dark:hover:border-white/15 transition-all">
            <div>
              <div className="flex items-center justify-between gap-2 mb-1">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400">
                    <MessageSquare className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-slate-900 dark:text-white">
                    Send a Quick Message
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/[0.04]">
                  Direct Dispatch
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 leading-relaxed">
                Choose a topic or draft a customized note to connect directly via email:
              </p>

              {/* Quick Topic Chips */}
              <div className="mb-3">
                <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-1.5">
                  Quick Select Subject:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {quickTopics.map((topic, tIdx) => (
                    <button
                      key={tIdx}
                      type="button"
                      onClick={() => setSubject(topic.subject)}
                      className={`text-[11px] font-mono px-2.5 py-1 rounded-lg border transition-all ${
                        subject === topic.subject
                          ? 'bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-500/30'
                          : 'bg-slate-50 dark:bg-[#07090E]/60 text-slate-600 dark:text-slate-400 border-slate-200/80 dark:border-white/[0.06] hover:border-slate-300 dark:hover:border-white/15'
                      }`}
                    >
                      {topic.label}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSendGmail} className="space-y-3 text-xs font-mono">
                <div>
                  <label className="block text-slate-600 dark:text-slate-400 mb-1 text-[11px] font-medium">Subject / Opportunity:</label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Software Engineer Role / Campus Placement Inquiry"
                    className="w-full text-sm bg-slate-50 dark:bg-[#07090E]/60 border border-slate-200/80 dark:border-white/[0.08] rounded-xl p-2.5 sm:p-3 text-slate-900 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-600 dark:text-slate-400 mb-1 text-[11px] font-medium">Message / Job Description:</label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hi Nikhil, we reviewed your work on Sparq and Pulse and would like to discuss..."
                    className="w-full text-sm bg-slate-50 dark:bg-[#07090E]/60 border border-slate-200/80 dark:border-white/[0.08] rounded-xl p-2.5 sm:p-3 text-slate-900 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 resize-none"
                  />
                </div>

                {/* Triple Dispatch Options: Web Gmail (100% reliable) + Default Client + Copy */}
                <div className="pt-1 space-y-2">
                  <button
                    type="button"
                    onClick={handleSendGmail}
                    className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-all shadow-sm active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
                    <span>Send via Gmail (Web Browser)</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                  </button>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={handleSendMailto}
                      className="min-h-[40px] inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-[11px] font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/[0.08] transition-colors active:scale-95"
                      title="Open in your computer or phone's installed email app"
                    >
                      <Mail className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                      <span>Default Mail App</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleCopyDraft}
                      className="min-h-[40px] inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-[11px] font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/[0.08] transition-colors active:scale-95"
                      title="Copy complete pre-filled draft to clipboard"
                    >
                      <Copy className="w-3.5 h-3.5 text-amber-500" />
                      <span>Copy Draft Note</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <p className="mt-2 text-[10px] font-mono text-center text-slate-400 dark:text-slate-500">
              Opens directly in Gmail web compose or your default email client with recipient and draft pre-filled.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
