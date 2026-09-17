import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Boxes,
  Sparkles,
  Zap,
  Rocket,
  BadgeCheck,
  Search,
  SlidersHorizontal,
  Link2,
  TrendingUp,
  Compass,
  ArrowUpRight,
} from "lucide-react";
import { Nav, Footer, FaqAccordion, FinalCtaSection, CardSlider } from "./index";
import retailImg from "@/assets/industries/retail.jpg";
import engineeringImg from "@/assets/services/engineering.jpg";
import implementationImg from "@/assets/services/implementation.jpg";
import hospitalityImg from "@/assets/industries/hospitality.jpg";
import consultingImg from "@/assets/services/consulting.jpg";
import supportImg from "@/assets/services/support.jpg";

export const Route = createFileRoute("/what-we-do_/products-accelerators")({
  component: ProductsAcceleratorsPage,
  head: () => ({
    meta: [
      { title: "Products & Accelerators | Lumovy" },
      {
        name: "description",
        content:
          "Lumovy's products and accelerators bring reusable technology, industry expertise, and proven solution patterns into your transformation, helping reduce complexity and accelerate business outcomes.",
      },
    ],
  }),
});

function ProductsAcceleratorsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <ProductsHero />
      <ThePortfolio />
      <WhyAcceleratorsMatter />
      <FeaturedSolutions />
      <ProductDetailGrid />
      <AcceleratorToImplementation />
      <OutcomesProof />
      <ProductsFAQ />
      <ProductsFinalCTA />
      <Footer />
    </div>
  );
}

/* ─────────────────────────────  1. HERO  ───────────────────────────── */
function ProductsHero() {
  return (
    <section className="relative overflow-hidden bg-[#003594]">
      <div aria-hidden className="hero-grid" />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[8%] -top-[22rem] h-[42rem] w-[42rem] rounded-full blur-[40px]"
        style={{ background: "radial-gradient(circle, color-mix(in oklch, var(--azure) 55%, #003594) 0%, color-mix(in oklch, var(--azure) 40%, #003594) 60%, transparent 72%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[16rem] -top-[8rem] h-[46rem] w-[46rem] rounded-full blur-[40px]"
        style={{ background: "radial-gradient(circle, color-mix(in oklch, var(--azure) 48%, #003594) 0%, color-mix(in oklch, var(--azure) 34%, #003594) 58%, transparent 70%)" }}
      />
      <div className="container-enterprise relative z-10 py-24 lg:py-28">
        <div className="max-w-3xl">
          <span className="hero-content-in text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--cyan-soft)]">
            Products &amp; Accelerators
          </span>
          <h1 className="hero-content-in mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]" style={{ animationDelay: "80ms" }}>
            Proven Building Blocks for What&apos;s Next
          </h1>
          <p className="hero-content-in mt-6 max-w-2xl text-base leading-relaxed text-white/70" style={{ animationDelay: "160ms" }}>
            Lumovy&apos;s products and accelerators bring reusable technology, industry expertise,
            and proven solution patterns into your transformation, helping reduce complexity and
            accelerate business outcomes.
          </p>
          <div className="hero-content-in mt-9 flex flex-wrap gap-3" style={{ animationDelay: "240ms" }}>
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--navy-deep)] transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30"
            >
              Explore our solutions
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  2. THE PORTFOLIO (3 categories)  ───────────────────────────── */
type PortfolioItem = { image: string; name: string; href: string };
type PortfolioGroup = { name: string; blurb: string; items: PortfolioItem[] };

const PORTFOLIO_GROUPS: PortfolioGroup[] = [
  {
    name: "Industry Solutions",
    blurb: "Solutions built around specific operating environments.",
    items: [
      { image: retailImg, name: "D365 for Hypermarkets", href: "/what-we-do/products-accelerators/hypermarket-accelerator" },
      { image: hospitalityImg, name: "Innovative Hospitality Solution", href: "/what-we-do/products-accelerators/hospitality-solution" },
      { image: consultingImg, name: "Consumer Swift Commerce", href: "/products/consumer-swift-commerce" },
    ],
  },
  {
    name: "Enterprise Accelerators",
    blurb: "Reusable solutions that speed up common transformation requirements.",
    items: [
      { image: supportImg, name: "B2B in a Box", href: "/what-we-do/products-accelerators/b2b-in-a-box" },
      { image: implementationImg, name: "In-Store Mobility Suite", href: "/what-we-do/products-accelerators/in-store-mobility-suite" },
    ],
  },
  {
    name: "Technology Accelerators",
    blurb: "Tools designed to improve integration, performance and optimization.",
    items: [
      { image: engineeringImg, name: "Clarity RFID Connector", href: "/what-we-do/products-accelerators/rfid-connect" },
      { image: consultingImg, name: "Optim365", href: "/what-we-do/products-accelerators/optim365" },
      { image: engineeringImg, name: "PerfLens365", href: "/what-we-do/products-accelerators/perflens365" },
    ],
  },
];

function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <a
      href={item.href}
      className="group card-lift flex flex-col overflow-hidden rounded-xl border border-border bg-white"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/50 to-transparent" />
      </div>
      <div className="flex items-center justify-between gap-3 p-5">
        <span className="text-[15px] font-semibold text-[var(--navy-deep)]">{item.name}</span>
        <ArrowRight className="h-4 w-4 shrink-0 text-[var(--royal)] transition-transform group-hover:translate-x-0.5" />
      </div>
    </a>
  );
}

