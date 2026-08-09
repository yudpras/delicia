import { ArrowRight, Star } from "./icons";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="hero-bg relative flex min-h-[80vh] items-center pb-20 pt-32 lg:pb-32 lg:pt-48"
    >
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 sm:px-6 lg:flex-row lg:px-8 lg:text-left">
        <div className="mb-10 lg:mb-0 lg:w-1/2 lg:pr-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/20 px-4 py-2 text-orange-200 backdrop-blur-sm">
            <Star size={16} weight="fill" aria-hidden="true" />
            <span className="text-sm font-medium">Pilihan No. 1 di Semarang</span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white drop-shadow-md sm:text-5xl lg:text-6xl">
            Catering Murah Semarang untuk Setiap{" "}
            <span className="text-primary">Momen Berharga</span>
          </h1>
          <p className="mb-8 max-w-2xl text-lg font-light text-gray-200 drop-shadow-sm sm:text-xl lg:mx-0">
            Delicia Snack & Catering menghadirkan cita rasa nusantara dan
            internasional dengan bahan segar pilihan — catering murah berkualitas
            untuk acara Anda di Semarang dan sekitarnya.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#pesan"
              className="flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-bold text-white shadow-lg shadow-orange-500/50 transition hover:bg-primary-hover"
            >
              Pesan Sekarang <ArrowRight size={20} weight="bold" aria-hidden="true" />
            </a>
            <a
              href="#kategori-menu"
              className="flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Lihat Menu
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full overflow-hidden leading-none" aria-hidden="true">
        <svg
          className="relative block h-[50px] w-full sm:h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,978.45,63.6,985.66,92.83c72.05,18.48,94.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.21,199.39,109.11Z"
            className="fill-gray-50"
          />
        </svg>
      </div>
    </section>
  );
}