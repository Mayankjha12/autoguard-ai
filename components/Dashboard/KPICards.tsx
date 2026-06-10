'use client';

import { useDashboard } from "@/context/DashboardContext";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function KPICards() {
  const { data } = useDashboard();

  const items = [
    {
      quote: data.suppliers.toString(),
      name: "Total Suppliers",
      title: "+12% vs last month",
    },
    {
      quote: data.riskSuppliers.toString(),
      name: "High Risk Suppliers",
      title: "Risk Monitoring",
    },
    {
      quote: `${data.inventoryHealth}%`,
      name: "Inventory Health",
      title: "Operational Status",
    },
    {
      quote: data.potentialSavings,
      name: "Potential Savings",
      title: "AI Optimization",
    },
  ];

  return (
    <div className="w-full">
      <InfiniteMovingCards
        items={items}
        direction="left"
        speed="normal"
        pauseOnHover={true}
        className="py-2"
      />
    </div>
  );
}