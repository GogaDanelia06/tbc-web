"use client";

import { useMemo, useState } from "react";
import type { Transaction } from "@/lib/transactions";
import { useLanguage } from "@/context/LanguageContext";
import TransactionsTabs from "./TransactionTabs";
import TransactionsSearch from "./TransactionsSearch";
import TransactionsTableHeader from "./TransactionsTableHeader";
import TransactionRow from "./TransactionRow";

type Props = {
  transactions: Transaction[];
};

export default function TransactionsClient({ transactions }: Props) {
  const { t } = useLanguage();
  const [search, setSearch] = useState("");

  const filteredTransactions = useMemo(() => {
    const q = search.toLowerCase();

    return transactions.filter((tx) => {
      return (
        tx.category.toLowerCase().includes(q) ||
        tx.details.toLowerCase().includes(q) ||
        tx.account.toLowerCase().includes(q) ||
        tx.amount.toLowerCase().includes(q)
      );
    });
  }, [search, transactions]);

  return (
    <main className="bg-[#f4f6f8] px-6 py-8 dark:bg-[#020617]">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-3xl font-semibold text-[#14171f] dark:text-white">
          {t.transactionsPage.title}
        </h1>

        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-[#1f2937] dark:bg-[#0f172a]">
          <TransactionsTabs t={t} />

          <TransactionsSearch
            search={search}
            setSearch={setSearch}
            placeholder={t.transactionsPage.search}
          />

          <TransactionsTableHeader t={t} />

          <div className="max-h-[560px] overflow-y-auto overscroll-contain">
            {filteredTransactions.map((tx) => (
              <TransactionRow key={tx.id} tx={tx} />
            ))}

            {filteredTransactions.length === 0 && (
              <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                {t.transactionsPage.empty}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}