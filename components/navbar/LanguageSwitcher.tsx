import type { Lang } from "./Navbar";

const LANGUAGES = [
  { code: "ka", label: "ქარ" },
  { code: "en", label: "ENG" },
] as const;

interface LanguageSwitcherProps {
  lang: Lang;
  onLangChange: (l: Lang) => void;
  mobile?: boolean;
}

export default function LanguageSwitcher({
  lang,
  onLangChange,
  mobile = false,
}: LanguageSwitcherProps) {
  return (
    <div className={`flex ${mobile ? "gap-1" : "items-center gap-1"}`}>
      {LANGUAGES.map((language) => (
        <button
          key={language.code}
          onClick={() => onLangChange(language.code)}
          className={`rounded border transition-all ${
            mobile
              ? "px-1.5 py-0.5 text-[10px]"
              : "px-2 py-0.5 text-[11px]"
          } font-medium ${
            lang === language.code
              ? "border-white bg-white/25 font-semibold text-white"
              : "border-white/35 text-white/80 hover:bg-white/15 hover:text-white"
          }`}
        >
          {language.label}
        </button>
      ))}
    </div>
  );
}