"use client";

import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  points?: string[];
  icon?: React.ReactNode;
}

export function FeatureCard({ title, description, points, icon }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gray-800/70 border border-white/10 rounded-2xl p-8 shadow-xl flex flex-col gap-4 hover:bg-gray-700/80 transition"
    >
      {icon && <div className="text-4xl">{icon}</div>}
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
      {points && (
        <ul className="list-disc list-inside space-y-1 text-gray-400">
          {points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}
