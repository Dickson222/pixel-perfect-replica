import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { COMPANY } from "@/lib/site";

export function WhatsAppSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.25-1.5A9.9 9.9 0 1 0 12.04 2zm0 1.8a8.1 8.1 0 1 1-4.1 15.1l-.3-.2-3.1.9.9-3-.2-.3a8.1 8.1 0 0 1 6.8-12.5zm-3.3 4c-.2 0-.5 0-.7.3-.2.3-.9.9-.9 2.1 0 1.2.9 2.4 1 2.6.1.2 1.8 2.9 4.5 3.9 2.2.9 2.7.7 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2 0-.1-.2-.2-.4-.3l-1.5-.7c-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1-.6-.3-1.4-.6-2.2-1.3-.6-.6-1-1.2-1.2-1.5-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.2-.5s-.3-1.4-.4-1.9c-.2-.5-.4-.4-.5-.4h-.5z" />
    </svg>
  );
}

export function WhatsAppButton() {
  return (
    <a
      href={COMPANY.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${COMPANY.name} on WhatsApp`}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105"
    >
      <WhatsAppSvg className="h-7 w-7" />
    </a>
  );
}

export function CTABand({
  title,
  body,
  primaryLabel = "Request a Quote",
}: {
  title: string;
  body: string;
  primaryLabel?: string;
}) {
  return (
    <section className="bg-brand-azure-soft">
      <div className="container-page flex flex-col items-start gap-6 py-14 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl font-bold text-brand-navy md:text-3xl">{title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/request-a-quote"
            className="inline-flex items-center gap-2 rounded-md bg-brand-gold px-6 py-3 font-heading text-sm font-bold uppercase tracking-wide text-brand-navy transition-colors hover:bg-brand-gold/85"
          >
            {primaryLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={COMPANY.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-brand-navy/20 px-6 py-3 font-heading text-sm font-semibold text-brand-navy transition-colors hover:bg-white"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-navy">
      {image && (
        <>
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/85 to-brand-navy/40" />
        </>
      )}
      <div className="container-page relative py-16 md:py-24">
        <p className="eyebrow fade-up text-brand-gold">{eyebrow}</p>
        <h1 className="fade-up mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-white md:text-5xl">
          {title}
        </h1>
        <p className="fade-up mt-4 max-w-2xl text-sm leading-relaxed text-white/80 md:text-lg">
          {intro}
        </p>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow text-brand-bronze">{eyebrow}</p>
      <h2 className="mt-2 font-display text-2xl font-bold text-brand-navy md:text-3xl">{title}</h2>
      {intro && (
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{intro}</p>
      )}
    </div>
  );
}
