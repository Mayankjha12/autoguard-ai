export default function CopilotPage() {
    return (
      <div className="min-h-screen bg-[#030712] p-8 text-white">
  
        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            AI Copilot
          </h1>
  
          <p className="text-slate-400 mt-2">
            Supply chain intelligence assistant
          </p>
        </div>
  
        <div className="grid lg:grid-cols-3 gap-6">
  
          {/* CHAT */}
  
          <div className="lg:col-span-2 bg-slate-900 rounded-2xl p-6">
  
            <h2 className="text-xl font-semibold">
              Ask AutoGuard AI
            </h2>
  
            <div className="h-[450px] bg-slate-800 rounded-xl mt-6 p-4 overflow-y-auto">
  
              <div className="bg-slate-700 rounded-xl p-4 max-w-md">
                Which supplier is highest risk?
              </div>
  
              <div className="bg-cyan-500/20 rounded-xl p-4 max-w-md mt-4 ml-auto">
                Shanghai SemiTech currently has
                the highest risk score of 87%.
              </div>
  
            </div>
  
            <div className="flex gap-4 mt-4">
              <input
                placeholder="Ask AutoGuard AI..."
                className="flex-1 bg-slate-800 rounded-xl px-4 py-3"
              />
  
              <button className="bg-cyan-500 px-6 rounded-xl text-black font-semibold">
                Send
              </button>
            </div>
  
          </div>
  
          {/* QUICK ACTIONS */}
  
          <div className="space-y-6">
  
            <div className="bg-slate-900 rounded-2xl p-6">
  
              <h3 className="font-semibold">
                Quick Actions
              </h3>
  
              <div className="space-y-3 mt-4">
  
                <button className="w-full bg-slate-800 p-3 rounded-xl">
                  Analyze Risk
                </button>
  
                <button className="w-full bg-slate-800 p-3 rounded-xl">
                  Forecast Demand
                </button>
  
                <button className="w-full bg-slate-800 p-3 rounded-xl">
                  Recommend Supplier
                </button>
  
                <button className="w-full bg-slate-800 p-3 rounded-xl">
                  Generate Summary
                </button>
  
              </div>
  
            </div>
  
            <div className="bg-slate-900 rounded-2xl p-6">
  
              <h3 className="font-semibold">
                Meeting Intelligence
              </h3>
  
              <textarea
                placeholder="Paste meeting transcript..."
                className="w-full bg-slate-800 rounded-xl p-3 mt-4 h-40"
              />
  
              <button className="w-full bg-cyan-500 text-black font-semibold py-3 rounded-xl mt-4">
                Generate Summary
              </button>
  
            </div>
  
          </div>
  
        </div>
  
      </div>
    );
  }