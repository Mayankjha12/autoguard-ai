export default function InventoryTrend() {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
        <h2 className="text-xl font-semibold text-white">
          Inventory Trend
        </h2>
  
        <p className="text-slate-400 text-sm mt-1">
          30-day inventory movement
        </p>
  
        <div className="h-[220px] mt-6 rounded-2xl bg-slate-800 flex items-center justify-center">
          <span className="text-slate-500">
            Inventory Trend Chart
          </span>
        </div>
  
        <div className="grid grid-cols-3 gap-3 mt-5">
          <div className="bg-slate-800 rounded-xl p-3">
            <p className="text-slate-400 text-xs">
              Current Stock
            </p>
  
            <h3 className="text-xl font-bold text-white mt-1">
              14.2K
            </h3>
          </div>
  
          <div className="bg-slate-800 rounded-xl p-3">
            <p className="text-slate-400 text-xs">
              Usage Rate
            </p>
  
            <h3 className="text-xl font-bold text-yellow-400 mt-1">
              8.2%
            </h3>
          </div>
  
          <div className="bg-slate-800 rounded-xl p-3">
            <p className="text-slate-400 text-xs">
              Stockout Risk
            </p>
  
            <h3 className="text-xl font-bold text-red-400 mt-1">
              9 Days
            </h3>
          </div>
        </div>
      </div>
    );
  }