"use client";

import { useRouter } from "next/navigation";

type SettingsMenuProps = {
  settingsOpen: boolean;
  setSettingsOpen: (value: boolean) => void;
};

export default function SettingsMenu({
  settingsOpen,
  setSettingsOpen,
}: SettingsMenuProps) {
  const router = useRouter();

  function goToSettings() {
    setSettingsOpen(false);
    router.push("/dashboard/settings?tab=contact");
  }

  if (!settingsOpen) return null;

  return (
    <div className="absolute right-0 top-12 z-50 w-56 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl dark:border-[#334155] dark:bg-[#1e293b]">
      <button
        type="button"
        onClick={goToSettings}
        className="w-full px-5 py-4 text-left text-sm font-medium text-[#14171f] hover:bg-gray-50 dark:text-white dark:hover:bg-[#0f172a]"
      >
        Settings
      </button>
    </div>
  );
}