"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { motion, Variants } from "framer-motion";
import { 
  Globe2, 
  Coins, 
  Users, 
  Scaling, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Briefcase 
} from "lucide-react";

export default function OutsourcingPage() {
  // Animation Variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" as const } 
    },
  };

  const stagger: Variants = {
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const benefits = [
    {
      title: "Cost Efficiency",
      icon: Coins,
      color: "cyan",
      content: "Convert fixed costs (salaries, benefits, office space) into variable costs. You pay only for the services needed, drastically reducing your operational overhead and boosting EBITDA immediately.",
      stats: "30-50% Savings"
    },
    {
      title: "Access to Top Talent",
      icon: Users,
      color: "blue",
      content: "Gain immediate access to a pool of pre-vetted experts with industry-specific knowledge and advanced tools, bypassing the time-consuming recruitment and training cycles.",
      stats: "Instant Expertise"
    },
    {
      title: "Scalability & Flexibility",
      icon: Scaling,
      color: "purple",
      content: "Quickly scale your workforce up or down in response to market changes or seasonal demands without the legal complexities of hiring or laying off full-time staff.",
      stats: "On-Demand Scaling"
    },
    {
      title: "Ethiopia Operations Hub",
      icon: Globe2,
      color: "green",
      content: "Leverage our specialized operational centers in Ethiopia to provide high-quality support at significantly reduced costs. We combine global standards with local economic advantages.",
      stats: "Premium Arbitrage"
    }
  ];

  return (
    <>
      <Navbar />

      <main className="bg-black text-white min-h-screen selection:bg-cyan-500/30">
        
        {/* HERO SECTION */}
        <section className="relative pt-40 pb-20 px-6 overflow-hidden text-center">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-grid-white/[0.05] -z-10" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-900/20 blur-[100px] rounded-full -z-10" />

          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={fadeInUp} 
            className="max-w-4xl mx-auto space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <Briefcase className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-200 uppercase tracking-widest">Global Talent Strategy</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1]">
              Scale Smarter, <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-500 to-white">
                Not Harder
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
              Focus on your core business while we handle the rest. Strategic outsourcing ensures consistent performance without the overhead.
            </p>
          </motion.div>
        </section>

        {/* INTRO TEXT */}
        <section className="py-12 px-6 max-w-5xl mx-auto">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center mb-16"
           >
             <h2 className="text-3xl font-bold text-white mb-6">Why Outsource?</h2>
             <p className="text-lg text-gray-300 leading-relaxed">
               In the race to maximize EBITDA before an exit, operational efficiency is key. Strategic outsourcing allows you to shed weight, increase speed, and improve margins simultaneously.
             </p>
           </motion.div>
        </section>

        {/* BENEFITS GRID */}
        <section className="py-12 px-6 max-w-7xl mx-auto pb-32">
          <motion.div 
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            // grid layout ensures equal width, 'items-stretch' (default) helps, but h-full on cards is key
            className="grid md:grid-cols-2 gap-8"
          >
            {benefits.map((item, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="h-full" // Force the motion div to fill the grid cell height
              >
                <div className="relative h-full flex flex-col bg-[#0B0F1A] border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 group overflow-hidden">
                  
                  {/* Ambient Hover Glow */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-${item.color}-500/10 blur-3xl rounded-full group-hover:bg-${item.color}-500/20 transition duration-500`} />

                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-${item.color}-900/20 border border-${item.color}-500/30 flex items-center justify-center`}>
                      <item.icon className={`w-7 h-7 text-${item.color}-400`} />
                    </div>
                    <div className={`px-3 py-1 rounded-full bg-${item.color}-900/20 border border-${item.color}-500/20 text-${item.color}-400 text-xs font-bold uppercase tracking-wider`}>
                      {item.stats}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  
                  {/* Flex-grow ensures the text takes available space, pushing footer down if we added one */}
                  <p className="text-gray-400 text-base leading-relaxed grow">
                    {item.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ETHIOPIA SPOTLIGHT SECTION */}
        <section className="py-24 px-6 relative bg-linear-to-b from-[#0B0F1A] to-black border-t border-white/5">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
             
             {/* Left: Content */}
             <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="space-y-8"
             >
                <div className="flex items-center gap-3">
                   <Building2 className="w-6 h-6 text-green-400" />
                   <h2 className="text-3xl md:text-4xl font-black text-white">The Ethiopia Advantage</h2>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Our strategic operations center in Ethiopia is more than just a cost-saving measure; it's a competitive advantage. We leverage a highly educated, English-speaking workforce to deliver premium results.
                </p>
                <ul className="space-y-4">
                  {[
                    "Timezone compatibility with global markets",
                    "Government-backed tech infrastructure",
                    "Highly skilled university graduates",
                    "Cost arbitrage maximizing EBITDA"
                  ].map((pt, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-400">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
             </motion.div>

             {/* Right: Visual Card */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative"
             >
                <div className="absolute inset-0 bg-green-500/10 blur-3xl rounded-full" />
                <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-10 flex flex-col items-center justify-center text-center space-y-6">
                   <Globe2 className="w-20 h-20 text-green-400 opacity-80" />
                   <div>
                     <div className="text-5xl font-black text-white">70%</div>
                     <div className="text-sm text-gray-400 uppercase tracking-widest mt-2">Operational Savings</div>
                   </div>
                   <p className="text-sm text-gray-500 italic">
                     *Average client savings vs US/EU in-house teams
                   </p>
                </div>
             </motion.div>

          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-6 text-center bg-black">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="max-w-3xl mx-auto space-y-8"
           >
             <h2 className="text-4xl font-black text-white">
               Ready to Optimize?
             </h2>
             <p className="text-xl text-gray-400">
               Start reducing overhead and increasing valuation today.
             </p>
             <a href="/contact">
               <button className="px-10 py-5 bg-white text-black font-bold text-lg rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2 mx-auto">
                  Discuss Outsourcing Strategy <ArrowRight className="w-5 h-5" />
               </button>
             </a>
           </motion.div>
        </section>

      </main>
      <Footer />
    </>
  );
}