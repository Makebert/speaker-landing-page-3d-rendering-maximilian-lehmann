import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative w-full flex flex-col pt-40 pb-10 px-6 overflow-hidden bg-black rounded-b-[32px]">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-start gap-12 z-10">
        <div className="flex flex-col">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-[10vw] md:text-[8vw] leading-[0.9] font-medium tracking-tighter text-white drop-shadow-md break-words"
          >
            Maximilian Lehmann
          </motion.h1>
        </div>
        <div className="flex flex-col md:items-end max-w-xl md:mt-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[10vw] md:text-[5vw] leading-[0.9] font-medium tracking-tighter text-zinc-300 mb-8"
          >
            Transforming Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-2xl text-zinc-200 font-light md:text-right leading-relaxed"
          >
            The leading GenZ Speaker transforming corporate events through disruptive insights on future tech, fluid culture, and next-generation leadership.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
