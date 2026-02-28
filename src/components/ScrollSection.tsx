import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

export default function ScrollSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsRef = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      itemsRef.current.forEach((item, i) => {
        if (!item) return;
        const rect = item.getBoundingClientRect();
        const top = rect.top;
        const bottom = rect.bottom;
        
        // If item is roughly in the middle of the screen
        if (top < viewportHeight * 0.6 && bottom > viewportHeight * 0.4) {
          setActiveIndex(i);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const topics = [
    "Transformative Leadership",
    "Navigating Disruption",
    "The Innovation Mindset",
    "Building Resilience",
    "Future-Proofing Teams",
    "Strategic Execution"
  ];

  return (
    <section id="topics" className="relative bg-black text-white">
      {/* Fixed Background Images */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        {topics.map((_, i) => (
          <motion.img
            key={i}
            src={`https://picsum.photos/seed/speaker${i}/1920/1080`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ 
              opacity: activeIndex === i ? 1 : 0,
              scale: activeIndex === i ? 1.05 : 1
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 -mt-[100vh]">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 h-screen sticky top-0 flex flex-col justify-center pr-12">
            <h2 className="text-5xl md:text-7xl font-medium tracking-tighter mb-6">
              Master every stage of growth
            </h2>
            <p className="text-xl text-zinc-400 font-light">
              Tailored keynotes and workshops designed to shift paradigms and drive measurable impact across your organization.
            </p>
          </div>
          <div className="md:w-1/2 py-[50vh]">
            <div className="flex flex-col gap-[30vh]">
              {topics.map((topic, i) => (
                <h3 
                  key={i}
                  ref={(el) => { itemsRef.current[i] = el; }}
                  className={`text-4xl md:text-6xl font-medium tracking-tighter transition-colors duration-300 ${activeIndex === i ? 'text-weavy-accent' : 'text-white/30'}`}
                >
                  {topic}
                </h3>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
