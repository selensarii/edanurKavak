"use client";

import { motion } from "framer-motion";
import { MessageCircle, Search, Sparkles } from "lucide-react";

const steps = [
  {
    title: "1. İlk İletişim & Randevu",
    description: "Benimle iletişime geçerek tanışma için en uygun zamanı belirliyoruz. Süreçle ilgili aklınıza takılan ilk soruları bu aşamada yanıtlıyorum.",
    icon: MessageCircle,
  },
  {
    title: "2. Değerlendirme Görüşmesi",
    description: "İlk seansımızda sizi tanımaya, beklentilerinizi ve ihtiyaçlarınızı anlamaya odaklanıyoruz. Birlikte terapinin yol haritasını çiziyoruz.",
    icon: Search,
  },
  {
    title: "3. Terapi Süreci",
    description: "Güvenli ve yargısız bir alanda, belirlediğimiz hedefler doğrultusunda düzenli görüşmelerimize başlıyoruz. Kendi içsel dönüşümünüze adım atıyorsunuz.",
    icon: Sparkles,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-accent mb-6">
            Terapi <span className="text-primary italic">Süreci</span> Nasıl İlerler?
          </h2>
          <p className="text-lg text-accent/80">
            Terapiye başlamak cesaret ister. Bu süreçte neler yaşayacağınızı bilmek, ilk adımı atmanızı kolaylaştırabilir.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/20 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative group"
                >
                  <div className="bg-background rounded-3xl p-8 text-center border-t-4 border-primary shadow-lg hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-20 h-20 mx-auto bg-secondary rounded-full flex items-center justify-center mb-6 border-4 border-background shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-accent mb-4">{step.title}</h3>
                    <p className="text-accent/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
