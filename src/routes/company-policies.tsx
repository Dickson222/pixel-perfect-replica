import { ArrowRight, ShieldCheck } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/shared";

const policies = [
  {
    title: "Service standards",
    text: "Blossom Cleaning Services is committed to professionalism, consistent quality and client-focused service delivery. We aim to maintain the standard expected by every client while remaining respectful of the property or facility being served.",
  },
  {
    title: "Customer communication",
    text: "We value clear communication with every client. All enquiries are reviewed and followed up with the goal of understanding requirements, discussing scope and aligning expectations before service commencement.",
  },
  {
    title: "Quality assurance",
    text: "Our operations are built around supervision, structured systems and responsible service execution. We strive to maintain quality through consistent attention to detail and reliable operational oversight.",
  },
  {
    title: "Environmental responsibility",
    text: "We support cleaner, healthier environments through practical hygiene awareness and responsible cleaning operations that align with environmental responsibility and customer care.",
  },
];

export const Route = createFileRoute("/company-policies")({
  head: () => ({
    meta: [
      { title: "Company Policies | Blossom Cleaning Services" },
      {
        name: "description",
        content:
          "Blossom Cleaning Services policies overview: service standards, quality assurance, customer communication and environmental responsibility.",
      },
    ],
  }),
  component: CompanyPoliciesPage,
});

function CompanyPoliciesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Company Policies"
        title="Service principles and standards that guide our work"
        intro="The following principles reflect how Blossom Cleaning Services approaches client service, quality, communication and environmental care."
      />

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-5 md:grid-cols-2">
          {policies.map((policy) => (
            <div key={policy.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-azure-soft">
                <ShieldCheck className="h-5 w-5 text-brand-azure" />
              </div>
              <h3 className="mt-4 font-heading text-xl font-semibold text-brand-navy">{policy.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{policy.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="eyebrow text-brand-bronze">Need to discuss a service arrangement?</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-brand-navy md:text-3xl">Request a quote</h2>
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
