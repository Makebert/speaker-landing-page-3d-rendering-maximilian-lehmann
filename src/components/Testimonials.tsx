import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "The most impactful keynote we've had in a decade. Our team left energized and equipped with actionable strategies.",
      author: "Sarah Jenkins",
      role: "VP of Marketing, Global Net"
    },
    {
      quote: "A masterclass in storytelling and leadership. The insights shared completely shifted our approach to problem-solving.",
      author: "David Chen",
      role: "CEO, TechInnovate"
    },
    {
      quote: "Engaging, thought-provoking, and deeply relevant. Exactly what our leadership summit needed to spark innovation.",
      author: "Elena Rodriguez",
      role: "Director of HR, First Bank"
    }
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-zinc-900 relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-white mb-4">
            Hear from leaders.
          </h2>
          <p className="text-lg text-zinc-400 font-light max-w-2xl mx-auto">
            Trusted by organizations worldwide to deliver transformative experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-zinc-950 p-10 rounded-3xl border border-white/5 relative group hover:border-white/20 transition-colors"
            >
              <Quote className="w-10 h-10 text-zinc-800 mb-8 group-hover:text-zinc-700 transition-colors" />
              <p className="text-xl text-zinc-300 font-light leading-relaxed mb-10">
                "{testimonial.quote}"
              </p>
              <div className="mt-auto">
                <p className="text-white font-medium">{testimonial.author}</p>
                <p className="text-sm text-zinc-500 font-mono tracking-wide uppercase mt-1">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
