"use client";

import { motion } from "framer-motion";
import { fastScrollTo } from "@/utils/scroll";
import {
  User,
  Wind,
  Sun,
  Puzzle,
  Sparkles,
  Baby,
  BatteryMedium,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

// Updated content from user's provided list
const services = [
  {
    title: "Çalışma Alanları",
    icon: User,
    items: [
      "Yetişkin Terapisi",
      "Ergen Terapisi",
      "Çocuk Terapisi",
      "Oyun Terapisi",
      "Bireysel Danışmanlık"
    ]
  },
  {
    title: "Uzmanlık Alanları",
    icon: ShieldCheck,
    items: [
      "Kaygı Problemleri",
      "Depresyon",
      "Özgüven ve Benlik",
      "Stres Yönetimi",
      "Duygu Düzenleme"
    ]
  },
  {
    title: "Çocuk & Ergen Odaklı",
    icon: Baby,
    items: [
      "Davranış Problemleri",
      "Okul Uyum Sorunları",
      "Dikkat Güçlükleri",
      "Akran İlişkileri",
      "Sınav Kaygısı"
    ]
  },
  {
    title: "Atölye & Uygulamalar",
    icon: Sparkles,
    items: [
      "Oyun Terapisi",
      "Boncuk Atölyesi",
      "Gelişim Atölyeleri"
    ]
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  show: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { duration: 0.4 } 
  },
};

export default function Services() {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden bg-background/20 min-h-[calc(100vh-5rem)] flex items-center">
      {/* Dynamic Background Aura/Blobs */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, -120, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -right-20 w-[700px] h-[700px] bg-accent/5 rounded-full blur-[140px]"
        />
      </div>

      <div id="services" className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full scroll-mt-24 md:scroll-mt-32">
        {/* Artistic Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-10 relative"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-accent mb-4">
            Çalışma <span className="opacity-70 italic font-serif">Alanlarım</span>
          </h2>
          <div className="w-16 h-1 bg-accent/20 mx-auto rounded-full" />
        </motion.div>

        {/* 4-Column Horizontal Layout - Panoramic Spread */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group relative backdrop-blur-2xl bg-white/40 rounded-[2.5rem] p-8 border border-white/50 shadow-2xl shadow-accent/5 overflow-hidden transition-all duration-500"
              >
                {/* Visual Glass Shine */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex flex-col items-center text-center gap-5 mb-8">
                    {/* Glowing Icon Circle */}
                    <div className="relative w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500 group-hover:shadow-[#D4C9B9]/40 group-hover:-translate-y-1">
                      <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-0 group-hover:blur-md transition-all duration-500" />
                      <Icon className="relative w-7 h-7 text-accent" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg md:text-xl font-bold text-accent tracking-tighter leading-tight px-2">
                        {service.title}
                      </h3>
                      <div className="w-10 h-0.5 bg-primary mx-auto group-hover:w-20 transition-all duration-500" />
                    </div>
                  </div>

                  <ul className="space-y-4 mb-10 flex-grow">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[14px] md:text-[15px] lg:text-base text-accent/90 font-medium leading-snug">
                        <div className="w-2 h-2 rounded-full border border-primary/40 mt-1.5 shrink-0 group-hover:bg-primary transition-colors" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Enhanced Subtle CTA */}
                  <div className="mt-auto pt-5 border-t border-accent/5">
                    <a 
                      href="#contact" 
                      onClick={(e) => { e.preventDefault(); fastScrollTo("#contact"); }}
                      className="inline-flex items-center text-[11px] md:text-[12px] font-bold tracking-[0.2em] text-accent/40 group-hover:text-primary transition-all duration-300"
                    >
                      BİLGİ ALIN <span className="ml-2 group-hover:ml-4 transition-all">→</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
