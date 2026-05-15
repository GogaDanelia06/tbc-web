import PasswordInput from "./PasswordInput";

type LoginFieldsProps = {
  t: {
    formTitle: string;
    username: string;
    password: string;
  };
  username: string;
  setUsername: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  error: string;
  setError: (value: string) => void;
  handleSubmit: () => void;
};

export default function LoginFields({
  t,
  username,
  setUsername,
  password,
  setPassword,
  error,
  setError,
  handleSubmit,
}: LoginFieldsProps) {
  const inputBase =
    "w-full h-[42px] sm:h-[44px] md:h-[46px] rounded-[6px] border-[1.5px] border-[#dde2ea] bg-white px-3.5 md:px-4 text-[13px] md:text-[13.5px] text-[#1a2332] outline-none transition-colors placeholder:text-[#b0bac6] focus:border-[#1ab3e8]";

  return (
    <>
      <h2 className="mb-4 text-[18px] font-bold text-[#1a1a2e] md:mb-5 md:text-2xl">
        {t.formTitle}
      </h2>

      {error && (
        <div className="mb-4 flex items-center gap-2 rounded-tr-sm border border-red-200 bg-red-50 px-3 py-2 text-[12px] text-red-600 md:px-3.5 md:py-2.5 md:text-[12.5px]">
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
        className={`${inputBase} mb-3 md:mb-4`}
      />

      <PasswordInput
        t={t}
        password={password}
        setPassword={setPassword}
        setError={setError}
        handleSubmit={handleSubmit}
      />
    </>
  );
}