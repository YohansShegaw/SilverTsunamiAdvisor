"use client";

import { motion } from "framer-motion";
import { Zap, TrendingUp, Handshake, Brain, Wrench, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Operational Efficiency",
    description: "We identify inefficiencies, redundant tasks, and bottlenecks to drastically improve operational speed and reduce overhead costs.",
    points: ["Process Optimization", "Cost Reduction", "Scalability Protocols"],
  },
  {
    icon: TrendingUp,
    title: "Marketing Alignment",
    description: "Aligning sales and marketing to create consistent messaging, generating higher quality leads and increasing overall profitability.",
    points: ["Lead Quality Boost", "Revenue Attribution", "AI-Driven Automation"],
  },
  {
    icon: Handshake,
    title: "Strategic Acquisitions",
    description: "Rapidly scale your EBITDA by acquiring complementary businesses through our proprietary broker network.",
    points: ["M&A Strategy", "Deal Sourcing", "Integration Planning"],
  },
  {
    icon: Brain,
    title: "AI Implementation",
    description: "Leverage cutting-edge Artificial Intelligence for automation, predictive analytics, and superior financial forecasting.",
    points: ["Predictive Insights", "Automated Workflows", "Customer Engagement"],
  },
  {
    icon: Wrench,
    title: "Strategic Outsourcing",
    description: "Access world-class global talent to handle non-core functions, allowing you to focus purely on growth.",
    points: ["Global Talent Access", "Cost Efficiency", "Flexible Scaling"],
  },
  {
    // Added a 6th item to balance the grid visually
    icon: CheckCircle2,
    title: "Exit Readiness",
    description: "Comprehensive financial and legal preparation to ensure due diligence is seamless and valuation is maximized.",
    points: ["Financial Audits", "Legal Compliance", "Data Room Prep"],
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 md:py-32 relative bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.05] -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-cyan-900/20 blur-[100px] rounded-full -z-10" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white">
            Maximize Your <span className="text-cyan-400">Exit Value</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Proven strategies executed over 8–24 months to transform your business into a premium acquisition target.
          </p>
        </motion.div>

        {/* 
           GRID LAYOUT 
           grid-cols-1 md:grid-cols-2 lg:grid-cols-3
           auto-rows-fr: This ensures all rows have equal height based on the tallest item
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              // h-full ensures the motion div takes full height of the grid cell
              className="h-full group"
            >
              {/* Card Container - flex flex-col is crucial for internal alignment */}
              <div className="relative h-full flex flex-col bg-white/3 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/5 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden">
                
                {/* Hover Gradient Glow */}
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-cyan-500/10 blur-3xl rounded-full group-hover:bg-cyan-500/20 transition-all duration-700" />

                {/* Icon */}
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-linear-to-br from-cyan-900/50 to-blue-900/50 border border-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-cyan-300" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  {feature.title}
                </h3>

                {/* Description - flex-grow pushes the footer down */}
                <p className="text-gray-400 mb-8 leading-relaxed grow">
                  {feature.description}
                </p>

                {/* Points List (Footer) */}
                <ul className="space-y-3 pt-6 border-t border-white/10 mt-auto">
                  {feature.points?.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}