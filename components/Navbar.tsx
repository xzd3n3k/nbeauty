"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import BookingButton from "./BookingButton";

const navLinks = [
  { href: "#sluzby", label: "Služby" },
  { href: "#o-nas", label: "O nás" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-beige-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex flex-col leading-none group"
          >
            <span
              className={`font-heading text-2xl font-light tracking-widest uppercase transition-colors duration-300 ${
                scrolled ? "text-stone-800" : "text-white"
              }`}
            >
              Nbeauty
            </span>
            <span
              className={`font-heading text-xs tracking-[0.35em] uppercase transition-colors duration-300 ${
                scrolled ? "text-gold-500" : "text-gold-300"
              }`}
            >
              Care · Brno
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`font-body text-sm tracking-widest uppercase transition-colors duration-300 hover:text-gold-500 ${
                  scrolled ? "text-stone-700" : "text-white/90"
                }`}
              >
                {link.label}
              </button>
            ))}
            <BookingButton className="px-6 py-2.5 border border-gold-400 text-gold-500 font-body text-sm tracking-widest uppercase hover:bg-gold-400 hover:text-white transition-all duration-300">
              Rezervovat
            </BookingButton>
          </nav>

          {/* Mobile menu button */}
          <button
            className={`md:hidden transition-colors duration-300 ${scrolled ? "text-stone-800" : "text-white"}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Otevřít menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-10 md:hidden"
          >
            <button
              className="absolute top-7 right-6 text-stone-800"
              onClick={() => setMenuOpen(false)}
              aria-label="Zavřít menu"
            >
              <X size={28} />
            </button>

            <div className="flex flex-col leading-none items-center mb-6">
              <span className="font-heading text-3xl font-light tracking-widest uppercase text-stone-800">
                Nbeauty
              </span>
              <span className="font-heading text-sm tracking-[0.35em] uppercase text-gold-500">
                Care · Brno
              </span>
            </div>

            <div className="gold-divider" />

            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="font-body text-lg tracking-widest uppercase text-stone-700 hover:text-gold-500 transition-colors"
              >
                {link.label}
              </button>
            ))}

            <BookingButton
              onBeforeOpen={() => setMenuOpen(false)}
              className="mt-4 px-10 py-3 border border-gold-400 text-gold-500 font-body text-sm tracking-widest uppercase hover:bg-gold-400 hover:text-white transition-all duration-300"
            >
              Rezervovat online
            </BookingButton>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
