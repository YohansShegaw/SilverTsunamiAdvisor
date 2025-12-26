"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { motion, Variants } from "framer-motion"; // Import Variants type
import dynamic from "next/dynamic";
import { ArrowRight, Target, ShieldCheck, TrendingUp, Users } from "lucide-react";

// Dynamic import for CountUp to avoid hydration errors
const CountUp = dynamic(() => import("react-countup"), { ssr: false });

export default function AboutPage() {
  // FIX: Added type 'Variants' and 'as const' to ease
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" as const } 
    },
  };

  const stats = [
    { 
      value: 25, 
      suffix: "%", 
      label: "Potential EBITDA Increase", 
      icon: TrendingUp,
      gradient: "from-cyan-400 to-blue-500" 
    },
    { 
      value: 24, 
      label: "Month Max Strategy", 
      suffix: "mo", 
      icon: Target,
      gradient: "from-purple-400 to-pink-500" 
    },
    { 
      value: 1, 
      prefix: "$", 
      suffix: "M", 
      label: "Value added per $100k EBITDA", 
      icon: Users, // Using generic icon for wealth
      gradient: "from-amber-300 to-orange-500" 
    },
    { 
      value: 100, 
      suffix: "%", 
      label: "Fiduciary Commitment", 
      icon: ShieldCheck,
      gradient: "from-emerald-400 to-green-500" 
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-black text-white min-h-screen overflow-x-hidden selection:bg-cyan-500/30">
        
        {/* HERO SECTION */}
        <section className="relative pt-40 pb-20 px-6 text-center overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-grid-white/[0.05] -z-10" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-900/20 blur-[100px] rounded-full -z-10" />

          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={fadeInUp} 
            className="relative max-w-5xl mx-auto space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-sm font-medium text-cyan-200 uppercase tracking-widest">About Us</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1]">
              Defining the <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-400 to-pink-400">
                Future of Exits
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
              Navigating the "Silver Tsunami" of business transitions. We help owners maximize value, streamline operations, and secure their legacy before the sale.
            </p>
          </motion.div>
        </section>

        {/* MISSION & VISION GRID */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Card 1 */}
            <motion.div 
              variants={fadeInUp} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full p-10 bg-linear-to-br from-blue-950/30 to-black backdrop-blur-xl border border-blue-500/20 rounded-3xl overflow-hidden hover:border-blue-500/40 transition-colors duration-500">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-3xl rounded-full group-hover:bg-blue-600/20 transition duration-500" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-blue-900/30 flex items-center justify-center border border-blue-500/30 mb-8">
                    <Target className="w-7 h-7 text-blue-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    To significantly increase your company's EBITDA and maximize business value in the 8 to 24 months leading up to a sale. We turn standard exits into premium valuations through rigorous operational improvement.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              variants={fadeInUp} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <div className="relative h-full p-10 bg-linear-to-br from-purple-950/30 to-black backdrop-blur-xl border border-purple-500/20 rounded-3xl overflow-hidden hover:border-purple-500/40 transition-colors duration-500">
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 blur-3xl rounded-full group-hover:bg-purple-600/20 transition duration-500" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-purple-900/30 flex items-center justify-center border border-purple-500/30 mb-8">
                    <ShieldCheck className="w-7 h-7 text-purple-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-6">Fiduciary Promise</h2>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    We act as an "honest broker" with full authority to make difficult, unbiased decisions. Whether acting as advisors or Chief Restructuring Officers (CRO), our loyalty is strictly to the value of the asset, not the status quo.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* STORY SECTION */}
        <section className="py-24 px-6 relative">
          {/* Fixed opacity shorthand */}
          <div className="absolute inset-0 bg-white/2" />
          <div className="max-w-4xl mx-auto space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                The <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">Silver Tsunami</span>
              </h2>
              {/* Fixed gradient classes */}
              <div className="h-1 w-24 bg-linear-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="prose prose-invert prose-lg md:prose-xl mx-auto text-gray-300 leading-relaxed"
            >
              <p>
                A massive demographic shift is underway. Thousands of long-time business owners are preparing to sell their life's work. However, many are unprepared for the scrutiny of modern buyers, such as Private Equity firms and Family Offices.
              </p>
              <p>
                At Silver Tsunami Advisors, we specialize in the <strong>pre-sale preparation phase</strong>. We implement strategic enhancements—from AI automation to cost restructuring—that directly impact your valuation. 
              </p>
              <blockquote className="border-l-4 border-cyan-500 pl-6 italic text-white my-8 bg-white/5 py-4 pr-4 rounded-r-lg">
                &quot;Every $100,000 in added EBITDA can translate to an additional $300,000 to $1,000,000 in your pocket at closing.&quot;
              </blockquote>
            </motion.div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="py-24 px-6 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05]" />
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {stats.map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="h-full p-8 bg-[#0B0F1A] border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-linear-to-r ${stat.gradient}`} />
                  
                  <div className="flex items-center gap-3 mb-4 text-gray-500 group-hover:text-white transition-colors">
                    <stat.icon className="w-5 h-5" />
                  </div>

                  <h3 className={`text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-linear-to-r ${stat.gradient} mb-2`}>
                    <CountUp 
                      end={stat.value} 
                      duration={2.5} 
                      prefix={stat.prefix ?? ""} 
                      suffix={stat.suffix ?? ""} 
                      enableScrollSpy 
                      scrollSpyOnce 
                    />
                  </h3>
                  <p className="text-gray-400 font-medium text-sm uppercase tracking-wider">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-6 relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-linear-to-b from-black via-purple-950/10 to-black pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            className="relative z-10 max-w-4xl mx-auto space-y-10"
          >
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight">
              Your Life&apos;s Work <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-400 to-pink-400">
                Deserves a Premium Exit
              </span>
            </h2>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
              <a href="/contact">
                <button className="px-10 py-5 bg-white text-black font-bold text-lg rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2">
                  Start The Process <ArrowRight className="w-5 h-5" />
                </button>
              </a>
            </div>
          </motion.div>
        </section>
        
      </main>
      <Footer/>
    </>
  );
}