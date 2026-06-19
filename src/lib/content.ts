// Rich, niche-accurate content blocks + centralized COPY for Debris Removal Insurance.

import {
  PhoneCall, FileSearch, FileSignature, ShieldCheck,
  Truck, HardHat, Car, Trash2, Leaf, Wrench, Umbrella, Package, AlertTriangle,
} from "lucide-react";
import faqsJson from "../../ai/content/faqs.json";

/* ============================================================
   FAQ types + single-source-of-truth wiring (ai/content/faqs.json)
   ============================================================ */
export interface FAQItem { q: string; a: string; }

export const HOME_FAQS: FAQItem[] = faqsJson.home as FAQItem[];
export const GENERAL_FAQS: FAQItem[] = faqsJson.general as FAQItem[];

/* ============================================================
   COPY — centralized display strings consumed by components/pages.
   ============================================================ */
export const COPY = {
  hero: {
    h1Lead: "Debris removal insurance that protects",
    h1Highlight: "the trucks, the crew, and the hauling",
    subcopy:
      "Dump truck insurance, commercial auto for junk removal, general liability, workers' comp, roll-off truck and dumpster coverage, pollution liability for demolition debris, inland marine, and commercial umbrella — purpose-built for debris haulers. A-rated carriers. 15-minute quotes.",
    statValue: "$58M+",
    statLabel: "Premium placed for contractors — junk haulers, dump trucks, roll-offs, and storm-debris crews",
    imageAlt: "Dump truck and roll-off debris hauling fleet on a jobsite at dawn",
  },
  nav: { ariaLabel: "Debris Removal Insurance home" },
  footer: {
    ctaTitle: "Ready to protect your hauling operation?",
    ctaSubcopy: "15-minute quotes. 2-hour claims response. Insurance for debris removal, junk hauling, and dump truck contractors nationwide.",
    description:
      "Specialized insurance for debris removal and junk hauling contractors — dump truck insurance, commercial auto, general liability, workers' comp, roll-off truck and dumpster coverage, pollution and environmental liability, inland marine, and commercial umbrella. A division of Contractors Choice Agency — founded 2005, licensed all 50 states.",
  },
  servicesGrid: {
    h2Lead: "Coverage built specifically for",
    h2Highlight: "debris haulers",
    lead: "Standard business policies under-limit the truck, exclude the load, and miss the pollution exposure of demolition debris. We build programs designed for working debris and junk hauling operations.",
  },
  why: {
    eyebrow: "Why haulers switch to us",
    h2Lead: "The coverage gaps that",
    h2Highlight: "cost debris haulers the most",
    lead: "Most agents hand a junk hauler a generic business-owner policy and call it done. Then a loaded dump truck accident, a roll-off box claim, or a hazardous-debris spill hits and the exclusion kicks in. We underwrite the parts of your operation everyone else leaves out.",
    sidebarTitle: "Run by people who know the trades",
    sidebarBody:
      "Contractors Choice Agency was founded in 2005 by people from the trades. We've walked jobsites, valued trucks and equipment, and know what a roll-off box or loaded dump trailer actually costs to replace.",
  },
  coverage: {
    eyebrow: "Where we write",
    h2Lead: "Debris removal coverage.",
    h2Highlight: "All 50 states.",
    lead: "From Texas and Florida to the Southeast, Mountain West, and everywhere hauling runs, Contractors Choice Agency writes debris removal insurance in every state where junk haulers, dump trucks, and roll-off operators work.",
    imageAlt: "Debris hauling trucks and roll-off containers at a regional jobsite — national coverage",
    badgeTitle: "National coverage for debris haulers.",
    badgeSub: "Writing hauling programs in all 50 states since 2005.",
  },
  process: {
    lead: "No two-week back-and-forth. A real conversation, real specialty markets, and a program you can actually understand — built around your trucks, your crew, and your hauling.",
  },
  testimonials: {
    eyebrow: "From debris contractors",
    h2Lead: "Haulers that found",
    h2Highlight: "coverage that actually pays",
  },
  finalCta: {
    h2Lead: "Protect Your Hauling Operation",
    h2Highlight: "with coverage built for the truck.",
    lead: "Whether you need dump truck insurance today or a full program — auto, liability, workers' comp, roll-off, pollution, and umbrella — one call gets you real quotes from specialty trucking markets. Not a voicemail and a two-week wait.",
  },
  ctaBand: {
    defaultTitle: "Ready to protect your hauling operation?",
    defaultDescription:
      "Get a 15-minute quote from specialists who understand debris removal — dump trucks, roll-offs, junk hauling, and the pollution exposure of demolition debris.",
  },
  faq: {
    defaultTitleLead: "Debris removal insurance,",
    defaultTitleHighlight: "in plain English",
  },
  servicesPage: {
    metaTitle: "Debris Removal & Junk Hauling Insurance Coverage & Services",
    metaDescription:
      "Eight lines of insurance built for debris haulers: dump truck, general liability, commercial auto, workers' comp, roll-off truck and dumpster, pollution and environmental, tools and equipment (inland marine), and commercial umbrella. Licensed all 50 states.",
    h1Lead: "Insurance built line-by-line for",
    h1Highlight: "debris haulers",
    lead: "Each policy below addresses a specific exposure in debris removal and junk hauling — from the dump truck coverage a standard business policy under-limits to the pollution liability your hauling program needs to handle correctly.",
    ogTitle: "Debris Removal Insurance Coverage | Contractors Choice Agency",
    ogDescription:
      "Dump truck, general liability, commercial auto, workers' comp, roll-off, pollution, inland marine, and commercial umbrella — written specifically for debris haulers and junk removal contractors.",
    ctaTitle: "Not sure which lines you need?",
    ctaDescription:
      "Most debris haulers bundle dump truck + commercial auto + general liability + workers' comp + umbrella into one coordinated program. We'll build the right mix in one call.",
  },
  blogPage: {
    metaTitle: "Debris Removal & Dump Truck Insurance Blog — Guides & Insights",
    metaDescription:
      "Practical insurance guidance for debris haulers and junk removal contractors: dump truck insurance cost, coverage checklists, roll-off and storm-debris coverage, and pollution liability for demolition debris.",
    h1Lead: "Debris removal insurance,",
    h1Highlight: "decoded",
    lead: "Plain-English guides on the coverage that matters for debris haulers and junk removal contractors — dump truck insurance, roll-off dumpsters, storm debris, and the pollution exposure of demolition work.",
    ogTitle: "Debris Removal & Dump Truck Insurance Blog | Contractors Choice Agency",
    ogDescription:
      "Practical insurance guidance for debris haulers and junk removal contractors: dump truck insurance cost, coverage checklists, roll-off and storm-debris coverage, and pollution liability.",
  },
  serviceDetail: {
    h1Suffix: "for debris haulers",
    imageAltSuffix: "debris removal and hauling",
    category: "Debris Removal Insurance",
  },
  about: {
    metaTitle: "About Debris Removal Insurance | Contractors Choice Agency",
    metaDescription:
      "Debris Removal Insurance is the hauling-focused division of Contractors Choice Agency, founded in 2005 by former contractor Josh Cotner. Dump truck, commercial auto, general liability, workers' comp, roll-off, pollution, inland marine, and umbrella for debris haulers. Licensed all 50 states.",
    h1Lead: "Built by people who know the trades,",
    h1Highlight: "for hauling operations",
    lead: "Debris Removal Insurance is the hauling-focused division of Contractors Choice Agency — founded in 2005 by Josh Cotner, who knows exactly what happens when an under-limit auto policy or a pollution exclusion shows up in a claim denial.",
    imageAlt: "A dump truck operator and hauling contractor on a jobsite",
    storyEyebrow: "Our story",
    storyTitle: "From the jobsite to the agency.",
    storyLead:
      "Josh Cotner ran equipment, read specs, and filed certificates before founding CCA in 2005. That background is why we understand what's at stake when a loaded dump truck is in an accident, a roll-off box is damaged on a customer's property, or a demolition-debris load is questioned at disposal.",
    valuesTitle: "Four things we won't compromise on.",
    timeline: [
      { year: "2005", title: "Contractors Choice Agency founded", desc: "Josh Cotner opens CCA in Chandler, AZ, after years working in the trades — built to insure contractors, haulers, and operators the right way." },
      { year: "15 yrs", title: "Expanded to specialty trucking and hauling markets", desc: "After placing programs for dozens of trade and contractor categories, CCA extends expertise to dump truck, junk hauling, and debris removal operations with unique risk profiles." },
      { year: "Today", title: "Dedicated debris removal division", desc: "Debris Removal Insurance focuses CCA's expertise on junk haulers and dump truck operators — operations where auto limits, cargo, pollution, and equipment values are the real risks." },
    ],
    values: [
      { icon: "HardHat", title: "Operator-first, always", desc: "Josh spent years in the trades before starting the agency. We speak the language of hauling because we know what happens when coverage fails at claim time." },
      { icon: "ShieldCheck", title: "Coverage that closes the gaps", desc: "Under-limit auto, excluded cargo, missing MCS-90 filings, and pollution exclusions — we address the risks standard business markets miss." },
      { icon: "Award", title: "A-rated specialty markets only", desc: "We shop trucking and contractor carriers with the financial strength and class experience to be there when a serious accident, injury, or pollution claim hits." },
      { icon: "Handshake", title: "Honest, no-pressure advice", desc: "If you don't need a line of coverage, we'll tell you. We earn trust by being straight about what your hauling operation actually requires." },
    ],
  },
  quote: {
    h1Lead: "Get your",
    h1Highlight: "debris removal insurance quote",
    lead: "Tell us about your trucks and hauling operation. We'll shop A-rated specialty trucking markets and come back with real quotes in about 15 minutes — no obligation.",
    businessPlaceholder: "Apache Debris Hauling LLC",
    emailPlaceholder: "marcus@apachedebris.com",
    phonePlaceholder: "(602) 555-0100",
    messagePlaceholder:
      "Fleet list (truck types and values), driver list and records, radius of operation, cargo types, payroll and crew size, MC/DOT number, current insurer, loss history, or anything else that helps us quote accurately…",
    errorMessage: "Something went wrong. Please call us at 844-967-5247 or try again.",
    trustNicheTitle: "Built for haulers",
    trustNicheDesc: "Policies written for debris removal and junk hauling — not generic business-owner coverage.",
  },
  contact: {
    h1Lead: "Let's talk about your",
    h1Highlight: "hauling coverage",
    lead: "Questions, a quote, or a claim — reach a person who knows debris removal and trucking, not a queue.",
    errorMessage: "Something went wrong. Please call us at 844-967-5247.",
  },
  coveragePage: {
    metaTitle: "Debris Removal Insurance — National Coverage, All 50 States",
    metaDescription:
      "Contractors Choice Agency writes debris removal insurance in all 50 states — Texas, Florida, the Southeast, Mountain West, and everywhere junk haulers, dump trucks, and roll-off operators work.",
    h1Lead: "National reach.",
    h1Highlight: "All 50 states, every hauling market.",
    lead: "Contractors Choice Agency places debris removal insurance programs in all 50 states — from Texas and Florida to the Southeast, Mountain West, and everywhere debris haulers run.",
    sectionTitle: "Debris hauling regions we serve.",
    nationwideLead:
      "Whether your hauling operation is in Texas, Florida, the Southeast, the Mountain West, or anywhere in between — one agent, one coordinated program. NPN #8608479.",
    faqs: [
      { q: "Do you only insure debris haulers in certain regions?", a: "No. Contractors Choice Agency is licensed in all 50 states and writes programs for junk haulers, dump truck operators, roll-off contractors, and storm-debris crews anywhere in the country — Texas, Florida, the Southeast, Mountain West, and everywhere in between." },
      { q: "Can you write coverage if I haul across state lines or under interstate authority?", a: "Yes. We structure programs so your commercial auto, liability, and cargo coverage follow you across state lines without gaps — including MCS-90 and other federal filings where your interstate authority requires them." },
      { q: "Do you understand the specific risks of my region's hauling market?", a: "Yes. We work with specialty trucking and contractor markets that understand regional differences — Florida and Gulf Coast storm-debris work, Texas construction and foreclosure volume, and Mountain West long-haul radius exposure." },
      { q: "Can you coordinate coverage across multiple trucks or a multi-state fleet?", a: "Yes. If you run a fleet across multiple states or operate from several yards, we build one coordinated program so there are no gaps between trucks, drivers, or jurisdictions." },
    ],
  },
} as const;

