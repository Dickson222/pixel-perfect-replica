import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const payloadSchema = z.object({
  kind: z.enum(["quote", "corporate", "contact"]),
  fullName: z.string().trim().min(2).max(120),
  phone: z.string().trim().min(7).max(30),
  email: z.string().trim().max(160).optional().or(z.literal("")),
  serviceType: z.string().trim().max(160).optional().or(z.literal("")),
  propertyType: z.string().trim().max(60).optional().or(z.literal("")),
  propertySize: z.string().trim().max(160).optional().or(z.literal("")),
  personnelCount: z.string().trim().max(60).optional().or(z.literal("")),
  preferredDate: z.string().trim().max(40).optional().or(z.literal("")),
  frequency: z.string().trim().max(60).optional().or(z.literal("")),
  organisation: z.string().trim().max(160).optional().or(z.literal("")),
  facilityLocation: z.string().trim().max(200).optional().or(z.literal("")),
  message: z.string().trim().max(3000).optional().or(z.literal("")),
});

export const Route = createFileRoute("/api/public/enquiries")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json().catch(() => null);
          const parsed = payloadSchema.safeParse(body);
          if (!parsed.success) {
            return Response.json(
              {
                ok: false,
                error:
                  "Please check the form — a required field is missing or a value looks invalid.",
              },
              { status: 400 },
            );
          }

          const d = parsed.data;
          const { supabaseAdmin } = await import(
            "@/integrations/supabase/client.server"
          );
          const { error } = await supabaseAdmin.from("enquiries").insert({
            kind: d.kind,
            full_name: d.fullName,
            phone: d.phone,
            email: d.email || null,
            service_type: d.serviceType || null,
            property_type: d.propertyType || null,
            property_size: d.propertySize || null,
            personnel_count: d.personnelCount || null,
            preferred_date: d.preferredDate || null,
            frequency: d.frequency || null,
            organisation: d.organisation || null,
            facility_location: d.facilityLocation || null,
            message: d.message || null,
          });

          if (error) {
            console.error("[enquiries] insert failed:", error.message);
            return Response.json(
              {
                ok: false,
                error:
                  "We could not save your request right now. Please try again, or reach us on WhatsApp or by phone.",
              },
              { status: 500 },
            );
          }

          return Response.json({ ok: true });
        } catch (err) {
          console.error("[enquiries] unexpected error:", err);
          return Response.json(
            {
              ok: false,
              error: "Something went wrong while sending your request. Please try again.",
            },
            { status: 500 },
          );
        }
      },
    },
  },
});
