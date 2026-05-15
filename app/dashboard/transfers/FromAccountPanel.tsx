"use client";

import type { Account } from "./types";
import { maskAccountNumber } from "./transferUtils";

type Props = {
  accounts: Account[];
  fromAccount?: Account;
  fromAccountId: string;
  setFromAccountId: (value: string) => void;
  langMessage: (en: string, ka: string) => string;
};

export default function FromAccountPanel({
  accounts,
  fromAccount,
  fromAccountId,
  setFromAccountId,
  langMessage,
}: Props) {
  return (
    <aside className="min-h-72 p-8">
      <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
        {langMessage("From account", "ანგარიშიდან")}
      </p>

      <div className="mt-10 flex flex-col items-center text-center">
        <div className="flex h-20 w-32 items-center justify-center rounded-xl bg-gradient-to-br from-from-slate-900 to-blue-800 shadow-lg">
          <span className="text-xs font-semibold tracking-widest text-white">
            concept
          </span>
        </div>

        <p className="mt-6 text-base font-semibold text-[#14171f] dark:text-white">
          {fromAccount?.name || langMessage("Select card", "აირჩიე ბარათი")}
        </p>

        <p className="mt-1 text-sm text-gray-400">
          {maskAccountNumber(fromAccount?.id)}
        </p>

        <p className="mt-2 text-xl font-semibold text-gray-700 dark:text-gray-300">
          {fromAccount
            ? `${Number(fromAccount.balance).toFixed(2)} ${fromAccount.currency}`
            : "0.00 GEL"}
        </p>

        <select
          value={fromAccountId}
          onChange={(e) => setFromAccountId(e.target.value)}
          className="mt-4 cursor-pointer rounded-lg bg-transparent px-3 py-2 text-sm font-semibold text-[#1237d5] outline-none"
        >
          <option value="">{langMessage("Change", "შეცვლა")}</option>

          {accounts.map((acc) => (
            <option key={acc.id} value={acc.id}>
              {acc.name} — {Number(acc.balance).toFixed(2)} {acc.currency}
            </option>
          ))}
        </select>
      </div>
    </aside>
  );
}