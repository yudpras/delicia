import Image from "next/image";
import {
  ArrowSquareOut,
  CaretRight,
  Clock,
  CookingPot,
  FacebookLogo,
  Heart,
  InstagramLogo,
  MapPin,
  PhoneCall,
  TiktokLogo,
} from "./icons";
import { PHONE_DISPLAY, WA_NUMBER } from "./CtaSection";

const QUICK_LINKS = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang Kami", href: "#keunggulan" },
  { label: "Daftar Menu", href: "#kategori-menu" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 pb-8 pt-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-12 border-b border-gray-800 pb-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-6 flex items-center">
              <CookingPot size={28} weight="fill" className="mr-2 text-primary" aria-hidden="true" />
              <span className="text-2xl font-bold tracking-tight">
                Delicia
                <span className="text-primary">Snack & Catering</span>
              </span>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-gray-400">
              Solusi catering murah berkualitas untuk segala acara di Semarang.
              Menyajikan hidangan lezat dengan bahan segar dan pelayanan profesional.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: InstagramLogo, label: "Instagram" },
                { icon: FacebookLogo, label: "Facebook" },
                { icon: TiktokLogo, label: "TikTok" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={`Kunjungi ${label} Delicia Snack & Catering`}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-primary hover:text-white"
                >
                  <Icon size={20} weight="fill" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Tautan cepat">
            <h3 className="mb-6 text-lg font-semibold">Tautan Cepat</h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center text-sm text-gray-400 transition-colors hover:text-primary"
                  >
                    <CaretRight size={12} weight="bold" className="mr-2 text-xs" aria-hidden="true" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="mb-6 text-lg font-semibold">Hubungi Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <PhoneCall size={20} weight="fill" className="mt-1 mr-3 text-primary" aria-hidden="true" />
                <div>
                  <p className="text-sm text-gray-400">Telepon / WhatsApp</p>
                  <a
                    href={`https://wa.me/${WA_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-white transition hover:text-primary"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Clock size={20} weight="fill" className="mt-1 mr-3 text-primary" aria-hidden="true" />
                <div>
                  <p className="text-sm text-gray-400">Jam Operasional CS</p>
                  <p className="font-medium">08:00 – 20:00 WIB (Senin–Minggu)</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold">Dapur Kami</h3>
            <div className="mb-4 flex items-start">
              <MapPin size={20} weight="fill" className="mt-0.5 mr-3 text-primary" aria-hidden="true" />
              <address className="text-sm leading-relaxed not-italic text-gray-400">
                Jl. KH. Abdurrohman, Muktiharjo Kidul, Kec. Pedurungan,
                Kota Semarang, Jawa Tengah 50197
              </address>
            </div>
            <a
              href="https://maps.google.com/?q=Delicia+Snack+%26+Catering+Semarang"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block h-24 w-full overflow-hidden rounded-lg border border-gray-700 bg-gray-800"
              aria-label="Buka lokasi di Google Maps"
            >
              <Image
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt=""
                fill
                sizes="(min-width: 1024px) 25vw, 100vw"
                className="object-cover opacity-50 transition-opacity group-hover:opacity-30"
              />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white">
                  <ArrowSquareOut size={14} weight="bold" className="mr-1 inline" aria-hidden="true" />
                  Buka di Maps
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between text-sm text-gray-500 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Delicia Snack &amp; Catering. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Didesain dengan
            <Heart size={14} weight="fill" className="mx-1 inline text-red-500" aria-hidden="true" />
            untuk kepuasan Anda.
          </p>
        </div>
      </div>
    </footer>
  );
}