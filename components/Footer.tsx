'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020617] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-cyan-400">
              AutoGuard AI
            </h2>

            <p className="mt-4 text-slate-400 text-sm leading-6">
              AI-powered supply chain intelligence platform helping businesses
              optimize suppliers, reduce risks, and improve operational
              efficiency.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-cyan-400">
                  Dashboard
                </Link>
              </li>

              <li>
                <Link
                  href="/search"
                  className="text-slate-400 hover:text-cyan-400"
                >
                  Search
                </Link>
              </li>

              <li>
                <Link
                  href="/suppliers"
                  className="text-slate-400 hover:text-cyan-400"
                >
                  Suppliers
                </Link>
              </li>

              <li>
                <Link
                  href="/risk-engine"
                  className="text-slate-400 hover:text-cyan-400"
                >
                  Risk Engine
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-slate-400 hover:text-cyan-400">
                  Documentation
                </Link>
              </li>

              <li>
                <Link href="#" className="text-slate-400 hover:text-cyan-400">
                  API Reference
                </Link>
              </li>

              <li>
                <Link href="#" className="text-slate-400 hover:text-cyan-400">
                  Support
                </Link>
              </li>

              <li>
                <Link href="#" className="text-slate-400 hover:text-cyan-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-slate-400 hover:text-cyan-400">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="#" className="text-slate-400 hover:text-cyan-400">
                  Careers
                </Link>
              </li>

              <li>
                <Link href="#" className="text-slate-400 hover:text-cyan-400">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="#" className="text-slate-400 hover:text-cyan-400">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} AutoGuard AI. All rights reserved.
          </p>

          <p className="text-slate-500 text-sm">
            Built with AI for smarter supply chain decisions.
          </p>
        </div>
      </div>
    </footer>
  );
}