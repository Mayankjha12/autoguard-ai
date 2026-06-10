'use client';

export default function RiskEnginePage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white p-6 lg:p-10 space-y-10">

      {/* HEADER */}
      <div className="relative overflow-hidden rounded-3xl border border-cyan-500/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.15),transparent_50%)]" />

        <div className="relative z-10">
          <h1 className="text-4xl font-bold tracking-tight">
            Risk Engine
          </h1>
          <p className="text-slate-400 mt-2">
            AI-powered disruption prediction and forecasting
          </p>
        </div>
      </div>

      {/* KPI CARDS */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {[
          { label: "Avg Risk Score", value: "72%", color: "text-red-400" },
          { label: "Predicted Disruptions", value: "14", color: "text-yellow-400" },
          { label: "Forecast Accuracy", value: "92%", color: "text-cyan-400" },
          { label: "Inventory Health", value: "84%", color: "text-green-400" },
        ].map((item) => (
          <div
            key={item.label}
            className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-[0_0_25px_rgba(6,182,212,0.1)]"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-cyan-500/10 to-transparent" />

            <div className="relative z-10">
              <p className="text-slate-400 text-sm">{item.label}</p>
              <h2 className={`text-3xl font-bold mt-3 ${item.color}`}>
                {item.value}
              </h2>
            </div>
          </div>
        ))}

      </div>

      {/* ML + FORECAST */}
      <div className="grid lg:grid-cols-2 gap-6">

        {/* ML PREDICTOR */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-6 hover:border-cyan-500/30 transition">

          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent" />

          <div className="relative z-10">
            <h2 className="text-xl font-semibold">ML Risk Predictor</h2>
            <p className="text-slate-400 text-sm mt-1">
              Supplier risk classification model
            </p>

            <div className="mt-8 space-y-6">

              {[
                { name: "Shanghai SemiTech", value: 87, color: "bg-red-500" },
                { name: "Samsung SDI", value: 22, color: "bg-green-500" },
              ].map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm">
                    <span>{s.name}</span>
                    <span>{s.value}%</span>
                  </div>

                  <div className="h-2 bg-slate-800 rounded-full mt-2 overflow-hidden">
                    <div
                      className={`h-full ${s.color} rounded-full transition-all`}
                      style={{ width: `${s.value}%` }}
                    />
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* FORECAST */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-6 hover:border-cyan-500/30 transition">

          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent" />

          <div className="relative z-10">
            <h2 className="text-xl font-semibold">Demand Forecast Model</h2>
            <p className="text-slate-400 text-sm mt-1">
              XGBoost demand forecasting
            </p>

            <div className="mt-8 h-[220px] rounded-2xl border border-slate-800 bg-slate-800/60 flex items-center justify-center text-slate-400">
              Forecast Chart (Coming Soon)
            </div>
          </div>

        </div>
      </div>

      {/* STOCK + GEO */}
      <div className="grid lg:grid-cols-2 gap-6">

        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 hover:border-cyan-500/30 transition">

          <h2 className="text-xl font-semibold">Stockout Prediction</h2>

          <div className="mt-6 space-y-4">

            {[
              { name: "Battery Modules", days: 9, color: "text-red-400" },
              { name: "Semiconductors", days: 14, color: "text-yellow-400" },
            ].map((item) => (
              <div key={item.name} className="bg-slate-800/60 p-4 rounded-xl">
                <p className="text-slate-300">{item.name}</p>
                <p className={`text-2xl font-bold mt-2 ${item.color}`}>
                  {item.days} Days
                </p>
              </div>
            ))}

          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 hover:border-cyan-500/30 transition">

          <h2 className="text-xl font-semibold">Geopolitical Risk</h2>

          <div className="mt-6 space-y-3">

            {[
              { country: "China", risk: "High", color: "text-red-400" },
              { country: "Vietnam", risk: "Low", color: "text-green-400" },
              { country: "Japan", risk: "Medium", color: "text-yellow-400" },
            ].map((g) => (
              <div
                key={g.country}
                className="flex justify-between bg-slate-800/60 p-4 rounded-xl hover:bg-slate-800 transition"
              >
                <span>{g.country}</span>
                <span className={g.color}>{g.risk}</span>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* AI EXPLANATION */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-6 hover:border-cyan-500/30 transition">

        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5" />

        <div className="relative z-10">
          <h2 className="text-xl font-semibold">AI Risk Explanation</h2>

          <p className="text-slate-300 mt-4 leading-8">
            Risk increased due to delivery delays,
            semiconductor shortages and geopolitical volatility in East Asia.
            AI recommends shifting sourcing volume towards Vietnam and India-based suppliers.
          </p>
        </div>
      </div>

    </div>
  );
}