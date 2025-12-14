"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SavingsCalculator() {
  const [staff, setStaff] = useState(5);
  const [usRate, setUsRate] = useState(30);
  const ethRate = 8;

  const yearlyHours = 40 * 52;
  const savings = Math.round(staff * yearlyHours * (usRate - ethRate));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Estimated Yearly Savings: $${savings.toLocaleString()}`);
  };

  return (
    <section className="py-24 bg-gray-950 flex justify-center px-4">
      <div className="max-w-lg w-full space-y-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-teal-400 via-cyan-400 to-blue-500 drop-shadow-lg">
            Calculate Your Savings
          </h2>
          <p className="text-gray-300 mt-2 text-sm md:text-base">
            Estimate how much your business could save with our services.
          </p>
        </motion.div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Staff Input */}
          <LabelInputContainer>
            <Label htmlFor="staff" className="text-white font-semibold">
              Number of Staff
            </Label>
            <Input
              id="staff"
              type="number"
              min={1}
              max={50}
              value={staff}
              onChange={(e) => setStaff(Number(e.target.value))}
              placeholder="5"
              className="bg-gray-900 text-white placeholder-gray-400 border border-blue-500 focus:border-purple-500 focus:ring-purple-500 rounded-xl transition-all duration-300"
            />
          </LabelInputContainer>

          {/* US Rate Input */}
          <LabelInputContainer>
            <Label htmlFor="usRate" className="text-white font-semibold">
              Current US Hourly Rate ($)
            </Label>
            <Input
              id="usRate"
              type="number"
              min={15}
              max={100}
              value={usRate}
              onChange={(e) => setUsRate(Number(e.target.value))}
              placeholder="30"
              className="bg-gray-900 text-white placeholder-gray-400 border border-blue-500 focus:border-purple-500 focus:ring-purple-500 rounded-xl transition-all duration-300"
            />
          </LabelInputContainer>

          {/* Animated Savings Display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-4"
          >
            <p className="text-gray-300 text-lg md:text-xl">Estimated Yearly Savings</p>
            <motion.p
              key={savings}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-500 mt-2"
            >
              ${savings.toLocaleString()}
            </motion.p>
          </motion.div>

          {/* 3D Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.button
              whileHover={{
                y: -3,
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(255,255,255,0.2)",
              }}
              whileTap={{
                y: 2,
                scale: 0.97,
                boxShadow: "0 5px 15px rgba(255,255,255,0.1)",
              }}
              type="submit"
              className="w-full py-3 bg-linear-to-r from-blue-400 to-purple-500 rounded-2xl shadow-[0_10px_30px_rgba(255,255,255,0.2)] text-white font-semibold text-lg transition-all duration-300"
            >
              Book a Free Consultation
            </motion.button>
          </motion.div>

        </form>
      </div>
    </section>
  );
}

// Helper container
const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>
);
