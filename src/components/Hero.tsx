import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useBooking } from "../context/BookingContext";

export default function Hero() {
  const { openBooking } = useBooking();
  return (
    <section className="relative min-h-[50vh] md:min-h-[70vh] flex items-center justify-center pt-24 md:pt-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-10 z-0" />
      <motion.div 
        animate={{ 
          x: [0, 20, 0], 
          y: [0, -30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -left-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gold/10 blur-[100px] md:blur-[150px] rounded-full" 
      />
      <motion.div 
        animate={{ 
          x: [0, -30, 0], 
          y: [0, 20, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 -right-20 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-silver/10 blur-[100px] md:blur-[150px] rounded-full" 
      />


      <div className="max-w-[1600px] mx-auto px-6 2xl:px-12 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/5 text-[10px] font-bold tracking-[0.3em] text-gold mb-8 md:mb-10 shadow-2xl"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
            </span>
            CREATIVE EXCELLENCE BY DESIGN
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-8xl lg:text-[9rem] font-display font-bold leading-tight tracking-tight mb-6 md:mb-8"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="text-silver-gradient opacity-80"
            >
              SHARP MINDS.
            </motion.span> <br />
            <span className="text-gold-gradient italic relative inline-block">
              LOGIC EDGE
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.2, duration: 1.5, ease: "easeInOut" }}
                className="absolute -bottom-1 md:-bottom-2 left-0 h-[1px] md:h-[2px] bg-gold-gradient blur-[1px]"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="max-w-xl text-base md:text-xl text-white/40 font-light leading-relaxed mb-10 md:mb-12"
          >
            A high-end boutique agency building precision-engineered digital products. We merge technical logic with creative edge.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-16 md:mb-20"
          >
            <button 
              onClick={openBooking}
              className="group relative px-8 py-4 md:px-10 md:py-5 font-bold overflow-hidden rounded-full transition-transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(212,175,55,0.2)]"
            >
              <div className="absolute inset-0 bg-gold-gradient" />
              <span className="relative text-black flex items-center justify-center gap-3 text-sm md:text-base selection:bg-black/10">
                BOOK FREE CONSULTANCY
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <a 
              href="#work"
              className="px-8 py-4 md:px-10 md:py-5 bg-white/[0.03] border border-white/10 text-white font-bold rounded-full hover:bg-white/[0.08] transition-all backdrop-blur-md text-sm md:text-base cursor-pointer flex items-center justify-center"
            >
              EXPLORE WORK
            </a>
          </motion.div>
        </div>

        {/* Floating Social Proof */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-12 overflow-hidden py-8 border-y border-white/5 bg-white/[0.01]"
        >
          <div className="flex animate-marquee whitespace-nowrap gap-16 items-center opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            {["FORBES", "TECHCRUNCH", "WIRED", "THE VERGE", "BLOOMBERG", "FAST COMPANY", "FORBES", "TECHCRUNCH"].map((partner, i) => (
              <span key={i} className="text-sm font-bold tracking-[0.4em]">{partner}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
