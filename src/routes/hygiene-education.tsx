import { ArrowRight, CheckCircle2, Leaf, School } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero, SectionHeading } from "@/components/site/shared";

export const Route = createFileRoute("/hygiene-education")({
  head: () => ({
    meta: [
      { title: "Environmental & Hygiene Education | Blossom Cleaning Services" },
      {
        name: "description",
        content:
          "Environmental and hygiene education from Blossom Cleaning Services to promote cleaner environments, healthier habits and stronger hygiene awareness in communities and organisations.",
      },
    ],
  }),
  component: HygieneEducationPage,
});

function HygieneEducationPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Environmental & Hygiene Education"
        title="Promoting cleaner spaces and better hygiene awareness"
        intro="We support environmental responsibility and hygiene awareness through education and practical awareness that helps people and organisations keep spaces healthier and cleaner."
      />

      <section className="py-16 md:py-24">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Why it matters"
              title="Hygiene education supports healthier spaces and stronger habits"
            />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              Clean environments do not happen by accident. They are shaped by habits, routines and awareness. Blossom Cleaning Services supports hygiene education initiatives that help organisations and communities understand the value of cleanliness, sanitation and environmental responsibility.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Hygiene awareness for homes and organisations",
                "Support for cleaner, healthier environments",
                "Practical education on cleanliness and care",
                "Encouraging environmental responsibility",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-azure" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-brand-azure-soft p-7 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white"><Leaf className="h-5 w-5 text-brand-azure" /></div>
            <h3 className="mt-5 font-heading text-xl font-semibold text-brand-navy">Education that strengthens long-term responsibility</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Promoting hygiene awareness helps create spaces that are not only clean today, but better maintained over time. This aligns with our broader commitment to quality service delivery and environmental responsibility.
            </p>
            <div className="mt-5 rounded-xl bg-white p-4">
              <p className="font-heading text-xs font-semibold uppercase tracking-wider text-brand-bronze">Focus areas</p>
              <ul className="mt-3 space-y-2 text-sm text-foreground">
                <li className="flex items-center gap-2"><School className="h-4 w-4 text-brand-azure" /> Cleaner environments</li>
                <li className="flex items-center gap-2"><School className="h-4 w-4 text-brand-azure" /> Hygiene awareness</li>
                <li className="flex items-center gap-2"><School className="h-4 w-4 text-brand-azure" /> Environmental responsibility</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-16 md:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Who it supports"
            title="Suitable for organisations and communities committed to cleaner environments"
            align="center"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              "Organisations seeking stronger hygiene awareness",
              "Communities prioritising clean environments",
              "Businesses and institutions that value sustainability and cleanliness",
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
            <p className="eyebrow text-brand-bronze">Need to discuss hygiene education?</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-brand-navy md:text-3xl">Make an enquiry</h2>
          </div>
          <Link to="/request-a-quote" className="inline-flex items-center gap-2 rounded-md bg-brand-gold px-6 py-3 font-heading text-sm font-bold uppercase tracking-wide text-brand-navy transition-colors hover:bg-brand-gold/85">
            Make an Enquiry
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
