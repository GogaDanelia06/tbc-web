"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function PersonalBanker() {
  const { t } = useLanguage();

  return (
    <section className="overflow-hidden rounded-2xl bg-white text-[#14171f] shadow-sm dark:bg-[#1e293b] dark:text-white">
      
      <h3 className="border-b border-gray-200 p-5 text-lg font-bold dark:border-[#334155]">
        {t.dashboard.banker.title}
      </h3>

      <div className="p-5">
        
        <div className="mb-4 flex gap-4">
          <div className="h-24 w-24 rounded-lg bg-gray-200 dark:bg-gray-600" />

          <div>
            <h4 className="text-xl font-bold text-blue-700 dark:text-blue-400">
            {t.dashboard.banker.name}
            </h4>

            <p className="mt-2 text-sm text-[#14171f] dark:text-gray-300">
              {t.dashboard.banker.hello}
            </p>
          </div>
        </div>

        <div className="space-y-3 text-sm text-[#14171f] dark:text-gray-300">
          <p>555-12-12-12</p>
          <p>tt@tbcbank.com.ge</p>

          <p className="text-blue-700 dark:text-blue-400">
            🌐 tbcconcept.ge
          </p>

          <p>concept@tbcbank.ge</p>
        </div>

      </div>
    </section>
  );
}