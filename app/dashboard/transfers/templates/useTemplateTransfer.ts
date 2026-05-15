import { useState } from "react";
import type { Template } from "./types";
import type { Account } from "./templateApi";
import { fetchAccounts, sendTemplateTransfer } from "./templateApi";

type LangMessage = (en: string, ka: string) => string;

export function useTemplateTransfer(
  userId: number,
  langMessage: LangMessage
) {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [transferModalOpen, setTransferModalOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [fromAccountId, setFromAccountId] = useState("");
  const [amount, setAmount] = useState("");
  const [transferMessage, setTransferMessage] = useState("");
  const [transferLoading, setTransferLoading] = useState(false);

  async function loadAccounts() {
    const data = await fetchAccounts(userId);
    setAccounts(data);
  }

  function handleTransfer(item: Template) {
    setSelectedTemplate(item);
    setTransferModalOpen(true);
    setAmount("");
    setTransferMessage("");
    setFromAccountId(accounts[0] ? String(accounts[0].id) : "");
  }

  function closeTransferModal() {
    if (transferLoading) return;

    setTransferModalOpen(false);
    setSelectedTemplate(null);
    setFromAccountId("");
    setAmount("");
    setTransferMessage("");
  }

  async function confirmTransfer() {
    if (!selectedTemplate) return;

    const transferAmount = Number(amount);

    if (!fromAccountId) {
      setTransferMessage(langMessage("Select account", "აირჩიე ანგარიში"));
      return;
    }

    if (!transferAmount || transferAmount <= 0) {
      setTransferMessage(langMessage("Invalid amount", "არასწორი თანხა"));
      return;
    }

    setTransferLoading(true);
    setTransferMessage("");

    const res = await sendTemplateTransfer({
      userId,
      fromAccountId: Number(fromAccountId),
      templateId: selectedTemplate.id,
      amount: transferAmount,
    });

    const data = await res.json();

    if (!res.ok) {
      setTransferMessage(
        data.error || langMessage("Transfer failed", "გადარიცხვა ვერ შესრულდა")
      );
      setTransferLoading(false);
      return;
    }

    setTransferMessage(langMessage("Transfer completed", "გადარიცხვა შესრულდა"));
    await loadAccounts();

    setTimeout(() => {
      closeTransferModal();
    }, 900);

    setTransferLoading(false);
  }

  return {
    accounts,
    transferModalOpen,
    selectedTemplate,
    fromAccountId,
    amount,
    transferMessage,
    transferLoading,
    setFromAccountId,
    setAmount,
    loadAccounts,
    handleTransfer,
    closeTransferModal,
    confirmTransfer,
  };
}