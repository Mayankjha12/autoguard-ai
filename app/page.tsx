'use client';

import { useEffect } from 'react';

import Header from "@/components/Dashboard/Header";
import KPICards from "@/components/Dashboard/KPICards";
import DemandForecast from "@/components/Dashboard/DemandForecast";
import AIAlerts from "@/components/Dashboard/AIAlerts";
import ExecutiveSummary from "@/components/Dashboard/ExecutiveSummary";

export default function DashboardPage() {

  useEffect(() => {
    if (window.location.hash === '#results') {
      setTimeout(() => {
        document.getElementById('results')?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 300);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] text-white">

      {/* Hero Section */}
      <Header />

      {/* Dashboard Results */}
      <section
        id="results"
        className="
          max-w-[1800px]
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          py-12
          space-y-10
          scroll-mt-10
        "
      >

        {/* KPI Cards */}
        <div className="mb-8">
          <KPICards />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-2">
            <DemandForecast />
          </div>
        </div>

        {/* AI Alerts */}
        <div className="mt-6">
          <AIAlerts />
        </div>

        {/* Executive Summary */}
        <div className="mt-6">
          <ExecutiveSummary />
        </div>

      </section>

    </div>
  );
}