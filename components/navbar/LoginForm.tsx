"use client";

import { useState } from "react";
import en from "@/messages/en.json";
import ka from "@/messages/ka.json";
import Image from "next/image";

type Lang = "ka" | "en";

const translations = { en, ka };

export default function LoginForm({ lang }: { lang: Lang }) {
  const t = translations[lang].loginForm;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const inputBase =
    "w-full h-[50px] rounded-[6px] border-[1.5px] border-[#dde2ea] bg-white px-4 text-[13.5px] text-[#1a2332] outline-none transition-colors placeholder:text-[#b0bac6] focus:border-[#1ab3e8]";

  async function handleSubmit() {
    setError("");

    if (!username.trim() || !password.trim()) {
      setError(t.errEmpty);
      return;
    }

    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setError(t.errWrong);
  }

  return (
    <div className="flex w-full max-w-4xl flex-col rounded-[10px] bg-white shadow-[0_4px_32px_rgba(0,0,0,0.12)] md:flex-row">
      <div className="shrink-0 border-b border-[#e8ecf0] p-8 md:w-56 md:border-b-0 md:border-r md:pr-8">
        <h2 className="mb-2.5 text-[20px] font-bold leading-snug text-[#1a1a2e]">
          {t.qrTitle}
        </h2>

        <p className="mb-5 text-[13px] leading-relaxed text-[#6b7a8d]">
          {t.qrDesc}
        </p>

        <div className="inline-flex items-center justify-center rounded-[10px] border-[1.5px] border-[#dde2ea] bg-white p-3">
            <Image
                  src="/qr.png"
                  alt="QR Code"
                  width={120}
                  height={120}
                  loading="eager"
                  className="w-32 h-auto"
                />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-8">
        <h2 className="mb-5 text-[20px] font-bold text-[#1a1a2e]">
          {t.formTitle}
        </h2>

        {error && (
          <div className="mb-4 flex items-center gap-2 rounded-tr-md border border-red-200 bg-red-50 px-3.5 py-2.5 text-[12.5px] text-red-600">
            <svg
              className="h-4 w-4 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            {error}
          </div>
        )}

        <input
          type="text"
          placeholder={t.username}
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setError("");
          }}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          autoComplete="username"
          className={`${inputBase} mb-3.5`}
        />

        <div className="relative mb-3.5">
          <input
            type={showPass ? "text" : "password"}
            placeholder={t.password}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            autoComplete="current-password"
            className={`${inputBase} pr-11`}
          />

          <button
            type="button"
            onClick={() => setShowPass(!showPass)}
            tabIndex={-1}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 p-0.5 text-[#9aa5b4] transition-colors hover:text-[#1ab3e8]"
          >
            {showPass ? (
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                <line x1="1" y1="1" x2="23" y2="23" />
              </svg>
            ) : (
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        </div>

        <div className="mb-5 flex items-center justify-between">
          <label className="flex cursor-pointer select-none items-center gap-2 text-[13px] text-[#4a5568]">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="h-4 w-4 cursor-pointer accent-[#1ab3e8]"
            />
            {t.remember}
          </label>

          <button
            type="button"
            className="bg-transparent p-0 text-[13px] font-medium text-[#1ab3e8] hover:underline"
          >
            {t.forgot}
          </button>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          className="mb-4 flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-tr-md bg-[#1ab3e8] text-[15px] font-semibold text-white transition-all hover:bg-[#0fa0d4] active:scale-[0.997] active:bg-[#0d8eb9] disabled:cursor-not-allowed disabled:opacity-75"
        >
          {loading ? (
            <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
          ) : (
            <>
              <span className="text-lg">→</span>
              {t.login}
            </>
          )}
        </button>

        <button
          type="button"
          className="bg-transparent text-center text-[14px] font-bold tracking-wide text-[#1ab3e8] hover:underline"
        >
          {t.register}
        </button>
      </div>
    </div>
  );
}