"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { motion, Variants } from "framer-motion";
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  ArrowRight, 
  Info, 
  RotateCcw 
} from "lucide-react";

// --- MAKE SURE THIS SAYS 'export default' ---
export default function CalculatorPage() {
  const [currentEbitda, setCurrentEbitda] = useState(500000);
  const [projectedIncrease, setProjectedIncrease] = useState(100000);
  const [multiple, setMultiple] = useState(4);

  // Calculations
  const currentValuation = currentEbitda * multiple;
  const addedValue = projectedIncrease * multiple;
  const newValuation = (currentEbitda + projectedIncrease) * multiple;

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" as const } 
    },
  };

  return (
    <>
      <Navbar />

      <main className="bg-black text-white min-h-screen selection:bg-cyan-500/30">
        
        {/* HERO SECTION */}
        <section className="relative pt-40 pb-20 px-6 overflow-hidden text-center">
          <div className="absolute inset-0 bg-grid-white/[0.05] -z-10" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-900/20 blur-[100px] rounded-full -z-10" />

          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={fadeInUp} 
            className="max-w-4xl mx-auto space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <Calculator className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-200 uppercase tracking-widest">Interactive Tool</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1]">
              The Math of the <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-cyan-400 to-white">
                Exit
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
              See how increasing your EBITDA directly impacts your final sale price using the industry standard "Multiple of Earnings" valuation method.
            </p>
          </motion.div>
        </section>

        {/* CALCULATOR SECTION */}
        <section className="py-12 px-6 max-w-7xl mx-auto pb-32">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT: CONTROLS */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-5 space-y-8"
            >
              <div className="bg-[#0B0F1A] border border-white/10 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-white">Input Metrics</h3>
                  <button 
                    onClick={() => { setCurrentEbitda(500000); setProjectedIncrease(100000); setMultiple(4); }}
                    className="text-gray-500 hover:text-cyan-400 transition"
                    title="Reset Defaults"
                  >
                    <RotateCcw className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-8">
                  {/* Current EBITDA */}
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-gray-400 uppercase tracking-wider flex justify-between">
                      Current EBITDA
                      <span className="text-white">${currentEbitda.toLocaleString()}</span>
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <input 
                        type="number" 
                        value={currentEbitda}
                        onChange={(e) => setCurrentEbitda(Number(e.target.value))}
                        className="w-full bg-black border border-white/10 rounded-xl py-4 pl-10 pr-4 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Projected Increase */}
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-cyan-400 uppercase tracking-wider flex justify-between">
                      Projected EBITDA Increase
                      <span className="text-cyan-400">+${projectedIncrease.toLocaleString()}</span>
                    </label>
                    <div className="relative">
                      <TrendingUp className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-500" />
                      <input 
                        type="number" 
                        value={projectedIncrease}
                        onChange={(e) => setProjectedIncrease(Number(e.target.value))}
                        className="w-full bg-cyan-950/10 border border-cyan-500/30 rounded-xl py-4 pl-10 pr-4 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                      />
                    </div>
                    <p className="text-xs text-gray-500">
                      *Strategies like Cost Reduction, AI, and Outsourcing contribute here.
                    </p>
                  </div>

                  {/* Multiple Slider */}
                  <div className="space-y-4 pt-4 border-t border-white/10">
                    <div className="flex justify-between items-end">
                       <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">
                         Industry Multiple
                       </label>
                       <span className="text-3xl font-black text-white">{multiple}x</span>
                    </div>
                    
                    <input 
                      type="range" 
                      min="3" 
                      max="12" 
                      step="0.5" 
                      value={multiple}
                      onChange={(e) => setMultiple(Number(e.target.value))}
                      className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 hover:accent-cyan-300"
                    />
                    
                    <div className="flex justify-between text-xs text-gray-500 font-medium">
                      <span>3x (Conservative)</span>
                      <span>8x (Average)</span>
                      <span>12x (High Tech)</span>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>

            {/* RIGHT: RESULTS DISPLAY */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-7"
            >
               <div className="bg-linear-to-br from-[#0F1420] to-black border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden h-full flex flex-col justify-center">
                  
                  {/* Background Glow */}
                  <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none" />

                  {/* Header */}
                  <div className="mb-10 text-center md:text-left">
                    <h3 className="text-3xl font-black text-white mb-2">Projected Valuation</h3>
                    <p className="text-gray-400">Based on your inputs, here is the potential exit value.</p>
                  </div>

                  {/* Comparison Grid */}
                  <div className="grid md:grid-cols-2 gap-6 mb-10">
                     
                     {/* Before */}
                     <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                        <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Current Value</p>
                        <p className="text-2xl md:text-3xl font-bold text-gray-300">
                          ${currentValuation.toLocaleString()}
                        </p>
                     </div>

                     {/* After */}
                     <div className="p-6 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 relative overflow-hidden">
                        <div className="absolute inset-0 bg-cyan-500/5 animate-pulse" />
                        <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-2 relative z-10">New Valuation</p>
                        <p className="text-3xl md:text-4xl font-black text-white relative z-10">
                          ${newValuation.toLocaleString()}
                        </p>
                     </div>
                  </div>

                  {/* THE BIG IMPACT NUMBER */}
                  <div className="bg-linear-to-r from-blue-600 to-cyan-500 p-px rounded-3xl">
                    <div className="bg-black rounded-[23px] p-8 text-center relative overflow-hidden">
                       <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 to-cyan-500/10" />
                       <p className="text-cyan-200 font-bold uppercase tracking-widest mb-2 relative z-10">
                         Total Value Added to Sale
                       </p>
                       <p className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-linear-to-r from-white via-cyan-100 to-white relative z-10">
                         +${addedValue.toLocaleString()}
                       </p>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <p className="text-gray-400 text-sm mb-6">
                      Every $1 of EBITDA you add gets multiplied by {multiple}. <br/>
                      That means your <strong>${projectedIncrease.toLocaleString()}</strong> increase is actually worth <strong>${addedValue.toLocaleString()}</strong> at exit.
                    </p>
                    <a href="/contact">
                      <button className="w-full md:w-auto px-10 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-2 mx-auto">
                        Get a Professional Assessment <ArrowRight className="w-5 h-5" />
                      </button>
                    </a>
                  </div>

               </div>
            </motion.div>

          </div>
        </section>

        {/* INFO CARDS */}
        <section className="py-12 px-6 bg-[#050505] border-t border-white/5">
           <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
              {[
                { title: "The Multiplier Effect", desc: "Buyers don't pay for revenue; they pay for EBITDA. In many industries, businesses sell for 4x to 8x their annual EBITDA." },
                { title: "Why Pre-Sale Matters", desc: "Waiting until the sale to fix financials is too late. An 8-24 month runway allows you to implement changes that become permanent EBITDA." },
                { title: "Strategic Positioning", desc: "Organized financials, AI integration, and reduced owner dependency can push your multiple from the lower end (4x) to the higher end (8x+)." },
              ].map((card, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                   <Info className="w-6 h-6 text-cyan-500 mb-4" />
                   <h4 className="text-lg font-bold text-white mb-2">{card.title}</h4>
                   <p className="text-sm text-gray-400">{card.desc}</p>
                </div>
              ))}
           </div>
        </section>

      </main>
      <Footer />
    </>
  );
}