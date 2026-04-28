"use client";

import { useEffect, useState } from "react";
import HeaderLogo from "./HeaderLogo";
import ProfileMenu from "./ProfileMenu";
import type { User } from "./types";

export default function DashboardHeader() {
  const [user, setUser] = useState<User>({});

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  return (
    <header className="relative border-b border-[#e5e7eb] bg-white dark:border-[#1f2937] dark:bg-[#020617]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <HeaderLogo />
        <ProfileMenu user={user} />
      </div>
    </header>
  );
}