export const COMPANY = {
  name: "Blossom Cleaning Services",
  parent: "Blossom Global Multilinks Limited",
  positioning: "Your Trusted Partner for Professional Cleaning and Facility Support Solutions.",
  tagline: "Consistently Delivering Excellence.",
  phoneDisplay: "0802 582 9223",
  phoneTel: "+2348025829223",
  whatsapp: "https://wa.me/2348025829223",
  whatsappDisplay: "0802 582 9223",
  email: "contactblossomcleaning@gmail.com",
  addressLine1: "4B, Igbeyin Adun Street,",
  addressLine2: "Gbagada, Lagos State, Nigeria.",
  established: "February 2024",
  integrated: "April 2025",
  mapsEmbed:
    "https://www.google.com/maps?q=4B%20Igbeyin%20Adun%20Street%2C%20Gbagada%2C%20Lagos%2C%20Nigeria&output=embed",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/blossomcleaningservices1" },
    { label: "Facebook", href: "https://www.facebook.com/share/19D99MtqGY/" },
    { label: "TikTok", href: "https://www.tiktok.com/@blossomcleaningservices1" },
    { label: "YouTube", href: "https://youtube.com/@blossomcleaningservices" },
  ],
} as const;

export type ServiceRef = {
  slug: string;
  title: string;
  blurb: string;
  image?: string;
};

/** The nine dedicated service pages. */
export const SERVICE_PAGES: ServiceRef[] = [
  {
    slug: "corporate-cleaning",
    title: "Corporate & Commercial Cleaning",
    blurb:
      "Structured cleaning operations for offices, commercial buildings and facilities — with on-site supervision and quality assurance.",
  },
  {
    slug: "residential-cleaning",
    title: "Residential Cleaning",
    blurb:
      "Home, apartment and estate cleaning — from deep cleaning and move-in/move-out to regular maintenance.",
  },
  {
    slug: "janitorial-staffing",
    title: "Janitorial Staffing",
    blurb:
      "Trained, supervised cleaning personnel deployed to your facility on shifts that fit your operation.",
  },
  {
    slug: "post-construction-cleaning",
    title: "Post-Construction Cleaning",
    blurb:
      "Detailed cleaning that takes newly completed buildings from construction site to presentable, move-in ready spaces.",
  },
  {
    slug: "event-cleaning",
    title: "Event & Exhibition Cleaning",
    blurb:
      "Pre-event, during-event and post-event cleaning support for venues, exhibitions and high-traffic gatherings.",
  },
  {
    slug: "industrial-facility-support",
    title: "Industrial & Facility Support",
    blurb:
      "Industrial cleaning and facility support services delivered with trained personnel and structured operations.",
  },
  {
    slug: "cleaning-supplies",
    title: "Chemicals & Equipment Supply",
    blurb:
      "Supply of professional cleaning chemicals, consumables and equipment for homes and businesses.",
  },
  {
    slug: "hygiene-education",
    title: "Environmental & Hygiene Education",
    blurb:
      "Hygiene awareness and environmental responsibility programmes for organisations and communities.",
  },
];

