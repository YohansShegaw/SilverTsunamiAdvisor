"use client";

import { Navbar } from "@/components/sections/Navbar";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ArrowRight, TrendingUp, Users, Target, ShieldCheck } from "lucide-react";
import { Footer } from "@/components/sections/Footer";

const CountUp = dynamic(() => import("react-countup"), { ssr: false });

export default function AboutPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const stats = [
    { value: 25, suffix: "%", label: "Potential EBITDA Increase", gradient: "from-blue-400 to-cyan-400" },
    { value: 24, label: "Month Max Strategy", suffix: "mo", gradient: "from-purple-400 to-pink-400" },
    { value: 1, prefix: "$", suffix: "M", label: "Value added per $100k EBITDA", gradient: "from-pink-400 to-rose-400" },
    { value: 100, suffix: "%", label: "Fiduciary Commitment", gradient: "from-cyan-400 to-blue-400" },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-[#0B0F1A] text-white">
        {/* Hero */}
        <section className="relative overflow-hidden py-32 px-6 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-pink-600/20" />
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative max-w-6xl mx-auto space-y-8">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x">
              About Silver Tsunami Advisors
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Navigating the "Silver Tsunami" of business transitions. We help owners maximize value, streamline operations, and secure their legacy.
            </p>
          </motion.div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="p-10 bg-gradient-to-br from-blue-900/20 to-blue-900/40 backdrop-blur-lg border border-blue-500/20 rounded-3xl h-full">
                <h2 className="text-4xl font-bold text-blue-400 mb-6 flex items-center gap-4">
                  <Target className="w-10 h-10" /> Our Mission
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To significantly increase your company's EBITDA and maximize business value in the 8 to 24 months leading up to a sale. We turn standard exits into premium valuations.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="p-10 bg-gradient-to-br from-purple-900/20 to-pink-900/40 backdrop-blur-lg border border-purple-500/20 rounded-3xl h-full">
                <h2 className="text-4xl font-bold text-purple-400 mb-6 flex items-center gap-4">
                  <ShieldCheck className="w-10 h-10" /> Fiduciary Promise
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  We act as an "honest broker" with full authority to make difficult, unbiased decisions. Whether acting as advisors or Chief Restructuring Officers (CRO), our loyalty is to the value of the asset.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* The Silver Tsunami Story */}
        <section className="py-24 px-6 max-w-5xl mx-auto text-center space-y-8">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            The "Silver Tsunami"
          </motion.h2>
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed text-left md:text-center">
            <p>
              A massive demographic shift is underway. Thousands of long-time business owners are preparing to sell their life's work. 
              However, many are unprepared for the scrutiny of modern buyers (PE firms, Family Offices).
            </p>
            <p>
              At Silver Tsunami Advisors, we specialize in the <strong>pre-sale preparation phase</strong>. 
              We implement strategic enhancements—from AI automation to cost restructuring—that directly impact your valuation. 
              Every $100,000 in added EBITDA can translate to an additional $300,000 to $1,000,000 in your pocket at closing.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-24 px-6 bg-[#0E1223]/70">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {stats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.8 }}>
                <div className="p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
                  <h3 className={`text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r ${stat.gradient}`}>
                    <CountUp end={stat.value} duration={2.8} prefix={stat.prefix ?? ""} suffix={stat.suffix ?? ""} enableScrollSpy scrollSpyOnce />
                  </h3>
                  <p className="text-gray-400 mt-4 text-sm uppercase tracking-wider">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-6 relative overflow-hidden text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} className="relative max-w-4xl mx-auto space-y-10">
            <h2 className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Your Life's Work Deserves a Premium Exit
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10">
              <a href="/contact" className="px-12 py-5 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg shadow-2xl hover:shadow-blue-500/70 transition flex items-center justify-center gap-3">
                Start The Process <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer/>
    </>
  );
}