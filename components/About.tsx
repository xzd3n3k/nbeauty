"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Award, Heart, Sparkles } from "lucide-react";
import { useBooking } from "./BookingProvider";

const stats = [
  { icon: Star, value: "5,0", label: "Hodnocení zákazníků" },
  { icon: Sparkles, value: "55+", label: "Různých služeb" },
  { icon: Award, value: "9", label: "Kategorií péče" },
  { icon: Heart, value: "100%", label: "Spokojenost" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { open } = useBooking();

  return (
    <section id="o-nas" className="py-28 bg-beige-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            <p className="font-body text-xs tracking-[0.4em] uppercase text-gold-500 mb-4">
              Náš příběh
            </p>
            <h2
              className="font-heading font-light text-stone-800 mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "0.04em", lineHeight: 1.2 }}
            >
              Místo, kde se
              <br />
              <em style={{ color: "#c09030" }}>krása setkává</em>
              <br />
              s péčí
            </h2>

            <div className="gold-divider mb-8" />

            <div className="space-y-5 font-body text-stone-600 leading-relaxed text-[15px]">
              <p>
                Nbeauty Care je prémiový beauty salon nacházející se v OC Rozkvět
                v Brně. Nabízíme komplexní péči o vaši krásu a pohodu — od
                relaxačních thajských masáží přes profesionální kosmetiku až po
                moderní kadeřnické služby.
              </p>
              <p>
                Náš tým zkušených odborníků se věnuje každému klientovi s plnou
                péčí a důrazem na individuální přístup. Věříme, že péče o sebe sama
                je tím nejlepším dárkem, který si můžete dopřát.
              </p>
              <p>
                Navštivte nás v příjemném prostředí OC Rozkvět a nechte se hýčkat
                profesionální péčí v útulném, elegantním prostředí.
              </p>
            </div>

            <motion.button
              onClick={open}
              whileHover={{ scale: 1.03 }}
              className="mt-10 px-8 py-3.5 border border-gold-400 text-gold-500 font-body text-xs tracking-widest uppercase hover:bg-gold-400 hover:text-white transition-all duration-300"
            >
              Rezervovat návštěvu
            </motion.button>
          </motion.div>

          {/* Right — Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className="bg-white p-8 border border-beige-100 group hover:border-gold-300 hover:shadow-md transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-full"
                    style={{ background: "linear-gradient(135deg, #faf6f0, #f5ead9)" }}
                  >
                    <stat.icon
                      size={20}
                      strokeWidth={1.5}
                      style={{ color: "#c09030" }}
                    />
                  </div>
                </div>
                <div
                  className="font-heading text-4xl font-light mb-2"
                  style={{ color: "#c09030", letterSpacing: "0.02em" }}
                >
                  {stat.value}
                </div>
                <div className="font-body text-xs tracking-wide text-stone-500 uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
