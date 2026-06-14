"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const COLORS_TOP = ["#06B6D4", "#2563EB", "#7C3AED", "#0EA5E9"];

export function AuroraHero() {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 8,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`
    radial-gradient(
      125% 125% at 50% 0%,
      #020617 40%,
      ${color}
    )
  `;

  const border = useMotionTemplate`
    1px solid ${color}
  `;

  const boxShadow = useMotionTemplate`
    0px 4px 30px ${color}
  `;

  const words = [
    { text: "AI-Powered" },
    { text: "Supply" },
    { text: "Chain" },
    { text: "Intelligence", className: "text-cyan-400" },
  ];

  return (
    <motion.section
      style={{ backgroundImage }}
      className="relative overflow-hidden min-h-screen px-6"
    >
      {/* DARK BACKGROUND FIX OVERLAY */}
      <div className="absolute inset-0 bg-[#020617]/80 z-0" />

      {/* Stars Background (FIXED) */}
     {/* Stars Background (SOFT VERSION FIX) */}
<div className="absolute inset-0 z-0 opacity-20">
  <Canvas>
    <Stars
      radius={120}
      count={800}     // 🔥 earlier 2500 → too noisy
      factor={1.5}    // 🔥 reduce brightness
      fade
      speed={0.5}
    />
  </Canvas>
</div>

{/* DARK SMOOTH OVERLAY (IMPORTANT FIX) */}
<div className="absolute inset-0 z-0 bg-[#020617]/90" />

{/* EXTRA BLUR LAYER (removes grain illusion) */}
<div className="absolute inset-0 z-0 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 backdrop-blur-md"
        >
          🚀 AutoGuard AI • Beta Now Live
        </motion.div>

        {/* Typewriter */}
        <div className="mb-6">
          <TypewriterEffectSmooth words={words} />
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl text-lg text-slate-300 md:text-xl"
        >
          Monitor suppliers, predict disruptions, optimize inventory,
          reduce operational risk, and make smarter supply chain decisions
          with advanced AI insights.
        </motion.p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <Link href="/search">
            <motion.button
              style={{ border, boxShadow }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-slate-950/40 px-6 py-3 text-white backdrop-blur-md"
            >
              <div className="flex items-center gap-2">
                <Search size={18} />
                Search Suppliers
              </div>
            </motion.button>
          </Link>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-cyan-500 px-6 py-3 font-semibold text-black"
          >
            Generate Report
          </motion.button>

        </div>

        {/* Stats */}
        <div className="mt-20 grid w-full max-w-6xl grid-cols-2 gap-6 md:grid-cols-4">

          {[
            ["247+", "Suppliers"],
            ["18", "Risk Alerts"],
            ["82%", "Inventory Health"],
            ["$4.2M", "Potential Savings"],
          ].map(([num, label]) => (
            <div
              key={label}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <h3 className="text-4xl font-bold text-cyan-400">
                {num}
              </h3>
              <p className="mt-2 text-slate-400">{label}</p>
            </div>
          ))}

        </div>

      </div>
    </motion.section>
  );
}