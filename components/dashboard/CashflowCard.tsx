"use client";

import { useLanguage } from "@/context/LanguageContext";

type CashflowItem = {
  id: number;
  label: string;
  amount: string;
};

type Cashflow = {
  total: string;
  items: CashflowItem[];
};

type Props = {
  cashflow: Cashflow;
};

export default function CashflowCard({ cashflow }: Props) {
  const { t } = useLanguage();

  return (
    <section className="overflow-hidden rounded-2xl bg-white text-[#14171f] shadow-sm dark:bg-[#1e293b] dark:text-white">
      <h3 className="border-b border-gray-200 p-5 text-lg font-bold dark:border-[#334155]">
        {t.cashflow.title}
      </h3>

      <div className="p-5">
        <div className="mb-6 flex items-center gap-5">
          <div className="flex h-28 w-28 items-center justify-center rounded-full border-[16px] border-[#00aeef] text-sm font-bold">
            GEL
          </div>

          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t.cashflow.thisMonth}
            </p>
            <p className="text-2xl font-bold">
              {cashflow.total}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {cashflow.items.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00aeef] text-white">
                  •
                </span>
                <span>{item.label}</span>
              </div>

              <span className="font-bold">{item.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}