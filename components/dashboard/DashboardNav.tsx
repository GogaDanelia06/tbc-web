import { MailIcon, MessageIcon, SettingsIcon } from "./Icons";

const navItems = [
  "მთავარი",
  "ჩემი პროდუქტები",
  "გადარიცხვები",
  "ტრანზაქციები",
  "ჩემი ფინანსები",
  "პროდუქტების აქტივაცია",
];

export default function DashboardNav() {
  return (
    <nav className="sticky top-0 z-20 border-b border-[#e5e7eb] bg-white">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          {navItems.map((item, index) => (
            <button
              key={item}
              className={`text-[15px] font-semibold ${
                index === 0 ? "text-blue-700" : "text-[#111827]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4 text-gray-600">
          <MessageIcon />
          <MailIcon />
          <SettingsIcon />
        </div>
      </div>
    </nav>
  );
}