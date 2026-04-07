"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

export default function About() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="about" className="py-8 md:py-12 bg-background scroll-mt-24 min-h-[calc(100vh-5rem)] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-accent">
              Ben <span className="opacity-70 italic">Edanur Kavak</span>
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-stretch mt-8">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex-1 space-y-4 text-sm md:text-base lg:text-[17px] text-body leading-[1.6] text-justify bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-primary/10 flex flex-col justify-center"
            >
              <p>
                Doğuş Üniversitesi Psikoloji bölümünden mezun olan Psikolog Edanur Kavak, yetişkin, ergen ve çocuklarla çalışan bir ruh sağlığı uzmanıdır. Danışanlarının bireysel ihtiyaçlarını merkeze alarak, güvenli ve destekleyici bir terapi süreci sunmayı hedeflemektedir. Mesleki yaklaşımında bilimsel temelli yöntemleri benimseyen Kavak, özellikle Bilişsel Davranışçı Terapi (BDT) ve çocuk merkezli oyun terapisi ekolleri doğrultusunda çalışmalarını sürdürmektedir.
              </p>
              <p>
                2022-2025 yılları arasında GençPsider platformunda aktif olarak görev almış, bu süreçte ekip liderliği yaparak hem mesleki hem de organizasyonel deneyim kazanmıştır. 2026 yılında Moodist Hastanesi'nde klinik görüşme stajını tamamlayarak klinik alandaki yetkinliğini pekiştirmiştir.
              </p>
              <p>
                Çocuklarla yürüttüğü çalışmaları daha da desteklemek amacıyla kurucusu olduğu Boncuk Oyun Atölyesi'nde, çocukların kendilerini ifade edebilecekleri, duygularını keşfedebilecekleri ve gelişimlerini destekleyebilecekleri güvenli bir alan sunmaktadır.
              </p>
              <p className="hidden md:block">
                Psikolog Edanur Kavak, her yaş grubundan danışanın ihtiyaçlarına duyarlı, etik ilkelere bağlı ve gelişime açık bir yaklaşımla çalışmalarını sürdürmektedir.
              </p>
            </motion.div>

            {/* Portrait Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-full lg:w-[320px] shrink-0"
            >
              <div className="relative h-full min-h-[350px] lg:min-h-0 rounded-[2rem] overflow-hidden border-4 border-white shadow-xl group bg-secondary/10">
                <Image
                  src="/image/hakkımda.jpeg"
                  alt="Psikolog Edanur Kavak"
                  fill
                  sizes="(max-width: 1024px) 100vw, 320px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-accent/5 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Minimal Caption */}
              <div className="mt-3 text-center">
                <span className="text-accent/60 font-medium tracking-widest uppercase text-[9px]">
                  Psikolog
                </span>
                <div className="text-accent font-bold text-sm mt-0.5">Edanur Kavak</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          id="gallery"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-20 pt-16 border-t border-primary/10 scroll-mt-24 w-full"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-accent">
              Fotoğraf <span className="opacity-70 italic font-serif">Galerisi</span>
            </h3>
            <div className="w-12 h-1 bg-accent/20 mx-auto mt-4 rounded-full" />
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-5">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <div key={num} className="relative aspect-[4/5] w-full rounded-[1.5rem] overflow-hidden border-2 border-white shadow-lg group bg-secondary/10">
                  <Image
                    src={`/image/galeri${num}.jpeg`}
                    alt={`Edanur Kavak Galeri Fotoğrafı ${num}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer"
                    onClick={() => setSelectedImage(`/image/galeri${num}.jpeg`)}
                  />
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-300 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-[100] bg-accent/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
            >
              <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 text-white/70 hover:text-white p-2 z-[110] transition-colors"
                aria-label="Kapat"
              >
                <X size={40} strokeWidth={1.5} />
              </motion.button>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full h-full max-w-5xl max-h-[85vh]">
                  <Image
                    src={selectedImage!}
                    alt="Büyük Görünüm"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
