"use client";

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
    <div className="flex items-center gap-4">
      <button
        type="button"
        onClick={() => setProfileOpen(!profileOpen)}
        className="flex items-center gap-3"
      >
        <span className="font-semibold text-gray-700 dark:text-gray-200">
          {user.full_name}
        </span>
      </button>

      <button
        type="button"
        onClick={handleLogout}
        className="text-gray-500 transition hover:text-red-500 dark:text-gray-300"
        aria-label="Logout"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h5a2 2 0 012 2v1"
          />
        </svg>
      </button>
    </div>
  );
}