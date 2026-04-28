import type { Account } from "./types";

export function formatMoney(value: string, currency: string) {
  return `${Number(value).toFixed(2)} ${currency}`;
}

export function getTotalGel(accounts: Account[]) {
  return accounts
    .filter((account) => account.currency === "GEL")
    .reduce((sum, account) => sum + Number(account.balance), 0);
}