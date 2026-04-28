"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function PromoCard() {
  const { t } = useLanguage();

  return (
    <section className="overflow-hidden rounded-2xl bg-white shadow-sm dark:bg-[#1e293b]">
      <div className="grid grid-cols-1 sm:grid-cols-[280px_1fr]">
        <div className="h-32 bg-[url('/dashboard-promo.jpg')] bg-cover bg-center sm:h-28" />

        <div className="flex flex-col justify-center px-8 py-5 sm:py-0">
          <h2 className="mb-2 text-xl font-bold text-[#14171f] dark:text-white">
            {t.promo.title}
          </h2>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            {t.promo.desc}
          </p>
        </div>
      </div>
    </section>
  );
}