"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Eye, FileText } from "lucide-react";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      <main className="bg-black text-white min-h-screen selection:bg-cyan-500/30">
        
        {/* Header Section */}
        <section className="relative pt-40 pb-16 px-6 text-center overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] -z-10" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-900/20 blur-[100px] rounded-full -z-10" />

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-200 uppercase tracking-widest">Legal Document</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white">
              Privacy Policy
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
            {/* Ambient Glow inside card */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-900/10 blur-[80px] rounded-full pointer-events-none" />

            <div className="space-y-12 relative z-10 text-gray-300 leading-relaxed">
              
              {/* Introduction */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-cyan-400">1</span>
                  Introduction
                </h2>
                <p>
                  Silver Tsunami Advisors ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services, including M&A advisory, EBITDA growth consulting, and restructuring services.
                </p>
              </div>

              {/* Data Collection */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-cyan-400">2</span>
                  Information We Collect
                </h2>
                <p className="mb-4">We may collect information about you in a variety of ways. The information we may collect includes:</p>
                <ul className="list-disc pl-6 space-y-2 marker:text-cyan-500">
                  <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and telephone number, that you voluntarily give to us when you register with the Site or choose to contact us.</li>
                  <li><strong>Business Data:</strong> Information regarding your company's financials, EBITDA, operational metrics, and strategic goals provided during consultations.</li>
                  <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, browser type, and operating system.</li>
                </ul>
              </div>

              {/* Usage */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-cyan-400">3</span>
                  How We Use Your Information
                </h2>
                <p className="mb-4">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
                <ul className="list-disc pl-6 space-y-2 marker:text-cyan-500">
                  <li>Assess your business for potential M&A or growth strategies.</li>
                  <li>Send you targeted information regarding restructuring, wealth management, or Tenacity Group opportunities.</li>
                  <li>Compile anonymous statistical data and analysis for use internally.</li>
                  <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
                </ul>
              </div>

              {/* Disclosure */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-cyan-400">4</span>
                  Disclosure of Your Information
                </h2>
                <p>
                  We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
                </p>
                <div className="mt-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="text-white font-bold mb-2">Strategic Partners</h3>
                  <p className="text-sm">
                    We may share your information with our affiliates, such as <strong>Tenacity Group</strong>, and vetted third-party business brokers or financial advisors, solely for the purpose of facilitating the services you have requested (e.g., post-sale wealth planning or land development investments).
                  </p>
                </div>
              </div>

              {/* Security */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-cyan-400">5</span>
                  Security of Your Information
                </h2>
                <p>
                  We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                </p>
              </div>

              {/* Contact */}
              <div className="border-t border-white/10 pt-8 mt-8">
                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <p className="mb-4">If you have questions or comments about this Privacy Policy, please contact us at:</p>
                <p className="text-cyan-400 font-medium">Silver Tsunami Advisors</p>
                <p>Email: <a href="mailto:info@silvertsunamiadvisors.com" className="hover:text-white transition">info@silvertsunamiadvisors.com</a></p>
                <p>Phone: <a href="tel:7038299200" className="hover:text-white transition">703.829.9200</a></p>
              </div>

            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}