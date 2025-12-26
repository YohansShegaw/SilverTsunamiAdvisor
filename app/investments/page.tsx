"use client";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function InvestmentsPage() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />
      <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
            <span className="text-amber-500 font-bold tracking-widest uppercase text-sm">Post-Sale Prosperity</span>
            <h1 className="text-5xl md:text-7xl font-bold mt-2 bg-clip-text text-transparent bg-linear-to-b from-amber-200 to-amber-600">
            Investments & Wealth
            </h1>
        </div>

        {/* Tenacity Group Section (3D Card style) */}
        <div className="relative group mb-16">
            <div className="absolute -inset-1 bg-linear-to-r from-amber-600 to-yellow-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative bg-[#0a0a0a] ring-1 ring-white/10 rounded-2xl p-10">
                <h2 className="text-3xl font-bold text-white mb-6">Exclusive Access: Tenacity Group</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                    For those interested in tangible assets and real estate ventures, we offer exclusive access to opportunities through our in-house sister company, <strong>Tenacity Group</strong>.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                    <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                        <h3 className="text-amber-400 font-bold mb-2">Land Development</h3>
                        <p className="text-sm text-gray-400">Acquisition of 50 to 5,000 acres of raw land. Handling entitlements, permits, and horizontal development before selling to large scale builders.</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                        <h3 className="text-amber-400 font-bold mb-2">The Returns</h3>
                        <p className="text-sm text-gray-400">Typically a four year investment cycle with average ROI of 15-30% APR. Return of capital by year three, full profits by year four.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Wealth Management */}
        <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white">Integrated Wealth Approach</h2>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 border-l-2 border-amber-500 bg-white/5">
                    <h3 className="text-xl font-bold text-white mb-2">Curated Financial Advisors</h3>
                    <p className="text-gray-400">We connect you with experienced advisors to structure proceeds in a tax-efficient manner and develop personalized investment strategies.</p>
                </div>
                 <div className="p-6 border-l-2 border-amber-500 bg-white/5">
                    <h3 className="text-xl font-bold text-white mb-2">Legacy Planning</h3>
                    <p className="text-gray-400">Looping in estate planning experts to address generational wealth and philanthropic goals.</p>
                </div>
            </div>
        </div>

      </div>
      <Footer />
    </main>
  );
}