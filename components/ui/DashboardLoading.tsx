export default function DashboardLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f3f4f6] text-[#6b7280] dark:bg-[#020617] dark:text-[#cbd5e1]">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#dbeafe] border-t-[#00a3e0]" />

        <p className="text-sm font-medium">
          Loading dashboard...
        </p>
      </div>
    </div>
  );
}