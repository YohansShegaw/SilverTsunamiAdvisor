"use client";
import React, { useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  Menu, X, Calculator, Layers, Info, Sparkles, 
  ChevronDown, TrendingUp, ShieldAlert, Merge, BrainCircuit 
} from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export function Navbar() {
  const { user } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveringServices, setHoveringServices] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  // Grouped Services for Dropdown
  const serviceItems = [
    { name: "EBITDA Growth", link: "/ebitda", icon: <TrendingUp className="h-4 w-4 text-cyan-400" />, desc: "Maximize profitability" },
    { name: "M&A Strategy", link: "/acquisitions", icon: <Merge className="h-4 w-4 text-purple-400" />, desc: "Acquisitions & Exits" },
    { name: "AI Integration", link: "/ai-integration", icon: <BrainCircuit className="h-4 w-4 text-blue-400" />, desc: "Automation & Tech" },
    { name: "Restructuring / CRO", link: "/bankruptcy-assistance", icon: <ShieldAlert className="h-4 w-4 text-red-400" />, desc: "Crisis Management" },
    { name: "Outsourcing", link: "/outsourcing", icon: <Layers className="h-4 w-4 text-green-400" />, desc: "Cost Reduction" },
  ];

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <motion.nav
        animate={isScrolled ? "scrolled" : "top"}
        initial="top"
        variants={{
          top: { width: "100%", top: 0, padding: "1.5rem 3rem", maxWidth: "100%" },
          scrolled: { width: "90%", top: 20, padding: "0.8rem 2rem", maxWidth: "80rem" }, // Increased max-width for better fit
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={cn(
          "fixed inset-x-0 mx-auto z-50 flex justify-between items-center transition-all duration-500",
          isScrolled
            ? "rounded-full border border-white/10 bg-black/60 backdrop-blur-xl shadow-[0_0_20px_rgba(59,130,246,0.2)]"
            : "bg-transparent border-transparent"
        )}
      >
        {/* SHIMMER EFFECT */}
        {isScrolled && (
          <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer" />
          </div>
        )}

        {/* LOGO */}
        <Link href="/" className="relative z-10 flex items-center gap-2 group">
           <img 
             src="/wlogo.png" 
             alt="Silver Tsunami Logo" 
             className="w-9 h-9 object-contain group-hover:scale-105 transition-transform duration-300"
           />
           <span className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
             Silver<span className="font-light text-gray-400">Tsunami</span>
           </span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-300 relative z-10">
          
          {/* 1. SERVICES DROPDOWN */}
          <div 
            className="relative"
            onMouseEnter={() => setHoveringServices(true)}
            onMouseLeave={() => setHoveringServices(false)}
          >
            <button className="flex items-center gap-1 hover:text-white transition-colors py-4">
              Expertise <ChevronDown className={`h-3 w-3 transition-transform ${hoveringServices ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {hoveringServices && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full -left-4 w-72 bg-[#0B0F1A] border border-white/10 rounded-2xl p-2 shadow-2xl backdrop-blur-3xl overflow-hidden"
                >
                   <div className="absolute inset-0 bg-grid-white/[0.05]" />
                   <div className="relative flex flex-col gap-1">
                      {serviceItems.map((item) => (
                        <Link 
                          key={item.link} 
                          href={item.link}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                        >
                          <div className="mt-1 p-1.5 rounded-lg bg-white/5 border border-white/5 group-hover:border-white/10 transition-colors">
                            {item.icon}
                          </div>
                          <div>
                            <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                              {item.name}
                            </div>
                            <div className="text-xs text-gray-500">
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      ))}
                   </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 2. OTHER TOP LEVEL LINKS */}
          <Link href="/investments" className="hover:text-white transition-colors relative group">
            Post-Sale Wealth
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full box-shadow-[0_0_10px_cyan]" />
          </Link>

          <Link href="/calculator" className="hover:text-white transition-colors relative group">
            Calculator
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link href="/about" className="hover:text-white transition-colors relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
          </Link>
        </div>

        {/* CTA BUTTON */}
        <div className="hidden lg:flex items-center space-x-4 relative z-10">
          <Link href="/contact">
            <button className="relative inline-flex h-10 overflow-hidden rounded-full p-px focus:outline-none hover:scale-105 transition-transform">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#3b82f6_50%,#06b6d4_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-6 py-1 text-sm font-bold text-white backdrop-blur-3xl transition-colors hover:bg-gray-900">
                Book Consultation
              </span>
            </button>
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <div className="lg:hidden relative z-10">
          <button onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="h-6 w-6 text-white" />
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full sm:w-80 bg-[#0B0F1A] border-l border-white/10 z-50 p-6 shadow-2xl overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-6">
                <span className="text-xl font-bold text-white">Menu</span>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="h-6 w-6 text-gray-400 hover:text-white transition" />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                
                {/* Services Section in Mobile */}
                <div className="space-y-4">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Expertise</p>
                  {serviceItems.map((item) => (
                    <Link
                      key={item.link}
                      href={item.link}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 text-lg font-light text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="h-px bg-white/10" />

                {/* Other Links */}
                <div className="space-y-4">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Company</p>
                  <Link href="/investments" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-light text-gray-300 hover:text-white">
                    Post-Sale Wealth
                  </Link>
                  <Link href="/calculator" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-light text-gray-300 hover:text-white">
                    Valuation Calculator
                  </Link>
                  <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-light text-gray-300 hover:text-white">
                    About Us
                  </Link>
                </div>

                <div className="mt-6">
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full bg-linear-to-r from-blue-600 to-cyan-500 py-6 text-lg rounded-xl font-bold">
                      Book Consultation
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}