'use client';

import { useDashboard } from '@/context/DashboardContext';
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

export default function InventoryTrend() {
  const { data } = useDashboard();

  const trendData = data.demandForecast.map(
    (item) => ({
      month: item.month,
      inventory: Math.max(
        1000,
        item.demand * 3
      ),
    })
  );

  const currentStock =
    trendData[trendData.length - 1]?.inventory || 0;

  const usageRate =
    Math.max(
      3,
      Math.round(
        (data.riskSuppliers /
          data.suppliers) *
          100
      )
    );

  const stockoutRisk =
    Math.max(
      3,
      Math.floor(
        currentStock /
          (trendData[0]?.inventory || 1)
      ) * 2
    );

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
      <h2 className="text-xl font-semibold text-white">
        Inventory Trend
      </h2>

      <p className="text-slate-400 text-sm mt-1">
        30-day inventory movement
      </p>

      <div className="h-[220px] mt-6 rounded-2xl bg-slate-800 p-3">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <LineChart data={trendData}>
            <CartesianGrid
              stroke="#334155"
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="month"
              stroke="#94a3b8"
            />

            <YAxis stroke="#94a3b8" />

            <Tooltip
              contentStyle={{
                backgroundColor: '#0f172a',
                border: '1px solid #334155',
                borderRadius: '12px',
                color: '#fff',
              }}
            />

            <Line
              type="monotone"
              dataKey="inventory"
              stroke="#06b6d4"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-3 mt-5">
        <div className="bg-slate-800 rounded-xl p-3">
          <p className="text-slate-400 text-xs">
            Current Stock
          </p>

          <h3 className="text-xl font-bold text-white mt-1">
            {(currentStock / 1000).toFixed(1)}K
          </h3>
        </div>

        <div className="bg-slate-800 rounded-xl p-3">
          <p className="text-slate-400 text-xs">
            Usage Rate
          </p>

          <h3 className="text-xl font-bold text-yellow-400 mt-1">
            {usageRate}%
          </h3>
        </div>

        <div className="bg-slate-800 rounded-xl p-3">
          <p className="text-slate-400 text-xs">
            Stockout Risk
          </p>

          <h3 className="text-xl font-bold text-red-400 mt-1">
            {stockoutRisk} Days
          </h3>
        </div>
      </div>
    </div>
  );
}