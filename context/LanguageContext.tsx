"use client";

import { createContext, useContext, useState } from "react";
import en from "@/messages/en.json";
import ka from "@/messages/ka.json";

const translations = { ka, en };

type Lang = "ka" | "en";

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: any;    
  root: any;  
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("ka");

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
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("LanguageContext not found");
  return ctx;
}