/* ============================================================
   PROCESS
   ============================================================ */
export const PROCESS = [
  { step: "01", icon: PhoneCall, title: "Tell us about your operation", description: "15-min call or form. Fleet list and truck values, drivers and records, radius, cargo types, MC/DOT authority, and the coverage lines your old carrier excluded or under-limited." },
  { step: "02", icon: FileSearch, title: "We shop specialty trucking markets", description: "Niche markets that actually write dump truck, roll-off, and debris-hauling coverage — not generic business markets that carve out the cargo, the filings, or the pollution exposure." },
  { step: "03", icon: FileSignature, title: "Bind a program built for hauling", description: "Dump truck + commercial auto + general liability + workers' comp + pollution, coordinated so there are no gaps across your trucks, your crew, and your cargo." },
  { step: "04", icon: ShieldCheck, title: "Claims support that moves fast", description: "When a truck accident, roll-off claim, or pollution incident arrives, you reach a person with context — not a queue. 2-hour response." },
] as const;

/* ============================================================
   WHY CHOOSE US
   ============================================================ */
export const WHY_CHOOSE = [
  { icon: Truck, title: "Dump truck coverage with real limits", description: "Standard business policies hand haulers $300k state-minimum auto limits. A loaded dump truck in a serious accident can generate multi-million-dollar claims. We place $1M CSL and umbrellas sized for the actual exposure." },
  { icon: Package, title: "Cargo and inland marine that actually pays", description: "Auto covers the truck — the debris you're hauling is a separate matter. We coordinate cargo and inland marine so a tipped load, a fire, or a stolen roll-off box is covered, not denied." },
  { icon: Leaf, title: "Pollution and environmental coverage", description: "Demolition and construction debris can contain asbestos, lead, and silica. Standard GL excludes pollution. We place environmental liability that covers a regulated load and the cleanup that follows." },
  { icon: Car, title: "Commercial auto built for hauling", description: "Personal auto and generic commercial forms exclude business use and cargo. We structure junk removal and dump truck auto — including MCS-90 filings, hired/non-owned, and physical damage at real value." },
  { icon: AlertTriangle, title: "We place the hard hauling risks", description: "Been declined over new MC authority, a prior accident, a DOT recordable, or class of business? We have E&S trucking markets for haulers others won't touch." },
  { icon: HardHat, title: "Run by a former contractor", description: "Josh Cotner knows how hauling operations work and what happens when coverage fails at claim time — on the jobsite and off." },
] as const;

