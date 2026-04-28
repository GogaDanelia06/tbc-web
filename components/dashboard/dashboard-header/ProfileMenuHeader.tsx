"use client";

import Image from "next/image";
import type { User } from "./types";

type ProfileMenuHeaderProps = {
  user: User;
  profileOpen: boolean;
  setProfileOpen: (value: boolean) => void;
  handleLogout: () => void;
};

export default function ProfileMenuHeader({
  user,
  profileOpen,
  setProfileOpen,
  handleLogout,
}: ProfileMenuHeaderProps) {
  return (
    <>
      <button
        type="button"
        onClick={() => setProfileOpen(!profileOpen)}
        className="flex items-center gap-3"
      >
        <span className="font-semibold text-gray-700 dark:text-gray-200">
          {user.fullName}
        </span>

        <Image
          src="/logo.png"
          alt="Profile"
          width={42}
          height={42}
          className="h-10 w-10 rounded-full object-cover"
        />
      </button>

      <button
        type="button"
        onClick={handleLogout}
        className="text-xl text-gray-500 hover:text-red-500 dark:text-gray-400"
        title="Logout"
      >
        ↪
      </button>
    </>
  );
}