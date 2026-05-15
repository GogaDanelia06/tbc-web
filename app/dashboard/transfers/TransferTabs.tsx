"use client";

import type { TransferType } from "./types";

type Props = {
  type: TransferType;
  setType: (type: TransferType) => void;
  resetMessage: () => void;
  tabs: readonly {
    key: TransferType;
    label: string;
  }[];
};

export default function TransferTabs({
  type,
  setType,
  resetMessage,
  tabs,
}: Props) {
  return (
    <div className="border-b border-gray-200 bg-white dark:border-[#1f2937] dark:bg-[#0f172a]">
      <div className="mx-auto flex max-w-7xl gap-10 px-6">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => {
              setType(tab.key);
              resetMessage();
            }}
            className={`py-5 text-sm font-semibold transition ${
              type === tab.key
                ? "border-b-4 border-[#1237d5] text-[#1237d5]"
                : "text-gray-500 hover:text-[#1237d5] dark:text-gray-400"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}