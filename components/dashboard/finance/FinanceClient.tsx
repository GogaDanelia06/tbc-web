"use client";

import { useLanguage } from "@/context/LanguageContext";

import FinanceFilters from "./FinanceFilters";
import FinanceSummary from "./FinanceSummary";
import DonutChart from "./DonutChart";
import FinanceList from "./FinanceList";

import { useFinanceFilters } from "./useFinanceFilters";
import { useFinanceAnalytics } from "./useFinanceAnalytics";

import type { Transaction } from "./financeUtils";

type Props = {
  data: {
    transactions?: Transaction[];
  };
};

export default function FinanceClient({ data }: Props) {
  const { t } = useLanguage();

  const financeT = t.finance;
  const transactions: Transaction[] = data.transactions ?? [];

  // FILTER LOGIC
  const {
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
  } = useFinanceFilters(transactions);

  // ANALYTICS LOGIC
  const { total, segments, visibleSummary, period } =
    useFinanceAnalytics({
      filteredTransactions,
      categoryFilteredTransactions,
      filterType,
      day,
      month,
      startMonth,
      endMonth,
      financeT,
    });

  return (
    <div className="space-y-6">
      {/* SUMMARY */}
      <FinanceSummary summary={visibleSummary} />

      {/* FILTERS */}
      <FinanceFilters
        t={t}
        filterType={filterType}
        setFilterType={setFilterType}
        month={month}
        setMonth={setMonth}
        day={day}
        setDay={setDay}
        startMonth={startMonth}
        setStartMonth={setStartMonth}
        endMonth={endMonth}
        setEndMonth={setEndMonth}
        search={search}
        setSearch={setSearch}
      />

      {/* CHART + LIST */}
      <section className="grid gap-5 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 dark:bg-[#111827] dark:ring-white/5 lg:grid-cols-[320px_1fr] lg:p-6">
        
        {/* CHART */}
        <div className="flex items-center justify-center">
          <DonutChart
            total={total}
            segments={segments}
            label={financeT.totalSpending}
            period={period}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>

        {/* LIST */}
        <FinanceList
          t={t}
          transactions={filteredTransactions}
          activeCategory={activeCategory}
        />
      </section>
    </div>
  );
}