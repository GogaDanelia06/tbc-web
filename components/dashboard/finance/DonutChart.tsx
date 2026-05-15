"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Segment } from "./types";

type Props = {
  total: number;
  segments: Segment[];
  label: string;
  period: string;
  activeCategory: string | null;
  setActiveCategory: (category: string | null) => void;
};

export default function DonutChart({
  total,
  segments,
  label,
  period,
  activeCategory,
  setActiveCategory,
}: Props) {
  const { t } = useLanguage();

  const radius = 112;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;

  const hasData = total > 0 && segments.length > 0;

  return (
    <div className="flex w-full flex-col items-center rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200 dark:bg-[#111827] dark:ring-white/5">
      <div className="mb-4 w-full text-center lg:text-left">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
          {t.financeChart.spendingByCategory}
        </h2>
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
          {period}
        </p>
      </div>

      <div className="relative h-64 w-64 sm:h-72 sm:w-72">
        <svg viewBox="0 0 300 300" className="h-full w-full -rotate-90">
          <circle
            cx="150"
            cy="150"
            r={radius}
            fill="none"
            className="stroke-slate-200 dark:stroke-[#1e293b]"
            strokeWidth="32"
          />

          {hasData &&
            segments.map((item) => {
              const dash = (item.percent / 100) * circumference;
              const currentOffset = offset;
              offset += dash;

              const isActive = activeCategory === item.label;

              return (
                <circle
                  key={item.id}
                  cx="150"
                  cy="150"
                  r={radius}
                  fill="none"
                  stroke={item.color}
                  strokeWidth={isActive ? "38" : "32"}
                  strokeLinecap="round"
                  strokeDasharray={`${dash} ${circumference - dash}`}
                  strokeDashoffset={-currentOffset}
                  className="cursor-pointer transition-all duration-200"
                  opacity={!activeCategory || isActive ? 1 : 0.22}
                  onClick={() =>
                    setActiveCategory(isActive ? null : item.label)
                  }
                />
              );
            })}
        </svg>

        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">
              {total.toFixed(2)}₾
            </p>

            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              {label}
            </p>

            {activeCategory && (
              <button
                onClick={() => setActiveCategory(null)}
                className="mt-3 rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-600 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              >
                {t.financeChart.clear} {activeCategory}
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="mt-5 flex w-full flex-wrap justify-center gap-2">
        {segments.length === 0 ? (
          <p className="rounded-full bg-slate-100 px-3 py-1.5 text-xs text-slate-500 dark:bg-slate-800 dark:text-slate-400">
            {t.financeChart.noSpendingData}
          </p>
        ) : (
          segments.map((item) => {
            const isActive = activeCategory === item.label;

            return (
              <button
                key={item.id}
                onClick={() =>
                  setActiveCategory(isActive ? null : item.label)
                }
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                  isActive
                    ? "bg-[#00aeef] text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                }`}
              >
                {item.icon} {item.label}
              </button>
            );
          })
        )}
      </div>
    </div>
  );
}