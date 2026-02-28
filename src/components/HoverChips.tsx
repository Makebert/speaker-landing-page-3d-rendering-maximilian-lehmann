import { useState } from 'react';
import { motion } from 'motion/react';

export default function HoverChips() {
  const [activeChip, setActiveChip] = useState("Keynotes");

  const formats = [
    { name: "Keynotes", image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80" },
    { name: "Workshops", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" },
    { name: "Executive Coaching", image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80" },
    { name: "Panel Moderation", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80" },
    { name: "Virtual Events", image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=1200&q=80" },
    { name: "Strategy Consulting", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80" },
    { name: "Team Building", image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80" },
    { name: "Offsites", image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80" }
  ];

  return (
    <section id="formats" className="py-24 md:py-32 bg-[#050505] relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white mb-10">
            With all the professional formats you rely on
          </h2>
          {/* Interactive Chips moved under the Title */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 max-w-4xl">
            {formats.map((format) => (
              <button
                key={format.name}
                onMouseEnter={() => setActiveChip(format.name)}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium transition-all duration-300 ${activeChip === format.name
                  ? 'bg-weavy-accent text-black scale-105 shadow-lg'
                  : 'bg-white/5 text-white hover:bg-white/10'
                  }`}
              >
                {format.name}
              </button>
            ))}
          </div>
        </div>

        <div className="relative flex flex-col items-center">
          {/* Central Image Showcase */}
          <div className="w-full max-w-5xl aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden relative bg-zinc-900 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            {formats.map((format) => (
              <motion.img
                key={format.name}
                src={format.image}
                alt={format.name}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: activeChip === format.name ? 1 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
