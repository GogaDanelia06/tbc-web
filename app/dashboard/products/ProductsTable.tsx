import type { Account } from "./types";
import { formatMoney, getTotalGel } from "./utils";

type Props = {
  accounts: Account[];
  t: any;
};

export default function ProductsTable({ accounts, t }: Props) {
  const totalGel = getTotalGel(accounts);

  return (
    <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-[#334155] dark:bg-[#1e293b]">
      <div className="flex items-center justify-between border-b border-gray-200 px-8 py-5 dark:border-[#334155]">
        <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-300">
          {t.products.debitCards}
        </h2>

        <p className="text-lg font-semibold text-gray-600 dark:text-gray-300">
          {t.products.totalFunds}:{" "}
          <span className="text-[#14171f] dark:text-white">
            {totalGel.toFixed(2)}
          </span>{" "}
          GEL
        </p>
      </div>

      <div className="hidden grid-cols-[1.2fr_1fr_1fr_1fr] border-b border-gray-200 px-8 py-3 text-sm font-semibold text-gray-500 dark:border-[#334155] md:grid">
        <span />
        <span>{t.products.accountNumber}</span>
        <span>{t.products.balance}</span>
        <span className="text-right">{t.products.available}</span>
      </div>

      {accounts.map((account) => (
        <div
          key={account.id}
          className="grid gap-4 border-b border-gray-100 px-8 py-6 last:border-0 dark:border-[#334155] md:grid-cols-[1.2fr_1fr_1fr_1fr] md:items-center"
        >
          <div className="flex items-center gap-6">
            <div className="flex h-14 w-20 items-center justify-center rounded-md bg-[#eef2ff] text-2xl">
              💳
            </div>

            <p className="font-semibold text-gray-500 dark:text-gray-300">
              {account.name}
            </p>
          </div>

          <p className="font-semibold text-gray-600 dark:text-gray-300">
            GE{account.id}TB0000000000000
          </p>

          <p className="font-semibold text-[#14171f] dark:text-white">
            {formatMoney(account.balance, account.currency)}
          </p>

          <p className="text-right text-lg font-semibold text-gray-600 dark:text-gray-300">
            {formatMoney(account.balance, account.currency)}
          </p>
        </div>
      ))}
    </section>
  );
}