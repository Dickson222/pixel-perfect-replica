import { ArrowRight, CheckCircle2, Mail, Send } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/shared";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { COMPANY } from "@/lib/site";

export const Route = createFileRoute("/request-a-quote")({
  head: () => ({
    meta: [
      { title: "Request a Quote | Blossom Cleaning Services" },
      {
        name: "description",
        content:
          "Request a quote for Blossom Cleaning Services residential, corporate, janitorial and facility support needs in Lagos, Nigeria.",
      },
    ],
  }),
  component: RequestQuotePage,
});

function RequestQuotePage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Request a Quote"
        title="Tell us about your cleaning needs and we’ll respond with the right solution"
        intro="Whether you need corporate office cleaning, janitorial staffing, residential support or a project-based cleaning package, we are ready to discuss your requirements."
      />

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-5">
            <div className="rounded-2xl border border-border bg-brand-azure-soft p-6 shadow-sm">
              <p className="eyebrow text-brand-bronze">Quick enquiry options</p>
              <ul className="mt-4 space-y-3 text-sm text-foreground">
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-azure" />Website form</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-azure" />WhatsApp message</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-azure" />Direct telephone call</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-azure" />Email enquiry</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <p className="eyebrow text-brand-bronze">Direct contact</p>
              <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                <a href={`tel:${COMPANY.phoneTel}`} className="flex items-center gap-2 font-medium text-brand-navy hover:text-brand-azure">
                  <Send className="h-4 w-4 text-brand-azure" />
                  {COMPANY.phoneDisplay}
                </a>
                <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 font-medium text-brand-navy hover:text-brand-azure">
                  <Mail className="h-4 w-4 text-brand-azure" />
                  {COMPANY.email}
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <p className="eyebrow text-brand-bronze">Quotation request form</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-brand-navy md:text-3xl">Complete the form below</h2>
            <div className="mt-6">
              <EnquiryForm kind="quote" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-16 md:py-20">
        <div className="container-page">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <p className="eyebrow text-brand-bronze">Corporate enquiries</p>
            <h3 className="mt-2 font-display text-2xl font-bold text-brand-navy">Request long-term cleaning contracts or dedicated janitorial staffing</h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Organisations can enquire about long-term cleaning contracts, commercial cleaning, facility support and dedicated janitorial personnel through the same request process or by contacting our team directly.
            </p>
            <Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-azure hover:underline">
              Speak to our team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
