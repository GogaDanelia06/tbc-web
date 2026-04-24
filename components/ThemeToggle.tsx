"use client";

import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { dark, toggleDark } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleDark}
      className="rounded-lg border border-gray-400 bg-gray-100 px-3 py-1.5 text-sm font-semibold text-gray-800 transition hover:bg-gray-200 dark:border-white/30 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
    >
      {dark ? "Light" : "Dark"}
    </button>
  );
}