import "server-only";

import {
  mockAccounts,
  mockPension,
  mockTransactions,
  mockUsers,
} from "@/lib/mockData";

const ratesToGel: Record<string, number> = {
  GEL: 1,
  USD: 2.7,
  EUR: 3.15,
};

function parseAmount(amount: string) {
  return Number(amount.replace(/[^\d.-]/g, ""));
}

export async function getDashboardData(userId: number) {
  const user = mockUsers.find((u) => u.id === userId);

  if (!user) {
    throw new Error("User not found");
  }

  const accounts = mockAccounts
    .filter((account) => account.user_id === userId)
    .map((account) => ({
      id: account.id,
      name: account.name,
      balance: account.balance,
      currency: account.currency,
    }));

  const transactions = mockTransactions
    .filter((transaction) => transaction.user_id === userId)
    .map((transaction) => ({
      id: transaction.id,
      title: transaction.details,
      amount: transaction.amount,
      date: transaction.date,
    }));

  const pension =
    mockPension.find((item) => item.user_id === userId) ?? {
      amount: "0.00",
      currency: "GEL",
    };

  const assets = accounts.reduce((sum, account) => {
    return sum + account.balance * (ratesToGel[account.currency] ?? 1);
  }, 0);

  const cashflowItems = mockTransactions
    .filter((transaction) => transaction.user_id === userId)
    .map((transaction) => ({
      id: transaction.id,
      label: transaction.category,
      amount: String(Math.abs(parseAmount(transaction.amount))),
      transaction_date: transaction.date,
    }));

  const total = cashflowItems
    .reduce((sum, item) => sum + Number(item.amount), 0)
    .toFixed(2);

  return {
    user: {
      id: user.id,
      username: user.username,
      full_name: user.full_name,
    },
    accounts,
    transactions,
    pension,
    cashflow: {
      total,
      items: cashflowItems,
    },
    summary: {
      assets: Number(assets.toFixed(2)),
      liabilities: 0,
    },
  };
}