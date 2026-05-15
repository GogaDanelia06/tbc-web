"use client";

import { useLanguage } from "@/context/LanguageContext";

type Props = {
  summary: {
    income: number;
    expenses: number;
    balance: number;
  };
};

export default function FinanceSummary({ summary }: Props) {
  const { t } = useLanguage();

  const isPositive = summary.balance >= 0;

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      {/* INCOME */}
      <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 dark:bg-[#111827] dark:ring-white/5">
        <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
          {t.financeSummary.income}
        </p>

        <p className="mt-2 text-lg font-semibold text-emerald-600 dark:text-emerald-400">
          +{summary.income.toFixed(2)}₾
        </p>

        <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-500">
          {t.financeSummary.moneyReceived}
        </p>
      </div>

      {/* EXPENSES */}
      <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 dark:bg-[#111827] dark:ring-white/5">
        <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
          {t.financeSummary.expenses}
        </p>

        <p className="mt-2 text-lg font-semibold text-red-600 dark:text-red-400">
          -{summary.expenses.toFixed(2)}₾
        </p>

        <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-500">
          {t.financeSummary.moneySpent}
        </p>
      </div>

      {/* NET CHANGE */}
      <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 dark:bg-[#111827] dark:ring-white/5">
        <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
          {t.financeSummary.netChange}
        </p>

        <p
          className={`mt-2 text-lg font-semibold ${
            isPositive
              ? "text-emerald-600 dark:text-emerald-400"
              : "text-red-600 dark:text-red-400"
          }`}
        >
          {isPositive ? "+" : ""}
          {summary.balance.toFixed(2)}₾
        </p>

        <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-500">
          {t.financeSummary.incomeMinusExpenses}
        </p>
      </div>
    </div>
  );
}