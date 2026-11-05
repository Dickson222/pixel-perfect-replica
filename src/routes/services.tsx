import { ArrowRight, Building2, Factory, Home, Sparkles, Users, Wrench, Warehouse } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero, SectionHeading } from "@/components/site/shared";
import { ALL_SERVICES } from "@/lib/site";

const serviceCategories = [
  {
    label: "Commercial & Industrial",
    icon: Building2,
    services: ALL_SERVICES.filter((item) =>
      ["commercial-corporate-cleaning", "office-cleaning", "industrial-cleaning", "janitorial-staffing", "facility-support", "routine-maintenance-cleaning"].includes(item.slug),
    ),
  },
  {
    label: "Residential",
    icon: Home,
    services: ALL_SERVICES.filter((item) =>
      ["residential-cleaning", "estate-cleaning", "deep-cleaning-sanitization", "move-in-move-out-cleaning", "carpet-upholstery-cleaning"].includes(item.slug),
    ),
  },
  {
    label: "Projects, Events & Support",
    icon: Sparkles,
    services: ALL_SERVICES.filter((item) =>
      ["post-construction-cleaning", "event-cleaning", "cleaning-supplies", "cleaning-equipment-supply", "hygiene-education"].includes(item.slug),
    ),
  },
];

const serviceIcons: Record<string, typeof Building2> = {
  "commercial-corporate-cleaning": Building2,
  "office-cleaning": Building2,
  "industrial-cleaning": Factory,
  "janitorial-staffing": Users,
  "facility-support": Warehouse,
  "routine-maintenance-cleaning": Wrench,
  "residential-cleaning": Home,
  "estate-cleaning": Home,
  "deep-cleaning-sanitization": Sparkles,
  "move-in-move-out-cleaning": Home,
  "carpet-upholstery-cleaning": Sparkles,
  "post-construction-cleaning": Wrench,
  "event-cleaning": Sparkles,
  "cleaning-supplies": Warehouse,
  "cleaning-equipment-supply": Wrench,
  "hygiene-education": Users,
};

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services | Blossom Cleaning Services" },
      {
        name: "description",
        content:
          "Explore Blossom Cleaning Services solutions for office cleaning, residential cleaning, janitorial staffing, post-construction cleaning, event cleaning, industrial facility support and supply services in Lagos, Nigeria.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Services"
        title="Structured cleaning solutions for homes, organisations, facilities and projects"
        intro="Blossom Cleaning Services supports residential, commercial and industrial environments with practical cleaning, facility support and workforce solutions designed around the way each client actually operates."
      />

      <section className="py-16 md:py-24">
        <div className="container-page">
          {serviceCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.label} className="mb-16 last:mb-0">
                <div className="mb-8 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-azure-soft">
                    <Icon className="h-5 w-5 text-brand-azure" />
                  </div>
                  <SectionHeading eyebrow="Service category" title={category.label} />
                </div>
                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {category.services.map((service) => {
                    const ItemIcon = serviceIcons[service.slug] ?? Sparkles;
                    const pageLink = service.page ? `/${service.page}` : "/services";
                    return (
                      <div key={service.slug} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-gold-soft">
                          <ItemIcon className="h-5 w-5 text-brand-navy" />
                        </div>
                        <h3 className="mt-4 font-heading text-lg font-semibold text-brand-navy">{service.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.blurb}</p>
                        <Link to={pageLink} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-azure hover:underline">
                          Learn more
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
}