/* ============================================================
   SERVICE DETAIL — keyed by each service slug
   ============================================================ */
export interface ServiceDetail {
  heroBlurb: string;
  whatsCovered: string[];
  whoItsFor: string[];
  whyCca: string[];
  faqs: FAQItem[];
}

export const SERVICE_DETAIL: Record<string, ServiceDetail> = {
  "dump-truck-insurance": {
    heroBlurb: "Commercial auto liability and physical damage for the truck that drives your income — including cargo, MCS-90 filings for interstate authority, and limits sized for the multi-million-dollar claims a loaded dump truck can generate. The #1 coverage a debris hauler must get right.",
    whatsCovered: ["Auto liability for at-fault accidents — $1M CSL and up", "Physical damage: collision, comprehensive, fire, and theft", "Uninsured and underinsured motorist coverage", "Cargo or inland marine for the debris you haul", "MCS-90 / BMC-91 federal financial-responsibility filings", "Hired and non-owned auto for employees on business"],
    whoItsFor: ["Owner-operators and single-truck haulers", "Dump truck fleets running construction, demo, or storm debris", "New-authority operators declined by standard markets", "Any hauler whose current auto policy is at state-minimum limits"],
    whyCca: ["We size limits to the real exposure — $1M CSL floor, umbrellas above", "MCS-90 filings handled and correctly filed at no extra cost", "Specialty trucking markets for new-authority and prior-loss haulers"],
    faqs: faqsJson.services["dump-truck-insurance"] as FAQItem[],
  },
  "general-liability": {
    heroBlurb: "Third-party bodily injury and property damage protection for junk removal and debris hauling — client injuries, scratched driveways, tipped loads, and completed-work claims. We structure junk removal GL with products and completed operations so the coverage tail follows the job.",
    whatsCovered: ["Third-party bodily injury at jobsites and customer property", "Property damage caused during loading, hauling, and unloading", "Products and completed operations coverage", "Defense costs and legal fees", "Damage to premises rented to you", "Medical payments to others"],
    whoItsFor: ["Junk removal and residential cleanout contractors", "Debris haulers working on GC, commercial, and municipal jobs", "Roll-off operators with containers on customer property", "Any hauler required to provide a certificate of insurance"],
    whyCca: ["GL structured with products and completed operations for long claim tails", "Limits sized to what brokers, GCs, and municipalities require", "Coordinated with auto and pollution so there are no gaps"],
    faqs: faqsJson.services["general-liability"] as FAQItem[],
  },
  "commercial-auto": {
    heroBlurb: "Coverage for the trucks, roll-offs, pickups, and trailers you run on public roads — liability, physical damage, uninsured/underinsured motorist, and cargo coverage for the debris in the bed. Personal auto and generic commercial forms exclude business use and cargo; we don't.",
    whatsCovered: ["Liability for at-fault accidents in hauling trucks", "Physical damage to owned trucks and roll-offs", "Uninsured and underinsured motorist coverage", "Cargo and inland marine for the debris you haul", "Hired and non-owned auto for employees", "Trailers and support vehicles on the schedule"],
    whoItsFor: ["Any hauler operating trucks on public roads (legally required)", "Junk removal operators running pickups and box trucks", "Roll-off and dump trailer operators", "Operations whose personal auto excludes business use"],
    whyCca: ["Over-the-road hauling exposure factored into the program", "Coordinates with cargo/inland marine so the load is covered", "Fleet and single-vehicle programs with shared limits"],
    faqs: faqsJson.services["commercial-auto"] as FAQItem[],
  },
  "workers-compensation": {
    heroBlurb: "Coverage for the real injury patterns in debris and junk hauling work — heavy-lifting and loading injuries, equipment and traffic incidents, and storm-debris exposure. Proper class codes for hauling labor so you are neither overpaying nor exposed at audit or claim time.",
    whatsCovered: ["Medical treatment for on-the-job injuries", "Disability and lost-wage benefits for injured workers", "Heavy-lifting, loading, and unloading injuries", "Equipment, skid-steer, and trailer incidents", "Traffic and jobsite exposure claims", "Employers' liability (Part Two) protection"],
    whoItsFor: ["Haulers with W-2 employees (required in most states)", "Loading and unloading crews", "Drivers and demo-debris labor", "Operations whose workers are misclassified under generic codes"],
    whyCca: ["Class codes structured for actual hauling job categories", "High-hazard hauling labor reflected in the rating — not generic codes", "Fast claim handling so injured workers get care without dispute"],
    faqs: faqsJson.services["workers-compensation"] as FAQItem[],
  },
  "roll-off-truck-insurance": {
    heroBlurb: "Coverage built for roll-off operators who leave containers on customer property — commercial auto for the truck, inland marine for the dumpsters themselves, and liability for the on-site exposure that follows a box at a jobsite, driveway, or commercial lot for days or weeks.",
    whatsCovered: ["Commercial auto liability and physical damage for the roll-off truck", "Inland marine for the roll-off containers themselves", "Third-party liability while containers sit on customer property", "Theft, fire, and damage to scheduled containers", "Cargo coverage for the debris in the box", "Loading and unloading liability"],
    whoItsFor: ["Roll-off dumpster rental and hauling operators", "Construction and demolition contractors running roll-offs", "Foreclosure and estate cleanout crews", "Any hauler whose containers sit on third-party property"],
    whyCca: ["Roll-off and inland marine written as one program — not piecemeal", "Containers scheduled at real replacement value", "On-site third-party liability that a dump truck policy misses"],
    faqs: faqsJson.services["roll-off-truck-insurance"] as FAQItem[],
  },
  "pollution-liability": {
    heroBlurb: "Covers the environmental exposure most hauling policies exclude — construction and demolition debris containing asbestos, lead or silica, contaminated soil, fuel and chemical spills, and the cleanup and third-party claims that follow a release at a jobsite or disposal facility.",
    whatsCovered: ["Cleanup and remediation costs on and off your site", "Third-party bodily injury from a release", "Property damage from contaminated debris or spills", "Defense costs for environmental claims", "Sudden and gradual (non-sudden) pollution coverage", "Coverage for regulated loads — asbestos, lead, contaminated soil"],
    whoItsFor: ["Demolition and construction-debris haulers", "Storm-debris contractors handling regulated materials", "Operations hauling contaminated soil or fuel", "Any hauler whose standard GL excludes pollution (most do)"],
    whyCca: ["Pollution coverage written for hauling — not a generic extension", "We document your handling procedures to support placement", "E&S environmental markets for haulers standard carriers decline"],
    faqs: faqsJson.services["pollution-liability"] as FAQItem[],
  },
  "tools-equipment": {
    heroBlurb: "Inland marine covers the tools, equipment, loaders, trailers, and roll-off containers that move between job sites — including theft, fire, collision, and damage — scheduled at replacement cost. Property that a standard property or auto policy was never built to handle.",
    whatsCovered: ["Tools and gear stolen or damaged on jobsites", "Loaders, skid steers, and excavators used in hauling", "Trailers and dump trailers", "Roll-off containers scheduled as equipment", "Equipment in transit between jobsites", "Repair or replacement at replacement cost"],
    whoItsFor: ["Haulers with significant investment in equipment and containers", "Operations storing gear at multiple yards or jobsites", "Roll-off operators with a box fleet", "Any hauler whose equipment moves between locations"],
    whyCca: ["Equipment scheduled at replacement cost — not ACV", "Coordinates with auto so trucks and towed gear are both covered", "Coverage for equipment in transit, not just at a fixed location"],
    faqs: faqsJson.services["tools-equipment"] as FAQItem[],
  },
  "umbrella": {
    heroBlurb: "Excess liability that sits above your commercial auto, general liability, and employers' liability — so when a serious truck accident or injury claim exceeds the underlying limits, the umbrella responds and your business and personal assets are not left in the gap.",
    whatsCovered: ["Excess liability above commercial auto limits", "Excess liability above general liability limits", "Excess employers' liability above workers' comp", "Protection against judgments that exceed underlying limits", "Coverage that follows form over underlying policies", "Limits from $1M to $10M+"],
    whoItsFor: ["Any multi-truck hauling operation", "Haulers bidding commercial or municipal contracts", "Operations whose contracts require a specific umbrella limit", "Owner-operators protecting personal assets from a large claim"],
    whyCca: ["Umbrella layered correctly over auto, GL, and workers' comp", "Limits sized to what your contracts actually require", "One of the most cost-effective layers in the program"],
    faqs: faqsJson.services["umbrella"] as FAQItem[],
  },
};

