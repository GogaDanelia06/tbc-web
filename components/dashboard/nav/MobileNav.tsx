"use client";

import {
  MailIcon,
  MessageIcon,
  SettingsIcon,
} from "../Icons";

import SettingsMenu from "./SettingsMenu";

type NavItem = {
  label: string;
  href: string;
  icon: string;
};

type Props = {
  navItems: NavItem[];
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
  settingsOpen: boolean;
  setSettingsOpen: (value: boolean) => void;
  goTo: (href: string) => void;
  isActive: (href: string) => boolean;
};

export default function MobileNav({
  navItems,
  menuOpen,
  setMenuOpen,
  settingsOpen,
  setSettingsOpen,
  goTo,
  isActive,
}: Props) {
  return (
    <>
      <nav className="sticky top-0 z-20 flex border-b border-[#e5e7eb] bg-white dark:border-[#1f2937] dark:bg-[#020617] lg:hidden">
        <div className="flex h-14 w-full items-center justify-between px-4">
          
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => goTo("/dashboard/messages")}
              className="text-gray-600 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400"
            >
              <MessageIcon />
            </button>

            <button
              type="button"
              onClick={() => goTo("/dashboard/messages")}
              className="text-gray-600 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400"
            >
              <MailIcon />
            </button>

            <div className="relative">
              <button
                type="button"
                onClick={() => setSettingsOpen(!settingsOpen)}
                className="text-gray-600 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400"
              >
                <SettingsIcon />
              </button>

              {settingsOpen && (
                <SettingsMenu
                  goTo={goTo}
                />
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="text-3xl leading-none text-gray-600 dark:text-gray-300"
          >
            ☰
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="absolute inset-0 bg-black/40"
          />

          <aside className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl dark:bg-[#020617]">
            <div className="mb-8 flex items-center justify-between border-b border-gray-200 px-6 py-5 dark:border-[#1f2937]">
              <h3 className="text-xl font-bold text-[#14171f] dark:text-white">
                Menu
              </h3>

              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="text-3xl text-gray-500 hover:text-red-500"
              >
                ×
              </button>
            </div>

            <div className="flex flex-col">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => {
                    goTo(item.href);
                    setMenuOpen(false);
                  }}
                  className={`border-b border-gray-100 px-6 py-4 text-left text-sm font-medium transition dark:border-[#1f2937] ${
                    isActive(item.href)
                      ? "bg-blue-50 text-[#00a3e0] dark:bg-[#0f172a]"
                      : "text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-[#0f172a]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </aside>
        </div>
      )}
    </>
  );
}