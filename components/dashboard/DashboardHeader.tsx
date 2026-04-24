import Image from "next/image";

export default function DashboardHeader() {
  return (
    <header className="border-b border-[#e5e7eb] bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Concept" width={34} height={34} />
          <span className="h-8 w-px bg-gray-300" />
          <span className="text-2xl font-bold text-gray-500">concept</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-gray-300" />
          <button className="text-2xl text-gray-500">↪</button>
        </div>
      </div>
    </header>
  );
}