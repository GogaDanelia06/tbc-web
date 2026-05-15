import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import DashboardHeader from "@/components/dashboard/dashboard-header/DashboardHeader";
import DashboardNav from "@/components/dashboard/nav/DashboardNav";
import { mockUsers } from "@/lib/mockData";

export default async function DashboardRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;

  if (!userId) {
    redirect("/");
  }

  const user = mockUsers.find((u) => u.id === Number(userId));

  if (!user) {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-[#f3f4f6] text-[#14171f] dark:bg-black dark:text-white">
      <DashboardHeader user={user} />
      <DashboardNav />

      <main className="mx-auto w-full max-w-7xl px-4 py-5 pb-24 sm:px-6 sm:py-8 lg:pb-8">
        {children}
      </main>
    </div>
  );
}