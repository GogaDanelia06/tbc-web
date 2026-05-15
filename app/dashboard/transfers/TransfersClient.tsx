"use client";

import { useLanguage } from "@/context/LanguageContext";
import TransferTabs from "./TransferTabs";
import FromAccountPanel from "./FromAccountPanel";
import ReceiverPanel from "./ReceiverPanel";
import AmountPanel from "./AmountPanel";
import { useTransferForm } from "./useTransferForm";
import { useTransferPreview } from "./useTransferPreview";

export default function TransfersClient({ userId }: { userId: number }) {
  const { t } = useLanguage();

  function langMessage(en: string, ka: string) {
    return t.nav.home === "Home" ? en : ka;
  }

  const transferForm = useTransferForm(userId, langMessage);

  const { fromAccount, toAccount, convertedPreview } = useTransferPreview(
    transferForm.accounts,
    transferForm.fromAccountId,
    transferForm.toAccountId,
    transferForm.amount
  );

  const tabs = [
    { key: "own", label: t.transferMenu.betweenOwn },
    { key: "someone", label: t.transferMenu.someoneElse },
    { key: "mobile", label: t.transferMenu.mobile },
    { key: "treasury", label: t.transferMenu.treasury },
  ] as const;

  return (
    <main className="min-h-screen bg-[#f3f5f7] dark:bg-[#020617]">
      <TransferTabs
        type={transferForm.type}
        setType={transferForm.setType}
        resetMessage={transferForm.resetMessage}
        tabs={tabs}
      />

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08)] dark:border-[#1f2937] dark:bg-[#0f172a] lg:grid-cols-[310px_1fr_310px]">
          
          <FromAccountPanel
            accounts={transferForm.accounts}
            fromAccount={fromAccount}
            fromAccountId={transferForm.fromAccountId}
            setFromAccountId={transferForm.setFromAccountId}
            langMessage={langMessage}
          />

          <ReceiverPanel
            type={transferForm.type}
            accounts={transferForm.accounts}
            fromAccount={fromAccount}
            toAccount={toAccount}
            fromAccountId={transferForm.fromAccountId}
            toAccountId={transferForm.toAccountId}
            setToAccountId={transferForm.setToAccountId}
            recipientUsername={transferForm.recipientUsername}
            setRecipientUsername={transferForm.setRecipientUsername}
            mobileNumber={transferForm.mobileNumber}
            setMobileNumber={transferForm.setMobileNumber}
            treasuryCode={transferForm.treasuryCode}
            setTreasuryCode={transferForm.setTreasuryCode}
            langMessage={langMessage}
          />

          <AmountPanel
            type={transferForm.type}
            amount={transferForm.amount}
            setAmount={transferForm.setAmount}
            convertedPreview={convertedPreview}
            fromAccount={fromAccount}
            toAccount={toAccount}
            message={transferForm.message}
            handleTransfer={transferForm.handleTransfer}
            sendLabel={t.transferMenu.send}
            langMessage={langMessage}
          />

        </div>
      </section>
    </main>
  );
}