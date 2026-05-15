import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import DashboardLayout from "@/components/dashboard/dashboard-header/DashboardLayout";
import { getDashboardData } from "@/lib/dashboard";
import ka from "@/messages/ka.json";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;

  if (!userId) {
    redirect("/");
  }

  const data = await getDashboardData(Number(userId));

  return <DashboardLayout data={data} labels={ka.dashboard} />;
}