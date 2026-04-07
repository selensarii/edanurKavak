"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fastScrollTo } from "@/utils/scroll";

export default function Hero() {
  return (
    <section id="home" className="relative px-6 sm:px-6 lg:px-8 overflow-hidden flex items-center min-h-[calc(100vh-5rem)]">
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-secondary opacity-30 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-primary opacity-20 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto w-full py-12 lg:py-20 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-5 sm:space-y-8 text-center lg:text-left items-center lg:items-start flex flex-col"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/50 text-accent text-sm font-medium border border-primary/20">
              Psikolog Edanur Kavak
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-accent leading-tight">
              Birey Odaklı <br />
              <span className="opacity-70 italic">Psikoterapi</span> Süreci.
            </h1>
            <p className="text-sm sm:text-lg text-body max-w-lg leading-relaxed text-justify sm:text-justify">
              Bilişsel Davranışçı Terapi (BDT) ve güncel bilimsel yaklaşımlar doğrultusunda; yetişkin, ergen ve çocuk danışanların psikolojik dayanıklılığını artırmayı ve yaşam kalitesini iyileştirmeyi hedefliyoruz. Etik, güvenli ve yapılandırılmış bir klinik destek süreci.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center lg:items-start w-full sm:w-auto">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); fastScrollTo("#contact"); }}
                className="inline-flex justify-center items-center bg-primary text-accent font-medium px-6 py-3 sm:px-8 sm:py-4 rounded-full hover:bg-primary/90 transition-all hover:-translate-y-1 hover:shadow-lg text-sm sm:text-base max-w-[300px] w-full sm:w-auto"
              >
                Randevu Al
              </a>
              <a
                href="#services"
                onClick={(e) => { e.preventDefault(); fastScrollTo("#services"); }}
                className="inline-flex justify-center items-center bg-transparent border-2 border-primary/30 text-accent font-medium px-6 py-3 sm:px-8 sm:py-4 rounded-full hover:border-primary hover:bg-primary/5 transition-all text-sm sm:text-base max-w-[300px] w-full sm:w-auto"
              >
                Çalışma Alanları
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative mx-auto lg:ml-auto lg:mr-0 max-w-[200px] sm:max-w-sm w-full"
          >
            <div className="absolute inset-0 bg-secondary rounded-[3rem] rotate-6 transform transition-transform hover:rotate-3 duration-500 ease-out" />
            <div className="relative aspect-[3/4] w-full rounded-[2rem] sm:rounded-[3rem] overflow-hidden border-4 sm:border-8 border-background shadow-2xl bg-secondary/20">
              <Image
                src="/image/ana_sayfa.jpeg"
                alt="Psikolog Edanur Kavak"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center transition-transform hover:scale-105 duration-700 ease-out"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
