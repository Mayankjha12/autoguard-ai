'use client';

import { useState } from 'react';

export default function RecommendationsPage() {
  const [aiRecommendations, setAiRecommendations] =
    useState('');

  const [loading, setLoading] =
    useState(false);

  const generateRecommendations = async () => {
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type':
            'application/json',
        },
        body: JSON.stringify({
          message: `
Analyze automotive supply chain risks.

Provide:

1. Alternate Supplier Recommendations
2. Material Substitution Suggestions
3. Cost Reduction Opportunities
4. Inventory Optimization Actions
5. Executive Recommendation

Keep response concise and executive friendly.
          `,
        }),
      });

      const data = await res.json();

      setAiRecommendations(
        data.response ||
          data.reply ||
          'No recommendations generated.'
      );
    } catch {
      setAiRecommendations(
        'Unable to generate recommendations.'
      );
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white p-6 lg:p-10 space-y-10">

      {/* HEADER */}
      <div className="relative overflow-hidden rounded-3xl border border-purple-500/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.15),transparent_55%)]" />

        <div className="relative z-10">
          <h1 className="text-4xl font-bold">
            Recommendations
          </h1>

          <p className="text-slate-400 mt-2">
            AI-powered sourcing and optimization engine
          </p>

          <button
            onClick={generateRecommendations}
            disabled={loading}
            className="
              mt-6
              bg-gradient-to-r
              from-purple-500
              to-cyan-500
              px-6
              py-3
              rounded-xl
              font-semibold
              text-black
              transition-all
              hover:scale-105
            "
          >
            {loading
              ? 'Generating...'
              : 'Generate AI Recommendations'}
          </button>
        </div>
      </div>

      {/* KPI */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {[
          {
            label: 'Risk Reduced',
            value: '34%',
            color: 'text-green-400',
          },
          {
            label: 'Cost Savings',
            value: '$4.2M',
            color: 'text-cyan-400',
          },
          {
            label: 'Lead Time Saved',
            value: '11 Days',
            color: 'text-yellow-400',
          },
          {
            label: 'AI Confidence',
            value: '92%',
            color: 'text-purple-400',
          },
        ].map((item) => (
          <div
            key={item.label}
            className="
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              border-slate-800
              bg-slate-900/60
              p-6
            "
          >
            <div className="relative z-10">
              <p className="text-slate-400 text-sm">
                {item.label}
              </p>

              <h2
                className={`text-3xl font-bold mt-3 ${item.color}`}
              >
                {item.value}
              </h2>
            </div>
          </div>
        ))}

      </div>

      {/* AI GENERATED STRATEGY */}

      {aiRecommendations && (
        <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-900/70 p-6">

          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />

          <div className="relative z-10">

            <div className="flex items-center justify-between mb-4">

              <h2 className="text-2xl font-semibold">
                AI Generated Strategy
              </h2>

              <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1 text-xs text-cyan-400">
                LIVE AI
              </div>

            </div>

            <div className="whitespace-pre-wrap text-slate-300 leading-8">
              {aiRecommendations}
            </div>

          </div>

        </div>
      )}

      {/* SUPPLIER RECOMMENDATIONS */}

      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-6">

        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />

        <div className="relative z-10">

          <h2 className="text-2xl font-semibold">
            Alternate Supplier Recommendations
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-6">

            {[
              {
                current: 'Shanghai SemiTech',
                risk: '87%',
                recommended: 'Samsung SDI',
                reduction: '65%',
              },
              {
                current: 'Battery Tech China',
                risk: '79%',
                recommended: 'Panasonic Energy',
                reduction: '51%',
              },
            ].map((s) => (
              <div
                key={s.current}
                className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-800/50 p-5"
              >
                <div className="relative z-10 space-y-3">

                  <h3 className="font-semibold">
                    {s.current}
                  </h3>

                  <p className="text-red-400 text-sm">
                    Current Risk: {s.risk}
                  </p>

                  <p className="text-cyan-400 font-semibold">
                    {s.recommended}
                  </p>

                  <p className="text-green-400 text-sm">
                    Risk Reduction: {s.reduction}
                  </p>

                  <div className="pt-3 border-t border-slate-700">

                    <p className="text-slate-400 text-sm">
                      Estimated Savings
                    </p>

                    <p className="text-green-400 font-semibold">
                      $1.2M annually
                    </p>

                    <p className="text-slate-400 text-sm mt-2">
                      AI Confidence
                    </p>

                    <p className="text-cyan-400 font-semibold">
                      92%
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
            {/* MATERIAL SUBSTITUTION */}

            <div className="grid lg:grid-cols-2 gap-6">

<div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-6">

  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-transparent" />

  <div className="relative z-10">

    <h2 className="text-xl font-semibold">
      Material Substitution Engine
    </h2>

    <div className="mt-6 space-y-4">

      <div className="bg-slate-800/60 rounded-xl p-4">
        <p className="text-slate-400 text-sm">
          Current Material
        </p>

        <p className="text-lg mt-1">
          Rare Earth Magnet
        </p>

        <p className="text-slate-400 text-sm mt-4">
          Alternative
        </p>

        <p className="text-cyan-400 font-semibold">
          Ferrite Magnet
        </p>

        <div className="grid grid-cols-2 gap-4 mt-5">

          <div>
            <p className="text-slate-400 text-xs">
              Cost Reduction
            </p>

            <p className="text-green-400 font-bold">
              27%
            </p>
          </div>

          <div>
            <p className="text-slate-400 text-xs">
              AI Confidence
            </p>

            <p className="text-cyan-400 font-bold">
              88%
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>

</div>

<div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-6">

  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-transparent" />

  <div className="relative z-10 flex flex-col justify-center h-full">

    <p className="text-slate-400 text-sm">
      Estimated Savings
    </p>

    <h3 className="text-5xl font-bold text-green-400 mt-4">
      $1.8M
    </h3>

    <p className="text-slate-400 mt-4">
      Annual savings from supplier diversification,
      sourcing optimization and material substitution.
    </p>

  </div>

</div>

</div>

{/* EXECUTIVE ACTION PLAN */}

<div className="relative overflow-hidden rounded-3xl border border-green-500/20 bg-slate-900/70 p-6">

<div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-transparent" />

<div className="relative z-10">

  <h2 className="text-2xl font-semibold">
    Executive Action Plan
  </h2>

  <div className="grid md:grid-cols-3 gap-5 mt-6">

    <div className="bg-slate-800/50 rounded-xl p-5">
      <p className="text-green-400 font-bold">
        Priority 1
      </p>

      <p className="mt-3">
        Shift semiconductor sourcing to Vietnam.
      </p>
    </div>

    <div className="bg-slate-800/50 rounded-xl p-5">
      <p className="text-yellow-400 font-bold">
        Priority 2
      </p>

      <p className="mt-3">
        Increase safety stock by 12%.
      </p>
    </div>

    <div className="bg-slate-800/50 rounded-xl p-5">
      <p className="text-cyan-400 font-bold">
        Priority 3
      </p>

      <p className="mt-3">
        Replace high-risk battery suppliers.
      </p>
    </div>

  </div>

</div>

</div>

{/* AI FEED */}

<div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-6">

<div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-cyan-500/5" />

<div className="relative z-10">

  <h2 className="text-2xl font-semibold">
    AI Recommendation Feed
  </h2>

  <div className="space-y-4 mt-6">

    {[
      "Shift 40% sourcing from China to Vietnam suppliers.",
      "Increase safety stock for battery modules by 12%.",
      "Replace Supplier A with Samsung SDI.",
      "Reduce logistics dependency on Red Sea routes.",
      "Diversify lithium procurement contracts."
    ].map((text) => (
      <div
        key={text}
        className="
          bg-slate-800/60
          p-4
          rounded-xl
          border
          border-slate-700
          hover:border-purple-500/30
        "
      >
        {text}
      </div>
    ))}

  </div>

</div>

</div>

{/* BOARD REPORT */}

<div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-900/70 p-6">

<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent" />

<div className="relative z-10">

  <div className="flex items-center justify-between">

    <div>

      <h2 className="text-2xl font-semibold">
        Board Level Summary
      </h2>

      <p className="text-slate-400 mt-1">
        Executive briefing generated by AI
      </p>

    </div>

    <button
      className="
        bg-cyan-500
        text-black
        font-semibold
        px-5
        py-2
        rounded-xl
        hover:bg-cyan-400
      "
    >
      Export PDF
    </button>

  </div>

  <div className="mt-6 rounded-2xl bg-slate-800/50 p-6 leading-8 text-slate-300">

    Supply chain risk exposure has increased due
    to geopolitical uncertainty and semiconductor
    shortages. AI recommends supplier
    diversification, inventory optimization,
    and alternate sourcing strategies.

    Estimated annual savings:
    <span className="text-green-400 font-bold">
      {" "} $4.2M
    </span>

    while reducing disruption risk by
    <span className="text-cyan-400 font-bold">
      {" "} 34%
    </span>.

  </div>

</div>

</div>

</div>
);
}