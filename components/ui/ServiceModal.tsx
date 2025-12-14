"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ServiceData {
  id: string;
  title: string;
  icon: LucideIcon;
  pdfContent: {
    intro: string;
    sections: {
      heading: string;
      content: string;
      bullets: string[];
    }[];
  };
}

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceData | null;
}

export function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  if (!service) return null;

  const Icon = service.icon;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center z-[70] p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-[#0B0F1A] border border-white/10 w-full max-w-4xl max-h-[85vh] rounded-3xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col"
            >
              {/* Header */}
              <div className="relative p-8 border-b border-white/10 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/20 transition text-gray-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">{service.title}</h2>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto p-8 space-y-8 custom-scrollbar">
                
                {/* Intro */}
                <p className="text-xl text-gray-300 leading-relaxed font-light border-l-4 border-blue-500 pl-6">
                  {service.pdfContent.intro}
                </p>

                {/* Detailed Sections */}
                <div className="grid gap-8">
                  {service.pdfContent.sections.map((section, idx) => (
                    <div key={idx} className="bg-white/5 rounded-2xl p-6 border border-white/5">
                      <h3 className="text-xl font-bold text-blue-400 mb-3">
                        {section.heading}
                      </h3>
                      {section.content && (
                        <p className="text-gray-400 mb-4">{section.content}</p>
                      )}
                      
                      <div className="grid md:grid-cols-1 gap-3">
                        {section.bullets.map((bullet, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-purple-500 mt-1 shrink-0" />
                            <span className="text-gray-300">{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA inside Modal */}
                <div className="mt-8 pt-8 border-t border-white/10 text-center">
                  <h4 className="text-white font-semibold mb-4">Interested in this strategy?</h4>
                  <a href="/contact">
                    <button className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition">
                      Discuss {service.title}
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}