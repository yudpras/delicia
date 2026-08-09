"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  CaretLeft,
  CaretRight,
  HandSwipeLeft,
  Star,
  StarHalf,
} from "@phosphor-icons/react";

type Testimonial = {
  quote: string;
  name: string;
  label: string;
  avatar: string;
  stars: number;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "\u201CMakanannya enak banget, porsi pas, dan yang terpenting pengiriman tepat waktu. Tamu-tamu syukuran di rumah pada nanya pesan katering di mana. Recommended!\u201D",
    name: "Ibu Sarah",
    label: "Acara Syukuran Keluarga",
    avatar: "https://i.pravatar.cc/150?img=47",
    stars: 5,
  },
  {
    quote:
      "\u201CSering pesan nasi kotak buat meeting direksi. Packagingnya terlihat premium, bersih, rasanya konsisten enak. Klien-klien kantor juga pada suka.\u201D",
    name: "Bapak Andi",
    label: "HRD Perusahaan Swasta",
    avatar: "https://i.pravatar.cc/150?img=11",
    stars: 5,
  },
  {
    quote:
      "\u201CTerima kasih Delicia! Prasmanan untuk resepsi pernikahan kami terlihat mewah. Staf yang bertugas juga sangat sigap dan ramah. Harga masuk akal dengan kualitas sebaik ini.\u201D",
    name: "Dina & Reza",
    label: "Resepsi Pernikahan",
    avatar: "https://i.pravatar.cc/150?img=32",
    stars: 4.5,
  },
  {
    quote:
      "\u201CTumpeng mininya gemes banget dan rasanya autentik. Lauk pauknya komplit dan segar. Cocok banget buat hampers atau dibagi-bagi pas arisan.\u201D",
    name: "Ibu Lina",
    label: "Ketua Arisan",
    avatar: "https://i.pravatar.cc/150?img=9",
    stars: 5,
  },
  {
    quote:
      "\u201CRespon CS-nya juara! Sempat ada perubahan jumlah pesanan H-2 acara, tapi tim Delicia sangat kooperatif dan responsif membantu penyesuaian.\u201D",
    name: "Rizky Firmansyah",
    label: "Panitia Seminar Kampus",
    avatar: "https://i.pravatar.cc/150?img=12",
    stars: 5,
  },
  {
    quote:
      "\u201CBeberapa kali pesan untuk acara keluarga, tidak pernah kecewa. Nasi liwet dan ayam galaknya juara. Pertahankan kualitas dan rasanya terus ya!\u201D",
    name: "Keluarga Bpk. Hendra",
    label: "Acara Khitanan",
    avatar: "https://i.pravatar.cc/150?img=33",
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  const full = Math.floor(count);
  const half = count % 1 !== 0;

  return (
    <div
      className="mb-4 flex items-center gap-0.5 text-yellow-400"
      aria-label={`Rating ${count} dari 5`}
    >
      {Array.from({ length: full }).map((_, index) => (
        <Star key={`full-${index}`} size={20} weight="fill" aria-hidden="true" />
      ))}
      {half && <StarHalf size={20} weight="fill" aria-hidden="true" />}
      {Array.from({ length: 5 - full - (half ? 1 : 0) }).map((_, index) => (
        <Star
          key={`empty-${index}`}
          size={20}
          weight="fill"
          className="text-gray-300"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: number) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const card = slider.firstElementChild as HTMLElement | null;
    if (!card) return;
    const gap = parseFloat(getComputedStyle(slider).gap) || 0;
    slider.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: "smooth" });
  };

  return (
    <section id="testimoni" className="bg-gray-50 py-20" aria-labelledby="testimoni-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-primary">
            Ulasan Pelanggan
          </span>
          <h2 id="testimoni-title" className="mb-4 text-3xl font-bold text-secondary sm:text-4xl">
            Apa Kata Mereka?
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-primary" aria-hidden="true" />
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Kebahagiaan pelanggan adalah prioritas utama kami — inilah pengalaman mereka
            setelah mempercayakan konsumsi acaranya kepada Delicia Snack &amp; Catering.
          </p>
        </div>

        <div className="relative px-4 sm:px-12">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Testimoni sebelumnya"
            className="absolute top-1/2 left-0 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-100 bg-white text-primary shadow-lg transition-colors hover:bg-primary hover:text-white sm:flex sm:h-12 sm:w-12"
          >
            <CaretLeft size={20} weight="bold" aria-hidden="true" />
          </button>

          <div
            ref={sliderRef}
            className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto py-4"
          >
            {TESTIMONIALS.map((item) => (
              <article
                key={item.name}
                className="w-[85vw] shrink-0 snap-center rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <Stars count={item.stars} />
                <p className="mb-6 italic leading-relaxed whitespace-normal text-gray-600">
                  {item.quote}
                </p>
                <div className="flex items-center">
                  <Image
                    src={item.avatar}
                    alt={`Avatar ${item.name}`}
                    width={48}
                    height={48}
                    className="mr-4 h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-secondary">{item.name}</h3>
                    <p className="text-xs text-gray-500">{item.label}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Testimoni berikutnya"
            className="absolute top-1/2 right-0 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-100 bg-white text-primary shadow-lg transition-colors hover:bg-primary hover:text-white sm:flex sm:h-12 sm:w-12"
          >
            <CaretRight size={20} weight="bold" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-400 sm:hidden">
          <HandSwipeLeft size={36} aria-hidden="true" />
          Geser untuk melihat lebih banyak
        </div>
      </div>
    </section>
  );
}