"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type User = {
  fullName?: string;
};

export default function DashboardHeader() {
  const router = useRouter();
  const [user, setUser] = useState<User>({});

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
    <header className="border-b border-[#e5e7eb] bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        
        {/* LEFT */}
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Concept" width={34} height={34} />
          <span className="h-8 w-px bg-gray-300" />
          <span className="text-2xl font-bold text-gray-500">concept</span>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          
          {/* USER NAME */}
          <span className="font-semibold text-gray-700">
            {user.fullName}
          </span>
          
          <div className="h-10 w-10 rounded-full bg-gray-300" />

          {/* LOGOUT BUTTON */}
          <button
            onClick={handleLogout}
            className="text-xl text-gray-500 transition hover:text-red-500"
            title="Logout"
          >
            ↪
          </button>
        </div>
      </div>
    </header>
  );
}