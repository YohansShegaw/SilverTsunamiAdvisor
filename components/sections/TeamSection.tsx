import { motion } from "framer-motion";
import Image from "next/image"; // Ensure you use next/image

const team = [
  { name: "Selam Tesfaye", role: "Frontend Developer", img: "/team/selam.jpg" },
  { name: "Abebe Bekele", role: "Backend Engineer", img: "/team/abebe.jpg" },
  { name: "Mulugeta Desta", role: "UI/UX Designer", img: "/team/mulugeta.jpg" },
];

export function TeamSection() {
  return (
    <section className="py-24 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-16">Meet The Experts</h2>
        
        <div className="flex flex-wrap justify-center gap-10">
          {team.map((member, i) => (
            <div key={i} className="group relative w-72">
              {/* Image Container */}
              <div className="relative w-72 h-80 rounded-2xl overflow-hidden mb-6">
                <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                {/* Replace with actual Next.js Image component in real use */}
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </div>
              
              <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{member.name}</h3>
              <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}