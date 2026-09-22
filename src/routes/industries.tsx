import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Calendar, CheckCircle2 } from "lucide-react";
import { Nav, Footer, FinalCtaSection } from "./index";
import retailImg from "@/assets/industries/retail.jpg";
import hospitalityImg from "@/assets/industries/hospitality.jpg";
import engineeringImg from "@/assets/services/engineering.jpg";
import consultingImg from "@/assets/services/consulting.jpg";

export const Route = createFileRoute("/industries")({
  component: IndustriesHubPage,
  head: () => ({
    meta: [
      { title: "Industries We Serve | Lumovy" },
      {
        name: "description",
        content:
          "Lumovy builds Dynamics 365 and Azure solutions shaped by your industry: retail and omnichannel commerce, modern grocery and hypermarkets, hospitality, entertainment and sports, and the regulated sector.",
      },
    ],
  }),
});

function IndustriesHubPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <IndustriesHero />
      <SectorGrid />
      <IndustriesFinalCTA />
      <Footer />
    </div>
  );
}

/* ─────────────────────────────  1. HERO  ───────────────────────────── */
function IndustriesHero() {
  return (
    <section className="hero-blue-static overflow-hidden">
      <div aria-hidden className="hero-grid" />
      <div className="container-enterprise relative z-10 py-24 lg:py-28">
        <div className="max-w-3xl">
          <span className="hero-content-in text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--cyan-soft)]">
            Industries
          </span>
          <h1 className="hero-content-in mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]" style={{ animationDelay: "80ms" }}>
            Industry Expertise Built on Microsoft, Proven in Your Sector
          </h1>
          <p className="hero-content-in mt-6 max-w-2xl text-base leading-relaxed text-white/70" style={{ animationDelay: "160ms" }}>
            Retail, grocery, hospitality, and regulated sector organizations each run on their own
            margins, regulations, and definition of a good day. We build your Dynamics 365 and Azure
            solutions around how your industry operates, not a generic template that gets adjusted
            later.
          </p>
          <p className="hero-content-in mt-4 max-w-2xl text-sm font-medium text-white/55" style={{ animationDelay: "200ms" }}>
            Find your industry below and see the outcomes we build toward.
          </p>
          <div className="hero-content-in mt-9 flex flex-wrap gap-3" style={{ animationDelay: "240ms" }}>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--navy-deep)] transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30"
            >
              <Calendar className="h-4 w-4" />
              Book a Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  2. WHERE WE WORK  ───────────────────────────── */
type Sector = {
  name: string;
  image: string;
  headline: string;
  body: string;
  bullets: string[];
  cta: string;
  href: string;
};

