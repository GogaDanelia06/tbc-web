"use client";

import { useRouter } from "next/navigation";

type LoginActionsProps = {
  t: {
    remember: string;
    forgot: string;
    login: string;
    register: string;
  };
  remember: boolean;
  setRemember: (value: boolean) => void;
  loading: boolean;
  handleSubmit: () => void;
};

export default function LoginActions({
  t,
  remember,
  setRemember,
  loading,
  handleSubmit,
}: LoginActionsProps) {
  const router = useRouter();

  return (
    <>
      <div className="mb-5 flex justify-between text-sm text-gray-500">
        <label className="flex gap-2">
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          {t.remember}
        </label>

        <button className="text-[#1ab3e8] hover:underline">
          {t.forgot}
        </button>
      </div>

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="mb-4 h-12 rounded bg-[#1ab3e8] text-white"
      >
        {loading ? "..." : t.login}
      </button>

      <button
        type="button"
        onClick={() => router.push("/register")}
        className="font-bold text-[#1ab3e8] hover:underline"
      >
        {t.register}
      </button>
    </>
  );
}