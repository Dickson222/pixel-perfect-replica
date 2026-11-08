import { ArrowRight, CheckCircle2, Users } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero, SectionHeading } from "@/components/site/shared";
export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team | Blossom Cleaning Services" },
      {
        name: "description",
        content:
          "Meet the team behind Blossom Cleaning Services — professional cleaning personnel, supervisors and support staff working to deliver consistent service standards.",
      },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Team"
        title="The people behind consistent, professional service delivery"
        intro="Blossom Cleaning Services is built around trained personnel, operational discipline and a strong focus on supervision, service quality and customer satisfaction."
        image="/images/team-group.jpeg"
      />

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeading
              eyebrow="People-first operations"
              title="A team culture driven by service quality"
            />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              Our work depends on the professionalism and reliability of the people who deliver it.
              Blossom Cleaning Services places priority on trained personnel, thoughtful
              supervision, clear responsibilities and standards that are consistently followed
              across each environment we serve.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              We believe strong service begins with disciplined people, clear operational systems
              and a service mindset that prioritises client satisfaction and quality assurance.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-brand-azure-soft p-7 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white">
              <Users className="h-5 w-5 text-brand-azure" />
            </div>
            <h3 className="mt-5 font-heading text-xl font-semibold text-brand-navy">
              What drives our team
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-foreground">
              {[
                "Training and deployment of suitable personnel",
                "On-site supervision and service checks",
                "Operational efficiency and accountability",
                "Quality-focused service delivery",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-azure" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-16 md:py-20">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Our approach"
                title="Professional conduct and quality-focused service delivery"
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Training and development of personnel",
                  "On-site supervision and routine quality checks",
                  "Accountability and consistency in service delivery",
                  "Strong focus on customer satisfaction",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-border bg-card p-5 text-sm font-medium text-brand-navy shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <img
              src="/images/team-training.jpeg"
              alt="Blossom Cleaning Services personnel attending a team training session"
              className="h-72 w-full rounded-xl object-cover shadow-lg lg:h-96"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="eyebrow text-brand-bronze">Need a professional cleaning team?</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-brand-navy md:text-3xl">
              Let’s talk about your staffing or facility needs
            </h2>
          </div>
          <Link
            to="/request-a-quote"
            className="inline-flex items-center gap-2 rounded-md bg-brand-gold px-6 py-3 font-heading text-sm font-bold uppercase tracking-wide text-brand-navy transition-colors hover:bg-brand-gold/85"
          >
            Request a Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
