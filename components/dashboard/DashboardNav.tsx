"use client";

import { useState } from "react";
import { MailIcon, MessageIcon, SettingsIcon } from "./Icons";
import { useLanguage } from "@/context/LanguageContext";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function DashboardNav() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const navItems = [
    t.dashboard.nav.home,
    t.dashboard.nav.products,
    t.dashboard.nav.transfers,
    t.dashboard.nav.transactions,
    t.dashboard.nav.finance,
    t.dashboard.nav.activation,
  ];

  return (
    <nav className="sticky top-0 z-20 border-b border-[#e5e7eb] bg-white dark:border-[#1f2937] dark:bg-[#020617]">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          {navItems.map((item, index) => (
            <button
              key={item}
              className={`text-[15px] font-semibold ${
                index === 0
                  ? "text-blue-700 dark:text-blue-400"
                  : "text-[#111827] dark:text-gray-300"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="relative flex items-center gap-4 text-gray-600 dark:text-gray-400">
          <MessageIcon />
          <MailIcon />

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="hover:text-blue-700 dark:hover:text-blue-400"
          >
            <SettingsIcon />
          </button>

          {open && (
            <div className="absolute right-0 top-10 w-44 rounded-xl border border-gray-200 bg-white p-3 shadow-lg dark:border-[#334155] dark:bg-[#1e293b]">
              <div className="space-y-3">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}