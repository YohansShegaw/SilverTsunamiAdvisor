"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface Feature3DCardProps {
  title: string;
  children: ReactNode;
}

export function Feature3DCard({ title, children }: Feature3DCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="perspective group"
    >
      <div className="relative w-full h-full transition-transform transform-style-preserve-3d group-hover:rotate-y-6 group-hover:rotate-x-3 duration-500">
        {/* Card Surface */}
        <div className="absolute inset-0 bg-linear-to-br from-gray-800/90 to-gray-700/90 border border-gray-600 rounded-2xl shadow-xl p-6 text-white">
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <div className="text-gray-200 text-sm">
            {children}
          </div>
        </div>
        {/* Optional back face (if you want flip on hover) */}
      </div>
    </motion.div>
  );
}
