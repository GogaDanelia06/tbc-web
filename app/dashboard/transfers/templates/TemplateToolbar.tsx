"use client";

import { Plus, Search } from "lucide-react";

type Props = {
  search: string;
  setSearch: (value: string) => void;
  openAddModal: () => void;
  langMessage: (en: string, ka: string) => string;
};

export default function TemplateToolbar({
  search,
  setSearch,
  openAddModal,
  langMessage,
}: Props) {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
      <div className="relative w-full max-w-sm">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={langMessage("Search template", "შეიყვანე საძიებო ტექსტი")}
          className="h-12 w-full rounded-lg border border-gray-200 bg-white pl-12 pr-4 text-sm outline-none focus:border-[#1237d5] dark:border-[#334155] dark:bg-[#020617] dark:text-white"
        />
      </div>

      <button
        type="button"
        onClick={openAddModal}
        className="flex h-12 items-center gap-2 rounded-lg px-4 text-sm font-semibold text-[#1237d5] hover:bg-blue-50 dark:hover:bg-[#1e293b]"
      >
        {langMessage("Add template", "შაბლონის დამატება")}
        <Plus className="h-5 w-5" />
      </button>
    </div>
  );
}