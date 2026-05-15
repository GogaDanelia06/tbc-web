"use client";

export default function DashboardError() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f3f4f6] text-center dark:bg-[#020617]">
      <div>
        <h2 className="text-xl font-semibold text-[#111827] dark:text-white">
          Something went wrong
        </h2>
        <p className="mt-2 text-[#6b7280] dark:text-[#cbd5e1]">
          Please refresh the page or log in again.
        </p>
      </div>
    </div>
  );
}