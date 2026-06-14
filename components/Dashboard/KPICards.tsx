'use client';

import { useDashboard } from "@/context/DashboardContext";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function KPICards() {
  const { data } = useDashboard();

  const items = [
    {
      quote: data.suppliers.toString(),
      name: "Total Suppliers",
      title: "Global Network",
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
      title: "Optimization Opportunity",
    },
  ];

  return (
    <div className="w-full">
      <InfiniteMovingCards
        items={items}
        direction="left"
        speed="slow"
        pauseOnHover={true}
        className="py-2"
      />
    </div>
  );
}