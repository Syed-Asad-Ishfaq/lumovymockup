import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Calendar,
  Check,
  Boxes,
  LifeBuoy,
  Sparkles,
  Cpu,
  Workflow,
  BadgeCheck,
  Compass,
  Target,
  Link2,
  Rocket,
  TrendingUp,
  Bot,
  ClipboardCheck,
  Settings2,
  Radio,
  ArrowUpRight,
  Warehouse,
  Route as RouteIcon,
  PackageSearch,
  RefreshCw,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  Nav,
  Footer,
  CaseStudyCard,
  FaqAccordion,
  FinalCtaSection,
} from "./index";
import testimonialImg from "@/assets/testimonial.webp";
import msLogo from "@/assets/microsoft.png";
import d365Logo from "@/assets/Dynamics365.webp";
import powerPlatformLogo from "@/assets/PowerPlatform.png";
import azureLogo from "@/assets/azure-logo.png";
import mafLogo from "@/assets/logos/majid-al-futtaim.png";
import mafCaseImg from "@/assets/case-studies/majid-al-futtaim.jpg";
import cavendersLogo from "@/assets/logos/cavenders.png";
import cavendersCaseImg from "@/assets/case-studies/cavenders.jpg";
import mattressFirmLogo from "@/assets/logos/mattress-firm.png";
import mattressFirmCaseImg from "@/assets/case-studies/mattress-firm.jpg";
import implementationImg from "@/assets/services/implementation.jpg";
import engineeringImg from "@/assets/services/engineering.jpg";
import consultingImg from "@/assets/services/consulting.jpg";
import supportImg from "@/assets/services/support.jpg";
import rfidScanImg from "@/assets/products/rfid-scan.jpg";

export const Route = createFileRoute("/what-we-do_/practice-areas_/supply-chain")({
  component: SupplyChainPage,
  head: () => ({
    meta: [
      { title: "Supply Chain & Distribution Solutions | Lumovy D365" },
      {
        name: "description",
        content:
          "Connect inventory, warehouses, replenishment, and fulfilment with Lumovy's Dynamics 365 supply chain and distribution solutions for retail, grocery, and distribution businesses.",
      },
    ],
  }),
});

/* Scroll-reveal helper */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.18 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, shown };
}
function SupplyChainPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <SupplyChainHero />
      <SupplyChainProblem />
      <SupplyChainSuite />
      <SupplyChainTiers />
      <SupplyChainProof />
      <SupplyChainAccelerators />
      <SupplyChainAIAgents />
      <SupplyChainWhy />
      <SupplyChainProcess />
      <SupplyChainCaseStudies />
      <SupplyChainFAQ />
      <SupplyChainFinalCTA />
      <Footer />
    </div>
  );
}

/* ─────────────────────────────  1. HERO (dark)  ───────────────────────────── */
const PROOF_BAR = [
  "100 Days to Full ERP-Enabled Store Operations",
  "Under 1% Order Cancellations",
  "50+ Upstream & Downstream Integrations",
  "1,600+ SKUs Onboarded",
];
const MS_LOGOS = [
  { src: msLogo, alt: "Microsoft", h: "h-6" },
  { src: d365Logo, alt: "Dynamics 365", h: "h-9" },
  { src: powerPlatformLogo, alt: "Power Platform", h: "h-9" },
  { src: azureLogo, alt: "Microsoft Azure", h: "h-9" },
];

