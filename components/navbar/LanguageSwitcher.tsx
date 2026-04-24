import type { Lang } from "./Navbar";

type LanguageSwitcherProps = {
  lang: Lang;
  onLangChange: (l: Lang) => void;
  mobile?: boolean;
  showGlobe?: boolean;
};

export default function LanguageSwitcher({
  lang,
  onLangChange,
  mobile = false,
  showGlobe = false,
}: LanguageSwitcherProps) {
  const nextLang: Lang = lang === "ka" ? "en" : "ka";
  const label = lang === "ka" ? "ქარ" : "ENG";

  return (
    <button
      type="button"
      onClick={() => onLangChange(nextLang)}
      className={`flex items-center rounded border border-white/35 text-white transition-all hover:bg-white/15 hover:text-white ${
        mobile ? "gap-1 px-2 py-1 text-l" : "gap-1.5 px-2.5 py-1 text-l"
      }`}
    >
      {showGlobe && (
        <svg
          className={mobile ? "h-3.5 w-3.5" : "h-3.5 w-3.5"}
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
      )}

      <span className="font-medium">{label}</span>
    </button>
  );
}