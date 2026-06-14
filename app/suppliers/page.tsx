'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SuppliersPage() {
  const [search, setSearch] = useState('');

  const suppliers = [
    { name: "Tata Components", country: "India", material: "Steel", quality: "94%", leadTime: "12 Days", risk: "Low" },
    { name: "Shanghai SemiTech", country: "China", material: "Semiconductors", quality: "88%", leadTime: "27 Days", risk: "High" },
    { name: "Samsung SDI", country: "South Korea", material: "Battery Cells", quality: "96%", leadTime: "10 Days", risk: "Low" },
    { name: "Panasonic Energy", country: "Japan", material: "Battery Packs", quality: "92%", leadTime: "14 Days", risk: "Medium" },
  ];

  const filtered = suppliers.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#030712] text-white p-6 lg:p-8 space-y-6 selection:bg-cyan-500/30">
      
      {/* 1. HEADER LOGO MATRIX SECTION */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 border-b border-slate-800/80 pb-5">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-black bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent tracking-tight">
              Supplier Intelligence Center
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 uppercase tracking-widest shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              AI Core Activated
            </span>
          </div>
          <p className="text-sm text-slate-400 mt-1">Real-time procurement tracking & global logistics node orchestration.</p>
        </div>

        {/* CONTROLS SEARCH ELEMENT */}
        <div className="flex flex-wrap items-center gap-3">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search supplier matrix..."
            className="bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2.5 text-xs w-64 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10 transition-all outline-none text-slate-200 placeholder:text-slate-500 shadow-inner"
          />
          {["Country", "Material", "Risk"].map((f) => (
            <select
              key={f}
              className="bg-slate-950/80 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-400 cursor-pointer outline-none hover:border-slate-700 transition-colors"
            >
              <option>All {f}s</option>
            </select>
          ))}
        </div>
      </div>

      {/* CORE DISPLAY HUB CONTAINER */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-stretch">
        
        {/* ==================== LEFT WING PANEL ==================== */}
        <div className="xl:col-span-4 flex flex-col gap-5">
          
          {/* COMFORTABLE EXPANDED KPI CARDS */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Total Active Node", value: "247", glowColor: "hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]", textStyle: "text-cyan-400" },
              { label: "Critical High Risk", value: "18", glowColor: "hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(244,63,94,0.15)]", textStyle: "text-rose-400" },
              { label: "Avg Quality Core", value: "91%", glowColor: "hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]", textStyle: "text-emerald-400" },
              { label: "Global Footprint", value: "14 Region", glowColor: "hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]", textStyle: "text-indigo-400" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: i * 0.05 }}
                whileHover={{ scale: 1.04, y: -4 }}
                className={`group relative overflow-hidden rounded-2xl p-5 bg-gradient-to-br from-slate-900 via-[#0b1226] to-[#040817] border-2 border-slate-800/90 shadow-2xl transition-all duration-300 ${item.glowColor}`}
              >
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{item.label}</p>
                <h2 className={`text-2xl font-black mt-2.5 tracking-tight ${item.textStyle}`}>
                  {item.value}
                </h2>
              </motion.div>
            ))}
          </div>

          {/* RISK DISTRIBUTION PANEL */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ 
              borderColor: "rgba(99, 102, 241, 0.5)",
              boxShadow: "0 0 30px rgba(99, 102, 241, 0.1)"
            }}
            className="rounded-2xl p-5 bg-gradient-to-b from-slate-900 via-[#0a1024] to-[#020512] border-2 border-slate-800/90 flex-1 flex flex-col justify-center shadow-2xl relative overflow-hidden group transition-all duration-500"
          >
            <div className="absolute -bottom-20 -left-20 w-44 h-44 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none" />
            <h2 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-5 border-b border-slate-800/60 pb-2">Risk Allocation Framework</h2>
            <div className="space-y-4">
              {[
                { label: "Low Risk Target Operations", value: 72, color: "bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)]" },
                { label: "Medium Risk Buffer Zones", value: 18, color: "bg-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.5)]" },
                { label: "Critical High Anomaly Flag", value: 10, color: "bg-rose-500 shadow-[0_0_12px_rgba(244,63,94,0.5)]" },
              ].map((item) => (
                <div key={item.label} className="text-xs">
                  <div className="flex justify-between text-slate-200 mb-1.5 font-bold text-[11px]">
                    <span>{item.label}</span>
                    <span className="font-black text-white">{item.value}%</span>
                  </div>
                  <div className="h-2 bg-slate-950 rounded-full overflow-hidden p-[2px] border border-slate-800">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.value}%` }}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                      className={`${item.color} h-full rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* ==================== RIGHT WING PANEL (FIXED SCROLL AND PREMIUM HOVERS) ==================== */}
        <div className="xl:col-span-8 flex flex-col gap-5">
          
          {/* SCROLL CONTAINER WITH WEBKIT SUPPORTS FOR ULTRA SMOOTH ACTION */}
          <div className="space-y-3 max-h-[360px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-slate-950/40 hover:scrollbar-thumb-cyan-500/40 transition-colors duration-300 rounded-xl style-scroll">
            <style jsx global>{`
              /* Core fix for inner component smooth mouse tracking scrolling */
              .style-scroll {
                scroll-behavior: smooth;
                -webkit-overflow-scrolling: touch;
              }
              .style-scroll::-webkit-scrollbar {
                width: 6px;
              }
              .style-scroll::-webkit-scrollbar-track {
                background: rgba(2, 6, 23, 0.4);
                border-radius: 999px;
              }
              .style-scroll::-webkit-scrollbar-thumb {
                background: rgba(51, 65, 85, 0.8);
                border-radius: 999px;
                transition: background 0.2s ease;
              }
              .style-scroll:hover::-webkit-scrollbar-thumb {
                background: rgba(6, 182, 212, 0.4);
              }
            `}</style>

            <AnimatePresence mode="popLayout">
              {filtered.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  whileHover={{ 
                    scale: 1.015, 
                    backgroundColor: 'rgba(14, 26, 59, 0.7)',
                    borderColor: 'rgba(6, 182, 212, 0.5)',
                    boxShadow: '0 10px 30px rgba(6, 182, 212, 0.12)'
                  }}
                  className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-[#0a0f24] to-[#040814] border-2 border-slate-800/80 transition-all cursor-pointer shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="h-2 w-2 rounded-full bg-cyan-400 mt-2 shadow-[0_0_10px_#22d3ee] shrink-0 group-hover:scale-125 transition-transform" />
                    <div>
                      <h3 className="text-base font-black text-white group-hover:text-cyan-400 transition-colors duration-200 tracking-wide">
                        {s.name}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5 font-semibold">
                        📍 {s.country} <span className="text-slate-700 px-1">|</span> Sourcing: <span className="text-slate-300 font-bold">{s.material}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-bold shrink-0 ml-6 sm:ml-0">
                    <span className="text-slate-200 bg-slate-900 border border-slate-700/60 px-3 py-1 rounded-lg shadow-sm group-hover:border-cyan-500/20 transition-colors">
                      ⭐ {s.quality} Quality
                    </span>
                    <span className="text-slate-200 bg-slate-900 border border-slate-700/60 px-3 py-1 rounded-lg shadow-sm group-hover:border-cyan-500/20 transition-colors">
                      ⏱️ {s.leadTime}
                    </span>
                    <span className={`w-20 text-center py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-md transition-all duration-300 ${
                      s.risk === "High" ? "bg-red-500/20 text-red-400 border border-red-500/40 group-hover:bg-red-500/30" :
                      s.risk === "Medium" ? "bg-amber-500/20 text-amber-400 border border-amber-500/40 group-hover:bg-amber-500/30" :
                      "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 group-hover:bg-emerald-500/30"
                    }`}>
                      {s.risk} Risk
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* ADVANCED ADVISORY LABS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Top Performance Node", value: "Samsung SDI", color: "cyan", hoverGlow: "hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]" },
              { title: "Active Risk Disruption", value: "Shanghai SemiTech", color: "red", hoverGlow: "hover:border-rose-500/40 hover:shadow-[0_0_20px_rgba(244,63,94,0.1)]" },
              { title: "AI Route Recommendation", value: "Diversify to Vietnam", color: "green", hoverGlow: "hover:border-emerald-500/40 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)]" },
            ].map((a, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className={`group rounded-2xl p-4 bg-gradient-to-b from-slate-900 to-[#050a1a] border-2 border-slate-800/80 shadow-2xl relative overflow-hidden transition-all duration-300 ${a.hoverGlow}`}
              >
                <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">{a.title}</p>
                <h3 className={`text-sm font-black mt-2 tracking-wide truncate ${
                  a.color === "red" ? "text-rose-400" :
                  a.color === "green" ? "text-emerald-400" : "text-cyan-400"
                }`}>
                  {a.value}
                </h3>
              </motion.div>
            ))}
          </div>

        </div>

      </div>

    </div>
  );
}