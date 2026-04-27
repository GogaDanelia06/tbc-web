"use client";

import { useLanguage } from "@/context/LanguageContext";

type Transaction = {
  id: number;
  title: string;
  amount: string;
  date: string;
};

export default function TransactionsCard({
  transactions,
}: {
  transactions: Transaction[];
}) {
  const { t } = useLanguage();

  return (
    <section className="overflow-hidden rounded-2xl bg-white text-[#14171f] shadow-sm dark:bg-[#1e293b] dark:text-white">
      
      <h3 className="border-b border-gray-200 p-6 text-lg font-bold dark:border-[#334155]">
        {t.transactions.title}
      </h3>

      {transactions.map((tx) => (
        <div
          key={tx.id}
          className="grid grid-cols-[120px_1fr_100px] border-b border-gray-100 px-6 py-4 last:border-0 dark:border-[#334155]"
        >
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {tx.date}
          </span>

          <span className="text-[#14171f] dark:text-white">
            {tx.title}
          </span>

          <span className="text-right font-semibold text-[#14171f] dark:text-white">
            {tx.amount}
          </span>
        </div>
      ))}
    </section>
  );
}