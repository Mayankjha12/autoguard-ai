import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-[#030712]/95 backdrop-blur">
      <div className="max-w-[1600px] mx-auto px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-cyan-400"
        >
          AutoGuard AI
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-slate-300 hover:text-cyan-400 transition"
          >
            Dashboard
          </Link>

          <Link
            href="/suppliers"
            className="text-slate-300 hover:text-cyan-400 transition"
          >
            Suppliers
          </Link>

          <Link
            href="/risk-engine"
            className="text-slate-300 hover:text-cyan-400 transition"
          >
            Risk Engine
          </Link>

          <Link
            href="/recommendations"
            className="text-slate-300 hover:text-cyan-400 transition"
          >
            Recommendations
          </Link>

          <Link
            href="/copilot"
            className="text-slate-300 hover:text-cyan-400 transition"
          >
            AI Copilot
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <input
            placeholder="Search..."
            className="bg-[#0b1628] border border-slate-700 rounded-xl px-4 py-2 text-sm"
          />

          <div className="h-10 w-10 rounded-full bg-cyan-500 flex items-center justify-center font-bold">
            M
          </div>
        </div>

      </div>
    </nav>
  );
}