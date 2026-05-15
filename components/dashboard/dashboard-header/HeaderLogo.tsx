import Image from "next/image";

export default function HeaderLogo() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/tbc.png" 
        alt="TBC"
        width={34}
        height={34}
      />

      <span className="text-2xl font-bold text-gray-500">
        Concept
      </span>
    </div>
  );
}