const SECTORS: Sector[] = [
  {
    name: "Retail & Omnichannel Commerce",
    image: retailImg,
    headline: "One View of Inventory, Orders, and Customers",
    body: "Customers switch between your store, app, and website without a second thought; your systems should move just as easily. We connect point of sale, inventory, and fulfillment on Microsoft Dynamics 365 Commerce, building an omnichannel retail solution where every channel pulls from the same accurate data. Whether you need a Microsoft Dynamics 365 retail rollout for a single storefront or a full omnichannel footprint, the result is fewer stockouts, faster fulfillment, and a shopping experience that feels the same everywhere your customer finds you.",
    bullets: [
      "Real-time inventory visibility across every channel",
      "Faster, more flexible order fulfillment, including buy-online-pickup-in-store",
      "One customer profile instead of five disconnected ones",
    ],
    cta: "Explore Retail & Omnichannel Solutions",
    href: "/industries/retail-omnichannel-commerce",
  },
  {
    name: "Modern Grocery & Hypermarkets",
    image: engineeringImg,
    headline: "Grocery Operations That Handle Complexity Without Slowing Down",
    body: "Grocery runs on thin margins and short shelf life, and there is little room for error in perishable inventory or pricing. We configure Dynamics 365 for grocery and hypermarket operations, covering merchandising, cold-chain inventory, and store execution, so waste goes down and shelves stay stocked. Behind the scenes, Microsoft Dynamics 365 for Finance and Operations keeps your cost tracking and financial reporting aligned with what is happening on the floor, so your teams spend less time reconciling spreadsheets and more time running the store.",
    bullets: [
      "Tighter control over perishable inventory and shrinkage",
      "Merchandising and pricing that respond to actual demand",
      "Store operations connected to your supply chain in real time",
    ],
    cta: "Explore Grocery & Hypermarket Solutions",
    href: "/industries/grocery-hypermarkets",
  },
  {
    name: "Hospitality, Entertainment & Sports",
    image: hospitalityImg,
    headline: "Guest Experience That Doesn't Depend on Which System You're Logged Into",
    body: "Your guests judge a venue by how smooth their visit feels, not by which back-office system processed their order. We unify point of sale, food and beverage operations, and venue management on Dynamics 365, so staff spend less time switching between systems and more time serving guests. Adding Dynamics 365 for Customer Service gives your team a single view of guest requests and complaints, so faster transactions and fewer stalled checkouts translate directly into more revenue during your busiest moments.",
    bullets: [
      "Faster checkout and order processing during peak demand",
      "One system for point of sale, inventory, and reporting",
      "Fewer service interruptions during high-traffic events",
    ],
    cta: "Explore Hospitality & Entertainment Solutions",
    href: "/industries/hospitality-entertainment-sports",
  },
  {
    name: "Public Sector",
    image: consultingImg,
    headline: "Government Services That Meet Higher Standards for Security and Delivery",
    body: "Public sector organizations answer to compliance requirements and public scrutiny that most businesses never face. We build case management, licensing, and financial operations on Dynamics 365 for Finance and Operations and Azure, meeting the security and audit standards your agency is required to maintain. With Microsoft Dynamics 365 for Customer Service supporting constituent case handling, constituents get faster service, and your teams get systems built for accountability instead of manual workarounds.",
    bullets: [
      "Security and compliance built to meet government standards",
      "Faster processing for licensing, permitting, and case management",
      "Clear audit trails across every transaction",
    ],
    cta: "Explore Public Sector Solutions",
    href: "/industries/public-sector",
  },
];

function SectorCard({ sector }: { sector: Sector }) {
  return (
    <article className="group card-lift flex flex-col overflow-hidden rounded-xl border border-border bg-white">
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <img
          src={sector.image}
          alt={sector.name}
          loading="lazy"
          width={1024}
          height={576}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/50 to-transparent" />
        <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[var(--navy-deep)] shadow-sm backdrop-blur">
          {sector.name}
        </span>
      </div>
      <div className="flex flex-1 flex-col px-6 pb-6 pt-7">
        <h3 className="text-xl font-semibold leading-snug text-[var(--navy-deep)]">{sector.headline}</h3>
        <p className="mt-3 text-sm leading-relaxed text-[var(--blue-gray)]">{sector.body}</p>
        <ul className="mt-5 space-y-2.5">
          {sector.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm leading-relaxed text-[var(--navy-deep)]">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--royal)]" />
              {b}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-7">
          <a href={sector.href} className="inline-flex items-center gap-2.5">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[9px] bg-[var(--royal)] text-white">
              <ArrowRight className="h-4 w-4" />
            </span>
            <span className="text-sm font-semibold text-[var(--royal)]">{sector.cta}</span>
          </a>
        </div>
      </div>
    </article>
  );
}

function SectorGrid() {
  return (
    <section id="where-we-work" className="relative overflow-hidden border-b border-border bg-[var(--blue-light)]/40 py-28">
      <div aria-hidden className="mesh-blobs-light opacity-60" />
      <div className="container-enterprise relative">
        <div className="max-w-2xl">
          <p className="eyebrow">Where We Work</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Four sectors, one Microsoft foundation
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--blue-gray)]">
            Each solution below is shaped by the regulations, margins, and daily pressure specific to
            that industry.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {SECTORS.map((s) => (
            <SectorCard key={s.name} sector={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  3. FINAL CTA  ───────────────────────────── */
function IndustriesFinalCTA() {
  return (
    <FinalCtaSection
      eyebrow="Not sure where to begin?"
      title="Not Sure Where You Fit?"
      subtitle="Some organizations sit across more than one of these industries, and some of our solutions apply regardless of sector. Tell us what you are running today, and we will point you to the right approach."
      primary={{ label: "Book a Consultation", href: "#contact", icon: true }}
      microcopy="30-minute executive briefing. No sales pitch."
      blueStatic
    />
  );
}
