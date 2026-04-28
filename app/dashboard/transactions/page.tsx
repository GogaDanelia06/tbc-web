"use client";

import { Search } from "lucide-react";

const transactions = [
  {
    date: "27 Apr 2026",
    category: "Category removed",
    details: "ORI NABIJI, TBILISI, GE",
    account: "GE04...0001",
    amount: "-1.49₾",
    status: "pending",
    color: "gray",
  },
  {
    date: "26 Apr 2026",
    category: "Own account transfer",
    details: "Conversion GEL to USD",
    account: "GE30...0004",
    amount: "14.85$",
    status: "success",
    color: "blue",
  },
  {
    date: "26 Apr 2026",
    category: "Own account transfer",
    details: "Conversion USD to GEL",
    account: "GE30...0004",
    amount: "-12.85€",
    status: "success",
    color: "blue",
  },
  {
    date: "26 Apr 2026",
    category: "Restaurant, café, bar",
    details: "POS - OPIUMI, 5.60 GEL",
    account: "GE04...0001",
    amount: "-5.60₾",
    status: "success",
    color: "red",
  },
  {
    date: "26 Apr 2026",
    category: "Restaurant, café, bar",
    details: "POS wallet - Glovoapp",
    account: "GE04...0001",
    amount: "-43.10₾",
    status: "success",
    color: "red",
  },
  {
    date: "26 Apr 2026",
    category: "Utilities",
    details: "Utility payment",
    account: "GE30...0004",
    amount: "-40.00₾",
    status: "success",
    color: "indigo",
  },
];

export default function TransactionsPage() {
  return (
    <main className="bg-[#f4f6f8] px-6 py-8 dark:bg-[#020617]">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-3xl font-semibold text-[#14171f] dark:text-white">
          Transactions
        </h1>

        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-[#1f2937] dark:bg-[#0f172a]">
          <div className="flex items-center gap-8 border-b border-gray-200 px-8 dark:border-[#1f2937]">
            <button className="border-b-4 border-[#1d4ed8] py-5 font-semibold text-[#1d4ed8]">
              Transactions
            </button>

            <button className="py-5 font-semibold text-gray-500 hover:text-[#1d4ed8]">
              Statements
            </button>

            <button className="py-5 font-semibold text-gray-500 hover:text-[#1d4ed8]">
              Future payments
            </button>
          </div>

          <div className="flex items-center justify-between gap-5 p-8">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

              <input
                placeholder="Search by content"
                className="w-full rounded-lg border border-gray-200 bg-white py-4 pl-12 pr-4 text-sm outline-none focus:border-[#1d4ed8] dark:border-[#334155] dark:bg-[#020617] dark:text-white"
              />
            </div>

            <button className="rounded-lg bg-[#1237d5] px-8 py-4 font-semibold text-white hover:bg-[#0f2fc0]">
              Filter
            </button>
          </div>

          <div className="grid grid-cols-[130px_280px_1fr_180px_120px] bg-[#f7f8fa] px-8 py-4 text-sm font-semibold text-gray-500 dark:bg-[#111827] dark:text-gray-300">
            <span>Date</span>
            <span>Category</span>
            <span>Purpose / details</span>
            <span>Account</span>
            <span className="text-right">Amount</span>
          </div>

          <div>
            {transactions.map((tx, index) => (
              <div
                key={index}
                className="grid grid-cols-[130px_280px_1fr_180px_120px] items-center border-t border-gray-100 px-8 py-5 text-sm dark:border-[#1f2937]"
              >
                <div className="flex items-center gap-3 text-[#14171f] dark:text-white">
                  <span
                    className={`flex h-5 w-5 items-center justify-center rounded-full border text-xs ${
                      tx.status === "success"
                        ? "border-green-500 text-green-500"
                        : "border-gray-400 text-gray-400"
                    }`}
                  >
                    ✓
                  </span>

                  <span>{tx.date}</span>
                </div>

                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-white ${
                      tx.color === "red"
                        ? "bg-red-400"
                        : tx.color === "blue"
                          ? "bg-sky-300"
                          : tx.color === "indigo"
                            ? "bg-indigo-400"
                            : "bg-gray-300"
                    }`}
                  >
                    {tx.color === "red" ? "🍴" : tx.color === "indigo" ? "🏦" : "↔"}
                  </div>

                  <span className="font-medium text-gray-600 dark:text-gray-300">
                    {tx.category}
                  </span>
                </div>

                <span className="truncate text-[#14171f] dark:text-white">
                  {tx.details}
                </span>

                <span className="text-[#14171f] dark:text-white">
                  {tx.account}
                </span>

                <span
                  className={`text-right font-semibold ${
                    tx.amount.includes("$")
                      ? "text-green-600"
                      : "text-[#14171f] dark:text-white"
                  }`}
                >
                  {tx.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}