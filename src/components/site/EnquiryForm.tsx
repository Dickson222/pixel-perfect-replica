import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { COMPANY, ALL_SERVICES } from "@/lib/site";
import { WhatsAppSvg } from "./shared";

const inputClass =
  "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-brand-azure focus:outline-none focus:ring-2 focus:ring-brand-azure/25";

const labelClass =
  "mb-1.5 block font-heading text-xs font-semibold uppercase tracking-wide text-brand-navy";

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string | undefined;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className={labelClass}>
        {label}
        {required && <span className="ml-0.5 text-brand-bronze">*</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-xs font-medium text-destructive">{error}</p>}
    </div>
  );
}

const PROPERTY_TYPES = [
  "Residential",
  "Commercial",
  "Corporate",
  "Hospitality",
  "Educational",
  "Industrial",
  "Other",
];

const FREQUENCIES = ["One-time", "Daily", "Weekly", "Monthly", "Custom arrangement"];

type Kind = "quote" | "corporate" | "contact";

type Values = {
  fullName: string;
  phone: string;
  email: string;
  serviceType: string;
  address: string;
  propertyType: string;
  propertySize: string;
  personnelCount: string;
  preferredDate: string;
  frequency: string;
  organisation: string;
  message: string;
};

const EMPTY: Values = {
  fullName: "",
  phone: "",
  email: "",
  serviceType: "",
  address: "",
  propertyType: "",
  propertySize: "",
  personnelCount: "",
  preferredDate: "",
  frequency: "",
  organisation: "",
  message: "",
};

