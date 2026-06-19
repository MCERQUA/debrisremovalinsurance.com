// Centralized site data — used across nav, footer, schema, CTAs
// Debris Removal Insurance — dump truck, junk hauling & roll-off coverage

export const SITE = {
  name: "Debris Removal Insurance",
  legalName: "Debris Removal Insurance (by Contractors Choice Agency)",
  domain: "debrisremovalinsurance.com",
  url: "https://debrisremovalinsurance.com",
  tagline: "Insurance for Debris Removal, Junk Hauling & Dump Truck Contractors",
  description:
    "Specialized commercial insurance for debris removal and junk hauling contractors — dump truck insurance, commercial auto for junk removal, general liability, workers' compensation, roll-off truck & dumpster coverage, pollution and environmental liability for demolition debris, tools and equipment (inland marine), and commercial umbrella. A-rated carriers. 15-minute quotes. Licensed all 50 states.",
  phone: "844-967-5247",
  phoneAlt: "855-336-7189",
  phoneHref: "tel:+18449675247",
  phoneAltHref: "tel:+18553367189",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road, Suite #105",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  claimsSla: "2-hour claims response",
  quoteSla: "15-minute quote turnaround",
  statesLicensed: "All 50 states",
} as const;

// Niche nouns used in headings, metadata, and component copy
export const BRAND = {
  brandShort: "Debris Removal",
  brandSub: "Contractor Insurance",
  nicheShort: "debris hauler",
  nicheShortCap: "Debris Hauler",
  nichePlural: "debris haulers",
  nichePluralCap: "Debris Haulers",
  operator: "hauling operation",
  operatorCap: "Hauling Operation",
  industry: "debris removal",
  industryCap: "Debris Removal",
  audience: "junk haulers and dump truck operators",
  audienceCap: "Junk Haulers & Dump Truck Operators",
  ownerTitle: "debris contractor",
  regionPill: "Texas · Florida · National",
  serviceSuffix: "Debris Haulers",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Coverage", href: "/coverage" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "dump-truck-insurance",
    title: "Dump Truck Insurance",
    short: "Protect the truck that drives your income",
    description:
      "The coverage that defines a debris hauler's risk. Commercial auto liability plus physical damage for your dump truck — including collision, comprehensive, fire and theft, cargo, MCS-90 filings for interstate authority, and limits sized for the multi-million-dollar claims a loaded truck can generate. Built for owner-operators and fleets.",
    icon: "Truck",
    keywords: ["commercial dump truck insurance", "dump truck insurance", "dump truck insurance quotes", "dump truck insurance near me"],
  },
  {
    slug: "general-liability",
    title: "General Liability Insurance",
    short: "Premises, jobsite & completed operations",
    description:
      "Third-party bodily injury and property damage protection for junk removal and debris hauling — a client trip-and-fall, a scratched driveway, a tipped load that damages a structure. We structure junk removal GL with products and completed operations so the coverage tail follows the work after you pull away.",
    icon: "ShieldCheck",
    keywords: ["general liability insurance for junk removal", "junk removal general liability insurance", "debris contractor insurance"],
  },
  {
    slug: "commercial-auto",
    title: "Commercial Auto Insurance",
    short: "Junk removal trucks, roll-offs & support vehicles",
    description:
      "Coverage for the trucks, roll-offs, pickups, and trailers you run on public roads — including liability, physical damage, uninsured/underinsured motorist, hired and non-owned auto, and cargo/inland marine for the debris you haul. Coordinated so the truck and the load are both covered in transit.",
    icon: "Car",
    keywords: ["commercial auto insurance for junk removal", "junk removal truck insurance"],
  },
  {
    slug: "workers-compensation",
    title: "Workers' Compensation",
    short: "For hauling crews, loaders & demo labor",
    description:
      "Coverage for the real injury patterns in debris and junk hauling work — heavy-lifting and loading injuries, equipment and traffic incidents, and storm-debris exposure. Proper class codes for hauling labor so you are neither overpaying nor exposed at audit or claim time.",
    icon: "HardHat",
    keywords: ["junk removal workers compensation", "hauling contractor workers comp", "workers comp debris removal"],
  },
  {
    slug: "roll-off-truck-insurance",
    title: "Roll-Off Truck & Dumpster Insurance",
    short: "Trucks, containers & on-site liability",
    description:
      "Coverage built for roll-off operators who leave containers on customer property — commercial auto for the truck, inland marine for the dumpsters themselves, and liability for the on-site exposure that follows a box while it sits at a jobsite, driveway, or commercial lot for days or weeks.",
    icon: "Trash2",
    keywords: ["roll off truck insurance", "roll off dumpster insurance"],
  },
  {
    slug: "pollution-liability",
    title: "Pollution & Environmental Liability",
    short: "Demo debris, asbestos, contaminated soil",
    description:
      "Covers the environmental exposure most hauling policies exclude — construction and demolition debris containing asbestos, lead or silica, contaminated soil, fuel and chemical spills, and the cleanup and third-party claims that follow a release at a jobsite or disposal facility.",
    icon: "Leaf",
    keywords: ["demolition and debris removal insurance", "hazardous debris removal insurance", "environmental cleanup insurance"],
  },
  {
    slug: "tools-equipment",
    title: "Tools, Equipment & Inland Marine",
    short: "Loaders, trailers, containers & gear",
    description:
      "Covers the tools, equipment, loaders, trailers, and roll-off containers that move between job sites — including theft, fire, collision, and damage — and scheduled at replacement cost. Property that a standard property or auto policy was never built to handle.",
    icon: "Wrench",
    keywords: ["junk removal commercial insurance", "debris removal business insurance"],
  },
  {
    slug: "umbrella",
    title: "Commercial Umbrella Insurance",
    short: "Excess liability above your auto & GL",
    description:
      "Excess liability that sits above your commercial auto, general liability, and employers' liability — so when a serious truck accident or injury claim exceeds your underlying limits, the umbrella responds and your business and personal assets are not left in the gap.",
    icon: "Umbrella",
    keywords: ["debris removal business insurance", "demolition contractor insurance", "waste hauler insurance"],
  },
] as const;

