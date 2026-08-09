import { CalendarCheck, PhoneCall, WhatsappLogo } from "./icons";

export const WA_NUMBER = "6282128053769";
export const PHONE_DISPLAY = "0821-2805-3769";

export default function CtaSection() {
  return (
    <section id="pesan" className="relative overflow-hidden py-24" aria-labelledby="cta-title">
      <div className="absolute inset-0 z-0 bg-secondary" aria-hidden="true" />
      <div
        className="absolute -mr-20 -mt-20 right-0 top-0 z-0 h-64 w-64 rounded-full bg-primary/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -mb-20 -ml-20 bottom-0 left-0 z-0 h-80 w-80 rounded-full bg-orange-600/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/10 ring-4 ring-white/5">
          <CalendarCheck size={28} weight="fill" className="text-primary" aria-hidden="true" />
        </div>
        <h2
          id="cta-title"
          className="mb-6 text-3xl font-extrabold text-white sm:text-5xl"
        >
          Siap Menyukseskan Acara Anda
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg font-light text-gray-300">
          Jangan biarkan urusan konsumsi membuat Anda pusing. Serahkan pada ahlinya —
          konsultasikan catering murah Anda hari ini dan dapatkan penawaran spesial.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
              "Halo Delicia Snack & Catering, saya ingin memesan catering untuk acara saya."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-green-500 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-green-500/30 transition hover:bg-green-600 sm:w-auto"
          >
            <WhatsappLogo size={24} weight="fill" aria-hidden="true" />
            Pesan via WhatsApp
          </a>
          <span className="hidden text-sm text-gray-400 sm:block">atau</span>
          <a
            href={`tel:${WA_NUMBER}`}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-secondary shadow-lg transition hover:bg-gray-100 sm:w-auto"
          >
            <PhoneCall size={22} weight="fill" aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>
        </div>

        <p className="mt-8 text-sm text-gray-400">
          Pesanan disarankan minimal H-3 sebelum acara.
        </p>
      </div>
    </section>
  );
}