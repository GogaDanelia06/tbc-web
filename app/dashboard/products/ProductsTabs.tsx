import type { ProductTab } from "./types";

type Props = {
  tabs: ProductTab[];
  activeTab: string;
  setActiveTab: (value: string) => void;
};

export default function ProductsTabs({
  tabs,
  activeTab,
  setActiveTab,
}: Props) {
  return (
    <div className="border-b border-gray-200 bg-white dark:border-[#334155] dark:bg-[#020617]">
      <div className="flex gap-8 overflow-x-auto px-1">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`shrink-0 border-b-4 px-1 py-4 text-lg font-semibold ${
              activeTab === tab.key
                ? "border-blue-700 text-blue-700 dark:border-blue-400 dark:text-blue-400"
                : "border-transparent text-gray-500 dark:text-gray-400"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}