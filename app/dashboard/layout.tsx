import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardNav from "@/components/dashboard/nav/DashboardNav";

export default function DashboardRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f3f4f6] text-[#14171f] dark:bg-black dark:text-white">
      <DashboardHeader />
      <DashboardNav />

      <main className="mx-auto w-full max-w-7xl px-4 py-5 pb-24 sm:px-6 sm:py-8 lg:pb-8">
        {children}
      </main>
    </div>
  );
}