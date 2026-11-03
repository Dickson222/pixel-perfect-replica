import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { COMPANY, NAV_LINKS, SERVICE_PAGES } from "@/lib/site";
import logoMain from "@/assets/blossom-logo-main.png.asset.json";
import { SocialIcons } from "./SocialIcons";

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white/80">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <div className="inline-block rounded-lg bg-white p-3">
            <img
              src={logoMain.url}
              alt="Blossom Cleaning Services logo"
              className="h-24 w-auto"
            />
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            A professional cleaning and facilities support company in Lagos, Nigeria,
            and a division of {COMPANY.parent}. {COMPANY.positioning}
          </p>
          <p className="mt-4 font-heading text-sm font-semibold uppercase tracking-wider text-brand-gold">
            {COMPANY.tagline}
          </p>
          <div className="mt-5">
            <SocialIcons />
          </div>
        </div>

        <nav aria-label="Footer quick links">
          <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              ...NAV_LINKS,
              { label: "Request a Quote", href: "/request-a-quote" },
              { label: "FAQs", href: "/faq" },
              { label: "Testimonials", href: "/testimonials" },
              { label: "Company Policies", href: "/company-policies" },
            ].map((l) => (
              <li key={l.href}>
                <Link to={l.href} className="transition-colors hover:text-brand-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer service links">
          <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
            Our Services
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {SERVICE_PAGES.map((s) => (
              <li key={s.slug}>
                <Link to={`/${s.slug}`} className="transition-colors hover:text-brand-gold">
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/services" className="transition-colors hover:text-brand-gold">
                All Services
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
            Contact Us
          </h3>
          <ul className="mt-4 space-y-3.5 text-sm">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
              <span>
                {COMPANY.addressLine1}
                <br />
                {COMPANY.addressLine2}
              </span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
              <a href={`tel:${COMPANY.phoneTel}`} className="hover:text-brand-gold">
                {COMPANY.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
              <a href={`mailto:${COMPANY.email}`} className="break-all hover:text-brand-gold">
                {COMPANY.email}
              </a>
            </li>
          </ul>
          <a
            href={COMPANY.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/15"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {COMPANY.name} — A Division of {COMPANY.parent}.
            All rights reserved.
          </p>
          <p className="flex items-center gap-4">
            <Link to="/company-policies" className="hover:text-brand-gold">
              Company Policies
            </Link>
            <span>Lagos, Nigeria</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
