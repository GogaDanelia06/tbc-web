"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRegister() {
    setError("");

    if (!fullName.trim() || !username.trim() || !password.trim()) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);

    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({
        fullName,
        username,
        password,
      }),
    });

   if (!res.ok) {
  let message = "Registration failed";

  try {
    const data = await res.json();
    message = data.error || message;
  } catch {
    message = "Server error. Check terminal logs.";
  }

  setError(message);
  setLoading(false);
  return;
}

    const user = await res.json();
    localStorage.setItem("user", JSON.stringify(user));

    router.push("/dashboard");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f3f4f6] px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-2xl font-bold text-[#1a1a2e]">
          Register
        </h1>

        {error && (
          <div className="mb-4 rounded border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">
            {error}
          </div>
        )}

        <div className="space-y-4">
          <input
            placeholder="Full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="h-11 w-full rounded border border-gray-300 px-4 outline-none focus:border-[#1ab3e8]"
          />

          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="h-11 w-full rounded border border-gray-300 px-4 outline-none focus:border-[#1ab3e8]"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-11 w-full rounded border border-gray-300 px-4 outline-none focus:border-[#1ab3e8]"
          />

          <button
            onClick={handleRegister}
            disabled={loading}
            className="h-12 w-full rounded bg-[#1ab3e8] font-bold text-white"
          >
            {loading ? "..." : "Create account"}
          </button>

          <button
            onClick={() => router.push("/")}
            className="w-full font-bold text-[#1ab3e8] hover:underline"
          >
            Back to login
          </button>
        </div>
      </div>
    </main>
  );
}