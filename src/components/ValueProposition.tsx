import { motion } from 'motion/react';
import { Target, Lightbulb, TrendingUp } from 'lucide-react';

export default function ValueProposition() {
  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Actionable Strategies",
      description: "Not just theory. Every keynote delivers concrete frameworks that your team can implement immediately to drive results."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Paradigm Shifts",
      description: "Challenge the status quo with fresh perspectives that unlock innovation and creative problem-solving."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Measurable Impact",
      description: "Focus on outcomes that matter. Audiences leave energized and equipped to elevate their performance metrics."
    }
  ];

  return (
    <section id="value" className="py-32 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-white mb-8 leading-[1.1]">
              Elevate your next <br />
              <span className="text-zinc-500">corporate event.</span>
            </h2>
            <p className="text-lg text-zinc-400 mb-12 max-w-xl font-light leading-relaxed">
              With over a decade of experience speaking to Fortune 500 companies, I don't just deliver speeches—I design transformative experiences that catalyze change and inspire excellence.
            </p>
            
            <div className="space-y-10">
              {values.map((value, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-300">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">{value.title}</h3>
                    <p className="text-zinc-400 font-light leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[600px] rounded-3xl overflow-hidden bg-zinc-900 border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950 via-zinc-900 to-zinc-800 opacity-50"></div>
            <img 
              src="https://picsum.photos/seed/speakerstage/800/1200" 
              alt="Speaker on stage" 
              className="w-full h-full object-cover mix-blend-overlay opacity-80"
              referrerPolicy="no-referrer"
            />
            
            {/* Decorative elements */}
            <div className="absolute inset-0 border border-white/5 rounded-3xl m-4 pointer-events-none"></div>
            <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                <p className="text-sm font-mono text-zinc-300 uppercase tracking-widest">Live Engagement</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
