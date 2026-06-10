'use client';

import { useState } from 'react';

export default function SuppliersPage() {
  const [search, setSearch] = useState('');

  const suppliers = [
    {
      name: "Tata Components",
      country: "India",
      material: "Steel",
      quality: "94%",
      leadTime: "12 Days",
      risk: "Low",
    },
    {
      name: "Shanghai SemiTech",
      country: "China",
      material: "Semiconductors",
      quality: "88%",
      leadTime: "27 Days",
      risk: "High",
    },
    {
      name: "Samsung SDI",
      country: "South Korea",
      material: "Battery Cells",
      quality: "96%",
      leadTime: "10 Days",
      risk: "Low",
    },
    {
      name: "Panasonic Energy",
      country: "Japan",
      material: "Battery Packs",
      quality: "92%",
      leadTime: "14 Days",
      risk: "Medium",
    },
  ];

  const filtered = suppliers.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#030712] text-white p-6 lg:p-10">

      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Supplier Intelligence Center
        </h1>

        <p className="text-slate-400 mt-2">
          AI-powered supplier monitoring & risk analytics
        </p>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

        {[
          { label: "Total Suppliers", value: "247", color: "cyan" },
          { label: "High Risk", value: "18", color: "red" },
          { label: "Avg Quality", value: "91%", color: "green" },
          { label: "Countries", value: "14", color: "purple" },
        ].map((item, i) => (
          <div
            key={i}
            className="
              relative overflow-hidden
              rounded-3xl p-6
              bg-slate-900/70
              border border-slate-800
              backdrop-blur-xl
              transition-all duration-300
              hover:scale-[1.03]
              hover:border-cyan-500/30
              hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]
            "
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent" />

            <p className="text-slate-400 text-sm">{item.label}</p>

            <h2
              className={`
                text-3xl font-bold mt-3
                ${item.color === "red" ? "text-red-400"
                  : item.color === "green" ? "text-green-400"
                  : item.color === "purple" ? "text-purple-400"
                  : "text-cyan-400"}
              `}
            >
              {item.value}
            </h2>
          </div>
        ))}

      </div>

      {/* FILTER BAR */}
      <div className="flex flex-wrap gap-4 mb-10">

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search supplier..."
          className="
            bg-slate-900/70
            border border-slate-700
            rounded-xl px-4 py-3 w-80
            focus:border-cyan-500
            outline-none
          "
        />

        {["Country", "Material", "Risk"].map((f) => (
          <select
            key={f}
            className="
              bg-slate-900/70
              border border-slate-700
              rounded-xl px-4 py-3
              text-slate-300
            "
          >
            <option>All {f}s</option>
          </select>
        ))}

      </div>

      {/* SUPPLIER TABLE (CARD STYLE) */}
      <div className="grid gap-4">

        {filtered.map((s, i) => (
          <div
            key={i}
            className="
              group
              flex flex-col md:flex-row md:items-center justify-between
              gap-4
              p-5 rounded-2xl
              bg-slate-900/60
              border border-slate-800
              transition-all duration-300
              hover:bg-slate-800/50
              hover:border-cyan-500/30
              hover:translate-y-[-2px]
            "
          >

            <div>
              <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400">
                {s.name}
              </h3>
              <p className="text-slate-400 text-sm">
                {s.country} • {s.material}
              </p>
            </div>

            <div className="flex gap-6 text-sm">

              <span className="text-slate-300">
                ⭐ {s.quality}
              </span>

              <span className="text-slate-300">
                ⏱ {s.leadTime}
              </span>

              <span
                className={`
                  px-3 py-1 rounded-full text-xs font-medium
                  ${
                    s.risk === "High"
                      ? "bg-red-500/20 text-red-400"
                      : s.risk === "Medium"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-green-500/20 text-green-400"
                  }
                `}
              >
                {s.risk}
              </span>

            </div>

          </div>
        ))}

      </div>

      {/* AI INSIGHTS */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">

        {[
          {
            title: "Top Supplier",
            value: "Samsung SDI",
            color: "cyan",
          },
          {
            title: "Risk Alert",
            value: "Shanghai SemiTech",
            color: "red",
          },
          {
            title: "AI Suggestion",
            value: "Diversify to Vietnam",
            color: "green",
          },
        ].map((a, i) => (
          <div
            key={i}
            className="
              rounded-3xl p-6
              bg-slate-900/70
              border border-slate-800
              backdrop-blur-xl
              hover:shadow-[0_0_25px_rgba(6,182,212,0.10)]
              transition-all
            "
          >
            <p className="text-slate-400 text-sm">{a.title}</p>

            <h3
              className={`
                text-xl font-bold mt-3
                ${a.color === "red"
                  ? "text-red-400"
                  : a.color === "green"
                  ? "text-green-400"
                  : "text-cyan-400"}
              `}
            >
              {a.value}
            </h3>
          </div>
        ))}

      </div>

    </div>
  );
}