import type { Icon } from "@phosphor-icons/react";
import { Certificate, Headset, Medal, Truck } from "./icons";

type Feature = {
  icon: Icon;
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    icon: Certificate,
    title: "Legalitas Jelas",
    description:
      "Berbadan hukum resmi dan tersertifikasi Halal serta higienis dari dinas kesehatan.",
  },
  {
    icon: Truck,
    title: "Free Ongkir Semarang",
    description:
      "Gratis biaya pengiriman untuk area dalam kota Semarang dengan syarat dan ketentuan yang mudah.",
  },
  {
    icon: Medal,
    title: "Berpengalaman",
    description:
      "Lebih dari 10 tahun melayani ribuan porsi untuk berbagai acara besar maupun kecil di Semarang.",
  },
  {
    icon: Headset,
    title: "Respon Cepat",
    description:
      "Tim customer service kami siap melayani dan merespon pertanyaan Anda 24/7 dengan ramah.",
  },
];

export default function Features() {
  return (
    <section id="keunggulan" className="bg-gray-50 py-20" aria-labelledby="keunggulan-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 id="keunggulan-title" className="mb-4 text-3xl font-bold text-secondary sm:text-4xl">
            Mengapa Memilih Delicia Snack &amp; Catering?
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-primary" aria-hidden="true" />
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Kami berkomitmen memberikan pelayanan terbaik untuk kelancaran acara Anda
            dengan berbagai keunggulan — catering murah tanpa mengorbankan kualitas.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              <div
                className="absolute -z-10 right-0 top-0 h-20 w-20 rounded-bl-full bg-primary/10 transition-transform duration-300 group-hover:scale-150"
                aria-hidden="true"
              />
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-3xl text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                <Icon size={28} weight="fill" aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-secondary">{title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}