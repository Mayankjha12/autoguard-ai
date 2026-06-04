export default function SupplyHealth() {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 h-[420px]">
        <h2 className="text-xl font-semibold text-white">
          Supply Chain Health
        </h2>
  
        <p className="text-slate-400 text-sm mt-1">
          Composite resilience score
        </p>
  
        <div className="flex justify-center items-center h-[240px]">
          <div className="relative">
            <div className="w-48 h-48 rounded-full border-[14px] border-green-500 flex items-center justify-center">
              <div>
                <h3 className="text-5xl font-bold text-white text-center">
                  88
                </h3>
  
                <p className="text-slate-400 text-center">
                  Score
                </p>
              </div>
            </div>
          </div>
        </div>
  
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-slate-800 rounded-xl p-3 text-center">
            <p className="text-green-400 font-bold">
              94%
            </p>
  
            <p className="text-slate-400 text-xs">
              Logistics
            </p>
          </div>
  
          <div className="bg-slate-800 rounded-xl p-3 text-center">
            <p className="text-yellow-400 font-bold">
              71%
            </p>
  
            <p className="text-slate-400 text-xs">
              Sourcing
            </p>
          </div>
  
          <div className="bg-slate-800 rounded-xl p-3 text-center">
            <p className="text-cyan-400 font-bold">
              88%
            </p>
  
            <p className="text-slate-400 text-xs">
              Quality
            </p>
          </div>
        </div>
      </div>
    );
  }