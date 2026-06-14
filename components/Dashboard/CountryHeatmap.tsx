'use client';

import { useDashboard } from '@/context/DashboardContext';

function RiskBar({
  country,
  value,
  color,
}: {
  country: string;
  value: number;
  color: string;
}) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-white">
          {country}
        </span>

        <span className="text-slate-400">
          {value}
        </span>
      </div>

      <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
        <div
          className={`h-full ${color}`}
          style={{
            width: `${value}%`,
          }}
        />
      </div>
    </div>
  );
}

export default function CountryHeatmap() {
  const { data } = useDashboard();

  const inventory = data.inventoryHealth;
  const risk = data.riskSuppliers;

  const countries = [
    {
      country: 'India',
      value: Math.min(100, inventory + 5),
    },
    {
      country: 'China',
      value: Math.min(100, risk * 4),
    },
    {
      country: 'Vietnam',
      value: Math.max(40, inventory - 10),
    },
    {
      country: 'Japan',
      value: Math.max(35, inventory - 18),
    },
    {
      country: 'South Korea',
      value: Math.max(45, inventory - 8),
    },
  ];

  const getColor = (value: number) => {
    if (value >= 85) return 'bg-red-500';
    if (value >= 65) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
      <h2 className="text-xl font-semibold text-white">
        Country Risk Heatmap
      </h2>

      <p className="text-slate-400 text-sm mt-1 mb-6">
        Geographical risk analysis
      </p>

      <div className="space-y-5">
        {countries.map((item) => (
          <RiskBar
            key={item.country}
            country={item.country}
            value={item.value}
            color={getColor(item.value)}
          />
        ))}
      </div>
    </div>
  );
}