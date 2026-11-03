import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { ChevronDown, Menu, Phone, Mail, MapPin, X } from "lucide-react";
import { COMPANY, NAV_LINKS, SERVICE_PAGES } from "@/lib/site";
import logoMain from "@/assets/blossom-logo-main.png.asset.json";

function ServicesDropdown() {
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();
  const active = SERVICE_PAGES.some((s) => location.pathname === `/${s.slug}`);

  const enter = () => {
    if (timer.current) clearTimeout(timer.current);
    setOpen(true);
  };
  const leave = () => {
    timer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      className="relative"
      onMouseEnter={enter}
      onMouseLeave={leave}
      onFocus={() => setOpen(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1 font-heading text-[0.82rem] font-semibold uppercase tracking-wide transition-colors hover:text-brand-azure ${
          active ? "text-brand-azure" : "text-brand-navy"
        }`}
      >
        Services
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`absolute left-1/2 top-full z-50 w-[26rem] max-w-[calc(100vw-2rem)] -translate-x-1/2 pt-3 transition-opacity ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="grid grid-cols-2 gap-1 rounded-xl border border-border bg-popover p-2 shadow-xl shadow-brand-navy/10">
          {SERVICE_PAGES.map((s) => (
            <Link
              key={s.slug}
              to={`/${s.slug}`}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-brand-navy transition-colors hover:bg-accent hover:text-brand-navy"
            >
              {s.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="hidden bg-brand-navy text-white/90 md:block">
        <div className="container-page flex h-9 items-center justify-between text-xs">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-brand-gold" />
            {COMPANY.addressLine1} {COMPANY.addressLine2}
          </span>
          <span className="flex items-center gap-6">
            <a href={`tel:${COMPANY.phoneTel}`} className="flex items-center gap-1.5 hover:text-brand-gold">
              <Phone className="h-3.5 w-3.5 text-brand-gold" />
              {COMPANY.phoneDisplay}
            </a>
            <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-1.5 hover:text-brand-gold">
              <Mail className="h-3.5 w-3.5 text-brand-gold" />
              {COMPANY.email}
            </a>
          </span>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`border-b border-border bg-background transition-shadow ${
          scrolled ? "shadow-md shadow-brand-navy/5" : ""
        }`}
      >
        <div className="container-page flex h-[4.5rem] items-center justify-between gap-4">
          <Link to="/" className="flex shrink-0 items-center" aria-label="Blossom Cleaning Services home">
            <img
              src={logoMain.url}
              alt="Blossom Cleaning Services — A Division of Blossom Global Multilinks Ltd"
              className="h-14 w-auto"
            />
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
            {NAV_LINKS.slice(0, 2).map((l) => (
              <Link
                key={l.href}
                to={l.href}
                activeOptions={{ exact: true }}
                className="font-heading text-[0.82rem] font-semibold uppercase tracking-wide text-brand-navy transition-colors hover:text-brand-azure data-[status=active]:text-brand-azure"
              >
                {l.label}
              </Link>
            ))}
            <ServicesDropdown />
            {NAV_LINKS.slice(2).map((l) => (
              <Link
                key={l.href}
                to={l.href}
                activeOptions={{ exact: l.href === "/" }}
                className="font-heading text-[0.82rem] font-semibold uppercase tracking-wide text-brand-navy transition-colors hover:text-brand-azure data-[status=active]:text-brand-azure"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/request-a-quote"
              className="rounded-md bg-brand-gold px-4 py-2.5 font-heading text-[0.82rem] font-bold uppercase tracking-wide text-brand-navy shadow-sm transition-colors hover:bg-brand-gold/85"
            >
              Request a Quote
            </Link>
          </nav>

          <button
            type="button"
            className="rounded-md p-2 text-brand-navy lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-x-0 bottom-0 top-[4.5rem] z-40 overflow-y-auto border-t border-border bg-background transition-transform lg:hidden ${
          mobileOpen ? "translate-x-0" : "invisible translate-x-full"
        }`}
      >
        <nav className="container-page flex flex-col gap-1 py-6" aria-label="Mobile navigation">
          {[...NAV_LINKS.slice(0, 2)].map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="rounded-lg px-3 py-3 font-heading text-base font-semibold text-brand-navy hover:bg-accent"
            >
              {l.label}
            </Link>
          ))}
          <button
            type="button"
            aria-expanded={mobileServicesOpen}
            onClick={() => setMobileServicesOpen((v) => !v)}
            className="flex items-center justify-between rounded-lg px-3 py-3 font-heading text-base font-semibold text-brand-navy hover:bg-accent"
          >
            Services
            <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileServicesOpen && (
            <div className="ml-3 flex flex-col border-l-2 border-brand-azure/40 pl-3">
              {SERVICE_PAGES.map((s) => (
                <Link
                  key={s.slug}
                  to={`/${s.slug}`}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-brand-navy/85 hover:bg-accent"
                >
                  {s.title}
                </Link>
              ))}
              <Link
                to="/services"
                className="rounded-lg px-3 py-2.5 text-sm font-semibold text-brand-azure hover:bg-accent"
              >
                View all services
              </Link>
            </div>
          )}
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
