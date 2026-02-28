export default function Footer() {
  return (
    <footer className="bg-black pt-32 pb-12 px-6 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-32">
          <h2 className="text-[8vw] leading-[0.9] font-medium tracking-tighter text-white">
            Inspiring Action
          </h2>
          <div className="text-[10vw] leading-none font-light text-zinc-800 my-4">
            +
          </div>
          <h2 className="text-[8vw] leading-[0.9] font-medium tracking-tighter text-white">
            Human Connection
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/10">
          <div className="text-2xl font-medium tracking-tighter text-white uppercase">
            MAXIMILIAN LEHMANN<span className="text-weavy-accent">.</span>
          </div>

          <div className="flex gap-8 text-sm font-medium text-zinc-400 uppercase tracking-widest">
            <a href="https://www.linkedin.com/in/maximilian-lehmann/" target="_blank" rel="noopener noreferrer" className="hover:text-weavy-accent transition-colors">LinkedIn</a>
            <a href="https://instagram.com/max_lemn" target="_blank" rel="noopener noreferrer" className="hover:text-weavy-accent transition-colors">Instagram</a>
            <a href="https://www.fainin.com" target="_blank" rel="noopener noreferrer" className="hover:text-weavy-accent transition-colors">Fainin</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
