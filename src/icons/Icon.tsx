import type { ReactNode } from "react";

export type IconName =
  | "activity"
  | "arrow"
  | "banknote"
  | "ban"
  | "database"
  | "dashboard"
  | "file"
  | "menu"
  | "moon"
  | "panel"
  | "qr"
  | "refresh"
  | "search"
  | "shield"
  | "sliders"
  | "sun"
  | "webhook"
  | "building"
  | "key"
  | "logout"
  | "plus"
  | "users";

export function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 2,
  };

  const paths: Record<IconName, ReactNode> = {
    activity: <path d="M4 12h4l2-6 4 12 2-6h4" />,
    arrow: (
      <>
        <path d="M7 17 17 7" />
        <path d="M9 7h8v8" />
      </>
    ),
    banknote: (
      <>
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <circle cx="12" cy="12" r="2.5" />
        <path d="M6 9h1M17 15h1" />
      </>
    ),
    ban: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M6.5 6.5 17.5 17.5" />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
        <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
      </>
    ),
    dashboard: (
      <>
        <rect x="3" y="3" width="7" height="8" rx="1" />
        <rect x="14" y="3" width="7" height="5" rx="1" />
        <rect x="14" y="12" width="7" height="9" rx="1" />
        <rect x="3" y="15" width="7" height="6" rx="1" />
      </>
    ),
    file: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6" />
        <path d="M8 13h8M8 17h6" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </>
    ),
    moon: (
      <path d="M20.5 15.2A8.5 8.5 0 0 1 8.8 3.5 7 7 0 1 0 20.5 15.2Z" />
    ),
    panel: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M9 4v16" />
      </>
    ),
    qr: (
      <>
        <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4z" />
        <path d="M14 14h2v2h-2zM18 14h2v6h-4v-2M14 18h2v2h-2z" />
      </>
    ),
    refresh: (
      <>
        <path d="M20 12a8 8 0 0 1-13.7 5.7" />
        <path d="M4 12A8 8 0 0 1 17.7 6.3" />
        <path d="M7 18H4v-3" />
        <path d="M17 6h3v3" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="M20 20l-3.5-3.5" />
      </>
    ),
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />,
    sliders: (
      <>
        <path d="M4 7h8M16 7h4M4 17h4M12 17h8" />
        <circle cx="14" cy="7" r="2" />
        <circle cx="10" cy="17" r="2" />
      </>
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </>
    ),
    webhook: (
      <>
        <path d="M18 16.5a3.5 3.5 0 1 1-2.9 5.5" />
        <path d="M6 16.5a3.5 3.5 0 1 0 2.9 5.5" />
        <path d="M12 3a3.5 3.5 0 1 1-3.3 4.7" />
        <path d="M8.5 16.5 11 12M15.5 16.5 13 12M12 8v4" />
      </>
    ),
    building: (
      <>
        <path d="M5 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
        <path d="M3 21h18" />
        <path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1" />
      </>
    ),
    key: (
      <>
        <circle cx="7.5" cy="14.5" r="3.5" />
        <path d="M10 12 21 1" />
        <path d="M16 6h4v4" />
      </>
    ),
    logout: (
      <>
        <path d="M10 17l5-5-5-5" />
        <path d="M15 12H3" />
        <path d="M21 3v18" />
      </>
    ),
    plus: (
      <>
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
        <circle cx="9.5" cy="7" r="4" />
        <path d="M17 11a3 3 0 0 0 0-6" />
        <path d="M21 21v-2a4 4 0 0 0-3-3.8" />
      </>
    ),
  };

  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" {...common}>
      {paths[name]}
    </svg>
  );
}
