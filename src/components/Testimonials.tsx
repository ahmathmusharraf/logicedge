import { motion } from "motion/react";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Alexander Wright",
    role: "CEO, Aura Fintech",
    content: "Logic Edge engineered an identity. Their attention to detail is unmatched.",
    initials: "AW"
  },
  {
    name: "Elena Rossi",
    role: "Founder, Nebula OS",
    content: "The transformation was profound. Their logic sets them apart from others.",
    initials: "ER"
  },
  {
    name: "Marcus Chen",
    role: "Director, Quantum Lab",
    content: "Professional, precise, and visionary. They feel like part of our team.",
    initials: "MC"
  },
  {
    name: "Sarah Jenkins",
    role: "Head of Product, Velo",
    content: "Speed and aesthetic in perfect harmony. They exceeded our aggressive KPIs.",
    initials: "SJ"
  },
  {
    name: "David Hoffmann",
    role: "CTO, Zenith",
    content: "Exquisite craftsmanship. A rare find in this industry.",
    initials: "DH"
  },
  {
    name: "Sophia Liao",
    role: "Creative Lead, Axis",
    content: "They turned our complex vision into a seamless reality. Highly recommended.",
    initials: "SL"
  }
];

export default function Testimonials() {
  // Double the list for infinite scroll effect
  const displayItems = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="py-16 md:py-24 bg-black relative border-t border-white/5 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 blur-[150px] rounded-full z-0 opacity-20 pointer-events-none" />
      
      <div className="max-w-[1600px] mx-auto px-6 2xl:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-12 md:mb-16"
        >
          <span className="text-gold font-bold tracking-[0.4em] text-[8px] uppercase mb-3 text-center w-full">SOCIAL PROOF</span>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white uppercase tracking-tight">CLIENT <span className="text-gold-gradient italic">REFLECTIONS</span></h2>
        </motion.div>


        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative group"
        >
          {/* Gradient Overlays for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

          <div className="flex animate-marquee hover:[animation-play-state:paused] gap-6 py-4">
            {displayItems.map((testimonial, i) => (
              <div
                key={`${testimonial.name}-${i}`}
                className="w-[280px] md:w-[320px] flex-shrink-0 p-6 rounded-2xl glass transition-all duration-500 hover:bg-white/[0.05] border border-white/5 flex flex-col h-full"
              >
                <Quote size={18} className="text-gold/20 mb-4" />
                <p className="text-[13px] text-white/50 leading-relaxed mb-6 font-light italic">
                  "{testimonial.content}"
                </p>
                
                <div className="mt-auto flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-[9px] font-bold text-gold">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-white leading-none mb-1">{testimonial.name}</h4>
                    <p className="text-[9px] text-white/30 uppercase tracking-widest">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

