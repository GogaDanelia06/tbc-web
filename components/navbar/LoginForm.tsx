"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import en from "@/messages/en.json";
import ka from "@/messages/ka.json";
import LoginQR from "./LoginQR";
import LoginActions from "./LoginAction";
import LoginFields from "./LoginFields";

export type Lang = "ka" | "en";

const translations = { en, ka };

export default function LoginForm({ lang }: { lang: Lang }) {
  const router = useRouter();
  const t = translations[lang].loginForm;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    setError("");

    if (!username.trim() || !password.trim()) {
      setError(t.errEmpty);
      return;
    }

    setLoading(true);
    router.push("/dashboard");
  }

  return (
    <div className="flex w-full max-w-[760px] flex-col overflow-hidden rounded-[10px] bg-white shadow-[0_4px_32px_rgba(0,0,0,0.12)] md:flex-row">
      <LoginQR t={t} />

      <div className="flex flex-1 flex-col p-5 sm:p-6 md:p-8">
        <LoginFields
          t={t}
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          error={error}
          setError={setError}
          handleSubmit={handleSubmit}
        />

        <LoginActions
          t={t}
          remember={remember}
          setRemember={setRemember}
          loading={loading}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}