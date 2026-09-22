import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Landmark,
  Boxes,
  Store,
  Users,
  Link2,
} from "lucide-react";
import { Nav, Footer, CaseStudyCard, FaqAccordion, FinalCtaSection } from "./index";
import consultingImg from "@/assets/services/consulting.jpg";
import engineeringImg from "@/assets/services/engineering.jpg";
import implementationImg from "@/assets/services/implementation.jpg";
import supportImg from "@/assets/services/support.jpg";
import mafLogo from "@/assets/logos/majid-al-futtaim.png";
import mafCaseImg from "@/assets/case-studies/majid-al-futtaim.jpg";
import cavendersLogo from "@/assets/logos/cavenders.png";
import cavendersCaseImg from "@/assets/case-studies/cavenders.jpg";
import mattressFirmLogo from "@/assets/logos/mattress-firm.png";
import mattressFirmCaseImg from "@/assets/case-studies/mattress-firm.jpg";

export const Route = createFileRoute("/what-we-do_/practice-areas")({
  component: PracticeAreasHubPage,
  head: () => ({
    meta: [
      { title: "Practice Areas | Lumovy" },
      {
        name: "description",
        content:
          "Lumovy brings Microsoft technology and deep functional expertise together across finance, supply chain, commerce and customer engagement to help businesses improve the way they operate, serve customers and grow.",
      },
    ],
  }),
});

function PracticeAreasHubPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <PracticeAreasHero />
      <PracticeAreasOverview />
      <CapabilityDepth />
      <CrossFunctional />
      <IndustryApplication />
      <PracticeAreasProof />
      <PracticeAreasCaseStudies />
      <PracticeAreasFAQ />
      <PracticeAreasFinalCTA />
      <Footer />
    </div>
  );
}

/* ─────────────────────────────  1. HERO  ───────────────────────────── */
function PracticeAreasHero() {
  return (
    <section className="hero-blue-static overflow-hidden">
      <div aria-hidden className="hero-grid" />
      <div className="container-enterprise relative z-10 py-24 lg:py-28">
        <div className="max-w-3xl">
          <span className="hero-content-in text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--cyan-soft)]">
            Practice Areas
          </span>
          <h1 className="hero-content-in mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]" style={{ animationDelay: "80ms" }}>
            Business expertise built around how you operate
          </h1>
          <p className="hero-content-in mt-6 max-w-2xl text-base leading-relaxed text-white/70" style={{ animationDelay: "160ms" }}>
            Lumovy brings Microsoft technology and deep functional expertise together across
            finance, supply chain, commerce and customer engagement to help businesses improve
            the way they operate, serve customers and grow.
          </p>
          <div className="hero-content-in mt-9 flex flex-wrap gap-3" style={{ animationDelay: "240ms" }}>
            <a
              href="#overview"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--navy-deep)] transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30"
            >
              Explore our capabilities
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  2. PRACTICE AREAS OVERVIEW  ───────────────────────────── */
type PracticeArea = {
  name: string;
  image: string;
  body: string;
  cta: string;
  href: string;
};

const PRACTICE_AREAS: PracticeArea[] = [
  {
    name: "Finance & Controllership",
    image: consultingImg,
    body: "Dynamics 365 Finance built around how your finance function actually works, from core accounting to tax and reporting.",
    cta: "Explore Finance & Controllership",
    href: "/what-we-do/practice-areas/finance",
  },
  {
    name: "Supply Chain & Manufacturing",
    image: engineeringImg,
    body: "Connect planning, procurement, inventory and production for operations that respond faster to change.",
    cta: "Explore Supply Chain & Manufacturing",
    href: "/what-we-do/practice-areas/supply-chain",
  },
  {
    name: "Commerce & Store Operations",
    image: implementationImg,
    body: "Create connected experiences across stores, commerce, inventory and customer journeys.",
    cta: "Explore Commerce & Store Operations",
    href: "/what-we-do/practice-areas/commerce",
  },
  {
    name: "Customer Engagement",
    image: supportImg,
    body: "With Dynamics 365 Customer Engagement, build sales, service and engagement experiences that turn customer data into action.",
    cta: "Explore Customer Engagement",
    href: "/what-we-do/practice-areas/customer-engagement",
  },
];

function PracticeAreaCard({ area }: { area: PracticeArea }) {
  return (
    <article className="group card-lift flex flex-col overflow-hidden rounded-xl border border-border bg-white">
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <img
          src={area.image}
          alt={area.name}
          loading="lazy"
          width={1024}
          height={576}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/50 to-transparent" />
        <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[var(--navy-deep)] shadow-sm backdrop-blur">
          {area.name}
        </span>
      </div>
      <div className="flex flex-1 flex-col px-6 pb-6 pt-7">
        <p className="text-sm leading-relaxed text-[var(--blue-gray)]">{area.body}</p>
        <div className="mt-auto pt-7">
          <a href={area.href} className="inline-flex items-center gap-2.5">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[9px] bg-[var(--royal)] text-white transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="h-4 w-4" />
            </span>
            <span className="text-sm font-semibold text-[var(--royal)]">{area.cta}</span>
          </a>
        </div>
      </div>
    </article>
  );
}

