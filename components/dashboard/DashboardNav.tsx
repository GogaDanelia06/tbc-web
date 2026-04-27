"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { MailIcon, MessageIcon, SettingsIcon } from "./Icons";
import { useLanguage } from "@/context/LanguageContext";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function DashboardNav() {
  const router = useRouter();
  const pathname = usePathname();
  const { t } = useLanguage();

  const [settingsOpen, setSettingsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

const navItems = [
  { label: t.nav.home, href: "/dashboard", icon: "⌂" },
  { label: t.nav.products, href: "/dashboard/products", icon: "▣" },
  { label: t.nav.transfers, href: "/dashboard/transfers", icon: "↔" },
  { label: t.nav.transactions, href: "/dashboard/transactions", icon: "▤" },
  { label: t.nav.finance, href: "/dashboard/finance", icon: "◔" },
  { label: t.nav.activation, href: "/dashboard/activation", icon: "✓" },
];

  const bottomItems = navItems.slice(0, 5);

  function goTo(href: string) {
    router.push(href);
    setMenuOpen(false);
  }

  function isActive(href: string) {
    return pathname === href;
  }

  return (
    <>
      <nav className="sticky top-0 z-20 hidden border-b border-[#e5e7eb] bg-white dark:border-[#1f2937] dark:bg-[#020617] lg:block">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-6">
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => goTo(item.href)}
                className={`text-[15px] font-semibold ${
                  isActive(item.href)
                    ? "text-blue-700 dark:text-blue-400"
                    : "text-[#111827] dark:text-gray-300"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="relative flex items-center gap-4 text-gray-600 dark:text-gray-400">
            <MessageIcon />
            <MailIcon />

            <button
              type="button"
              onClick={() => setSettingsOpen(!settingsOpen)}
              className="hover:text-blue-700 dark:hover:text-blue-400"
            >
              <SettingsIcon />
            </button>

            {settingsOpen && (
              <div className="absolute right-0 top-10 z-50 w-44 rounded-xl border border-gray-200 bg-white p-3 shadow-lg dark:border-[#334155] dark:bg-[#1e293b]">
                <div className="space-y-3">
                  <LanguageSwitcher />
                  <ThemeToggle />
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      <nav className="sticky top-0 z-20 hidden border-b border-[#e5e7eb] bg-white dark:border-[#1f2937] dark:bg-[#020617] sm:block lg:hidden">
        <div className="flex h-14 items-center justify-end gap-5 px-6 text-gray-600 dark:text-gray-400">
          <MessageIcon />
          <MailIcon />

          <button onClick={() => setSettingsOpen(!settingsOpen)}>
            <SettingsIcon />
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="text-3xl leading-none text-gray-600 dark:text-gray-300"
          >
            ☰
          </button>

          {settingsOpen && (
            <div className="absolute right-16 top-12 z-50 w-44 rounded-xl border border-gray-200 bg-white p-3 shadow-lg dark:border-[#334155] dark:bg-[#1e293b]">
              <div className="space-y-3">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>
            </div>
          )}
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-50 hidden sm:block lg:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="absolute inset-0 bg-black/40"
          />

          <aside className="absolute right-0 top-0 h-full w-80 bg-white p-6 shadow-2xl dark:bg-[#020617]">
            <div className="mb-8 flex items-center justify-between">
              <h3 className="text-xl font-bold text-[#14171f] dark:text-white">
                Menu
              </h3>

              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="text-3xl text-gray-500 dark:text-gray-300"
              >
                ×
              </button>
            </div>

            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => goTo(item.href)}
                  className={`block w-full rounded-xl px-4 py-3 text-left text-[15px] font-semibold ${
                    isActive(item.href)
                      ? "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400"
                      : "text-[#111827] hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-[#1e293b]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </aside>
        </div>
      )}

      <div className="sticky top-0 z-20 flex h-14 items-center justify-end gap-5 border-b border-[#e5e7eb] bg-white px-5 text-gray-600 dark:border-[#1f2937] dark:bg-[#020617] dark:text-gray-400 sm:hidden">
        <MessageIcon />
        <MailIcon />

        <button onClick={() => setSettingsOpen(!settingsOpen)}>
          <SettingsIcon />
        </button>

        {settingsOpen && (
          <div className="absolute right-5 top-12 z-50 w-44 rounded-xl border border-gray-200 bg-white p-3 shadow-lg dark:border-[#334155] dark:bg-[#1e293b]">
            <div className="space-y-3">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </div>
        )}
      </div>

      <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-[#e5e7eb] bg-white px-2 py-2 dark:border-[#1f2937] dark:bg-[#020617] sm:hidden">
        <div className="grid grid-cols-5">
          {bottomItems.map((item) => (
            <button
              key={item.href}
              onClick={() => goTo(item.href)}
              className={`flex flex-col items-center justify-center gap-1 text-[11px] font-semibold ${
                isActive(item.href)
                  ? "text-blue-700 dark:text-blue-400"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="max-w-[68px] truncate">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}