export function EnquiryForm({
  kind,
  defaultService = "",
  compact = false,
}: {
  kind: Kind;
  defaultService?: string;
  compact?: boolean;
}) {
  const [values, setValues] = useState<Values>({ ...EMPTY, serviceType: defaultService });
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "failed">("idle");
  const [serverError, setServerError] = useState("");

  const set =
    (key: keyof Values) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [key]: e.target.value }));
      setErrors((er) => ({ ...er, [key]: undefined }));
    };

  function validate(): boolean {
    const er: Partial<Record<keyof Values, string>> = {};
    if (values.fullName.trim().length < 2) er.fullName = "Please enter your full name.";
    if (values.phone.trim().length < 7) er.phone = "Please enter a valid phone number.";
    if (kind !== "contact" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      er.email = "Please enter a valid email address.";
    if (kind === "quote" && !values.serviceType) er.serviceType = "Please select a service.";
    if (kind === "corporate" && values.organisation.trim().length < 2)
      er.organisation = "Please enter your organisation's name.";
    if (kind === "contact" && values.message.trim().length < 5)
      er.message = "Please tell us briefly what you need.";
    setErrors(er);
    return Object.keys(er).length === 0;
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setStatus("failed");
      setServerError(
        "The enquiry form is not configured yet. Please contact us by phone or WhatsApp.",
      );
      return;
    }

    setStatus("sending");
    setServerError("");
    try {
      const email = values.email.trim();
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `${kind === "corporate" ? "Corporate enquiry" : kind === "contact" ? "Contact message" : "Quote request"} from ${values.fullName.trim()}`,
          from_name: values.fullName.trim(),
          ...(email ? { email } : {}),
          phone: values.phone.trim(),
          kind,
          service_type: values.serviceType.trim(),
          property_type: values.propertyType.trim(),
          property_size: values.propertySize.trim(),
          personnel_count: values.personnelCount.trim(),
          preferred_date: values.preferredDate,
          frequency: values.frequency,
          organisation: values.organisation.trim(),
          facility_location: values.address.trim(),
          message: values.message.trim() || "No additional message provided.",
        }),
      });
      const data = (await res.json()) as { success?: boolean; message?: string };
      if (res.ok && data.success) {
        setStatus("sent");
      } else {
        setStatus("failed");
        setServerError(
          data.message || "Something went wrong while sending your request. Please try again.",
        );
      }
    } catch {
      setStatus("failed");
      setServerError("Network problem — please check your connection and try again.");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-brand-azure/30 bg-brand-azure-soft p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-brand-azure" />
        <h3 className="mt-4 font-display text-xl font-bold text-brand-navy">
          Request received for review
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
          Thank you, {values.fullName.split(" ")[0]}. Your request has been submitted successfully
          and our team will contact you to discuss your requirements and confirm arrangements.
          Please note that a quotation request is not a confirmed booking.
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          Need a faster response?{" "}
          <a
            href={COMPANY.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand-azure hover:underline"
          >
            Chat with us on WhatsApp
          </a>{" "}
          or call{" "}
          <a
            href={`tel:${COMPANY.phoneTel}`}
            className="font-semibold text-brand-azure hover:underline"
          >
            {COMPANY.phoneDisplay}
          </a>
          .
        </p>
      </div>
    );
  }

  const serviceOptions = ALL_SERVICES.map((s) => s.title);

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" required error={errors.fullName}>
          <input
            className={inputClass}
            value={values.fullName}
            onChange={set("fullName")}
            autoComplete="name"
            placeholder="Your full name"
          />
        </Field>
        <Field label="Phone number" required error={errors.phone}>
          <input
            className={inputClass}
            value={values.phone}
            onChange={set("phone")}
            type="tel"
            autoComplete="tel"
            placeholder="e.g. 0802 582 9223"
          />
        </Field>
        <Field label="Email address" required={kind !== "contact"} error={errors.email}>
          <input
            className={inputClass}
            value={values.email}
            onChange={set("email")}
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
          />
        </Field>

        {kind === "quote" && (
          <>
            <Field label="Type of cleaning service required" required error={errors.serviceType}>
              <select
                className={inputClass}
                value={values.serviceType}
                onChange={set("serviceType")}
              >
                <option value="">Select a service…</option>
                {serviceOptions.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Property type">
              <select
                className={inputClass}
                value={values.propertyType}
                onChange={set("propertyType")}
              >
                <option value="">Select property type…</option>
                {PROPERTY_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Property or facility address">
              <input
                className={inputClass}
                value={values.address}
                onChange={set("address")}
                placeholder="Area / street, city"
              />
            </Field>
            <Field label="Property size or project scope">
              <input
                className={inputClass}
                value={values.propertySize}
                onChange={set("propertySize")}
                placeholder="e.g. 3-bedroom apartment, 4-floor office"
              />
            </Field>
            <Field label="Number of cleaning personnel required (if known)">
              <input
                className={inputClass}
                value={values.personnelCount}
                onChange={set("personnelCount")}
                placeholder="e.g. Not sure / 4 cleaners"
              />
            </Field>
            <Field label="Preferred service date">
              <input
                className={inputClass}
                value={values.preferredDate}
                onChange={set("preferredDate")}
                type="date"
              />
            </Field>
            <Field label="Cleaning frequency">
              <select className={inputClass} value={values.frequency} onChange={set("frequency")}>
                <option value="">Select frequency…</option>
                {FREQUENCIES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </Field>
          </>
        )}

        {kind === "corporate" && (
          <>
            <Field label="Organisation name" required error={errors.organisation}>
              <input
                className={inputClass}
                value={values.organisation}
                onChange={set("organisation")}
                autoComplete="organization"
                placeholder="Company or organisation"
              />
            </Field>
            <Field label="Facility location">
              <input
                className={inputClass}
                value={values.address}
                onChange={set("address")}
                placeholder="Facility address or area"
              />
            </Field>
            <Field label="Service requirements">
              <select
                className={inputClass}
                value={values.serviceType}
                onChange={set("serviceType")}
              >
                <option value="">Select a service…</option>
                {serviceOptions.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
                <option value="Long-term cleaning contract">Long-term cleaning contract</option>
              </select>
            </Field>
            <Field label="Project scope">
              <input
                className={inputClass}
                value={values.propertySize}
                onChange={set("propertySize")}
                placeholder="e.g. Head office, 3 branches, 60 staff"
              />
            </Field>
          </>
        )}
      </div>

      {(kind !== "quote" || !compact) && (
        <Field
          label={
            kind === "corporate"
              ? "Additional requirements or instructions"
              : kind === "quote"
                ? "Additional requirements or instructions"
                : "Your message"
          }
          required={kind === "contact"}
          error={errors.message}
        >
          <textarea
            className={`${inputClass} min-h-28`}
            value={values.message}
            onChange={set("message")}
            placeholder={
              kind === "contact"
                ? "How can we help?"
                : "Tell us anything else we should know about your space or requirements."
            }
          />
        </Field>
      )}

      {status === "failed" && (
        <p className="rounded-md border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
          {serverError}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-md bg-brand-gold px-7 py-3 font-heading text-sm font-bold uppercase tracking-wide text-brand-navy transition-colors hover:bg-brand-gold/85 disabled:opacity-60"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              {kind === "corporate"
                ? "Submit Corporate Enquiry"
                : kind === "contact"
                  ? "Send Message"
                  : "Submit Request"}
            </>
          )}
        </button>
        <a
          href={COMPANY.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-azure"
        >
          <WhatsAppSvg className="h-5 w-5 text-[#25D366]" />
          Or send via WhatsApp
        </a>
      </div>
      <p className="text-xs leading-relaxed text-muted-foreground">
        Submitting this form sends your request to {COMPANY.name} for review. We will contact you to
        discuss requirements and confirm arrangements. A quotation request is not a confirmed
        booking.
      </p>
    </form>
  );
}
