import {
  getCategoryIcon,
  getTransactionCategory,
  parseAmount,
  type Transaction,
} from "./financeUtils";

type Props = {
  t: {
    finance: {
      noTransactions?: string;
      changeDateOrSearch?: string;
      transactions?: string;
      transactionCount?: string;
      transactionsCount?: string;
      income?: string;
      expense?: string;
    };
  };
  transactions?: Transaction[];
  activeCategory?: string | null;
};

export default function FinanceList({
  t,
  transactions = [],
  activeCategory,
}: Props) {
  const financeT = t.finance;

  if (transactions.length === 0) {
    return (
      <div className="flex min-h-72 items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-white p-6 text-center dark:border-slate-800 dark:bg-slate-950">
        <div>
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-xl dark:bg-slate-900">
            🔎
          </div>

          <h3 className="text-base font-semibold text-slate-900 dark:text-white">
            {financeT.noTransactions || "No transactions for this period"}
          </h3>

          <p className="mt-2 max-w-64 text-sm text-slate-500 dark:text-slate-400">
            {financeT.changeDateOrSearch ||
              "Try changing the date range or search keyword."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 dark:bg-slate-950 dark:ring-white/5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            {financeT.transactions || "Transactions"}
          </h2>

          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            {transactions.length}{" "}
            {transactions.length === 1
              ? financeT.transactionCount || "transaction"
              : financeT.transactionsCount || "transactions"}
          </p>
        </div>

        {activeCategory && (
          <span className="rounded-full bg-[#00aeef]/10 px-3 py-1 text-xs font-medium text-[#00aeef]">
            {activeCategory}
          </span>
        )}
      </div>

      <div className="space-y-2.5">
        {transactions.map((tx) => {
          const value = parseAmount(tx.amount);
          const isIncome = value > 0;
          const category = getTransactionCategory(tx.title);
          const icon = getCategoryIcon(category);

          return (
            <div
              key={tx.id}
              className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-3.5 transition hover:border-[#00aeef]/40 hover:bg-slate-100 dark:border-slate-800 dark:bg-[#020617] dark:hover:bg-slate-900"
            >
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-200 text-lg transition group-hover:bg-slate-300 dark:bg-slate-800 dark:group-hover:bg-slate-700">
                  {icon}
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">
                    {tx.title}
                  </p>

                  <div className="mt-1 flex flex-wrap items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <span>{category}</span>
                    <span>•</span>
                    <span>{tx.date}</span>
                  </div>
                </div>
              </div>

              <div className="ml-3 text-right">
                <p
                  className={`shrink-0 text-sm font-bold ${
                    isIncome
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-red-600 dark:text-red-400"
                  }`}
                >
                  {tx.amount}
                </p>

                <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                  {isIncome
                    ? financeT.income || "Income"
                    : financeT.expense || "Expense"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}