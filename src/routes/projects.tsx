import { ArrowRight, CheckCircle2, Image, Sparkles } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero, SectionHeading } from "@/components/site/shared";
import photoDeepClean from "@/assets/photo-deep-clean.jpg.asset.json";
import photoVacuum from "@/assets/photo-vacuum.jpg.asset.json";
import photoMoppingLobby from "@/assets/photo-mopping-lobby.jpg.asset.json";
import photoTvConsole from "@/assets/photo-tv-console.jpg.asset.json";

const projectGallery = [
  { image: photoMoppingLobby.url, title: "Commercial cleaning support", category: "Commercial Cleaning" },
  { image: photoDeepClean.url, title: "Residential deep cleaning", category: "Residential Cleaning" },
  { image: photoVacuum.url, title: "Detailed finishing clean", category: "Post-Construction Cleaning" },
  { image: photoTvConsole.url, title: "Detail-focused interior maintenance", category: "Deep Cleaning" },
];

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects & Our Work | Blossom Cleaning Services" },
      {
        name: "description",
        content:
          "A project showcase featuring Blossom Cleaning Services work across commercial, residential, deep cleaning and event support environments.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Projects & Our Work"
        title="Selected work across residential, commercial and project-based cleaning"
        intro="The company’s portfolio reflects the practical work done across homes, offices, facilities and project spaces."
      />

      <section className="py-16 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Portfolio"
            title="Examples of our cleaning work"
            intro="Project-specific details are kept general where exact case study information was not provided, so the focus stays on the actual work and the value of the service."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {projectGallery.map((item) => (
              <div key={item.title} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <img src={item.image} alt={item.title} className="h-64 w-full object-cover" />
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-bronze">
                    <Image className="h-3.5 w-3.5" />
                    {item.category}
                  </div>
                  <h3 className="mt-3 font-heading text-lg font-semibold text-brand-navy">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-16 md:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Work categories"
            title="The types of cleaning work we support"
            align="center"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              "Commercial Cleaning",
              "Residential Cleaning",
              "Deep Cleaning",
              "Post-Construction Cleaning",
              "Carpet & Upholstery Care",
              "Event Cleaning",
              "Janitorial Operations",
            ].map((category) => (
              <div key={category} className="rounded-xl border border-border bg-card p-5 text-sm font-medium text-brand-navy shadow-sm">
                {category}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="eyebrow text-brand-bronze">Need support for your own space?</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-brand-navy md:text-3xl">Request a quote for your project</h2>
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
