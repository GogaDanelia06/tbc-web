"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactInfo() {
  const { t } = useLanguage();

  return (
    <div>
      <h1 className="text-2xl font-semibold text-[#14171f] dark:text-white">
        {t.settings.contactTitle}
      </h1>

      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        {t.settings.contactDesc}
      </p>

      <div className="mt-8 flex items-center gap-5">
        <Image
          src="/logo.png"
          alt="Profile"
          width={64}
          height={64}
          className="rounded-full"
        />

        <div>
          <button className="block text-left text-sm font-semibold text-[#1d4ed8]">
            {t.settings.upload}
          </button>

          <button className="mt-1 block text-left text-sm text-gray-500">
            {t.settings.delete}
          </button>
        </div>
      </div>

      <p className="mt-4 max-w-md text-sm text-gray-400">
        {t.settings.visibleNote}
      </p>

      <div className="mt-8 max-w-md space-y-5">
        <div>
          <label className="mb-2 block text-sm text-gray-600 dark:text-gray-300">
            {t.settings.mobile}
          </label>

          <input
            disabled
            value="577777777"
            className="w-full rounded-md border border-gray-200 bg-gray-100 px-4 py-3 text-gray-400 dark:border-[#334155] dark:bg-[#1e293b]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-600 dark:text-gray-300">
            {t.settings.email}
          </label>

          <input
            disabled
            value="dg@gmail.com"
            className="w-full rounded-md border border-gray-200 bg-gray-100 px-4 py-3 text-gray-400 dark:border-[#334155] dark:bg-[#1e293b]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-600 dark:text-gray-300">
            {t.settings.address}
          </label>

          <input
            disabled
            value="Tbilisi, Georgia"
            className="w-full rounded-md border border-gray-200 bg-gray-100 px-4 py-3 text-gray-400 dark:border-[#334155] dark:bg-[#1e293b]"
          />
        </div>
      </div>
    </div>
  );
}