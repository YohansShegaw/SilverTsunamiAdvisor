"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { motion, Variants } from "framer-motion"; // Import Variants
import { 
  Landmark, Handshake, Trees, TrendingUp, ArrowRight, 
  ShieldCheck, HardHat, PieChart 
} from "lucide-react";

export default function PostSalePage() {
  // FIX: Added 'as const' to ease
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" as const } 
    },
  };

  const stagger: Variants = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const pillars = [
    {
      title: "1. Financial Advisor Network",
      icon: Landmark,
      color: "blue",
      description: "We bridge the gap between your business exit and long-term wealth management by connecting you with experienced advisors.",
      points: [
        "Wealth Management: Strategic planning for preservation and growth.",
        "Legacy Planning: Estate planning experts for generational wealth.",
        "Tax Efficiency: Structuring proceeds to minimize liability."
      ]
    },
    {
      title: "2. Business Broker Collaboration",
      icon: Handshake,
      color: "purple",
      description: "Our relationships extend beyond the sale. We work in concert to understand the full scope of your transaction for seamless transition planning.",
      points: [
        "Seamless Transition: Coordinated planning with your broker.",
        "Future Acquisitions: Identification of new business opportunities.",
        "Network Access: continued support from our ecosystem."
      ]
    },
    {
      title: "3. Exclusive Real Estate Access",
      icon: Trees,
      color: "green",
      description: "For those interested in tangible assets, we offer exclusive access to opportunities through our in-house sister company, Tenacity Group.",
      points: [
        "Raw Land Acquisition: 50 to 5,000 acres.",
        "Horizontal Development: Clearing, utilities, and entitlements.",
        "High ROI Potential: Proven development team execution."
      ]
    }
  ];

  return (
    <>
      <Navbar />

      <main className="bg-black text-white min-h-screen selection:bg-cyan-500/30">
        
        {/* HERO SECTION */}
        <section className="relative pt-40 pb-20 px-6 overflow-hidden text-center">
          <div className="absolute inset-0 bg-grid-white/[0.05] -z-10" />
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-green-900/20 blur-[100px] rounded-full -z-10" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-900/20 blur-[100px] rounded-full -z-10" />

          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={fadeInUp} 
            className="max-w-4xl mx-auto space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-sm font-medium text-cyan-200 uppercase tracking-widest">Wealth & Legacy</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1]">
              Maximize Your <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-green-400 to-white">
                Post-Sale Prosperity
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
              Selling your business is a monumental achievement, but the journey doesn't end at the closing table. We specialize in transforming sale proceeds into lasting wealth.
            </p>
          </motion.div>
        </section>

        {/* INTRO TEXT SECTION */}
        <section className="py-20 px-6 max-w-4xl mx-auto text-center border-b border-white/5">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white">Unlock New Opportunities</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              At Silver Tsunami Advisors, we guide business owners through the next critical phase: securing your legacy. We provide a comprehensive platform of resources and curated investment opportunities designed to help you navigate your financial future with confidence.
            </p>
          </motion.div>
        </section>

        {/* INTEGRATED APPROACH GRID */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-black text-white mb-4">Our Integrated Approach</h2>
            <p className="text-gray-400">Connecting you with a vetted ecosystem of professionals.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {pillars.map((pillar, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="h-full"
              >
                <div className="h-full flex flex-col relative bg-[#0B0F1A] border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 group overflow-hidden">
                  {/* Hover Glow */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-${pillar.color}-500/10 blur-3xl rounded-full group-hover:bg-${pillar.color}-500/20 transition duration-500`} />

                  <div className={`w-14 h-14 rounded-2xl bg-${pillar.color}-900/20 border border-${pillar.color}-500/30 flex items-center justify-center mb-6`}>
                    <pillar.icon className={`w-7 h-7 text-${pillar.color}-400`} />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">{pillar.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 grow">
                    {pillar.description}
                  </p>

                  <ul className="space-y-4 pt-6 border-t border-white/10 mt-auto">
                    {pillar.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                        <ShieldCheck className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* TENACITY GROUP SPOTLIGHT SECTION */}
        <section className="py-24 px-6 relative bg-linear-to-b from-gray-900 to-black">
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
          
          <div className="max-w-7xl mx-auto relative z-10">
             <div className="flex items-center gap-4 mb-12">
                <Trees className="w-8 h-8 text-green-400" />
                <h2 className="text-4xl md:text-5xl font-black text-white">
                  Spotlight: <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-cyan-400">Tenacity Group</span>
                </h2>
             </div>

             <div className="grid lg:grid-cols-2 gap-12">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <p className="text-xl text-gray-300 leading-relaxed">
                    For those interested in tangible assets, Tenacity Group specializes in the acquisition of <strong className="text-white">50 to 5,000 acres</strong> of raw land.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="p-3 bg-white/5 rounded-xl h-fit"><HardHat className="w-6 h-6 text-green-400"/></div>
                      <div>
                        <h4 className="text-lg font-bold text-white">Horizontal Development</h4>
                        <p className="text-gray-400 text-sm">We handle land clearing, utilities, curb cuts, and entitlements prior to selling bare lots to large scale residential builders.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="p-3 bg-white/5 rounded-xl h-fit"><TrendingUp className="w-6 h-6 text-green-400"/></div>
                      <div>
                        <h4 className="text-lg font-bold text-white">Alternative Investments</h4>
                        <p className="text-gray-400 text-sm">Explore high-potential, specialized investments outside of traditional markets with a proven development team.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-[#0F1420] border border-white/10 rounded-3xl p-8 relative overflow-hidden"
                >
                   <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-[80px] rounded-full" />
                   
                   <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                     <PieChart className="w-6 h-6 text-green-400" /> Investment Cycle
                   </h3>

                   <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="p-4 bg-black/40 rounded-2xl border border-white/5">
                        <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Average ROI</p>
                        <p className="text-3xl font-black text-green-400">15-30%</p>
                        <p className="text-xs text-gray-500">APR</p>
                      </div>
                      <div className="p-4 bg-black/40 rounded-2xl border border-white/5">
                        <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Duration</p>
                        <p className="text-3xl font-black text-white">4 Years</p>
                        <p className="text-xs text-gray-500">Typical Cycle</p>
                      </div>
                   </div>

                   <div className="space-y-4">
                      <div className="flex items-center gap-4 text-sm text-gray-300">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-white">3</div>
                        <span>Return of Capital by Year 3</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-300">
                        <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center font-bold">4</div>
                        <span>Full Profits by Year 4</span>
                      </div>
                   </div>
                </motion.div>
             </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-32 px-6 text-center bg-black relative">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="max-w-3xl mx-auto space-y-8"
           >
             <h2 className="text-4xl md:text-5xl font-black text-white">
               Plan Your Next Chapter <span className="text-cyan-400">Today</span>
             </h2>
             <p className="text-xl text-gray-400">
               Don't let the "silver tsunami" catch you unprepared. Proactive planning for your post-sale life is essential for a secure future.
             </p>
             <a href="/contact">
               <button className="px-10 py-5 bg-linear-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg rounded-full hover:scale-105 transition-transform shadow-lg shadow-cyan-500/30 flex items-center justify-center gap-2 mx-auto">
                  Maximize Your Prosperity <ArrowRight className="w-5 h-5" />
               </button>
             </a>
           </motion.div>
        </section>

      </main>
      <Footer />
    </>
  );
}