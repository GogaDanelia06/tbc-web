import { MailIcon, MessageIcon, SettingsIcon } from "../Icons";
import SettingsMenu from "./SettingsMenu";

type NavItem = {
  label: string;
  href: string;
  icon: string;
  menu?: boolean;
};

type Props = {
  navItems: NavItem[];
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
  settingsOpen: boolean;
  setSettingsOpen: (value: boolean) => void;
  goTo: (href: string) => void;
  isActive: (href: string) => boolean;
};

export default function MobileNav({
  navItems,
  menuOpen,
  setMenuOpen,
  settingsOpen,
  setSettingsOpen,
  goTo,
  isActive,
}: Props) {
  return (
    <>
      <nav className="sticky top-0 z-20 hidden border-b border-[#e5e7eb] bg-white dark:border-[#1f2937] dark:bg-[#020617] sm:block md:hidden">
        <div className="flex h-14 items-center justify-end gap-5 px-6 text-gray-600 dark:text-gray-400">
          <MessageIcon />
          <MailIcon />

          <div className="relative">
            <button type="button" onClick={() => setSettingsOpen(!settingsOpen)}>
              <SettingsIcon />
            </button>

            {settingsOpen && <SettingsMenu />}
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="text-3xl leading-none text-gray-600 dark:text-gray-300"
          >
            ☰
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-50 sm:block md:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="absolute inset-0 bg-black/40"
          />

          <aside className="absolute right-0 top-0 h-full w-80 bg-white p-6 shadow-2xl dark:bg-[#020617]">
            <div className="mb-8 flex items-center justify-between">
              <h3 className="text-xl font-bold text-[#14171f] dark:text-white">
                Menu
              </h3>

              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="text-3xl text-gray-500 dark:text-gray-300"
              >
                ×
              </button>
            </div>

            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => goTo(item.href)}
                  className={`block w-full rounded-xl px-4 py-3 text-left text-[15px] font-semibold ${
                    isActive(item.href)
                      ? "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400"
                      : "text-[#111827] hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-[#1e293b]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </aside>
        </div>
      )}

      <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-[#e5e7eb] bg-white px-2 py-2 dark:border-[#1f2937] dark:bg-[#020617] sm:hidden">
        <div className="grid grid-cols-5">
          {navItems.slice(0, 5).map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => goTo(item.href)}
              className={`flex flex-col items-center justify-center gap-1 text-[11px] font-semibold ${
                isActive(item.href)
                  ? "text-blue-700 dark:text-blue-400"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="truncate">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}