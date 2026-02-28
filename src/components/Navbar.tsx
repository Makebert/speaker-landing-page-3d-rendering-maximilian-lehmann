import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Banner */}
      <div className="w-full bg-zinc-900 text-center py-2 text-sm font-medium text-zinc-300 border-b border-white/10">
        <span className="text-white">Maximilian Lehmann</span> is now accepting bookings for 2027
      </div>

      <nav className={`fixed top-10 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className={`flex items-center justify-between bg-black/80 backdrop-blur-xl border border-white/10 rounded-full px-6 transition-all duration-300 ${scrolled ? 'h-14' : 'h-16'}`}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-medium tracking-tighter text-white"
            >
              MAXIMILIAN LEHMANN<span className="text-weavy-accent">.</span>
            </motion.div>

            {/* Desktop */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400 uppercase tracking-wider">
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#topics" className="hover:text-white transition-colors">Topics</a>
              <a href="#formats" className="hover:text-white transition-colors">Formats</a>
            </div>

            <div className="hidden md:block">
              <a
                href="#contact"
                className="px-6 py-2.5 bg-white text-black rounded-full hover:bg-weavy-accent font-medium transition-colors"
              >
                Start Now
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-zinc-400 hover:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-6 right-6 mt-2 bg-black border border-white/10 rounded-2xl p-6 flex flex-col gap-6 shadow-2xl"
          >
            <a href="#about" className="text-zinc-400 hover:text-white uppercase tracking-wider text-sm font-medium" onClick={() => setIsOpen(false)}>About</a>
            <a href="#topics" className="text-zinc-400 hover:text-white uppercase tracking-wider text-sm font-medium" onClick={() => setIsOpen(false)}>Topics</a>
            <a href="#formats" className="text-zinc-400 hover:text-white uppercase tracking-wider text-sm font-medium" onClick={() => setIsOpen(false)}>Formats</a>
            <a
              href="#contact"
              className="text-center px-5 py-3 bg-white text-black rounded-full font-medium mt-2"
              onClick={() => setIsOpen(false)}
            >
              Start Now
            </a>
          </motion.div>
        )}
      </nav>
    </>
  );
}
