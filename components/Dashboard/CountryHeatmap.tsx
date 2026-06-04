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
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
        <h2 className="text-xl font-semibold text-white">
          Country Risk Heatmap
        </h2>
  
        <p className="text-slate-400 text-sm mt-1 mb-6">
          Geographical risk analysis
        </p>
  
        <div className="space-y-5">
          <RiskBar
            country="India"
            value={82}
            color="bg-yellow-500"
          />
  
          <RiskBar
            country="China"
            value={94}
            color="bg-red-500"
          />
  
          <RiskBar
            country="Vietnam"
            value={61}
            color="bg-green-500"
          />
  
          <RiskBar
            country="Japan"
            value={48}
            color="bg-green-500"
          />
  
          <RiskBar
            country="South Korea"
            value={71}
            color="bg-yellow-500"
          />
        </div>
      </div>
    );
  }