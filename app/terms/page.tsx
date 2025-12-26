"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { FileText, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function TermsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-black text-white min-h-screen selection:bg-cyan-500/30">
        
        {/* Header Section */}
        <section className="relative pt-40 pb-16 px-6 text-center overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] -z-10" />
          <div className="absolute top-0 right-1/2 translate-x-1/2 w-[600px] h-[300px] bg-cyan-900/20 blur-[100px] rounded-full -z-10" />

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <FileText className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-200 uppercase tracking-widest">Legal Document</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white">
              Terms of Service
            </h1>
            <p className="text-gray-400">Last Updated: January 1, 2025</p>
          </motion.div>
        </section>

        {/* Content Section */}
        <section className="relative pb-24 px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-4xl mx-auto bg-[#0B0F1A] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
          >
            <div className="space-y-12 relative z-10 text-gray-300 leading-relaxed">
              
              {/* Agreement */}
              <div>
                <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider border-b border-white/10 pb-2">
                  1. Agreement to Terms
                </h2>
                <p>
                  These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Silver Tsunami Advisors ("we," "us," or "our"), concerning your access to and use of the Silver Tsunami Advisors website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
                </p>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider border-b border-white/10 pb-2">
                  2. Intellectual Property Rights
                </h2>
                <p>
                  Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                </p>
              </div>

              {/* CRITICAL DISCLAIMER */}
              <div className="bg-red-950/20 border border-red-500/20 p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                  <h2 className="text-xl font-bold text-white uppercase tracking-wider">
                    3. No Financial or Legal Advice
                  </h2>
                </div>
                <p className="text-gray-300 mb-4">
                  The information provided on this Site is for general informational and educational purposes only. <strong>It does not constitute legal, tax, investment, or financial advice.</strong>
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-400 mt-0.5" />
                    <span>We are not licensed financial advisors or broker-dealers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-400 mt-0.5" />
                    <span>Past performance (e.g., EBITDA growth, Tenacity Group ROI) does not guarantee future results.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-400 mt-0.5" />
                    <span>You should consult with your own attorney, CPA, or registered investment advisor before making decisions.</span>
                  </li>
                </ul>
              </div>

              {/* Limitation of Liability */}
              <div>
                <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider border-b border-white/10 pb-2">
                  4. Limitation of Liability
                </h2>
                <p>
                  In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.
                </p>
              </div>

              {/* Governing Law */}
              <div>
                <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider border-b border-white/10 pb-2">
                  5. Governing Law
                </h2>
                <p>
                  These Terms shall be governed by and defined following the laws of the United States. Silver Tsunami Advisors and yourself irrevocably consent that the courts of the United States shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                </p>
              </div>

              {/* Contact */}
              <div className="pt-8">
                <p className="text-sm text-gray-500 italic">
                  If you have any questions about these Terms of Service, please contact us at info@silvertsunamiadvisors.com.
                </p>
              </div>

            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}