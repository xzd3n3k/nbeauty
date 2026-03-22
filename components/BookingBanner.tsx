"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function BookingBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-28 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #2d2520 0%, #3d3028 50%, #2d2520 100%)",
      }}
    >
      {/* Decorative circles */}
      <div
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #c09030, transparent)" }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full opacity-8 pointer-events-none"
        style={{ background: "radial-gradient(circle, #d4a843, transparent)" }}
      />

      {/* Horizontal decorative lines */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute top-0 left-0 right-0 h-px origin-center"
        style={{ background: "linear-gradient(90deg, transparent, rgba(192,144,48,0.4), transparent)" }}
      />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute bottom-0 left-0 right-0 h-px origin-center"
        style={{ background: "linear-gradient(90deg, transparent, rgba(192,144,48,0.4), transparent)" }}
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-10" style={{ background: "linear-gradient(90deg, transparent, #c09030)" }} />
            <span className="font-body text-xs tracking-[0.4em] uppercase text-gold-400">
              Nezávazně, online
            </span>
            <div className="h-px w-10" style={{ background: "linear-gradient(90deg, #c09030, transparent)" }} />
          </div>

          <h2
            className="font-heading font-light text-white mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "0.06em", lineHeight: 1.2 }}
          >
            Naplánujte si
            <br />
            <em style={{ color: "#d4a843" }}>svůj moment péče</em>
          </h2>

          <div className="flex justify-center mb-8">
            <div className="gold-divider-wide" />
          </div>

          <p className="font-body text-white/60 text-base max-w-md mx-auto mb-10 leading-relaxed">
            Vyberte si termín, který vám vyhovuje, a rezervujte online za pár vteřin.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://nbeauty-care-oc-rozkvet.reservio.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-12 py-4 font-body text-sm tracking-widest uppercase text-white transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #c09030, #d4a843)",
                letterSpacing: "0.2em",
              }}
            >
              Rezervovat online
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
