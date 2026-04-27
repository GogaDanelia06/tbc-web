"use client";

import { createContext, useContext, useEffect, useState } from "react";
import en from "@/messages/en.json";
import ka from "@/messages/ka.json";

type Lang = "ka" | "en";

const translations = {
  ka,
  en,
};

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: typeof ka;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ka");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Lang | null;

    if (savedLang === "ka" || savedLang === "en") {
      setLangState(savedLang);
    }
  }, []);

  function setLang(lang: Lang) {
    setLangState(lang);
    localStorage.setItem("lang", lang);
  }

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
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