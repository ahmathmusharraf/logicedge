import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, Clock, User, Mail, MessageSquare, CheckCircle2 } from "lucide-react";
import { useState, FormEvent } from "react";
import { useBooking } from "../context/BookingContext";

export default function BookingModal() {
  const { isOpen, closeBooking } = useBooking();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    date: "",
    time: ""
  });

  const generateWhatsAppLink = () => {
    const text = encodeURIComponent(
      `*New Consultancy Booking*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Date:* ${formData.date}\n` +
      `*Time:* ${formData.time}\n\n` +
      `*Project Details:* ${formData.project}`
    );
    // Replace with your actual WhatsApp number
    return `https://wa.me/94760537608?text=${text}`;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Open WhatsApp in a new tab
    const whatsappLink = generateWhatsAppLink();
    window.open(whatsappLink, '_blank');

    // Simulate API call and show success state
    setTimeout(() => {
      setIsSubmitted(true);
    }, 500);
  };

  const generateCalendarLink = () => {
    const title = encodeURIComponent("Logic Edge Consultancy Call");
    const details = encodeURIComponent(`Consultancy call with ${formData.name} regarding: ${formData.project}`);
    const location = encodeURIComponent("Google Meet (link will be sent)");
    
    // Format date for Google Calendar: YYYYMMDDTHHMMSSZ
    // Simple mock formatting for the sake of functionality
    const dateStr = formData.date.replace(/-/g, "");
    const startTime = formData.time.replace(/:/g, "") + "00";
    // Default 30 min duration
    const endHour = parseInt(formData.time.split(":")[0]);
    const endMin = parseInt(formData.time.split(":")[1]) + 30;
    const endTime = `${endHour.toString().padStart(2, "0")}${endMin.toString().padStart(2, "0")}00`;
    
    const dates = `${dateStr}T${startTime}/${dateStr}T${endTime}`;
    
    return `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dates}`;
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeBooking}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-md bg-zinc-900 border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl"
        >
          {/* Close Button */}
          <button 
            onClick={closeBooking}
            className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors z-10"
          >
            <X size={24} />
          </button>

          {!isSubmitted ? (
            <div className="p-6 md:p-10">
              <div className="mb-6">
                <span className="text-gold font-bold tracking-[0.4em] text-[8px] uppercase mb-2 block">RESERVE YOUR SLOT</span>
                <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-white uppercase">
                  FREE <span className="text-gold-gradient italic">CONSULTANCY</span>
                </h2>
                <p className="text-white/40 text-xs mt-3 font-light">
                  Tell us about your project and pick a time that works for you. Our experts will handle the rest.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-gold transition-colors" size={16} />
                    <input 
                      required
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-[13px] text-white focus:outline-none focus:border-gold/50 transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-gold transition-colors" size={16} />
                    <input 
                      required
                      type="email"
                      placeholder="Email Address"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-[13px] text-white focus:outline-none focus:border-gold/50 transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="relative group">
                  <MessageSquare className="absolute left-4 top-4 text-white/20 group-focus-within:text-gold transition-colors" size={16} />
                  <textarea 
                    required
                    placeholder="Briefly describe your project..."
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-[13px] text-white h-24 focus:outline-none focus:border-gold/50 transition-all resize-none"
                    value={formData.project}
                    onChange={(e) => setFormData({...formData, project: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative group">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-gold transition-colors" size={16} />
                    <input 
                      required
                      type="date"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-[13px] text-white focus:outline-none focus:border-gold/50 transition-all [color-scheme:dark]"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                  <div className="relative group">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-gold transition-colors" size={16} />
                    <input 
                      required
                      type="time"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-[13px] text-white focus:outline-none focus:border-gold/50 transition-all [color-scheme:dark]"
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-gold-gradient text-white font-bold rounded-xl text-xs uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_30px_rgba(212,175,55,0.2)]"
                >
                  Confirm Booking & Signal WhatsApp
                </button>
              </form>
            </div>
          ) : (
            <div className="p-8 md:p-12 text-center py-16">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="text-gold" size={40} />
              </div>
              <h2 className="text-3xl font-display font-bold text-white mb-4 uppercase">BOOKING RECEIVED</h2>
              <p className="text-white/40 text-sm mb-12 max-w-sm mx-auto font-light leading-relaxed">
                Thank you, {formData.name.split(" ")[0]}. We've reserved your slot for <span className="text-white font-medium">{formData.date}</span> at <span className="text-white font-medium">{formData.time}</span>. 
              </p>
              
              <div className="space-y-4">
                <a 
                  href={generateCalendarLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-5 bg-white text-black font-bold rounded-xl text-sm uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Add to Google Calendar
                </a>
                <button 
                  onClick={() => {
                    setIsSubmitted(false);
                    closeBooking();
                  }}
                  className="block w-full py-4 text-white/40 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
