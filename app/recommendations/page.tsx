'use client';

export default function RecommendationsPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white p-6 lg:p-10 space-y-10">

      {/* HEADER */}
      <div className="relative overflow-hidden rounded-3xl border border-purple-500/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.15),transparent_55%)]" />

        <div className="relative z-10">
          <h1 className="text-4xl font-bold">Recommendations</h1>
          <p className="text-slate-400 mt-2">
            AI-powered sourcing and optimization engine
          </p>
        </div>
      </div>

      {/* KPI */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {[
          { label: "Risk Reduced", value: "34%", color: "text-green-400" },
          { label: "Cost Savings", value: "$4.2M", color: "text-cyan-400" },
          { label: "Lead Time Saved", value: "11 Days", color: "text-yellow-400" },
          { label: "AI Confidence", value: "92%", color: "text-purple-400" },
        ].map((item) => (
          <div
            key={item.label}
            className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_0_25px_rgba(168,85,247,0.12)]"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-purple-500/10 to-transparent" />

            <div className="relative z-10">
              <p className="text-slate-400 text-sm">{item.label}</p>
              <h2 className={`text-3xl font-bold mt-3 ${item.color}`}>
                {item.value}
              </h2>
            </div>
          </div>
        ))}

      </div>

      {/* SUPPLIER RECOMMENDATIONS */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-6">

        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />

        <div className="relative z-10">
          <h2 className="text-2xl font-semibold">
            Alternate Supplier Recommendations
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-6">

            {[
              {
                current: "Shanghai SemiTech",
                risk: "87%",
                recommended: "Samsung SDI",
                reduction: "65%",
              },
              {
                current: "Battery Tech China",
                risk: "79%",
                recommended: "Panasonic Energy",
                reduction: "51%",
              },
            ].map((s) => (
              <div
                key={s.current}
                className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-800/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent" />

                <div className="relative z-10 space-y-3">
                  <h3 className="font-semibold">{s.current}</h3>

                  <p className="text-red-400 text-sm">
                    Current Risk: {s.risk}
                  </p>

                  <p className="text-slate-400 text-sm">Recommended:</p>

                  <p className="text-cyan-400 font-semibold">
                    {s.recommended}
                  </p>

                  <p className="text-green-400 text-sm">
                    Risk Reduction: {s.reduction}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* MATERIAL SUBSTITUTION */}
      <div className="grid lg:grid-cols-2 gap-6">

        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-6">

          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-transparent" />

          <div className="relative z-10">
            <h2 className="text-xl font-semibold">
              Material Substitution
            </h2>

            <div className="mt-6 space-y-4">

              <div className="bg-slate-800/60 rounded-xl p-4 hover:bg-slate-800 transition">
                <p className="text-slate-400 text-sm">Current Material</p>
                <p className="text-lg mt-1">Rare Earth Magnet</p>

                <p className="text-slate-400 text-sm mt-4">Alternative</p>
                <p className="text-cyan-400">Ferrite Magnet</p>
              </div>

            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-6">

          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-transparent" />

          <div className="relative z-10 flex flex-col justify-center h-full">
            <p className="text-slate-400 text-sm">Estimated Savings</p>
            <h3 className="text-4xl font-bold text-green-400 mt-4">
              $1.8M
            </h3>
          </div>

        </div>

      </div>

      {/* AI FEED */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-6">

        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-cyan-500/5" />

        <div className="relative z-10">
          <h2 className="text-2xl font-semibold">
            AI Recommendation Feed
          </h2>

          <div className="space-y-4 mt-6">

            {[
              "Shift 40% sourcing from China to Vietnam suppliers.",
              "Increase safety stock for battery modules by 12%.",
              "Replace Supplier A with Samsung SDI for lower disruption risk.",
            ].map((text) => (
              <div
                key={text}
                className="bg-slate-800/60 p-4 rounded-xl border border-slate-700 hover:border-purple-500/30 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1"
              >
                {text}
              </div>
            ))}

          </div>
        </div>
      </div>

    </div>
  );
}