export default function ExecutiveSummary() {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">
          AI Executive Summary
        </h2>
  
        <p className="text-slate-300 leading-8">
          Current supply chain health score stands
          at <span className="text-cyan-400">88%</span>.
          Three suppliers require immediate
          attention due to rising geopolitical
          and logistics risks.
        </p>
  
        <p className="text-slate-300 leading-8 mt-4">
          AI recommends shifting 40% sourcing
          from high-risk semiconductor suppliers
          to Vietnam-based alternatives.
        </p>
  
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-slate-800 rounded-xl p-4">
            <p className="text-slate-400 text-sm">
              Risk Reduction
            </p>
  
            <h3 className="text-green-400 text-2xl font-bold mt-2">
              34%
            </h3>
          </div>
  
          <div className="bg-slate-800 rounded-xl p-4">
            <p className="text-slate-400 text-sm">
              Cost Savings
            </p>
  
            <h3 className="text-cyan-400 text-2xl font-bold mt-2">
              $4.2M
            </h3>
          </div>
  
          <div className="bg-slate-800 rounded-xl p-4">
            <p className="text-slate-400 text-sm">
              Lead Time Saved
            </p>
  
            <h3 className="text-yellow-400 text-2xl font-bold mt-2">
              11 Days
            </h3>
          </div>
        </div>
      </div>
    );
  }