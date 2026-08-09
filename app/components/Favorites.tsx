import Image from "next/image";
import { Fire, Star } from "./icons";

type Favorite = {
  name: string;
  price: string;
  description: string;
  rating: string;
  badge?: string;
  badgeHighlighted?: boolean;
  image: string;
  imageAlt: string;
  action: string;
};

const FAVORITES: Favorite[] = [
  {
    name: "Nasi Tumpeng Mini",
    price: "Rp 35.000",
    description:
      "Sajian tradisional dengan nasi kuning wangi, ayam goreng lengkuas, sambal goreng ati, telur iris, dan perkedel kentang.",
    rating: "4.9 (500+ ulasan)",
    badge: "Best Seller",
    action: "order",
    image:
      "https://images.unsplash.com/photo-1707999251954-2a4abc6e1f35?q=80&w=980&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Nasi tumpeng mini untuk syukuran keluarga",
  },
  {
    name: "Nasi Kotak Nusantara",
    price: "Rp 45.000",
    description:
      "Pilihan elegan untuk rapat. Nasi putih pulen, rendang daging empuk, sayur daun singkong, gulai nangka, dan sambal ijo.",
    rating: "4.8 (320+ ulasan)",
    action: "order",
    image:
      "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Nasi kotak nusantara untuk rapat dan acara kantor",
  },
  {
    name: "Prasmanan Platinum",
    price: "Mulai Rp 85rb/pax",
    description:
      "Paket lengkap hidangan utama, 3 jenis lauk (sapi, ayam, ikan), sup, salad, puding, buah potong, dan aneka minuman segar.",
    rating: "5.0 (150+ event)",
    badge: "Wedding Pilihan",
    badgeHighlighted: true,
    action: "detail",
    image:
      "https://images.unsplash.com/photo-1722477936580-84aa10762b0b?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Prasmanan mewah untuk resepsi pernikahan",
  },
];

export default function Favorites() {
  return (
    <section id="favorit" className="bg-white py-20" aria-labelledby="favorit-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-primary">
            Paling Laris
          </span>
          <h2 id="jangkauan-title" className="mb-4 text-3xl font-bold text-secondary sm:text-4xl">
            Menu Terfavorit Kami
          </h2>
          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-primary" aria-hidden="true" />
<p className="mx-auto max-w-2xl text-gray-600">
            Pilihan menu signature yang paling sering dipesan pelanggan setia kami di
            Semarang untuk berbagai acara spesial.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {FAVORITES.map((item) => (
            <article
              key={item.name}
              className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {item.badge && (
                  <span
                    className={`absolute right-4 top-4 flex items-center rounded-full px-3 py-1 text-xs font-bold backdrop-blur-sm shadow-sm ${
                      item.badgeHighlighted
                        ? "bg-primary text-white"
                        : "bg-white/90 text-primary"
                    }`}
                  >
                    <Fire size={12} weight="fill" className="mr-1" aria-hidden="true" />
                    {item.badge}
                  </span>
                )}
              </div>

              <div className="p-6">
                <div className="mb-2 flex items-start justify-between">
                  <h3 className="text-xl font-bold text-secondary">{item.name}</h3>
                  <span className="font-bold text-primary">{item.price}</span>
                </div>
                <p className="mb-4 text-sm text-gray-500 line-clamp-2">{item.description}</p>
                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Star
                      size={14}
                      weight="fill"
                      className="mr-1 text-yellow-400"
                      aria-hidden="true"
                    />
                    {item.rating}
                  </div>
                  <button
                    type="button"
                    className="rounded-full border border-primary px-4 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white"
                  >
                    {item.action === "order" ? "Order" : "Detail"}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}