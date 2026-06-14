'use client';

import { useDashboard } from '@/context/DashboardContext';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

export default function RiskDistribution() {
  const { data } = useDashboard();

  const riskDistribution = data.riskDistribution;
  const totalSuppliers = data.suppliers;

  const colors = {
    Low: '#22c55e',
    Medium: '#eab308',
    High: '#ef4444',
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
      <h2 className="text-xl font-semibold text-white">
        Risk Distribution
      </h2>

      <p className="text-slate-400 text-sm mt-1">
        Supplier risk overview
      </p>

      <div className="w-full h-[250px] mt-6">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={riskDistribution}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={5}
            >
              {riskDistribution.map((entry, index) => (
                <Cell
                  key={index}
                  fill={
                    colors[
                      entry.risk as keyof typeof colors
                    ]
                  }
                />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor: '#0f172a',
                border: '1px solid #334155',
                borderRadius: '12px',
                color: '#fff',
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="text-center mb-4">
        <p className="text-2xl font-bold text-white">
          {totalSuppliers}
        </p>

        <p className="text-slate-400 text-sm">
          Total Suppliers
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {riskDistribution.map((item) => (
          <div
            key={item.risk}
            className="text-center"
          >
            <p
              style={{
                color:
                  colors[
                    item.risk as keyof typeof colors
                  ],
              }}
              className="text-2xl font-bold"
            >
              {item.value}
            </p>

            <p className="text-slate-400 text-sm">
              {item.risk}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}