/* ============================================================
   COVERAGE REGIONS — coverage page
   ============================================================ */
export const AZ_REGIONS = [
  { name: "Phoenix & Central Arizona", note: "Year-round construction and demolition debris hauling" },
  { name: "Dallas–Fort Worth", note: "DFW Metroplex — fast-growing hauling market" },
  { name: "Houston & Gulf Coast", note: "Port, petrochemical, and post-storm debris volume" },
  { name: "Atlanta & North Georgia", note: "Renovation and foreclosure cleanout demand" },
  { name: "Tampa & Orlando", note: "Florida hurricane and storm-debris hauling" },
  { name: "Denver & Front Range", note: "Mountain-region construction and long hauling radius" },
  { name: "Nashville & Middle Tennessee", note: "Construction boom driving dump truck demand" },
  { name: "Charlotte & the Carolinas", note: "Regional residential and commercial renovation hauling" },
];

export const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
  "Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa",
  "Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan",
  "Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire",
  "New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio",
  "Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota",
  "Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia",
  "Wisconsin","Wyoming",
];

export const QUOTE_SERVICE_TYPES = [
  "Dump Truck Insurance",
  "Roll-Off Truck & Dumpster Insurance",
  "Junk Removal / General Liability",
  "Commercial Auto",
  "Workers' Compensation",
  "Storm Debris Cleanup",
  "Demolition & Construction Debris",
  "Pollution / Environmental Liability",
  "Tools & Equipment (Inland Marine)",
  "Commercial Umbrella",
  "Full program / bundle (recommended)",
  "Not sure — help me figure it out",
];

export const YEARS_OPTIONS = [
  "Less than 1 year",
  "1–2 years",
  "3–5 years",
  "6–10 years",
  "10+ years",
];

/* ============================================================
   FAQ helpers — used by location/service/coverage pages to pad to 20.
   ============================================================ */
export const LOCATION_FAQ_BASE = GENERAL_FAQS;

export function buildPageFaqs(base: FAQItem[], extras?: FAQItem[], target = 20): FAQItem[] {
  const merged = [...(extras ?? []), ...base];
  const seen = new Set<string>();
  const out: FAQItem[] = [];
  for (const f of merged) {
    if (seen.has(f.q)) continue;
    seen.add(f.q);
    out.push(f);
    if (out.length >= target) break;
  }
  return out;
}
