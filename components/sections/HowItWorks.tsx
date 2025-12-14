"use client";
import React from "react";
import { motion } from "framer-motion";
import { Search, TrendingUp, Handshake } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Review & Strategy",
    month: "Month 0-2",
    description: "We initiate a comprehensive review of your business financials and operations. We identify inefficiencies and develop a customized 8-24 month roadmap.",
    icon: Search,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    step: "02",
    title: "Value Acceleration",
    month: "Month 2-18",
    description: "Execution phase. We implement AI automation to cut costs, execute strategic outsourcing, and pursue add-on acquisitions to rapidly build EBITDA.",
    icon: TrendingUp,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    step: "03",
    title: "Exit & Legacy",
    month: "Month 18-24",
    description: "We position the business for top-tier buyers (PE firms). After the sale, we transition proceeds into Tenacity Group land development and wealth planning.",
    icon: Handshake,
    gradient: "from-amber-400 to-orange-500",
  },
];

export function HowItWorks() {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            The 8-24 Month Roadmap
          </motion.h2>
          <p className="text-gray-400">Our proven methodology for maximum valuation.</p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-8 md:pl-0">
            
            {/* The Vertical Line */}
            <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 md:-translate-x-1/2 rounded-full" />

            <div className="space-y-20">
              {steps.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row items-center gap-10 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  
                  {/* Content Side */}
                  <div className={`w-full md:w-1/2 ${i % 2 === 0 ? "md:pl-16" : "md:pr-16 md:text-right"}`}>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-white mb-4`}>
                      {item.month}
                    </span>
                    <h3 className="text-3xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed font-light text-lg">
                      {item.description}
                    </p>
                  </div>

                  {/* Icon/Dot Center */}
                  <div className="absolute left-0 md:left-1/2 w-20 h-20 -translate-x-0 md:-translate-x-1/2 flex items-center justify-center rounded-full bg-[#050505] border-4 border-[#111] z-10 shadow-2xl">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-lg`}>
                        <item.icon size={20} />
                    </div>
                  </div>

                  {/* Empty Side (for balance) */}
                  <div className="hidden md:block w-1/2" />

                </motion.div>
              ))}
            </div>
        </div>

      </div>
    </section>
  );
}