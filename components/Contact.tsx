"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";

// Standard Instagram Icon SVG
const InstagramIcon = () => (
   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
   </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="relative py-12 md:py-20 overflow-hidden bg-white/40 scroll-mt-24 min-h-[calc(100vh-5rem)] flex items-center">
      {/* Decorative Aura Background */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-accent mb-6">
            Bana <span className="opacity-70 italic font-serif">Ulaşın</span>
          </h2>
          <p className="text-base md:text-lg text-body max-w-2xl mx-auto">
            Sorularınız, randevu talepleriniz veya diğer konular için benimle iletişime geçebilirsiniz.
          </p>
          <div className="w-16 h-1 bg-accent/20 mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Phone Card */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="group backdrop-blur-xl bg-white/40 p-8 rounded-[2.5rem] border border-white/50 shadow-xl shadow-accent/5 flex flex-col items-center text-center transition-all duration-500"
          >
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-500">
              <Phone className="w-7 h-7 text-accent" strokeWidth={1.5} />
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent/50 font-bold mb-2">Telefon</p>
            <a href="tel:+905433925858" className="text-[13px] md:text-[14px] lg:text-[15px] text-accent font-bold hover:text-primary transition-colors whitespace-nowrap">+90 (543) 392 58 58</a>
          </motion.div>

          {/* Email Card */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="group backdrop-blur-xl bg-white/40 p-8 rounded-[2.5rem] border border-white/50 shadow-xl shadow-accent/5 flex flex-col items-center text-center transition-all duration-500"
          >
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-500">
              <Mail className="w-7 h-7 text-accent" strokeWidth={1.5} />
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent/50 font-bold mb-2">E-posta</p>
            <a href="mailto:Edanur.kavak98@icloud.com" className="text-[13px] md:text-[14px] lg:text-[15px] text-accent font-bold hover:text-primary transition-all whitespace-nowrap">Edanur.kavak98@icloud.com</a>
          </motion.div>

          {/* Location Card */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="group backdrop-blur-xl bg-white/40 p-8 rounded-[2.5rem] border border-white/50 shadow-xl shadow-accent/5 flex flex-col items-center text-center transition-all duration-500"
          >
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-500">
              <MapPin className="w-7 h-7 text-accent" strokeWidth={1.5} />
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent/50 font-bold mb-2">Konum</p>
            <p className="text-[13px] md:text-[14px] lg:text-[15px] text-accent font-bold whitespace-nowrap">İstanbul / Tuzla</p>
          </motion.div>

          {/* Social Card */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="group backdrop-blur-xl bg-white/40 p-8 rounded-[2.5rem] border border-white/50 shadow-xl shadow-accent/5 flex flex-col items-center text-center transition-all duration-500"
          >
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-500">
              <InstagramIcon />
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent/50 font-bold mb-2">Instagram</p>
            <a 
              href="https://www.instagram.com/psk.ednrkvk?igsh=ZGl3bzliMzBxNTJr&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[13px] md:text-[14px] lg:text-[15px] text-accent font-bold hover:text-primary transition-colors whitespace-nowrap"
            >
              @psk.ednrkvk
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
