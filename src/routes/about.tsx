import { ArrowRight, CheckCircle2, Leaf, ShieldCheck, Sparkles, Target } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero, SectionHeading } from "@/components/site/shared";
import { COMPANY } from "@/lib/site";
import teamGroup from "@/assets/team-group.jpg.asset.json";

const VALUES = [
  {
    icon: Sparkles,
    title: "Professionalism",
    text: "We approach every assignment with structure, discipline and a strong sense of responsibility.",
  },
  {
    icon: ShieldCheck,
    title: "Consistency",
    text: "Our operational systems create dependable service across homes, offices and high-traffic facilities.",
  },
  {
    icon: Target,
    title: "Customer Satisfaction",
    text: "Every service is shaped around the needs of the client, the environment and the expected standard of care.",
  },
  {
    icon: Leaf,
    title: "Environmental Responsibility",
    text: "We support cleaner environments through practical hygiene habits and responsible service delivery.",
  },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Blossom Cleaning Services | Professional Cleaning Company in Lagos" },
      {
        name: "description",
        content:
          "Learn about Blossom Cleaning Services, a professional cleaning and facility support company in Lagos, Nigeria. Established in February 2024 and integrated into Blossom Global Multilinks Limited in April 2025.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Us"
        title="Built on reliability, supervision and service excellence"
        intro="Blossom Cleaning Services is a professional cleaning and facilities support company based in Lagos, Nigeria. Established in February 2024 and integrated into Blossom Global Multilinks Limited in April 2025, we deliver structured cleaning solutions and operational support across residential, commercial and high-traffic environments."
        image={teamGroup.url}
      />

      <section className="py-16 md:py-24">
        <div className="container-page grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="A growing cleaning and facility support company with a long-term mindset"
            />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              Blossom Cleaning Services was established in February 2024 to meet a clear need in Lagos: professional, dependable cleaning support for homes, businesses and busy public-facing environments. The company was later integrated into Blossom Global Multilinks Limited in April 2025, creating a stronger base for operational delivery, customer care and long-term service growth.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Our business model is built around trained personnel, effective supervision, reliable service schedules and service continuity. We work across residential, commercial and industrial settings to help clients maintain clean, safe and presentable spaces.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              At every stage, we focus on trust, consistency and customer satisfaction. We believe a good cleaning service should feel organised, responsive and highly professional — and that discipline is what keeps standards high over time.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-brand-azure-soft p-6 shadow-sm">
            <p className="eyebrow text-brand-bronze">Company Snapshot</p>
            <ul className="mt-5 space-y-3 text-sm text-foreground">
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-azure" /> Established: {COMPANY.established}</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-azure" /> Integrated into: {COMPANY.parent} ({COMPANY.integrated})</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-azure" /> Base: {COMPANY.addressLine1} {COMPANY.addressLine2}</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-azure" /> Service focus: Residential, corporate, facilities, janitorial and project-based support</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-16 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Mission & Vision"
            title="A clear operational purpose"
            align="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-7 shadow-sm">
              <p className="eyebrow text-brand-bronze">Mission</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                To deliver efficient, reliable and high-quality cleaning solutions through trained personnel, structured systems and a strong commitment to customer satisfaction.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-7 shadow-sm">
              <p className="eyebrow text-brand-bronze">Vision</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                To be a leading provider of professional cleaning and facility support services across Africa and beyond, recognised for excellence, reliability and quality service delivery, while promoting hygiene awareness and a culture of cleanliness in every environment we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Values"
            title="Operating principles that guide every assignment"
            intro="Our values reflect how we work with clients, teams and the spaces we maintain."
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {VALUES.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-azure-soft">
                  <Icon className="h-5 w-5 text-brand-azure" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-brand-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-navy py-16 text-white md:py-24">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-brand-gold">Our approach</p>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Operationally focused, quality-led and customer-driven</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
              We believe professional cleaning is not just about appearance. It is about consistency, good systems and reliable people doing their work with attention and accountability. That is why our operations are built around trained personnel, supervision, quality checks and thoughtful service planning.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Professionalism",
              "Integrity",
              "Innovation",
              "Quality service delivery",
              "Customer satisfaction",
              "Environmental responsibility",
            ].map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm font-medium text-white/90">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="eyebrow text-brand-bronze">Ready to work with us?</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-brand-navy md:text-3xl">Let’s discuss your cleaning and facility support needs.</h2>
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
