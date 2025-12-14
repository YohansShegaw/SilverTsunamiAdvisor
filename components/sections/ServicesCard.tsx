"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { LucideIcon, ArrowRight } from "lucide-react";

export function ServicesCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => setOpacity(1);
  const handleBlur = () => setOpacity(0);
  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-[#080c14] px-8 py-10 shadow-lg transition-all duration-300 hover:shadow-cyan-500/10 group"
    >
      {/* 1. SPOTLIGHT EFFECT (The Moving Glow) */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(6, 182, 212, 0.15), transparent 40%)`,
        }}
      />
      
      {/* 2. BORDER GLOW */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(6, 182, 212, 0.4), transparent 40%)`,
          maskImage: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
          WebkitMaskImage: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
        }}
      />

      {/* 3. CONTENT */}
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          {/* Icon Box */}
          <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-gray-400 shadow-inner group-hover:bg-cyan-500/20 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-all duration-500">
            <Icon size={26} strokeWidth={1.5} />
          </div>

          <h3 className="mb-3 text-2xl font-bold text-white tracking-tight group-hover:text-cyan-50 transition-colors">
            {title}
          </h3>
          
          <p className="text-base text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors">
            {description}
          </p>
        </div>

        {/* Animated Arrow */}
        <div className="mt-8 flex items-center text-sm font-semibold text-white/50 group-hover:text-cyan-400 transition-colors">
          Learn more 
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
}