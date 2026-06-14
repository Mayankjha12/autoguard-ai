'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function RecommendationsPage() {
  const [aiRecommendations, setAiRecommendations] = useState('');
  const [loading, setLoading] = useState(false);

  const generateRecommendations = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: `
            Analyze automotive supply chain risks.
            Provide Concise Executive Recommendations.
          `,
        }),
      });
      const data = await res.json();
      setAiRecommendations(data.response || data.reply || 'No recommendations generated.');
    } catch {
      setAiRecommendations('Unable to generate recommendations.');
    }
    setLoading(false);
  };

  return (
    <div className="max-h-screen bg-[#030712] text-white p-4 space-y-4 selection:bg-purple-500/30 overflow-hidden flex flex-col h-screen">

      {/* HEADER INTEGRATED ACTIONS PANEL */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/60 pb-4 shrink-0">
        <div>
          <div className="flex items-center gap-2.5">
            <h1 className="text-xl md:text-2xl font-black bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent tracking-tight">
              Sourcing & Supply Chain Optimization
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-purple-500/10 border border-purple-500/30 text-purple-400 uppercase tracking-widest shadow-[0_0_15px_rgba(168,85,247,0.15)] shrink-0">
              AI Core Active
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">Automotive procurement matrices, substitution vectors, and risk offsets.</p>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={generateRecommendations}
          disabled={loading}
          className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-400 hover:to-cyan-400 font-black text-black px-5 h-[42px] rounded-xl text-xs uppercase tracking-wider transition-all disabled:opacity-50 shadow-[0_4px_20px_rgba(6,182,212,0.2)] shrink-0 flex items-center justify-center"
        >
          {loading ? 'Generating Stream...' : 'Trigger Recommendations'}
        </motion.button>
      </div>

      {/* COMPACT INTUITIVE KPI BAR */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 shrink-0">
        {[
          { label: 'Risk Reduced Factor', value: '34%', border: 'hover:border-emerald-500/40 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)]', style: 'text-emerald-400' },
          { label: 'Aggregated Savings', value: '$4.2M', border: 'hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]', style: 'text-cyan-400' },
          { label: 'Lead Time Saved', value: '11 Days', border: 'hover:border-amber-500/40 hover:shadow-[0_0_20px_rgba(245,158,11,0.1)]', style: 'text-amber-400' },
          { label: 'AI Confidence Level', value: '92%', border: 'hover:border-purple-500/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.1)]', style: 'text-purple-400' },
        ].map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.03 }}
            whileHover={{ scale: 1.02 }}
            className={`rounded-xl p-3.5 bg-gradient-to-br from-slate-900 via-[#0b1226] to-[#040817] border border-slate-800 shadow-lg transition-all duration-300 ${item.border}`}
          >
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.label}</p>
            <h2 className={`text-xl md:text-2xl font-black mt-1 tracking-tight ${item.style}`}>{item.value}</h2>
          </motion.div>
        ))}
      </div>

      {/* CORE WORKSPACE GRID DOCK */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch flex-1 min-h-0 overflow-hidden">
        
        {/* ================= LEFT SPLIT LAYOUT MODULE ================= */}
        <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-4 h-full min-h-0">
          
          {/* LIVE AI TEXT RESPONSE STREAM (No-Gap Collapsible Area) */}
          <AnimatePresence>
            {aiRecommendations && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="relative overflow-hidden rounded-xl border border-cyan-500/30 bg-slate-950 p-4 shadow-[0_0_25px_rgba(6,182,212,0.05)] shrink-0"
              >
                <div className="flex items-center justify-between border-b border-slate-800/60 pb-2 mb-2.5">
                  <h2 className="text-xs font-black text-slate-400 uppercase tracking-widest">Live Optimization Framework</h2>
                  <span className="px-2 py-0.5 rounded text-[9px] font-black bg-cyan-500/10 text-cyan-400 uppercase border border-cyan-500/20">Active Analysis</span>
                </div>
                <div className="text-xs md:text-sm text-slate-300 leading-6 whitespace-pre-wrap max-h-[120px] overflow-y-auto pr-1 scrollbar-thin font-medium">
                  {aiRecommendations}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ALTERNATE SUPPLIERS MATRIX BLOCK */}
          <div className="rounded-xl p-4 bg-gradient-to-b from-slate-900 via-[#0a1024] to-[#020512] border border-slate-800 shadow-xl flex-1 flex flex-col min-h-0">
            <h2 className="text-xs font-black text-slate-400 uppercase tracking-widest border-b border-slate-800/60 pb-2 mb-3 shrink-0">Alternate Supplier Diversification</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1 overflow-y-auto pr-0.5 scrollbar-thin items-stretch">
              {[
                { current: 'Shanghai SemiTech Core', risk: '87%', recommended: 'Samsung SDI Corp', reduction: '65% Offset' },
                { current: 'Battery Matrix China Ltd', risk: '79%', recommended: 'Panasonic Energy Global', reduction: '51% Offset' },
              ].map((s) => (
                <div
                  key={s.current}
                  className="p-4 rounded-xl bg-slate-950/50 border border-slate-800 flex flex-col justify-between transition-colors hover:border-purple-500/30 group"
                >
                  <div>
                    <span className="text-[9px] font-black text-slate-500 uppercase block tracking-widest">Current Active Node</span>
                    <h4 className="text-sm font-black text-white mt-1 group-hover:text-purple-400 transition-colors truncate">{s.current}</h4>
                    <p className="text-xs font-bold text-rose-400 mt-1">Risk Density: {s.risk}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-900 space-y-1.5">
                    <span className="text-xs font-black text-cyan-400 flex items-center gap-1">⚡ Rec: {s.recommended}</span>
                    <p className="text-xs font-black text-emerald-400">Risk Variance: {s.reduction}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* COMPACT BOARD REPORT RECAP SUMMARY */}
          <div className="rounded-xl p-4 bg-gradient-to-r from-slate-900 via-[#0a122c] to-[#04091d] border border-slate-800 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-cyan-500/20 transition-all duration-300 relative overflow-hidden group shrink-0">
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-cyan-500/5 to-transparent pointer-events-none" />
            
            <div className="flex items-center gap-4 flex-1">
              <div className="hidden sm:flex items-center justify-center h-11 w-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0 shadow-[0_0_15px_rgba(6,182,212,0.05)]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">Executive Board Level Briefing</h3>
                  <span className="text-[9px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded font-black tracking-wide uppercase">Compiled</span>
                </div>
                <p className="text-xs text-slate-300 mt-1 leading-5 font-medium max-w-xl">
                  Supply chain models indicate a <span className="text-emerald-400 font-extrabold">$4.2M Sourcing Offset</span> while compressing volatile components safely by <span className="text-cyan-400 font-extrabold">34% efficiency variables</span>.
                </p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-5 h-[42px] rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-black text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 shrink-0 border border-cyan-300/20 w-full sm:w-auto cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Export PDF
            </motion.button>
          </div>

        </div>

        {/* ================= RIGHT SPLIT LAYOUT MODULE ================= */}
        <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-4 h-full min-h-0 overflow-y-auto pr-0.5 scrollbar-thin">
          
          {/* MATERIAL SUBSTITUTION MATRIX & INTEGRATED TOTALS */}
          <div className="grid grid-cols-2 gap-3 shrink-0">
            <div className="rounded-xl p-4 bg-gradient-to-b from-slate-900 to-[#020512] border border-slate-800 shadow-md flex flex-col justify-between min-h-[110px]">
              <div>
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-800/60 pb-1.5">Substitution Engine</h3>
                <p className="text-[10px] text-slate-500 font-bold mt-1.5">Rare Earth Magnet</p>
                <p className="text-xs font-black text-cyan-400 mt-1 truncate">🔄 Alt: Ferrite Core</p>
              </div>
              <div className="mt-2 pt-2 border-t border-slate-950 flex justify-between text-[10px] font-black">
                <span className="text-emerald-400">-27% Cost</span>
                <span className="text-purple-400">88% Acc</span>
              </div>
            </div>

            <div className="rounded-xl p-4 bg-gradient-to-b from-[#0a0f24] to-[#040814] border border-purple-500/10 shadow-md flex flex-col justify-center text-center relative overflow-hidden min-h-[110px]">
              <div className="absolute -bottom-8 -right-8 w-20 h-24 bg-purple-500/5 blur-xl rounded-full" />
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Aggregate Net Savings</p>
              <h3 className="text-2xl md:text-3xl font-black text-emerald-400 tracking-tight mt-1">$1.8M</h3>
              <p className="text-[9px] text-slate-500 font-extrabold uppercase mt-0.5 tracking-wider">Annual Yield</p>
            </div>
          </div>

          {/* CRITICAL EXECUTIVE ACTION PLAN LAYERS */}
          <div className="rounded-xl p-4 bg-gradient-to-b from-slate-900 via-[#0a1024] to-[#020512] border border-slate-800 shadow-md flex flex-col justify-between shrink-0">
            <h2 className="text-xs font-black text-slate-400 uppercase tracking-widest border-b border-slate-800/60 pb-2 mb-2.5">Strategic Priority Framework</h2>
            <div className="space-y-2">
              {[
                { step: 'Priority 1', text: 'Shift semiconductor nodes to Vietnam channels.', style: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' },
                { step: 'Priority 2', text: 'Stagger buffer inventory allocation safely up 12%.', style: 'bg-amber-500/10 border-amber-500/20 text-amber-400' },
                { step: 'Priority 3', text: 'Decommission high variance battery nodes.', style: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400' },
              ].map((item) => (
                <div key={item.step} className="flex items-center justify-between gap-3 p-2.5 rounded-xl bg-slate-950/60 border border-slate-950/40">
                  <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase border tracking-wider shrink-0 ${item.style}`}>{item.step}</span>
                  <p className="text-xs text-slate-300 font-bold flex-1 truncate">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* DYNAMIC COMPACT AI FEED LOGS */}
          <div className="rounded-xl p-4 bg-gradient-to-b from-slate-900 via-[#0a1024] to-[#020512] border border-slate-800 shadow-xl flex-1 min-h-[140px] flex flex-col justify-between">
            <h2 className="text-xs font-black text-slate-400 uppercase tracking-widest border-b border-slate-800/60 pb-2 mb-2 shrink-0">Automated Recommendation Feed</h2>
            <div className="space-y-2 flex-1 overflow-y-auto pr-1 scrollbar-thin flex flex-col justify-between">
              {[
                "Shift 40% sourcing from China to Vietnam channels.",
                "Increase safety stock for battery modules by 12%.",
                "Replace volatile Sourcing A routes with Samsung SDI.",
                "Reduce high-variance dependencies on Red Sea transits.",
              ].map((text, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-xl bg-slate-950/40 border border-slate-950 text-xs text-slate-400 font-semibold hover:border-purple-500/20 hover:text-slate-200 transition-all cursor-pointer truncate flex-1 flex items-center mb-1 last:mb-0"
                >
                  ⚙️ {text}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}