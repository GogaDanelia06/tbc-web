import { useMemo } from "react";

import type { Segment } from "./types";
import { calculateFinanceSummary } from "./financeCalculations";
import {
  getCategoryIcon,
  getTransactionCategory,
  type Transaction,
} from "./financeUtils";

const colors = ["#00aeef", "#34d399", "#f59e0b", "#ef4444", "#8b5cf6"];

type Props = {
  filteredTransactions: Transaction[];
  categoryFilteredTransactions: Transaction[];
  filterType: string;
  day: string;
  month: string;
  startMonth: string;
  endMonth: string;
  financeT: {
    showingAll?: string;
    currentMonth?: string;
  };
};

export function useFinanceAnalytics({
  filteredTransactions,
  categoryFilteredTransactions,
  filterType,
  day,
  month,
  startMonth,
  endMonth,
  financeT,
}: Props) {
  const allFilteredSummary = useMemo(() => {
    return calculateFinanceSummary(filteredTransactions);
  }, [filteredTransactions]);

  const total = allFilteredSummary.expenses;

  const segments: Segment[] = useMemo(() => {
    return Object.entries(allFilteredSummary.categories)
      .filter(([category]) => category !== "Income")
      .map(([label, value], index) => ({
        id: index + 1,
        label,
        value,
        percent: total > 0 ? (value / total) * 100 : 0,
        color: colors[index % colors.length],
        icon: getCategoryIcon(getTransactionCategory(label)),
      }));
  }, [allFilteredSummary.categories, total]);

  const visibleSummary = useMemo(() => {
    return calculateFinanceSummary(categoryFilteredTransactions);
  }, [categoryFilteredTransactions]);

  const period =
    filterType === "day"
      ? day || financeT.showingAll
      : filterType === "month"
        ? month || financeT.currentMonth
        : `${startMonth} → ${endMonth}`;

  return {
    total,
    segments,
    visibleSummary,
    period,
  };
}