import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import type { IconName } from "../icons/Icon";
import { Icon } from "../icons/Icon";

export type BrandConfig = {
  href: string;
  mark: string;
  title: string;
  subtitle: string;
};

export type NavItem = {
  key: string;
  label: string;
  icon: IconName;
  active: boolean;
  onClick: () => void;
};

export type SideLink = {
  href: string;
  label: string;
  icon: IconName;
};

export type AppShellProps = {
  brand: BrandConfig;
  navItems: NavItem[];
  sideLinks?: SideLink[];
  children: ReactNode;
  storageKey?: string;
};

type Theme = "light" | "dark";
type SidebarState = "expanded" | "collapsed";

function readStoredValue<T extends string>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  return (window.localStorage.getItem(key) as T | null) ?? fallback;
}

export function AppShell({
  brand,
  navItems,
  sideLinks = [],
  children,
  storageKey = "turkuaz-shell",
}: AppShellProps) {
  const [theme, setTheme] = useState<Theme>(() => readStoredValue<Theme>(`${storageKey}:theme`, "light"));
  const [sidebarCollapsed, setSidebarCollapsed] = useState(
    () => readStoredValue<SidebarState>(`${storageKey}:sidebar`, "expanded") === "collapsed",
  );

  useEffect(() => {
    window.localStorage.setItem(`${storageKey}:theme`, theme);
  }, [storageKey, theme]);

  useEffect(() => {
    window.localStorage.setItem(`${storageKey}:sidebar`, sidebarCollapsed ? "collapsed" : "expanded");
  }, [sidebarCollapsed, storageKey]);

  return (
    <div className={sidebarCollapsed ? "app-shell sidebar-collapsed" : "app-shell"} data-theme={theme}>
      <aside className="sidebar">
        <div className="shell-header">
          <a className="brand" href={brand.href}>
            <span className="brand-mark">{brand.mark}</span>
            <span className="brand-copy">
              <strong>{brand.title}</strong>
              <small>{brand.subtitle}</small>
            </span>
          </a>
        </div>

        <nav className="nav-list" aria-label="Admin navigation">
          {navItems.map((item) => (
            <button
              className={item.active ? "nav-button active" : "nav-button"}
              key={item.key}
              type="button"
              title={item.label}
              onClick={item.onClick}
            >
              <Icon name={item.icon} size={18} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        {sideLinks.length > 0 && (
          <div className="side-links">
            {sideLinks.map((link) => (
              <a href={link.href} key={link.href} title={link.label}>
                <Icon name={link.icon} size={16} />
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        )}

        <div className="sidebar-controls" aria-label="Настройки интерфейса">
          <button
            className="nav-button sidebar-control"
            type="button"
            title={sidebarCollapsed ? "Показать меню" : "Скрыть меню"}
            onClick={() => setSidebarCollapsed((value) => !value)}
          >
            <Icon name={sidebarCollapsed ? "menu" : "panel"} size={18} />
            <span>{sidebarCollapsed ? "Развернуть" : "Свернуть"}</span>
          </button>
          <button
            className="nav-button sidebar-control"
            type="button"
            title={theme === "dark" ? "Светлая тема" : "Темная тема"}
            onClick={() => setTheme((value) => (value === "dark" ? "light" : "dark"))}
          >
            <Icon name={theme === "dark" ? "sun" : "moon"} size={18} />
            <span>{theme === "dark" ? "Светлая" : "Темная"}</span>
          </button>
        </div>
      </aside>

      <main className="workspace">
        <div className="shell-mobile-bar">
          <button
            className="shell-icon-button"
            type="button"
            title={sidebarCollapsed ? "Показать меню" : "Скрыть меню"}
            onClick={() => setSidebarCollapsed((value) => !value)}
          >
            <Icon name="menu" size={18} />
          </button>
          <strong>{brand.title}</strong>
          <button
            className="shell-icon-button"
            type="button"
            title={theme === "dark" ? "Светлая тема" : "Темная тема"}
            onClick={() => setTheme((value) => (value === "dark" ? "light" : "dark"))}
          >
            <Icon name={theme === "dark" ? "sun" : "moon"} size={18} />
          </button>
        </div>
        {children}
      </main>
    </div>
  );
}
