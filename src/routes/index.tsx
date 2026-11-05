import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  HardHat,
  Home as HomeIcon,
  Users,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CTABand, SectionHeading } from "@/components/site/shared";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { COMPANY, SERVICE_PAGES, CLIENTS, SECTORS_SERVED } from "@/lib/site";
import { BLOG_ARTICLES } from "@/lib/blog";
import photoLobby from "@/assets/photo-mopping-lobby.jpg.asset.json";
import photoVacuum from "@/assets/photo-vacuum.jpg.asset.json";
import photoDeepClean from "@/assets/photo-deep-clean.jpg.asset.json";
import photoTvConsole from "@/assets/photo-tv-console.jpg.asset.json";
import teamGroup from "@/assets/team-group.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Blossom Cleaning Services | Professional Cleaning Company in Lagos",
      },
      {
        name: "description",
        content:
          "Professional cleaning and facility support company in Lagos, Nigeria — corporate cleaning, residential cleaning, janitorial staffing, post-construction cleaning and more. Request a quote today.",
      },
      { property: "og:title", content: "Blossom Cleaning Services | Professional Cleaning Company in Lagos" },
      {
        property: "og:description",
        content:
          "From corporate offices and residential estates to large-scale facilities and post-construction projects — structured, reliable, professional cleaning solutions in Lagos.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

const WHY_CHOOSE = [
  {
    icon: Users,
    title: "Professionally Trained & Supervised Workforce",
    body: "Our cleaning personnel are trained before deployment and supervised on site, so quality is checked — not assumed.",
  },
  {
    icon: Award,
    title: "Reliable, Consistent Service Delivery",
    body: "Structured schedules and operational systems keep our standard the same in week one and month six.",
  },
  {
    icon: Building2,
    title: "Flexible & Scalable Operations",
    body: "From a single home to multi-site corporate contracts — shifts and personnel scale with your requirements.",
  },
  {
    icon: CheckCircle2,
    title: "Commitment to Quality & Safety",
    body: "Routine inspection processes and the use of safe, effective cleaning agents on every engagement.",
  },
  {
    icon: HardHat,
    title: "Backup Personnel for Continuity",
    body: "Planned personnel cover keeps service running when individuals are absent — no missed days for you.",
  },
  {
    icon: GraduationCap,
    title: "Client-Focused Attention to Detail",
    body: "We listen first, then build the cleaning programme around your space, hours and expectations.",
  },
];

const CAPACITY = [
  "Access to a trained and deployable workforce",
  "On-site supervision on every engagement",
  "Structured operational reporting",
  "Shift-based operations matched to your hours",
  "Backup personnel for service continuity",
];

const FAQ_PREVIEW = [
  {
    q: "What cleaning services does Blossom provide?",
    a: "We provide corporate and commercial cleaning, residential and estate cleaning, janitorial staffing and workforce management, post-construction cleaning, event and exhibition cleaning, industrial and facility support, deep cleaning, cleaning chemicals and equipment supply, and environmental and hygiene education.",
  },
  {
    q: "Can Blossom deploy dedicated janitorial personnel?",
    a: "Yes. We deploy trained, supervised cleaning personnel to client facilities on shifts that fit the client's operation, with structured reporting and backup personnel for continuity.",
  },
  {
    q: "How can a customer request a quotation?",
    a: "Use the Request a Quote form on this website, send us a message on WhatsApp, call us, or send an email. Every request is reviewed by our team and we contact you to discuss requirements — a quotation request is not a confirmed booking.",
  },
];

function Home() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-navy">
        <img
          src={photoLobby.url}
          alt="Blossom Cleaning Services team member mopping a commercial lobby floor"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/50" />
        <div className="container-page relative py-20 md:py-32">
          <p className="eyebrow fade-up text-brand-gold">
            {COMPANY.name} · Lagos, Nigeria
          </p>
          <h1 className="fade-up mt-4 max-w-4xl font-display text-4xl font-bold leading-[1.15] text-white md:text-6xl">
            Professional Cleaning. Reliable Facility Support.{" "}
            <span className="text-brand-gold">Excellence in Every Space.</span>
          </h1>
          <p className="fade-up mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            From corporate offices and residential estates to large-scale facilities and
            post-construction projects, Blossom Cleaning Services delivers structured,
            reliable and professional cleaning solutions tailored to your environment.
          </p>
          <div className="fade-up mt-8 flex flex-wrap gap-3">
            <Link
              to="/request-a-quote"
              className="inline-flex items-center gap-2 rounded-md bg-brand-gold px-7 py-3.5 font-heading text-sm font-bold uppercase tracking-wide text-brand-navy shadow-lg transition-colors hover:bg-brand-gold/85"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 px-7 py-3.5 font-heading text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white/10"
            >
              Explore Our Services
            </Link>
          </div>
          <p className="fade-up mt-8 font-heading text-sm font-semibold uppercase tracking-wider text-white/60">
            {COMPANY.tagline}
          </p>
        </div>
      </section>

      {/* Company introduction */}
      <section className="py-16 md:py-24">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title="A professional cleaning and facility support company built on structure"
            />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              {COMPANY.name} is a professional cleaning and facilities support company
              based in Lagos, Nigeria. Established in {COMPANY.established} and integrated
              into {COMPANY.parent} in {COMPANY.integrated}, we specialise in delivering
              structured cleaning solutions, janitorial staffing and facility support
              services across residential, commercial and high-traffic environments.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Our operations are built around trained personnel, effective supervision,
              operational efficiency and quality assurance — so our clients receive
              reliable, consistent service delivery every time.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 font-heading text-sm font-semibold text-brand-azure hover:underline"
            >
              Learn more about us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={photoVacuum.url}
              alt="Blossom Cleaning Services professional vacuuming an office floor"
              className="h-64 w-full rounded-xl object-cover shadow-md md:h-80"
            />
            <img
              src={teamGroup.url}
              alt="The Blossom Cleaning Services team"
              className="mt-8 h-64 w-full rounded-xl object-cover shadow-md md:h-80"
            />
          </div>
        </div>
      </section>

      {/* Key services */}
      <section className="bg-muted/40 py-16 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="What We Do"
            title="Key services"
            intro="Structured cleaning solutions, janitorial staffing and facility support — for homes, corporate organisations and high-traffic environments."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICE_PAGES.map((s, i) => (
              <Link
                key={s.slug}
                to={`/${s.slug}`}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <span className="font-heading text-xs font-bold text-brand-bronze">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-heading text-base font-semibold text-brand-navy">
                  {s.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.blurb}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-azure">
                  Learn more
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate feature — strong prominence */}
      <section className="py-16 md:py-24">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <img
            src={photoLobby.url}
            alt="Professional cleaning of a corporate lobby in Lagos"
            className="h-80 w-full rounded-xl object-cover shadow-lg lg:h-[26rem]"
          />
          <div>
            <p className="eyebrow text-brand-bronze">Corporate &amp; Commercial</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-brand-navy md:text-4xl">
              Cleaning operations for corporate organisations and commercial facilities
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Corporate and commercial cleaning is at the heart of our business. We work
              with real estate companies, property managers, corporate offices, hotels,
              schools, event centres, construction and property development companies, and
              facility management organisations — delivering structured cleaning
              operations with on-site supervision and quality assurance.
            </p>
            <ul className="mt-5 space-y-2.5">
              {[
                "Office and commercial building cleaning",
                "Routine maintenance cleaning on fixed schedules",
                "Janitorial staffing with on-site supervision",
                "Flexible workforce deployment and contract cleaning",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-azure" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/request-a-quote"
                className="inline-flex items-center gap-2 rounded-md bg-brand-navy px-6 py-3 font-heading text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-navy-deep"
              >
                Request a Corporate Proposal
              </Link>
              <Link
                to="/corporate-cleaning"
                className="inline-flex items-center gap-2 rounded-md border border-brand-navy/20 px-6 py-3 font-heading text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-azure-soft"
              >
                Corporate &amp; Commercial Cleaning
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Residential + janitorial features */}
      <section className="bg-brand-azure-soft py-16 md:py-24">
        <div className="container-page grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl bg-card shadow-md">
            <img
              src={photoDeepClean.url}
              alt="Detailed deep cleaning of a living room in a Lagos home"
              className="h-56 w-full object-cover"
            />
            <div className="p-7">
              <h3 className="font-display text-xl font-bold text-brand-navy">
                Residential Cleaning
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Homes, apartments and residential estates cleaned to a professional
                standard — deep cleaning, move-in and move-out, carpet and upholstery
                care, and regular maintenance cleaning.
              </p>
              <Link
                to="/residential-cleaning"
                className="mt-4 inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-brand-azure hover:underline"
              >
                Explore residential cleaning
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl bg-card shadow-md">
            <img
              src={photoTvConsole.url}
              alt="Detail-focused cleaning of a TV console and shelving"
              className="h-56 w-full object-cover"
            />
            <div className="p-7">
              <h3 className="font-display text-xl font-bold text-brand-navy">
                Janitorial Staffing &amp; Facility Support
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Trained, supervised cleaning personnel deployed to your facility on
                shifts that fit your operation — with structured reporting and backup
                personnel for service continuity.
              </p>
              <Link
                to="/janitorial-staffing"
                className="mt-4 inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-brand-azure hover:underline"
              >
                Explore janitorial staffing
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="py-16 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why Choose Blossom"
            title="Why organisations and homeowners choose Blossom Cleaning Services"
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE.map((w) => (
              <div key={w.title} className="rounded-xl border border-border bg-card p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-azure-soft">
                  <w.icon className="h-5.5 w-5.5 text-brand-azure" />
                </div>
                <h3 className="mt-4 font-heading text-base font-semibold text-brand-navy">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational capacity + sectors */}
      <section className="bg-brand-navy py-16 text-white md:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-brand-gold">Operational Capacity</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-white md:text-3xl">
              Built to deliver, consistently
            </h2>
            <ul className="mt-6 space-y-3">
              {CAPACITY.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-sm text-white/85 md:text-base">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-brand-gold">Industries &amp; Sectors Served</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-white md:text-3xl">
              Experience across Lagos sectors
            </h2>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {SECTORS_SERVED.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/25 px-4 py-2 text-sm text-white/90"
                >
                  {s}
                </span>
              ))}
            </div>
            <Link
              to="/clients"
              className="mt-8 inline-flex items-center gap-2 font-heading text-sm font-semibold text-brand-gold hover:underline"
            >
              See our clients
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Selected clients */}
      <section className="py-16 md:py-20">
        <div className="container-page text-center">
          <p className="eyebrow text-brand-bronze">Selected Clients</p>
          <h2 className="mt-2 font-display text-2xl font-bold text-brand-navy md:text-3xl">
            Organisations we have served
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {CLIENTS.map((c) => (
              <div
                key={c}
                className="flex min-h-20 items-center justify-center rounded-lg border border-border bg-card px-4 py-5"
              >
                <span className="font-heading text-sm font-semibold text-brand-navy">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="bg-muted/40 py-16 md:py-24">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Our Work"
              title="Featured projects"
              intro="A glimpse of our cleaning operations across residential and commercial environments."
            />
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-brand-azure hover:underline"
            >
              View all projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { src: photoLobby.url, alt: "Lobby mopping during a commercial cleaning operation", label: "Commercial Cleaning" },
              { src: photoDeepClean.url, alt: "Deep cleaning of a residential living room", label: "Deep Cleaning" },
              { src: photoVacuum.url, alt: "Vacuum cleaning of office flooring", label: "Office Cleaning" },
              { src: photoTvConsole.url, alt: "Detailed cleaning of home shelving and console", label: "Residential Detail Cleaning" },
            ].map((p) => (
              <Link key={p.src} to="/projects" className="group overflow-hidden rounded-xl shadow-sm">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.src}
                    alt={p.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="bg-card px-4 py-3 font-heading text-sm font-semibold text-brand-navy">
                  {p.label}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quality assurance & safety */}
      <section className="py-16 md:py-24">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Quality Assurance &amp; Safety"
              title="Quality checked. Safely delivered."
            />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              Quality is not an accident — it is supervised. Every Blossom engagement runs
              on routine supervision and inspection processes, carried out by personnel
              trained to work safely and effectively.
            </p>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {[
                "Routine supervision and inspection processes",
                "Use of safe and effective cleaning agents",
                "Compliance with applicable health and safety regulations",
                "Continuous training and development of cleaning personnel",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-azure" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <img
            src={teamGroup.url}
            alt="Blossom Cleaning Services team members standing together"
            className="h-72 w-full rounded-xl object-cover shadow-lg lg:h-96"
          />
        </div>
      </section>

      {/* Insights */}
      <section className="bg-muted/40 py-16 md:py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Insights" title="From the blog" />
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-brand-azure hover:underline"
            >
              All articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {BLOG_ARTICLES.slice(0, 3).map((a) => (
              <Link
                key={a.slug}
                to="/blog/$slug"
                params={{ slug: a.slug }}
                className="flex flex-col rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
              >
                <span className="eyebrow text-brand-bronze">{a.category}</span>
                <h3 className="mt-3 font-heading text-base font-semibold text-brand-navy">
                  {a.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {a.excerpt}
                </p>
                <span className="mt-4 text-xs text-muted-foreground">
                  {a.readingMinutes} min read
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="py-16 md:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeading
            eyebrow="FAQs"
            title="Frequently asked questions"
            intro="Quick answers to the questions we hear most. See the full FAQ page for more."
          />
          <div className="space-y-3">
            {FAQ_PREVIEW.map((f) => (
              <details
                key={f.q}
                className="group rounded-lg border border-border bg-card px-5 py-4"
              >
                <summary className="cursor-pointer list-none font-heading text-sm font-semibold text-brand-navy marker:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {f.q}
                    <ChevronRight className="h-4 w-4 shrink-0 text-brand-azure transition-transform group-open:rotate-90" />
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-brand-azure hover:underline"
            >
              View all FAQs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Request a quote section */}
      <section className="bg-brand-navy py-16 md:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="eyebrow text-brand-gold">Request a Quote</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-white md:text-4xl">
              Get a cleaning estimate tailored to your space
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/80 md:text-base">
              Our pricing is customised to the nature of the service, the size of the
              property, workforce requirements, frequency and project scope. Tell us
              about your space and our team will prepare a tailored quotation.
            </p>
            <div className="mt-6 space-y-2 text-sm text-white/80">
              <p>
                Call us:{" "}
                <a href={`tel:${COMPANY.phoneTel}`} className="font-semibold text-brand-gold hover:underline">
                  {COMPANY.phoneDisplay}
                </a>
              </p>
              <p>
                Email:{" "}
                <a href={`mailto:${COMPANY.email}`} className="font-semibold text-brand-gold hover:underline">
                  {COMPANY.email}
                </a>
              </p>
              <p>
                <HomeIcon className="mr-1.5 inline h-4 w-4" />
                {COMPANY.addressLine1} {COMPANY.addressLine2}
              </p>
            </div>
          </div>
          <div className="rounded-xl bg-card p-6 shadow-xl md:p-8">
            <EnquiryForm kind="quote" compact />
          </div>
        </div>
      </section>

      <CTABand
        title="Ready for a cleaner, better-run space?"
        body="Speak with our team about corporate contracts, janitorial staffing, residential cleaning or your next project."
      />
    </SiteLayout>
  );
}
