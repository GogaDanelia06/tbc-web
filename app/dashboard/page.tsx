"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import ka from "@/messages/ka.json";

type DashboardData = {
  user: {
    id: number;
    username: string;
    full_name: string;
  };
  accounts: {
    id: number;
    name: string;
    balance: string;
    currency: string;
  }[];
  transactions: {
    id: number;
    title: string;
    amount: string;
    date: string;
  }[];
};

export default function DashboardPage() {
  const router = useRouter();
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    async function loadDashboard() {
      const savedUser = localStorage.getItem("user");

      if (!savedUser) {
        router.push("/");
        return;
      }

      const user = JSON.parse(savedUser);

      const res = await fetch("/api/dashboard", {
        method: "POST",
        body: JSON.stringify({ userId: user.id }),
      });

      if (!res.ok) {
  console.error("Dashboard API failed:", res.status);
  return;
}

const dashboardData = await res.json();
setData(dashboardData);
    }

    loadDashboard();
  }, [router]);

  if (!data) return null;

  return <DashboardLayout data={data} labels={ka.dashboard} />;
}