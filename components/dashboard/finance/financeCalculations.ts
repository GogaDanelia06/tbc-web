import {
  getTransactionCategory,
  parseAmount,
  type Transaction,
} from "./financeUtils";

export function calculateFinanceSummary(transactions: Transaction[]) {
  let income = 0;
  let expenses = 0;

  const categories: Record<string, number> = {};

  transactions.forEach((tx) => {
    const value = parseAmount(tx.amount);
    const category = getTransactionCategory(tx.title);

    if (value > 0) {
      income += value;
    } else {
      expenses += Math.abs(value);
    }

    categories[category] = (categories[category] || 0) + Math.abs(value);
  });

  return {
    income,
    expenses,
    balance: income - expenses,
    categories,
  };
}