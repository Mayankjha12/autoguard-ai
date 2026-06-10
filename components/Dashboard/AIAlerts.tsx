'use client';

import { useDashboard } from '@/context/DashboardContext';

function AlertCard({
  title,
  description,
  color,
}: {
  title: string;
  description: string;
  color: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800/50 backdrop-blur-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)]">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10 flex gap-4">
        <div
          className={`h-3 w-3 rounded-full mt-2 ${color} shadow-[0_0_12px_currentColor]`}
        />

        <div className="flex-1">
          <h3 className="font-semibold text-white">
            {title}
          </h3>

          <p className="mt-1 text-sm text-slate-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AIAlerts() {
  const { data } = useDashboard();

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High':
        return 'bg-red-500';
      case 'Medium':
        return 'bg-yellow-500';
      case 'Low':
        return 'bg-cyan-500';
      default:
        return 'bg-slate-500';
    }
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-900/80 backdrop-blur-xl p-6 shadow-xl transition-all duration-500 hover:shadow-[0_0_60px_rgba(6,182,212,0.08)]">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent" />

      <div className="relative z-10">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-white">
              AI Alerts Center
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Real-time supply chain intelligence
            </p>
          </div>

          <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-medium text-cyan-400">
            Live Monitoring
          </div>
        </div>

        <div className="mb-6 flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />

          <span className="text-sm text-slate-400">
            {data.alerts.length} Active Alerts
          </span>
        </div>

        <div className="space-y-4">
          {data.alerts.map((alert, index) => (
            <AlertCard
              key={index}
              title={alert.title}
              description={alert.timestamp}
              color={getSeverityColor(alert.severity)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}