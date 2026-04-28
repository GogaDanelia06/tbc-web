"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

type User = {
  fullName?: string;
};

export default function DashboardHeader() {
  const router = useRouter();
  const { root, t } = useLanguage();

  const [user, setUser] = useState<User>({});
  const [profileOpen, setProfileOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  function handleLogout() {
    localStorage.removeItem("user");
    router.push("/");
  }

  function goToSettings() {
    setProfileOpen(false);
    router.push("/dashboard/settings");
  }

  return (
    <header className="relative border-b border-[#e5e7eb] bg-white dark:border-[#1f2937] dark:bg-[#020617]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Concept" width={34} height={34} />
          <span className="h-8 w-px bg-gray-300 dark:bg-gray-600" />
          <span className="text-2xl font-bold text-gray-500 dark:text-gray-300">
            {root.navbar.brand}
          </span>
        </div>

        <div className="relative flex items-center gap-4">
          <button
            type="button"
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center gap-3"
          >
            <span className="font-semibold text-gray-700 dark:text-gray-200">
              {user.fullName}
            </span>

            <Image
              src="/.png"
              alt="Profile"
              width={42}
              height={42}
              className="h-10 w-10 rounded-full object-cover"
            />
          </button>

          <button
            onClick={handleLogout}
            className="text-xl text-gray-500 hover:text-red-500 dark:text-gray-400"
            title="Logout"
          >
            ↪
          </button>

          {profileOpen && (
            <div className="absolute right-8 top-14 z-50 w-80 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl dark:border-[#334155] dark:bg-[#1e293b]">
              <button
                type="button"
                onClick={goToSettings}
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

              {[
                t.profile.contact,
                t.profile.userInfo,
                t.profile.loginDetails,
                t.profile.security,
                t.profile.accounts,
                t.profile.offers,
                t.profile.layout,
              ].map((item) => (
                <button
                  key={item}
                  onClick={goToSettings}
                  className="flex w-full items-center justify-between px-6 py-4 text-left text-sm text-[#14171f] hover:bg-gray-50 dark:text-white dark:hover:bg-[#0f172a]"
                >
                  <span>{item}</span>
                  <span>→</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}