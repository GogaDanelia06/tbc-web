import type { Account } from "./types";

const rates: Record<string, number> = {
  GEL: 1,
  USD: 2.7,
  EUR: 3.15,
};

export function formatMoney(value: number, currency: string) {
  return `${value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} ${currency}`;
}

export function getTotalInGel(accounts: Account[]) {
  return accounts.reduce((total, account) => {
    const balance = Number(account.balance);
    const rate = rates[account.currency] || 1;

    return total + balance * rate;
  }, 0);
}