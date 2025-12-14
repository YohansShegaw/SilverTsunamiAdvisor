"use client";

import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin, Clock, CheckCircle, Calendar, Smartphone } from "lucide-react";

export default function ContactPage() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <>
    <Navbar />

      <main className="bg-[#0B0F1A] text-white min-h-screen">
        {/* Hero */}
        <section className="relative py-32 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-pink-600/20" />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative max-w-6xl mx-auto text-center space-y-8"
          >
            <motion.h1 className="text-5xl md:text-7xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x">
              Secure Your Financial Future
            </motion.h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Whether you are planning an exit in 24 months or facing immediate distress, our advisors are ready to help.
            </p>
          </motion.div>
        </section>

        {/* Contact Form + Info Grid */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid lg:grid-cols-2 gap-16">
            
            {/* Form */}
            <motion.div variants={fadeInUp} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition duration-1000" />
              <div className="relative bg-[#0F1424]/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 shadow-2xl">
                <h2 className="text-4xl font-bold text-blue-400 mb-6">Request Consultation</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <input className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-400 focus:bg-white/10 transition" type="text" placeholder="Full Name" required />
                    <input className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-400 focus:bg-white/10 transition" type="email" placeholder="Work Email" required />
                  </div>
                  <input className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-purple-400 focus:bg-white/10 transition" type="text" placeholder="Company Name" />
                  
                  <select className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-purple-400 focus:bg-white/10 transition">
                    <option className="w-full bg-neutral-900 border border-neutral-700 rounded-md p-2 text-white">Select Primary Goal</option>
                    <option className="w-full bg-neutral-900 border border-neutral-700 rounded-md p-2 text-white">Increase EBITDA / Valuation</option>
                    <option className="w-full bg-neutral-900 border border-neutral-700 rounded-md p-2 text-white">AI Implementation</option>
                    <option className="w-full bg-neutral-900 border border-neutral-700 rounded-md p-2 text-white">M&A / Acquisitions</option>
                    <option className="w-full bg-neutral-900 border border-neutral-700 rounded-md p-2 text-white">Restructuring / CRO Services</option>
                    <option className="w-full bg-neutral-900 border border-neutral-700 rounded-md p-2 text-white">Post-Sale Wealth Management</option>
                    <option className="w-full bg-neutral-900 border border-neutral-700 rounded-md p-2 text-white">Outsourcing / Cost Reduction</option>
                  </select>

                  <textarea rows={5} className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-pink-400 focus:bg-white/10 transition resize-none" placeholder="Briefly describe your current situation..." />

                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full py-5 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold text-lg shadow-2xl flex items-center justify-center gap-3">
                    Send Request <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Cards (Updated with Wealth/Tenacity context if needed, but keeping standard for now) */}
            <motion.div variants={fadeInUp} className="space-y-5">
              {[
                { icon: <MapPin className="w-8 h-8" />, title: "Headquarters", desc: "Addis Ababa, Ethiopia (Operations) / US Advisors", color: "blue" },
                { icon: <Mail className="w-8 h-8" />, title: "Email Us", desc: "jamesc@silvertsunamiadvisors.com", link: "mailto:jamesc@silvertsunamiadvisors.com", color: "purple" },
                { icon: <Phone className="w-8 h-8" />, title: "Direct Line", desc: "703.829.9200", link: "tel:7038299200", color: "pink" },
                { icon: <Smartphone className="w-8 h-8" />, title: "Mobile", desc: "703.999.9306", link: "tel:7039999306", color: "pink" },
                { icon: <Clock className="w-8 h-8" />, title: "Availability", desc: "24/7 Response Team", color: "cyan" },

              ].map((item, i) => (
                <motion.div key={i} whileHover={{ x: 10 }} className="group flex items-start gap-6 p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br from-${item.color}-500/20 to-${item.color}-500/40 group-hover:scale-110 transition`}>
                    <div className={`text-${item.color}-400`}>{item.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                    {item.link ? <a href={item.link} className={`text-${item.color}-400 hover:underline`}>{item.desc}</a> : <p className="text-gray-400">{item.desc}</p>}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>
      </main>
      <Footer/>
    </>
  );
}