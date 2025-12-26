"use client";

import { motion } from "framer-motion";

interface TextSectionProps {
  title?: string;
  children: React.ReactNode;
}

export function TextSection({ title, children }: TextSectionProps) {
  return (
    <section className="py-32 relative overflow-hidden bg-black">
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative max-w-5xl mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-12 text-center"
        >
          {title && (
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
              {title.split(' ').map((word, i) => (
                <span key={i} className={word === "Silver" || word === "Tsunami" ? "text-cyan-100" : "text-white"}>
                  {word}{" "}
                </span>
              ))}
            </h2>
          )}
          
          <div className="relative">
            {/* Decorative Quotes */}
            <span className="absolute -top-10 -left-10 text-8xl text-white/5 font-serif font-black">“</span>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed font-light">
              {children}
            </p>
            <span className="absolute -bottom-10 -right-10 text-8xl text-white/5 font-serif font-black">”</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}