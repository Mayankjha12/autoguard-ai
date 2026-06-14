'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Search, RefreshCw, BarChart3 } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import {
  motion,
  animate,
  useMotionTemplate,
  useMotionValue,
} from 'framer-motion';

import { useDashboard } from '@/context/DashboardContext';

const COLORS_TOP = ['#06B6D4', '#2563EB', '#7C3AED', '#0EA5E9'];

export default function Header() {
  const { resetDashboard, searchInput } = useDashboard();

  const hasActiveSearch = Object.keys(searchInput).length > 0;

  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: 'easeInOut',
      duration: 8,
      repeat: Infinity,
      repeatType: 'mirror',
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

  return (
  <motion.section
  style={{ backgroundImage }}
  className="relative flex min-h-[85vh] w-full items-center justify-center overflow-hidden"
>
  {/* Stars Background */}
  <div className="absolute inset-0 z-0 h-full w-full">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Stars
        radius={100}
        depth={50}
        count={4000}
        factor={4}
        saturation={0}
        fade
        speed={1.5}
      />
    </Canvas>
  </div>

  {/* Overlay */}
  <div className="absolute inset-0 z-0 bg-black/20" />

  {/* Content */}
  <div className="relative z-10 flex w-full flex-col items-center justify-center px-6 text-center -mt-20">

    {/* HERO TITLE */}
    <div className="mb-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
        AI-Powered Supply Chain
      </h1>

      <h1 className="mt-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-cyan-400">
        Intelligence
      </h1>
    </div>

    {/* Subtitle */}
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl"
    >
      Monitor suppliers, predict disruptions,
      optimize inventory, reduce operational risk,
      and make smarter supply chain decisions with
      advanced AI insights.
    </motion.p>

    {/* Search Status */}
    {hasActiveSearch && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-6 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300"
      >
        Dashboard updated with your latest search filters
      </motion.div>
    )}

    {/* Buttons */}
    <div className="mt-10 flex flex-wrap justify-center gap-4">

      <Link href="/search">
        <motion.button
          style={{ border, boxShadow }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full bg-slate-950/40 px-7 py-3 text-white backdrop-blur-md transition-all"
        >
          <div className="flex items-center gap-2">
            <Search size={18} />
            Suppliers
          </div>
        </motion.button>
      </Link>

      {hasActiveSearch && (
        <Link href="/dashboard#results">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-cyan-500 px-7 py-3 font-semibold text-black transition-all hover:bg-cyan-400"
          >
            <div className="flex items-center gap-2">
              <BarChart3 size={18} />
              View Results
            </div>
          </motion.button>
        </Link>
      )}

      {hasActiveSearch && (
        <motion.button
          onClick={resetDashboard}
          style={{ border, boxShadow }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full bg-slate-950/40 px-7 py-3 text-white backdrop-blur-md transition-all"
        >
          <div className="flex items-center gap-2">
            <RefreshCw size={18} />
            Reset Filters
          </div>
        </motion.button>
      )}

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="
          rounded-full
          border border-cyan-500/30
          bg-cyan-500/10
          px-7 py-3
          font-semibold
          text-cyan-300
          backdrop-blur-md
          transition-all
          hover:bg-cyan-500/20
          hover:text-cyan-200
          hover:shadow-[0_0_25px_rgba(6,182,212,0.35)]
        "
      >
        Generate Report
      </motion.button>

    </div>
  </div>
</motion.section>
  );
}