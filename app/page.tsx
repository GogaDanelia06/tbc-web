"use client";

import { useState } from "react";
import LoginForm from "@/components/navbar/LoginForm";
import Navbar from "@/components/navbar/Navbar";

type Lang = "ka" | "en";

export default function LoginPage() {
  const [lang, setLang] = useState<Lang>("ka");

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar lang={lang} onLangChange={setLang} />

      <main
        className="relative flex min-h-screen-ish spacing flex-1 items-center overflow-hidden px-6 py-12 md:px-20"
        style={{
          background: `
            radial-gradient(ellipse 55% 75% at 32% 38%, rgba(218,205,186,0.95) 0%, transparent 65%),
            radial-gradient(ellipse 35% 55% at 12% 65%, rgba(198,183,163,0.85) 0%, transparent 55%),
            linear-gradient(155deg, #d8cbb8 0%, #cfc0a5 18%, #b8c4a8 42%, #98aa88 62%, #788a68 78%, #586848 92%, #404e32 100%)
          `,
        }}
      >
        <div className="pointer-events-none absolute bottom-24 right-16 z-10 hidden select-none text-right lg:block">
          <span className="mb-1 block text-[28px] font-light italic leading-snug text-white/50">
            მთავარია
          </span>
          <span className="block text-[64px] font-black leading-none tracking-tight text-white/65">
            შეხვდეს
          </span>
        </div>

        <div
          className="absolute bottom-0 right-48 z-10 hidden h-72 w-36 lg:block"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, rgba(60,75,45,0.45) 30%, rgba(40,55,28,0.65) 70%, rgba(30,42,20,0.8) 100%)",
            clipPath:
              "polygon(38% 0%,62% 0%,72% 10%,76% 28%,82% 55%,88% 100%,12% 100%,18% 55%,24% 28%,28% 10%)",
          }}
        />

        <div className="relative z-20 w-full max-w-3xl">
          <LoginForm lang={lang} />
        </div>
      </main>
    </div>
  );
}