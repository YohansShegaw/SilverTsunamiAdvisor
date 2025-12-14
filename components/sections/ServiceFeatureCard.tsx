"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { LucideIcon, Check, ArrowRight, Sparkles } from "lucide-react";

interface ServiceFeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  onLearnMore?: () => void;
}

export function ServiceFeatureCard({
  icon: Icon,
  title,
  description,
  features,
  onLearnMore
}: ServiceFeatureCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => { setOpacity(1); };
  const handleBlur = () => { setOpacity(0); };
  const handleMouseEnter = () => { setOpacity(1); };
  const handleMouseLeave = () => { setOpacity(0); };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full"
    >
      <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative h-full flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[#080c14] px-8 py-10 shadow-2xl transition-transform duration-300 hover:scale-[1.01]"
      >
        {/* SPOTLIGHT GRADIENT */}
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-500"
          style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(56, 189, 248, 0.15), transparent 40%)`,
          }}
        />
        
        {/* BORDER GLOW */}
         <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-500"
          style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(56, 189, 248, 0.4), transparent 40%)`,
            maskImage: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
            WebkitMaskImage: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col h-full">
            {/* Header Icon */}
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 shadow-[0_0_15px_rgba(56,189,248,0.1)] text-cyan-400">
                <Icon size={32} strokeWidth={1.5} />
            </div>

            {/* Modern Typography */}
            <h3 className="mb-3 text-3xl font-bold text-white tracking-tight">{title}</h3>
            <p className="mb-8 text-base text-slate-400 leading-relaxed font-light">{description}</p>

            {/* Modern List Style (Pills) */}
            <div className="mb-8 space-y-3 flex-grow">
                {features.map((item, i) => (
                <div key={i} className="group/item flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-colors">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400 group-hover/item:bg-cyan-500 group-hover/item:text-black transition-colors">
                        <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-sm font-medium text-slate-300 group-hover/item:text-white transition-colors">{item}</span>
                </div>
                ))}
            </div>

            {onLearnMore && (
                <button
                    onClick={onLearnMore}
                    className="mt-auto group w-full py-4 rounded-xl bg-white text-black font-bold text-sm flex items-center justify-center gap-2 hover:bg-cyan-50 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                >
                    
                    View Strategy Details
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
            )}
        </div>
      </div>
    </motion.div>
  );
}