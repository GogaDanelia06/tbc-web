"use client";

import { useLanguage } from "@/context/LanguageContext";

const rates = [
  ["🇺🇸 USD", "2,6936", "↓ 0,0002"],
  ["🇪🇺 EUR", "3,1464", "↓ 0,0188"],
  ["🇬🇧 GBP", "3,6334", "↓ 0,0086"],
];

export default function CurrencyCard() {
  const { t } = useLanguage();

  return (
    <section className="overflow-hidden rounded-2xl bg-white text-[#14171f] shadow-sm dark:bg-[#1e293b] dark:text-white">
      
      <h3 className="border-b border-gray-200 p-5 text-lg font-bold dark:border-[#334155]">
        {t.currency.title}
      </h3>

      <div className="space-y-4 p-5">
        {rates.map(([currency, value, change]) => (
          <div key={currency} className="flex items-center justify-between">
            
            <span className="font-bold text-[#14171f] dark:text-white">
              {currency}
            </span>

            <span className="font-bold text-[#14171f] dark:text-white">
              {value}
            </span>

            <span className="text-sm text-red-500 dark:text-red-400">
              {change}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}