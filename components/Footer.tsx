import { Instagram, Facebook, CalendarCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-12 border-t border-beige-100"
      style={{ background: "#faf8f5" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start leading-none">
            <span className="font-heading text-xl font-light tracking-widest uppercase text-stone-800">
              Nbeauty
            </span>
            <span
              className="font-heading text-xs tracking-[0.35em] uppercase"
              style={{ color: "#c09030" }}
            >
              Care · Brno
            </span>
          </div>

          {/* Center — address */}
          <div className="text-center">
            <p className="font-body text-xs text-stone-400 tracking-wide">
              OC Rozkvět, Brno
            </p>
            <p className="font-body text-xs text-stone-400 tracking-wide">
              Česká republika
            </p>
          </div>

          {/* Social & links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/nbeautycare.brno/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 flex items-center justify-center border border-beige-200 text-stone-400 hover:border-gold-400 hover:text-gold-500 transition-all duration-300"
            >
              <Instagram size={16} strokeWidth={1.5} />
            </a>
            <a
              href="https://www.facebook.com/nbeautycarebrno"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 flex items-center justify-center border border-beige-200 text-stone-400 hover:border-gold-400 hover:text-gold-500 transition-all duration-300"
            >
              <Facebook size={16} strokeWidth={1.5} />
            </a>
            <a
              href="https://nbeauty-care-oc-rozkvet.reservio.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rezervace"
              className="w-9 h-9 flex items-center justify-center border border-beige-200 text-stone-400 hover:border-gold-400 hover:text-gold-500 transition-all duration-300"
            >
              <CalendarCheck size={16} strokeWidth={1.5} />
            </a>
            <a
              href="https://www.slevomat.cz/podnik/211194-nbeautycare"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Slevomat"
              className="w-9 h-9 flex items-center justify-center hover:opacity-75 transition-all duration-300"
              style={{ background: "linear-gradient(135deg, #c09030, #d4a843)" }}
            >
              <img
                src="/logos/slevomat.svg"
                alt="Slevomat"
                width={20}
                height={20}
                className="object-contain"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </a>
            <a
              href="https://www.notino.cz/salony/nbeauty-care/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Notino"
              className="w-9 h-9 flex items-center justify-center hover:opacity-75 transition-all duration-300"
              style={{ background: "linear-gradient(135deg, #c09030, #d4a843)" }}
            >
              <img
                src="/logos/notino.svg"
                alt="Notino"
                width={20}
                height={20}
                className="object-contain"
              />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px" style={{ background: "linear-gradient(90deg, transparent, #d4a843, transparent)" }} />

        {/* Copyright + credit */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-xs text-stone-400 tracking-wide">
            © {currentYear} Nbeauty Care Brno. Všechna práva vyhrazena.
          </p>
          <a
            href="https://zdenek-portfolio.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs text-stone-300 tracking-wide hover:text-gold-400 transition-colors duration-300"
          >
            Návrh & vývoj — <span className="text-stone-400">zdenek.dev</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
