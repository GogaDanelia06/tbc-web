import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function SettingsMenu() {
  return (
    <div className="absolute right-0 top-10 z-50 w-44 rounded-xl border border-gray-200 bg-white p-3 shadow-lg dark:border-[#334155] dark:bg-[#1e293b]">
      <div className="space-y-3">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </div>
  );
}