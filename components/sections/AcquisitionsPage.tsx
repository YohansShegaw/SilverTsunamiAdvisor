"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { motion, Variants } from "framer-motion"; // Import Variants
import { 
  TrendingUp, 
  Merge, 
  Scale, 
  Globe2, 
  Cpu, 
  Search, 
  ShieldCheck, 
  Handshake, 
  Layers, 
  ArrowRight 
} from "lucide-react";

export default function AcquisitionsPage() {
  // FIX: Added 'as const' to prevent type errors
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" as const } 
    },
  };

  const stagger: Variants = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const benefits = [
    {
      title: "Economies of Scale",
      icon: Scale,
      text: "By consolidating operations, companies can leverage increased size to negotiate better terms with suppliers, benefit from bulk purchasing discounts, and streamline production and distribution networks. This also allows for the elimination of redundant roles and systems, directly reducing operational costs.",
      color: "blue"
    },
    {
      title: "Revenue Growth & Expansion",
      icon: Globe2,
      text: "Acquisitions provide rapid access to new markets, customer bases, and distribution channels that would be difficult and time-consuming to achieve organically. Cross-selling opportunities and enhanced pricing power in the combined market can significantly boost top-line revenue.",
      color: "purple"
    },
    {
      title: "Resource Optimization",
      icon: Cpu,
      text: "Integrating the 'best practices' of both organizations and pooling valuable assets, such as specialized talent, cutting-edge technology, and intellectual property, leads to improved productivity and streamlined processes.",
      color: "cyan"
    }
  ];

  const services = [
    {
      title: "Target Identification & Valuation",
      icon: Search,
      content: "We help identify targets with strong underlying earnings capacity (normalized EBITDA) and use industry-specific EBITDA multiples to determine a fair purchase price. For instance, as of mid-2025, the median EV/EBITDA multiple for large-cap US companies in the IT sector was 27.25x, while the Energy sector was significantly lower at 7.47x."
    },
    {
      title: "Due Diligence & Synergy Assessment",
      icon: ShieldCheck,
      content: "Our team works with business brokers to conduct rigorous due diligence that realistically project potential synergies and EBITDA addbacks, which can represent a significant portion of the total value achieved in a sale."
    },
    {
      title: "Deal Structuring & Financing",
      icon: Handshake,
      content: "We work with business brokers and financial institutions to help structure deals with favorable terms and securing debt financing, using the combined entity's stronger financial position and predictable cash flows to get better loan terms."
    },
    {
      title: "Post-Acquisition Integration",
      icon: Layers,
      content: "We help orchestrate the integration process to ensure planned cost savings and revenue growth synergies are captured effectively, leading to sustained EBITDA improvement."
    }
  ];

  return (
    <>
      <Navbar />

      <main className="bg-black text-white min-h-screen selection:bg-cyan-500/30">
        
        {/* HERO SECTION - UPGRADED DASHBOARD VERSION */}
        <section className="relative pt-40 pb-20 px-6 overflow-hidden min-h-[90vh] flex items-center">
          
          {/* Background Effects */}
          <div className="absolute inset-0 bg-grid-white/[0.05] -z-10" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/10 blur-[120px] rounded-full -z-10" />

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT SIDE: TEXT */}
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={fadeInUp} 
              className="space-y-8 relative z-10"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-950/20 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <Merge className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-bold text-cyan-200 uppercase tracking-widest">M&A Strategy</span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] text-white">
                Accelerate <br/>
                <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-300 via-blue-500 to-purple-500">
                  Growth.
                </span>
              </h1>
              
              <p className="text-xl text-gray-400 leading-relaxed font-light max-w-xl">
                Silver Tsunami Advisors helps companies increase EBITDA by <span className="text-white font-semibold">10-25%</span> through strategic acquisitions, generating substantial value via cost savings and market expansion.
              </p>

              <div className="flex gap-4">
                 <a href="/contact">
                   <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                      Start M&A Strategy <ArrowRight className="w-5 h-5"/>
                   </button>
                 </a>
              </div>
            </motion.div>

            {/* RIGHT SIDE: VISUAL DASHBOARD CARD */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-linear-to-r from-cyan-500 to-blue-600 blur-3xl opacity-20 transform scale-95" />
              
              <div className="relative z-10 bg-[#0B0F1A]/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl overflow-hidden">
                 
                 {/* Card Header */}
                 <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-6">
                    <div>
                        <h3 className="text-gray-400 text-sm uppercase tracking-wider font-semibold">Projected Outcome</h3>
                        <p className="text-2xl font-bold text-white">Synergy Realization</p>
                    </div>
                    <div className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-xs font-bold text-green-400 uppercase">Active</span>
                    </div>
                 </div>

                 {/* Visual Graph Bars */}
                 <div className="flex items-end gap-4 h-32 mb-8 px-2">
                    <div className="w-full bg-white/5 rounded-t-lg h-[40%] relative group">
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition">Current</div>
                    </div>
                    <div className="w-full bg-white/10 rounded-t-lg h-[60%] relative group">
                         <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition">M&A</div>
                    </div>
                    <div className="w-full bg-linear-to-t from-cyan-600 to-blue-500 rounded-t-lg h-full relative shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white font-bold text-xs">+25%</div>
                    </div>
                 </div>

                 {/* Data Rows */}
                 <div className="space-y-4">
                    <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/5">
                        <div className="flex items-center gap-3">
                            <Layers className="w-5 h-5 text-purple-400" />
                            <span className="text-gray-300 font-medium">Mechanism</span>
                        </div>
                        <span className="text-white font-bold">Inorganic Growth</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/5">
                        <div className="flex items-center gap-3">
                            <TrendingUp className="w-5 h-5 text-cyan-400" />
                            <span className="text-gray-300 font-medium">Result</span>
                        </div>
                        <span className="text-cyan-400 font-bold">Maximized EBITDA</span>
                    </div>
                 </div>

              </div>
            </motion.div>
          </div>
        </section>

        {/* WHY ACQUISITIONS WORK */}
        <section className="py-24 px-6 bg-black relative">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 max-w-3xl"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">Why Acquisitions Increase EBITDA</h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                Acquiring similar companies is a powerful strategy to boost Earnings Before Interest, Taxes, Depreciation, and Amortization (EBITDA). The primary mechanism for this increase is the realization of <strong className="text-white">synergies</strong>, which are the combined benefits that exceed the sum of the individual parts.
              </p>
            </motion.div>

            <motion.div 
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {benefits.map((item, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeInUp}
                  className="group relative h-full"
                >
                  <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent rounded-3xl -z-10 group-hover:bg-white/10 transition duration-500" />
                  <div className="h-full p-8 border border-white/10 rounded-3xl hover:border-cyan-500/30 transition-colors duration-300 flex flex-col">
                    <div className={`w-14 h-14 rounded-2xl bg-${item.color}-900/20 border border-${item.color}-500/30 flex items-center justify-center mb-6`}>
                      <item.icon className={`w-7 h-7 text-${item.color}-400`} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm grow">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* THE APPROACH SECTION */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-b from-blue-950/20 to-black pointer-events-none" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black mb-8 bg-clip-text text-transparent bg-linear-to-r from-white via-cyan-200 to-white"
            >
              The Silver Tsunami Approach
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 leading-relaxed"
            >
              Silver Tsunami Advisors leverage the current demographic shift (the "Silver Tsunami," where many long-time business owners are seeking to sell) to identify and execute ideal acquisition opportunities for your business. We work with business brokers and financial institutions to provide end-to-end M&A advisory services to ensure a smooth and profitable transaction.
            </motion.p>
          </div>
        </section>

        {/* SERVICES LIST */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black mb-12 pl-4 border-l-4 border-cyan-500"
          >
            Our M&A Services Include:
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6"
              >
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-full bg-cyan-900/20 border border-cyan-500/30 flex items-center justify-center mt-1">
                    <service.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                    {service.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-6 text-center bg-black relative">
           <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="max-w-3xl mx-auto"
           >
             <h2 className="text-4xl font-bold text-white mb-8">Ready to Scale Through Acquisition?</h2>
             <a href="/contact">
               <button className="px-10 py-5 bg-white text-black font-bold text-lg rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2 mx-auto">
                  Start Your M&A Strategy <ArrowRight className="w-5 h-5" />
               </button>
             </a>
           </motion.div>
        </section>

      </main>
      <Footer />
    </>
  );
}