export function pageHead(opts: {
  title: string;
  description: string;
  path: string;
  ogType?: string;
}) {
  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:type", content: opts.ogType ?? "website" },
      { property: "og:url", content: opts.path },
    ],
    links: [{ rel: "canonical", href: opts.path }],
  };
}
