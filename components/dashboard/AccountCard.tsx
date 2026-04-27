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
    <section className="grid grid-cols-[260px_1fr] overflow-hidden rounded-2xl bg-white text-[#14171f] shadow-sm dark:bg-[#1e293b] dark:text-white">
      <div className="border-r border-gray-200 p-6 dark:border-[#334155]">
        <h3 className="mb-4 text-lg font-bold text-[#14171f] dark:text-white">
          {t.dashboard.accounts.title}
        </h3>

        <p className="text-sm text-gray-400 dark:text-gray-400">
          {t.dashboard.accounts.totalAvailable}
        </p>

        <p className="mt-2 text-xl font-bold text-[#14171f] dark:text-white">
          {totalGel.toFixed(2)} GEL
        </p>
      </div>

      <div>
        {accounts.map((account) => (
          <div
            key={account.id}
            className="flex items-center justify-between border-b border-gray-100 px-6 py-3 last:border-0 dark:border-[#334155]"
          >
            <div>
              <p className="font-bold text-[#14171f] dark:text-white">
                {t.dashboard.accounts.cardLabel}
              </p>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                {account.name}
              </p>
            </div>

            <p className="font-bold text-[#14171f] dark:text-white">
              {formatMoney(account.balance, account.currency)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}