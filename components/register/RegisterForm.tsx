import { useRegisterForm } from "./useRegisterForm";

export default function RegisterForm() {
  const {
    fullName,
    setFullName,
    username,
    setUsername,
    password,
    setPassword,
    error,
    loading,
    handleRegister,
    goToLogin,
  } = useRegisterForm();

  return (
    <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
      <h1 className="mb-6 text-2xl font-bold text-[#1a1a2e]">
        რეგისტრაცია
      </h1>

      {error && (
        <div className="mb-4 rounded border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">
          {error}
        </div>
      )}

      <div className="space-y-4">
        <input
          placeholder="სრული სახელი"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="h-11 w-full rounded border border-gray-300 px-4 outline-none focus:border-[#1ab3e8]"
        />

        <input
          placeholder="მომხმარებელი"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="h-11 w-full rounded border border-gray-300 px-4 outline-none focus:border-[#1ab3e8]"
        />

        <input
          type="password"
          placeholder="პაროლი"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="h-11 w-full rounded border border-gray-300 px-4 outline-none focus:border-[#1ab3e8]"
        />

        <button
          onClick={handleRegister}
          disabled={loading}
          className="h-12 w-full rounded bg-[#1ab3e8] font-bold text-white disabled:opacity-60"
        >
          {loading ? "..." : "ანგარიშის შექმნა"}
        </button>

        <button
          onClick={goToLogin}
          className="w-full font-bold text-[#1ab3e8] hover:underline"
        >
          უკან დაბრუნება
        </button>
      </div>
    </div>
  );
}