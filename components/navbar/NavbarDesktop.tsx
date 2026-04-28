import type { Lang } from "./Navbar";

interface NavbarDesktopProps {
  lang: Lang;
  links: { label: string; href: string }[];
  businessLabel: string;
  onLangChange: (l: Lang) => void;
}

export default function NavbarDesktop({
  lang,
  links,
  businessLabel,
  onLangChange,
}: NavbarDesktopProps) {
  return (
    <nav className="hidden items-center gap-6 lg:flex">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          className="whitespace-nowrap text-sm text-white/90 transition-opacity hover:text-white hover:underline font-bold"
        >
          {link.label}
        </a>
      ))}


      <a
        href="#"
        className="flex items-center gap-1.5 whitespace-nowrap text-base font-semibold text-white"
      >
        <svg
          className="h-4.5 w-4.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
        {businessLabel}
      </a>
    </nav>
  );
}