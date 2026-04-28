"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function SettingsPage() {
  const { t } = useLanguage();

  const menuItems = [
    t.profile.contact,
    t.profile.userInfo,
    t.profile.loginDetails,
    t.profile.security,
    t.profile.accounts,
    t.profile.offers,
    t.profile.layout,
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-600 dark:text-gray-200">
        {t.profile.settings}
      </h1>

      <section className="grid overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-[#334155] dark:bg-[#1e293b] md:grid-cols-[280px_1fr]">
        <aside className="border-b border-gray-200 p-8 dark:border-[#334155] md:border-b-0 md:border-r">
          <div className="space-y-6">
            {menuItems.map((item, index) => (
              <button
                key={item}
                className={`block w-full text-left text-lg font-semibold ${
                  index === 0
                    ? "border-b-4 border-blue-700 pb-2 text-[#14171f] dark:border-blue-400 dark:text-white"
                    : "text-gray-600 dark:text-gray-300"
                }`}
              >
                {item}
              </button>
            ))}

            <div className="pt-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
              🌐 {t.profile.language}
            </div>
          </div>
        </aside>

        <main className="p-8">
          <h2 className="text-2xl font-bold text-gray-600 dark:text-gray-200">
            {t.profile.contactTitle}
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            {t.profile.contactDesc}
          </p>

          <div className="mt-8 flex items-center gap-6">
            <Image
              src="/logo.png"
              alt="Profile"
              width={70}
              height={70}
              className="h-[70px] w-[70px] rounded-full object-cover"
            />

            <div className="space-y-1">
              <button className="block font-bold text-blue-700 underline dark:text-blue-400">
                {t.profile.upload}
              </button>
              <button className="block font-bold text-blue-700 underline dark:text-blue-400">
                {t.profile.delete}
              </button>
            </div>
          </div>

          <p className="mt-4 text-sm text-gray-400">
            {t.profile.visibleNote}
          </p>

          <div className="mt-8 max-w-md space-y-5">
            <label className="block">
              <span className="mb-2 block font-semibold text-gray-600 dark:text-gray-300">
                {t.profile.mobile}
              </span>
              <input
                disabled
                value="595560635"
                className="w-full rounded-md border border-gray-200 bg-gray-100 px-4 py-3 text-gray-400 dark:border-[#334155] dark:bg-[#0f172a]"
              />
            </label>

            <label className="block">
              <span className="mb-2 block font-semibold text-gray-600 dark:text-gray-300">
                {t.profile.email}
              </span>
              <input
                disabled
                value="daneliagoga6@gmail.com"
                className="w-full rounded-md border border-gray-200 bg-gray-100 px-4 py-3 text-gray-400 dark:border-[#334155] dark:bg-[#0f172a]"
              />
            </label>

            <label className="block">
              <span className="mb-2 block font-semibold text-gray-600 dark:text-gray-300">
                {t.profile.address}
              </span>
              <input
                disabled
                value="თბილისი, გივი ბერიკაშვილის ქ. N 4..."
                className="w-full rounded-md border border-gray-200 bg-gray-100 px-4 py-3 text-gray-400 dark:border-[#334155] dark:bg-[#0f172a]"
              />
            </label>
          </div>
        </main>
      </section>
    </div>
  );
}