'use client';

import { useDashboard } from '@/context/DashboardContext';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default function DemandForecast() {
  const { data } = useDashboard();

  const avgDemand = Math.floor(
    data.demandForecast.reduce(
      (sum, item) => sum + item.demand,
      0
    ) / data.demandForecast.length
  );

  const nextMonth = data.demandForecast[5]?.demand || 0;
  const lastMonth = data.demandForecast[4]?.demand || 0;

  const growthPercent =
    lastMonth > 0
      ? Math.round(
          ((nextMonth - lastMonth) / lastMonth) * 100 * 10
        ) / 10
      : 0;

  return (
    <div className="relative lg:mx-82  sm:mx-auto my-8 w-[88%] max-w-4xl overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-900/80 p-4 shadow-xl backdrop-blur-xl transition-all duration-500 hover:shadow-[0_0_60px_rgba(6,182,212,0.08)] lg:p-5">
      
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent" />

      <div className="relative z-10">

        {/* Header */}
        <div className="mb-5 flex w-full flex-col gap-3 md:flex-row md:items-center md:justify-between">

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-semibold text-white lg:text-3xl">
              Monthly Demand Forecast
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              AI-predicted demand trends and growth insights
            </p>
          </div>

          <button
            onClick={() => window.location.reload()}
            className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-cyan-400 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/20"
          >
            Generate AI Forecast
          </button>

        </div>

        {/* Chart */}
        <div className="mb-5 rounded-3xl border border-slate-700/50 bg-slate-800/50 p-3 backdrop-blur-md">

          <div className="mx-auto h-[220px] w-[96%]">

            <ResponsiveContainer width="100%" height="100%">

              <BarChart
                data={data.demandForecast}
                margin={{
                  top: 10,
                  right: 20,
                  left: 0,
                  bottom: 10,
                }}
              >
                <CartesianGrid
                  stroke="#334155"
                  strokeDasharray="3 3"
                />

                <XAxis
                  dataKey="month"
                  stroke="#94a3b8"
                />

                <YAxis
                  stroke="#94a3b8"
                />

                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0f172a',
                    border: '1px solid #334155',
                    borderRadius: '14px',
                    color: '#fff',
                  }}
                />

                <Bar
                  dataKey="demand"
                  fill="#06b6d4"
                  radius={[12, 12, 0, 0]}
                  barSize={45}
                  animationDuration={1200}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">

          {/* Avg Demand */}
          <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-950/90 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">

            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent" />

            <div className="relative z-10">
              <p className="text-sm text-slate-400">
                Avg Demand
              </p>

              <h3 className="mt-2 text-2xl font-bold text-cyan-400">
                {avgDemand.toLocaleString()}
              </h3>
            </div>

          </div>

          {/* Next Month Forecast */}
          <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-950/90 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">

            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-transparent" />

            <div className="relative z-10">
              <p className="text-sm text-slate-400">
                Next Month Forecast
              </p>

              <h3 className="mt-2 text-2xl font-bold text-green-400">
                {nextMonth.toLocaleString()}
              </h3>
            </div>

          </div>

          {/* Forecast Growth */}
          <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-950/90 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">

            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent" />

            <div className="relative z-10">

              <p className="text-sm text-slate-400">
                Forecast Growth
              </p>

              <h3
                className={`mt-2 text-2xl font-bold ${
                  growthPercent >= 0
                    ? 'text-green-400'
                    : 'text-red-400'
                }`}
              >
                {growthPercent > 0 ? '+' : ''}
                {growthPercent}%
              </h3>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}