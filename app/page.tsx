"use client";

import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { Footer } from "@/components/sections/Footer";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ValuationCalculator } from "@/components/sections/ValuationCalculator";
import { SignupForm } from "@/components/sections/SignupForm";
import { TrustSection } from "@/components/sections/TrustSection"; // Import the new section

export default function Home() {
  return (
    <main className="relative bg-black flex flex-col min-h-screen">
      <Navbar />
      <HeroSection />
      
      <div id="services">
        <ServicesSection />
      </div>
      
      <div id="how-it-works">
        <HowItWorks />
      </div>

      {/* NEW: Trust & Testimonial Section */}
      <TrustSection />
      
      <div id="valuation-calculator">
        <ValuationCalculator />
      </div>
      
      {/* <div id="signup" className="pb-20">
        <SignupForm />
      </div> */}
      
      <Footer />
    </main>
  );
}