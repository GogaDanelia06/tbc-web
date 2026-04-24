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
  className="relative flex flex-1 items-center justify-center h-screen overflow-hidden px-6 md:px-20 py-12
             bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat"
>

        <div className="relative z-10 w-full max-w-[760px] px-4 sm:px-6 md:px-0">
  <LoginForm lang={lang} />
</div>
      </main>
    </div>
  );
}