import { useEffect, useState } from "react";
import type { Account, TransferType } from "./types";
import { fetchAccounts, sendTransfer } from "./transferApi";
import { useRouter } from "next/navigation";

type LangMessage = (en: string, ka: string) => string;

export function useTransferForm(userId: number, langMessage: LangMessage) {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [type, setType] = useState<TransferType>("own");

  const [fromAccountId, setFromAccountId] = useState("");
  const [toAccountId, setToAccountId] = useState("");
  const [recipientUsername, setRecipientUsername] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [treasuryCode, setTreasuryCode] = useState("");
  const [amount, setAmount] = useState("");

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");

  const router = useRouter();

  useEffect(() => {
    async function loadAccounts() {
      const data = await fetchAccounts(userId);
      setAccounts(data);
    }

    loadAccounts();
  }, [userId]);

  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => {
      setMessage("");
      setMessageType("");
    }, 4000);

    return () => clearTimeout(timer);
  }, [message]);

  function resetMessage() {
    setMessage("");
    setMessageType("");
  }

  async function handleTransfer() {
    resetMessage();

    if (type === "mobile" || type === "treasury") {
      setMessageType("error");
      setMessage(
        langMessage(
          "This option will be added next.",
          "ეს ფუნქცია მალე დაემატება."
        )
      );
      return;
    }

    const res = await sendTransfer({
      type,
      fromAccountId: Number(fromAccountId),
      toAccountId: type === "own" ? Number(toAccountId) : null,
      recipientUsername: type === "someone" ? recipientUsername : null,
      amount,
    });

    const data = await res.json();

    if (!res.ok) {
      setMessageType("error");
      setMessage(
        data.error ||
          langMessage("Transfer failed", "გადარიცხვა ვერ შესრულდა")
      );
      return;
    }

    setMessageType("success");
    setMessage(
      langMessage(
        "Transfer completed successfully",
        "გადარიცხვა წარმატებით შესრულდა"
      )
    );

    const updatedAccounts = await fetchAccounts(userId);
    setAccounts(updatedAccounts);

    router.refresh();

    setAmount("");
    setRecipientUsername("");
    setMobileNumber("");
    setTreasuryCode("");
  }

  return {
    accounts,
    type,
    setType,
    fromAccountId,
    setFromAccountId,
    toAccountId,
    setToAccountId,
    recipientUsername,
    setRecipientUsername,
    mobileNumber,
    setMobileNumber,
    treasuryCode,
    setTreasuryCode,
    amount,
    setAmount,
    message,
    messageType,
    resetMessage,
    handleTransfer,
  };
}