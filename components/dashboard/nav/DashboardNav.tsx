"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { useLanguage } from "@/context/LanguageContext";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { getNavItems, getTransferMenu } from "./navItems";

export default function DashboardNav() {
  const router = useRouter();
  const pathname = usePathname();
  const { t } = useLanguage();

  const [settingsOpen, setSettingsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [transferOpen, setTransferOpen] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);

  const navItems = getNavItems(t);
  const transferMenu = getTransferMenu(t);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setSettingsOpen(false);
        setTransferOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function goTo(href: string) {
    router.push(href);

    setMenuOpen(false);
    setTransferOpen(false);
    setSettingsOpen(false);
  }

  function isActive(href: string) {
    return pathname === href;
  }

  return (
    <div ref={navRef}>
      <DesktopNav
        navItems={navItems}
        transferMenu={transferMenu}
        transferOpen={transferOpen}
        setTransferOpen={setTransferOpen}
        settingsOpen={settingsOpen}
        setSettingsOpen={setSettingsOpen}
        goTo={goTo}
        isActive={isActive}
      />

      <MobileNav
        navItems={navItems}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        settingsOpen={settingsOpen}
        setSettingsOpen={setSettingsOpen}
        goTo={goTo}
        isActive={isActive}
      />
    </div>
  );
}