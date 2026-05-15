"use client";

import { createContext, useContext, useEffect, useState } from "react";

import en from "@/messages/en.json";
import ka from "@/messages/ka.json";

type Lang = "en" | "ka";

const translations = { en, ka };

type Translations = typeof en;

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations["dashboard"];
  root: Translations;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLangState] = useState<Lang>("ka");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Lang | null;

    if (savedLang === "en" || savedLang === "ka") {
      setLangState(savedLang);
    }
  }, []);

  function setLang(value: Lang) {
    setLangState(value);
    localStorage.setItem("lang", value);
  }

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        t: translations[lang].dashboard,
        root: translations[lang],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}