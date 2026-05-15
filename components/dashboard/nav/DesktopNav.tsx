"use client";

import { MailIcon, MessageIcon, SettingsIcon } from "../Icons";

type NavItem = {
  label: string;
  href: string;
  icon: string;
  menu?: boolean;
};

type Props = {
  navItems: NavItem[];
  goTo: (href: string) => void;
  isActive: (href: string) => boolean;
};

export default function DesktopNav({ navItems, goTo, isActive }: Props) {
  return (
    <nav className="sticky top-0 z-20 hidden border-b border-[#e5e7eb] bg-white dark:border-[#1f2937] dark:bg-[#020617] lg:block">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-6">
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => goTo(item.href)}
              className={`text-sm font-medium transition ${
                isActive(item.href)
                  ? "text-[#00a3e0]"
                  : "text-gray-600 hover:text-[#00a3e0] dark:text-gray-300"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <MailIcon />
          <MessageIcon />

          <button
            onClick={() => goTo("/dashboard/settings")}
            className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-[#1f2937]"
          >
            <SettingsIcon />
          </button>
        </div>
      </div>
    </nav>
  );
}