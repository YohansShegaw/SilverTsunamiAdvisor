import { Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050810] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand */}
          <div className="md:col-span-5 space-y-6">
            <h2 className="text-3xl font-black text-white">
              Silver Tsunami<span className="text-blue-500">.</span>
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Helping business owners navigate the "Silver Tsunami" transition. 
              We implement 8-24 month strategies to increase EBITDA, modernize operations with AI, and secure premium exits.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-blue-600/20 hover:text-blue-400 transition"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-blue-600/20 hover:text-blue-400 transition"><Twitter className="w-5 h-5" /></a>
              <a href="mailto:hello@silvertsunami.com" className="p-3 rounded-full bg-white/5 hover:bg-blue-600/20 hover:text-blue-400 transition"><Mail className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <h3 className="text-white font-bold mb-6">Strategic Services</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="/services" className="hover:text-blue-400 transition">EBITDA Growth</a></li>
              <li><a href="/services" className="hover:text-blue-400 transition">AI & Automation</a></li>
              <li><a href="/services" className="hover:text-blue-400 transition">M&A Advisory</a></li>
              <li><a href="/services" className="hover:text-blue-400 transition">CRO / Restructuring</a></li>
              <li><a href="/services" className="hover:text-blue-400 transition">Post-Sale Wealth</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <span>Addis Ababa, Ethiopia<br/>(Global Operations)</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <a href="tel:+16282348155" className="hover:text-white transition">703.829.9200</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <a href="mailto:info@silvertsunami.com" className="hover:text-white transition">jamesc@silvertsunamiadvisors.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Section (From PDF) */}
        <div className="border-t border-white/5 pt-10 mt-10">
            <p className="text-xs text-gray-500 leading-relaxed text-justify">
                <strong>Disclaimer:</strong> The information provided on this webpage by Silver Tsunami Advisors is for general informational and educational purposes only. It does not constitute legal, tax, investment, or financial advice. We are not licensed financial advisors or broker-dealers. We encourage you to consult with qualified, independent professionals (such as your own attorney, CPA, or registered investment advisor) before making any decisions based on this information. All reliance on information provided is solely at your own risk. Links to third-party websites or content do not constitute an endorsement and we assume no responsibility for the content, accuracy, or reliability of those external sources. Your individual results will vary and no guarantees of earnings or success are made.
            </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-gray-600">
          <p>© 2025 Silver Tsunami Advisors. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}