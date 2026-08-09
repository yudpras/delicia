import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://deliciasnackcatering.com"),
  title: {
    default:
      "Catering Murah Semarang – Delicia Snack & Catering | Nasi Kotak & Prasmanan",
    template: "%s | Delicia Snack & Catering",
  },
  description:
    "Catering murah Semarang dengan kualitas premium. Nasi kotak mulai Rp 25rb, snack box Rp 15rb, prasmanan pernikahan & kantor. Gratis ongkir area Semarang. Order via WA 0821-2805-3769.",
  keywords: [
    "catering murah semarang",
    "katering murah semarang",
    "catering semarang",
    "nasi kotak semarang",
    "snack box semarang",
    "prasmanan semarang",
    "katering nasi box semarang",
    "catering pedurungan",
    "nasi box murah semarang",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: "Delicia Snack & Catering",
    title: "Catering Murah Semarang – Delicia Snack & Catering",
    description:
      "Catering murah Semarang: nasi kotak, snack box, prasmanan untuk kantor, acara keluarga & pernikahan. Gratis ongkir area Semarang.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Catering Murah Semarang – Delicia Snack & Catering",
    description:
      "Catering murah Semarang: nasi kotak, snack box, prasmanan. Gratis ongkir area Semarang.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${inter.variable} antialiased`}>
      <body className="flex min-h-full flex-col bg-gray-50 font-sans text-gray-800">
        {children}
      </body>
    </html>
  );
}