import {
    Users,
    AlertTriangle,
    Activity,
    DollarSign,
  } from "lucide-react";
  
  const cards = [
    {
      title: "Total Suppliers",
      value: "247",
      icon: Users,
      color: "text-cyan-400",
    },
    {
      title: "High Risk Suppliers",
      value: "18",
      icon: AlertTriangle,
      color: "text-red-400",
    },
    {
      title: "Inventory Health",
      value: "82%",
      icon: Activity,
      color: "text-green-400",
    },
    {
      title: "Potential Savings",
      value: "$4.2M",
      icon: DollarSign,
      color: "text-yellow-400",
    },
  ];
  
  export default function KPICards() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {cards.map((card) => {
          const Icon = card.icon;
  
          return (
            <div
              key={card.title}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-slate-400 text-sm">
                    {card.title}
                  </p>
  
                  <h2 className="text-4xl font-bold text-white mt-3">
                    {card.value}
                  </h2>
  
                  <p className="text-green-400 text-sm mt-3">
                    +12% vs last month
                  </p>
                </div>
  
                <div className="bg-slate-800 p-3 rounded-xl">
                  <Icon
                    size={24}
                    className={card.color}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }