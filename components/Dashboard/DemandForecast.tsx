export default function DemandForecast() {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 h-[420px]">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold text-white">
              Monthly Demand Forecast
            </h2>
  
            <p className="text-slate-400 text-sm mt-1">
              AI predicted demand trends
            </p>
          </div>
  
          <button className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-xl">
            AI Forecast
          </button>
        </div>
  
        <div className="h-[300px] rounded-2xl bg-slate-800 flex items-center justify-center">
          <span className="text-slate-500">
            Demand Forecast Chart
          </span>
        </div>
  
        <div className="grid grid-cols-3 gap-4 mt-5">
          <div className="bg-slate-800 rounded-xl p-4">
            <p className="text-slate-400 text-sm">
              Forecast Accuracy
            </p>
  
            <h3 className="text-cyan-400 text-xl font-bold mt-2">
              92%
            </h3>
          </div>
  
          <div className="bg-slate-800 rounded-xl p-4">
            <p className="text-slate-400 text-sm">
              Next Month
            </p>
  
            <h3 className="text-green-400 text-xl font-bold mt-2">
              14.2K
            </h3>
          </div>
  
          <div className="bg-slate-800 rounded-xl p-4">
            <p className="text-slate-400 text-sm">
              Growth
            </p>
  
            <h3 className="text-yellow-400 text-xl font-bold mt-2">
              +8.4%
            </h3>
          </div>
        </div>
      </div>
    );
  }