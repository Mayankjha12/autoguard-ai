import Header from "@/components/Dashboard/Header";
import KPICards from "@/components/Dashboard/KPICards";
import DemandForecast from "@/components/Dashboard/DemandForecast";
import SupplyHealth from "@/components/Dashboard/SupplyHealth";
import RiskDistribution from "@/components/Dashboard/RiskDistribution";
import CountryHeatmap from "@/components/Dashboard/CountryHeatmap";
import InventoryTrend from "@/components/Dashboard/InventoryTrend";
import AIAlerts from "@/components/Dashboard/AIAlerts";
import ExecutiveSummary from "@/components/Dashboard/ExecutiveSummary";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#030712] p-8 space-y-8">

      <Header />

      <KPICards />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <DemandForecast />
        </div>

        <SupplyHealth />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <RiskDistribution />
        <CountryHeatmap />
        <InventoryTrend />
      </div>

      <AIAlerts />

      <ExecutiveSummary />

    </div>
  );
}