"use client";

import RegisterForm from "@/components/register/RegisterForm";

export default function RegisterPage() {
  return (
    <main 
    className="flex min-h-screen items-center justify-center bg-cover bg-center px-4"
    style={{ backgroundImage: "url('/bg.jpg')" }}>
      <RegisterForm />
    </main>
  );
}