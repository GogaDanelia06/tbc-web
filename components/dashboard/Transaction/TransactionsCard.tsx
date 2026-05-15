"use client";

import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

type Transaction = {
  id: number;
  date: string;
  title: string;
  amount: string;
};

type Props = {
  transactions: Transaction[];
};

export default function TransactionsCard({ transactions }: Props) {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <div className="rounded-2xl border border-gray-200 bg-white dark:border-[#1f2937] dark:bg-[#0f172a]">
      
      <div className="flex items-center justify-between px-6 py-5">
        <h2 className="text-lg font-semibold text-[#14171f] dark:text-white">
          {t.transactions.title}
        </h2>

        <button
          onClick={() => router.push("/dashboard/transactions")}
          className="text-sm font-semibold text-[#1237d5] hover:underline"
        >
          {t.transactions.seeAll}
        </button>
      </div>

      <div className="divide-y divide-gray-100 dark:divide-[#1f2937]">
        {transactions.slice(0, 11).map((tx) => (
          <div
            key={tx.id}
            className="flex items-center justify-between px-6 py-4 text-sm"
          >
            <div className="flex flex-col">
              <span className="font-medium text-[#14171f] dark:text-white">
                {tx.title}
              </span>

              <span className="text-xs text-gray-400">
                {tx.date}
              </span>
            </div>

            <span
              className={`font-semibold ${
                tx.amount.includes("+")
                  ? "text-green-600"
                  : "text-[#14171f] dark:text-white"
              }`}
            >
              {tx.amount}
            </span>
          </div>
        ))}
      </div>

      {transactions.length > 10 && (
        <div className="p-4">
          <button
            type="button"
            onClick={() => router.push("/dashboard/transactions")}
            className="flex w-full items-center justify-center rounded-xl border border-gray-200 py-3 text-sm font-semibold text-[#1237d5] transition hover:bg-blue-50 dark:border-[#334155] dark:hover:bg-[#1e293b]"
          >
            {t.transactions.seeAllTransactions} →
          </button>
        </div>
      )}
    </div>
  );
}