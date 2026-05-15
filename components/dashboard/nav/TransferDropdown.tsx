type TransferMenuItem = {
  key: string;
  label: string;
  href: string;
};

type Props = {
  items: TransferMenuItem[];
  goTo: (href: string) => void;
};

export default function TransferDropdown({ items, goTo }: Props) {
  return (
    <div className="absolute left-0 top-10 z-50 w-64 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg dark:border-[#334155] dark:bg-[#1e293b]">
      {items.map((item) => (
        <button
          key={item.key}
          onClick={() => goTo(item.href)}
          className="block w-full px-4 py-3 text-left text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-[#00a3e0] dark:text-gray-300 dark:hover:bg-[#0f172a]"
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}