"use client";

import HeaderLogo from "./HeaderLogo";
import ProfileMenu from "./ProfileMenu";
import type { User } from "./types";

export default function DashboardHeader({ user }: { user: User }) {
  return (
    <header className="relative border-b border-[#e5e7eb] bg-white dark:border-[#1f2937] dark:bg-[#020617]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <HeaderLogo />
        <ProfileMenu user={user} />
      </div>
    </header>
  );
}