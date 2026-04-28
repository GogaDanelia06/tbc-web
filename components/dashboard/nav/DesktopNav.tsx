import { MailIcon, MessageIcon, SettingsIcon } from "../Icons";
import TransferDropdown from "./TransferDropdown";
import SettingsMenu from "./SettingsMenu";

type NavItem = {
  label: string;
  href: string;
  icon: string;
  menu?: boolean;
};

type Props = {
  navItems: NavItem[];
  transferMenu: string[];
  transferOpen: boolean;
  setTransferOpen: (value: boolean) => void;
  settingsOpen: boolean;
  setSettingsOpen: (value: boolean) => void;
  goTo: (href: string) => void;
  isActive: (href: string) => boolean;
};

export default function DesktopNav({
  navItems,
  transferMenu,
  transferOpen,
  setTransferOpen,
  settingsOpen,
  setSettingsOpen,
  goTo,
  isActive,
}: Props) {
  return (
    <nav className="sticky top-0 z-20 hidden border-b border-[#e5e7eb] bg-white dark:border-[#1f2937] dark:bg-[#020617] md:block">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-6">
        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.href} className="relative">
              <button
                type="button"
                onClick={() => {
                  if (item.menu) {
                    setTransferOpen(!transferOpen);
                    return;
                  }
                  goTo(item.href);
                }}
                className={`text-[15px] font-semibold ${
                  isActive(item.href) || (item.menu && transferOpen)
                    ? "text-blue-700 dark:text-blue-400"
                    : "text-[#111827] dark:text-gray-300"
                }`}
              >
                {item.label}
              </button>

              {item.menu && transferOpen && (
                <TransferDropdown
                  items={transferMenu}
                  onSelect={() => goTo("/dashboard/transfers")}
                />
              )}
            </div>
          ))}
        </div>

        <div className="relative flex items-center gap-4 text-gray-600 dark:text-gray-400">
          <MessageIcon />
          <MailIcon />

          <button
            type="button"
            onClick={() => setSettingsOpen(!settingsOpen)}
            className="hover:text-blue-700 dark:hover:text-blue-400"
          >
            <SettingsIcon />
          </button>

          {settingsOpen && <SettingsMenu />}
        </div>
      </div>
    </nav>
  );
}