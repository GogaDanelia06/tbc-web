"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { User } from "./types";
import ProfileMenuHeader from "./ProfileMenuHeader";
import ProfileMenuItems from "./ProfileMenuItems";
import ProfileMenuActions from "./ProfileMenuActions";

type ProfileMenuProps = {
  user: User;
};

export default function ProfileMenu({ user }: ProfileMenuProps) {
  const router = useRouter();

  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setProfileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function goToSettings(tab: string = "contact") {
    setProfileOpen(false);
    router.push(`/dashboard/settings?tab=${tab}`);
  }

  function handleLogout() {
    localStorage.removeItem("user");
    router.push("/");
  }

  return (
    <div ref={profileRef} className="relative flex items-center gap-4">
      <ProfileMenuHeader
        user={user}
        profileOpen={profileOpen}
        setProfileOpen={setProfileOpen}
        handleLogout={handleLogout}
      />

      {profileOpen && (
        <div className="absolute right-8 top-14 z-50 w-80 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl dark:border-[#334155] dark:bg-[#1e293b]">
          <ProfileMenuItems user={user} goToSettings={goToSettings} />
          <ProfileMenuActions />
        </div>
      )}
    </div>
  );
}