"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function HeaderLogo() {
  const { root } = useLanguage();

  return (
    <div className="flex items-center gap-3">
      <Image src="/logo.png" alt="Concept" width={34} height={34} />

      <span className="h-8 w-px bg-gray-300 dark:bg-gray-600" />

      <span className="text-2xl font-bold text-gray-500 dark:text-gray-300">
        {root.navbar.brand}
      </span>
    </div>
  );
}