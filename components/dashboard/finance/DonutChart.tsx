import { Segment } from "./types";

type Props = {
  total: number;
  segments: Segment[];
  label: string;
  period: string;
};

export default function DonutChart({ total, segments, label, period }: Props) {
  const radius = 115;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;

  return (
    <div className="flex flex-col items-center">
      <div className="relative h-[320px] w-[320px]">
        <svg viewBox="0 0 300 300" className="h-full w-full -rotate-90">
          <circle
            cx="150"
            cy="150"
            r={radius}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="34"
          />

          {segments.map((item) => {
            const dash = (item.percent / 100) * circumference;
            const currentOffset = offset;
            offset += dash;

            return (
              <circle
                key={item.id}
                cx="150"
                cy="150"
                r={radius}
                fill="none"
                stroke={item.color}
                strokeWidth="34"
                strokeDasharray={`${dash} ${circumference - dash}`}
                strokeDashoffset={-currentOffset}
              />
            );
          })}
        </svg>

        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <p className="text-3xl font-bold text-[#14171f] dark:text-white">
              {total.toFixed(2)}₾
            </p>
            <p className="text-gray-500 dark:text-gray-400">{label}</p>
          </div>
        </div>
      </div>

      <p className="mt-5 text-gray-500 dark:text-gray-400">{period}</p>
    </div>
  );
}