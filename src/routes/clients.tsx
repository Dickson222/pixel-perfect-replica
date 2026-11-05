import { ArrowRight, Building2, CheckCircle2 } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero, SectionHeading } from "@/components/site/shared";
import { CLIENTS, SECTORS_SERVED } from "@/lib/site";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Our Clients | Blossom Cleaning Services" },
      {
        name: "description",
        content:
          "Blossom Cleaning Services supports clients across real estate, education, events, commercial and residential sectors in Lagos, Nigeria.",
      },
    ],
  }),
  component: ClientsPage,
});

function ClientsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Clients"
        title="Working with organisations and communities across key sectors"
        intro="Blossom Cleaning Services supports clients in sectors where operational reliability, cleanliness and presentation matter most."
      />

      <section className="py-16 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Client portfolio"
            title="Organisations and businesses we have served"
            intro="The list below reflects identified client and sector experience based on the company profile and business context."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {CLIENTS.map((client) => (
              <div key={client} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-azure-soft">
                  <Building2 className="h-5 w-5 text-brand-azure" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-brand-navy">{client}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Client relationship and sector experience in the cleaning and facility support space.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-16 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Sectors served"
            title="Experience across residential, commercial and operational environments"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {SECTORS_SERVED.map((sector) => (
              <div key={sector} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-sm">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-azure" />
                <span className="text-sm font-medium text-brand-navy">{sector}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="eyebrow text-brand-bronze">Need a professional cleaning partner?</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-brand-navy md:text-3xl">Speak with our team about your requirements</h2>
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
