type Props = {
  t: {
    finance: {
      search?: string;
      searchPlaceholder?: string;
      filter?: string;
      range?: string;
      from?: string;
      to?: string;
      filters?: {
        day?: string;
        month?: string;
      };
    };
  };
  filterType: string;
  setFilterType: (value: string) => void;
  month: string;
  setMonth: (value: string) => void;
  day: string;
  setDay: (value: string) => void;
  startMonth: string;
  setStartMonth: (value: string) => void;
  endMonth: string;
  setEndMonth: (value: string) => void;
  search: string;
  setSearch: (value: string) => void;
};

export default function FinanceFilters({
  t,
  filterType,
  setFilterType,
  month,
  setMonth,
  day,
  setDay,
  startMonth,
  setStartMonth,
  endMonth,
  setEndMonth,
  search,
  setSearch,
}: Props) {
  const financeT = t.finance;

  const inputClass =
    "h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#00aeef] dark:border-slate-700 dark:bg-[#020617] dark:text-white dark:placeholder:text-slate-500";

  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 dark:bg-[#111827] dark:ring-white/5">
      <div className="grid gap-3 lg:grid-cols-[1fr_170px_1fr] lg:items-end">
        <div>
          <label className="mb-1.5 block text-xs font-medium text-slate-500 dark:text-slate-400">
            {financeT.search || "Search"}
          </label>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={financeT.searchPlaceholder || "Search transactions..."}
            className={inputClass}
          />
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-medium text-slate-500 dark:text-slate-400">
            {financeT.filter || "Filter"}
          </label>

          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className={inputClass}
          >
            <option value="day">{financeT.filters?.day || "Day"}</option>
            <option value="month">{financeT.filters?.month || "Month"}</option>
            <option value="range">{financeT.range || "Range"}</option>
          </select>
        </div>

        {filterType === "day" && (
          <div>
            <label className="mb-1.5 block text-xs font-medium text-slate-500 dark:text-slate-400">
              {financeT.filters?.day || "Day"}
            </label>

            <input
              type="date"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className={inputClass}
            />
          </div>
        )}

        {filterType === "month" && (
          <div>
            <label className="mb-1.5 block text-xs font-medium text-slate-500 dark:text-slate-400">
              {financeT.filters?.month || "Month"}
            </label>

            <input
              type="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className={inputClass}
            />
          </div>
        )}

        {filterType === "range" && (
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1.5 block text-xs font-medium text-slate-500 dark:text-slate-400">
                {financeT.from || "From"}
              </label>

              <input
                type="month"
                value={startMonth}
                onChange={(e) => setStartMonth(e.target.value)}
                className={inputClass}
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium text-slate-500 dark:text-slate-400">
                {financeT.to || "To"}
              </label>

              <input
                type="month"
                value={endMonth}
                onChange={(e) => setEndMonth(e.target.value)}
                className={inputClass}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}