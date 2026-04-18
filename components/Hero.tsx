"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import BookingButton from "./BookingButton";

export default function Hero() {
  const scrollToServices = () => {
    document.getElementById("sluzby")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #2d2520 0%, #3d3028 40%, #4a3a2e 70%, #2d2520 100%)",
        }}
      />

      {/* Decorative beige/gold geometric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top-right large circle */}
        <div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, #c09030 0%, transparent 70%)",
          }}
        />
        {/* Bottom-left accent */}
        <div
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-8"
          style={{
            background:
              "radial-gradient(circle, #d4a843 0%, transparent 70%)",
          }}
        />

        {/* Thin gold horizontal lines */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          className="absolute top-1/3 left-0 right-0 h-px origin-left"
          style={{ background: "linear-gradient(90deg, transparent, rgba(192,144,48,0.15), transparent)" }}
        />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.0, ease: "easeOut" }}
          className="absolute top-2/3 left-0 right-0 h-px origin-right"
          style={{ background: "linear-gradient(90deg, transparent, rgba(192,144,48,0.15), transparent)" }}
        />

        {/* Vertical accent line left */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="absolute left-16 top-0 bottom-0 w-px origin-top hidden lg:block"
          style={{ background: "linear-gradient(180deg, transparent, rgba(192,144,48,0.2), transparent)" }}
        />
        {/* Vertical accent line right */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" }}
          className="absolute right-16 top-0 bottom-0 w-px origin-top hidden lg:block"
          style={{ background: "linear-gradient(180deg, transparent, rgba(192,144,48,0.2), transparent)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Pre-title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-px w-12" style={{ background: "linear-gradient(90deg, transparent, #c09030)" }} />
          <span className="font-body text-xs tracking-[0.4em] uppercase text-gold-400">
            OC Rozkvět · Brno
          </span>
          <div className="h-px w-12" style={{ background: "linear-gradient(90deg, #c09030, transparent)" }} />
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-heading font-light text-white mb-4"
          style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)", lineHeight: 1.05, letterSpacing: "0.06em" }}
        >
          Nbeauty
          <br />
          <em className="font-light" style={{ color: "#d4a843" }}>Care</em>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-body font-light text-white/70 text-lg tracking-wide max-w-xl mx-auto mb-12"
        >
          Tvé místo pro krásu, relaxaci a péči o tělo
        </motion.p>

        {/* Gold divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex justify-center mb-12"
        >
          <div className="gold-divider-wide" />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <BookingButton
            className="px-10 py-4 font-body text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #c09030, #d4a843)",
              color: "white",
              letterSpacing: "0.2em",
            }}
          >
            Rezervovat online
          </BookingButton>
          <button
            onClick={scrollToServices}
            className="px-10 py-4 border border-white/40 text-white font-body text-sm tracking-widest uppercase hover:border-gold-400 hover:text-gold-400 transition-all duration-300"
            style={{ letterSpacing: "0.2em" }}
          >
            Naše služby
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToServices}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hover:text-gold-400 transition-colors duration-300"
        aria-label="Posunout dolů"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={28} strokeWidth={1} />
        </motion.div>
      </motion.button>
    </section>
  );
}
