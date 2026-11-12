import {
  ArrowRight,
  CheckCircle2,
  Users,
  ShieldCheck,
  ClipboardCheck,
  GraduationCap,
  UserRoundCheck,
  HeartPulse,
  Handshake,
} from "lucide-react";
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
        title="The People Behind Our Promise of Professionalism, Reliability and Excellence."
        intro="Blossom provides structured workforce management, training, supervision and accountability to support professional cleaning operations across the environments we serve."
        image="/images/team-group.jpeg"
      />

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeading eyebrow="Our Team" title="Our People, Our Standards." />
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
              Meet Our Team
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-foreground">
              {["Operations Lead", "Site Supervisors", "Trained Cleaning Personnel"].map((item) => (
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
                eyebrow="Workforce management"
                title="Professional service supported by clear operational systems"
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Staff Recruitment & Induction",
                  "Practical Training & Development",
                  "On-Site Supervision",
                  "Operational Coordination",
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

      <section className="py-16 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our people and our process"
            title="Structured support at every stage of service"
            intro="Our workforce approach connects preparation, supervision and clear standards so that cleaning operations remain organised and accountable."
            align="center"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {[
              {
                icon: ClipboardCheck,
                title: "Staff Recruitment & Induction",
                text: "Personnel are recruited and inducted into the expectations, responsibilities and service standards of their assignment.",
              },
              {
                icon: GraduationCap,
                title: "Practical Training & Development",
                text: "Practical learning reinforces cleaning procedures, hygiene practices, equipment handling, safety and professional conduct.",
              },
              {
                icon: UserRoundCheck,
                title: "On-Site Supervision",
                text: "Supervisors support day-to-day service delivery and check that agreed cleaning routines are followed.",
              },
              {
                icon: Users,
                title: "Operational Coordination",
                text: "Workforce coordination supports schedules, responsibilities and communication across cleaning operations.",
              },
              {
                icon: ShieldCheck,
                title: "Workforce Continuity",
                text: "Structured workforce management helps support reliable coverage and continuity of service.",
              },
              {
                icon: HeartPulse,
                title: "Health, Safety & Hygiene Standards",
                text: "Our operations place emphasis on safe working practices, hygiene and professional handling of cleaning tasks.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-azure-soft">
                  <Icon className="h-5 w-5 text-brand-azure" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-brand-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-navy py-16 text-white md:py-20">
        <div className="container-page grid items-center gap-8 md:grid-cols-[auto_1fr]">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
            <Handshake className="h-7 w-7 text-brand-gold" />
          </div>
          <div>
            <p className="eyebrow text-brand-gold">Our Commitment to Professional Service</p>
            <h2 className="mt-2 font-display text-2xl font-bold md:text-3xl">
              Client Trust & Staff Assurance
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/80 md:text-base">
              We are committed to clear responsibilities, professional conduct and accountable
              service. Structured training, supervision and operational coordination help clients
              understand how their cleaning operations are supported and help personnel work to
              consistent expectations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="eyebrow text-brand-bronze">Need a professional cleaning team?</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-brand-navy md:text-3xl">
              Request a Quote or Chat with Us on WhatsApp
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/request-a-quote"
              className="inline-flex items-center gap-2 rounded-md bg-brand-gold px-6 py-3 font-heading text-sm font-bold uppercase tracking-wide text-brand-navy transition-colors hover:bg-brand-gold/85"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://wa.me/2348025829223"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-brand-navy/20 px-6 py-3 font-heading text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-azure-soft"
            >
              Chat with Us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
