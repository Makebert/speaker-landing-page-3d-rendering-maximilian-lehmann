import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-black relative overflow-hidden border-t border-white/10 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-6">
            Ready to inspire?
          </h2>
          <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto">
            Propose interest for your next event. Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </div>

        <form
          className="space-y-6"
          action="https://formsubmit.co/max@fainin.com"
          method="POST"
        >
          {/* Prevent redirecting to formsubmit captcha page for premium feel, though keeping it simple first */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : ''} />

          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="Full Name"
              required
              className="w-full bg-zinc-900 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-weavy-accent transition-colors"
              placeholder="Full Name"
            />
            <input
              type="email"
              name="Email"
              required
              className="w-full bg-zinc-900 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-weavy-accent transition-colors"
              placeholder="Email Address"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="Company / Organization"
              className="w-full bg-zinc-900 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-weavy-accent transition-colors"
              placeholder="Company / Organization"
            />
            <input
              type="date"
              name="Event Date"
              className="w-full bg-zinc-900 border border-white/10 rounded-2xl px-6 py-4 text-zinc-400 focus:outline-none focus:border-weavy-accent transition-colors"
            />
          </div>
          <textarea
            rows={4}
            name="Message"
            required
            className="w-full bg-zinc-900 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-weavy-accent transition-colors resize-none"
            placeholder="Event Details & Expectations..."
          ></textarea>

          <button
            type="submit"
            className="w-full bg-white text-black font-medium py-5 rounded-2xl hover:bg-weavy-accent transition-colors text-lg tracking-tight"
          >
            Submit Proposal
          </button>
        </form>
      </div>
    </section>
  );
}
