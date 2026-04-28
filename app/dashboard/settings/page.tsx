"use client";

import { useSearchParams } from "next/navigation";

import SettingsSidebar from "@/app/dashboard/settings/SettingsSidebar";

import ContactInfo from "@/app/dashboard/settings/ContactInfo";
import PersonalInfo from "@/app/dashboard/settings/PersonalInfo";
import LoginDetails from "@/app/dashboard/settings/LoginDetails";
import SecuritySettings from "@/app/dashboard/settings/SecuritySettings";

export default function SettingsPage() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "contact";

  function renderContent() {
    switch (tab) {
      case "contact":
        return <ContactInfo />;

      case "user-info":
        return <PersonalInfo />;

      case "login-details":
        return <LoginDetails />;

      case "security":
        return <SecuritySettings />;

      case "accounts":
      case "offers":
      case "layout":
        return (
          <div className="text-gray-500 dark:text-gray-400">
            This section will be added next.
          </div>
        );

      default:
        return <ContactInfo />;
    }
  }

  return (
    <main className="bg-[#f4f6f8] px-6 py-8 dark:bg-[#020617]">
      <div className="mx-auto max-w-7xl rounded-2xl border border-gray-200 bg-white dark:border-[#1f2937] dark:bg-[#0f172a]">
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr]">
          <SettingsSidebar activeTab={tab} />

          <section className="p-8">
            {renderContent()}
          </section>
        </div>
      </div>
    </main>
  );
}