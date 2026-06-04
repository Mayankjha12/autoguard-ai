export default function RiskEnginePage() {
    return (
      <div className="min-h-screen bg-[#030712] p-8 text-white">
  
        {/* Header */}
  
        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            Risk Engine
          </h1>
  
          <p className="text-slate-400 mt-2">
            AI-powered disruption prediction and forecasting
          </p>
        </div>
  
        {/* KPI */}
  
        <div className="grid md:grid-cols-4 gap-6 mb-8">
  
          <div className="bg-slate-900 rounded-2xl p-6">
            <p className="text-slate-400">
              Avg Risk Score
            </p>
  
            <h2 className="text-4xl font-bold mt-3 text-red-400">
              72%
            </h2>
          </div>
  
          <div className="bg-slate-900 rounded-2xl p-6">
            <p className="text-slate-400">
              Predicted Disruptions
            </p>
  
            <h2 className="text-4xl font-bold mt-3 text-yellow-400">
              14
            </h2>
          </div>
  
          <div className="bg-slate-900 rounded-2xl p-6">
            <p className="text-slate-400">
              Forecast Accuracy
            </p>
  
            <h2 className="text-4xl font-bold mt-3 text-cyan-400">
              92%
            </h2>
          </div>
  
          <div className="bg-slate-900 rounded-2xl p-6">
            <p className="text-slate-400">
              Inventory Health
            </p>
  
            <h2 className="text-4xl font-bold mt-3 text-green-400">
              84%
            </h2>
          </div>
  
        </div>
  
        {/* ML SECTION */}
  
        <div className="grid md:grid-cols-2 gap-6 mb-8">
  
          <div className="bg-slate-900 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              ML Risk Predictor
            </h2>
  
            <p className="text-slate-400 mt-2">
              Supplier risk classification model
            </p>
  
            <div className="mt-8">
              <div className="flex justify-between">
                <span>Shanghai SemiTech</span>
                <span className="text-red-400">
                  87%
                </span>
              </div>
  
              <div className="h-3 bg-slate-800 rounded-full mt-2">
                <div className="h-full bg-red-500 rounded-full w-[87%]" />
              </div>
            </div>
  
            <div className="mt-6">
              <div className="flex justify-between">
                <span>Samsung SDI</span>
                <span className="text-green-400">
                  22%
                </span>
              </div>
  
              <div className="h-3 bg-slate-800 rounded-full mt-2">
                <div className="h-full bg-green-500 rounded-full w-[22%]" />
              </div>
            </div>
          </div>
  
          <div className="bg-slate-900 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Demand Forecast Model
            </h2>
  
            <p className="text-slate-400 mt-2">
              XGBoost demand forecasting
            </p>
  
            <div className="mt-8 h-[220px] bg-slate-800 rounded-xl flex items-center justify-center text-slate-500">
              Forecast Chart
            </div>
          </div>
  
        </div>
  
        {/* STOCKOUT + GEO */}
  
        <div className="grid md:grid-cols-2 gap-6 mb-8">
  
          <div className="bg-slate-900 rounded-2xl p-6">
  
            <h2 className="text-xl font-semibold">
              Stockout Prediction
            </h2>
  
            <div className="mt-6 space-y-4">
  
              <div className="bg-slate-800 rounded-xl p-4">
                <p>Battery Modules</p>
  
                <p className="text-red-400 text-2xl font-bold mt-2">
                  9 Days
                </p>
              </div>
  
              <div className="bg-slate-800 rounded-xl p-4">
                <p>Semiconductors</p>
  
                <p className="text-yellow-400 text-2xl font-bold mt-2">
                  14 Days
                </p>
              </div>
  
            </div>
  
          </div>
  
          <div className="bg-slate-900 rounded-2xl p-6">
  
            <h2 className="text-xl font-semibold">
              Geopolitical Risk
            </h2>
  
            <div className="space-y-4 mt-6">
  
              <div className="bg-slate-800 p-4 rounded-xl flex justify-between">
                <span>China</span>
                <span className="text-red-400">
                  High
                </span>
              </div>
  
              <div className="bg-slate-800 p-4 rounded-xl flex justify-between">
                <span>Vietnam</span>
                <span className="text-green-400">
                  Low
                </span>
              </div>
  
              <div className="bg-slate-800 p-4 rounded-xl flex justify-between">
                <span>Japan</span>
                <span className="text-yellow-400">
                  Medium
                </span>
              </div>
  
            </div>
  
          </div>
  
        </div>
  
        {/* AI EXPLANATION */}
  
        <div className="bg-slate-900 rounded-2xl p-6">
  
          <h2 className="text-xl font-semibold">
            AI Risk Explanation
          </h2>
  
          <p className="text-slate-300 mt-6 leading-8">
            Risk increased due to delivery delays,
            semiconductor shortages and geopolitical
            volatility in East Asia. AI recommends
            shifting sourcing volume towards Vietnam
            and India-based suppliers.
          </p>
  
        </div>
  
      </div>
    );
  }