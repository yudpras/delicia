"use client";

import { useEffect, useState } from "react";
import { CookingPot, List, X } from "@phosphor-icons/react";

const NAV_LINKS = [
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Favorit", href: "#favorit" },
  { label: "Menu", href: "#kategori-menu" },
  { label: "Jangkauan", href: "#jangkauan" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className={`glass-effect shadow-sm transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : ""
        }`}
        aria-label="Navigasi utama"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              isScrolled ? "h-16" : "h-20"
            }`}
          >
            <a href="#beranda" className="flex flex-shrink-0 items-center">
              <CookingPot
                size={32}
                weight="fill"
                className="mr-2 text-primary"
                aria-hidden="true"
              />
              <span className="text-2xl font-bold tracking-tight text-secondary">
                Delicia
                <span className="text-primary">Snack & Catering</span>
              </span>
            </a>

            <nav className="hidden items-center space-x-8 md:flex" aria-label="Menu desktop">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-medium text-gray-600 transition hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#pesan"
                className="rounded-full bg-primary px-6 py-2.5 font-semibold text-white shadow-md shadow-orange-200 transition hover:bg-primary-hover"
              >
                Pesan Sekarang
              </a>
            </nav>

            <button
              type="button"
              className="flex items-center text-gray-600 transition hover:text-primary focus:outline-none md:hidden"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
            >
              {isMenuOpen ? (
                <X size={32} aria-hidden="true" />
              ) : (
                <List size={32} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="absolute w-full border-t border-gray-100 bg-white shadow-lg md:hidden"
          >
            <div className="space-y-2 px-4 pb-6 pt-2 text-center">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-md px-3 py-3 text-base font-medium text-gray-700 transition hover:bg-gray-50 hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#pesan"
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 block w-full rounded-md bg-primary px-4 py-3 text-center font-medium text-white shadow-sm"
              >
                Pesan Sekarang
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}