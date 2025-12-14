"use client";
import React from "react";
import { motion } from "framer-motion";
import { ServicesCard } from "./ServicesCard"; // Import the new card above
import { TrendingUp, Bot, Handshake, ShieldAlert, Landmark, Globe } from "lucide-react";
import Link from "next/link";

const services = [
  { title: "EBITDA Growth", description: "Pricing optimization, cost auditing, and margin expansion strategies to boost valuation.", icon: TrendingUp },
  { title: "AI Implementation", description: "Automating workflows and using data for predictive decision making to cut costs by 25%.", icon: Bot },
  { title: "M&A Advisory", description: "Target identification, due diligence, and synergy realization for rapid growth.", icon: Handshake },
  { title: "Restructuring (CRO)", description: "Crisis management, debt restructuring, and operational turnarounds for distressed assets.", icon: ShieldAlert },
  { title: "Post-Sale Wealth", description: "Access to Tenacity Group land development (30% ROI) and legacy planning.", icon: Landmark },
  { title: "Strategic Outsourcing", description: "Reduce OPEX by up to 70% with world-class Ethiopian talent.", icon: Globe },
];

export function ServicesSection() {
  return (
    <section className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Strategic Expertise
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            A full suite of services designed to maximize your business valuation.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href="/services">
                <ServicesCard {...service} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}