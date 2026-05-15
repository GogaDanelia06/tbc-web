import type { Account, TransferType } from "./types";

export async function fetchAccounts(userId: number): Promise<Account[]> {
  const res = await fetch(`/api/template-transfer/accounts?userId=${userId}`);

  if (!res.ok) {
    return [];
  }

  const data = await res.json();

  return data.accounts || [];
}

type TransferBody = {
  type: TransferType;
  fromAccountId: number;
  toAccountId: number | null;
  recipientUsername: string | null;
  amount: string;
};

export async function sendTransfer(body: TransferBody) {
  return fetch("/api/transfers", {
    method: "POST",
    body: JSON.stringify(body),
  });
}