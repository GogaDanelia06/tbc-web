"use client";

import type { LucideIcon } from "lucide-react";

type Product = {
  title: string;
  desc: string;
  icon: LucideIcon;
};

type Props = {
  products: Product[];
  langMessage: (en: string, ka: string) => string;
};

export default function ActivationProducts({ products, langMessage }: Props) {
  return (
    <section className="grid gap-5 p-7 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => {
        const Icon = product.icon;

        return (
          <div
            key={product.title}
            className="flex min-h-64 flex-col justify-between rounded-[18px] border border-[#1237d5] bg-white p-7 dark:bg-[#020617]"
          >
            <div>
              <Icon className="h-10 w-10 text-[#1237d5]" />

              <h3 className="mt-7 text-lg font-bold text-[#1237d5]">
                {product.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-gray-500 dark:text-gray-400">
                {product.desc}
              </p>
            </div>

            <button className="mt-8 h-12 rounded-lg border border-[#1237d5] px-6 font-semibold text-[#1237d5] transition hover:bg-blue-50 dark:hover:bg-[#1e293b]">
              {langMessage("Learn more", "გაიგე მეტი")}
            </button>
          </div>
        );
      })}
    </section>
  );
}