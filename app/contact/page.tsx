"use client";

import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin, Clock, Smartphone, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const contactInfo = [
    { 
      icon: MapPin, 
      title: "Headquarters", 
      line1: "Addis Ababa, Ethiopia (Ops)", 
      line2: "United States (Advisors)",
      link: null 
    },
    { 
      icon: Mail, 
      title: "Email Us", 
      line1: "jamesc@silvertsunamiadvisors.com", 
      line2: "info@silvertsunamiadvisors.com",
      link: "mailto:jamesc@silvertsunamiadvisors.com" 
    },
    { 
      icon: Phone, 
      title: "Direct Line", 
      line1: "703.829.9200", 
      line2: "Mon-Fri, 9am - 6pm EST",
      link: "tel:7038299200" 
    },
    { 
      icon: Smartphone, 
      title: "Mobile / Urgent", 
      line1: "703.999.9306", 
      line2: "24/7 Availability for Clients",
      link: "tel:7039999306" 
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-black text-white min-h-screen selection:bg-cyan-500/30">
        
        {/* HERO SECTION */}
        <section className="relative pt-40 pb-20 px-6 overflow-hidden text-center">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-900/20 blur-[120px] rounded-full -z-10" />
          <div className="absolute inset-0 bg-grid-white/[0.05] -z-10" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative max-w-5xl mx-auto space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium text-gray-300 uppercase tracking-widest">Accepting New Clients</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white">
              Secure Your <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-cyan-400 to-white">
                Financial Future
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
              Whether you are planning an exit in 24 months or facing immediate distress, our advisors are ready to help you navigate the complexity.
            </p>
          </motion.div>
        </section>

        {/* CONTENT GRID */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <motion.div 
            variants={stagger} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            className="grid lg:grid-cols-2 gap-12 lg:gap-20"
          >
            
            {/* LEFT COLUMN: CONTACT FORM */}
            <motion.div variants={fadeInUp} className="relative group h-full">
              {/* Animated Glow Border Effect */}
              <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000" />
              
              <div className="relative h-full bg-[#0B0F1A] border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-2">Request Consultation</h2>
                <p className="text-gray-400 mb-8">Fill out the form below and an advisor will contact you within 24 hours.</p>
                
                <form className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Full Name</label>
                      <input 
                        className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400 focus:bg-white/10 focus:outline-none transition-all text-white placeholder:text-gray-600" 
                        type="text" 
                        placeholder="John Doe" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Work Email</label>
                      <input 
                        className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400 focus:bg-white/10 focus:outline-none transition-all text-white placeholder:text-gray-600" 
                        type="email" 
                        placeholder="john@company.com" 
                        required 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Company Name</label>
                    <input 
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400 focus:bg-white/10 focus:outline-none transition-all text-white placeholder:text-gray-600" 
                      type="text" 
                      placeholder="Your Business Name" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Primary Goal</label>
                    <div className="relative">
                      <select className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400 focus:bg-white/10 focus:outline-none transition-all text-white appearance-none cursor-pointer">
                        <option className="bg-gray-900 text-gray-400">Select an option...</option>
                        <option className="bg-gray-900">Increase EBITDA / Valuation</option>
                        <option className="bg-gray-900">AI Implementation</option>
                        <option className="bg-gray-900">M&A / Acquisitions</option>
                        <option className="bg-gray-900">Restructuring / CRO Services</option>
                        <option className="bg-gray-900">Post-Sale Wealth Management</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Message</label>
                    <textarea 
                      rows={4} 
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400 focus:bg-white/10 focus:outline-none transition-all resize-none text-white placeholder:text-gray-600" 
                      placeholder="Briefly describe your current situation or goals..." 
                    />
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.02 }} 
                    whileTap={{ scale: 0.98 }} 
                    className="w-full py-4 mt-2 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 text-black font-bold text-lg shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all flex items-center justify-center gap-2"
                  >
                    Send Request <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: INFO CARDS */}
            <motion.div variants={stagger} className="flex flex-col justify-center gap-6">
              
              <motion.div variants={fadeInUp}>
                 <h3 className="text-2xl font-bold text-white mb-6 pl-2 border-l-4 border-cyan-500">Contact Information</h3>
              </motion.div>

              {contactInfo.map((item, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeInUp}
                  className="group relative overflow-hidden bg-white/3 hover:bg-white/6 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 rounded-2xl p-6 transition-all duration-300"
                >
                  <div className="flex items-start gap-6 relative z-10">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-linear-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                      {item.link ? (
                        <a href={item.link} className="block text-gray-400 hover:text-cyan-300 transition-colors">
                          <p>{item.line1}</p>
                          <p className="text-sm opacity-70 mt-1">{item.line2}</p>
                        </a>
                      ) : (
                        <div className="text-gray-400">
                          <p>{item.line1}</p>
                          <p className="text-sm opacity-70 mt-1">{item.line2}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Additional Availability Card */}
              <motion.div variants={fadeInUp} className="mt-4 p-6 bg-linear-to-r from-blue-900/20 to-cyan-900/20 rounded-2xl border border-blue-500/20 flex items-center gap-4">
                <Clock className="w-8 h-8 text-blue-400" />
                <div>
                  <h4 className="font-bold text-white">Always Available</h4>
                  <p className="text-sm text-gray-400">Our senior partners are available 24/7 for active buy-side and sell-side mandates.</p>
                </div>
              </motion.div>

            </motion.div>
          </motion.div>
        </section>
      </main>
      <Footer/>
    </>
  );
}