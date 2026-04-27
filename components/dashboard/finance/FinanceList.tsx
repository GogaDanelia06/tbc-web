import { Segment } from "./types";

type Props = {
  title: string;
  segments: Segment[];
};

export default function FinanceList({ title, segments }: Props) {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold text-[#14171f] dark:text-white">
        {title}
      </h2>

      <div className="space-y-4">
        {segments.map((item) => (
          <div key={item.id} className="group flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full text-lg text-white"
                style={{ backgroundColor: item.color }}
              >
                {item.icon}
              </span>

              <div className="flex flex-col">
                <span className="text-[15px] font-semibold text-[#14171f] dark:text-white">
                  {item.label}
                </span>

                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {item.percent.toFixed(2)}%
                </span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <span className="text-[15px] font-semibold text-[#14171f] dark:text-white">
                {item.value.toFixed(2)}₾
              </span>

              <span className="text-xl text-[#00aeef] opacity-0 transition group-hover:opacity-100">
                ›
              </span>
            </div>
          </div>
        ))}

        {segments.length === 0 && (
          <p className="text-gray-500 dark:text-gray-400">
            No cashflow data for this period.
          </p>
        )}
      </div>
    </div>
  );
}