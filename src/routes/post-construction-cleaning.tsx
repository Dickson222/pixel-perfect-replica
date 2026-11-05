import { ArrowRight, CheckCircle2, HardHat, Sparkles } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero, SectionHeading } from "@/components/site/shared";
import photoVacuum from "@/assets/photo-vacuum.jpg.asset.json";

export const Route = createFileRoute("/post-construction-cleaning")({
  head: () => ({
    meta: [
      { title: "Post-Construction Cleaning in Lagos | Blossom Cleaning Services" },
      {
        name: "description",
        content:
          "Post-construction and post-renovation cleaning in Lagos for developers, contractors and property managers. Dust removal, detail cleaning and preparation for handover.",
      },
    ],
  }),
  component: PostConstructionCleaningPage,
});

function PostConstructionCleaningPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Post-Construction Cleaning"
        title="Detailed finishing cleaning for newly completed spaces"
        intro="A building may be complete, but it still needs the final cleaning and detailing required to make it presentable, move-in ready and suitable for handover."
        image={photoVacuum.url}
      />

      <section className="py-16 md:py-24">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Project-ready clean"
              title="Support for construction companies, developers and property managers"
            />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              Blossom Cleaning Services supports newly completed residential and commercial developments with post-construction cleaning that prepares spaces for presentation, occupancy and client handover. We focus on the detail and finish that makes the difference between a build site and a ready-to-use space.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Removal of construction dust and debris",
                "Final detailing for completed buildings",
                "Deep cleaning for handover-ready spaces",
                "Support for residential and commercial developments",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-azure" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-brand-azure-soft p-7 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white"><HardHat className="h-5 w-5 text-brand-azure" /></div>
            <h3 className="mt-5 font-heading text-xl font-semibold text-brand-navy">Post-construction cleaning that supports handover and presentation</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              This service is especially useful where internal finishing, renovation or construction work has just been completed and the site requires a deep, detailed clean before use or release.
            </p>
            <div className="mt-5 rounded-xl bg-white p-4">
              <p className="font-heading text-xs font-semibold uppercase tracking-wider text-brand-bronze">Typical outcomes</p>
              <ul className="mt-3 space-y-2 text-sm text-foreground">
                <li className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-brand-azure" /> Presentable finishes</li>
                <li className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-brand-azure" /> Client-ready handover spaces</li>
                <li className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-brand-azure" /> Cleaner move-in environments</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-16 md:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Who we support"
            title="Project partners and property teams relying on a detailed final clean"
            align="center"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              "Construction companies",
              "Property developers",
              "Real estate companies",
              "Building contractors",
              "Residential development managers",
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
            <p className="eyebrow text-brand-bronze">Need final cleaning after construction?</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-brand-navy md:text-3xl">Request a post-construction quote</h2>
          </div>
          <Link to="/request-a-quote" className="inline-flex items-center gap-2 rounded-md bg-brand-gold px-6 py-3 font-heading text-sm font-bold uppercase tracking-wide text-brand-navy transition-colors hover:bg-brand-gold/85">
            Request a Post-Construction Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
