"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { motion, Variants } from "framer-motion"; // Import Variants
import { 
  ShieldAlert, Scale, Activity, Users, Gavel, RefreshCcw, 
  TrendingUp, FileWarning, ArrowRight, Quote
} from "lucide-react";

export default function CroPage() {
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
    visible: { transition: { staggerChildren: 0.15 } },
  };

  // ... (rest of your component content remains the same)
  // Just ensure you are using standard 'bg-gradient-to' classes
  // The rest of the logic logic is unchanged
  const expertise = [
    {
      title: "Independent Leadership",
      icon: Scale,
      content: "We instill confidence and trust by providing unbiased leadership and a fresh perspective, free from the company's historical biases.",
      color: "blue"
    },
    // ... other items
    {
      title: "Operational & Financial Acumen",
      icon: Activity,
      content: "Deep expertise in cash flow management, liquidity preservation, financial modeling, and operational improvements to stabilize performance.",
      color: "cyan"
    },
    {
      title: "Stakeholder Consensus",
      icon: Users,
      content: "We manage negotiations with senior lenders, employees, vendors, and landlords to build consensus and alignment on the path forward.",
      color: "purple"
    },
    {
      title: "Legal & Regulatory Navigation",
      icon: Gavel,
      content: "Strict adherence to legal frameworks, including U.S. Bankruptcy Code, managing the intricacies of Chapter 11 cases and legal proceedings.",
      color: "indigo"
    }
  ];
  
  const services = [
    { title: "Crisis Management", icon: ShieldAlert, content: "Leading the company through periods of acute crisis, managing investor relations, and addressing immediate challenges to stop the bleeding." },
    { title: "Debt Restructuring", icon: RefreshCcw, content: "Negotiating with creditors to modify debt terms, secure new financing (DIP loans), and guide the company's balance sheet recovery." },
    { title: "Operational Turnaround", icon: TrendingUp, content: "Identifying core operational issues and implementing efficiency improvements, cost reductions, and strategic refocusing to restore profitability." },
    { title: "Insolvency Guidance", icon: FileWarning, content: "Guiding businesses through formal insolvency processes, including managing asset liquidation and wind-downs if necessary." }
  ];

  return (
    <>
      <Navbar />
      <main className="bg-black text-white min-h-screen selection:bg-cyan-500/30">
        <section className="relative pt-40 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] -z-10" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full -z-10" />
          
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={fadeInUp} 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-950/20 backdrop-blur-md"
            >
              <ShieldAlert className="w-4 h-4 text-red-400" />
              <span className="text-sm font-bold text-red-200 uppercase tracking-widest">Crisis Management</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1]"
            >
              Expert Chief <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-cyan-300 to-blue-500">
                Restructuring Officers
              </span>
            </motion.h1>
            {/* Rest of the component */}
             <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light"
            >
              When a business is in distress, stakeholders need an independent, trusted expert. We provide the strategic, operational, and financial expertise to guide companies through complex bankruptcy proceedings and successful turnarounds.
            </motion.p>
          </div>
        </section>

        {/* CORE EXPERTISE GRID */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white border-l-4 border-cyan-500 pl-4">Our Expertise</h2>
            <p className="text-gray-400 mt-4 max-w-2xl">
              We act as an objective third party, working directly with the board, management, creditors, and stakeholders to execute comprehensive restructuring plans.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-full"
              >
                <div className="absolute inset-0 bg-linear-to-r from-gray-900 to-black rounded-3xl border border-white/10 group-hover:border-cyan-500/30 transition duration-300" />
                <div className="relative p-8 h-full flex flex-col z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-${item.color}-900/20 border border-${item.color}-500/30 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform`}>
                    <item.icon className={`w-7 h-7 text-${item.color}-400`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="py-24 px-6 bg-[#0B0F1A] border-y border-white/5 relative">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-900/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-black text-white mb-12 text-center"
            >
              Our <span className="text-cyan-400">CRO Services</span>
            </motion.h2>

            <motion.div 
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid lg:grid-cols-4 gap-6"
            >
              {services.map((service, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeInUp}
                  className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/5 transition-colors duration-300"
                >
                  <service.icon className="w-10 h-10 text-cyan-500 mb-6" />
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {service.content}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* TESTIMONIAL & CTA - Abbreviated for brevity, logic matches previous snippet */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
             <div className="space-y-8">
              <h2 className="text-4xl font-black text-white">Why Choose Silver Tsunami?</h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Our professional differentiation lies in our ability to act as an <strong className="text-white">"honest broker"</strong> with full authority to make difficult, unbiased decisions.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-cyan-500 to-blue-600 rounded-3xl blur-2xl opacity-20" />
              <div className="relative bg-[#0F1424] border border-white/10 rounded-3xl p-10">
                <Quote className="w-12 h-12 text-cyan-500/20 mb-6 absolute top-8 right-8" />
                <p className="text-xl font-medium text-white italic mb-8 relative z-10">
                  "Their independent perspective and deep expertise were crucial in navigating our Chapter 11 case and securing a positive outcome."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-white font-bold">Satisfied Client</p>
                    <p className="text-gray-500 text-sm">Post-Restructuring</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 text-center bg-[#050505] border-t border-white/5">
           <div className="max-w-3xl mx-auto space-y-8">
             <h2 className="text-3xl md:text-4xl font-black text-white">
               Facing Financial Distress?
             </h2>
             <p className="text-xl text-gray-400">
               Time is critical. If your company or a portfolio company is in crisis, act quickly.
             </p>
             <a href="/contact">
               <button className="px-10 py-5 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(220,38,38,0.4)] flex items-center justify-center gap-2 mx-auto">
                  Confidential Consultation <ArrowRight className="w-5 h-5" />
               </button>
             </a>
           </div>
        </section>

      </main>
      <Footer />
    </>
  );
}