import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { ALL_SERVICES } from "@/lib/site";
import { routeTree } from "@/routeTree.gen";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("matches the dedicated services page", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/services");

    expect(matches.at(-1)?.routeId).toBe("/services");
  });

  it("uses the service-named photos for their matching services", () => {
    const imagesBySlug = new Map(ALL_SERVICES.map((service) => [service.slug, service.image]));
    const expectedImages = new Map([
      [
        "residential-commercial-cleaning",
        "/images/images/Residential%20and%20Commercial%20Cleaning%20Services.png",
      ],
      ["commercial-corporate-cleaning", "/images/images/Commercial%20&%20Corporate%20Cleaning.png"],
      ["office-cleaning", "/images/images/Office%20Cleaning.png"],
      ["residential-cleaning", "/images/images/Residential%20Cleaning.png"],
      ["estate-cleaning", "/images/images/Estate%20Cleaning.png"],
      ["industrial-cleaning", "/images/images/Industrial%20Cleaning.png"],
      ["facility-support", "/images/images/Facility%20Support%20Services.png"],
      ["move-in-move-out-cleaning", "/images/images/Move-In%20%20Move%20Out%20Cleaning.png"],
      ["routine-maintenance-cleaning", "/images/images/Routine%20Maintenance%20Cleaning.png"],
      [
        "interlock-exterior-surface-washing",
        "/images/images/Interlock%20and%20Exterior%20Surface%20Washing.png",
      ],
      ["event-cleaning", "/images/images/Event%20&%20Exhibition%20Cleaning.png"],
      ["cleaning-equipment-supply", "/images/images/Cleaning%20Equipment%20Supply.png"],
    ]);

    expectedImages.forEach((image, slug) => {
      expect(imagesBySlug.get(slug)).toBe(image);
    });

    const assignedImages = ALL_SERVICES.flatMap((service) =>
      service.image ? [service.image] : [],
    );
    expect(new Set(assignedImages).size).toBe(assignedImages.length);
  });
});