function PracticeAreasOverview() {
  return (
    <section id="overview" className="relative overflow-hidden border-b border-border bg-[var(--blue-light)]/40 py-28">
      <div aria-hidden className="mesh-blobs-light opacity-60" />
      <div className="container-enterprise relative">
        <div className="max-w-2xl">
          <p className="eyebrow">Practice Areas Overview</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Four areas of expertise. One connected view of your business.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {PRACTICE_AREAS.map((a) => (
            <PracticeAreaCard key={a.name} area={a} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  3. CAPABILITY DEPTH  ───────────────────────────── */
const CAPABILITIES = [
  {
    icon: Landmark,
    name: "Finance",
    examples: "Core accounting and controls, costing and revenue, planning and reporting, tax",
  },
  {
    icon: Boxes,
    name: "Supply Chain & Manufacturing",
    examples: "Planning, procurement, inventory, warehouse, manufacturing",
  },
  {
    icon: Store,
    name: "Commerce",
    examples: "Store operations, merchandising, point of sale, omnichannel commerce",
  },
  {
    icon: Users,
    name: "Customer Engagement",
    examples: "Sales, service, customer insights, field service",
  },
];

function CapabilityDepth() {
  return (
    <section className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <div className="max-w-3xl">
          <p className="eyebrow">Capability depth</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            From business challenge to practical capability.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {CAPABILITIES.map((c) => (
            <div key={c.name} className="card-lift group relative overflow-hidden rounded-xl border border-border bg-white p-7">
              <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-[var(--royal)] transition-transform duration-500 group-hover:scale-x-100" />
              <span className="inline-grid h-11 w-11 place-items-center rounded-2xl bg-[var(--blue-light)] text-[var(--royal)] ring-1 ring-inset ring-[var(--royal)]/20">
                <c.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-[var(--navy-deep)]">{c.name}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[var(--blue-gray)]">{c.examples}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  4. CROSS-FUNCTIONAL CONNECTION  ───────────────────────────── */
function CrossFunctional() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[var(--blue-light)]/30 py-28">
      <div aria-hidden className="mesh-blobs-light opacity-50" />
      <div className="container-enterprise relative">
        <div className="max-w-3xl">
          <p className="eyebrow">Cross-functional connection</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Your business doesn&apos;t operate in silos. Neither should your technology.
          </h2>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-[var(--royal)]/10 bg-white p-8 sm:gap-5">
          {["Finance", "Supply Chain", "Commerce", "Customer"].map((label, i, arr) => (
            <div key={label} className="flex items-center gap-3 sm:gap-5">
              <span className="rounded-full bg-[var(--blue-light)] px-5 py-2.5 text-sm font-semibold text-[var(--navy-deep)]">
                {label}
              </span>
              {i < arr.length - 1 && <Link2 className="h-4 w-4 shrink-0 text-[var(--royal)]" />}
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-[var(--blue-gray)]">
          A finance close depends on accurate inventory data. A store promotion depends on supply
          chain readiness. A service case depends on order history. Lumovy connects these
          functions through Dynamics 365, Power Platform, data and integrations, so the systems
          behind your business work the way your business actually does.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────  5. INDUSTRY APPLICATION  ───────────────────────────── */
type IndustryLink = { name: string; href: string };
type IndustryMapping = { practice: string; industries: IndustryLink[] };

const INDUSTRY_MAP: IndustryMapping[] = [
  {
    practice: "Finance & Controllership",
    industries: [
      { name: "Public Sector", href: "/industries/public-sector" },
      { name: "Retail & Omnichannel Commerce", href: "/industries/retail-omnichannel-commerce" },
    ],
  },
  {
    practice: "Supply Chain & Manufacturing",
    industries: [
      { name: "Modern Grocery & Hypermarkets", href: "/industries/grocery-hypermarkets" },
      { name: "Retail & Omnichannel Commerce", href: "/industries/retail-omnichannel-commerce" },
    ],
  },
  {
    practice: "Commerce & Store Operations",
    industries: [
      { name: "Retail & Omnichannel Commerce", href: "/industries/retail-omnichannel-commerce" },
      { name: "Modern Grocery & Hypermarkets", href: "/industries/grocery-hypermarkets" },
      { name: "Hospitality, Entertainment & Sports", href: "/industries/hospitality-entertainment-sports" },
    ],
  },
  {
    practice: "Customer Engagement",
    industries: [
      { name: "Hospitality, Entertainment & Sports", href: "/industries/hospitality-entertainment-sports" },
      { name: "Retail & Omnichannel Commerce", href: "/industries/retail-omnichannel-commerce" },
    ],
  },
];

function IndustryApplication() {
  return (
    <section className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <div className="max-w-2xl">
          <p className="eyebrow">Industry application</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Expertise that understands your industry
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {INDUSTRY_MAP.map((m) => (
            <div key={m.practice} className="rounded-xl border border-border bg-white p-7">
              <h3 className="text-lg font-semibold text-[var(--navy-deep)]">{m.practice}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {m.industries.map((ind) => (
                  <a
                    key={ind.name}
                    href={ind.href}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[var(--blue-light)]/60 px-3.5 py-1.5 text-xs font-semibold text-[var(--navy-deep)] transition-colors hover:bg-[var(--blue-light)]"
                  >
                    {ind.name}
                    <ArrowRight className="h-3 w-3" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <a
            href="/industries"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--royal)] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[var(--navy)]"
          >
            Explore our industry expertise
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  6. PROOF  ───────────────────────────── */
const PROOF_STATS: [string, string][] = [
  ["320+", "Completed projects"],
  ["300+", "Dynamics 365 consultants globally"],
  ["50+", "Active customers"],
  ["95%", "Retention rate"],
];

function PracticeAreasProof() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[var(--blue-light)]/40 py-28">
      <div aria-hidden className="mesh-blobs-light opacity-60" />
      <div className="container-enterprise relative">
        <div className="max-w-2xl">
          <p className="eyebrow">Proof</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Expertise backed by real-world delivery.
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {PROOF_STATS.map(([v, l]) => (
            <div key={l} className="rounded-xl border border-border bg-white p-7 text-center">
              <div className="text-3xl font-bold tracking-tight text-[var(--navy-deep)] sm:text-4xl">{v}</div>
              <div className="mt-2 text-sm font-medium leading-tight text-[var(--blue-gray)]">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  7. CASE STUDIES  ───────────────────────────── */
const PRACTICE_AREAS_CASE_STUDIES = [
  {
    sector: "Majid Al Futtaim (Sava)",
    image: mafCaseImg,
    logo: mafLogo,
    title: "Cloud-First Grocery & Discount Launch in Under 100 Days",
    results: [
      ["100 days", "To full ERP-enabled store operations"],
      ["130+", "Business processes, 14 modules"],
      ["1,600+", "SKUs; 160 weekly offers"],
    ] as [string, string][],
  },
  {
    sector: "Cavender's",
    image: cavendersCaseImg,
    logo: cavendersLogo,
    logoClass: "max-h-8",
    title: "Unified, AI Powered Customer Experience",
    results: [
      ["+75%", "Agent efficiency"],
      ["-60%", "Case processing time"],
      ["-50%", "Manual effort"],
    ] as [string, string][],
  },
  {
    sector: "Mattress Firm",
    image: mattressFirmCaseImg,
    logo: mattressFirmLogo,
    title: "One-Stop End-to-End Test Automation",
    results: [
      ["87%", "Manual-effort savings"],
      ["65%", "Cycle-time reduction"],
      ["+60%", "New capabilities per release"],
    ] as [string, string][],
  },
];

function PracticeAreasCaseStudies() {
  return (
    <section className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow">Insights &amp; case studies</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
              Ideas for better business operations.
            </h2>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--royal)]">
            View more
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PRACTICE_AREAS_CASE_STUDIES.map((c) => (
            <CaseStudyCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  8. FAQ  ───────────────────────────── */
const PRACTICE_AREAS_FAQS: [string, string][] = [
  [
    "Do you work across all four practice areas, or just one at a time?",
    "Most engagements start with one practice and expand as the connected work becomes clear. We can also support all four together for larger transformations.",
  ],
  [
    "We already use Dynamics 365. Can Lumovy improve what we have instead of rebuilding it?",
    "Yes. A lot of our Finance and Commerce work is exactly this, fixing gaps, re-engineering processes and adding controls to an existing setup rather than starting over.",
  ],
  [
    "How do Practice Areas connect to your Products & Accelerators?",
    "Our accelerators come out of real practice area delivery. For example, our Finance accelerators are built from actual migration and process work, so they plug directly into the practice they support.",
  ],
  [
    "Do you offer industry-specific expertise within each practice area?",
    "Yes. Each practice area is shaped by the industries we work in most, retail, grocery, hospitality and public sector, so the approach reflects how those businesses actually operate.",
  ],
  [
    "What happens after the initial engagement in a practice area?",
    "Our Delivery & Support team takes over for ongoing optimization, support and expansion, so the work doesn't stop once the initial implementation goes live.",
  ],
];

function PracticeAreasFAQ() {
  return (
    <section className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <FaqAccordion
          title="Common questions about our practice areas"
          intro="Still have questions about which practice area fits your business? Book a call and we'll walk you through it."
          items={PRACTICE_AREAS_FAQS}
        />
      </div>
    </section>
  );
}

/* ─────────────────────────────  9. FINAL CTA  ───────────────────────────── */
function PracticeAreasFinalCTA() {
  return (
    <FinalCtaSection
      id="contact"
      title="Where Could Your Business Operate Better?"
      subtitle="Tell us where things feel disconnected today, and we'll show you how the right practice area, or combination of practice areas, closes the gap."
      primary={{ label: "Talk to a Lumovy expert", href: "#contact", icon: true }}
      microcopy="30-minute executive briefing. No sales pitch."
      blueStatic
    />
  );
}