export const LOCATIONS = [
  { slug: "phoenix", name: "Phoenix & Central Arizona", region: "Maricopa · Pinal County", blurb: "Year-round construction and demolition activity makes the Phoenix metro a core debris-hauling market. We insure Arizona dump truck operators, junk haulers, and roll-off contractors — from dust-storm and heat-exposed fleets to new-authority owner-operators — with class codes and markets built for the desert Southwest." },
  { slug: "dallas-fort-worth", name: "Dallas–Fort Worth", region: "DFW Metroplex · North Texas", blurb: "One of the fastest-growing hauling markets in the country. Coverage built for DFW dump truck operators, roll-off contractors, and junk haulers running construction-debris, foreclosure, and storm work across the Metroplex — including the high-limit requirements Texas commercial jobs demand." },
  { slug: "houston", name: "Houston & Gulf Coast", region: "Greater Houston · Texas Gulf Coast", blurb: "Houston's port, petrochemical, and post-storm debris volume drive heavy hauling demand. Programs sized for Houston-area dump truck fleets, demolition-debris haulers, and hurricane cleanup crews — including pollution and environmental coverage for regulated loads." },
  { slug: "atlanta", name: "Atlanta & North Georgia", region: "Metro Atlanta · I-85 Corridor", blurb: "Atlanta's booming renovation and foreclosure-cleanout market keeps junk haulers busy year-round. We insure Georgia dump truck operators, roll-off contractors, and residential junk removal crews with programs built for the Southeast's traffic and weather exposure." },
  { slug: "tampa-orlando", name: "Tampa & Orlando", region: "Central Florida · I-4 Corridor", blurb: "Florida's hurricane and storm-debris season creates some of the most intense hauling demand in the country. Coverage for Tampa and Orlando dump truck operators, junk haulers, and storm-debris contractors — including the FEMA and municipal contract endorsements Florida work requires." },
  { slug: "denver", name: "Denver & Front Range", region: "Colorado Front Range", blurb: "Denver's growth and mountain-region construction drive steady debris hauling. Programs for Colorado dump truck operators, roll-off contractors, and junk haulers — sized for altitude, weather, and the long hauling radius Front Range operators run." },
  { slug: "nashville", name: "Nashville & Middle Tennessee", region: "Metro Nashville · I-40 Corridor", blurb: "Nashville's construction boom fuels demand for dump truck and roll-off operators across Middle Tennessee. We insure Tennessee junk haulers and debris contractors with programs built for the region's residential and commercial renovation volume." },
  { slug: "charlotte", name: "Charlotte & the Carolinas", region: "Charlotte Metro · I-77 / I-85", blurb: "Charlotte's rapid expansion keeps debris haulers and junk removal crews running across the Carolinas. Coverage for North and South Carolina dump truck operators, roll-off contractors, and foreclosure cleanout crews — with limits that meet regional commercial jobs." },
] as const;

export const CREDENTIALS = [
  { label: "Licensed in all 50 states", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "Specialty trucking markets", icon: "HardHat" },
  { label: "15-minute quote turnaround", icon: "Timer" },
  { label: "2-hour claims response", icon: "Zap" },
  { label: "A.M. Best A+ carrier partners", icon: "Award" },
] as const;

export const STATS = [
  { value: 2, suffix: " hr", label: "Claims response — every policy", prefix: "" },
  { value: 58, suffix: "M+", label: "Annual premium placed for contractors", prefix: "$" },
  { value: 50, suffix: "", label: "States licensed & writing", prefix: "" },
  { value: 20, suffix: "+", label: "Years insuring trade contractors", prefix: "" },
] as const;

export const TESTIMONIALS = [
  { quote: "I was declined by three agents because my MC authority was only 60 days old. These folks placed a real dump truck program — $1M auto liability, physical damage, and the MCS-90 filing — at a number I could actually afford. No panic pricing, no voicemail runaround.", name: "Marcus T.", role: "Owner-Operator", location: "Dallas–Fort Worth, TX" },
  { quote: "A roll-off box got hit in a customer's driveway and the third-party damage claim was on me. My old carrier tried to deny it. The roll-off and inland marine program these folks built covered the container and the liability. They actually understand what we do.", name: "Renee D.", role: "Roll-Off Contractor", location: "Tampa, FL" },
  { quote: "After Hurricane cleanup work, our standard hauling policy wouldn't have covered half of what we hauled. They added the pollution and storm-debris endorsements and got our limits to where the FEMA contract required. Specialty markets you can't find with a generic agent.", name: "Dwayne P.", role: "Storm Debris Contractor", location: "Houston, TX" },
] as const;
