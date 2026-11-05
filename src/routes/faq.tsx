import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/shared";

const faqs = [
  {
    question: "What cleaning services does Blossom provide?",
    answer:
      "Blossom Cleaning Services provides professional cleaning and facility support solutions for residential, commercial and high-traffic environments, including corporate and commercial cleaning, residential cleaning, janitorial staffing, post-construction cleaning, event and exhibition cleaning, industrial and facility support, cleaning chemicals and equipment supply, and environmental and hygiene education.",
  },
  {
    question: "Does Blossom provide corporate cleaning?",
    answer:
      "Yes. Blossom supports corporate offices, commercial buildings, real estate and property management environments, schools, hotels, event centres and facility management organisations with structured cleaning operations and on-site supervision.",
  },
  {
    question: "Can Blossom deploy dedicated janitorial personnel?",
    answer:
      "Yes. The company deploys trained, supervised cleaning personnel on schedules that fit the client's operation, with structured reporting and backup personnel for continuity where needed.",
  },
  {
    question: "Does Blossom serve residential estates?",
    answer:
      "Yes. Blossom provides residential and estate cleaning support for homes, apartments and residential environments, including regular maintenance and deep cleaning requirements.",
  },
  {
    question: "Does Blossom offer post-construction cleaning?",
    answer:
      "Yes. Post-construction and post-renovation cleaning is part of the company’s service offering, supporting newly completed spaces that need deep cleaning and detailed finishing before handover or occupancy.",
  },
  {
    question: "How can a customer request a quotation?",
    answer:
      "Customers can use the website enquiry form, send a WhatsApp message, call the office or email the company directly. Every enquiry is reviewed by the team and follow-up is arranged to discuss requirements and service scope.",
  },
  {
    question: "Does Blossom provide regular maintenance cleaning?",
    answer:
      "Yes. Routine and scheduled cleaning is part of the company’s service portfolio for both residential and commercial environments, depending on the scope and frequency required.",
  },
  {
    question: "Does Blossom supply cleaning chemicals and equipment?",
    answer:
      "Yes. Blossom also provides professional cleaning chemicals, consumables and equipment supply as part of its business offering.",
  },
  {
    question: "Where does Blossom operate?",
    answer:
      "Blossom Cleaning Services is based in Lagos State, Nigeria, and supports clients within Lagos and other locations where service arrangements can be effectively managed and supervised.",
  },
  {
    question: "How can corporate organisations request contract cleaning?",
    answer:
      "Corporate organisations can contact the company by phone, email or website form to discuss long-term cleaning contracts, dedicated janitorial staffing, commercial cleaning requirements and facility support needs. The appropriate scope and service arrangement are then discussed with the client.",
  },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQs | Blossom Cleaning Services" },
      {
        name: "description",
        content:
          "Frequently asked questions about Blossom Cleaning Services, including corporate cleaning, janitorial staffing, residential support and quotation requests.",
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="FAQs"
        title="Answers to common questions about our services"
        intro="Here are the most common questions we receive from individuals, landlords, property managers and corporate organisations."
      />

      <section className="py-16 md:py-24">
        <div className="container-page mx-auto max-w-4xl">
          <div className="space-y-4">
            {faqs.map((item) => (
              <details key={item.question} className="group rounded-2xl border border-border bg-card p-5 shadow-sm open:bg-brand-azure-soft">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base font-semibold text-brand-navy">
                  <span>{item.question}</span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-brand-azure transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="eyebrow text-brand-bronze">Need a custom answer?</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-brand-navy md:text-3xl">Request a quote or discuss your requirements</h2>
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
