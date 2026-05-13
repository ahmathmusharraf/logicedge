import { motion } from "motion/react";
import { Users, Target, ShieldCheck, Cpu } from "lucide-react";
import SEO from "../components/SEO";

const VALUES = [
  {
    icon: <Target className="text-gold" size={24} />,
    title: "Precision First",
    description: "We don't settle for 'good enough'. Every pixel, every line of code, and every strategy is executed with surgical precision."
  },
  {
    icon: <Cpu className="text-gold" size={24} />,
    title: "Technical Logic",
    description: "Our creativity is grounded in technical feasibility. We build products that are as robust on the backend as they are beautiful on the frontend."
  },
  {
    icon: <ShieldCheck className="text-gold" size={24} />,
    title: "Uncompromising Quality",
    description: "Quality isn't an afterthought; it's our foundational layer. We maintain the highest standards throughout the entire product lifecycle."
  }
];

const TEAM = [
  {
    name: "Viktor Draken",
    role: "Founder & Creative Director",
    bio: "A visionary with a background in architectural design and software engineering.",
    initials: "VD"
  },
  {
    name: "Sarah Chen",
    role: "Head of Technology",
    bio: "Ex-Google architect specializing in high-performance distributed systems.",
    initials: "SC"
  },
  {
    name: "Marcus Thorne",
    role: "Strategy Lead",
    bio: "Focused on aligning technical products with aggressive business growth goals.",
    initials: "MT"
  }
];

export default function About() {
  return (
    <div className="pt-24 pb-12">
      <SEO 
        title="About Our Agency" 
        description="Learn about the mission, values, and the expert team behind Logic Edge's engineering excellence."
      />
      {/* Hero Section */}
      <section className="max-w-[1600px] mx-auto px-6 2xl:px-12 mb-8">
        <div className="flex flex-col items-center text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-silver font-bold tracking-[0.4em] text-[9px] md:text-[10px] uppercase mb-4"
          >
            OUR ESSENCE
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6"
          >
            WHERE <span className="text-silver-gradient">LOGIC</span> <br /> <span className="text-gold-gradient italic">MEETS EDGE</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="max-w-xl text-sm md:text-base text-white/40 font-light leading-relaxed mb-8"
          >
            Logic Edge was founded on a simple realization: the digital world is cluttered with products that either look good but fail technically, or work well but lack soul. We bridge that gap.
          </motion.p>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white/[0.01] border-y border-white/5 py-10 mb-8">
        <div className="max-w-[1600px] mx-auto px-6 2xl:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8 flex flex-col items-center text-center"
          >
            <span className="text-gold font-bold tracking-[0.4em] text-[10px] uppercase mb-3 block">CORE PHILOSOPHY</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight uppercase">OUR VALUES</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {VALUES.map((value, i) => (
              <motion.div 
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
                className="group p-6 rounded-2xl border border-transparent hover:border-white/5 hover:bg-white/[0.02] transition-all"
              >
                <div className="mb-4 p-3 w-fit rounded-lg bg-white/[0.03] border border-white/5 group-hover:border-gold/20 transition-all">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 text-white group-hover:text-gold transition-colors">{value.title}</h3>
                <p className="text-[13px] text-white/30 leading-relaxed font-light">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-[1600px] mx-auto px-6 2xl:px-12 mb-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-end mb-6 gap-8 text-center md:text-left"
        >
          <div className="max-w-lg">
            <span className="text-silver font-bold tracking-[0.4em] text-[10px] uppercase mb-3 block">THE MINDS</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">ENGINEERING <span className="text-gold-gradient italic uppercase">EXCELLENCE</span></h2>
          </div>
          <p className="max-w-xs text-white/20 text-[11px] leading-relaxed font-tight">
            A diverse collective of specialists obsessed with the intersection of code, design, and strategy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TEAM.map((member, i) => (
            <motion.div 
              key={member.name}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="p-5 md:p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all group overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="w-10 h-10 rounded-xl bg-gold-gradient p-[1px] mb-6 relative z-10 transition-transform duration-500 group-hover:-translate-y-1">
                <div className="w-full h-full bg-black rounded-xl flex items-center justify-center text-sm font-display font-bold">
                  {member.initials}
                </div>
              </div>
              <h4 className="text-base font-bold text-white mb-1 group-hover:text-gold transition-colors relative z-10">{member.name}</h4>
              <p className="text-[9px] text-gold font-bold tracking-[0.2em] uppercase mb-4 relative z-10">{member.role}</p>
              <p className="text-[12px] text-white/30 leading-relaxed font-light relative z-10">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission CTA */}
      <section className="max-w-[1600px] mx-auto px-6 2xl:px-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="p-8 md:p-12 rounded-[2rem] bg-zinc-900/50 border border-white/5 relative overflow-hidden flex flex-col items-center text-center"
        >
          <div className="relative z-10">
            <span className="text-gold font-bold tracking-[0.4em] text-[10px] uppercase mb-6 block">OUR MISSION</span>
            <h2 className="text-xl md:text-3xl font-display font-bold text-white tracking-tight mb-0 max-w-2xl leading-snug">
              TO EMPOWER DISRUPTIVE BRANDS WITH <span className="text-gold-gradient italic">PRECISION-BUILT</span> DIGITAL PRODUCTS.
            </h2>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
