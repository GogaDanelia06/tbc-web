"use client";

import { useLanguage } from "@/context/LanguageContext";

type Account = {
  id: number;
  name: string;
  balance: string;
  currency: string;
};

type AccountLabels = {
  title: string;
  totalAvailable: string;
  cardLabel: string;
};

type AccountCardProps = {
  accounts: Account[];
  labels: AccountLabels;
};

const GEL_RATES: Record<string, number> = {
  GEL: 1,
  USD: 2.7,
  EUR: 3.15,
};

function formatMoney(value: string, currency: string) {
  return `${Number(value).toFixed(2)} ${currency}`;
}

function convertToGel(balance: string, currency: string) {
  const rate = GEL_RATES[currency] ?? 1;
  return Number(balance) * rate;
}

export default function AccountCard({ accounts }: AccountCardProps) {
  const { t } = useLanguage();

  const totalGel = accounts.reduce((sum, account) => {
    return sum + convertToGel(account.balance, account.currency);
  }, 0);

  return (
    <section className="grid grid-cols-1 overflow-hidden rounded-2xl bg-white text-[#14171f] shadow-sm dark:bg-[#1e293b] dark:text-white sm:grid-cols-[260px_1fr]">
      
      <div className="border-b border-gray-200 p-5 dark:border-[#334155] sm:border-b-0 sm:border-r sm:p-6">
        <h3 className="mb-3 text-lg font-bold text-[#14171f] dark:text-white sm:mb-4">
          {t.accounts.title}
        </h3>

        <p className="text-sm text-gray-400 dark:text-gray-400">
          {t.accounts.totalAvailable}
        </p>

        <p className="mt-2 break-words text-xl font-bold text-[#14171f] dark:text-white">
          {totalGel.toFixed(2)} GEL
        </p>
      </div>

      <div>
        {accounts.map((account) => (
          <div
            key={account.id}
            className="flex flex-col gap-2 border-b border-gray-100 px-5 py-4 last:border-0 dark:border-[#334155] sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-3"
          >
            <div className="min-w-0">
              <p className="font-bold text-[#14171f] dark:text-white">
                {t.accounts.cardLabel}
              </p>

              <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                {account.name}
              </p>
            </div>

            <p className="text-left font-bold text-[#14171f] dark:text-white sm:text-right">
              {formatMoney(account.balance, account.currency)}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}