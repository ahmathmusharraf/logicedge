import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    title: "Aura Fintech",
    category: "Web Application • UI/UX",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    color: "#3b82f6"
  },
  {
    title: "Nebula OS",
    category: "Product Design • Branding",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    color: "#10b981"
  },
  {
    title: "Quantum Lab",
    category: "Landing Page • Strategy",
    image: "https://images.unsplash.com/photo-1504868584819-f8e90526354c?auto=format&fit=crop&q=80&w=1200",
    color: "#f59e0b"
  },
];

export default function Showcase() {
  return (
    <section id="work" className="py-16 md:py-24 bg-black">
      <div className="max-w-[1600px] mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-2 mb-10 md:mb-16"
        >
          <span className="text-gold font-bold tracking-[0.3em] text-[9px] md:text-[10px] uppercase">SELECTED WORK</span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">FEATURED PROJECTS</h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8 md:gap-y-10">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-3 group cursor-pointer"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xl bg-zinc-900 border border-white/5 transition-all duration-500 group-hover:border-gold/30 shadow-2xl group-hover:shadow-gold/5">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  whileHover={{ scale: 1.1, filter: "brightness(0.4)" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full h-full object-cover transition-all"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center text-black shadow-[0_0_30px_rgba(212,175,55,0.5)]">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.5 }}
                className="px-1"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[7px] font-bold text-gold tracking-widest uppercase">0{i + 1}</span>
                  <span className="text-[7px] font-bold text-white/20 tracking-widest uppercase">{project.category}</span>
                </div>
                <h3 className="text-[13px] font-display font-bold text-white group-hover:text-gold transition-colors truncate">{project.title}</h3>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button className="px-8 py-3 bg-white/5 border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all text-sm uppercase tracking-widest">
            See All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
