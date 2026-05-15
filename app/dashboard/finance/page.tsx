import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getDashboardData } from "@/lib/dashboard";
import FinanceClient from "@/components/dashboard/finance/FinanceClient";

export const dynamic = "force-dynamic";

export default async function FinancePage() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;

  const userIdNumber = Number(userId);

  if (!userId || Number.isNaN(userIdNumber)) {
    redirect("/");
  }

let data;

try {
  data = await getDashboardData(userIdNumber);
} catch {
  redirect("/");
}

return <FinanceClient data={data} />;
  }
