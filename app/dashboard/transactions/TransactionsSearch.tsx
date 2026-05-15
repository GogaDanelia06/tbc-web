import { Search } from "lucide-react";

type Props = {
  search: string;
  setSearch: (value: string) => void;
  placeholder: string;
};

export default function TransactionsSearch({
  search,
  setSearch,
  placeholder,
}: Props) {
  return (
    <div className="flex items-center justify-between gap-5 p-8">
      <div className="relative w-full max-w-sm">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-lg border border-gray-200 bg-white py-4 pl-12 pr-4 text-sm outline-none focus:border-[#1d4ed8] dark:border-[#334155] dark:bg-[#020617] dark:text-white"
        />
      </div>
    </div>
  );
}