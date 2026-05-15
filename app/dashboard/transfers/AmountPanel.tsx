"use client";

import { WalletCards } from "lucide-react";
import type { Account, TransferType } from "./types";

type Props = {
  type: TransferType;
  amount: string;
  setAmount: (value: string) => void;
  convertedPreview: string | null;
  fromAccount?: Account;
  toAccount?: Account;
  message: string;
  handleTransfer: () => void;
  sendLabel: string;
  langMessage: (en: string, ka: string) => string;
};

export default function AmountPanel({
  type,
  amount,
  setAmount,
  convertedPreview,
  fromAccount,
  toAccount,
  message,
  handleTransfer,
  sendLabel,
  langMessage,
}: Props) {
  return (
    <aside className="min-h-80 p-8">
      <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
        {langMessage("Amount", "თანხა")}
      </p>

      <div className="mt-10 flex justify-center">
        <div className="flex h-20 w-28 items-center justify-center rounded-2xl bg-[#eef0ff] shadow-inner dark:bg-[#1e293b]">
          <WalletCards className="h-10 w-10 text-[#1237d5]" />
        </div>
      </div>

      <input
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder={langMessage("Enter amount", "შეიყვანე თანხა")}
        type="number"
        className="mt-12 h-16 w-full rounded-xl border border-gray-200 bg-white px-5 text-base outline-none transition placeholder:text-gray-400 focus:border-[#1237d5] focus:shadow-[0_0_0_4px_rgba(18,55,213,0.08)] dark:border-[#334155] dark:bg-[#020617] dark:text-white"
      />

      {convertedPreview && fromAccount && toAccount && type === "own" && (
        <div className="mt-3 rounded-xl bg-blue-50 px-4 py-3 text-sm font-semibold text-[#1237d5] dark:bg-blue-950/30">
          {fromAccount.currency === toAccount.currency
            ? langMessage("Receiver gets:", "მიმღები მიიღებს:")
            : langMessage("Converted amount:", "კონვერტირებული თანხა:")}{" "}
          {convertedPreview}
        </div>
      )}

      <button
        type="button"
        onClick={handleTransfer}
        className="mt-5 h-14 w-full rounded-xl bg-[#1237d5] font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:bg-[#0f2fc0]"
      >
        {sendLabel}
      </button>

      {message && (
        <p className="mt-4 text-center text-sm font-semibold text-gray-500 dark:text-gray-300">
          {message}
        </p>
      )}
    </aside>
  );
}