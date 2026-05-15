import { useState } from "react";
import { useRouter } from "next/navigation";

export function useRegisterForm() {
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

    await res.json();

        router.push("/");
  }

  function goToLogin() {
    router.push("/");
  }

  return {
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
  };
}