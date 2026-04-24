"use client";

import { useState } from "react";
import en from "@/messages/en.json";
import ka from "@/messages/ka.json";
import NavbarLogo from "./NavbarLogo";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

export type Lang = "ka" | "en";

const translations = { en, ka };

interface NavbarProps {
  lang: Lang;
  onLangChange: (l: Lang) => void;
}

export default function Navbar({ lang, onLangChange }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const t = translations[lang].navbar;

  const links = [
    { label: t.links.bank, href: "" },
    { label: t.links.terms, href: "#" },
    { label: t.links.privacy, href: "#" },
    { label: t.links.contact, href: "#" },
  ];

  return (
    <header className="relative z-50 flex h-24 shrink-0 items-center justify-between bg-[#1ab3e8] px-6 md:px-10">
      <NavbarLogo brand={t.brand} />

      <NavbarDesktop
        lang={lang}
        links={links}
        businessLabel={t.business}
        onLangChange={onLangChange}
      />

      <NavbarMobile
        lang={lang}
        links={links}
        businessLabel={t.business}
        onLangChange={onLangChange}
        open={open}
        setOpen={setOpen}
      />
    </header>
  );
}