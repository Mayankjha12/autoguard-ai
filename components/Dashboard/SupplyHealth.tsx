'use client';

import { useDashboard } from '@/context/DashboardContext';

export default function SupplyHealth() {
  const { data } = useDashboard();

  const healthScore = data.inventoryHealth;

  const logisticsScore = Math.min(
    100,
    healthScore + 8
  );

  const sourcingScore = Math.max(
    50,
    100 - data.riskSuppliers
  );

  const qualityScore = Math.min(
    100,
    healthScore + 4
  );

  const borderColor =
    healthScore >= 85
      ? 'border-green-500'
      : healthScore >= 70
      ? 'border-yellow-500'
      : 'border-red-500';

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 h-[420px]">
      <h2 className="text-xl font-semibold text-white">
        Supply Chain Health
      </h2>

      <p className="text-slate-400 text-sm mt-1">
        Composite resilience score
      </p>

      <div className="flex justify-center items-center h-[240px]">
        <div className="relative">
          <div
            className={`w-48 h-48 rounded-full border-[14px] ${borderColor} flex items-center justify-center`}
          >
            <div>
              <h3 className="text-5xl font-bold text-white text-center">
                {healthScore}
              </h3>

              <p className="text-slate-400 text-center">
                Score
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="bg-slate-800 rounded-xl p-3 text-center">
          <p className="text-green-400 font-bold">
            {logisticsScore}%
          </p>

          <p className="text-slate-400 text-xs">
            Logistics
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-3 text-center">
          <p className="text-yellow-400 font-bold">
            {sourcingScore}%
          </p>

          <p className="text-slate-400 text-xs">
            Sourcing
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-3 text-center">
          <p className="text-cyan-400 font-bold">
            {qualityScore}%
          </p>

          <p className="text-slate-400 text-xs">
            Quality
          </p>
        </div>
      </div>
    </div>
  );
}