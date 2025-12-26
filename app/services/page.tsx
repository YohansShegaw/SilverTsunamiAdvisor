"use client";

import { useState } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { servicesData } from "@/lib/services-data"; 
import { ServiceModal } from "@/components/ui/ServiceModal";
import { ServiceFeatureCard } from "@/components/sections/ServiceFeatureCard"; 
import { ServiceSectionBlock } from "@/components/sections/ServiceSectionBlock"; 

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<typeof servicesData[0] | null>(null);

  return (
    <>
      {/* <header className="fixed top-0 left-0 w-full z-50 bg-[#0B0F1A]/90 backdrop-blur-md border-b border-white/5">
        <Navbar />
      </header> */}
<Navbar />
      <main className="bg-[#0B0F1A] pt-32 text-white min-h-screen">
        {/* HEADER SECTION */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl z-0" />
          
          <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 drop-shadow-lg"
            >
              Strategic Services
            </motion.h1>
            <div className="mx-auto w-24 h-1 bg-blue-500 rounded-full"></div>
            <p className="text-xl text-gray-300 leading-relaxed">
              We execute a comprehensive <span className="text-blue-400 font-bold">8 to 24-month program</span> designed to increase EBITDA, streamline operations, and position your business for a premium exit.
            </p>
          </div>
        </section>

        {/* SERVICES LIST (ZIG-ZAG LAYOUT) */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto space-y-32">
            {servicesData.map((service, index) => (
              <ServiceSectionBlock
                key={service.id}
                reverse={index % 2 !== 0} // Alternates Left/Right
                image={service.image}
                card={
                  <ServiceFeatureCard
                    icon={service.icon}
                    title={service.title}
                    description={service.shortDesc}
                    features={service.pdfContent.sections[0].bullets.slice(0, 4)} // Show first 4 bullets as preview
                    onLearnMore={() => setSelectedService(service)} // OPEN MODAL
                  />
                }
              />
            ))}
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 px-6 bg-[#0E1223] text-center border-t border-white/5">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-400">
              The Optimal Exit Starts Now
            </h2>
            <p className="text-gray-300 text-lg">
              The average sale process takes 6 to 12 months, but value building starts years prior. 
              Let us build your 8-24 month strategy today.
            </p>
            <div className="flex justify-center gap-6 mt-8">
              <a href="/contact" className="px-10 py-4 rounded-xl bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold shadow-lg hover:shadow-blue-500/50 transition transform hover:scale-105">
                Schedule Consultation
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* MODAL FOR FULL DETAILS */}
      <ServiceModal 
        isOpen={!!selectedService} 
        onClose={() => setSelectedService(null)} 
        service={selectedService} 
      />
    </>
  );
}