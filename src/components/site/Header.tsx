import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, Phone, Mail, MapPin, X } from "lucide-react";
import { COMPANY, NAV_LINKS } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-[60] bg-white">
      <div className="hidden bg-brand-navy text-white/90 md:block">
        <div className="container-page flex h-9 items-center justify-between gap-6 text-xs">
          <span className="flex min-w-0 items-center gap-1.5 whitespace-nowrap">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-brand-gold" />
            {COMPANY.addressLine1} {COMPANY.addressLine2}
          </span>
          <span className="flex shrink-0 items-center gap-6">
            <a
              href={`tel:${COMPANY.phoneTel}`}
              className="flex items-center gap-1.5 whitespace-nowrap hover:text-brand-gold"
            >
              <Phone className="h-3.5 w-3.5 text-brand-gold" />
              {COMPANY.phoneDisplay}
            </a>
            <a
              href={`mailto:${COMPANY.email}`}
              className="flex items-center gap-1.5 whitespace-nowrap hover:text-brand-gold"
            >
              <Mail className="h-3.5 w-3.5 text-brand-gold" />
              {COMPANY.email}
            </a>
          </span>
        </div>
      </div>

      <div
        className={`border-b border-border bg-white transition-shadow ${
          scrolled ? "shadow-md shadow-brand-navy/10" : ""
        }`}
      >
        <div className="container-page flex h-[4.5rem] items-center justify-between gap-3">
          <Link
            to="/"
            className="flex min-w-0 shrink items-center gap-2.5"
            aria-label="Blossom Cleaning Services home"
          >
            <img
              src="/blossom-logo-mark.png"
              alt=""
              aria-hidden="true"
              className="h-11 w-11 shrink-0 object-contain"
            />
            <span className="flex min-w-0 flex-col whitespace-nowrap leading-tight">
              <span className="font-display text-sm font-bold tracking-tight text-brand-navy sm:text-base">
                Blossom Cleaning
              </span>
              <span className="mt-0.5 font-heading text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-brand-bronze sm:text-[0.68rem]">
                Services
              </span>
            </span>
          </Link>

          <nav
            className="hidden shrink-0 items-center gap-3 xl:flex 2xl:gap-5"
            aria-label="Main navigation"
          >
            {NAV_LINKS.slice(0, 2).map((l) => (
              <Link
                key={l.href}
                to={l.href}
                activeOptions={{ exact: true }}
                className="nav-link whitespace-nowrap font-heading text-[0.68rem] font-semibold uppercase tracking-wide text-brand-navy transition-colors hover:text-brand-azure 2xl:text-xs data-[status=active]:text-brand-azure"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/services"
              activeOptions={{ exact: true }}
              className="nav-link whitespace-nowrap font-heading text-[0.68rem] font-semibold uppercase tracking-wide text-brand-navy transition-colors hover:text-brand-azure 2xl:text-xs data-[status=active]:text-brand-azure"
            >
              Services
            </Link>
            {NAV_LINKS.slice(2).map((l) => (
              <Link
                key={l.href}
                to={l.href}
                activeOptions={{ exact: l.href === "/" }}
                className="nav-link whitespace-nowrap font-heading text-[0.68rem] font-semibold uppercase tracking-wide text-brand-navy transition-colors hover:text-brand-azure 2xl:text-xs data-[status=active]:text-brand-azure"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/request-a-quote"
              className="whitespace-nowrap rounded-md bg-brand-gold px-2.5 py-2.5 font-heading text-[0.68rem] font-bold uppercase tracking-wide text-brand-navy shadow-sm transition-colors hover:bg-brand-gold/85 2xl:px-3.5 2xl:text-xs"
            >
              Request a Quote
            </Link>
          </nav>

          <button
            type="button"
            className="shrink-0 rounded-md p-2 text-brand-navy transition-colors hover:bg-brand-azure-soft xl:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-x-0 bottom-0 z-[59] overflow-y-auto border-t border-border bg-white transition-transform xl:hidden ${
          scrolled ? "top-[4.5rem]" : "top-[4.5rem] md:top-[6.75rem]"
        } ${mobileOpen ? "translate-x-0" : "invisible translate-x-full"}`}
      >
        <nav className="container-page flex flex-col gap-1 py-6" aria-label="Mobile navigation">
          {NAV_LINKS.slice(0, 2).map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="rounded-lg px-3 py-3 font-heading text-base font-semibold text-brand-navy hover:bg-accent"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/services"
            activeOptions={{ exact: true }}
            className="rounded-lg px-3 py-3 font-heading text-base font-semibold text-brand-navy transition-colors hover:bg-accent data-[status=active]:bg-brand-azure-soft data-[status=active]:text-brand-azure"
          >
            Services
          </Link>
          {NAV_LINKS.slice(2).map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="rounded-lg px-3 py-3 font-heading text-base font-semibold text-brand-navy hover:bg-accent"
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-3 px-3">
            <Link
              to="/request-a-quote"
              className="rounded-md bg-brand-gold px-4 py-3 text-center font-heading text-sm font-bold uppercase tracking-wide text-brand-navy"
            >
              Request a Quote
            </Link>
            <a
              href={`tel:${COMPANY.phoneTel}`}
              className="rounded-md bg-brand-navy px-4 py-3 text-center font-heading text-sm font-semibold text-white"
            >
              Call {COMPANY.phoneDisplay}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
