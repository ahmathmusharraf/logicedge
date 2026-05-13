import { motion, useScroll, useTransform } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { useBooking } from "../context/BookingContext";

const NAV_LINKS = [
  { name: "Services", href: "/#services" },
  { name: "Work", href: "/#work" },
  { name: "Process", href: "/#process" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { openBooking } = useBooking();
  const { scrollY } = useScroll();
  const height = useTransform(scrollY, [0, 100], ["80px", "64px"]);
  const backgroundColor = useTransform(scrollY, [0, 100], ["rgba(0,0,0,0)", "rgba(0,0,0,0.8)"]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <motion.nav 
      style={{ height, backgroundColor }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur-md transition-shadow"
    >
      <div className="max-w-[1600px] mx-auto px-6 2xl:px-12 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative w-7 h-7 rotate-45 group-hover:rotate-90 transition-transform duration-500">
            <div className="absolute inset-0 bg-silver-gradient rounded-sm opacity-100" />
            <div className="absolute inset-[2px] bg-black rounded-xs" />
            <div className="absolute inset-[6px] bg-gold-gradient rounded-xs" />
          </div>
          <span className="font-display font-bold text-lg tracking-tighter text-white">
            LOGIC <span className="text-gold-gradient">EDGE</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link
                to={link.href}
                className={cn(
                  "text-[11px] uppercase tracking-[0.2em] font-bold transition-all hover:text-gold relative group/link",
                  location.pathname === link.href ? "text-gold" : "text-white/40"
                )}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover/link:w-full" />
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <button 
              onClick={openBooking}
              className="px-6 py-2 bg-gold-gradient text-black text-[10px] font-bold rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)]"
            >
              BOOK FREE CONSULTANCY
            </button>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { x: 0 } : { x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed inset-0 top-0 left-0 h-screen w-screen bg-black z-[-1] flex flex-col justify-center px-12 gap-8 md:hidden"
      >
        {NAV_LINKS.map((link, i) => (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, x: 20 }}
            animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link
              to={link.href}
              className={cn(
                "text-4xl font-display font-bold transition-colors hover:text-gold",
                location.pathname === link.href ? "text-gold" : "text-white"
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          </motion.div>
        ))}
        <button 
          onClick={openBooking}
          className="w-full py-5 bg-gold-gradient text-black text-xs font-bold rounded-xl mt-8"
        >
          BOOK FREE CONSULTANCY
        </button>
      </motion.div>
    </motion.nav>
  );
}
