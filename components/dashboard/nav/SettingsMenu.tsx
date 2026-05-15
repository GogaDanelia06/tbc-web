import { useLanguage } from "@/context/LanguageContext";


type Props = {
  goTo: (href: string) => void;
};

export default function SettingsMenu({ goTo }: Props) {
const { t } = useLanguage();

  return (
    <div className="absolute right-0 top-10 z-50 w-48 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg dark:border-[#334155] dark:bg-[#1e293b]">
      <button
        onClick={() => goTo("/dashboard/settings")}
        className="block w-full px-4 py-3 text-left text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-[#00a3e0] dark:text-gray-300 dark:hover:bg-[#0f172a]"
      >
        {t.settingsMenu.settings}
      </button>
    </div>
  );
}