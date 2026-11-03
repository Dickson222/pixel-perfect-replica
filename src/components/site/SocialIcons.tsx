const ICONS: Record<string, string> = {
  Instagram:
    "M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.6.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.6.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2-.1-1.3-.1-1.6-.1-4.9s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.3-.1 1.6-.1 4.9-.1zm0 1.8c-3.1 0-3.5 0-4.8.1-1.1.1-1.5.2-1.7.3-.4.1-.6.3-.9.6-.3.3-.5.5-.6.9-.1.2-.2.6-.3 1.7-.1 1.3-.1 1.7-.1 4.8s0 3.5.1 4.8c.1 1.1.2 1.5.3 1.7.1.4.3.6.6.9.3.3.5.5.9.6.2.1.6.2 1.7.3 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1.1-.1 1.5-.2 1.7-.3.4-.1.6-.3.9-.6.3-.3.5-.5.6-.9.1-.2.2-.6.3-1.7.1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c-.1-1.1-.2-1.5-.3-1.7-.1-.4-.3-.6-.6-.9-.3-.3-.5-.5-.9-.6-.2-.1-.6-.2-1.7-.3-1.3-.1-1.7-.1-4.8-.1zm0 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4zm5.2-3a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z",
  Facebook:
    "M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.6c0-.9.3-1.6 1.6-1.6h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.3v3.2h2.8V21h3.4z",
  TikTok:
    "M16.7 3c.3 1.7 1.5 3.1 3.3 3.4v3c-1.3 0-2.4-.4-3.4-1v6.6c0 3.6-2.6 5.8-5.6 5.8-3 0-5.4-2.3-5.4-5.3 0-3.1 2.6-5.4 5.8-5.3v3.1c-1.5-.2-2.8.8-2.8 2.2 0 1.3 1 2.3 2.4 2.3 1.4 0 2.5-1 2.5-2.6V3h3.2z",
  YouTube:
    "M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.3 5 12 5 12 5s-6.3 0-7.8.4a2.5 2.5 0 0 0-1.8 1.8C2 8.7 2 12 2 12s0 3.3.4 4.8c.2.9.9 1.6 1.8 1.8C5.7 19 12 19 12 19s6.3 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.5.4-4.8.4-4.8s0-3.3-.4-4.8zM10 15V9l5.2 3L10 15z",
};

export function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {Object.entries(ICONS).map(([label, d]) => {
        const href = COMPANY_SOCIALS[label];
        if (!href) return null;
        return (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${COMPANY_NAME} on ${label}`}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-gold hover:text-brand-navy"
          >
            <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="currentColor" aria-hidden="true">
              <path d={d} />
            </svg>
          </a>
        );
      })}
    </div>
  );
}

import { COMPANY } from "@/lib/site";
const COMPANY_SOCIALS: Record<string, string> = Object.fromEntries(
  COMPANY.socials.map((s) => [s.label, s.href]),
);
const COMPANY_NAME = COMPANY.name;
