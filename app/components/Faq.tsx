import { CaretDown } from "./icons";

const FAQS = [
  {
    question: "Berapa harga catering murah di Semarang?",
    answer:
      "Kami menyediakan paket mulai Rp 15rb untuk snack box, Rp 25rb untuk nasi kotak, dan Rp 85rb per orang untuk prasmanan. Harga menyesuaikan menu dan jumlah porsi — konsultasikan kebutuhan acara Anda agar mendapat penawaran terbaik.",
  },
  {
    question: "Apakah bisa memesan catering katering murah untuk acara di luar Pedurungan?",
    answer:
      "Tentu bisa. Kami melayani seluruh wilayah Semarang: Tembalang, Banyumanik, Genuk, Gayamsari, Ngaliyan, Semarang Tengah, Timur, Barat, Utara, dan Selatan. Gratis ongkir untuk area dalam kota Semarang dengan ketentuan tertentu.",
  },
  {
    question: "Berapa minimal pemesanan dan batas waktu pesan?",
    answer:
      "Pemesanan disarankan minimal H-3 sebelum acara agar stok dan persiapan bahan terjaga. Hubungi kami via WhatsApp 0821-2805-3769 untuk informasi pemesanan mendadak.",
  },
  {
    question: "Menu apa saja yang tersedia di Delicia Snack & Catering?",
    answer:
      "Menu kami meliputi nasi kotak nusantara, tumpeng mini, prasmanan, snack box, dan hantaran. Semua hidangan bisa dikustomisasi — ala carte maupun menu harian untuk kantor atau pabrik di Semarang.",
  },
  {
    question: "Apakah rasa dan kualitasnya halal?",
    answer:
      "Ya, seluruh bahan dan proses produksi kami halal serta standar higienis dari dinas kesehatan. Bahan segar dipilih setiap hari untuk menjaga kualitas catering Anda.",
  },
  {
    question: "Bagaimana cara memesan catering murah Semarang?",
    answer:
      "Pesan via WhatsApp 0821-2805-3769 atau klik tombol 'Pesan Sekarang'. Tim kami akan merespon cepat untuk konsultasi menu, perhitungan porsi, dan konfirmasi pengiriman.",
  },
  {
    question: "Apakah bisa pakai menu khusus untuk pernikahan atau kantor?",
    answer:
      "Bisa. Kami berpengalaman melayani pernikahan, acara kantor, seminar, khitanan, dan syukuran. Menu prasmanan dan box bisa disusun sesuai budget Anda.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-gray-50 py-20" aria-labelledby="faq-title">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-primary">
            Pertanyaan Umum
          </span>
          <h2 id="faq-title" className="mb-4 text-3xl font-bold text-secondary sm:text-4xl">
            FAQ Catering Murah Semarang
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-primary" aria-hidden="true" />
          <p className="mt-4 text-gray-600">
            Temukan jawaban tentang harga, jangkauan, dan pemesanan katering kami.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 text-left font-semibold text-secondary transition hover:text-primary [&::-webkit-details-marker]:hidden">
                {faq.question}
                <CaretDown
                  size={18}
                  weight="bold"
                  className="flex-shrink-0 text-primary transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed text-gray-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}