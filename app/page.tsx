"use client";

import { useState, useEffect } from "react";
import Navbar, { type Lang } from "@/components/navbar/Navbar";
import LoginForm from "@/components/login/LoginForm";
import DashboardLoading from "@/components/ui/DashboardLoading";

export default function LoginPage() {
  
  const [loading, setLoading] = useState(true);
  const [lang, setLang] = useState<Lang>("ka");

  useEffect(() => {
  const timer = setTimeout(() => setLoading(false), 1000);
  return () => clearTimeout(timer);
}, []);

if (loading) {
  return <DashboardLoading />;
}

  return (
    <>
      <Navbar lang={lang} onLangChange={setLang} />

<main
  className="flex min-h-[calc(100vh-96px)] items-center justify-center bg-cover bg-center px-4"
  style={{ backgroundImage: "url('/bg.jpg')" }}
>
  <LoginForm lang={lang} />
</main>
    </>
  );
}