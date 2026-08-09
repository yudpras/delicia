import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Favorites from "./components/Favorites";
import MenuCategories from "./components/MenuCategories";
import Coverage from "./components/Coverage";
import Faq from "./components/Faq";
import CtaSection from "./components/CtaSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FoodEstablishment",
      name: "Delicia Snack & Catering",
      image:
        "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      "@id": "https://deliciasnackcatering.com/#business",
      url: "https://deliciasnackcatering.com/",
      telephone: "+6282128053769",
      priceRange: "Rp 15.000 - Rp 85.000+",
      currenciesAccepted: "IDR",
      paymentAccepted: "Cash, Transfer Bank, E-Wallet",
      servesCuisine: ["Indonesia", "Nusantara", "International"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Jl. KH. Abdurrohman, Muktiharjo Kidul",
        addressLocality: "Semarang",
        addressRegion: "Jawa Tengah",
        postalCode: "50197",
        addressCountry: "ID",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -7.00056,
        longitude: 110.47722,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "08:00",
          closes: "20:00",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "970",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Paket Catering Semarang",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Nasi Kotak",
              description: "Nasi kotak nusantara mulai Rp 25.000",
              priceCurrency: "IDR",
              price: "25000",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Snack Box",
              description: "Aneka kue tradisional dan modern mulai Rp 15.000",
              priceCurrency: "IDR",
              price: "15000",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Prasmanan",
              description: "Prasmanan pernikahan dan kantor mulai Rp 85.000 per pax",
              priceCurrency: "IDR",
              price: "85000",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Berapa harga katering murah di Semarang?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Paket mulai Rp 15.000 untuk snack box, Rp 25.000 untuk nasi kotak, dan Rp 85.000 per orang untuk prasmanan. Harga menyesuaikan menu dan jumlah porsi.",
          },
        },
        {
          "@type": "Question",
          name: "Apakah melayani pemesanan di luar Kecamatan Pedurungan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ya, kami melayani seluruh wilayah Semarang termasuk Tembalang, Banyumanik, Genuk, Gayamsari, Ngaliyan, Semarang Tengah, Timur, Barat, Utara, dan Selatan dengan gratis ongkir area dalam kota.",
          },
        },
        {
          "@type": "Question",
          name: "Bagaimana cara memesan catering murah di Semarang?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pesan via WhatsApp 0821-2805-3769 atau klik tombol Pesan Sekarang. Tim kami merespon cepat untuk konsultasi menu, porsi, dan pengiriman.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Beranda",
          item: "https://deliciasnackcatering.com/",
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Favorites />
        <MenuCategories />
        <Coverage />
        <Faq />
        <CtaSection />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}