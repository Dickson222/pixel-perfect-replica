import { ArrowRight, CheckCircle2, Sparkles, Ticket } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero, SectionHeading } from "@/components/site/shared";
import photoTvConsole from "@/assets/photo-tv-console.jpg.asset.json";

export const Route = createFileRoute("/event-cleaning")({
  head: () => ({
    meta: [
      { title: "Event & Exhibition Cleaning in Lagos | Blossom Cleaning Services" },
      {
        name: "description",
        content:
          "Event and exhibition cleaning support in Lagos for venues, event organisers, hospitality businesses and high-traffic gatherings. Pre-event, during-event and post-event cleaning support.",
      },
    ],
  }),
  component: EventCleaningPage,
});

function EventCleaningPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Event & Exhibition Cleaning"
        title="High-traffic cleaning support that keeps events running smoothly"
        intro="We support event centres, exhibition venues and hospitality clients with practical cleaning coordination before, during and after events."
        image={photoTvConsole.url}
      />

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Event-ready operations"
              title="Cleaning support for venues, exhibitions and high-traffic events"
            />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              Blossom Cleaning Services can support event venues and organisers with cleaning operations that keep spaces guest-ready, neat and operational during busy periods. Our service is designed to suit pre-event preparation, active event support and post-event reset.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Pre-event cleaning and venue readiness",
                "During-event cleaning support for busy touchpoints",
                "Post-event reset and waste management support",
                "Coordination for venues, exhibitions and hospitality operations",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-azure" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-brand-azure-soft p-7 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white"><Ticket className="h-5 w-5 text-brand-azure" /></div>
            <h3 className="mt-5 font-heading text-xl font-semibold text-brand-navy">Efficient cleaning coordination for high-profile moments</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Events and exhibitions depend on presentation, cleanliness and quick-turn support. We help keep the environment guest-ready while also supporting the operational flow behind the scenes.
            </p>
            <div className="mt-5 rounded-xl bg-white p-4">
              <p className="font-heading text-xs font-semibold uppercase tracking-wider text-brand-bronze">Service stages</p>
              <ul className="mt-3 space-y-2 text-sm text-foreground">
                <li className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-brand-azure" /> Pre-event preparation</li>
                <li className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-brand-azure" /> Live event support</li>
                <li className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-brand-azure" /> Post-event reset</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-16 md:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Typical clients"
            title="Built for busy, public-facing environments"
            align="center"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              "Event centres",
              "Exhibition organisers",
              "Hospitality businesses",
              "Venue managers",
              "Event planners",
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
            <p className="eyebrow text-brand-bronze">Planning an event?</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-brand-navy md:text-3xl">Request event cleaning support</h2>
          </div>
          <Link to="/request-a-quote" className="inline-flex items-center gap-2 rounded-md bg-brand-gold px-6 py-3 font-heading text-sm font-bold uppercase tracking-wide text-brand-navy transition-colors hover:bg-brand-gold/85">
            Request Event Cleaning Support
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
