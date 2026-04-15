"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, Phone, Mail, Instagram, Facebook, ShoppingBag, CalendarCheck } from "lucide-react";

const openingHours = [
  { day: "Pondělí – Pátek", hours: "9:00 – 19:00" },
  { day: "Sobota", hours: "10:00 – 19:00" },
  { day: "Neděle", hours: "Zavřeno" },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="kontakt" className="py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-gold-500 mb-4">
            Kde nás najdete
          </p>
          <h2
            className="font-heading font-light text-stone-800 mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "0.04em" }}
          >
            Kontakt & Otevírací doba
          </h2>
          <div className="flex justify-center">
            <div className="gold-divider-wide" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Address & Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-beige-50 border border-beige-100 p-8 hover:border-gold-300 transition-colors duration-300"
          >
            <div className="flex items-start gap-4 mb-6">
              <div
                className="w-10 h-10 flex-shrink-0 flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #c09030, #d4a843)" }}
              >
                <MapPin size={18} strokeWidth={1.5} color="white" />
              </div>
              <div>
                <h3 className="font-heading text-xl text-stone-800 mb-2">Adresa</h3>
                <p className="font-body text-stone-600 text-sm leading-relaxed">
                  Nbeauty Care
                  <br />
                  OC Rozkvět
                  <br />
                  Brno
                </p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=OC+Rozkvet+Brno"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs tracking-widest uppercase text-gold-500 hover:text-gold-600 transition-colors duration-200 border-b border-gold-300 pb-0.5"
            >
              Zobrazit na mapě →
            </a>

            <div className="mt-6 space-y-3 border-t border-beige-200 pt-5">
              <a
                href="tel:+420725876998"
                className="flex items-center gap-3 group"
              >
                <div
                  className="w-8 h-8 flex-shrink-0 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ background: "linear-gradient(135deg, #c09030, #d4a843)" }}
                >
                  <Phone size={14} strokeWidth={1.5} color="white" />
                </div>
                <span className="font-body text-sm text-stone-600 group-hover:text-gold-500 transition-colors">
                  +420 725 876 998
                </span>
              </a>
              <a
                href="mailto:nbeautyrozkvet@email.cz"
                className="flex items-center gap-3 group"
              >
                <div
                  className="w-8 h-8 flex-shrink-0 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ background: "linear-gradient(135deg, #c09030, #d4a843)" }}
                >
                  <Mail size={14} strokeWidth={1.5} color="white" />
                </div>
                <span className="font-body text-sm text-stone-600 group-hover:text-gold-500 transition-colors">
                  nbeautyrozkvet@email.cz
                </span>
              </a>
            </div>
          </motion.div>

          {/* Opening hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-beige-50 border border-beige-100 p-8 hover:border-gold-300 transition-colors duration-300"
          >
            <div className="flex items-start gap-4 mb-6">
              <div
                className="w-10 h-10 flex-shrink-0 flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #c09030, #d4a843)" }}
              >
                <Clock size={18} strokeWidth={1.5} color="white" />
              </div>
              <h3 className="font-heading text-xl text-stone-800 mt-1">Otevírací doba</h3>
            </div>

            <div className="space-y-3">
              {openingHours.map((item) => (
                <div
                  key={item.day}
                  className="flex justify-between items-center py-2 border-b border-beige-200 last:border-0"
                >
                  <span className="font-body text-sm text-stone-600">{item.day}</span>
                  <span className="font-body text-sm text-stone-800 font-medium">{item.hours}</span>
                </div>
              ))}
            </div>

            <p className="mt-4 font-body text-xs text-stone-400 italic">
              * Otevírací doba se může lišit. Prosíme o ověření před návštěvou.
            </p>
          </motion.div>

          {/* Links & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-beige-50 border border-beige-100 p-8 hover:border-gold-300 transition-colors duration-300"
          >
            <h3 className="font-heading text-xl text-stone-800 mb-6">Rychlé odkazy</h3>

            <div className="space-y-4">
              <a
                href="https://nbeauty-care-oc-rozkvet.reservio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div
                  className="w-9 h-9 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: "linear-gradient(135deg, #c09030, #d4a843)" }}
                >
                  <CalendarCheck size={16} strokeWidth={1.5} color="white" />
                </div>
                <div>
                  <div className="font-body text-sm text-stone-800 group-hover:text-gold-500 transition-colors">
                    Online rezervace
                  </div>
                  <div className="font-body text-xs text-stone-400">reservio.com</div>
                </div>
              </a>

              <a
                href="https://www.instagram.com/nbeautycare.brno/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div
                  className="w-9 h-9 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: "linear-gradient(135deg, #c09030, #d4a843)" }}
                >
                  <Instagram size={16} strokeWidth={1.5} color="white" />
                </div>
                <div>
                  <div className="font-body text-sm text-stone-800 group-hover:text-gold-500 transition-colors">
                    Instagram
                  </div>
                  <div className="font-body text-xs text-stone-400">@nbeautycare.brno</div>
                </div>
              </a>

              <a
                href="https://www.facebook.com/nbeautycarebrno"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div
                  className="w-9 h-9 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: "linear-gradient(135deg, #c09030, #d4a843)" }}
                >
                  <Facebook size={16} strokeWidth={1.5} color="white" />
                </div>
                <div>
                  <div className="font-body text-sm text-stone-800 group-hover:text-gold-500 transition-colors">
                    Facebook
                  </div>
                  <div className="font-body text-xs text-stone-400">nbeautycarebrno</div>
                </div>
              </a>

              {/* E-shop placeholder — link sem doplníte */}
              <div className="flex items-center gap-3 group opacity-50 cursor-not-allowed" title="Připravujeme">
                <div
                  className="w-9 h-9 flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #bfa07a, #c4b08a)" }}
                >
                  <ShoppingBag size={16} strokeWidth={1.5} color="white" />
                </div>
                <div>
                  <div className="font-body text-sm text-stone-800">E-shop</div>
                  <div className="font-body text-xs text-stone-400">Připravujeme</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
