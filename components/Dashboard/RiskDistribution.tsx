export default function RiskDistribution() {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
        <h2 className="text-xl font-semibold text-white">
          Risk Distribution
        </h2>
  
        <p className="text-slate-400 text-sm mt-1">
          Supplier risk overview
        </p>
  
        <div className="flex justify-center py-10">
          <div className="w-44 h-44 rounded-full border-[18px] border-red-500 flex items-center justify-center">
            <div>
              <h3 className="text-3xl font-bold text-center">
                24
              </h3>
  
              <p className="text-slate-400 text-sm">
                Suppliers
              </p>
            </div>
          </div>
        </div>
  
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-green-400 text-2xl font-bold">
              9
            </p>
  
            <p className="text-slate-400 text-sm">
              Low
            </p>
          </div>
  
          <div className="text-center">
            <p className="text-yellow-400 text-2xl font-bold">
              7
            </p>
  
            <p className="text-slate-400 text-sm">
              Medium
            </p>
          </div>
  
          <div className="text-center">
            <p className="text-red-400 text-2xl font-bold">
              8
            </p>
  
            <p className="text-slate-400 text-sm">
              High
            </p>
          </div>
        </div>
      </div>
    );
  }