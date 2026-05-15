"use client";

import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import TemplateToolbar from "./TemplateToolbar";
import TemplateModal from "./TemplateModal";
import TemplateTransferModal from "./TemplateTrasnferModal";
import TemplateGrid from "./TemplatesGrid";
import { useTemplateForm } from "./useTemplateForm";
import { useTemplateTransfer } from "./useTemplateTransfer";

export default function TransferTemplatesClient({ userId }: { userId: number }) {
  const { t } = useLanguage();
  const [search, setSearch] = useState("");

  function langMessage(en: string, ka: string) {
    return t.nav.home === "Home" ? en : ka;
  }

  const templateForm = useTemplateForm(userId);
  const templateTransfer = useTemplateTransfer(userId, langMessage);

  useEffect(() => {
    templateForm.loadTemplates();
    templateTransfer.loadAccounts();
  }, [userId]);

  const filteredTemplates = useMemo(() => {
    const q = search.toLowerCase();

    return templateForm.templates.filter((item) => {
      return (
        item.name.toLowerCase().includes(q) ||
        item.iban.toLowerCase().includes(q) ||
        item.currency.toLowerCase().includes(q)
      );
    });
  }, [search, templateForm.templates]);

  return (
    <main className="min-h-screen bg-[#f3f5f7] dark:bg-[#020617]">
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-[22px] border border-gray-200 bg-white p-8 shadow-[0_18px_45px_rgba(15,23,42,0.08)] dark:border-[#1f2937] dark:bg-[#0f172a]">
          <TemplateToolbar
            search={search}
            setSearch={setSearch}
            openAddModal={templateForm.openAddModal}
            langMessage={langMessage}
          />

          <h1 className="mt-10 text-2xl font-bold text-gray-600 dark:text-white">
            {langMessage(
              "Transfer to someone else",
              "გადარიცხვა სხვის ანგარიშზე"
            )}
          </h1>

          <TemplateGrid
            templates={filteredTemplates}
            sendLabel={t.transferMenu.send}
            openEditModal={templateForm.openEditModal}
            handleDelete={templateForm.handleDelete}
            handleTransfer={templateTransfer.handleTransfer}
            langMessage={langMessage}
          />
        </div>
      </section>
      <TemplateModal
        modalOpen={templateForm.modalOpen}
        editingTemplate={templateForm.editingTemplate}
        name={templateForm.name}
        iban={templateForm.iban}
        currency={templateForm.currency}
        setName={templateForm.setName}
        setIban={templateForm.setIban}
        setCurrency={templateForm.setCurrency}
        closeModal={templateForm.closeModal}
        handleSave={templateForm.handleSave}
        langMessage={langMessage}
      />

      <TemplateTransferModal
        open={templateTransfer.transferModalOpen}
        template={templateTransfer.selectedTemplate}
        accounts={templateTransfer.accounts}
        fromAccountId={templateTransfer.fromAccountId}
        amount={templateTransfer.amount}
        message={templateTransfer.transferMessage}
        loading={templateTransfer.transferLoading}
        setFromAccountId={templateTransfer.setFromAccountId}
        setAmount={templateTransfer.setAmount}
        closeModal={templateTransfer.closeTransferModal}
        confirmTransfer={templateTransfer.confirmTransfer}
        langMessage={langMessage}
      />
    </main>
  );
}