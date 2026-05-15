"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

import ActivationHero from "./ActivationHero";
import ActivationSidebar from "./ActivationSidebar";
import ActivationProducts from "./ActivationProducts";

import DashboardLoading from "@/components/ui/DashboardLoading";

import {
  getActivationCategories,
  getActivationProducts,
} from "./activationData";

export default function ProductActivationPage() {
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <DashboardLoading />;
  }

  function langMessage(en: string, ka: string) {
    return t.nav.home === "Home" ? en : ka;
  }

  const categories = getActivationCategories(langMessage);
  const products = getActivationProducts(langMessage);

  return (
    <main className="min-h-screen bg-[#f3f5f7] dark:bg-[#020617]">
      <section className="mx-auto max-w-7xl px-6 py-8">
        <h1 className="text-2xl font-bold text-gray-600 dark:text-white">
          {langMessage("Product Activation", "პროდუქტების აქტივაცია")}
        </h1>

        <ActivationHero langMessage={langMessage} />

        <div className="mt-10 grid overflow-hidden rounded-[18px] border border-gray-200 bg-white shadow-sm dark:border-[#1f2937] dark:bg-[#0f172a] lg:grid-cols-[260px_1fr]">
          <ActivationSidebar categories={categories} />

          <ActivationProducts
            products={products}
            langMessage={langMessage}
          />
        </div>
      </section>
    </main>
  );
}