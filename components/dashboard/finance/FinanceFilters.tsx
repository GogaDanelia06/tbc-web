type Props = {
  t: any;
  filterType: "month" | "day";
  setFilterType: (value: "month" | "day") => void;
  month: string;
  setMonth: (value: string) => void;
  day: string;
  setDay: (value: string) => void;
};

export default function FinanceFilters({
  t,
  filterType,
  setFilterType,
  month,
  setMonth,
  day,
  setDay,
}: Props) {
  return (
    <div className="flex flex-col gap-4 border-b border-gray-200 p-6 dark:border-[#334155] md:flex-row md:items-center md:justify-between">
      <div className="grid w-full max-w-[420px] grid-cols-2 rounded-xl bg-gray-100 p-1 dark:bg-[#0f172a]">
        <button className="rounded-lg bg-white py-3 font-semibold text-[#14171f] shadow-sm dark:bg-[#334155] dark:text-white">
          {t.finance.expenses}
        </button>

        <button className="py-3 font-semibold text-gray-500 dark:text-gray-400">
          {t.finance.incomes}
        </button>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value as "month" | "day")}
          className="rounded-lg border border-gray-200 bg-white px-4 py-3 font-semibold text-[#14171f] outline-none dark:border-[#334155] dark:bg-[#1e293b] dark:text-white"
        >
          <option value="month">Month</option>
          <option value="day">Day</option>
        </select>

        {filterType === "month" ? (
          <input
            type="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="rounded-lg border border-gray-200 bg-white px-4 py-3 font-semibold text-[#14171f] outline-none dark:border-[#334155] dark:bg-[#1e293b] dark:text-white"
          />
        ) : (
          <input
            type="date"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className="rounded-lg border border-gray-200 bg-white px-4 py-3 font-semibold text-[#14171f] outline-none dark:border-[#334155] dark:bg-[#1e293b] dark:text-white"
          />
        )}
      </div>
    </div>
  );
}