"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export default function ProfileMenuActions() {
  const { t, lang, setLang } = useLanguage();
  const { dark, toggleDark } = useTheme();

  function toggleLanguage() {
    setLang(lang === "en" ? "ka" : "en");
  }

  return (
    <>
      <div className="border-t border-gray-200 dark:border-[#334155]">
        <button
          type="button"
          onClick={toggleLanguage}
          className="flex w-full items-center justify-between px-6 py-4 text-left text-sm font-semibold text-[#14171f] hover:bg-gray-50 dark:text-white dark:hover:bg-[#0f172a]"
        >
          <span>{t.settings.language}</span>

          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-600 dark:bg-[#0f172a] dark:text-gray-300">
            {lang === "en" ? "EN" : "GE"}
          </span>
        </button>
      </div>

      <div className="border-t border-gray-200 dark:border-[#334155]">
        <button
          type="button"
          onClick={toggleDark}
          className="flex w-full items-center justify-end px-6 py-4 text-left text-sm font-semibold text-[#14171f] hover:bg-gray-50 dark:text-white dark:hover:bg-[#0f172a]"
        >
          <span className="text-xl">{dark ? "🌙" : "☀️"}</span>
        </button>
      </div>
    </>
  );
}