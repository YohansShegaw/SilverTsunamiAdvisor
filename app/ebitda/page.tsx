"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { motion, Variants } from "framer-motion"; // Import Variants type
import { 
  TrendingUp, Briefcase, BarChart3, Landmark, CircleDollarSign, 
  Scissors, PieChart, Users, CreditCard, Building2, Wallet, 
  ArrowRight, Lightbulb
} from "lucide-react";

export default function EbitdaPage() {
  // FIX: Added 'as const' to ease to prevent type errors
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" as const } 
    },
  };

  const stagger: Variants = {
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const uses = [
    {
      title: "For Investors",
      icon: TrendingUp,
      content: "Investors view EBITDA as a transparent measure, eliminating tax strategies and tactical accounting. It allows for comparison between similar businesses and gauges scalability.",
      color: "blue"
    },
    {
      title: "For Buyers",
      icon: Briefcase,
      content: "Essential for valuation in M&A. Companies are often valued by applying an industry-specific multiplier (e.g., 4x or 6x EBITDA). Buyers appreciate its straightforward nature.",
      color: "cyan"
    },
    {
      title: "For Internal Use",
      icon: BarChart3,
      content: "Senior leadership uses EBITDA as a KPI to monitor progress. Linking bonuses to EBITDA targets encourages a focus on generating gross profits rather than just revenue.",
      color: "purple"
    },
    {
      title: "For Advisors & Banks",
      icon: Landmark,
      content: "Financial advisors use it to create tailored funding packages. A strong EBITDA history helps secure larger loans, better interest rates, and greater financial flexibility.",
      color: "green"
    }
  ];

  const strategies = [
    {
      icon: CircleDollarSign,
      title: "1. Increase Revenue (No New Costs)",
      desc: "Boosting income without raising expenses is fundamental.",
      points: ["Raising prices when feasible", "Upselling and cross-selling", "Improving client retention"]
    },
    {
      icon: Scissors,
      title: "2. Reduce Operating Costs",
      desc: "Cutting unnecessary expenses impacts EBITDA just as revenue does.",
      points: ["Auditing administrative processes", "Cancelling unused subscriptions", "Outsourcing for efficiency"]
    },
    {
      icon: PieChart,
      title: "3. Improve Gross Margins",
      desc: "Driving efficiencies to expand margins without raising prices.",
      points: ["Re-evaluating supply chains", "Sourcing affordable materials", "Improving production procedures"]
    },
    {
      icon: Users,
      title: "4. Productivity & Staff Retention",
      desc: "Using AI and technology to reassess productivity.",
      points: ["Automating manual processes", "Restructuring tasks with software", "Investing in training & retention"]
    },
    {
      icon: CreditCard,
      title: "5. Lower Bad Debt",
      desc: "Poor credit management disrupts cash flow.",
      points: ["Invoicing earlier", "Setting clear credit guidelines", "Offering prompt payment discounts"]
    },
    {
      icon: Building2,
      title: "6. Limit Capital Load",
      desc: "Spreading capital loads by transitioning to leasing models.",
      points: ["Leasing vs. buying major assets", "Cloud-based solutions vs. hardware", "Strategic debt financing"]
    },
    {
      icon: Wallet,
      title: "7. Optimize Working Capital",
      desc: "Using finance tools to boost working capital.",
      points: ["Invoice financing for cash flow", "Dynamic discounting with suppliers", "Revolving credit facilities"]
    }
  ];

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
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-sm font-medium text-cyan-200 uppercase tracking-widest">Financial Strategy</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight">
              Understanding <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-cyan-400 to-white">
                EBITDA & Growth
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
              The definitive guide to understanding your business's core value metric and 7 actionable strategies to increase it before you sell.
            </p>
          </motion.div>
        </section>

        {/* SECTION 1: USES OF EBITDA */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold border-l-4 border-cyan-500 pl-4 text-white">Why EBITDA Matters</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {uses.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-8 bg-[#0B0F1A] border border-white/10 rounded-3xl hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl" />
                <div className="relative z-10 flex items-start gap-6">
                  <div className={`p-4 rounded-2xl bg-${item.color}-900/20 border border-${item.color}-500/20`}>
                    <item.icon className={`w-8 h-8 text-${item.color}-400`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {item.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 2: 7 WAYS TO INCREASE EBITDA */}
        <section className="py-24 px-6 bg-[#050505] relative border-t border-white/5">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
                7 Ways to Increase <span className="text-cyan-400">EBITDA</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Implementing these strategies increases your likelihood of obtaining top-level funding and maximizing your business’s sale price.
              </p>
            </motion.div>

            <motion.div 
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {strategies.map((strat, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeInUp}
                  className={`relative group ${i === 6 ? "md:col-span-2 lg:col-span-1" : ""}`}
                >
                  <div className="h-full bg-white/3 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/5 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-linear-to-br from-cyan-900/40 to-blue-900/40 border border-cyan-500/30 flex items-center justify-center">
                        <strat.icon className="w-6 h-6 text-cyan-300" />
                      </div>
                      <h3 className="text-lg font-bold text-white leading-tight">{strat.title}</h3>
                    </div>
                    
                    <p className="text-gray-400 text-sm mb-6 border-b border-white/10 pb-4">
                      {strat.desc}
                    </p>

                    <ul className="space-y-3">
                      {strat.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION 3: PRO TIP & CTA */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="max-w-4xl mx-auto">
            
            {/* Pro Tip Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-linear-to-r from-blue-900/20 to-cyan-900/20 border border-cyan-500/30 rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-32 bg-cyan-500/10 blur-3xl rounded-full" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="w-6 h-6 text-yellow-400" />
                  <h3 className="text-xl font-bold text-white">Investment Timing Strategy</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  As depreciation and amortization are calculated after EBITDA, investment timing can have a significant impact. 
                  By shifting investment timing, you can temporarily boost your EBITDA for short-term needs such as loan applications 
                  or to achieve a higher market valuation.
                </p>
              </div>
            </motion.div>

            {/* Bottom CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center space-y-8"
            >
              <h2 className="text-4xl font-black text-white">
                Turn Strategy into <span className="text-cyan-400">Valuation</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Upon acceptance into the program, Silver Tsunami Advisors will initiate a comprehensive review of your business and develop an 8 to 24 month strategy to increase EBITDA.
              </p>
              
              <div className="flex justify-center pt-4">
                <a href="/contact">
                  <button className="px-10 py-5 bg-white text-black font-bold text-lg rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center gap-2">
                    Book Consultation <ArrowRight className="w-5 h-5" />
                  </button>
                </a>
              </div>
            </motion.div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}