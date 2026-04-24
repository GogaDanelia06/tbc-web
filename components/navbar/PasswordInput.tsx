import { useState } from "react";

type PasswordInputProps = {
  t: {
    password: string;
  };
  password: string;
  setPassword: (value: string) => void;
  setError: (value: string) => void;
  handleSubmit: () => void;
};

export default function PasswordInput({
  t,
  password,
  setPassword,
  setError,
  handleSubmit,
}: PasswordInputProps) {

  return (
    <div className="relative mb-3 md:mb-4">
      <input
        placeholder={t.password}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setError("");
        }}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        className="w-full h-11 sm:h-11 md:h-11 rounded-b-md border-[1.5px] border-[#dde2ea] bg-white px-3.5 pr-10 md:px-4 md:pr-11 text-[13px] md:text-[13.5px] text-[#1a2332] outline-none transition-colors placeholder:text-[#b0bac6] focus:border-[#1ab3e8]"
      />
    </div>
  );
}