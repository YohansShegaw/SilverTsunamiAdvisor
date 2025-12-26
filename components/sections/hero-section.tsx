"use client";

import { motion } from "framer-motion";
import { useState, useEffect, memo } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";

// Dynamic import for Globe to prevent SSR issues
const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
  ssr: false,
});

// MEMOIZED COUNTER
const ValuationCounter = memo(() => {
  const [count, setCount] = useState(0);
  const target = 1000000;

  useEffect(() => {
    let current = 0;
    const increment = target / 60; 
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 20);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="tabular-nums tracking-tight">
      +${count.toLocaleString()}
    </span>
  );
});

ValuationCounter.displayName = "ValuationCounter";

export function HeroSection() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#000000",
    showAtmosphere: true,
    atmosphereColor: "#06b6d4",
    atmosphereAltitude: 0.15,
    emissive: "#083344",
    emissiveIntensity: 0.8,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.8)",
    ambientLight: "#0ea5e9",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 38.9072, lng: -77.0369 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const connections = [
    { order: 1, startLat: 38.9072, startLng: -77.0369, endLat: 51.5072, endLng: -0.1276, color: "#22d3ee", arcAlt: 0.2 },
    { order: 2, startLat: 38.9072, startLng: -77.0369, endLat: 35.6762, endLng: 139.6503, color: "#3b82f6", arcAlt: 0.4 },
  ];

  return (
    <div className="relative w-full bg-black min-h-dvh flex flex-col items-center justify-center pt-24 overflow-hidden">
      
      {/* 0. Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.05] z-0 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full z-0 pointer-events-none" />

      {/* 1. GLOBE */}
      <div className="absolute top-[10%] md:top-[15%] left-0 w-full h-[600px] md:h-[900px] z-0 opacity-50 pointer-events-none mix-blend-screen">
         <World data={connections} globeConfig={globeConfig} />
      </div>

      {/* 2. GRADIENT OVERLAY */}
      <div className="absolute bottom-0 inset-x-0 h-64 bg-linear-to-t from-black via-black/80 to-transparent z-10" />

      {/* 3. CONTENT */}
      <div className="max-w-7xl mx-auto text-center px-4 z-20 relative">
        
        {/* Animated Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
          </span>
          <span className="text-xs font-semibold text-cyan-200 uppercase tracking-widest">
            8-24 Month Value Acceleration
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-black text-5xl sm:text-7xl md:text-8xl leading-[1.1] tracking-tighter text-white mb-6"
        >
          Maximize Your <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-cyan-300 to-blue-500 animate-gradient-x">
            Valuation
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg md:text-xl leading-relaxed font-light px-4"
        >
          EBITDA Growth. AI Automation. Strategic Acquisitions. <br className="hidden md:block"/>
          <span className="text-gray-200 font-medium">We build your business value before you sell.</span>
        </motion.p>

        {/* Counter Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <div className="relative group bg-[#0B0F1A]/80 backdrop-blur-2xl border border-white/10 rounded-2xl px-10 py-6 shadow-2xl hover:border-cyan-500/30 transition-all duration-500">
               <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000" />
               
               <div className="relative flex flex-col items-center">
                 <div className="flex items-center gap-2 mb-2">
                   <TrendingUp className="w-4 h-4 text-cyan-400" />
                   <p className="text-gray-400 text-xs font-bold tracking-[0.2em] uppercase">
                     Valuation Multiplier
                   </p>
                 </div>
                 <div className="text-5xl md:text-6xl font-black text-white">
                    <ValuationCounter />
                 </div>
                 <p className="text-cyan-400 text-xs font-medium mt-2 bg-cyan-950/30 px-3 py-1 rounded-full border border-cyan-500/20">
                    per $100k added EBITDA (10x Multiple)
                 </p>
               </div>
          </div>
        </motion.div>

        {/* Single Main CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex justify-center px-4"
        >
          <Link href="/contact">
            <button className="group relative px-10 py-5 bg-linear-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full text-lg hover:scale-105 transition-all shadow-[0_0_40px_rgba(6,182,212,0.4)] overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-3">
                Start Strategy <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
              </span>
              {/* Shine effect overlay */}
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
            </button>
          </Link>
        </motion.div>
        
      </div>
    </div>
  );
}