import { CashflowItem, Segment } from "./types";

export const icons = ["↔", "🎮", "🍽", "💵", "…", "🚕", "🏦"];

export const colors = [
  "#00aeef",
  "#82bd41",
  "#ff4b55",
  "#5b7cfa",
  "#9b5cf6",
  "#14a69d",
  "#64748b",
];

export function parseAmount(value: string) {
  return Number(value.toString().replace(/[^\d.,-]/g, "").replace(",", "."));
}

export function createSegments(items: CashflowItem[], total: number): Segment[] {
  return items
    .map((item, index) => {
      const value = parseAmount(item.amount);
      const percent = total ? (value / total) * 100 : 0;

      return {
        ...item,
        value,
        percent,
        icon: icons[index] || "•",
        color: colors[index] || "#00aeef",
      };
    })
    .sort((a, b) => b.value - a.value);
}