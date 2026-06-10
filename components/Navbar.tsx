'use client';

import Link from 'next/link';

export default function Navbar() {
  const navItems = [
    { name: 'Dashboard', href: '/' },
    { name: 'Suppliers', href: '/suppliers' },
    { name: 'Risk Engine', href: '/risk-engine' },
    { name: 'Recommendations', href: '/recommendations' },
    { name: 'AI Copilot', href: '/copilot' },
  ];

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="w-full max-w-6xl">
        <div className="flex items-center justify-between rounded-full border border-slate-800 bg-black/80 backdrop-blur-xl px-4 py-3 shadow-2xl">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center">
              <span className="font-bold text-black">A</span>
            </div>

            <div>
              <h1 className="text-white font-semibold">
                AutoGuard AI
              </h1>
            </div>
          </Link>

          {/* Center Nav */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-lg px-4 py-2 text-sm text-slate-300 transition-all duration-300 hover:bg-cyan-500/10 hover:text-cyan-400"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="/copilot"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-105"
          >
            Launch AI
          </Link>
        </div>
      </nav>
    </header>
  );
}