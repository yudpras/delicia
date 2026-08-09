import { MapPin, Truck } from "./icons";

const AREAS = [
  "Pedurungan",
  "Tembalang",
  "Banyumanik",
  "Genuk",
  "Gayamsari",
  "Ngaliyan",
  "Semarang Tengah",
  "Semarang Timur",
  "Semarang Barat",
  "Semarang Utara",
  "Semarang Selatan",
  "Tlogosari",
  "Palebon",
  "Muktiharjo",
  "Gunungpati",
  "Mijen",
];

export default function Coverage() {
  return (
    <section
      id="jangkauan"
      className="border-y border-gray-100 bg-white py-20"
      aria-labelledby="jangkauan-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-primary">
            Area Layanan
          </span>
          <h2 id="jangkauan-title" className="mb-4 text-3xl font-bold text-secondary sm:text-4xl">
            Jangkauan Layanan Catering Kami di Semarang
          </h2>
          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-primary" aria-hidden="true" />
<p className="mx-auto max-w-2xl text-gray-600">
            Berbasis di Muktiharjo Kidul, Kecamatan Pedurungan, kami melayani pesanan
            catering murah di seluruh wilayah Semarang — pengiriman tepat waktu dan
            gratis ongkir untuk area terdekat.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-3" aria-label="Wilayah yang dilayani">
          {AREAS.map((area) => (
            <span
              key={area}
              className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-4 py-2 text-sm font-medium text-gray-700 ring-1 ring-orange-100 transition hover:bg-orange-100"
            >
              <MapPin size={14} weight="fill" className="text-primary" aria-hidden="true" />
              {area}
            </span>
          ))}
        </div>

        <div className="mx-auto max-w-2xl rounded-2xl border border-orange-200 bg-orange-50/50 p-6 text-center sm:p-8">
          <Truck size={32} weight="fill" className="mx-auto mb-3 text-primary" aria-hidden="true" />
          <h3 className="mb-2 text-xl font-bold text-secondary">
            Gratis Ongkir Area Dalam Kota Semarang
          </h3>
          <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
            Tidak menemukan wilayah Anda? Hubungi kami — untuk area di luar kota Semarang
            kami tetap bisa melayani dengan biaya pengiriman terjangkau yang disesuaikan
            dengan jarak.
          </p>
          <a
            href="#pesan"
            className="mt-5 inline-block rounded-full bg-primary px-6 py-2.5 font-semibold text-white shadow-md shadow-orange-200 transition hover:bg-primary-hover"
          >
            Cek Ketersediaan Wilayah Anda
          </a>
        </div>
      </div>
    </section>
  );
}