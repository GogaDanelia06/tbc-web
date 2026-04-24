import Image from "next/image";

export default function NavbarLogo({ brand }: { brand: string }) {
  return (
    <a href="#" className="flex shrink-0 items-center gap-3 no-underline">
      <Image
        src="/logo.png"
        alt="Logo"
        width={32}
        height={32}
        className="h-8 w-8 object-contain"
      />
      <span className="h-7 w-px bg-white/40" />
      <span className="whitespace-nowrap text-3xl font-semibold tracking-wide text-white">
        {brand}
      </span>
    </a>
  );
}