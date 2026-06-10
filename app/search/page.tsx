'use client';

import { useState } from 'react';
import { useDashboard } from '@/context/DashboardContext';
import Link from 'next/link';
import { Search, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function SearchPage() {
  const { updateDashboard, resetDashboard } = useDashboard();
  const router = useRouter();

  const [formData, setFormData] = useState({
    productCategory: '',
    region: '',
    riskLevel: '',
    supplierType: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const filteredInput = Object.fromEntries(
      Object.entries(formData).filter(([, value]) => value !== '')
    );

    updateDashboard(filteredInput);

    // Redirect to dashboard results
    router.push('/dashboard#results');
  };

  const handleReset = () => {
    setFormData({
      productCategory: '',
      region: '',
      riskLevel: '',
      supplierType: '',
    });

    resetDashboard();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#030712] via-[#0f1419] to-[#1a1f2e] p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-2">
            Supply Chain Intelligence
          </h1>

          <p className="text-slate-400 text-lg">
            Enter your criteria to get AI-powered insights
          </p>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="space-y-6 mb-8">
          <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-3xl p-8 space-y-6">

            {/* Product Category */}
            <div>
              <label className="block text-white font-semibold mb-3">
                Product Category
              </label>

              <input
                type="text"
                name="productCategory"
                value={formData.productCategory}
                onChange={handleInputChange}
                placeholder="e.g., Electronics, Textiles, Food"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition"
              />
            </div>

            {/* Region */}
            <div>
              <label className="block text-white font-semibold mb-3">
                Region
              </label>

              <select
                name="region"
                value={formData.region}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-2xl text-white focus:outline-none focus:border-cyan-500 transition"
              >
                <option value="">Select Region</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="americas">Americas</option>
                <option value="africa">Africa</option>
              </select>
            </div>

            {/* Risk Level */}
            <div>
              <label className="block text-white font-semibold mb-3">
                Risk Level
              </label>

              <select
                name="riskLevel"
                value={formData.riskLevel}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-2xl text-white focus:outline-none focus:border-cyan-500 transition"
              >
                <option value="">All Risk Levels</option>
                <option value="low">Low Risk</option>
                <option value="medium">Medium Risk</option>
                <option value="high">High Risk</option>
              </select>
            </div>

            {/* Supplier Type */}
            <div>
              <label className="block text-white font-semibold mb-3">
                Supplier Type
              </label>

              <input
                type="text"
                name="supplierType"
                value={formData.supplierType}
                onChange={handleInputChange}
                placeholder="e.g., Manufacturer, Distributor"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl hover:shadow-lg hover:shadow-cyan-500/50 transition flex items-center justify-center gap-2"
            >
              <Search size={20} />
              Search & Analyze
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="flex-1 px-6 py-3 bg-slate-800 text-white font-bold rounded-2xl hover:bg-slate-700 transition"
            >
              Reset
            </button>
          </div>
        </form>

        {/* Navigation */}
        <Link href="/dashboard">
          <button className="w-full px-6 py-3 bg-slate-900 border border-slate-800 text-white font-semibold rounded-2xl hover:bg-slate-800 transition flex items-center justify-center gap-2">
            Go to Dashboard
            <ArrowRight size={20} />
          </button>
        </Link>

        {/* Info */}
        <div className="mt-12 bg-slate-900/30 border border-slate-800 rounded-3xl p-8">
          <h3 className="text-white font-bold text-lg mb-4">
            How it works:
          </h3>

          <ul className="space-y-2 text-slate-400">
            <li>✓ Enter your search criteria</li>
            <li>✓ AI analyzes supply chain data</li>
            <li>✓ Get real-time insights on dashboard</li>
            <li>✓ Make data-driven decisions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}