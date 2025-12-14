"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";

export function ValuationCalculator() {
  const [currentEbitda, setCurrentEbitda] = useState(500000); // Default $500k
  const [projectedIncrease, setProjectedIncrease] = useState(100000); // Default $100k increase
  const [multiple, setMultiple] = useState(4); // Default 4x multiple (PDF mentions 4x - 6x)

  // Math based on PDF
  const addedValue = projectedIncrease * multiple;
  const newValuation = (currentEbitda + projectedIncrease) * multiple;

  return (
    <section id="valuation-calculator" className="py-24 bg-[#0B0F1A] flex justify-center px-4 border-t border-white/5">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Inputs */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-4xl font-bold text-white">
              Valuation Impact <br/>
              <span className="text-blue-500">Calculator</span>
            </h2>
            <p className="text-gray-400">
              See how increasing your EBITDA directly impacts your final sale price. 
              <br/><span className="text-xs italic text-gray-500">*Based on PDF metrics: 4x-6x multipliers common in M&A.</span>
            </p>
          </motion.div>

          <form className="space-y-6 bg-white/5 p-6 rounded-3xl border border-white/10">
            <LabelInputContainer>
              <Label className="text-gray-300">Current EBITDA ($)</Label>
              <Input
                type="number"
                value={currentEbitda}
                onChange={(e) => setCurrentEbitda(Number(e.target.value))}
                className="bg-black/50 border-white/10 text-white"
              />
            </LabelInputContainer>

            <LabelInputContainer>
              <Label className="text-gray-300">Projected Increase ($)</Label>
              <div className="flex gap-4 items-center">
                 <Input
                    type="number"
                    value={projectedIncrease}
                    onChange={(e) => setProjectedIncrease(Number(e.target.value))}
                    className="bg-black/50 border-white/10 text-white"
                 />
              </div>
            </LabelInputContainer>

            <LabelInputContainer>
              <Label className="text-gray-300">Industry Multiplier (x{multiple})</Label>
              <div className="pt-2">
                 <input 
                    type="range" 
                    min="3" 
                    max="10" 
                    step="0.5" 
                    value={multiple} 
                    onChange={(e) => setMultiple(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                 />
                 <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>3x (Conservative)</span>
                    <span>10x (High Tech)</span>
                 </div>
              </div>
            </LabelInputContainer>
          </form>
        </div>

        {/* Right Side: Results */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/30 p-10 rounded-3xl text-center space-y-8 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400" />
          
          <div>
            <p className="text-gray-400 text-sm uppercase tracking-widest font-semibold mb-2">Value Added to Sale Price</p>
            <p className="text-5xl font-black text-white drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
               +${addedValue.toLocaleString()}
            </p>
          </div>

          <div className="h-px bg-white/10 w-full" />

          <div>
             <p className="text-gray-400 text-sm uppercase tracking-widest font-semibold mb-2">Estimated New Valuation</p>
             <p className="text-3xl font-bold text-blue-300">
                ${newValuation.toLocaleString()}
             </p>
          </div>

          <p className="text-xs text-gray-400 bg-black/30 p-4 rounded-xl">
            "Increasing your EBITDA can directly enhance your company’s valuation during a sale."
          </p>

          <a href="/contact">
            <button type="button" className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition mt-4">
                Get a Professional Valuation
            </button>
          </a>
        </motion.div>

      </div>
    </section>
  );
}

const LabelInputContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col space-y-2 w-full">{children}</div>
);