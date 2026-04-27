"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import FinanceSummary from "@/components/dashboard/finance/FinanceSummary";
import FinanceFilters from "@/components/dashboard/finance/FinanceFilters";
import DonutChart from "@/components/dashboard/finance/DonutChart";
import FinanceList from "@/components/dashboard/finance/FinanceList";
import { FinanceData } from "@/components/dashboard/finance/types";
import { createSegments, parseAmount } from "@/components/dashboard/finance/utils";

export default function FinancePage() {
  const router = useRouter();
  const { t } = useLanguage();

  const [data, setData] = useState<FinanceData | null>(null);
  const [filterType, setFilterType] = useState<"month" | "day">("month");
  const [month, setMonth] = useState("2026-04");
  const [day, setDay] = useState("2026-04-15");

  useEffect(() => {
    async function loadFinance() {
      const savedUser = localStorage.getItem("user");

      if (!savedUser) {
        router.push("/");
        return;
      }

      const user = JSON.parse(savedUser);

      const res = await fetch("/api/dashboard", {
        method: "POST",
        body: JSON.stringify({
          userId: user.id,
          month: filterType === "month" ? month : undefined,
          day: filterType === "day" ? day : undefined,
        }),
      });

      if (!res.ok) return;

      setData(await res.json());
    }

    loadFinance();
  }, [router, filterType, month, day]);

  if (!data) return null;

  const total = parseAmount(data.cashflow.total);
  const segments = createSegments(data.cashflow.items, total);
  const period = filterType === "month" ? month : day;

  return (
    <div className="space-y-6">
      <FinanceSummary t={t} />

      <section className="overflow-hidden rounded-2xl bg-white shadow-sm dark:bg-[#1e293b]">
        <FinanceFilters
          t={t}
          filterType={filterType}
          setFilterType={setFilterType}
          month={month}
          setMonth={setMonth}
          day={day}
          setDay={setDay}
        />

        <div className="grid gap-10 p-8 lg:grid-cols-[360px_1fr]">
          <DonutChart
            total={total}
            segments={segments}
            label={t.finance.totalSpending}
            period={period}
          />

          <FinanceList title={t.finance.showingAll} segments={segments} />
        </div>
      </section>
    </div>
  );
}