import Image from "next/image";
import { ArrowRight, DownloadSimple } from "./icons";

type Category = {
  title: string;
  price: string;
  description: string;
  image: string;
  imageAlt: string;
};

const CATEGORIES: Category[] = [
  {
    title: "Nasi Kotak",
    price: "Mulai Rp 25k",
    description: "Praktis dan higienis untuk rapat, seminar, atau acara syukuran.",
    image:
      "https://plus.unsplash.com/premium_photo-1667389723440-dbbde959df52?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Nasi kotak katering untuk rapat",
  },
  {
    title: "Prasmanan",
    price: "Pilihan Lengkap",
    description: "Sajian elegan bergaya buffet untuk resepsi pernikahan dan acara kantor.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    imageAlt: "Prasmanan buffet untuk acara kantor",
  },
  {
    title: "Snack Box",
    price: "Mulai Rp 15k",
    description: "Aneka kue tradisional dan modern untuk menemani waktu santai acara Anda.",
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    imageAlt: "Snack box berisi aneka kue",
  },
  {
    title: "Tumpeng & Hantaran",
    price: "Tradisional",
    description: "Simbol syukur dengan hiasan cantik dan rasa otentik untuk hari spesial.",
    image:
      "https://images.unsplash.com/photo-1707999251954-2a4abc6e1f35?q=80&w=980&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Tumpeng dan hantaran untuk syukuran",
  },
];

const TABS = ["Nasi Kotak", "Prasmanan", "Snack Box", "Tumpeng"];

export default function MenuCategories() {
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

        <div className="mb-12 flex flex-wrap justify-center gap-3" role="tablist" aria-label="Kategori menu">
          {TABS.map((tab, index) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={index === 0}
              className={`rounded-full px-6 py-2.5 font-medium shadow-md transition-colors ${
                index === 0
                  ? "bg-primary text-white"
                  : "border border-gray-200 bg-white text-gray-600 hover:bg-orange-50 hover:text-primary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((category) => (
            <article
              key={category.title}
              className="group relative h-80 cursor-pointer overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              <Image
                src={category.image}
                alt={category.imageAlt}
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
                  {category.price}
                </span>
                <h3 className="mb-1 text-2xl font-bold text-white">{category.title}</h3>
                <p className="mb-4 translate-y-4 text-sm text-gray-300 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {category.description}
                </p>
                <div className="flex items-center font-medium text-primary transition-colors group-hover:text-white">
                  Lihat Paket
                  <ArrowRight
                    size={16}
                    weight="bold"
                    className="ml-2 transition-transform group-hover:translate-x-2"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </article>
          ))}
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