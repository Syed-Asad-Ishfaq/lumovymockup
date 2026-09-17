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
  ScanLine,
  Bot,
  ClipboardCheck,
  Radio,
  Smartphone,
  Settings2,
  Gauge,
  Tablet,
  ArrowUpRight,
  DollarSign,
  Truck,
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
import retailImg from "@/assets/industries/retail.jpg";
import hospitalityImg from "@/assets/industries/hospitality.jpg";
import implementationImg from "@/assets/services/implementation.jpg";
import engineeringImg from "@/assets/services/engineering.jpg";
import consultingImg from "@/assets/services/consulting.jpg";
import supportImg from "@/assets/services/support.jpg";

export const Route = createFileRoute("/industries_/grocery-hypermarkets")({
  component: GroceryPage,
  head: () => ({
    meta: [
      { title: "Grocery & Hypermarket Transformation Suite | Lumovy" },
      {
        name: "description",
        content:
          "Lumovy's Grocery & Hypermarket Transformation Suite unifies checkout, inventory, and pricing on Microsoft Dynamics 365, so grocery retailers can operate smarter and scale with confidence.",
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
function GroceryPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <GroceryHero />
      <GroceryProblem />
      <GrocerySuite />
      <GroceryTiers />
      <GroceryProof />
      <GroceryAccelerators />
      <GroceryAIAgents />
      <GroceryWhy />
      <GroceryProcess />
      <GroceryCaseStudies />
      <GroceryFAQ />
      <GroceryFinalCTA />
      <Footer />
    </div>
  );
}

/* ─────────────────────────────  1. HERO (dark)  ───────────────────────────── */
const PROOF_BAR = [
  "Up to 99% Inventory Accuracy",
  "<2 Second AI Checkout Recognition",
  "100-Day Grocery Rollout",
  "Unified Store Operations Foundation",
];
const MS_LOGOS = [
  { src: msLogo, alt: "Microsoft", h: "h-6" },
  { src: d365Logo, alt: "Dynamics 365", h: "h-9" },
  { src: powerPlatformLogo, alt: "Power Platform", h: "h-9" },
  { src: azureLogo, alt: "Microsoft Azure", h: "h-9" },
];

function GroceryHero() {
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
            Modern Grocery &amp; Hypermarkets
          </span>
          <h1 className="hero-content-in mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]" style={{ animationDelay: "80ms" }}>
            Deliver Faster Checkout, Smarter Inventory, and Accurate Pricing
          </h1>
          <p className="hero-content-in mt-6 max-w-2xl text-base leading-relaxed text-white/70" style={{ animationDelay: "160ms" }}>
            Unify checkout, inventory, and pricing with our Microsoft Dynamics 365-powered grocery
            store POS system, built to reduce stockouts, pricing gaps, and operational inefficiencies.
          </p>
          <div className="hero-content-in mt-9 flex flex-wrap gap-3" style={{ animationDelay: "240ms" }}>
            <a
              href="#suite"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--navy-deep)] transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30"
            >
              See What&apos;s Included
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              <Calendar className="h-4 w-4" />
              Get Your Grocery Bundle Quote
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

/* ─────────────────────────────  2. THE PROBLEM  ───────────────────────────── */
const PROBLEMS = [
  {
    icon: Gauge,
    title: "Slow, Error-Prone Checkout",
    body: "Outdated grocery point of sale systems slow every transaction and frustrate cashiers and customers alike. A fast, AI powered point of sale for grocery store operations keeps lines moving and baskets bigger.",
  },
  {
    icon: Boxes,
    title: "Inventory You Can't Trust",
    body: "Perishables, high SKU counts, and daily deliveries make stock hard to track with legacy grocery ERP software. Real-time inventory across every store and warehouse stops stockouts before they cost you a sale.",
  },
  {
    icon: DollarSign,
    title: "Pricing and Promotions That Don't Keep Up",
    body: "Manual price updates across stores create shelf-to-register mismatches. Centralized pricing keeps every store and channel accurate at once.",
  },
  {
    icon: Workflow,
    title: "Manual Store Operations",
    body: "Manual stock counts, paper-based receiving, and disconnected replenishment turn store associates into administrators instead of merchandisers.",
  },
  {
    icon: Cpu,
    title: "Outdated Platform",
    body: "Legacy systems slow down every new store opening or category expansion, making it harder to compete with modern grocery and discount retail chains.",
  },
];

function GroceryProblem() {
  return (
    <section className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <div className="max-w-3xl">
          <p className="eyebrow">The problem</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Stop Losing Margin to Disconnected Systems
          </h2>
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
  { label: "Modern grocery point of sale system with AI, mobile, and offline support", image: retailImg },
  { label: "Real-time inventory across stores, warehouses, and distribution centers", image: engineeringImg },
  { label: "Centralized pricing, promotions, and loyalty", image: implementationImg },
  { label: "Automated replenishment tuned to grocery demand patterns", image: consultingImg },
  { label: "Perishable and short shelf-life tracking", image: supportImg },
  { label: "Vendor and procurement workflows for high-frequency grocery buying", image: hospitalityImg },
  { label: "Store associate tools for stock counts, receiving, and order management", image: retailImg },
  { label: "Store and category performance dashboards", image: implementationImg },
  { label: "Go-live support and continuous optimization", image: supportImg },
];
const SUITE_EXTENSIONS = [
  "Multi-store and multi-country expansion",
  "Self-checkout and scan-and-go",
  "AI powered demand forecasting",
  "Advanced loyalty and personalization",
  "Warehouse and distribution center automation",
  "Supplier collaboration portal",
  "Managed services for retail",
];
const SUITE_INTERVAL = 6000;

const TIERS = [
  {
    name: "Foundation",
    tag: "Start",
    blurb: "Build a connected grocery operation with modern checkout, live inventory visibility, and standardized store execution.",
    points: ["Connected checkout & modern POS", "Real-time inventory visibility", "Pricing sync across stores", "2-week hypercare"],
    featured: false,
  },
  {
    name: "Growth",
    tag: "Scale up",
    blurb: "Increase sales and improve customer experience through intelligent replenishment, dynamic pricing, digital loyalty, and AI assisted demand planning.",
    points: ["Everything in Foundation", "Automated replenishment", "Mobile associate tools", "Cross-store analytics", "4-week hypercare"],
    featured: true,
  },
  {
    name: "Enterprise",
    tag: "Scale wide",
    blurb: "Lead the future of grocery with connected stores, AI powered merchandising, enterprise analytics, and a scalable commerce platform built for continuous growth.",
    points: ["Everything in Growth", "AI driven demand forecasting", "Full mobility suite", "Advanced BI & predictive analytics", "12-week hypercare"],
    featured: false,
  },
];

function GrocerySuite() {
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
          <p className="eyebrow">The Transformation Suite</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Everything Your Stores Need to Operate Smarter
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-[var(--blue-gray)]">
            Our Grocery &amp; Hypermarket Transformation Suite brings together the capabilities
            grocery retailers need to speed up checkout, improve inventory accuracy, synchronize
            pricing and promotions, streamline store operations, and support AI driven
            merchandising, all on a scalable grocery Dynamics 365 foundation.
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

function GroceryTiers() {
  return (
    <section className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Engagement tiers</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Choose Your Path to Partnership
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
                Book a Grocery Readiness Call and we&apos;ll recommend the right starting point for
                your business.
              </p>
            </div>
            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--navy-deep)] transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              <Calendar className="h-4 w-4" />
              Book a Grocery Readiness Call
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
  { icon: Boxes, name: "D365 for Hypermarkets", body: "A pre-configured Dynamics 365 accelerator for grocery and hypermarket operations, with built-in retail processes for a faster go-live.", href: "/what-we-do/products-accelerators/hypermarket-accelerator" },
  { icon: Radio, name: "Clarity RFID Connector", body: "Track your inventory accurately and gain real-time visibility with our RFID connector.", href: "/what-we-do/products-accelerators/rfid-connect" },
  { icon: Settings2, name: "Optim365", body: "A framework that governs your data, optimizes your licensing, and boosts your D365 performance.", href: "/what-we-do/products-accelerators/optim365" },
  { icon: Tablet, name: "In-Store Mobility Suite", body: "A set of Power Apps linked to D365 F&O, so you can manage labeling, stock counts, and orders.", href: "/what-we-do/products-accelerators/in-store-mobility-suite" },
];

function GroceryAccelerators() {
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
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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

/* ─────────────────────────────  6. AI AGENTS  ───────────────────────────── */
const AI_AGENTS = [
  { icon: ScanLine, name: "Checkout & Product Recognition Agent", body: "AI powered scan-and-go at the grocery point of sale, cutting checkout time and reducing shrinkage." },
  { icon: TrendingUp, name: "Inventory & Demand Forecasting Agent", body: "Predicts stockouts and overstock before they happen, keeping your grocery ERP software a step ahead of demand." },
  { icon: Truck, name: "Pricing & Promotions Agent", body: "Keeps prices and promotions synced across every store and channel, catching mismatches before they reach the register." },
  { icon: ClipboardCheck, name: "Store Operations Agent", body: "Automates replenishment triggers, task assignment, and compliance checks for store teams." },
];

function GroceryAIAgents() {
  return (
    <section className="hero-dark relative overflow-hidden py-28 text-white">
      <div aria-hidden className="hero-orbs opacity-50" />
      <div aria-hidden className="hero-grid" />
      <div className="container-enterprise relative z-10">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--cyan-soft)]">
            <Bot className="h-3.5 w-3.5" /> AI agents
          </span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Powered by AI, working alongside your teams
          </h2>
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
      </div>
    </section>
  );
}

/* ─────────────────────────────  7. WHY LUMOVY  ───────────────────────────── */
const WHY = [
  { icon: BadgeCheck, title: "Built Around Modern Grocery Retail", body: "From perishable inventory and high transaction volume to seasonal demand and thin margins, we solve the operational challenges grocery retailers face every day." },
  { icon: Target, title: "Focused on Business Outcomes", body: "Every engagement is designed to reduce stockouts, speed up checkout, streamline store operations, and protect margin, not just deploy new technology." },
  { icon: Sparkles, title: "Innovation That Keeps Pace", body: "As grocery retail evolves, we help businesses introduce new store formats, AI capabilities, and merchandising tools faster, with less disruption." },
  { icon: LifeBuoy, title: "Backed by Microsoft. Driven by Results.", body: "As a Microsoft Solutions Partner, we combine deep grocery Dynamics 365 expertise with ongoing optimization and managed services to help your platform continuously evolve long after go-live." },
];

function GroceryWhy() {
  return (
    <section className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <div className="max-w-2xl">
          <p className="eyebrow">Why Lumovy</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Built by people who understand how grocery and hypermarket retailers actually operate
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
function GroceryProof() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[var(--blue-light)]/40 py-28">
      <div aria-hidden className="mesh-blobs-light opacity-60" />
      <div className="container-enterprise relative">
        <div className="max-w-2xl">
          <p className="eyebrow">Proof</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Transformation delivered with measurable outcomes
          </h2>
        </div>
        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[1.35fr_1fr]">
          <div className="flex min-h-[440px] flex-col justify-between rounded-xl border border-border bg-white p-8">
            <div>
              {mafLogo && (
                <img src={mafLogo} alt="Majid Al Futtaim" className="max-h-8 w-auto object-contain" />
              )}
              <h3 className="mt-6 text-2xl font-semibold tracking-tight text-[var(--navy-deep)]">
                Connected Grocery Operations at Scale
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[var(--blue-gray)]">
                Majid Al Futtaim partnered with Lumovy to modernize grocery and hypermarket
                operations on Microsoft Dynamics 365, connecting checkout, inventory, and
                procurement into a single platform with AI powered product recognition at POS.
              </p>
            </div>
            <div>
              <div className="grid grid-cols-3 gap-3 border-t border-border pt-6">
                {[
                  ["<2 sec", "AI product recognition at POS"],
                  ["4 weeks", "Secure payment integration"],
                  ["Centralized", "Procurement-driven supply model"],
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
            <img src={testimonialImg} alt="Grocery operations leader" className="absolute inset-0 h-full w-full object-cover object-top" />
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/45 to-transparent" />
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 backdrop-blur-[3px] [mask-image:linear-gradient(to_top,black_35%,transparent)]" />
            <figcaption className="relative z-10 flex h-full min-h-[440px] flex-col justify-end p-8">
              <div className="text-3xl font-bold tracking-tight text-white">Centralized</div>
              <div className="mt-1 text-sm text-white/80">From store-led ordering to procurement-driven supply</div>
              <blockquote className="mt-4 text-sm leading-relaxed text-white/90">
                &ldquo;Lumovy modernized our grocery operations on Dynamics 365 and gave us a
                platform built to scale with our growth.&rdquo;
              </blockquote>
              <div className="mt-4 border-t border-white/20 pt-3">
                <div className="text-sm font-semibold text-white">Grocery Operations Lead</div>
                <div className="text-xs text-white/70">Majid Al Futtaim · UAE</div>
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
  { icon: Compass, title: "Assess", body: "Evaluate your stores to uncover operational gaps, inventory challenges, and customer experience opportunities." },
  { icon: Target, title: "Plan", body: "Prioritize the grocery capabilities that will deliver the greatest business impact." },
  { icon: Link2, title: "Connect", body: "Unify checkout, inventory, pricing, merchandising, and supply chain on a connected platform." },
  { icon: Rocket, title: "Launch", body: "Go live with seamless deployment, store readiness, and dedicated hypercare support." },
  { icon: TrendingUp, title: "Optimize", body: "Continuously improve performance with AI powered forecasting, intelligent merchandising, and ongoing optimization." },
];

function GroceryProcess() {
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
            From store operations to enterprise-scale growth
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
const GROCERY_CASE_STUDIES = [
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

function GroceryCaseStudies() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[var(--blue-light)]/40 py-28">
      <div aria-hidden className="mesh-blobs-light opacity-60" />
      <div className="container-enterprise relative">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow">Case studies</p>
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
          {GROCERY_CASE_STUDIES.map((c) => (
            <CaseStudyCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  10. FAQ  ───────────────────────────── */
const GROCERY_FAQS: [string, string][] = [
  [
    "How quickly can we modernize without disrupting store operations?",
    "Most Foundation engagements go live in 100 days, using a phased rollout by store, so daily operations continue while we configure and test in parallel.",
  ],
  [
    "Can we start with a few stores before expanding?",
    "Yes. Many grocery retailers pilot the platform in a handful of stores, validate it against real transaction volume, then roll it out chain-wide.",
  ],
  [
    "Can this integrate with our existing ERP, POS, and e-commerce platforms?",
    "Yes. The suite is built to integrate with common ERP, POS, and e-commerce platforms, along with supplier and loyalty systems.",
  ],
  [
    "How does Lumovy reduce stock discrepancies?",
    "We combine real-time inventory tracking with automated replenishment and, where needed, RFID visibility, so stock counts reflect what is actually on the shelf.",
  ],
  [
    "What happens after go-live?",
    "You move into hypercare, then can extend into managed services for retail, covering monitoring, updates, and continuous optimization of your grocery retail technology platform.",
  ],
];

function GroceryFAQ() {
  return (
    <section className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <FaqAccordion
          title="Answers for grocery leaders"
          intro="Still have questions about how the Transformation Suite fits your business? Book a call and we'll walk you through it."
          items={GROCERY_FAQS}
        />
      </div>
    </section>
  );
}

/* ─────────────────────────────  11. FINAL CTA  ───────────────────────────── */
function GroceryFinalCTA() {
  return (
    <FinalCtaSection
      id="contact"
      title="Build Smarter Grocery Operations with a Partner You Can Trust"
      subtitle="Whether you're improving checkout, inventory visibility, or store operations, Lumovy helps you build a connected Microsoft Dynamics 365 platform designed for faster value and long-term growth."
      microcopy="In a focused discovery session, we'll assess your current store landscape, identify the highest-value opportunities, and recommend the right transformation path, without obligation."
      primary={{ label: "Book a Grocery Readiness Call", href: "#contact", icon: true }}
      secondary={{ label: "Download the Transformation Suite Overview", href: "#suite" }}
    />
  );
}
