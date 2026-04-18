"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { serviceCategories } from "@/data/services";
import { Clock } from "lucide-react";
import BookingButton from "./BookingButton";

export default function Services() {
  const [activeTab, setActiveTab] = useState(serviceCategories[0].id);
  const ref = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    const el = tabsRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const activeCategory = serviceCategories.find((c) => c.id === activeTab)!;

  return (
    <section id="sluzby" className="py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-gold-500 mb-4">
            Co pro vás nabízíme
          </p>
          <h2
            className="font-heading font-light text-stone-800 mb-6"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "0.04em" }}
          >
            Naše služby
          </h2>
          <div className="flex justify-center">
            <div className="gold-divider-wide" />
          </div>
        </motion.div>

        {/* Category tabs — scrollable, mouse-wheel enabled */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          ref={tabsRef}
          className="overflow-x-auto pb-4 mb-12"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="flex gap-2 w-fit mx-auto px-1 py-1">
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex-shrink-0 px-5 py-2.5 font-body text-xs tracking-widest uppercase transition-all duration-300 border whitespace-nowrap ${
                  activeTab === cat.id
                    ? "border-gold-400 bg-gold-400 text-white"
                    : "border-beige-200 text-stone-600 hover:border-gold-400 hover:text-gold-500 bg-white"
                }`}
              >
                <span className="mr-1.5">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Services grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {activeCategory.services.map((service, i) => (
              <motion.div
                key={`${service.name}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative bg-white border border-beige-100 p-6 hover:border-gold-300 hover:shadow-lg transition-all duration-300"
              >
                {/* Gold top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                  style={{ background: "linear-gradient(90deg, #c09030, #d4a843)" }}
                />

                <div className="flex flex-col h-full">
                  <h3
                    className="font-heading text-xl font-medium text-stone-800 mb-3 leading-snug"
                    style={{ letterSpacing: "0.02em" }}
                  >
                    {service.name}
                  </h3>

                  {service.description && (
                    <p className="font-body text-sm text-stone-500 mb-3 italic">
                      {service.description}
                    </p>
                  )}

                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-beige-100">
                    {service.duration ? (
                      <span className="flex items-center gap-1.5 font-body text-xs text-stone-400 tracking-wide">
                        <Clock size={13} strokeWidth={1.5} />
                        {service.duration}
                      </span>
                    ) : (
                      <span />
                    )}
                    <span
                      className="font-heading text-xl font-medium"
                      style={{ color: "#c09030" }}
                    >
                      {service.price}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="font-body text-stone-500 mb-6 text-sm tracking-wide">
            Nezávazná rezervace online — rychle a jednoduše
          </p>
          <BookingButton
            className="px-12 py-4 font-body text-sm tracking-widest uppercase text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #c09030, #d4a843)",
              letterSpacing: "0.2em",
            }}
          >
            Rezervovat termín
          </BookingButton>
        </motion.div>
      </div>
    </section>
  );
}
