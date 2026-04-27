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
  const [user, setUser] = useState<User>({});

  // ✅ IMPORTANT: use root instead of t
  const { root } = useLanguage();

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  function handleLogout() {
    localStorage.removeItem("user");
    router.push("/");
  }

  return (
    <header className="border-b border-[#e5e7eb] bg-white dark:border-[#1f2937] dark:bg-[#020617]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        
        {/* LEFT */}
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Concept" width={34} height={34} />
          <span className="h-8 w-px bg-gray-300 dark:bg-gray-600" />

          {/* ✅ FIXED */}
          <span className="text-2xl font-bold text-gray-500 dark:text-gray-300">
            {root.navbar.brand}
          </span>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">

          {/* USER */}
          <span className="font-semibold text-gray-700 dark:text-gray-200">
            {user.fullName}
          </span>

          <div className="h-10 w-10 rounded-full bg-gray-300 dark:bg-gray-600" />

          {/* LOGOUT */}
          <button
            onClick={handleLogout}
            className="text-xl text-gray-500 hover:text-red-500 dark:text-gray-400"
            title="Logout"
          >
            ↪
          </button>
        </div>
      </div>
    </header>
  );
}