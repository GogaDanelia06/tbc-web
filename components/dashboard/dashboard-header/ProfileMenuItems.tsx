"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import type { User } from "./types";

type ProfileMenuItemsProps = {
  user: User;
  goToSettings: (tab?: string) => void;
};

export default function ProfileMenuItems({
  user,
  goToSettings,
}: ProfileMenuItemsProps) {
  const { t } = useLanguage();

  const profileItems = [
    { label: t.profile.contact, tab: "contact" },
    { label: t.profile.userInfo, tab: "user-info" },
    { label: t.profile.loginDetails, tab: "login-details" },
    { label: t.profile.security, tab: "security" },
    { label: t.profile.accounts, tab: "accounts" },
    { label: t.profile.offers, tab: "offers" },
    { label: t.profile.layout, tab: "layout" },
  ];

  return (
    <>
      <button
        type="button"
        onClick={() => goToSettings("contact")}
        className="flex w-full items-center gap-4 border-b border-gray-200 p-5 text-left hover:bg-gray-50 dark:border-[#334155] dark:hover:bg-[#0f172a]"
      >
        <Image
          src="/logo.png"
          alt="Profile"
          width={54}
          height={54}
          className="h-14 w-14 rounded-full object-cover"
        />

        <div>
          <p className="font-semibold text-[#14171f] dark:text-white">
            {user.fullName}
          </p>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            {t.profile.retail}
          </p>
        </div>
      </button>

      {profileItems.map((item) => (
        <button
          key={item.tab}
          type="button"
          onClick={() => goToSettings(item.tab)}
          className="flex w-full items-center justify-between px-6 py-4 text-left text-sm text-[#14171f] hover:bg-gray-50 dark:text-white dark:hover:bg-[#0f172a]"
        >
          <span>{item.label}</span>
          <span>→</span>
        </button>
      ))}
    </>
  );
}