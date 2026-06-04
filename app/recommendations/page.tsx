export default function RecommendationsPage() {
    return (
      <div className="min-h-screen bg-[#030712] p-8 text-white">
  
        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            Recommendations
          </h1>
  
          <p className="text-slate-400 mt-2">
            AI-powered sourcing and optimization engine
          </p>
        </div>
  
        {/* KPI */}
  
        <div className="grid md:grid-cols-4 gap-6 mb-8">
  
          <div className="bg-slate-900 rounded-2xl p-6">
            <p className="text-slate-400">
              Risk Reduced
            </p>
  
            <h2 className="text-4xl font-bold text-green-400 mt-3">
              34%
            </h2>
          </div>
  
          <div className="bg-slate-900 rounded-2xl p-6">
            <p className="text-slate-400">
              Cost Savings
            </p>
  
            <h2 className="text-4xl font-bold text-cyan-400 mt-3">
              $4.2M
            </h2>
          </div>
  
          <div className="bg-slate-900 rounded-2xl p-6">
            <p className="text-slate-400">
              Lead Time Saved
            </p>
  
            <h2 className="text-4xl font-bold text-yellow-400 mt-3">
              11 Days
            </h2>
          </div>
  
          <div className="bg-slate-900 rounded-2xl p-6">
            <p className="text-slate-400">
              AI Confidence
            </p>
  
            <h2 className="text-4xl font-bold text-purple-400 mt-3">
              92%
            </h2>
          </div>
  
        </div>
  
        {/* ALTERNATE SUPPLIERS */}
  
        <div className="bg-slate-900 rounded-2xl p-6 mb-8">
  
          <h2 className="text-2xl font-semibold">
            Alternate Supplier Recommendations
          </h2>
  
          <div className="grid md:grid-cols-3 gap-6 mt-6">
  
            <div className="bg-slate-800 rounded-xl p-5">
              <h3 className="font-semibold">
                Shanghai SemiTech
              </h3>
  
              <p className="text-red-400 mt-2">
                Current Risk: 87%
              </p>
  
              <p className="mt-4">
                Recommended:
              </p>
  
              <p className="text-cyan-400 mt-2">
                Samsung SDI
              </p>
  
              <p className="text-green-400 mt-3">
                Risk Reduction: 65%
              </p>
            </div>
  
            <div className="bg-slate-800 rounded-xl p-5">
              <h3 className="font-semibold">
                Battery Tech China
              </h3>
  
              <p className="text-red-400 mt-2">
                Current Risk: 79%
              </p>
  
              <p className="mt-4">
                Recommended:
              </p>
  
              <p className="text-cyan-400 mt-2">
                Panasonic Energy
              </p>
  
              <p className="text-green-400 mt-3">
                Risk Reduction: 51%
              </p>
            </div>
  
          </div>
  
        </div>
  
        {/* MATERIAL SUBSTITUTION */}
  
        <div className="bg-slate-900 rounded-2xl p-6 mb-8">
  
          <h2 className="text-2xl font-semibold">
            Material Substitution
          </h2>
  
          <div className="mt-6 grid md:grid-cols-2 gap-6">
  
            <div className="bg-slate-800 rounded-xl p-5">
              <p>Current Material</p>
  
              <h3 className="text-xl mt-2">
                Rare Earth Magnet
              </h3>
  
              <p className="mt-4">
                Alternative:
              </p>
  
              <h3 className="text-cyan-400 mt-2">
                Ferrite Magnet
              </h3>
            </div>
  
            <div className="bg-slate-800 rounded-xl p-5">
              <p>Estimated Savings</p>
  
              <h3 className="text-green-400 text-3xl mt-2">
                $1.8M
              </h3>
            </div>
  
          </div>
  
        </div>
  
        {/* AI FEED */}
  
        <div className="bg-slate-900 rounded-2xl p-6">
  
          <h2 className="text-2xl font-semibold">
            AI Recommendation Feed
          </h2>
  
          <div className="space-y-4 mt-6">
  
            <div className="bg-slate-800 p-4 rounded-xl">
              Shift 40% sourcing from China to Vietnam suppliers.
            </div>
  
            <div className="bg-slate-800 p-4 rounded-xl">
              Increase safety stock for battery modules by 12%.
            </div>
  
            <div className="bg-slate-800 p-4 rounded-xl">
              Replace Supplier A with Samsung SDI for lower disruption risk.
            </div>
  
          </div>
  
        </div>
  
      </div>
    );
  }