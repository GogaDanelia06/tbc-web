type Props = {
  items: string[];
  onSelect: () => void;
};

export default function TransferDropdown({ items, onSelect }: Props) {
  return (
    <div className="absolute left-0 top-9 z-50 w-72 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg dark:border-[#334155] dark:bg-[#1e293b]">
      {items.map((item, index) =>
        item === "-" ? (
          <div
            key={index}
            className="my-1 border-t border-gray-200 dark:border-[#334155]"
          />
        ) : (
          <button
            key={item}
            type="button"
            onClick={onSelect}
            className="block w-full px-5 py-3 text-left text-[15px] text-[#14171f] hover:bg-gray-50 dark:text-white dark:hover:bg-[#0f172a]"
          >
            {item}
          </button>
        )
      )}
    </div>
  );
}