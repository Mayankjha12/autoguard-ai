function AlertCard({
    title,
    description,
    color,
  }: {
    title: string;
    description: string;
    color: string;
  }) {
    return (
      <div className="bg-slate-800 rounded-2xl p-5 flex gap-4">
        <div
          className={`h-3 w-3 rounded-full mt-2 ${color}`}
        />
  
        <div>
          <h3 className="text-white font-semibold">
            {title}
          </h3>
  
          <p className="text-slate-400 text-sm mt-1">
            {description}
          </p>
        </div>
      </div>
    );
  }
  
  export default function AIAlerts() {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-white">
            AI Alerts Center
          </h2>
  
          <span className="text-slate-500 text-sm">
            Updated 2 mins ago
          </span>
        </div>
  
        <div className="space-y-4">
          <AlertCard
            title="Semiconductor shortage predicted"
            description="87% disruption probability detected in East Asia."
            color="bg-red-500"
          />
  
          <AlertCard
            title="Battery lead time increasing"
            description="Lead times increased by 18% this month."
            color="bg-yellow-500"
          />
  
          <AlertCard
            title="New supplier qualified"
            description="Samsung SDI approved as alternate supplier."
            color="bg-cyan-500"
          />
  
          <AlertCard
            title="Logistics congestion warning"
            description="Shipping delays expected next week."
            color="bg-orange-500"
          />
        </div>
      </div>
    );
  }