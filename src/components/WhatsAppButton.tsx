import { motion } from "motion/react";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/94760537608"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-[60] group px-1"
      id="whatsapp-fab"
    >
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-[#25D366] blur-xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full" />
        
        {/* Button */}
        <div className="relative bg-[#25D366] text-white p-2.5 md:p-3.5 rounded-full shadow-2xl flex items-center justify-center border border-white/20">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
            alt="WhatsApp" 
            className="w-5 h-5 md:w-7 md:h-7"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap hidden md:block">
          <span className="text-[10px] font-bold text-white tracking-widest uppercase">Chat with us</span>
        </div>
      </div>
    </motion.a>
  );
}
