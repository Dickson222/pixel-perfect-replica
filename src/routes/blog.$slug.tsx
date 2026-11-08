import { ArrowLeft, CalendarDays, Clock3 } from "lucide-react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/shared";
import { getArticle } from "@/lib/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) {
      throw notFound();
    }
    return { article };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData.article.title} | Blossom Cleaning Services` },
      { name: "description", content: loaderData.article.excerpt },
    ],
  }),
  component: BlogArticlePage,
});

function BlogArticlePage() {
  const { article } = Route.useLoaderData();

  return (
    <SiteLayout>
      <PageHero eyebrow={article.category} title={article.title} intro={article.excerpt} />

      <article className="py-12 md:py-16">
        <div className="container-page max-w-3xl">
          <div className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-border pb-5 text-sm text-muted-foreground">
            {article.date && (
              <span className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                {article.date}
              </span>
            )}
            <span className="flex items-center gap-2">
              <Clock3 className="h-4 w-4" />
              {article.readingMinutes} min read
            </span>
          </div>

          <div className="space-y-8">
            {article.body.map((section, index) => (
              <section key={`${section.heading ?? "intro"}-${index}`}>
                {section.heading && (
                  <h2 className="mb-3 font-display text-xl font-bold text-brand-navy md:text-2xl">
                    {section.heading}
                  </h2>
                )}
                <div className="space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-sm leading-7 text-muted-foreground md:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.bullets && (
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-7 text-muted-foreground md:text-base">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <div className="mt-12 border-t border-border pt-6">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-azure hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all articles
            </Link>
          </div>
        </div>
      </article>
    </SiteLayout>
  );
}
