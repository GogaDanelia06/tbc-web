import { useMemo, useState } from "react";
import { getTransactionCategory, type Transaction } from "./financeUtils";
import {
  getCurrentMonth,
  getToday,
  isInsideMonthRange,
  isSameDay,
  isSameMonth,
} from "./financeDateUtils";

export function useFinanceFilters(transactions: Transaction[]) {
  const [filterType, setFilterTypeState] = useState("day");

  const [month, setMonth] = useState(getCurrentMonth());
  const [day, setDay] = useState(getToday());

  const [startMonth, setStartMonth] = useState(getCurrentMonth());
  const [endMonth, setEndMonth] = useState(getCurrentMonth());

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  function setFilterType(value: string) {
    setFilterTypeState(value);
    setActiveCategory(null);

    if (value === "day") {
      setDay(getToday());
      setMonth("");
    }

    if (value === "month") {
      setMonth(getCurrentMonth());
      setDay("");
    }

    if (value === "range") {
      setDay("");
      setMonth("");
      setStartMonth(getCurrentMonth());
      setEndMonth(getCurrentMonth());
    }
  }

  const filteredTransactions = useMemo(() => {
    return transactions.filter((tx) => {
      if (!tx.date) return false;

      if (filterType === "day" && day) {
        if (!isSameDay(tx.date, day)) return false;
      }

      if (filterType === "month" && month) {
        if (!isSameMonth(tx.date, month)) return false;
      }

      if (filterType === "range" && startMonth && endMonth) {
        if (!isInsideMonthRange(tx.date, startMonth, endMonth)) return false;
      }

      const query = search.toLowerCase().trim();

      if (query) {
        const category = getTransactionCategory(tx.title);
        const searchable =
          `${tx.title} ${tx.amount} ${tx.date} ${category}`.toLowerCase();

        if (!searchable.includes(query)) return false;
      }

      return true;
    });
  }, [transactions, filterType, month, day, startMonth, endMonth, search]);

  const categoryFilteredTransactions = useMemo(() => {
    if (!activeCategory) return filteredTransactions;

    return filteredTransactions.filter(
      (tx) => getTransactionCategory(tx.title) === activeCategory
    );
  }, [filteredTransactions, activeCategory]);

  return {
    filterType,
    setFilterType,
    month,
    setMonth,
    day,
    setDay,
    startMonth,
    setStartMonth,
    endMonth,
    setEndMonth,
    search,
    setSearch,
    activeCategory,
    setActiveCategory,
    filteredTransactions,
    categoryFilteredTransactions,
  };
}