"use client";

import { useLanguage } from "@/context/LanguageContext";

type Pension = {
  amount: string;
  currency: string;
};

type Props = {
  pension: Pension;
};

export default function PensionSavingsCard({ pension }: Props) {
  const { t } = useLanguage();

  return (
    <section className="overflow-hidden rounded-2xl bg-white text-[#14171f] shadow-sm dark:bg-[#1e293b] dark:text-white">
      <h3 className="border-b border-gray-200 p-5 text-lg font-bold dark:border-[#334155]">
        {t.pension.title}
      </h3>

      <div className="p-5">
        <div className="mb-5 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#eef2ff] text-3xl dark:bg-[#334155]">
            💳
          </div>

          <p className="text-2xl font-bold text-gray-400">
            {Number(pension.amount).toFixed(2)} {pension.currency}
          </p>
        </div>

        <button className="ml-auto block font-semibold text-blue-700 dark:text-blue-400">
          {t.pension.showMore} →
        </button>
      </div>
    </section>
  );
}