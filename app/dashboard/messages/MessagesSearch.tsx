"use client";

import { Search } from "lucide-react";

type Props = {
  search: string;
  setSearch: (value: string) => void;
  langMessage: (en: string, ka: string) => string;
};

export default function MessagesSearch({
  search,
  setSearch,
  langMessage,
}: Props) {
  return (
    <div className="p-4">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={langMessage("Search messages", "მოძებნე სიტყვით")}
          className="h-14 w-full rounded-xl border border-gray-200 bg-white pl-12 pr-4 outline-none dark:border-[#334155] dark:bg-[#020617] dark:text-white"
        />
      </div>
    </div>
  );
}