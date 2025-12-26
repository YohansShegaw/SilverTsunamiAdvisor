"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="relative py-40 overflow-hidden bg-black">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-b from-black via-cyan-950/20 to-black z-0" />
      <div className="absolute inset-0 bg-grid-white/[0.04] z-0" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tighter"
        >
          The Optimal Exit <br />
          <span className="text-cyan-400">Starts Now.</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto mb-12"
        >
          It is never too early to start preparing. The pre-sale preparation phase is where the majority of value is built.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link href="/contact">
            <button className="relative inline-flex h-14 overflow-hidden rounded-full p-px focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-10 py-1 text-lg font-bold text-white backdrop-blur-3xl hover:bg-gray-900 transition-colors">
                Schedule Consultation
              </span>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}