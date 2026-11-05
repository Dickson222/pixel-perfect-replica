import { ArrowRight, CheckCircle2, House, Sparkles } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero, SectionHeading } from "@/components/site/shared";
import photoDeepClean from "@/assets/photo-deep-clean.jpg.asset.json";

export const Route = createFileRoute("/residential-cleaning")({
  head: () => ({
    meta: [
      { title: "Residential Cleaning in Lagos | Blossom Cleaning Services" },
      {
        name: "description",
        content:
          "Residential cleaning services in Lagos for homes, apartments, estates and property owners. Deep cleaning, move-in and move-out cleaning and routine maintenance support.",
      },
    ],
  }),
  component: ResidentialCleaningPage,
});

function ResidentialCleaningPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Residential Cleaning"
        title="Professional care for homes, apartments and residential estates"
        intro="We help homeowners, tenants, landlords and property managers keep homes and residential spaces clean, comfortable and consistently presentable."
        image={photoDeepClean.url}
      />

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Clean living spaces"
              title="Home cleaning services with a professional standard"
            />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              Blossom Cleaning Services delivers reliable residential cleaning support for homes, apartments and estates. Our work is tailored to the size of the property, the condition of the space and the client’s preferred cleaning frequency.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Home and apartment cleaning",
                "Estate cleaning and shared residential spaces",
                "Deep cleaning and sanitisation",
                "Move-in and move-out cleaning",
                "Carpet and upholstery care",
                "Routine maintenance cleaning",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-azure" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-brand-azure-soft p-7 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white"><House className="h-5 w-5 text-brand-azure" /></div>
            <h3 className="mt-5 font-heading text-xl font-semibold text-brand-navy">A clean home should feel cared for</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Whether you need regular upkeep or a deeper reset, our team works with attention to detail and a consistent standard so your space remains comfortable and presentable.
            </p>
            <div className="mt-5 rounded-xl bg-white p-4">
              <p className="font-heading text-xs font-semibold uppercase tracking-wider text-brand-bronze">Popular residential requests</p>
              <ul className="mt-3 space-y-2 text-sm text-foreground">
                <li className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-brand-azure" /> Deep cleaning</li>
                <li className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-brand-azure" /> Move-in / move-out cleaning</li>
                <li className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-brand-azure" /> Routine home maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-16 md:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Residential coverage"
            title="Supporting homeowners, tenants and estate communities"
            align="center"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              "Homeowners and private residences",
              "Tenants and landlords",
              "Residential estates and property developments",
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
            <p className="eyebrow text-brand-bronze">Need a cleaner home?</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-brand-navy md:text-3xl">Request residential cleaning</h2>
          </div>
          <Link to="/request-a-quote" className="inline-flex items-center gap-2 rounded-md bg-brand-gold px-6 py-3 font-heading text-sm font-bold uppercase tracking-wide text-brand-navy transition-colors hover:bg-brand-gold/85">
            Request Residential Cleaning
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
