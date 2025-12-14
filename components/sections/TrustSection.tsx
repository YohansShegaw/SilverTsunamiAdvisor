"use client";
import { motion } from "framer-motion";
import { Quote, TrendingUp } from "lucide-react";

export function TrustSection() {
  return (
    <section className="py-24 bg-[#0B0F1A] border-t border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full filter blur-[100px] opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left: The Testimonial (From Bankruptcy PDF) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -top-10 -left-6 text-blue-500/20">
            <Quote size={120} />
          </div>
          <blockquote className="relative z-10 text-2xl md:text-3xl font-light leading-relaxed text-gray-200">
            "Their <span className="text-blue-400 font-semibold">independent perspective</span> and deep expertise were crucial in navigating our Chapter 11 case and securing a positive outcome."
          </blockquote>
          <div className="mt-8 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
              C
            </div>
            <div>
              <p className="text-white font-semibold">Confidential Client</p>
              <p className="text-sm text-gray-400">Portfolio Company, Manufacturing Sector</p>
            </div>
          </div>
        </motion.div>

        {/* Right: Tenacity Group Highlight (From Post Sale PDF) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#111827] to-[#1F2937] p-1 rounded-3xl"
        >
          <div className="bg-[#0B0F1A] rounded-[22px] p-8 md:p-10 border border-white/5 relative overflow-hidden group hover:border-blue-500/30 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-50">
              <TrendingUp className="text-green-400 w-12 h-12" />
            </div>
            
            <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2">
              Investment Spotlight
            </h3>
            <h2 className="text-3xl font-bold text-white mb-4">
              Tenacity Group Land Development
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Exclusive access to tangible real estate ventures. Acquisition of 50 to 5,000 acres of raw land for horizontal development.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/20">
                <p className="text-2xl font-bold text-green-400">15-30%</p>
                <p className="text-xs text-gray-400 uppercase mt-1">Average ROI</p>
              </div>
              <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/20">
                <p className="text-2xl font-bold text-blue-400">4 Years</p>
                <p className="text-xs text-gray-400 uppercase mt-1">Inv. Cycle</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}