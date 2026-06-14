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
    <div className="min-h-screen bg-[#030712] text-white selection:bg-cyan-500/30">
      <Header />

      <section id="results" className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 scroll-mt-10">
        {/* KPI Cards */}
        <div className="mb-8">
          <KPICards />
        </div>

        {/* --- GRAPH / CHARTS SECTION WITH PREMIUM CENTERED HEADER --- */}
        <div className="space-y-6 pt-4">
          
          {/* Centered Large Header Line for the Analytics Graph */}
          <div className="flex flex-col items-center justify-center text-center space-y-2 border-b border-slate-800/80 pb-5 max-w-xl mx-auto">
            <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 via-emerald-500 to-transparent rounded-full mb-1" />
            <h2 className="text-xl md:text-2xl font-extrabold tracking-widest uppercase bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Predictive Market Analytics
            </h2>
            <p className="text-xs text-slate-500 font-medium tracking-normal">
              Advanced trend modeling & inventory flow charts
            </p>
          </div>

          {/* Charts Display Matrix */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 pt-2">
            <div className="xl:col-span-2 mx-auto w-full">
              <DemandForecast />
            </div>
          </div>
        </div>

        {/* --- DYNAMIC AI ENGINE INSIGHTS SECTION --- */}
        <div className="mt-14 space-y-6">
          
          {/* Header Center-aligned, Big & Bold for clear visibility */}
          <div className="flex flex-col items-center justify-center text-center space-y-2 border-b border-slate-800/80 pb-5 max-w-xl mx-auto">
            <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 via-blue-500 to-transparent rounded-full mb-1" />
            <h2 className="text-xl md:text-2xl font-extrabold tracking-widest uppercase bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              AI Intelligence Hub
            </h2>
            <p className="text-xs text-slate-500 font-medium tracking-normal">
              Automated system anomalies & strategic operations manager
            </p>
          </div>

          {/* Side-By-Side Height Balanced Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch pt-2">
            
            {/* Left AI Alerts Panel */}
            <div className="lg:col-span-4 flex w-full">
              <AIAlerts />
            </div>

            {/* Right AI Executive Summary Panel */}
            <div className="lg:col-span-8 flex w-full">
              <ExecutiveSummary />
            </div>

          </div>
        </div>

      </section>
    </div>
  );
}