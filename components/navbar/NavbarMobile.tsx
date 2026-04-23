import type { Lang } from "./Navbar";
import LanguageSwitcher from "./LanguageSwitcher";

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
      <div className="flex items-center gap-2 lg:hidden">
        <LanguageSwitcher
          lang={lang}
          onLangChange={onLangChange}
          mobile
        />

        <button
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
            >
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="absolute left-0 right-0 top-16 z-50 flex flex-col border-t border-white/20 bg-[#1ab3e8] shadow-lg">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="border-b border-white/10 px-6 py-3.5 text-xl text-white transition-colors hover:bg-white/10"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#"
            onClick={() => setOpen(false)}
            className="px-6 py-3.5 text-xl font-semibold text-white hover:bg-white/10"
          >
            {businessLabel}
          </a>
        </div>
      )}
    </>
  );
}