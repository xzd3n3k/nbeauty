"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative z-10 bg-white mx-4 w-full max-w-sm p-8"
            style={{ borderTop: "3px solid #d4a843" }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-stone-300 hover:text-stone-500 transition-colors"
              aria-label="Zavřít"
            >
              <X size={18} />
            </button>

            <p className="font-body text-xs tracking-[0.4em] uppercase text-gold-500 mb-2">
              Online rezervace
            </p>
            <h3
              className="font-heading font-light text-stone-800 mb-6"
              style={{ fontSize: "1.5rem", letterSpacing: "0.04em" }}
            >
              Kde chcete rezervovat?
            </h3>

            <div className="h-px mb-6" style={{ background: "linear-gradient(90deg, #d4a843, transparent)" }} />

            <div className="flex gap-4">
              <a
                href="https://nbeauty-care-oc-rozkvet.reservio.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex-1 flex flex-col items-center gap-3 py-6 px-4 border border-beige-200 hover:border-gold-400 hover:shadow-sm transition-all duration-300 group"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-beige-50 rounded-full overflow-hidden border border-beige-100">
                  <img
                    src="/logos/reservio.svg"
                    alt="Reservio"
                    width={36}
                    height={36}
                    className="object-contain rounded-full"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                </div>
                <span className="font-body text-sm text-stone-700 group-hover:text-gold-500 transition-colors tracking-wide">
                  Reservio
                </span>
              </a>

              <a
                href="https://www.notino.cz/salony/nbeauty-care/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex-1 flex flex-col items-center gap-3 py-6 px-4 border border-beige-200 hover:border-gold-400 hover:shadow-sm transition-all duration-300 group"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-beige-50 rounded-full overflow-hidden border border-beige-100">
                  <img
                    src="/logos/notino.svg"
                    alt="Notino"
                    width={36}
                    height={36}
                    className="object-contain rounded-full"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                </div>
                <span className="font-body text-sm text-stone-700 group-hover:text-gold-500 transition-colors tracking-wide">
                  Notino
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
