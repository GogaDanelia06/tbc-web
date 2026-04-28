"use client";

import { useState } from "react";
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

  const navItems = getNavItems(t);
  const transferMenu = getTransferMenu(t);

  function goTo(href: string) {
    router.push(href);
    setMenuOpen(false);
    setTransferOpen(false);
  }

  function isActive(href: string) {
    return pathname === href;
  }

  return (
    <>
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
    </>
  );
}