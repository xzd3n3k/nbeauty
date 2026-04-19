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
              className="w-9 h-9 flex items-center justify-center border border-beige-200 text-stone-400 hover:border-gold-400 hover:text-gold-500 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 31" width="16" height="16" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M29.174 9.782a6.27 6.27 0 0 1 1.643 3.256v.004a6.3 6.3 0 0 1-.408 3.553l-.084.202-2.928.52a11.32 11.32 0 0 1-.371 1.67l2.402 1.691v.215a6.25 6.25 0 0 1-1.13 3.472 6.218 6.218 0 0 1-2.79 2.222l-.203.081-3.973-2.794.448-.337c.255-.19.505-.401.747-.62l.239-.22 2.71 1.907a4.429 4.429 0 0 0 2.09-3.058l-2.684-1.89.12-.3a9.728 9.728 0 0 0 .72-3.24v-.357l.367-.032 2.907-.515a4.467 4.467 0 0 0 .069-1.866 4.368 4.368 0 0 0-.74-1.784l-3.225.572-.126-.3a9.71 9.71 0 0 0-1.788-2.81l-.218-.24 1.905-2.717A4.433 4.433 0 0 0 23.61 4.7a4.445 4.445 0 0 0-1.781-.734l-1.882 2.701-.299-.121a9.726 9.726 0 0 0-3.23-.722l-.323-.016-.573-3.273a4.416 4.416 0 0 0-3.634.673l.57 3.244-.3.126a9.699 9.699 0 0 0-.876.422l-.492.267-.836-4.76.157-.15a6.238 6.238 0 0 1 6.784-1.241l.202.085.516 2.944a11.2 11.2 0 0 1 1.664.373l1.684-2.413h.214A6.185 6.185 0 0 1 24.63 3.24a6.235 6.235 0 0 1 2.213 2.803l.08.202-1.707 2.446c.347.458.65.933.92 1.443l2.887-.51.15.158Zm-7.599 2.689a6.578 6.578 0 0 1 .795 3.694c-.013.2-.037.4-.072.593a6.27 6.27 0 0 1-.324 1.198 6.552 6.552 0 0 1-2.296 3.012 6.26 6.26 0 0 1-.596.386 6.53 6.53 0 0 1-4.273.792 7.08 7.08 0 0 1-.767-.166 6.572 6.572 0 0 1-3.977-3.133 6.576 6.576 0 0 1-.42-5.481 6.57 6.57 0 0 1 2.417-3.123 6.412 6.412 0 0 1 1.088-.613 6.54 6.54 0 0 1 3.309-.53c.182.018.368.045.547.076.228.041.451.093.668.158a6.6 6.6 0 0 1 3.9 3.137Zm-7.547 5.698c.035.028.076.055.114.08l.003-.004c.5.337 1.099.53 1.742.53.152 0 .3-.01.448-.03l.01-.002c.052-.007.107-.013.159-.026a3.121 3.121 0 0 0 1.936-1.257l.033-.048a3.116 3.116 0 0 0 .503-2.27 3.14 3.14 0 0 0-1.233-2.018l-.072-.05a3.103 3.103 0 0 0-1.787-.562c-.169 0-.33.01-.492.038l-.014.002-.016.003-.029.005a3.122 3.122 0 0 0-1.956 1.205c-.027.038-.055.076-.082.118a3.105 3.105 0 0 0-.492 2.324 3.118 3.118 0 0 0 1.225 1.962ZM3.506 20.221a2.506 2.506 0 1 0 0-5.013 2.506 2.506 0 0 0 0 5.013Zm7.637 5.581a2.506 2.506 0 1 1-5.013 0 2.506 2.506 0 0 1 5.013 0Zm6.824 4.59a2.506 2.506 0 1 0 0-5.013 2.506 2.506 0 0 0 0 5.013ZM8.196 8.402a2.506 2.506 0 1 1-5.013 0 2.506 2.506 0 0 1 5.013 0Z"/>
              </svg>
            </a>
            <a
              href="https://www.notino.cz/salony/nbeauty-care/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Notino"
              className="w-9 h-9 flex items-center justify-center border border-beige-200 text-stone-400 hover:border-gold-400 hover:text-gold-500 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="16" height="16">
                <text x="20" y="30" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontSize="26" fontWeight="900" fill="currentColor">N</text>
              </svg>
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
            href="https://zdenek-dev.cz"
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
