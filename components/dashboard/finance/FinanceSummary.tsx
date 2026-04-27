type Props = {
  t: any;
};

export default function FinanceSummary({ t }: Props) {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm dark:bg-[#1e293b]">
      <div className="grid gap-8 md:grid-cols-3 md:items-center">
        <div>
          <p className="text-lg font-semibold text-gray-500 dark:text-gray-400">
            {t.finance.netWorth}
          </p>
          <p className="mt-2 text-3xl font-bold text-gray-500 dark:text-gray-300">
            -209,70₾
          </p>
        </div>

        <div>
          <p className="mb-3 text-lg font-semibold text-gray-500 dark:text-gray-400">
            {t.finance.liabilities}
          </p>

          <div className="flex items-center gap-5">
            <span className="font-semibold text-[#14171f] dark:text-white">
              -1 022,91 GEL
            </span>

            <div className="h-5 flex-1 rounded bg-gray-300 dark:bg-gray-700">
              <div className="h-full w-[58%] rounded bg-green-600" />
            </div>
          </div>
        </div>

        <div className="md:text-right">
          <p className="text-lg font-semibold text-gray-500 dark:text-gray-400">
            {t.finance.assets}
          </p>
          <p className="mt-2 font-semibold text-[#14171f] dark:text-white">
            813,21 GEL
          </p>
        </div>
      </div>
    </section>
  );
}