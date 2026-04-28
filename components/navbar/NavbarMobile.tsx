import type { Lang } from "./Navbar";

interface NavbarMobileProps {
  lang: Lang;
  links: { label: string; href: string }[];
  businessLabel: string;
  onLangChange: (l: Lang) => void;
  open: boolean;
  setOpen: (value: boolean) => void;
}

export default function NavbarMobile({
  lang,
  links,
  businessLabel,
  onLangChange,
  open,
  setOpen,
}: NavbarMobileProps) {
  return (
    <>
      <div className="flex items-center gap-3 lg:hidden">

        <a
          href="#"
          className="flex items-center gap-1 whitespace-nowrap text-[12px] font-semibold text-white"
        >
          <svg
            className="h-4 w-4"
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

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="p-1.5 text-white"
          aria-label="Toggle menu"
        >
          {open ? (
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="absolute right-0 top-14 z-50 w-3xs overflow-hidden rounded-bl-2xl border-l border-t border-white/20 bg-[#1ab3e8] shadow-lg lg:hidden">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="block border-b border-white/10 px-6 py-3.5 text-[14px] text-white transition-colors hover:bg-white/10"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}