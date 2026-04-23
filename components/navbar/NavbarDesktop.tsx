import type { Lang } from "./Navbar";
import LanguageSwitcher from "./LanguageSwitcher";

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
          className="whitespace-nowrap text-xl text-white/90 transition-opacity hover:text-white hover:underline"
        >
          {link.label}
        </a>
      ))}

      <div className="flex items-center gap-1">
        <svg
          className="mr-1 h-3.5 w-3.5 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>

        <LanguageSwitcher lang={lang} onLangChange={onLangChange} />
      </div>

      <a
        href="#"
        className="flex items-center gap-1.5 whitespace-nowrap border-b-2 border-white pb-0.5 text-[13px] font-semibold text-white"
      >
        <svg
          className="h-3.5 w-3.5"
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