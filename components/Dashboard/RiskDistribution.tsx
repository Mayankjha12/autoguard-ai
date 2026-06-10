'use client';

import { useDashboard } from '@/context/DashboardContext';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export default function RiskDistribution() {
  const { data } = useDashboard();
  
  const riskDistribution = data.riskDistribution;
  const totalSuppliers = data.suppliers;
  
  const colors = {
    'Low': '#22c55e',
    'Medium': '#eab308',
    'High': '#ef4444'
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
      <h2 className="text-xl font-semibold text-white">
        Risk Distribution
      </h2>

      <p className="text-slate-400 text-sm mt-1">
        Supplier risk overview
      </p>

      <div className="flex justify-center py-8">
        <ResponsiveContainer width={200} height={200}>
          <PieChart>
            <Pie
              data={riskDistribution}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={5}
              dataKey="value"
            >
              {riskDistribution.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[entry.risk as keyof typeof colors]} />
              ))}
            </Pie>
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
          <div key={item.risk} className="text-center">
            <p style={{ color: colors[item.risk as keyof typeof colors] }} className="text-2xl font-bold">
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