import { useState } from "react";
import { ArrowRight, Building2, CalendarCheck, GraduationCap, Home, Sparkles } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero, SectionHeading } from "@/components/site/shared";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ALL_SERVICES } from "@/lib/site";

const serviceCategories = [
  {
    label: "Training & Hygiene",
    icon: GraduationCap,
    services: ALL_SERVICES.filter((item) =>
      ["janitorial-training", "hygiene-education"].includes(item.slug),
    ),
  },
  {
    label: "Commercial & Industrial",
    icon: Building2,
    services: ALL_SERVICES.filter((item) =>
      [
        "residential-commercial-cleaning",
        "commercial-corporate-cleaning",
        "office-cleaning",
        "industrial-cleaning",
        "janitorial-staffing",
        "facility-support",
        "routine-maintenance-cleaning",
        "special-maintenance-packages",
      ].includes(item.slug),
    ),
  },
  {
    label: "Residential",
    icon: Home,
    services: ALL_SERVICES.filter((item) =>
      [
        "residential-cleaning",
        "estate-cleaning",
        "deep-cleaning-sanitization",
        "move-in-move-out-cleaning",
        "carpet-upholstery-cleaning",
        "rug-carpet-cleaning",
      ].includes(item.slug),
    ),
  },
  {
    label: "Projects, Events & Support",
    icon: Sparkles,
    services: ALL_SERVICES.filter((item) =>
      [
        "post-construction-cleaning",
        "interlock-exterior-surface-washing",
        "event-cleaning",
        "cleaning-supplies",
        "cleaning-equipment-supply",
      ].includes(item.slug),
    ),
  },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services | Blossom Cleaning Services" },
      {
        name: "description",
        content:
          "Explore Blossom Cleaning Services for janitorial staffing and workforce management, residential and commercial cleaning, deep cleaning, maintenance, post-construction cleaning, upholstery and carpet cleaning, exterior washing, janitorial training and hygiene education in Lagos.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const [selectedService, setSelectedService] = useState<(typeof ALL_SERVICES)[number] | null>(
    null,
  );

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Services"
        title="Structured cleaning solutions for homes, organisations, facilities and projects"
        intro="Our services include janitorial staffing and workforce management, residential and commercial cleaning, deep and scheduled maintenance cleaning, post-construction cleaning, specialist surface and upholstery cleaning, janitorial training and environmental hygiene education."
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
                  {category.services.map((service, index) => {
                    const pageLink = service.page ? `/${service.page}` : "/services";
                    return (
                      <div
                        key={service.slug}
                        className="service-card rounded-2xl border border-border bg-card shadow-sm"
                        data-reveal-order={index % 3}
                      >
                        {service.image && (
                          <div className="aspect-[4/3] rounded-t-2xl bg-muted/50 p-3 sm:p-4">
                            <img
                              src={service.image}
                              alt={`${service.title} service`}
                              loading="lazy"
                              decoding="async"
                              className="h-full w-full object-contain"
                            />
                          </div>
                        )}
                        <div className="p-6">
                          <h3 className="mt-4 font-heading text-lg font-semibold text-brand-navy">
                            {service.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            {service.blurb}
                          </p>
                          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
                            <button
                              type="button"
                              onClick={() => setSelectedService(service)}
                              className="inline-flex items-center gap-2 rounded-md bg-brand-gold px-4 py-2.5 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-gold/85"
                            >
                              <CalendarCheck className="h-4 w-4" />
                              Book this service
                            </button>
                            <Link
                              to={pageLink}
                              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-azure hover:underline"
                            >
                              Learn more
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Dialog
        open={selectedService !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedService(null);
        }}
      >
        {selectedService && (
          <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-3xl">
            <DialogHeader className="pr-8">
              <DialogTitle className="font-display text-2xl font-bold text-brand-navy">
                Book {selectedService.title}
              </DialogTitle>
              <DialogDescription>
                Send us your details and preferred date. Our team will contact you to confirm
                availability and arrangements.
              </DialogDescription>
            </DialogHeader>
            <EnquiryForm
              key={selectedService.slug}
              kind="booking"
              defaultService={selectedService.title}
              fixedService
            />
          </DialogContent>
        )}
      </Dialog>
    </SiteLayout>
  );
}
