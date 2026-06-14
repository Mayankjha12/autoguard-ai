'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function RiskEnginePage() {
  const [scenario, setScenario] = useState("");
const [loading, setLoading] = useState(false);

const [riskData, setRiskData] = useState({
  riskScore: 72,
  disruptions: 14,
  accuracy: 92,
  inventoryHealth: 84,
  recommendation: "Shift Route to Vietnam",
savings: "$4.2M Sourcing Offset",
});

const analyzeScenario = async () => {
  if (!scenario.trim()) return;

  setLoading(true);

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: `
You are a JSON API.

Return ONLY valid JSON.
No explanation.
No reasoning.
No markdown.
No thinking.

Analyze this supply chain scenario:

${scenario}

Estimate:

1. Risk Score (0-100)
2. Predicted Disruptions
3. Forecast Accuracy
4. Inventory Health
5. Recommended Action
6. Estimated Savings

Return ONLY:

{
  "riskScore": 0,
  "disruptions": 0,
  "accuracy": 0,
  "inventoryHealth": 0,
  "recommendation": "",
  "savings": ""
}

IMPORTANT:

disruptions must be a NUMBER, not a list.
`
      }),
    });

    const data = await res.json();

    try {
      const raw = data.response || "";
    
      const jsonMatch = raw.match(/\{[\s\S]*\}/);
    
      if (!jsonMatch) {
        throw new Error("No JSON Found");
      }
    
      const parsed = JSON.parse(jsonMatch[0]);
    
      setRiskData({
        riskScore: parsed.riskScore ?? 72,
        disruptions: parsed.disruptions ?? 14,
        accuracy: parsed.accuracy ?? 92,
        inventoryHealth: parsed.inventoryHealth ?? 84,
        recommendation: parsed.recommendation ?? "Monitor Supply Chain",
        savings: parsed.savings ?? "$1M",
      });
    
    } catch (e) {
      console.log("JSON Parse Failed", e);
    }

  } catch (err) {
    console.log(err);
  }

  setLoading(false);
};
  return (
    <div className="min-h-screen bg-[#030712] text-white p-5 lg:p-6 space-y-6 selection:bg-cyan-500/30">

      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-black bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent tracking-tight">
              Risk Engine Dashboard
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-rose-500/10 border border-rose-500/30 text-rose-400 uppercase tracking-widest shadow-[0_0_15px_rgba(244,63,94,0.15)]">
              AI Predictor Live
            </span>
          </div>
          <p className="text-sm text-slate-400 mt-1">Real-time macro disruption forecasting, XGBoost modeling, and threat mitigation.</p>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
  <p className="text-xs font-bold text-slate-400 mb-2 uppercase">
    AI Scenario Analysis
  </p>


  <div className="flex gap-3">
    <input
      value={scenario}
      onChange={(e) => setScenario(e.target.value)}
      placeholder="Example: Semiconductor sourcing from China with 30 day delays..."
      className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm"
    />

    <button
      onClick={analyzeScenario}
      className="px-6 rounded-xl bg-cyan-500 text-black font-bold"
    >
      {loading ? "Analyzing..." : "Analyze"}
    </button>
  </div>
</div>

      

      {/* ULTRA-COMPACT COMFORTABLE KPI MATRIX */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            label: "Avg Risk Score",
            value: `${riskData.riskScore}%`,
            glowColor: "hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(244,63,94,0.15)]",
            textStyle: "text-rose-400"
          },
          {
            label: "Predicted Disruptions",
            value: `${riskData.disruptions} Nodes`,
            glowColor: "hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(244,63,94,0.15)]",
            textStyle: "text-amber-400"
          },
          {
            label: "Forecast Accuracy",
            value: `${riskData.accuracy}%`,
            glowColor: "hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(244,63,94,0.15)]",
            textStyle: "text-cyan-400"
          },
          {
            label: "Inventory Health",
            value: `${riskData.inventoryHealth}%`,
            glowColor: "hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(244,63,94,0.15)]",
            textStyle: "text-emerald-400"
          }
        ].map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: i * 0.04 }}
            whileHover={{ scale: 1.03, y: -3 }}
            className={`group relative overflow-hidden rounded-2xl p-4 bg-gradient-to-br from-slate-900 via-[#0b1226] to-[#040817] border-2 border-slate-800/90 shadow-xl transition-all duration-300 ${item.glowColor}`}
          >
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{item.label}</p>
            <h2 className={`text-2xl font-black mt-2 tracking-tight ${item.textStyle}`}>
              {item.value}
            </h2>
          </motion.div>
        ))}
      </div>

      {/* MAIN SYSTEM WORKSPACE MATRIX */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-stretch">
        
        {/* ================= LEFT GRID MODULE (THREATS & ML ENGINE) ================= */}
        <div className="xl:col-span-5 flex flex-col gap-5">
          
          {/* COMPACT ACTIVE THREATSTREAM */}
          <div className="rounded-2xl p-5 bg-gradient-to-b from-slate-900 via-[#0a1024] to-[#020512] border-2 border-slate-800/90 shadow-2xl space-y-3.5">
            <h2 className="text-xs font-black text-slate-400 uppercase tracking-widest border-b border-slate-800/60 pb-2">Active Strategic Threats</h2>
            <div className="grid grid-cols-3 gap-3">
              {[
                { title: "Taiwan Chip", status: "Critical", border: "hover:border-red-500/40", bg: "bg-red-500/10", text: "text-red-400" },
                { title: "Red Sea Ship", status: "Delayed", border: "hover:border-amber-500/40", bg: "bg-amber-500/10", text: "text-amber-400" },
                { title: "Vietnam Cap", status: "Stable", border: "hover:border-emerald-500/40", bg: "bg-emerald-500/10", text: "text-emerald-400" },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ scale: 1.04, y: -2 }}
                  className={`p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-center cursor-pointer transition-colors ${item.border}`}
                >
                  <p className="text-slate-400 text-[11px] font-bold truncate">{item.title}</p>
                  <span className={`inline-block mt-2 px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wide ${item.bg} ${item.text}`}>
                    {item.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ML RISK PREDICTOR COMPONENT */}
          <div className="rounded-2xl p-5 bg-gradient-to-b from-slate-900 via-[#0a1024] to-[#020512] border-2 border-slate-800/90 shadow-2xl flex-1 flex flex-col justify-center">
            <h2 className="text-xs font-black text-slate-400 uppercase tracking-widest border-b border-slate-800/60 pb-2 mb-4">ML Risk Classification Engine</h2>
            <div className="space-y-4">
              {[
                { name: "Shanghai SemiTech Model", value: 87, color: "bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.5)]" },
                { name: "Samsung SDI Node Factor", value: 22, color: "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" },
              ].map((s) => (
                <div key={s.name} className="text-xs">
                  <div className="flex justify-between text-slate-200 mb-1.5 font-bold text-[11px]">
                    <span>{s.name}</span>
                    <span className="font-black text-white">{s.value}%</span>
                  </div>
                  <div className="h-2 bg-slate-950 rounded-full overflow-hidden p-[2px] border border-slate-800">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${s.value}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={`h-full ${s.color} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ================= RIGHT GRID MODULE (XGBOOST DEMAND CHART) ================= */}
        <div className="xl:col-span-7">
          <div className="h-full rounded-2xl p-5 bg-gradient-to-br from-[#0a0f24] to-[#040814] border-2 border-slate-800/80 shadow-2xl flex flex-col justify-between group hover:border-cyan-500/30 transition-all duration-300">
            <div>
              <h2 className="text-xs font-black text-slate-400 uppercase tracking-widest border-b border-slate-800/60 pb-2">Demand Forecast Model (XGBoost)</h2>
              <p className="text-[11px] text-slate-500 mt-1 font-semibold">Predictive telemetry scaling analytics across running quarter matrices</p>
            </div>

            {/* CHART DISPLAY BLOCK */}
            <div className="mt-4 h-[150px] rounded-xl border border-slate-900 bg-slate-950/40 flex items-end justify-between gap-3 p-4 relative overflow-hidden">
              {[60, 90, 75, 120, 140, 110].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center group/bar cursor-pointer">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${h}px` }}
                    transition={{ type: "spring", stiffness: 200, damping: 18, delay: i * 0.05 }}
                    className="w-full bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t-md shadow-[0_0_15px_rgba(6,182,212,0.2)] group-hover/bar:from-indigo-500 group-hover/bar:to-cyan-400 transition-all duration-300 relative"
                  />
                  <span className="text-[9px] text-slate-600 font-bold mt-1.5 group-hover/bar:text-cyan-400 transition-colors">M{i+1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* GEOPOLITICAL & STOCK MATRIX SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* STOCKOUT LAB CONTROLLER */}
        <div className="rounded-2xl p-5 bg-gradient-to-br from-slate-900 to-[#04091a] border-2 border-slate-800/80 shadow-2xl space-y-4 hover:border-indigo-500/30 transition-colors">
          <h2 className="text-xs font-black text-slate-400 uppercase tracking-widest border-b border-slate-800/60 pb-2">Stockout Operational Prediction</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: "Battery Modules", days: 9, border: "border-rose-500/20", color: "text-rose-400 bg-rose-500/5" },
              { name: "Semiconductors Matrix", days: 14, border: "border-amber-500/20", color: "text-amber-400 bg-amber-500/5" },
            ].map((item) => (
              <motion.div 
                key={item.name} 
                whileHover={{ scale: 1.02, y: -2 }}
                className={`p-4 rounded-xl border bg-slate-950/40 ${item.border} shadow-inner`}
              >
                <p className="text-[11px] font-bold text-slate-400 truncate">{item.name}</p>
                <p className={`text-2xl font-black mt-2 tracking-tight ${item.color.split(' ')[0]}`}>
                  {item.days} Days
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* GEOPOLITICAL LOGISTICS SUMMARY PANEL */}
        <div className="rounded-2xl p-5 bg-gradient-to-br from-slate-900 to-[#04091a] border-2 border-slate-800/80 shadow-2xl space-y-4 hover:border-indigo-500/30 transition-colors">
          <h2 className="text-xs font-black text-slate-400 uppercase tracking-widest border-b border-slate-800/60 pb-2">Geopolitical Risk Vector Heat</h2>
          <div className="grid grid-cols-3 gap-3">
            {[
              { country: "China Sector", risk: "High Risk", style: "bg-rose-500/10 text-rose-400 border-rose-500/20" },
              { country: "Vietnam Node", risk: "Low Risk", style: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
              { country: "Japan Channel", risk: "Med Risk", style: "bg-amber-500/10 text-amber-400 border-amber-500/20" },
            ].map((g) => (
              <motion.div
                key={g.country}
                whileHover={{ scale: 1.03 }}
                className={`flex flex-col justify-center items-center p-3 rounded-xl bg-slate-950/50 border text-center cursor-pointer ${g.style}`}
              >
                <span className="text-[11px] font-bold text-slate-300 truncate w-full">{g.country}</span>
                <span className="text-[10px] font-black uppercase mt-1.5">{g.risk}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* CORE AI LOGISTICS RADAR ANALYSIS EXPLANATION BOX */}
      <div className="relative overflow-hidden rounded-2xl border-2 border-slate-800 bg-gradient-to-r from-[#0a0f24] via-[#050c1e] to-[#040814] p-5 hover:border-cyan-500/30 transition-all duration-300 shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none" />
        
        <div className="relative z-10">
          <div className="flex items-center justify-between border-b border-slate-800/60 pb-2.5">
            <h2 className="text-xs font-black text-slate-400 uppercase tracking-widest">
              AI Copilot Risk Mitigation Vector
            </h2>
            <span className="px-2 py-0.5 rounded-md text-[9px] font-black bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 uppercase tracking-widest shadow-[0_0_10px_rgba(6,182,212,0.1)]">
              AI Generation Layer
            </span>
          </div>

          <p className="text-xs text-slate-300 mt-3 leading-6 font-medium">
            Systemic volatility spiked in East Asia channels due to microcomponent delays. AI Core tracking systems recommend dynamic inventory balancing across alternative routes in South Asia.
          </p>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              {
                title: "Recommended Action",
                value: riskData.recommendation,
                style: "text-cyan-400 border-cyan-500/20"
              },
              {
                title: "Expected Savings Matrix",
                value: riskData.savings,
                style: "text-emerald-400 border-emerald-500/20"
              },
              {
                title: "Risk Anomaly Reduction",
                value: `${Math.floor(riskData.riskScore / 2)}% Reduction`,
                style: "text-emerald-400 border-emerald-500/20"
              }
            ].map((box, i) => (
              <div key={i} className={`bg-slate-950/40 p-3 rounded-xl border ${box.style.split(' ')[1]} shadow-inner`}>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{box.title}</p>
                <p className={`mt-1 text-xs font-black truncate ${box.style.split(' ')[0]}`}>
                  {box.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}