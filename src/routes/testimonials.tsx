import { ArrowRight, MessageSquareQuote } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero, SectionHeading } from "@/components/site/shared";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials | Blossom Cleaning Services" },
      {
        name: "description",
        content:
          "Customer feedback and service commitment for Blossom Cleaning Services. A clean, professional page that invites enquiries without inventing testimonials.",
      },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Testimonials"
        title="A service commitment built on trust, consistency and professionalism"
        intro="We do not publish unsupported reviews. Instead, we invite clients to speak with us about their experience and service expectations."
      />

      <section className="py-16 md:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-brand-azure-soft p-8 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white">
              <MessageSquareQuote className="h-6 w-6 text-brand-azure" />
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              Blossom Cleaning Services is committed to delivering professional, reliable and consistent cleaning support for homes, organisations and facilities. If you are considering our services, we welcome the opportunity to discuss your requirements and understand the standard you expect.
            </p>
            <p className="mt-4 text-sm font-medium text-brand-navy">
              Please contact us directly to discuss your project or service needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="eyebrow text-brand-bronze">Ready to speak with us?</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-brand-navy md:text-3xl">Request a consultation</h2>
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
