import { motion } from "motion/react";

const STEPS = [
  {
    num: "01",
    title: "Discovery",
    desc: "We dive deep into your business, goals, and user needs to build a solid strategic foundation.",
  },
  {
    num: "02",
    title: "Architecture",
    desc: "Mapping out the logic and structure of your product through wireframes and user flows.",
  },
  {
    num: "03",
    title: "Vibe Check",
    desc: "Exploring visual directions and creative concepts that define your brand's unique edge.",
  },
  {
    num: "04",
    title: "Refinement",
    desc: "Polishing every pixel and optimizing every interaction for a flawless user experience.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-16 md:py-24 bg-transparent border-y border-white/5">
      <div className="max-w-[1600px] mx-auto px-6 2xl:px-12">
        <div className="flex flex-col items-center text-center mb-12 md:mb-20">
          <span className="text-gold font-bold tracking-[0.4em] text-[8px] md:text-[10px] uppercase mb-4 block">OUR METHODOLOGY</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            THE LOGIC BEHIND THE <span className="text-gold-gradient">EDGE</span>
          </h2>
          <p className="text-white/40 text-[13px] md:text-base leading-relaxed max-w-2xl font-light">
            Our process is designed to eliminate guesswork. We mix analytical rigor with creative intuition 
            to deliver products that don't just look good, but perform exceptionally.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 md:gap-x-12 gap-y-4 md:gap-y-8">
          {STEPS.map((step, i) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col gap-2 p-5 md:p-6 rounded-2xl md:rounded-3xl transition-all duration-500 hover:bg-white/[0.03] border border-transparent hover:border-white/5 relative"
            >
              <div className="flex items-center justify-between mb-1 md:mb-2">
                <span className="text-[10px] md:text-xs font-display font-bold text-gold tracking-widest uppercase relative z-10 transition-colors group-hover:text-white">STEP {step.num}</span>
                <motion.div 
                   initial={{ scaleX: 0 }}
                   whileInView={{ scaleX: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.2 + 0.5, duration: 1 }}
                   style={{ originX: 0 }}
                   className="h-[1px] flex-grow mx-4 bg-white/10 group-hover:bg-gold-gradient transition-all duration-700 relative z-10" 
                />
              </div>
              
              <h3 className="text-lg md:text-2xl font-bold text-white group-hover:text-gold transition-colors relative z-10">{step.title}</h3>
              <p className="text-white/30 text-[11px] md:text-sm leading-relaxed font-light relative z-10 group-hover:text-white/50 transition-colors">
                {step.desc}
              </p>

              {/* Background accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
