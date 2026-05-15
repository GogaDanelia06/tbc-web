"use client";

import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

type Props = {
  activeTab: string;
};

export default function SettingsSidebar({ activeTab }: Props) {
  const router = useRouter();
  const { t } = useLanguage();

  const items = [
    { label: t.profile.contact, tab: "contact" },
    { label: t.profile.userInfo, tab: "personal" },
    { label: t.profile.security, tab: "security" },
    { label: t.profile.loginDetails, tab: "login" },
    { label: t.profile.accounts, tab: "accounts" },
    { label: t.profile.offers, tab: "offers" },
    { label: t.profile.layout, tab: "layout" },
  ];

  return (
    <aside className="border-r border-gray-200 p-6 dark:border-[#1f2937]">
      <div className="space-y-2">
        {items.map((item) => {
          const active = activeTab === item.tab;

          return (
            <button
              key={item.tab}
              onClick={() => router.push(`/dashboard/settings?tab=${item.tab}`)}
              className={`w-full border-l-4 px-4 py-3 text-left text-sm font-medium transition ${
                active
                  ? "border-[#1d4ed8] text-[#1d4ed8]"
                  : "border-transparent text-gray-600 hover:text-[#1d4ed8] dark:text-gray-300"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </aside>
  );
}