'use client';

export default function CopilotPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white p-6 lg:p-10 space-y-8">

      {/* HEADER */}
      <div className="relative overflow-hidden rounded-3xl border border-cyan-500/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 lg:p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.15),transparent_55%)]" />

        <div className="relative z-10">
          <h1 className="text-4xl font-bold">AI Copilot</h1>
          <p className="text-slate-400 mt-2">
            Supply chain intelligence assistant
          </p>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid lg:grid-cols-3 gap-6 items-start">

        {/* CHAT PANEL (MEDIUM PROFESSIONAL SIZE) */}
        <div className="lg:col-span-2 flex flex-col rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl overflow-hidden shadow-xl">

          {/* CHAT HEADER */}
          <div className="p-5 border-b border-slate-800">
            <h2 className="text-lg font-semibold">
              Ask AutoGuard AI
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Real-time supply chain intelligence assistant
            </p>
          </div>

          {/* CHAT BODY (MEDIUM HEIGHT) */}
          <div className="p-5 space-y-4 h-[420px] overflow-y-auto">

            {/* USER MESSAGE */}
            <div className="max-w-[75%] bg-slate-800/70 border border-slate-700 rounded-2xl p-4 text-sm leading-relaxed hover:border-cyan-500/30 transition">
              Which supplier is highest risk?
            </div>

            {/* AI MESSAGE */}
            <div className="max-w-[75%] ml-auto bg-cyan-500/10 border border-cyan-500/20 text-cyan-200 rounded-2xl p-4 text-sm leading-relaxed hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition">
              Shanghai SemiTech currently has the highest risk score of 87%. It is driven by delayed shipments and geopolitical instability.
            </div>

          </div>

          {/* INPUT BAR */}
          <div className="p-4 border-t border-slate-800 bg-slate-950/40 flex gap-3">

            <input
              placeholder="Ask AutoGuard AI..."
              className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm outline-none focus:border-cyan-500/40 transition"
            />

            <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 rounded-xl text-sm transition-all active:scale-95">
              Send
            </button>

          </div>

        </div>

        {/* SIDE PANEL */}
        <div className="space-y-6">

          {/* QUICK ACTIONS */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 p-6">

            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent" />

            <div className="relative z-10">
              <h3 className="font-semibold">Quick Actions</h3>

              <div className="space-y-3 mt-4">

                {[
                  "Analyze Risk",
                  "Forecast Demand",
                  "Recommend Supplier",
                  "Generate Summary",
                ].map((item) => (
                  <button
                    key={item}
                    className="w-full bg-slate-800/60 border border-slate-700 rounded-xl p-3 text-left text-sm hover:bg-slate-800 hover:border-cyan-500/30 hover:-translate-y-1 transition-all"
                  >
                    {item}
                  </button>
                ))}

              </div>
            </div>
          </div>

          {/* MEETING INTELLIGENCE */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 p-6">

            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />

            <div className="relative z-10">
              <h3 className="font-semibold">Meeting Intelligence</h3>

              <textarea
                placeholder="Paste meeting transcript..."
                className="w-full h-36 mt-4 bg-slate-900 border border-slate-700 rounded-xl p-3 text-sm outline-none focus:border-purple-500/40 transition"
              />

              <button className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-semibold py-3 rounded-xl hover:scale-[1.02] active:scale-95 transition">
                Generate Summary
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}