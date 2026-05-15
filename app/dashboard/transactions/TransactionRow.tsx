import type { Transaction } from "@/lib/transactions";

type Props = {
  tx: Transaction;
};

export default function TransactionRow({ tx }: Props) {
  const statusClass =
    tx.status === "success"
      ? "border-green-500 text-green-500"
      : "border-gray-400 text-gray-400";

  const colorClass =
    tx.color === "red"
      ? "bg-red-400"
      : tx.color === "blue"
        ? "bg-sky-300"
        : tx.color === "indigo"
          ? "bg-indigo-400"
          : "bg-gray-300";

  const icon =
    tx.color === "red" ? "🍴" : tx.color === "indigo" ? "🏦" : "↔";

  const amountClass =
    tx.amount.includes("+") || tx.amount.includes("$")
      ? "text-green-600"
      : "text-[#14171f] dark:text-white";

  return (
    <div className="grid grid-cols-[130px_280px_1fr_180px_120px] items-center border-t border-gray-100 px-8 py-5 text-sm dark:border-[#1f2937]">
      <div className="flex items-center gap-3 text-[#14171f] dark:text-white">
        <span
          className={`flex h-5 w-5 items-center justify-center rounded-full border text-xs ${statusClass}`}
        >
          ✓
        </span>

        <span>{tx.date}</span>
      </div>

      <div className="flex items-center gap-4">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full text-white ${colorClass}`}
        >
          {icon}
        </div>

        <span className="font-medium text-gray-600 dark:text-gray-300">
          {tx.category}
        </span>
      </div>

      <span className="truncate text-[#14171f] dark:text-white">
        {tx.details}
      </span>

      <span className="text-[#14171f] dark:text-white">{tx.account}</span>

      <span className={`text-right font-semibold ${amountClass}`}>
        {tx.amount}
      </span>
    </div>
  );
}