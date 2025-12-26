"use client";

import { Linkedin, Twitter, Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-white/10 pt-24 pb-12 overflow-hidden z-10">
      
      {/* Background Ambient Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.05] -z-10" />
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-900/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <Link href="/" className="inline-block">
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                Silver Tsunami<span className="text-cyan-400">.</span>
              </h2>
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-md font-light text-lg">
              Helping business owners navigate the "Silver Tsunami" transition. 
              We implement <span className="text-white font-medium">8–24 month strategies</span> to increase EBITDA, modernize operations with AI, and secure premium exits.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Mail, href: "mailto:hello@silvertsunami.com" },
              ].map((Social, index) => (
                <a 
                  key={index}
                  href={Social.href} 
                  className="group relative p-3 rounded-full bg-white/5 border border-white/10 overflow-hidden transition-all hover:border-cyan-500/50"
                >
                  <div className="absolute inset-0 bg-cyan-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <Social.icon className="w-5 h-5 text-gray-300 group-hover:text-cyan-400 relative z-10 transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Services Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3"
          >
            <h3 className="text-white font-bold mb-8 text-lg flex items-center gap-2">
              Strategic Services <span className="h-px grow bg-white/10 ml-2" />
            </h3>
            <ul className="space-y-4">
              {[
                { name: "EBITDA Growth", href: "/services/ebitda" },
                { name: "AI & Automation", href: "/services/ai" },
                { name: "M&A Advisory", href: "/services/acquisitions" },
                { name: "CRO / Restructuring", href: "/services/cro" },
                { name: "Post-Sale Wealth", href: "/services/wealth" },
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="group flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-cyan-500" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4"
          >
            <h3 className="text-white font-bold mb-8 text-lg flex items-center gap-2">
              Contact Us <span className="h-px grow bg-white/10 ml-2" />
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-cyan-500/30 transition-colors">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <span className="block text-white font-medium mb-1">Headquarters</span>
                  <span className="text-gray-400 text-sm">United States / Global Operations</span>
                </div>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-cyan-500/30 transition-colors">
                  <Phone className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <span className="block text-white font-medium mb-1">Call Us</span>
                  <a href="tel:7038299200" className="text-gray-400 hover:text-white transition text-sm">703.829.9200</a>
                </div>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-cyan-500/30 transition-colors">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <span className="block text-white font-medium mb-1">Email</span>
                  <a href="mailto:jamesc@silvertsunamiadvisors.com" className="text-gray-400 hover:text-white transition text-sm">jamesc@silvertsunamiadvisors.com</a>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-10"
        >
          <div className="bg-white/2 rounded-2xl p-6 md:p-8">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Legal Disclaimer</h4>
            <p className="text-xs text-gray-500 leading-relaxed text-justify">
              The information provided on this webpage by Silver Tsunami Advisors is for general informational and educational purposes only. It does not constitute legal, tax, investment, or financial advice. We are not licensed financial advisors or broker-dealers. We encourage you to consult with qualified, independent professionals (such as your own attorney, CPA, or registered investment advisor) before making any decisions based on this information. All reliance on information provided is solely at your own risk. Links to third-party websites or content do not constitute an endorsement and we assume no responsibility for the content, accuracy, or reliability of those external sources. Your individual results will vary and no guarantees of earnings or success are made.
            </p>
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t border-white/5 text-sm text-gray-600">
          <p>© {currentYear} Silver Tsunami Advisors. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}