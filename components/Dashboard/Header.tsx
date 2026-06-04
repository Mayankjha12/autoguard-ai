export default function Header() {
    return (
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-white">
            Command Center
          </h1>
  
          <p className="text-slate-400 mt-2">
            Real-time supply chain intelligence dashboard
          </p>
        </div>
  
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-xl bg-slate-800 text-white">
            Export
          </button>
  
          <button className="px-4 py-2 rounded-xl bg-cyan-500 text-black font-semibold">
            Generate Report
          </button>
        </div>
      </div>
    );
  }