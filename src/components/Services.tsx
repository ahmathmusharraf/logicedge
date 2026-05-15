import { motion } from "motion/react";
import { Layout, Code, Zap, BarChart, Eye, Layers } from "lucide-react";

const SERVICES = [
  {
    icon: <Layout className="text-gold" />,
    title: "Web Design",
    description: "Visually stunning, user-centric interfaces that capture your brand's essence and drive engagement.",
  },
  {
    icon: <Code className="text-gold" />,
    title: "Development",
    description: "Robust, scalable web applications built with modern technologies like React, Next.js, and Node.js.",
  },
  {
    icon: <Zap className="text-gold" />,
    title: "Performance",
    description: "Speed is a feature. We optimize every millisecond to ensure your site loads instantly on all devices.",
  },
  {
    icon: <BarChart className="text-gold" />,
    title: "Strategy",
    description: "Data-driven insights and market analysis to position your brand for long-term digital success.",
  },
  {
    icon: <Eye className="text-gold" />,
    title: "UX Research",
    description: "User testing and behavioral analysis to create intuitive paths that maximize conversions.",
  },
  {
    icon: <Layers className="text-gold" />,
    title: "Branding",
    description: "Cohesive visual identities that scale from small icons to massive digital ecosystems.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-transparent relative">
      <div className="max-w-[1600px] mx-auto px-6 2xl:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row items-center md:items-end justify-between mb-10 md:mb-16 gap-6 md:gap-8 text-center md:text-left"
        >
          <div className="max-w-xl flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-2">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 24 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-[1px] bg-silver/50 md:block hidden" 
              />
              <span className="text-silver-gradient font-bold tracking-[0.3em] text-[10px] md:text-[11px] uppercase">CAPABILITIES</span>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 24 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-[1px] bg-silver/50 md:hidden" 
              />
            </div>
            <h2 className="text-2xl md:text-5xl font-bold leading-tight tracking-tight uppercase">
              PRECISION <span className="text-gold-gradient italic">SERVICES</span>
            </h2>
          </div>
          <p className="max-w-xs text-white/40 text-[11px] md:text-sm leading-relaxed font-light mx-auto md:mx-0">
            High-end digital solutions for brands that demand perfection. We blend technical rigor with creative intuition.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-t border-l border-white/5"
        >
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
              className="group p-4 md:p-6 border-r border-b border-white/5 transition-all duration-500 relative overflow-hidden"
            >
              <div className="mb-3 md:mb-4 group-hover:-translate-y-1 transition-transform duration-500 relative z-10">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center text-white/30 group-hover:text-gold transition-all"
                >
                  {service.icon}
                </motion.div>
              </div>
              
              <h3 className="text-sm md:text-base font-bold mb-2 md:mb-3 tracking-wide text-white/70 group-hover:text-white transition-colors uppercase relative z-10">{service.title}</h3>
              <p className="text-white/20 text-[11px] md:text-sm leading-relaxed font-light relative z-10">
                {service.description}
              </p>

              <div className="absolute bottom-3 right-3 text-[7px] md:text-[8px] font-display font-bold text-white/[0.03] italic z-10">
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Hover highlight effect */}
              <div className="absolute inset-0 bg-gold-gradient opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
