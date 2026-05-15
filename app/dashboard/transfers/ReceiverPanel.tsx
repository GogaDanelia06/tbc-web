"use client";

import {
  ArrowRightLeft,
  CreditCard,
  Landmark,
  Smartphone,
  UserRound,
} from "lucide-react";
import type { Account, TransferType } from "./types";

type Props = {
  type: TransferType;
  accounts: Account[];
  fromAccount?: Account;
  toAccount?: Account;
  fromAccountId: string;
  toAccountId: string;
  setToAccountId: (value: string) => void;
  recipientUsername: string;
  setRecipientUsername: (value: string) => void;
  mobileNumber: string;
  setMobileNumber: (value: string) => void;
  treasuryCode: string;
  setTreasuryCode: (value: string) => void;
  langMessage: (en: string, ka: string) => string;
};

export default function ReceiverPanel({
  type,
  accounts,
  fromAccount,
  toAccount,
  fromAccountId,
  toAccountId,
  setToAccountId,
  recipientUsername,
  setRecipientUsername,
  mobileNumber,
  setMobileNumber,
  treasuryCode,
  setTreasuryCode,
  langMessage,
}: Props) {
  return (
    <section className="relative flex min-h-72 flex-col items-center justify-center overflow-hidden bg-[#1f35d5] px-20 text-white">
      <div className="absolute -left-16 top-8 h-44 w-44 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -right-20 bottom-8 h-56 w-56 rounded-full bg-white/10 blur-2xl" />

      <p className="relative mb-8 text-lg font-semibold">
        {type === "own" &&
          langMessage(
            "Which account do you want to transfer to?",
            "რომელ ანგარიშზე გსურს გადარიცხვა?"
          )}

        {type === "someone" &&
          langMessage("Who do you want to transfer to?", "ვისთან გსურს გადარიცხვა?")}

        {type === "mobile" &&
          langMessage("Transfer with mobile number", "მობილურის ნომრით გადარიცხვა")}

        {type === "treasury" &&
          langMessage("Treasury transfer", "სახაზინო გადარიცხვა")}
      </p>

      <div className="relative mb-8 flex h-20 w-28 items-center justify-center rounded-2xl bg-white/15 shadow-inner">
        {type === "own" && <CreditCard className="h-11 w-11 text-white" />}
        {type === "someone" && <UserRound className="h-11 w-11 text-white" />}
        {type === "mobile" && <Smartphone className="h-11 w-11 text-white" />}
        {type === "treasury" && <Landmark className="h-11 w-11 text-white" />}
      </div>

      {type === "own" && (
        <select
          value={toAccountId}
          onChange={(e) => setToAccountId(e.target.value)}
          className="relative h-16 w-full max-w-[470px] rounded-xl border border-white/20 bg-white px-6 text-center text-base font-semibold text-gray-500 outline-none shadow-lg"
        >
          <option value="">{langMessage("Choose account", "აირჩიე ანგარიში")}</option>

          {accounts
            .filter((acc) => String(acc.id) !== fromAccountId)
            .map((acc) => (
              <option key={acc.id} value={acc.id}>
                {acc.name} — {Number(acc.balance).toFixed(2)} {acc.currency}
              </option>
            ))}
        </select>
      )}

      {type === "someone" && (
        <input
          value={recipientUsername}
          onChange={(e) => setRecipientUsername(e.target.value)}
          placeholder={langMessage("Recipient username", "მიმღების მომხმარებელი")}
          className="relative h-16 w-full max-w-[470px] rounded-xl border border-white/20 bg-white px-6 text-center text-base font-semibold text-gray-500 outline-none shadow-lg"
        />
      )}

      {type === "mobile" && (
        <input
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          placeholder={langMessage("Mobile number", "მობილურის ნომერი")}
          className="relative h-16 w-full max-w-[470px] rounded-xl border border-white/20 bg-white px-6 text-center text-base font-semibold text-gray-500 outline-none shadow-lg"
        />
      )}

      {type === "treasury" && (
        <input
          value={treasuryCode}
          onChange={(e) => setTreasuryCode(e.target.value)}
          placeholder={langMessage("Treasury code", "სახაზინო კოდი")}
          className="relative h-16 w-full max-w-[470px] rounded-xl border border-white/20 bg-white px-6 text-center text-base font-semibold text-gray-500 outline-none shadow-lg"
        />
      )}

      {fromAccount && toAccount && type === "own" && (
        <div className="relative mt-5 flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/90">
          <ArrowRightLeft className="h-4 w-4" />
          <span>
            {fromAccount.currency} → {toAccount.currency}
          </span>
        </div>
      )}
    </section>
  );
}