/** Full service catalogue, including services without a dedicated page. */
export const ALL_SERVICES: (ServiceRef & { page?: string })[] = [
  {
    slug: "commercial-corporate-cleaning",
    title: "Commercial & Corporate Cleaning",
    blurb:
      "Day-to-day and periodic cleaning for corporate offices, commercial buildings and business facilities.",
    page: "corporate-cleaning",
  },
  {
    slug: "office-cleaning",
    title: "Office Cleaning",
    blurb:
      "Workspaces, meeting rooms, reception areas and common areas kept clean, tidy and presentable.",
    page: "corporate-cleaning",
  },
  {
    slug: "residential-cleaning",
    title: "Residential Cleaning",
    blurb: "Homes, apartments and residential estates cleaned to a professional standard.",
    page: "residential-cleaning",
  },
  {
    slug: "estate-cleaning",
    title: "Estate Cleaning",
    blurb: "Cleaning services for residential estates, shared spaces and property developments.",
    page: "residential-cleaning",
  },
  {
    slug: "industrial-cleaning",
    title: "Industrial Cleaning",
    blurb:
      "Cleaning support for industrial and operational environments, delivered with structured supervision.",
    page: "industrial-facility-support",
  },
  {
    slug: "janitorial-staffing",
    title: "Janitorial Staffing",
    blurb:
      "We provide well-vetted, professionally trained janitorial staff for offices, commercial buildings, healthcare facilities, schools and other institutions, supporting clean, safe and hygienic environments.",
    image: "/images/team-group.jpeg",
    page: "janitorial-staffing",
  },
  {
    slug: "facility-support",
    title: "Facility Support Services",
    blurb:
      "Operational support that keeps facilities running smoothly alongside their cleaning programme.",
    page: "industrial-facility-support",
  },
  {
    slug: "deep-cleaning-sanitization",
    title: "Deep Cleaning & Sanitization",
    blurb:
      "Thorough, detail-focused cleaning and sanitization of spaces that need more than routine care.",
    page: "residential-cleaning",
  },
  {
    slug: "post-construction-cleaning",
    title: "Post-Construction & Post-Renovation Cleaning",
    blurb:
      "Removal of construction dust and debris, and detailed finishing cleaning for completed projects.",
    page: "post-construction-cleaning",
  },
  {
    slug: "move-in-move-out-cleaning",
    title: "Move-In / Move-Out Cleaning",
    blurb: "Fresh starts for new occupants and spotless handovers when tenants or owners move out.",
    page: "residential-cleaning",
  },
  {
    slug: "carpet-upholstery-cleaning",
    title: "Sofa & Upholstery Cleaning",
    blurb:
      "Professional cleaning to remove dirt, stains, odours and allergens from sofas, chairs and upholstered furniture.",
    image: "/images/cleaner-vacuuming.jpeg",
    page: "residential-cleaning",
  },
  {
    slug: "rug-carpet-cleaning",
    title: "Rug & Carpet Cleaning",
    blurb:
      "Professional cleaning solutions that restore freshness, remove dirt and improve carpet and rug hygiene.",
    image: "/images/cleaner-equipment.jpeg",
    page: "residential-cleaning",
  },
  {
    slug: "special-maintenance-packages",
    title: "Special Maintenance Packages",
    blurb:
      "Standard, Premium and Executive maintenance packages are available weekly or monthly. Contact us to discuss your requirements.",
    image: "/images/cleaner-mopping.jpeg",
    page: "corporate-cleaning",
  },
  {
    slug: "routine-maintenance-cleaning",
    title: "Routine Maintenance Cleaning",
    blurb:
      "Scheduled daily, weekly or custom-frequency cleaning that keeps spaces consistently presentable.",
    page: "corporate-cleaning",
  },
  {
    slug: "event-cleaning",
    title: "Event & Exhibition Cleaning",
    blurb: "Pre-event, during-event and post-event cleaning for venues, exhibitions and events.",
    page: "event-cleaning",
  },
  {
    slug: "cleaning-supplies",
    title: "Cleaning Chemicals & Consumables Supply",
    blurb: "Supply of professional cleaning chemicals and consumables for homes and businesses.",
    page: "cleaning-supplies",
  },
  {
    slug: "cleaning-equipment-supply",
    title: "Cleaning Equipment Supply",
    blurb:
      "Supply of professional cleaning equipment to support in-house and outsourced operations.",
    page: "cleaning-supplies",
  },
  {
    slug: "hygiene-education",
    title: "Environmental & Hygiene Education",
    blurb:
      "Hygiene awareness and environmental responsibility education for organisations and communities.",
    page: "hygiene-education",
  },
  {
    slug: "janitorial-training",
    title: "Janitorial Training",
    blurb:
      "Professional training for cleaning personnel, covering cleaning procedures, hygiene practices, equipment handling, safety and workplace professionalism.",
    image: "/images/team-training.jpeg",
    page: "services",
  },
];

export const SERVICE_CATEGORIES = [
  {
    label: "Commercial & Industrial",
    services: [
      "commercial-corporate-cleaning",
      "office-cleaning",
      "industrial-cleaning",
      "janitorial-staffing",
      "facility-support",
      "routine-maintenance-cleaning",
    ],
  },
  {
    label: "Residential",
    services: [
      "residential-cleaning",
      "estate-cleaning",
      "deep-cleaning-sanitization",
      "move-in-move-out-cleaning",
      "carpet-upholstery-cleaning",
    ],
  },
  {
    label: "Projects, Events & Support",
    services: [
      "post-construction-cleaning",
      "event-cleaning",
      "cleaning-supplies",
      "cleaning-equipment-supply",
      "hygiene-education",
    ],
  },
] as const;

export const CLIENTS = [
  "Care Properties Limited",
  "Canvas Events and Dining Ltd",
  "Brayvion Engineering",
  "Pearls Garden School",
  "Ivory Global",
] as const;

export const SECTORS_SERVED = [
  "Real estate and property management",
  "Education",
  "Events and hospitality",
  "Residential developments",
  "Corporate offices",
  "Commercial facilities",
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Clients", href: "/clients" },
  { label: "Projects", href: "/projects" },
  { label: "Our Team", href: "/team" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
] as const;
