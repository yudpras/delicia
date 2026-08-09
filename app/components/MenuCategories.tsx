"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, DownloadSimple } from "./icons";
import { MENU_CATEGORIES, MENU_ITEMS, type MenuCategory } from "../lib/menu";

type ActiveTab = "Semua Menu" | MenuCategory;

const TABS: ActiveTab[] = ["Semua Menu", ...MENU_CATEGORIES];

export default function MenuCategories() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("Semua Menu");

  const visibleTiles = MENU_ITEMS.map((item) => {
    const visible = activeTab === "Semua Menu" || item.category === activeTab;
    return (
      <article
        key={item.name}
        className={`group relative h-80 w-full cursor-pointer overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:shadow-xl md:w-[calc(50%_-_12px)] lg:w-[calc(25%_-_18px)] ${
          visible ? "block" : "hidden"
        }`}
      >
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"
          aria-hidden="true"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <span className="mb-2 w-max rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
            {item.price}
          </span>
          <h3 className="mb-1 text-2xl font-bold text-white">{item.name}</h3>
          <p className="mb-4 translate-y-4 text-sm text-gray-300 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            {item.description}
          </p>
          <a
            href="#pesan"
            className="flex items-center font-medium text-primary transition-colors group-hover:text-white"
          >
            Lihat Paket
            <ArrowRight
              size={16}
              weight="bold"
              className="ml-2 transition-transform group-hover:translate-x-2"
              aria-hidden="true"
            />
          </a>
        </div>
      </article>
    );
  });

  return (
    <section
      id="kategori-menu"
      className="bg-gray-50 py-20"
      aria-labelledby="kategori-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 id="kategori-title" className="mb-4 text-3xl font-bold text-secondary sm:text-4xl">
            Pilihan Menu Sesuai Kebutuhan
          </h2>
          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-primary" aria-hidden="true" />
          <p className="mx-auto max-w-2xl text-gray-600">
            Tersedia beragam pilihan paket katering murah di Semarang yang dapat
            disesuaikan dengan jenis acara dan anggaran Anda.
          </p>
        </div>

        <div
          className="mb-12 flex flex-wrap justify-center gap-3"
          role="tablist"
          aria-label="Kategori menu"
        >
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={activeTab === tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-6 py-2.5 font-medium shadow-md transition-colors ${
                activeTab === tab
                  ? "bg-primary text-white"
                  : "border border-gray-200 bg-white text-gray-600 hover:bg-orange-50 hover:text-primary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {visibleTiles}
        </div>

        <div className="mt-12 text-center">
          <button
            type="button"
            className="rounded-full border-2 border-primary px-8 py-3 font-bold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            <DownloadSimple size={18} weight="bold" className="mr-2 inline" aria-hidden="true" />
            Unduh Pricelist Lengkap (PDF)
          </button>
        </div>
      </div>
    </section>
  );
}