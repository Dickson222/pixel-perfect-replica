import { ArrowRight, Building2, CheckCircle2, Factory } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero, SectionHeading } from "@/components/site/shared";

export const Route = createFileRoute("/industrial-facility-support")({
  head: () => ({
    meta: [
      { title: "Industrial & Facility Support Services | Blossom Cleaning Services" },
      {
        name: "description",
        content:
          "Industrial cleaning and facility support services for busy operational environments in Lagos, Nigeria. Professional support for organisations with structured facility maintenance needs.",
      },
    ],
  }),
  component: IndustrialFacilitySupportPage,
});

function IndustrialFacilitySupportPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Industrial & Facility Support"
        title="Reliable operational support for busy facilities and industrial environments"
        intro="Blossom Cleaning Services supports organisations with practical, structured cleaning and facility support solutions tailored to demanding environments."
      />

      <section className="py-16 md:py-24">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Facility support"
              title="Cleaning and support services built for operational environments"
            />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              Our industrial and facility support services are designed for environments that need dependable cleaning coverage alongside practical operational support. We work with client requirements that call for structured service, supervision and a professional workforce.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Industrial cleaning support",
                "Facility support services",
                "Structured cleaning operations for operational spaces",
                "Workforce support for ongoing site requirements",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-azure" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-brand-azure-soft p-7 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white"><Factory className="h-5 w-5 text-brand-azure" /></div>
            <h3 className="mt-5 font-heading text-xl font-semibold text-brand-navy">Structured support for the environments that keep business moving</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              We help organisations maintain safe, presentable and operationally effective spaces by aligning cleaning schedules, supervision and service planning with the realities of the environment.
            </p>
            <div className="mt-5 rounded-xl bg-white p-4">
              <p className="font-heading text-xs font-semibold uppercase tracking-wider text-brand-bronze">Where this applies</p>
              <ul className="mt-3 space-y-2 text-sm text-foreground">
                <li className="flex items-center gap-2"><Building2 className="h-4 w-4 text-brand-azure" /> Commercial facilities</li>
                <li className="flex items-center gap-2"><Building2 className="h-4 w-4 text-brand-azure" /> Industrial spaces</li>
                <li className="flex items-center gap-2"><Building2 className="h-4 w-4 text-brand-azure" /> High-traffic operational environments</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-16 md:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Operational fit"
            title="Support where structure and consistency matter most"
            align="center"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              "Commercial operations",
              "Industrial environments",
              "Facility management organisations",
              "Busy operational spaces",
            ].map((item) => (
              <div key={item} className="rounded-xl border border-border bg-card p-5 text-sm font-medium text-brand-navy shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="eyebrow text-brand-bronze">Need a facility support solution?</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-brand-navy md:text-3xl">Discuss your facility requirements</h2>
          </div>
          <Link to="/request-a-quote" className="inline-flex items-center gap-2 rounded-md bg-brand-gold px-6 py-3 font-heading text-sm font-bold uppercase tracking-wide text-brand-navy transition-colors hover:bg-brand-gold/85">
            Discuss Your Facility Requirements
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
