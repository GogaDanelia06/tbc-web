export type Transaction = {
  id: number;
  title: string;
  amount: string;
  date: string;
};

export type FinanceCategory =
  | "Income"
  | "Transfer"
  | "Food"
  | "Shopping"
  | "Utilities"
  | "Transport"
  | "Other";

export function parseAmount(amount: string | number): number {
  if (typeof amount === "number") return amount;

  const cleaned = amount.replace(/[^\d.-]/g, "");
  return Number(cleaned) || 0;
}

export function getTransactionCategory(title: string): FinanceCategory {
  const value = title.toLowerCase();

  if (value.includes("salary") || value.includes("income") || value.includes("deposit")) {
    return "Income";
  }

  if (value.includes("transfer") || value.includes("გადარიცხვა")) {
    return "Transfer";
  }

  if (value.includes("food") || value.includes("cafe") || value.includes("restaurant") || value.includes("market")) {
    return "Food";
  }

  if (value.includes("shop") || value.includes("amazon") || value.includes("store")) {
    return "Shopping";
  }

  if (value.includes("electricity") || value.includes("gas") || value.includes("water") || value.includes("utility")) {
    return "Utilities";
  }

  if (value.includes("taxi") || value.includes("bolt") || value.includes("bus")) {
    return "Transport";
  }

  return "Other";
}

export function getCategoryIcon(category: FinanceCategory): string {
  const icons: Record<FinanceCategory, string> = {
    Income: "💰",
    Transfer: "↔️",
    Food: "🍽️",
    Shopping: "🛍️",
    Utilities: "💡",
    Transport: "🚕",
    Other: "📄",
  };

  return icons[category];
}