function SupplyChainHero() {
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
            Supply Chain &amp; Distribution
          </span>
          <h1 className="hero-content-in mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]" style={{ animationDelay: "80ms" }}>
            From Stock on Hand to Promises Kept
          </h1>
          <p className="hero-content-in mt-6 max-w-2xl text-base leading-relaxed text-white/70" style={{ animationDelay: "160ms" }}>
            Having the stock is only the beginning. Knowing where it is, where it should go, and
            how to get it to the customer is what makes it valuable. Lumovy connects inventory,
            purchasing, warehouses, and fulfilment across your Dynamics 365 environment, turning
            disconnected operations into a coordinated flow of goods and information for
            retailers, grocery businesses, and distributors.
          </p>
          <div className="hero-content-in mt-9 flex flex-wrap gap-3" style={{ animationDelay: "240ms" }}>
            <a
              href="#suite"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--navy-deep)] transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30"
            >
              Explore the Solutions
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              <Calendar className="h-4 w-4" />
              Find My Solution Priorities
            </a>
          </div>
        </div>
      </div>

      {/* Proof bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="container-enterprise grid grid-cols-2 gap-x-8 gap-y-5 py-8 sm:grid-cols-4">
          {PROOF_BAR.map((t) => (
            <span key={t} className="text-sm font-bold uppercase leading-tight tracking-wide text-white/45">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Microsoft ecosystem strip */}
      <div className="relative z-10 border-t border-white/10 bg-white/[0.03] py-6">
        <div className="container-enterprise flex flex-wrap items-center justify-center gap-3">
          {MS_LOGOS.map((l) => (
            <div key={l.alt} className="flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-8 py-5">
              <img src={l.src} alt={l.alt} loading="lazy" className={`${l.h} w-auto object-contain brightness-0 invert opacity-80`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  2. THE PROBLEM (Solution Choices)  ───────────────────────────── */
const PROBLEMS = [
  {
    icon: PackageSearch,
    title: "Inventory Visibility and Accuracy",
    body: "“We need to trust the stock before we promise it.” Connect inventory information across stores, warehouses, and linked systems, with RFID-enabled counting where it fits the operation.",
  },
  {
    icon: Warehouse,
    title: "Warehouse and Distribution Operations",
    body: "“Goods are moving. Too much information is still being chased.” Connect receiving, warehouse activity, transfers, and external logistics systems into one aligned flow.",
  },
  {
    icon: RouteIcon,
    title: "Omnichannel Order Fulfilment",
    body: "“We have the inventory. We need more ways to fulfil the order.” Use location and priority rules to direct orders across stores and warehouses, including split fulfilment and BOPIS.",
  },
  {
    icon: RefreshCw,
    title: "Procurement and Replenishment",
    body: "“The right stock needs to arrive before the shortage does.” Connect purchasing, vendor ordering, and stock movement across suppliers, distribution centres, and stores.",
  },
  {
    icon: Boxes,
    title: "Grocery and Store Inventory Operations",
    body: "“Our replenishment challenge changes by aisle, store, and temperature zone.” Bring store ordering, counting, write-offs, transfers, and shelf-label workflows into one operating model.",
  },
];

function SupplyChainProblem() {
  return (
    <section className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <div className="max-w-3xl">
          <p className="eyebrow">Start where the friction is</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Available Stock and a Fulfilled Order Are Not the Same Thing
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-[var(--blue-gray)]">
            Inventory can be in the wrong location. A warehouse update can arrive too late. A
            store can have the item without being able to fulfil the order. Choose the challenge
            closest to yours, each solution area can be scoped around your current environment
            and combined with others as your priorities expand.
          </p>
        </div>
      </div>

      <div
        className="container-enterprise mt-20"
        style={{
          ["--chal-card" as string]: "calc((min(1272px, 100vw - 3rem) - 2 * 2rem) / 3)",
          ["--chal-bleed" as string]: "max(0px, calc((100vw - 1320px) / 2 + 1.5rem))",
        }}
      >
        <div
          className="scroll-hide snap-x snap-mandatory overflow-x-auto pb-2"
          style={{ marginRight: "calc(-1 * var(--chal-bleed))" }}
        >
          <div className="flex gap-8 pr-6">
            {PROBLEMS.map((p) => (
              <div key={p.title} style={{ width: "var(--chal-card)" }} className="shrink-0 snap-start">
                <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-[var(--blue-light)] text-[var(--royal)]">
                  <p.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-xl font-semibold leading-snug text-[var(--navy-deep)]">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--blue-gray)]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  3. THE TRANSFORMATION SUITE  ───────────────────────────── */
const SUITE_INCLUDED: { label: string; image: string }[] = [
  { label: "Inventory visibility across stores, warehouses, and linked systems", image: engineeringImg },
  { label: "Stock counting, reconciliation, and RFID-enabled counting where it fits", image: rfidScanImg },
  { label: "Warehouse receiving, transfer, and WMS/3PL integration workflows", image: implementationImg },
  { label: "Distributed order management with location and priority rules", image: consultingImg },
  { label: "Split fulfilment, buy online pick up in store, and ship-to-store journeys", image: supportImg },
  { label: "Procurement and sourcing with vendor-ordering workflows", image: engineeringImg },
  { label: "Replenishment coordination between distribution centres and stores", image: implementationImg },
  { label: "Grocery store ordering, write-offs, transfers, and shelf-label workflows", image: consultingImg },
  { label: "Ambient, chilled, and frozen inventory handling for grocery operations", image: supportImg },
  { label: "Go-live support and continuous optimization", image: engineeringImg },
];
const SUITE_EXTENSIONS = [
  "RFID-enabled inventory counting with SML",
  "Multi-store and multi-country expansion",
  "Third-party logistics (3PL) integration",
  "Store pickup and store-transfer capabilities",
  "Vendor collaboration workflows",
  "Advanced warehouse workflows",
  "Managed services for supply chain",
];
const SUITE_INTERVAL = 6000;

const TIERS = [
  {
    name: "Foundation",
    tag: "Start",
    blurb: "Bring stock information into a more consistent view with connected inventory, standardized counting, and core Dynamics 365 Supply Chain Management.",
    points: ["Inventory visibility across locations", "Stock counting & reconciliation", "Core D365 SCM configuration", "2-week hypercare"],
    featured: false,
  },
  {
    name: "Growth",
    tag: "Scale up",
    blurb: "Connect warehouses, logistics partners, and order fulfilment so stock across your network becomes part of a coordinated fulfilment proposition.",
    points: ["Everything in Foundation", "WMS/3PL integration", "Distributed order management", "Split fulfilment & BOPIS", "4-week hypercare"],
    featured: true,
  },
  {
    name: "Enterprise",
    tag: "Scale wide",
    blurb: "Extend replenishment, procurement, and grocery store operations across your full network, with RFID-enabled counting where it fits the operation.",
    points: ["Everything in Growth", "Procurement & replenishment coordination", "Grocery & store inventory operations", "RFID inventory counting", "12-week hypercare"],
    featured: false,
  },
];

function SupplyChainSuite() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const { ref, shown } = useReveal<HTMLDivElement>();

  useEffect(() => {
    if (!shown || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => setActive((a) => (a + 1) % SUITE_INCLUDED.length), SUITE_INTERVAL);
    return () => clearTimeout(id);
  }, [active, shown, paused]);

  return (
    <section id="suite" className="relative overflow-hidden bg-[var(--blue-light)]/30 py-28">
      <div aria-hidden className="mesh-blobs-light opacity-50" />
      <div className="container-enterprise relative">
        <div className="max-w-3xl">
          <p className="eyebrow">The Solution Suite</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Dynamics 365 at the Centre. Your Operating Reality Around It.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-[var(--blue-gray)]">
            Lumovy brings together Dynamics 365 Supply Chain Management, Finance, and Commerce
            with the surrounding applications that move products, orders, and inventory. Business
            rules that reflect how you trade, location priorities, split orders, store pickup,
            transfers, and warehouse workflows, are shaped around the way your business fulfils
            demand.
          </p>
        </div>

        <div ref={ref} className="mt-14 grid items-start gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Left: what's included — auto-cycling list */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--royal)]">
              What&apos;s included
            </span>
            <div className="mt-4" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
              {SUITE_INCLUDED.map((item, i) => {
                const isActive = active === i;
                return (
                  <button
                    key={item.label}
                    onClick={() => setActive(i)}
                    className="block w-full py-3.5 text-left"
                  >
                    <span className={"text-[15px] transition-colors duration-300 " + (isActive ? "font-semibold text-[var(--royal)]" : "font-normal text-[var(--navy-deep)]")}>
                      {item.label}
                    </span>
                    <span className="mt-2.5 block h-px w-full overflow-hidden bg-[var(--royal)]/12">
                      <span
                        key={`${i}-${active}-${paused}`}
                        className={"block h-full bg-[var(--royal)] " + (isActive && !paused ? "suite-progress" : "")}
                        style={{ width: isActive && paused ? "100%" : isActive ? undefined : "0%" }}
                      />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: synced image + extensions */}
          <div className="lg:sticky lg:top-24 lg:mt-10">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-fluent-lg">
              {SUITE_INCLUDED.map((item, i) => (
                <img
                  key={item.label + i}
                  src={item.image}
                  alt={item.label}
                  className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
                  style={{ opacity: active === i ? 1 : 0 }}
                />
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-[var(--royal)]/10 bg-white p-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--royal)]">
                Available extensions
              </span>
              <div className="mt-4 flex flex-wrap gap-2">
                {SUITE_EXTENSIONS.map((e) => (
                  <span key={e} className="rounded-md bg-[var(--blue-light)]/60 px-3 py-1.5 text-xs font-medium text-[var(--navy-deep)]">
                    {e}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SupplyChainTiers() {
  return (
    <section className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Engagement tiers</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Three Ways to Begin Working with Your Supply Chain Partner
          </h2>
        </div>

        {/* Pricing-style cards */}
        <div className="mx-auto mt-16 grid max-w-5xl items-stretch gap-6 lg:grid-cols-3">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={
                "relative flex flex-col rounded-2xl p-8 transition-all " +
                (t.featured
                  ? "scale-[1.02] bg-[#003594] text-white shadow-fluent-lg"
                  : "border border-border bg-white text-[var(--navy-deep)] hover:-translate-y-1 hover:shadow-fluent-md")
              }
            >
              {t.featured && (
                <span className="absolute right-6 top-6 rounded-md bg-[var(--cyan-soft)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--navy-deep)]">
                  Most chosen
                </span>
              )}
              <div className={"text-xs font-semibold uppercase tracking-widest " + (t.featured ? "text-[var(--cyan-soft)]" : "text-[var(--royal)]")}>
                {t.tag}
              </div>
              <h3 className={"mt-3 text-2xl font-semibold tracking-tight " + (t.featured ? "text-white" : "text-[var(--navy-deep)]")}>
                {t.name}
              </h3>
              <p className={"mt-3 text-sm leading-relaxed " + (t.featured ? "text-white/75" : "text-[var(--blue-gray)]")}>
                {t.blurb}
              </p>
              <ul className={"mt-7 flex-1 space-y-3 border-t pt-6 " + (t.featured ? "border-white/15" : "border-border")}>
                {t.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm">
                    <Check className={"mt-0.5 h-4 w-4 shrink-0 " + (t.featured ? "text-[var(--cyan-soft)]" : "text-[var(--royal)]")} />
                    <span className={t.featured ? "text-white/85" : "text-[var(--navy-deep)]"}>{p}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={
                  "mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all " +
                  (t.featured
                    ? "bg-white text-[var(--navy-deep)] hover:bg-white/90"
                    : "bg-[var(--royal)] text-white hover:bg-[var(--navy)]")
                }
              >
                Explore this tier
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Guidance strip */}
        <div className="mt-14 overflow-hidden rounded-2xl bg-[var(--navy)]">
          <div className="flex flex-col items-start justify-between gap-6 px-8 py-10 sm:flex-row sm:items-center sm:px-12">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                Not sure where to begin?
              </h3>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/70">
                Answer a few business questions to find your solution priorities, then we&apos;ll
                recommend the right starting point for your business.
              </p>
            </div>
            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--navy-deep)] transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              <Calendar className="h-4 w-4" />
              Find My Solution Priorities
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  5. ACCELERATORS & SOLUTIONS  ───────────────────────────── */
const ACCELERATORS = [
  { icon: Radio, name: "Clarity RFID Connector", body: "Developed in collaboration with SML, our ready RFID inventory-counting solution connects physical stock counts with Microsoft Dynamics 365 Finance & Operations.", href: "/what-we-do/products-accelerators/rfid-connect" },
  { icon: Settings2, name: "Optim365", body: "A framework that governs your data, optimizes your licensing, and boosts your D365 Supply Chain Management performance.", href: "/what-we-do/products-accelerators/optim365" },
];

function SupplyChainAccelerators() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[var(--blue-light)]/40 py-28">
      <div aria-hidden className="mesh-blobs-light opacity-60" />
      <div className="container-enterprise relative">
        <div className="max-w-2xl">
          <p className="eyebrow">Accelerators &amp; solutions</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Ready-made accelerators that shorten your time to value
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {ACCELERATORS.map((a) => (
            <a key={a.name} href={a.href} className="group card-lift flex flex-col rounded-xl border border-border bg-white p-7">
              <span className="inline-grid h-11 w-11 place-items-center rounded-2xl bg-[var(--blue-light)] text-[var(--royal)] ring-1 ring-inset ring-[var(--royal)]/20">
                <a.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-[var(--navy-deep)]">{a.name}</h3>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-[var(--blue-gray)]">{a.body}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--royal)]">
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  6. AI AGENTS (Now and Beyond)  ───────────────────────────── */
const AI_AGENTS = [
  { icon: Bot, name: "Inventory Fulfillment Agent", body: "Built using Microsoft Copilot Studio and inventory visibility capabilities, this Lumovy asset helps teams answer: can we fulfil this order, and where is stock short?" },
  { icon: TrendingUp, name: "Replenishment Exceptions", body: "Ongoing agent development explores shortages and replenishment exceptions, helping teams recognize what needs attention sooner." },
  { icon: ClipboardCheck, name: "Fulfilment Exceptions", body: "Exploring how an agent can flag fulfilment exceptions across your network, so decisions get made before an order is delayed or cancelled." },
  { icon: Boxes, name: "Slow-Moving Stock", body: "Ongoing development also looks at surfacing slow-moving or ageing stock, so it gets attention before it becomes a write-off." },
];

function SupplyChainAIAgents() {
  return (
    <section className="hero-dark relative overflow-hidden py-28 text-white">
      <div aria-hidden className="hero-orbs opacity-50" />
      <div aria-hidden className="hero-grid" />
      <div className="container-enterprise relative z-10">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--cyan-soft)]">
            <Bot className="h-3.5 w-3.5" /> Now and beyond
          </span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Solve Today&apos;s Movement of Goods. Prepare for Tomorrow&apos;s Decisions.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-white/65">
            Today&apos;s foundation is connected inventory, working fulfilment rules, and
            dependable information across systems. The next opportunity is helping teams recognize
            exceptions and decide what to do sooner. Agent availability, fit, and scope are
            confirmed for the proposed use case.
          </p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {AI_AGENTS.map((a) => (
            <div key={a.name} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors hover:border-[var(--cyan-soft)]/40 hover:bg-white/[0.07]">
              <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-[var(--cyan-soft)] transition-colors group-hover:bg-[var(--cyan-soft)] group-hover:text-[var(--navy-deep)]">
                <a.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold text-white">{a.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{a.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--navy-deep)] transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            Discuss an Inventory or Fulfilment Agent
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  7. WHY LUMOVY  ───────────────────────────── */
const WHY = [
  { icon: BadgeCheck, title: "Business Rules That Reflect How You Trade", body: "Location priorities, split orders, store pickup, transfers, and warehouse workflows are shaped around the way your business fulfils demand, not a generic template." },
  { icon: Link2, title: "Connections That Reach Beyond the ERP", body: "Our integration experience spans warehouse platforms, third-party logistics, merchandising systems, commerce applications, and RFID. Azure and, where appropriate, existing middleware connect the information those systems exchange." },
  { icon: Sparkles, title: "Reusable Assets with a Specific Purpose", body: "Store applications and a ready RFID integration solution provide starting points for defined operating needs. We assess their fit against your processes and environment before recommending them." },
  { icon: LifeBuoy, title: "Evidence from Connected Retail and Grocery Operations", body: "Cavender's demonstrates the connection between inventory, stores, and fulfilment. Majid Al Futtaim demonstrates the coordination needed to launch grocery operations across finance, supply chain, and stores." },
];

function SupplyChainWhy() {
  return (
    <section className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <div className="max-w-2xl">
          <p className="eyebrow">Why Lumovy</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Dynamics 365 at the Centre. Your Operating Reality Around It.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {WHY.map((w) => (
            <div key={w.title} className="card-lift group relative overflow-hidden rounded-xl border border-border bg-white p-8">
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

/* ─────────────────────────────  8. PROOF  ───────────────────────────── */
function SupplyChainProof() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[var(--blue-light)]/40 py-28">
      <div aria-hidden className="mesh-blobs-light opacity-60" />
      <div className="container-enterprise relative">
        <div className="max-w-2xl">
          <p className="eyebrow">Proof</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            What this looks like in a working business
          </h2>
        </div>
        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[1.35fr_1fr]">
          <div className="flex min-h-[440px] flex-col justify-between rounded-xl border border-border bg-white p-8">
            <div>
              <span className="eyebrow">Cavender&apos;s</span>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight text-[var(--navy-deep)]">
                More Fulfilment Options Across a Complex Store and Warehouse Network
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[var(--blue-gray)]">
                Rising order volumes and multi-store complexity exposed fragmented fulfilment,
                partial shipments, and limited inventory visibility. Lumovy extended Dynamics 365
                with distributed order management, location and priority rules, inventory-based
                order splitting, store pickup and transfer capabilities, and advanced warehouse
                workflows, with Azure and Boomi integrations connecting upstream and downstream
                systems.
              </p>
            </div>
            <div>
              <div className="grid grid-cols-3 gap-3 border-t border-border pt-6">
                {[
                  ["Under 1%", "Order cancellations"],
                  ["25%", "Upsell from buy online, pick up in store"],
                  ["50+", "Upstream and downstream integrations"],
                ].map(([v, l]) => (
                  <div key={l} className="min-w-0">
                    <div className="whitespace-nowrap text-[15px] font-bold leading-tight text-[var(--navy-deep)]">{v}</div>
                    <div className="mt-1 text-[11px] font-medium leading-tight text-[var(--blue-gray)]">{l}</div>
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--royal)]"
              >
                Talk to us about your outcomes
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          <figure className="relative overflow-hidden rounded-xl">
            <img src={testimonialImg} alt="Supply chain operations leader" className="absolute inset-0 h-full w-full object-cover object-top" />
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/45 to-transparent" />
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 backdrop-blur-[3px] [mask-image:linear-gradient(to_top,black_35%,transparent)]" />
            <figcaption className="relative z-10 flex h-full min-h-[440px] flex-col justify-end p-8">
              <div className="text-3xl font-bold tracking-tight text-white">Connected</div>
              <div className="mt-1 text-sm text-white/80">Stock across the network became part of a more connected fulfilment proposition</div>
              <blockquote className="mt-4 text-sm leading-relaxed text-white/90">
                &ldquo;Lumovy connected our inventory, stores, and fulfilment on Dynamics 365 and
                gave us a platform built to scale with our growth.&rdquo;
              </blockquote>
              <div className="mt-4 border-t border-white/20 pt-3">
                <div className="text-sm font-semibold text-white">Supply Chain Operations Lead</div>
                <div className="text-xs text-white/70">Retail &amp; Distribution</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  9. HOW IT WORKS (animated)  ───────────────────────────── */
const STEPS = [
  { icon: Compass, title: "Discover", body: "Identify where the business feels the friction, in inventory, distribution, fulfilment, replenishment, or store operations." },
  { icon: Target, title: "Plan", body: "Prioritize the solution areas that will deliver the greatest business impact, scoped around your current environment." },
  { icon: Link2, title: "Connect", body: "Bring inventory, purchasing, warehouses, and fulfilment together across your Dynamics 365 environment." },
  { icon: Rocket, title: "Launch", body: "Go live with guided user adoption, seamless deployment, and dedicated hypercare support." },
  { icon: TrendingUp, title: "Optimize", body: "Continuously improve with dependable information across systems, and prepare for agent-assisted decisions." },
];

function SupplyChainProcess() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = (vh * 0.85 - rect.top) / (vh * 0.85 - vh * 0.3 + rect.height);
      setProgress(Math.min(1, Math.max(0, p)));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return (
    <section className="border-b border-border bg-white py-28">
      <div ref={wrapRef} className="container-enterprise">
        <div className="max-w-2xl">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            From today&apos;s foundation to tomorrow&apos;s decisions
          </h2>
        </div>
        <div className="relative mt-16">
          <div aria-hidden className="absolute left-0 right-0 top-7 hidden h-0.5 bg-[var(--blue-light)] lg:block" />
          <div aria-hidden className="absolute left-0 top-7 hidden h-0.5 bg-gradient-to-r from-[var(--royal)] via-[var(--azure)] to-[var(--cyan-soft)] lg:block" style={{ width: `${progress * 100}%`, transition: "width 0.1s linear" }} />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
            {STEPS.map((s, i) => {
              const reached = progress >= i / (STEPS.length - 1) - 0.02;
              return (
                <li key={s.title} className="relative">
                  <span className={"relative z-10 grid h-14 w-14 place-items-center rounded-full border transition-all duration-500 " + (reached ? "border-[var(--cyan-soft)] bg-[var(--royal)] text-white shadow-[0_0_26px_-4px_var(--cyan-soft)]" : "border-border bg-white text-[var(--royal)]")}>
                    <s.icon className="h-6 w-6" />
                  </span>
                  <div className="mt-4">
                    <div className="text-[11px] font-bold uppercase tracking-widest text-[var(--royal)]">Step {i + 1}</div>
                    <h3 className="mt-1 text-lg font-semibold text-[var(--navy-deep)]">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--blue-gray)]">{s.body}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  9b. CASE STUDIES  ───────────────────────────── */
const SUPPLY_CHAIN_CASE_STUDIES = [
  {
    sector: "Majid Al Futtaim (Sava)",
    image: mafCaseImg,
    logo: mafLogo,
    title: "From a New Grocery Operation to ERP-Enabled Stores in 100 Days",
    results: [
      ["100 days", "To full ERP-enabled store operations"],
      ["4 to 2 days", "Vendor-to-DC replenishment time"],
      ["1,600+", "SKUs onboarded"],
    ] as [string, string][],
  },
  {
    sector: "Cavender's",
    image: cavendersCaseImg,
    logo: cavendersLogo,
    logoClass: "max-h-8",
    title: "More Fulfilment Options Across a Complex Store and Warehouse Network",
    results: [
      ["<1%", "Order cancellations"],
      ["25%", "Upsell from BOPIS"],
      ["50+", "Upstream & downstream integrations"],
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

function SupplyChainCaseStudies() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[var(--blue-light)]/40 py-28">
      <div aria-hidden className="mesh-blobs-light opacity-60" />
      <div className="container-enterprise relative">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow">Customer evidence</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
              Real engagements. Auditable outcomes
            </h2>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--royal)]">
            View more
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {SUPPLY_CHAIN_CASE_STUDIES.map((c) => (
            <CaseStudyCard key={c.title} {...c} />
          ))}
        </div>
        <p className="mt-6 text-xs leading-relaxed text-[var(--blue-gray)]">
          Results reflect the individual programmes described and are not forecasts for other
          engagements.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────  10. FAQ  ───────────────────────────── */
const SUPPLY_CHAIN_FAQS: [string, string][] = [
  [
    "What supply chain and distribution solutions does Lumovy offer?",
    "Lumovy's solution areas cover inventory visibility, warehouse and distribution operations, omnichannel fulfilment, procurement and replenishment, and grocery store operations. They combine Microsoft Dynamics 365 capabilities with integrations, extensions, and relevant Lumovy assets.",
  ],
  [
    "Can Lumovy connect Dynamics 365 to our existing WMS or 3PL?",
    "Yes. Lumovy has experience connecting Dynamics 365 with warehouse and third-party logistics systems for product, order, inventory, and adjustment flows. The solution depends on your current platforms, interfaces, and business requirements.",
  ],
  [
    "Can we support store pickup and fulfil orders across multiple locations?",
    "Lumovy has delivered store-pickup, store-transfer, distributed order management, and inventory-based order-splitting capabilities. The appropriate design depends on stock availability, location priorities, and your fulfilment policies.",
  ],
  [
    "What is the Lumovy and SML RFID solution?",
    "It is a ready RFID inventory-counting solution developed in collaboration with SML and connected to Dynamics 365 Finance & Operations. It supports the exchange of product and on-hand inventory information and the creation of inventory counting journals from RFID results. The solution provides an integration foundation, tagging, readers, configuration, licensing, and deployment requirements are confirmed for your environment.",
  ],
  [
    "Are these solutions relevant to grocery businesses?",
    "Yes. Lumovy's documented grocery experience includes ambient, chilled, and frozen inventory handling, vendor and warehouse ordering, stock counting, write-offs, and transfers within a connected Dynamics 365 environment.",
  ],
  [
    "Do we need to replace all our existing systems?",
    "The starting point is your business requirement and current landscape. Lumovy can assess how Dynamics 365 works with existing warehouse, logistics, merchandising, and commerce systems, and where a configuration change, extension, or integration is needed.",
  ],
];

function SupplyChainFAQ() {
  return (
    <section className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <FaqAccordion
          title="Supply Chain and Distribution Solution FAQs"
          intro="Still have questions about where to start? Book a call and we'll walk you through it."
          items={SUPPLY_CHAIN_FAQS}
        />
      </div>
    </section>
  );
}

/* ─────────────────────────────  11. FINAL CTA  ───────────────────────────── */
function SupplyChainFinalCTA() {
  return (
    <FinalCtaSection
      id="contact"
      title="Where Does Your Supply Chain Stop Keeping the Promise?"
      subtitle="Stock accuracy. Order allocation. Warehouse handoffs. Replenishment. Store execution. Find the area that deserves attention first, and the solution options worth exploring."
      microcopy="Answer a few business questions to identify your starting point. View your results before deciding whether to speak with Lumovy."
      primary={{ label: "Find My Solution Priorities", href: "#contact", icon: true }}
      secondary={{ label: "Discuss My Supply Chain Priorities", href: "#contact" }}
    />
  );
}
