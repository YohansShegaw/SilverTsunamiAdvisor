"use client";

import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { Footer } from "@/components/sections/Footer";
import { TextSection } from "@/components/sections/TextSection";
import { CTASection } from "@/components/sections/CTASection";
import { FeaturesSection } from "@/components/sections/FeatureGrid";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden selection:bg-cyan-500/30">
      <Navbar />
      
      <HeroSection />

      {/* Intro Text - Modernized */}
      <TextSection>
        Silver Tsunami Advisors helps business owners significantly increase their company's EBITDA 
        and maximize business value in the <span className="text-white font-bold border-b border-cyan-500/50">8 to 24 months</span> leading up to a business sale. 
        A well-prepared business, with organized financials and strong operations, 
        will attract more buyers and command premium valuations.
      </TextSection>

      {/* Value Proposition Text */}
      <TextSection title="Welcome to Silver Tsunami">
        Planning your business exit is one of the most critical financial decisions you will ever make. 
        To truly capitalize on your life's work, the focus must be on maximizing your company's value 
        long before it hits the market.
      </TextSection>

      {/* Features Grid */}
      <FeaturesSection />

      <CTASection />
      
      <Footer />
    </main>
  );
}