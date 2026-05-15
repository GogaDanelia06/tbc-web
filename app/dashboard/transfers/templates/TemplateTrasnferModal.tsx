"use client";

import { X, WalletCards, UserRound } from "lucide-react";
import type { Template } from "./types";

type Account = {
  id: number;
  name: string;
  balance: number;
  currency: string;
};

type Props = {
  open: boolean;
  template: Template | null;
  accounts: Account[];
  fromAccountId: string;
  amount: string;
  message: string;
  loading: boolean;
  setFromAccountId: (value: string) => void;
  setAmount: (value: string) => void;
  closeModal: () => void;
  confirmTransfer: () => void;
  langMessage: (en: string, ka: string) => string;
};

export default function TemplateTransferModal({
  open,
  template,
  accounts,
  fromAccountId,
  amount,
  message,
  loading,
  setFromAccountId,
  setAmount,
  closeModal,
  confirmTransfer,
  langMessage,
}: Props) {
  if (!open || !template) return null;

  const selectedAccount = accounts.find(
    (acc) => String(acc.id) === fromAccountId
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-2xl rounded-3xl border border-gray-200 bg-white p-6 shadow-2xl dark:border-[#1f2937] dark:bg-[#0f172a]">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-700 dark:text-white">
            {langMessage("Transfer money", "თანხის გადარიცხვა")}
          </h2>

          <button onClick={closeModal} className="text-gray-400 hover:text-red-500">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="mt-6 rounded-2xl bg-gray-50 p-5 dark:bg-[#020617]">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#eaf7ff] text-[#0ea5e9]">
              <UserRound className="h-7 w-7" />
            </div>

            <div>
              <p className="font-semibold text-gray-700 dark:text-white">
                {template.name}
              </p>
              <p className="text-sm text-gray-400">
                {template.iban} {template.currency}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
              {langMessage("From account", "ანგარიშიდან")}
            </p>

            <select
              value={fromAccountId}
              onChange={(e) => setFromAccountId(e.target.value)}
              className="h-14 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm font-semibold outline-none dark:border-[#334155] dark:bg-[#020617] dark:text-white"
            >
              <option value="">
                {langMessage("Select account", "აირჩიე ანგარიში")}
              </option>

              {accounts.map((acc) => (
                <option key={acc.id} value={acc.id}>
                  {acc.name} — {Number(acc.balance).toFixed(2)} {acc.currency}
                </option>
              ))}
            </select>

            {selectedAccount && (
              <p className="mt-2 text-sm text-gray-400">
                {langMessage("Available:", "ხელმისაწვდომია:")}{" "}
                {Number(selectedAccount.balance).toFixed(2)}{" "}
                {selectedAccount.currency}
              </p>
            )}
          </div>

          <div>
            <p className="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
              {langMessage("Amount", "თანხა")}
            </p>

            <div className="relative">
              <WalletCards className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#1237d5]" />

              <input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                type="number"
                placeholder={langMessage("Enter amount", "შეიყვანე თანხა")}
                className="h-14 w-full rounded-xl border border-gray-200 bg-white pl-12 pr-4 text-sm font-semibold outline-none focus:border-[#1237d5] dark:border-[#334155] dark:bg-[#020617] dark:text-white"
              />
            </div>
          </div>
        </div>

        {message && (
          <p className="mt-5 rounded-xl bg-gray-50 px-4 py-3 text-center text-sm font-semibold text-gray-600 dark:bg-[#020617] dark:text-gray-300">
            {message}
          </p>
        )}

        <button
          type="button"
          onClick={confirmTransfer}
          disabled={loading}
          className="mt-6 h-14 w-full rounded-xl bg-[#1237d5] font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:bg-[#0f2fc0] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading
            ? langMessage("Processing...", "მუშავდება...")
            : langMessage("Confirm transfer", "გადარიცხვის დადასტურება")}
        </button>
      </div>
    </div>
  );
}