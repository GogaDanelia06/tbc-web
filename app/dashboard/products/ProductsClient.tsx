"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import ProductsTabs from "@/app/dashboard/products/ProductsTabs";
import ProductsTable from "@/app/dashboard/products/ProductsTable";
import type { DashboardData } from "@/app/dashboard/products/types";

export default function ProductsClient({ data }: { data: DashboardData }) {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("accounts");

  const tabs = [
    { key: "accounts", label: t.products.tabs.accounts },
    { key: "credit", label: t.products.tabs.credit },
    { key: "deposits", label: t.products.tabs.deposits },
    { key: "loans", label: t.products.tabs.loans },
  ];

  return (
    <div className="space-y-6">
      <ProductsTabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {activeTab === "accounts" ? (
        <ProductsTable accounts={data.accounts} t={t} />
      ) : (
        <section className="rounded-2xl bg-white p-8 text-gray-500 shadow-sm dark:bg-[#1e293b] dark:text-gray-400">
          {t.products.empty}
        </section>
      )}
    </div>
  );
}