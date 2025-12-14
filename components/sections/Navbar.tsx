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
import { Menu, X, Calculator, Layers, Info, Phone, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { getDashboardPath } from "@/lib/utils";

export function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const router = useRouter();
  const dashboardPath = getDashboardPath(user?.roles);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  const navItems = [
    { name: "Expertise", link: "/services", icon: <Layers className="h-4 w-4" /> },
    { name: "Process", link: "/#how-it-works", icon: <Sparkles className="h-4 w-4" /> },
    { name: "Calculator", link: "/#valuation-calculator", icon: <Calculator className="h-4 w-4" /> },
    { name: "About", link: "/about", icon: <Info className="h-4 w-4" /> },
  ];

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <motion.nav
        animate={isScrolled ? "scrolled" : "top"}
        initial="top"
        variants={{
          top: { width: "100%", top: 0, padding: "1.5rem 3rem" },
          scrolled: { width: "70%", top: 20, padding: "0.8rem 2rem" },
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={cn(
          "fixed inset-x-0 mx-auto z-50 flex justify-between items-center transition-all duration-500",
          isScrolled
            ? "rounded-full border border-white/10 bg-black/50 backdrop-blur-xl shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            : "bg-transparent border-transparent"
        )}
      >
        {/* SHINING BORDER EFFECT (Only visible when scrolled) */}
        {isScrolled && (
          <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" />
          </div>
        )}

        {/* LOGO */}
        <a href="/" className="relative z-10 flex items-center gap-2 group">
  <img
    src="/wlogo.png"
    alt="SilverTsunami Logo"
    className="w-8 h-8 object-contain group-hover:scale-105 transition-transform"
  />
  <span className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
    Silver<span className="font-light text-gray-400">Tsunami</span>
  </span>
</a>


        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300 relative z-10">
          {navItems.map((item) => (
            <a
              key={item.link}
              href={item.link}
              className="hover:text-white transition-colors flex items-center gap-2 relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full box-shadow-[0_0_10px_cyan]" />
            </a>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="hidden md:flex items-center space-x-4 relative z-10">
          <a href="/contact">
            <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-colors hover:bg-slate-900">
                Book Consultation
              </span>
            </button>
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <div className="md:hidden relative z-10">
          <button onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="h-6 w-6 text-white" />
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU (Glassmorphism) */}
      <AnimatePresence>
        {isScrolled && isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" onClick={() => setIsMobileMenuOpen(false)} />
        )}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed inset-y-0 right-0 w-3/4 max-w-sm bg-[#0B0F1A]/95 backdrop-blur-2xl border-l border-white/10 z-[60] p-8 shadow-2xl"
          >
            <div className="flex justify-end mb-8">
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="h-8 w-8 text-white hover:text-cyan-400 transition" />
              </button>
            </div>
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.link}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-4 text-2xl font-light text-white hover:text-cyan-400 transition-all hover:translate-x-2"
                >
                  <span className="text-cyan-500">{item.icon}</span>
                  {item.name}
                </a>
              ))}
              <div className="h-px bg-white/10 my-6" />
              <a href="/contact">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 py-6 text-lg rounded-xl shadow-lg shadow-blue-500/20">
                  Get Started
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}