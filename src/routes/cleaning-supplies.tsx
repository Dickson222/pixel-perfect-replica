import { ArrowRight, CheckCircle2, Package, ShieldCheck } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero, SectionHeading } from "@/components/site/shared";

export const Route = createFileRoute("/cleaning-supplies")({
  head: () => ({
    meta: [
      { title: "Cleaning Chemicals & Equipment Supply | Blossom Cleaning Services" },
      {
        name: "description",
        content:
          "Professional cleaning chemicals, consumables and equipment supply for homes, offices and commercial environments in Lagos, Nigeria.",
      },
    ],
  }),
  component: CleaningSuppliesPage,
});

function CleaningSuppliesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Cleaning Chemicals & Equipment Supply"
        title="Professional supplies for effective, consistent cleaning operations"
        intro="Blossom Cleaning Services supports homes and businesses with the supply of professional cleaning chemicals, consumables and equipment needed to maintain clean, functional spaces."
      />

      <section className="py-16 md:py-24">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Supply support"
              title="Simple, practical supply solutions for cleaning operations"
            />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              Our supply offering is part of the broader service model used to support both outsourced and in-house cleaning needs. We understand that effective cleaning depends not just on the people performing the work, but also on the tools and materials used to do it well.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Professional cleaning chemicals",
                "Cleaning consumables",
                "Cleaning equipment",
                "Support for home and business cleaning requirements",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-azure" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-brand-azure-soft p-7 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white"><Package className="h-5 w-5 text-brand-azure" /></div>
            <h3 className="mt-5 font-heading text-xl font-semibold text-brand-navy">Support for homes, offices and commercial operations</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Whether a client needs supplies for ongoing cleaning operations or a one-off project, the aim is to provide the right practical support to keep cleaning work effective and consistent.
            </p>
            <div className="mt-5 rounded-xl bg-white p-4">
              <p className="font-heading text-xs font-semibold uppercase tracking-wider text-brand-bronze">Suitable for</p>
              <ul className="mt-3 space-y-2 text-sm text-foreground">
                <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-brand-azure" /> Residential spaces</li>
                <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-brand-azure" /> Offices and commercial facilities</li>
                <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-brand-azure" /> Operational and facility environments</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-16 md:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Need supplies?"
            title="Make a supply enquiry"
            intro="We can discuss your requirements and help identify the right practical supply solution for your space and cleaning plan."
            align="center"
          />
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="eyebrow text-brand-bronze">Need cleaning supplies?</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-brand-navy md:text-3xl">Make a supply enquiry</h2>
          </div>
          <Link to="/request-a-quote" className="inline-flex items-center gap-2 rounded-md bg-brand-gold px-6 py-3 font-heading text-sm font-bold uppercase tracking-wide text-brand-navy transition-colors hover:bg-brand-gold/85">
            Make a Supply Enquiry
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
