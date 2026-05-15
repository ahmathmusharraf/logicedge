import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { cn } from "../lib/utils";
import { useBooking } from "../context/BookingContext";

import Logo from "./Logo";

export default function Footer() {
  const { openBooking } = useBooking();
  return (
    <footer className="bg-zinc-950 border-t border-white/5 pt-20 md:pt-32 pb-12">
      <div className="max-w-[1600px] mx-auto px-6 2xl:px-12">
        {/* Main CTA */}
        <div className="flex flex-col items-center text-center mb-20 md:mb-32">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-10 leading-tight text-white">
            HAVE A PROJECT <br /> <span className="text-gold-gradient italic">IN MIND?</span>
          </h2>
          <button 
            onClick={openBooking}
            className="group px-8 py-4 bg-gold-gradient text-white text-sm font-bold rounded-full flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)]"
          >
            BOOK FREE CONSULTANCY
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        {/* Footer Bottom */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/5 pt-10">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="group mb-4 block">
              <Logo size="sm" />
            </Link>
            <p className="text-white/60 max-w-sm text-sm leading-relaxed mb-6">
              We design and build premium digital experiences that elevate brands and drive real business results.
            </p>
            <div className="flex gap-4">
              {[
                { logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg", href: "#", color: "hover:bg-blue-600" },
                { logo: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg", href: "https://www.instagram.com/logic.edge/", color: "hover:bg-pink-600" },
                { logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg", href: "https://wa.me/94760537608?text=Hello%20Logic%20Edge!%20I'm%20interested%20in%20your%20services.", color: "hover:bg-green-500" },
                { logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg", href: "#", color: "hover:bg-blue-700" }
              ].map(({ logo, href, color }, i) => (
                <a 
                  key={i} 
                  href={href} 
                  target={href.startsWith('http') ? "_blank" : undefined}
                  rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className={cn(
                    "w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all hover:scale-110",
                    color
                  )}
                >
                  <img 
                    src={logo} 
                    alt="Social" 
                    className="w-5 h-5 brightness-100 group-hover:brightness-0" 
                    referrerPolicy="no-referrer"
                  />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-4">Navigation</h4>
            <ul className="flex flex-col gap-2">
              {[
                { name: "Work", href: "/#work" },
                { name: "Services", href: "/#services" },
                { name: "About", href: "/about" },
                { name: "Process", href: "/#process" }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-white/60 hover:text-silver-gradient hover:text-silver transition-colors block py-0.5"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-4">Contact</h4>
            <ul className="flex flex-col gap-3 text-sm text-silver/60">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-silver/40" />
                <a href="mailto:hello@logicedges.com" className="hover:text-white transition-colors">
                  hello@logicedges.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-silver/40" />
                <a href="tel:+94760537608" className="hover:text-white transition-colors">
                  +94 76 053 7608
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-silver/40" />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Colombo,Sri+Lanka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors block"
                >
                  Colombo, Sri Lanka
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/20 uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} LOGIC EDGE DESIGN AGENCY. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-xs text-white/20 uppercase tracking-[0.2em]">
            <Link to="/privacy" className="hover:text-gold transition-colors">PRIVACY POLICY</Link>
            <Link to="/terms" className="hover:text-gold transition-colors">TERMS OF SERVICE</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
