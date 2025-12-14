"use client";
import { motion } from "framer-motion";
import { useState, useEffect, memo } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
  ssr: false,
});

// MEMOIZED COUNTER TO PREVENT GLOBAL RE-RENDERS (STOPS SHAKING)
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
    // tabular-nums keeps the width of numbers constant so text doesn't jitter
    <span className="tabular-nums">
      +${count.toLocaleString()}
    </span>
  );
});

ValuationCounter.displayName = "ValuationCounter";

export function HeroSection() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#0B0F1A",
    showAtmosphere: true,
    atmosphereColor: "#3b82f6",
    atmosphereAltitude: 0.2,
    emissive: "#062056",
    emissiveIntensity: 0.5,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 38.9072, lng: -77.0369 },
    autoRotate: true,
    autoRotateSpeed: 0.6,
  };

  const connections = [
    { order: 1, startLat: 38.9072, startLng: -77.0369, endLat: 9.145, endLng: 40.489673, color: "#06b6d4", arcAlt: 0.2 },
    { order: 2, startLat: 38.9072, startLng: -77.0369, endLat: 51.5072, endLng: -0.1276, color: "#8b5cf6", arcAlt: 0.3 },
  ];

  return (
    <div className="relative w-full bg-[#050505] min-h-[100dvh] flex flex-col items-center justify-center pt-24 overflow-hidden">
      
      {/* 1. GLOBE - Fixed z-index and position */}
      <div className="absolute top-[20%] md:top-[15%] left-0 w-full h-[600px] md:h-[900px] z-0 opacity-60 pointer-events-none mix-blend-screen">
         <World data={connections} globeConfig={globeConfig} />
      </div>

      {/* 2. GRADIENT OVERLAY (Fades bottom of globe) */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#050505] to-transparent z-10" />

      {/* 3. CONTENT */}
      <div className="max-w-7xl mx-auto text-center px-4 z-20 relative">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 md:mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-[10px] md:text-xs font-medium text-cyan-300 uppercase tracking-wider">
            8-24 Month Value Acceleration
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight text-white drop-shadow-2xl"
        >
          Maximize Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
            Valuation
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-400 max-w-xl mx-auto mt-6 md:mt-8 text-base md:text-xl leading-relaxed font-light px-4"
        >
          EBITDA Growth. AI Automation. Strategic Acquisitions. <br className="hidden md:block"/>
          We build your business value before you sell.
        </motion.p>

        {/* Counter Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 md:mt-12 flex justify-center"
        >
          <div className="relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl px-8 py-5 md:px-10 md:py-6 shadow-2xl">
               <p className="text-gray-500 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-1">
                 Valuation Multiplier
               </p>
               <div className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                  <ValuationCounter />
               </div>
               <p className="text-cyan-400 text-[10px] md:text-xs font-medium mt-2">
                  per $100k added EBITDA (10x Multiple)
               </p>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 md:mt-12 flex flex-col sm:flex-row justify-center gap-4 md:gap-6 px-4"
        >
          <Link href="/contact" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-xl hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2">
              Start Strategy <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
          <Link href="/services" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 transition-all backdrop-blur-sm">
              Explore Services
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}