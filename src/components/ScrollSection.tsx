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
    <section id="topics" className="relative bg-black text-white scroll-mt-20">
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
          <div className="w-full md:w-1/2 h-[40vh] md:h-screen sticky top-20 md:top-0 flex flex-col justify-center pr-0 md:pr-12 z-20 md:bg-transparent bg-black/60 backdrop-blur-md md:backdrop-blur-none rounded-2xl md:rounded-none p-6 md:p-0">
            <h2 className="text-5xl md:text-7xl font-medium tracking-tighter mb-6">
              Master every stage of growth
            </h2>
            <p className="text-xl text-zinc-400 font-light">
              Tailored keynotes and workshops designed to shift paradigms and drive measurable impact across your organization.
            </p>
          </div>
          <div className="w-full md:w-1/2 py-[10vh] md:py-[50vh] relative z-10">
            <div className="flex flex-col gap-[10vh] md:gap-[30vh]">
              {topics.map((topic, i) => (
                <h3
                  key={i}
                  ref={(el) => { itemsRef.current[i] = el; }}
                  className={`text-3xl sm:text-4xl md:text-6xl font-medium tracking-tighter transition-all duration-300 ${activeIndex === i ? 'text-weavy-accent scale-105 origin-left shadow-black drop-shadow-2xl' : 'text-white/30'}`}
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
