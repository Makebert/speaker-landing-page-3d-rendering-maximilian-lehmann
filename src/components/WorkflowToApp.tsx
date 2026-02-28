import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Layers, Zap, Users, Target, ArrowRight } from 'lucide-react';

export default function WorkflowToApp() {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      // Activate when the switch comes to the top half of the screen
      const shouldBeActivated = rect.top <= window.innerHeight * 0.45;
      setIsActive(prev => {
        if (prev !== shouldBeActivated) return shouldBeActivated;
        return prev;
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const workflowCards = [
    { id: 1, title: "Siloed Teams", icon: <Users className="w-4 h-4" />, x: -300, y: -180, rotate: -12, mx: 0, my: -210, mrot: -5 },
    { id: 2, title: "Endless Meetings", icon: <Layers className="w-4 h-4" />, x: 300, y: -140, rotate: 8, mx: -10, my: -110, mrot: 5 },
    { id: 3, title: "Rigid Hierarchies", icon: <Target className="w-4 h-4" />, x: -320, y: 150, rotate: 15, mx: 10, my: -10, mrot: -8 },
    { id: 4, title: "Slow Execution", icon: <ArrowRight className="w-4 h-4" />, x: 320, y: 120, rotate: -10, mx: -5, my: 90, mrot: 10 },
    { id: 5, title: "Burnout Culture", icon: <Zap className="w-4 h-4" />, x: 0, y: 220, rotate: 5, mx: 15, my: 190, mrot: -2 },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-black relative overflow-hidden border-t border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-zinc-400 font-light mb-16 max-w-3xl"
          >
            Bring the fresh, disruptive energy of a Gen Z founder to your legacy systems. Together, we empower change and we outpace it. Turn your organization to become best-in-class.
          </motion.p>

          {/* The Interactive Switch Area */}
          <div
            ref={sectionRef}
            className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 cursor-pointer group z-20 mt-8 md:mt-0"
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}
          >
            <h2 className={`text-4xl md:text-7xl lg:text-8xl font-medium tracking-tighter transition-colors duration-500 flex-1 text-center md:text-right ${isActive ? 'text-zinc-700' : 'text-white'}`}>
              From Hierarchy
            </h2>

            {/* The Switch */}
            <div className={`w-24 h-12 md:w-32 md:h-16 rounded-full p-1.5 transition-colors duration-500 flex items-center shrink-0 ${isActive ? 'bg-weavy-accent' : 'bg-zinc-800'}`}>
              <motion.div
                className="w-9 h-9 md:w-13 md:h-13 bg-black rounded-full shadow-lg"
                animate={{ x: isActive ? "100%" : "0%" }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                style={{ width: 'calc(50% - 4px)', height: 'calc(100% - 0px)' }}
              />
            </div>

            <h2 className={`text-4xl md:text-7xl lg:text-8xl font-medium tracking-tighter transition-colors duration-500 flex-1 text-center md:text-left ${isActive ? 'text-white' : 'text-zinc-700'}`}>
              to Shared Agency
            </h2>
          </div>

        </div>

        {/* Dynamic Visual Content Area */}
        <div
          className="mt-16 md:mt-24 relative w-full max-w-5xl mx-auto h-[550px] md:h-[600px] flex items-center justify-center"
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
        >

          {/* State 1: Scattered Workflow Cards */}
          {workflowCards.map((card) => (
            <motion.div
              key={card.id}
              className="absolute w-44 md:w-64 bg-zinc-900 border border-white/10 rounded-2xl p-4 shadow-2xl backdrop-blur-sm z-10"
              initial={false}
              animate={{
                x: isActive ? 0 : (isMobile ? card.mx : card.x),
                y: isActive ? 0 : (isMobile ? card.my : card.y),
                rotate: isActive ? 0 : (isMobile ? card.mrot : card.rotate),
                scale: isActive ? 0.8 : 1,
                opacity: isActive ? 0 : 1
              }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-3 text-zinc-400">
                {card.icon}
                <span className="text-xs font-mono uppercase tracking-wider">{card.title}</span>
              </div>
              <div className="space-y-2">
                <div className="w-full h-2 bg-zinc-800 rounded-full"></div>
                <div className="w-3/4 h-2 bg-zinc-800 rounded-full"></div>
                <div className="w-5/6 h-2 bg-zinc-800 rounded-full"></div>
              </div>
            </motion.div>
          ))}

          {/* State 2: Unified App Dashboard */}
          <motion.div
            className="absolute w-[95%] sm:w-full max-w-3xl bg-zinc-950 border border-weavy-accent/30 rounded-3xl p-5 md:p-8 shadow-[0_0_50px_rgba(247,255,158,0.1)] overflow-hidden z-20"
            initial={false}
            animate={{
              scale: isActive ? 1 : 0.9,
              opacity: isActive ? 1 : 0,
              y: isActive ? 0 : 20
            }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: isActive ? 0.1 : 0 }}
            style={{ pointerEvents: isActive ? 'auto' : 'none' }}
          >
            {/* Glow effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-weavy-accent/10 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-10 border-b border-white/10 pb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-weavy-accent animate-pulse"></div>
                  <span className="text-white font-medium tracking-wide">Gen Z Operating System</span>
                </div>
                <div className="text-xs font-mono text-weavy-accent uppercase tracking-widest border border-weavy-accent/30 px-3 py-1 rounded-full">
                  Active
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: "Velocity", value: "10x", desc: "Faster Execution" },
                  { label: "Culture", value: "Fluid", desc: "Radical Transparency" },
                  { label: "Impact", value: "Max", desc: "Purpose-Driven" }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6"
                    animate={{ y: isActive ? 0 : 10, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.5, delay: isActive ? 0.3 + (i * 0.1) : 0 }}
                  >
                    <p className="text-zinc-500 text-sm font-mono uppercase tracking-wider mb-2">{stat.label}</p>
                    <p className="text-4xl font-medium text-white mb-1">{stat.value}</p>
                    <p className="text-weavy-accent text-sm">{stat.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
