'use client';

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DashboardProvider } from "@/context/DashboardContext";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="bg-[#030712] text-white">
        <DashboardProvider>
          <Navbar />

          <main className=" min-h-[calc(100vh-400px)] pt-32 flex-grow">
            {children}
          </main>

          <Footer />
        </DashboardProvider>
      </body>
    </html>
  );
}
