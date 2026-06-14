'use client';

import { useDashboard } from '@/context/DashboardContext';
import { motion } from 'framer-motion';

function AlertCard({ title, description, color, index }: { title: string; description: string; color: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.23, 1, 0.32, 1] }}
      whileHover={{ 
        scale: 1.02,
        backgroundColor: 'rgba(15, 23, 42, 0.6)',
        borderColor: 'rgba(6, 182, 212, 0.4)',
        boxShadow: '0 4px 20px rgba(6, 182, 212, 0.08)'
      }}
      className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-950/60 p-4 cursor-pointer transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10 flex gap-3.5 items-start">
        <motion.div 
          className={`h-3 w-3 rounded-full mt-1 shrink-0 ${color} shadow-[0_0_12px_currentColor]`}
          whileHover={{ scale: 1.25 }}
        />
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-bold text-slate-100 tracking-wide mb-1 group-hover:text-cyan-400 transition-colors duration-200">
            {title}
          </h3>
          <p className="text-xs text-slate-400 font-medium group-hover:text-slate-300 transition-colors duration-200">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function AIAlerts() {
  const { data } = useDashboard();

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High': return 'bg-red-500 text-red-500';
      case 'Medium': return 'bg-yellow-500 text-yellow-500';
      case 'Low': return 'bg-cyan-500 text-cyan-500';
      default: return 'bg-slate-500 text-slate-500';
    }
  };

  const sortedAlerts = [...data.alerts].sort((a, b) => {
    const priority = { High: 3, Medium: 2, Low: 1 };
    return (priority[b.severity as keyof typeof priority] || 0) - (priority[a.severity as keyof typeof priority] || 0);
  });

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ 
        borderColor: 'rgba(6, 182, 212, 0.4)',
        boxShadow: '0 0 40px rgba(6, 182, 212, 0.06)'
      }}
      className="w-full flex flex-col justify-between rounded-2xl border-2 border-slate-800/80 bg-gradient-to-b from-slate-900 via-[#0b1329] to-[#040814] p-6 shadow-2xl relative overflow-hidden transition-all duration-500 group"
    >
      {/* Background radial ambient flare shadow wrapper */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-500" />
      
      <div className="relative z-10 w-full">
        {/* Fixed Title Block - Whitespace clipping bug completely removed here */}
        <div className="mb-6 flex items-center justify-between gap-4">
          <div className="block text-left">
            <h2 className="text-base font-extrabold text-white tracking-wide uppercase">
              AI Alerts Center
            </h2>
            <p className="text-[11px] text-cyan-400/80 font-semibold tracking-wider mt-0.5 uppercase">
              Real-time infrastructure insights
            </p>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3 py-1 text-[10px] font-bold text-cyan-400 uppercase tracking-widest border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.1)] shrink-0">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Live Engine
          </div>
        </div>

        <div className="mb-4 px-0.5">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Total Diagnostics: <span className="text-cyan-400 font-extrabold">{data.alerts.length}</span>
          </span>
        </div>

        {/* Inner layout list element */}
        <div className="space-y-3 max-h-[350px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
          {sortedAlerts.map((alert, index) => (
            <AlertCard
              key={index}
              index={index}
              title={alert.title}
              description={`${alert.severity} Priority • ${alert.timestamp}`}
              color={getSeverityColor(alert.severity)}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}