export type MenuCategory = "Nasi Kotak" | "Prasmanan" | "Snack Box" | "Tumpeng";

export type MenuItem = {
  name: string;
  category: MenuCategory;
  price: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const MENU_CATEGORIES: MenuCategory[] = [
  "Nasi Kotak",
  "Prasmanan",
  "Snack Box",
  "Tumpeng",
];

export const MENU_ITEMS: MenuItem[] = [
  {
    name: "Nasi Kotak Sederhana",
    category: "Nasi Kotak",
    price: "Mulai Rp 25k",
    description:
      "Nasi putih, ayam goreng, sayur capcay, telur balado, dan sambal. Praktis untuk rapat dan syukuran.",
    image:
      "https://images.unsplash.com/photo-1744957280662-af6472128abd?q=80&w=790&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Nasi kotak sederhana untuk rapat kantor",
  },
  {
    name: "Nasi Kotak Ayam Bakar",
    category: "Nasi Kotak",
    price: "Mulai Rp 38k",
    description:
      "Nasi putih, ayam bakar madu, sambal terasi, lalapan segar, dan kerupuk bawang.",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80&v=2",
    imageAlt: "Nasi kotak ayam bakar dengan lalapan",
  },
  {
    name: "Nasi Kotak Nusantara",
    category: "Nasi Kotak",
    price: "Mulai Rp 45k",
    description:
      "Nasi putih pulen, rendang daging, sayur daun singkong, gulai nangka, dan sambal ijo khas Padang.",
    image:
      "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80&v=2",
    imageAlt: "Nasi kotak nusantara dengan rendang",
  },
  {
    name: "Prasmanan Silver",
    category: "Prasmanan",
    price: "Mulai Rp 85rb/pax",
    description:
      "Hidangan utama, 2 jenis lauk, sup, sayur, aneka kue basah, buah potong, dan minuman segar.",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80&v=2",
    imageAlt: "Prasmanan silver untuk acara kantor",
  },
  {
    name: "Prasmanan Gold",
    category: "Prasmanan",
    price: "Mulai Rp 110rb/pax",
    description:
      "3 jenis lauk (sapi, ayam, ikan), sup, salad, puding, buah potong, dan aneka minuman segar.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80&v=2",
    imageAlt: "Prasmanan gold untuk resepsi pernikahan",
  },
  {
    name: "Prasmanan Platinum",
    category: "Prasmanan",
    price: "Mulai Rp 125rb/pax",
    description:
      "Paket lengkap hidangan utama, 4 jenis lauk pilihan, sup istimewa, salad, dessert, dan minuman.",
    image:
      "https://images.unsplash.com/photo-1722477936580-84aa10762b0b?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Prasmanan platinum hidangan premium",
  },
  {
    name: "Snack Box Plus",
    category: "Snack Box",
    price: "Mulai Rp 15k",
    description:
      "2 kue basah, 1 kue kering, dan 1 buah. Cocok untuk coffee break rapat dan seminar.",
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80&v=2",
    imageAlt: "Snack box berisi aneka kue",
  },
  {
    name: "Snack Box Tradisional",
    category: "Snack Box",
    price: "Mulai Rp 18k",
    description:
      "Kue tradisional: lupin, klepon, onde-onde, lemper, dan getuk dalam kemasan cantik.",
    image:
      "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80&v=2",
    imageAlt: "Snack box berisi kue tradisional",
  },
  {
    name: "Snack Box Premium",
    category: "Snack Box",
    price: "Mulai Rp 25k",
    description:
      "Pastry, brownie, roti, buah potong, dan teh/kopi dalam kemasan elegan untuk acara formal.",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80&v=2",
    imageAlt: "Snack box premium untuk acara formal",
  },
  {
    name: "Nasi Tumpeng Mini",
    category: "Tumpeng",
    price: "Mulai Rp 35k",
    description:
      "Nasi kuning wangi, ayam goreng lengkuas, sambal goreng ati, telur iris, dan perkedel kentang.",
    image:
      "https://images.unsplash.com/photo-1707999251954-2a4abc6e1f35?q=80&w=980&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Nasi tumpeng mini untuk syukuran",
  },
  {
    name: "Tumpeng Nasi 10 Porsi",
    category: "Tumpeng",
    price: "Rp 120k",
    description:
      "Nasi tumpeng lengkap, ayam goreng, sambal goreng ati, telur, tempe bacem, dan urapan segar.",
    image:
      "https://images.unsplash.com/photo-1707999251954-2a4abc6e1f35?q=80&w=980&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Tumpeng nasi sepuluh porsi untuk khitanan",
  },
  {
    name: "Tumpeng & Hantaran",
    category: "Tumpeng",
    price: "Mulai Rp 150k",
    description:
      "Set lengkap tumpeng besar dengan hiasan cantik, lauk pauk pilihan, dan buah-buahan segar.",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80&v=2",
    imageAlt: "Tumpeng dan hantaran untuk syukuran",
  },
];