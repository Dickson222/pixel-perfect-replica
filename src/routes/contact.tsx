import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/shared";
import { COMPANY } from "@/lib/site";
import { EnquiryForm } from "@/components/site/EnquiryForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Blossom Cleaning Services" },
      {
        name: "description",
        content:
          "Contact Blossom Cleaning Services in Lagos, Nigeria. Call, email, WhatsApp or send an enquiry form for your cleaning, janitorial or facility support needs.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact Us"
        title="Reach out for a quote, a service discussion or a facility enquiry"
        intro="We are here to help you discuss your cleaning needs, your residential property requirements or your corporate cleaning project."
      />

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-5">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <p className="eyebrow text-brand-bronze">Head office</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{COMPANY.addressLine1} {COMPANY.addressLine2}</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <p className="eyebrow text-brand-bronze">Call us</p>
              <a href={`tel:${COMPANY.phoneTel}`} className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-brand-navy hover:text-brand-azure">
                <Phone className="h-4 w-4 text-brand-azure" />
                {COMPANY.phoneDisplay}
              </a>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <p className="eyebrow text-brand-bronze">Email us</p>
              <a href={`mailto:${COMPANY.email}`} className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-brand-navy hover:text-brand-azure">
                <Mail className="h-4 w-4 text-brand-azure" />
                {COMPANY.email}
              </a>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <p className="eyebrow text-brand-bronze">WhatsApp</p>
              <a href={COMPANY.whatsapp} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-brand-navy hover:text-brand-azure">
                <MapPin className="h-4 w-4 text-brand-azure" />
                {COMPANY.whatsappDisplay}
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <p className="eyebrow text-brand-bronze">Send an enquiry</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-brand-navy md:text-3xl">Talk to us about your cleaning needs</h2>
            <div className="mt-6">
              <EnquiryForm kind="contact" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="eyebrow text-brand-bronze">Need a quote?</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-brand-navy md:text-3xl">Start your request here</h2>
          </div>
          <Link to="/request-a-quote" className="inline-flex items-center gap-2 rounded-md bg-brand-gold px-6 py-3 font-heading text-sm font-bold uppercase tracking-wide text-brand-navy transition-colors hover:bg-brand-gold/85">
            Request a Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
