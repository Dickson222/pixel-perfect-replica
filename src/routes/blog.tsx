import { ArrowRight, CalendarDays, Clock3, Search } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero, SectionHeading } from "@/components/site/shared";
import { BLOG_ARTICLES } from "@/lib/blog";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog | Blossom Cleaning Services" },
      {
        name: "description",
        content:
          "Educational articles on office cleaning, janitorial staffing, commercial cleaning, residential cleaning and hygiene best practices for homes and organisations in Lagos.",
      },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Blog"
        title="Helpful, practical insights on cleaning, hygiene and facility care"
        intro="Our blog focuses on educational content for businesses and property owners who want clearer guidance about cleaning standards, hygiene and operational support."
      />

      <section className="py-16 md:py-24">
        <div className="container-page">
          <div className="mb-8 flex items-center gap-3 rounded-xl border border-border bg-brand-azure-soft p-4 text-sm text-brand-navy shadow-sm">
            <Search className="h-4 w-4" />
            Educational articles and practical know-how for cleaner spaces.
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {BLOG_ARTICLES.map((article) => (
              <article key={article.slug} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wide text-brand-bronze">
                  <span>{article.category}</span>
                  {article.readingMinutes ? (
                    <span className="flex items-center gap-1.5">
                      <Clock3 className="h-3 w-3" /> {article.readingMinutes} min read
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-4 font-heading text-xl font-semibold text-brand-navy">{article.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{article.excerpt}</p>
                {article.date && (
                  <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {article.date}
                  </div>
                )}
                <Link to={`/blog/${article.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-azure hover:underline">
                  Read article
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