function ThePortfolio() {
  return (
    <section id="portfolio" className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <div className="max-w-2xl">
          <p className="eyebrow">The portfolio</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Built around the problem you&apos;re solving
          </h2>
        </div>
        <div className="mt-14 space-y-14">
          {PORTFOLIO_GROUPS.map((group) => (
            <div key={group.name}>
              <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-border pb-5">
                <h3 className="text-xl font-semibold tracking-tight text-[var(--navy-deep)]">{group.name}</h3>
                <p className="text-sm leading-relaxed text-[var(--blue-gray)]">{group.blurb}</p>
              </div>
              <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => (
                  <PortfolioCard key={item.name} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  3. WHY D365 ACCELERATORS MATTER (4-point visual)  ───────────────────────────── */
const WHY_MATTER = [
  {
    icon: BadgeCheck,
    title: "Proven patterns",
    body: "Built from repeated, real-world delivery, not theory. Optim365's five pillars and In-Store Mobility Suite's five apps both come from patterns Lumovy has already solved for retail estates on Dynamics 365.",
  },
  {
    icon: SlidersHorizontal,
    title: "Reduced complexity",
    body: "Address common implementation challenges with pre-built components instead of custom development. Consumer Swift Commerce gives retailers a native mobile app without a long custom build cycle.",
  },
  {
    icon: Zap,
    title: "Faster deployment",
    body: "PerfLens365 runs as a 3 to 4 week engagement with pre-built test scenarios. Optim365 quantifies its opportunity within weeks of starting. Speed comes from not rebuilding what already exists.",
  },
  {
    icon: Sparkles,
    title: "Designed for Microsoft",
    body: "Every accelerator sits natively inside the Dynamics 365 and Power Platform ecosystem, no bolt-on tools, no parallel systems to maintain.",
  },
];

function WhyAcceleratorsMatter() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[var(--blue-light)]/40 py-28">
      <div aria-hidden className="mesh-blobs-light opacity-60" />
      <div className="container-enterprise relative">
        <div className="max-w-2xl">
          <p className="eyebrow">Why Dynamics 365 accelerators matter</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Why start from scratch when the groundwork already exists?
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_MATTER.map((w) => (
            <div key={w.title} className="card-lift group relative overflow-hidden rounded-xl border border-border bg-white p-7">
              <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-[var(--royal)] transition-transform duration-500 group-hover:scale-x-100" />
              <span className="inline-grid h-11 w-11 place-items-center rounded-2xl bg-[var(--blue-light)] text-[var(--royal)] ring-1 ring-inset ring-[var(--royal)]/20">
                <w.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-[var(--navy-deep)]">{w.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--blue-gray)]">{w.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  4. FEATURED SOLUTIONS (2-3 highlighted)  ───────────────────────────── */
const FEATURED = [
  {
    image: retailImg,
    name: "D365 for Hypermarkets",
    body: "The retail accelerator that took a grocery and discount launch live in 100 days, across 130+ business processes and 14 modules.",
    href: "/what-we-do/products-accelerators/hypermarket-accelerator",
  },
  {
    image: implementationImg,
    name: "In-Store Mobility Suite",
    body: "Five integrated Power Apps that bring store-level ordering, labelling, write-offs and counting onto one handheld screen.",
    href: "/what-we-do/products-accelerators/in-store-mobility-suite",
  },
  {
    image: engineeringImg,
    name: "Optim365",
    body: "A five-pillar accelerator that keeps a Dynamics 365 environment performing, costing and auditing like it just went live.",
    href: "/what-we-do/products-accelerators/optim365",
  },
];

function FeaturedSolutions() {
  return (
    <section className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <div className="max-w-2xl">
          <p className="eyebrow">Featured solutions</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            A closer look at three flagship accelerators
          </h2>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {FEATURED.map((f) => (
            <a
              key={f.name}
              href={f.href}
              className="group card-lift flex flex-col overflow-hidden rounded-xl border border-border bg-white"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <img
                  src={f.image}
                  alt={f.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/50 to-transparent" />
                <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[var(--navy-deep)] shadow-sm backdrop-blur">
                  {f.name}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <p className="flex-1 text-sm leading-relaxed text-[var(--blue-gray)]">{f.body}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--royal)]">
                  Explore solution
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  5. PRODUCT DETAIL GRID (complete portfolio, all 8, slider)  ───────────────────────────── */
type ProductDetail = {
  image: string;
  name: string;
  problem: string;
  builtFor: string;
  tags: string[];
  href: string;
};

const PRODUCT_DETAILS: ProductDetail[] = [
  {
    image: retailImg,
    name: "D365 for Hypermarkets",
    problem: "Launching complex, high-volume grocery or discount retail on D365 without a slow custom build",
    builtFor: "Hypermarkets, grocery, discount retail",
    tags: ["Store operations", "High SKU volume", "Rapid go-live"],
    href: "/what-we-do/products-accelerators/hypermarket-accelerator",
  },
  {
    image: hospitalityImg,
    name: "Innovative Hospitality Solution",
    problem: "Managing event-driven demand across menus, pricing and inventory",
    builtFor: "High-volume restaurants, venues, multi-venue operators",
    tags: ["Event-based menus", "Dynamic pricing", "Real-time inventory"],
    href: "/what-we-do/products-accelerators/hospitality-solution",
  },
  {
    image: engineeringImg,
    name: "Clarity RFID Connector",
    problem: "Manual inventory counting creating gaps between stock and ERP records",
    builtFor: "High-volume inventory environments",
    tags: ["Automated counting", "Real-time visibility", "D365 F&O integration"],
    href: "/what-we-do/products-accelerators/rfid-connect",
  },
  {
    image: supportImg,
    name: "B2B in a Box",
    problem: "Standard D365 Commerce isn't built for B2B quote-to-order complexity",
    builtFor: "B2B distributors and wholesalers on D365 Commerce",
    tags: ["Quote-to-order", "Approval workflows", "ATP calculation", "E-com returns"],
    href: "/what-we-do/products-accelerators/b2b-in-a-box",
  },
  {
    image: consultingImg,
    name: "Consumer Swift Commerce",
    problem: "Retailers on Microsoft D365 Commerce still lack a native mobile app",
    builtFor: "Retailers already on D365 Commerce",
    tags: ["Native iOS/Android", "Real-time commerce data", "Omnichannel fulfilment"],
    href: "/products/consumer-swift-commerce",
  },
  {
    image: engineeringImg,
    name: "Optim365",
    problem: "D365 environments get slower and costlier every year as data and licenses accumulate",
    builtFor: "Organizations live on D365 for 2+ years",
    tags: ["Data archival", "Database cleanup", "Batch tuning", "License governance"],
    href: "/what-we-do/products-accelerators/optim365",
  },
  {
    image: implementationImg,
    name: "PerfLens365",
    problem: "Performance risk before a major release or peak season",
    builtFor: "High-transaction D365 environments pre-go-live or pre-peak",
    tags: ["AI powered load testing", "Observability", "Architecture diagnostics"],
    href: "/what-we-do/products-accelerators/perflens365",
  },
  {
    image: supportImg,
    name: "In-Store Mobility Suite",
    problem: "Store processes still run on paper, disconnected from the ERP",
    builtFor: "Multi-store retail estates on D365 F&O",
    tags: ["DC ordering", "Shelf labels", "Stock write-off", "Counting"],
    href: "/what-we-do/products-accelerators/in-store-mobility-suite",
  },
];

function ProductDetailCard({ p }: { p: ProductDetail }) {
  return (
    <a
      href={p.href}
      className="group card-lift flex h-full flex-col overflow-hidden rounded-xl border border-border bg-white"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/55 to-transparent" />
        <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[var(--navy-deep)] shadow-sm backdrop-blur">
          {p.name}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="space-y-3">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--royal)]">
              Problem it solves
            </span>
            <p className="mt-1 text-[13px] leading-relaxed text-[var(--blue-gray)]">{p.problem}</p>
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--royal)]">
              Built for
            </span>
            <p className="mt-1 text-[13px] leading-relaxed text-[var(--blue-gray)]">{p.builtFor}</p>
          </div>
        </div>
        <div className="mt-4 flex flex-1 flex-wrap items-end gap-1.5">
          {p.tags.map((t) => (
            <span key={t} className="rounded-md bg-[var(--blue-light)]/60 px-2.5 py-1 text-[11px] font-medium text-[var(--navy-deep)]">
              {t}
            </span>
          ))}
        </div>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--royal)]">
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </a>
  );
}

function ProductDetailGrid() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[var(--blue-light)]/40 py-28">
      <div aria-hidden className="mesh-blobs-light opacity-60" />
      <div className="container-enterprise relative">
        <div className="max-w-2xl">
          <p className="eyebrow">The complete portfolio</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            All eight products and accelerators, side by side
          </h2>
        </div>
        <div className="mt-14">
          <CardSlider>
            {PRODUCT_DETAILS.map((p) => (
              <ProductDetailCard key={p.name} p={p} />
            ))}
          </CardSlider>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  6. FROM ACCELERATOR TO IMPLEMENTATION  ───────────────────────────── */
const LIFECYCLE_STAGES = [
  { icon: Search, label: "Assess" },
  { icon: SlidersHorizontal, label: "Configure" },
  { icon: Link2, label: "Integrate" },
  { icon: Rocket, label: "Deploy" },
  { icon: TrendingUp, label: "Optimize" },
];

const HUB_STAGES = [
  { icon: Compass, label: "Practice expertise", href: "/what-we-do/practice-areas" },
  { icon: Boxes, label: "Lumovy accelerator", href: "/what-we-do/products-accelerators" },
  { icon: Rocket, label: "Implementation", href: "/what-we-do/delivery-support" },
  { icon: BadgeCheck, label: "Ongoing support", href: "/what-we-do/delivery-support" },
];

function AcceleratorToImplementation() {
  return (
    <section className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <div className="max-w-2xl">
          <p className="eyebrow">From accelerator to implementation</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Your accelerator doesn&apos;t sit on the shelf. We put it to work.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--blue-gray)]">
            An accelerator is a starting point, not the whole engagement. Once it&apos;s chosen, it
            moves through a defined path into your environment, and connects back to the practice
            expertise and delivery support behind it.
          </p>
        </div>

        {/* Visual 1: deployment lifecycle */}
        <div className="mt-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--royal)]">
            Deployment lifecycle
          </span>
          <div className="relative mt-8">
            <div aria-hidden className="absolute left-0 right-0 top-7 hidden h-0.5 bg-gradient-to-r from-[var(--royal)] via-[var(--azure)] to-[var(--cyan-soft)] lg:block" />
            <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
              {LIFECYCLE_STAGES.map((s, i) => (
                <li key={s.label} className="relative">
                  <span className="relative z-10 grid h-14 w-14 place-items-center rounded-full border border-[var(--royal)] bg-white text-[var(--royal)]">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <div className="mt-4">
                    <div className="text-[11px] font-bold uppercase tracking-widest text-[var(--royal)]">Step {i + 1}</div>
                    <h3 className="mt-1 text-lg font-semibold text-[var(--navy-deep)]">{s.label}</h3>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-[var(--blue-gray)]">
            This reflects how Lumovy actually delivers, not a generic framework. Optim365 runs
            through Assess, Design, Execute and Sustain. In-Store Mobility Suite rolls out in
            Discover, Configure, Pilot and estate-wide waves.
          </p>
        </div>

        {/* Visual 2: how the three hubs connect */}
        <div className="mt-20 rounded-2xl border border-border bg-[var(--blue-light)]/40 p-8 sm:p-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--royal)]">
            How the three hubs connect
          </span>
          <div className="mt-8 flex flex-col items-stretch gap-4 lg:flex-row lg:items-center">
            {HUB_STAGES.map((h, i) => (
              <div key={h.label} className="flex flex-1 items-center gap-4">
                <a
                  href={h.href}
                  className="group card-lift flex flex-1 flex-col items-center gap-3 rounded-xl border border-border bg-white px-6 py-7 text-center"
                >
                  <span className="inline-grid h-11 w-11 place-items-center rounded-2xl bg-[var(--blue-light)] text-[var(--royal)] ring-1 ring-inset ring-[var(--royal)]/20">
                    <h.icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold text-[var(--navy-deep)]">{h.label}</span>
                </a>
                {i < HUB_STAGES.length - 1 && (
                  <ArrowRight className="hidden h-5 w-5 shrink-0 text-[var(--royal)]/50 lg:block" />
                )}
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-[var(--blue-gray)]">
            <a href="/what-we-do/practice-areas" className="font-semibold text-[var(--royal)]">Practice Areas</a>{" "}
            brings the business understanding. Products &amp; Accelerators brings the pre-built
            solution.{" "}
            <a href="/what-we-do/delivery-support" className="font-semibold text-[var(--royal)]">Delivery &amp; Support</a>{" "}
            brings it live and keeps it running. None of the three stands alone, an accelerator is
            only fast because it&apos;s backed by practice expertise, and it only sticks because
            delivery carries it through to support.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  7. OUTCOMES / PROOF  ───────────────────────────── */
const OUTCOMES = [
  { value: "100 days", label: "To full ERP-enabled store operations" },
  { value: "130+", label: "Business processes across 14 modules" },
  { value: "1,600+", label: "SKUs and 160 weekly offers" },
];

function OutcomesProof() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[var(--blue-light)]/40 py-28">
      <div aria-hidden className="mesh-blobs-light opacity-60" />
      <div className="container-enterprise relative">
        <div className="max-w-2xl">
          <p className="eyebrow">Outcomes / proof</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Built around real business requirements
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {OUTCOMES.map((o) => (
            <div key={o.label} className="rounded-2xl border border-border bg-white p-8 text-center">
              <div className="text-3xl font-bold tracking-tight text-[var(--navy-deep)] sm:text-4xl">{o.value}</div>
              <div className="mt-3 text-sm leading-relaxed text-[var(--blue-gray)]">{o.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  8. FAQ  ───────────────────────────── */
const PRODUCTS_FAQS: [string, string][] = [
  [
    "Can these accelerators be customized, or are they fixed products?",
    "Every accelerator is a starting point, not a locked template. Configuration is expected, the goal is to avoid building from zero, not to avoid adapting to your business.",
  ],
  [
    "Do we need a full Dynamics 365 implementation before using an accelerator?",
    "No. Several, like Optim365 and Clarity RFID Connector, are designed to layer onto an existing D365 environment. Others, like D365 for Hypermarkets, are built into a new implementation from day one.",
  ],
  [
    "How long does it typically take to deploy one of these?",
    "It varies by product. PerfLens365 runs 3 to 4 weeks. Optim365 shows measurable results within weeks of starting. Larger accelerators like In-Store Mobility Suite are rolled out in phased waves.",
  ],
  [
    "Are these accelerators only for retail, or do they apply to other industries too?",
    "Most were built from retail and hospitality delivery, but the underlying capability, performance tuning, inventory automation, mobile ordering, applies wherever Dynamics 365 is used at scale.",
  ],
  [
    "Can we combine multiple accelerators in the same environment?",
    "Yes. Several are designed to work together, for example In-Store Mobility Suite and Optim365 can run on the same D365 F&O environment without conflict.",
  ],
  [
    "Who supports the accelerator after it goes live?",
    "Lumovy's Delivery & Support team takes over post-launch, the same team that handles managed support and expansion across all of Lumovy's practice areas.",
  ],
];

function ProductsFAQ() {
  return (
    <section className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <FaqAccordion
          title="Answers about our products and accelerators"
          intro="Still have questions about which accelerator fits your environment? Talk to an expert and we'll walk you through it."
          items={PRODUCTS_FAQS}
        />
      </div>
    </section>
  );
}

/* ─────────────────────────────  9. FINAL CTA  ───────────────────────────── */
function ProductsFinalCTA() {
  return (
    <FinalCtaSection
      id="contact"
      title="Have a Business Challenge in Mind? There May Already Be a Head Start."
      subtitle="Explore the products and accelerators built from Lumovy's own delivery patterns, or talk to an expert about which one fits your environment."
      primary={{ label: "Explore our solutions", href: "#portfolio", icon: true }}
      secondary={{ label: "Talk to an expert", href: "#contact" }}
    />
  );
}
