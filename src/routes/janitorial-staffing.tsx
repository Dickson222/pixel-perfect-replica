import { ArrowRight, CheckCircle2, ClipboardList, Users } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero, SectionHeading } from "@/components/site/shared";
import teamTraining from "@/assets/team-training.jpg.asset.json";

export const Route = createFileRoute("/janitorial-staffing")({
  head: () => ({
    meta: [
      { title: "Janitorial Staffing Services in Lagos | Blossom Cleaning Services" },
      {
        name: "description",
        content:
          "Professional janitorial staffing and workforce management for schools, hotels, commercial facilities and property companies in Lagos and beyond.",
      },
    ],
  }),
  component: JanitorialStaffingPage,
});

function JanitorialStaffingPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Janitorial Staffing"
        title="Trained cleaning personnel deployed with structure and supervision"
        intro="We provide janitorial personnel and workforce support to organisations that need consistent day-to-day cleaning coverage and dependable operational oversight."
        image={teamTraining.url}
      />

      <section className="py-16 md:py-24">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Operational capability"
              title="Dedicated cleaning staff for the environments that need continuity"
            />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              Blossom Cleaning Services deploys trained, supervised cleaning personnel to client facilities on schedules that fit the organisation’s operation. Whether the need is daily, weekly, shift-based or project-specific, our staffing model is designed to keep service reliable and consistent.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Professional janitorial personnel deployment",
                "Dedicated cleaning staff for ongoing operations",
                "Shift-based cleaning programmes",
                "On-site supervision and reporting",
                "Backup personnel for service continuity",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-azure" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-brand-azure-soft p-7 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white"><Users className="h-5 w-5 text-brand-azure" /></div>
            <h3 className="mt-5 font-heading text-xl font-semibold text-brand-navy">Workforce management built around client needs</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              We understand that a cleaning workforce is only as reliable as the supervision and systems behind it. That is why our staffing solution includes operational oversight, structured reporting and continuity planning.
            </p>
            <div className="mt-5 rounded-xl bg-white p-4">
              <p className="font-heading text-xs font-semibold uppercase tracking-wider text-brand-bronze">Included in our approach</p>
              <ul className="mt-3 space-y-2 text-sm text-foreground">
                <li className="flex items-center gap-2"><ClipboardList className="h-4 w-4 text-brand-azure" /> Work schedules and supervision</li>
                <li className="flex items-center gap-2"><ClipboardList className="h-4 w-4 text-brand-azure" /> Quality monitoring</li>
                <li className="flex items-center gap-2"><ClipboardList className="h-4 w-4 text-brand-azure" /> Coverage planning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-16 md:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Typical clients"
            title="Organisations that rely on dependable janitorial support"
            align="center"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              "Corporate organisations",
              "Schools and educational institutions",
              "Hotels and hospitality businesses",
              "Real estate companies and property managers",
              "Commercial facilities",
              "Multi-site operational environments",
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
            <p className="eyebrow text-brand-bronze">Need staffing support?</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-brand-navy md:text-3xl">Request janitorial staffing</h2>
          </div>
          <Link to="/request-a-quote" className="inline-flex items-center gap-2 rounded-md bg-brand-gold px-6 py-3 font-heading text-sm font-bold uppercase tracking-wide text-brand-navy transition-colors hover:bg-brand-gold/85">
            Request Janitorial Staffing
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
