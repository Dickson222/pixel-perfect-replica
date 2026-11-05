import { ArrowRight, Building2, CheckCircle2, ShieldCheck } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero, SectionHeading } from "@/components/site/shared";
import photoLobby from "@/assets/photo-mopping-lobby.jpg.asset.json";

export const Route = createFileRoute("/corporate-cleaning")({
  head: () => ({
    meta: [
      { title: "Corporate & Commercial Cleaning in Lagos | Blossom Cleaning Services" },
      {
        name: "description",
        content:
          "Corporate and commercial cleaning services in Lagos for offices, commercial facilities, real estate, hospitality and schools. Structured operations with supervision and quality assurance.",
      },
    ],
  }),
  component: CorporateCleaningPage,
});

function CorporateCleaningPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Corporate & Commercial Cleaning"
        title="Reliable cleaning operations for business environments and facilities"
        intro="From office blocks to commercial facilities, we provide cleaning support for organisations that need consistent presentation, strong supervision and dependable service delivery."
        image={photoLobby.url}
      />

      <section className="py-16 md:py-24">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Business-focused service"
              title="Professional cleaning for property managers, companies and commercial properties"
            />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              Blossom Cleaning Services supports offices, commercial buildings, schools, hotels, event venues and facility management clients with organised cleaning programmes that match the pace and demands of a commercial environment.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Office and commercial building cleaning",
                "Routine maintenance cleaning on scheduled frequencies",
                "Janitorial support and on-site supervision",
                "Flexible workforce deployment for continued operations",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-azure" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-brand-azure-soft p-7 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white"><Building2 className="h-5 w-5 text-brand-azure" /></div>
            <h3 className="mt-5 font-heading text-xl font-semibold text-brand-navy">Built for long-term service relationships</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              We support organisations that need ongoing cleaning coverage, dependable personnel and quality assurance. Our approach is built around structure, accountability and responsiveness to the needs of each client.
            </p>
            <div className="mt-5 rounded-xl bg-white p-4">
              <p className="font-heading text-xs font-semibold uppercase tracking-wider text-brand-bronze">Core operational strengths</p>
              <ul className="mt-3 space-y-2 text-sm text-foreground">
                <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-brand-azure" /> On-site supervision</li>
                <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-brand-azure" /> Quality assurance routines</li>
                <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-brand-azure" /> Shift-based deployment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-16 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Who we support"
            title="We work across the environments that depend on consistency and professionalism"
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Corporate offices",
              "Commercial buildings",
              "Real estate companies",
              "Property managers",
              "Hotels and hospitality businesses",
              "Schools and educational institutions",
              "Event centres",
              "Facility management organisations",
            ].map((item) => (
              <div key={item} className="rounded-xl border border-border bg-card p-4 text-sm font-medium text-brand-navy shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="eyebrow text-brand-bronze">Need a commercial cleaning partner?</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-brand-navy md:text-3xl">Request a corporate cleaning proposal</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/request-a-quote" className="inline-flex items-center gap-2 rounded-md bg-brand-gold px-6 py-3 font-heading text-sm font-bold uppercase tracking-wide text-brand-navy transition-colors hover:bg-brand-gold/85">
              Request a Corporate Proposal
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-brand-navy/20 px-6 py-3 font-heading text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-azure-soft">
              Speak to Our Team
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
