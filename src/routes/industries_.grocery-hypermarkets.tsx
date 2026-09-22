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
  Settings2,
  Gauge,
  Tablet,
  ArrowUpRight,
  UserCircle,
  MessageSquare,
  Smartphone,
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
      { title: "Retail & Hypermarket Commerce | Lumovy" },
      {
        name: "description",
        content:
          "Every gap in your store is a sale walking out of it. Lumovy connects stores, inventory and checkout on Microsoft Dynamics 365 Commerce, and gives the platform agents that catch revenue leaks before they cost you the sale.",
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
  "Up to 99.5% Inventory Accuracy",
  "Under 2-Second AI Product Recognition",
  "Live in 100 Days",
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
            Retail &amp; Hypermarket Commerce
          </span>
          <h1 className="hero-content-in mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]" style={{ animationDelay: "80ms" }}>
            Every Gap in Your Store Is a Sale Walking Out of It
          </h1>
          <p className="hero-content-in mt-6 max-w-2xl text-base leading-relaxed text-white/70" style={{ animationDelay: "160ms" }}>
            A stockout an agent could have flagged. A checkout line an agent could have shortened.
            A customer an agent didn&apos;t recognize. We connect stores, inventory and checkout on
            Microsoft Dynamics 365 Commerce, and give the platform the ability to catch these
            before they cost you the sale.
          </p>
          <div className="hero-content-in mt-9 flex flex-wrap gap-3" style={{ animationDelay: "240ms" }}>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--navy-deep)] transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30"
            >
              <Calendar className="h-4 w-4" />
              Book a Retail Readiness Call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#suite"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              See What&apos;s Included
            </a>
          </div>
        </div>
      </div>

      {/* Proof bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="container-enterprise grid grid-cols-1 gap-x-8 gap-y-5 py-8 sm:grid-cols-3">
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
    icon: UserCircle,
    title: "The Customer Isn't Recognized",
    body: "A shopper on the app, at the register, and on the phone with support looks like three different people to three different systems. An agent working from one customer profile knows it's the same person every time, and personalizes accordingly.",
  },
  {
    icon: Boxes,
    title: "The Stock Count Is Wrong Before Anyone Finds Out",
    body: "A stockout usually surfaces when a customer hits it. A demand-forecasting agent flags the shortfall days earlier, while there's still time to act.",
  },
  {
    icon: Gauge,
    title: "The Line Is Too Slow, Twice",
    body: "Every extra second at the till grows the queue; every extra step online grows cart abandonment. A checkout agent doing scan-and-go fixes both without adding staff.",
  },
  {
    icon: Workflow,
    title: "Store Associates Do the System's Job Instead of the Customer's",
    body: "Manual replenishment and paper checklists turn a salesperson into an administrator. A store-operations agent triggers the replenishment itself.",
  },
  {
    icon: Cpu,
    title: "The Platform Can't Keep Up",
    body: "Every new capability used to mean a re-platform. On Dynamics 365, it means turning an agent on.",
  },
];

function GroceryProblem() {
  return (
    <section className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <div className="max-w-3xl">
          <p className="eyebrow">The problem</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Where Revenue Leaks, and Where an Agent Catches It
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-[var(--blue-gray)]">
            Retail doesn&apos;t lose revenue in one place. It leaks in five, quietly enough that
            nobody owns the fix, until now, an agent can.
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

      {/* Agentic Retail & Commerce narrative */}
      <div className="container-enterprise mt-16">
        <div className="rounded-2xl border border-[var(--royal)]/10 bg-[var(--blue-light)]/30 p-8 lg:p-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--royal)]">
            Agentic Retail &amp; Commerce
          </p>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-[var(--blue-gray)]">
            This isn&apos;t a separate product sitting next to your commerce platform, it&apos;s
            the same platform gaining the ability to act on its own. Microsoft is building this
            directly into Dynamics 365 Commerce: agents that can check stock, flag a price
            mismatch, or recover an abandoned cart, the moment the problem exists rather than
            after a customer notices it. For a retailer, that&apos;s the difference between a
            monthly report that tells you where you lost revenue last quarter, and a system that
            stops the loss while the customer&apos;s still standing there.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  3. THE TRANSFORMATION SUITE  ───────────────────────────── */
const SUITE_INCLUDED: { label: string; image: string }[] = [
  { label: "AI assisted POS, mobile and offline capable", image: retailImg },
  { label: "Digital commerce storefront, B2B and B2C", image: hospitalityImg },
  { label: "Faster checkout, in store and online", image: implementationImg },
  { label: "Connected inventory across stores, warehouses and online", image: engineeringImg },
  { label: "Payments and core system integrations", image: consultingImg },
  { label: "Unified pricing, promotions and loyalty", image: supportImg },
  { label: "Omnichannel fulfilment", image: retailImg },
  { label: "Store associate tools for inventory, orders and service", image: hospitalityImg },
  { label: "Store and commerce KPI dashboards", image: implementationImg },
  { label: "Go-live support and continuous optimization", image: engineeringImg },
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
    blurb: "Best for a single connected store operation: modern POS, a B2C or B2B storefront, and standard payments, reconciled.",
    points: ["Connected commerce & modern POS", "Digital storefront: B2C, B2B or both", "Click & collect, ship-to-home, returns", "Single payment provider, reconciled", "2 weeks hypercare, optional"],
    featured: false,
  },
  {
    name: "Growth",
    tag: "Scale up",
    blurb: "Best for expanding across stores and channels, with advanced B2B, personalization and multi-provider payments.",
    points: ["Everything in Foundation", "Advanced B2B & personalization", "Ship-from-store, endless aisle", "Multi-provider payments + wallets/BNPL", "Checkout & product recognition agents", "4 weeks hypercare, standard"],
    featured: true,
  },
  {
    name: "Enterprise",
    tag: "Scale wide",
    blurb: "Best for scaling across brands, regions and warehouses, with headless commerce and the full agent suite.",
    points: ["Everything in Growth", "Headless, multi-site/brand storefront", "Order orchestration, cross-border", "Multi-currency, full reconciliation", "Full agent suite", "12 weeks hypercare, dedicated"],
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
            Three Ways to Start
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
                Not sure where to start?
              </h3>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/70">
                Book a Retail Readiness Call and we&apos;ll recommend the right tier for your
                business.
              </p>
            </div>
            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--navy-deep)] transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              <Calendar className="h-4 w-4" />
              Book a Retail Readiness Call
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
  { icon: Radio, name: "Clarity RFID Connector", body: "Real-time inventory accuracy, at the item level.", href: "/what-we-do/products-accelerators/rfid-connect" },
  { icon: Boxes, name: "B2B in a Box", body: "Quote-to-cash on Dynamics 365 Commerce, pre-built.", href: "/what-we-do/products-accelerators/b2b-in-a-box" },
  { icon: Smartphone, name: "Consumer Swift Commerce", body: "A white-label mobile app, connected and fast to launch.", href: "/products/consumer-swift-commerce" },
  { icon: Settings2, name: "Optim365", body: "Governs data and licensing as Dynamics 365 scales.", href: "/what-we-do/products-accelerators/optim365" },
  { icon: Tablet, name: "In-Store Mobility Suite", body: "Power Apps for labeling, counts and orders, connected to D365 F&O.", href: "/what-we-do/products-accelerators/in-store-mobility-suite" },
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
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
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
  { icon: ScanLine, name: "Checkout & Product Recognition", body: "Scan-and-go at the register, cutting checkout time in store and online without adding staff." },
  { icon: TrendingUp, name: "Inventory & Demand Forecasting", body: "Catches a stockout before it happens, flagging the shortfall days before a customer hits it." },
  { icon: MessageSquare, name: "Customer Service", body: "Always-on across web, app and kiosk, working from one customer profile every time." },
  { icon: ClipboardCheck, name: "Store Operations", body: "Triggers replenishment and task assignment on its own, so store associates can focus on customers." },
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
                A fast-growing UAE discount grocery retailer, modernized on Dynamics 365 Commerce
                and Finance &amp; Operations. A connected solution across stores, procurement,
                warehouses and POS, including AI powered checkout and real-time inventory, built
                for rapid growth.
              </p>
            </div>
            <div>
              <div className="grid grid-cols-3 gap-3 border-t border-border pt-6">
                {[
                  ["100 days", "Live on D365 Commerce & F&O"],
                  ["<2 sec", "Product recognition at POS"],
                  ["4 weeks", "Secure payment integration"],
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
    "Can we modernize without disrupting store operations?",
    "Yes, rollouts are phased and stores stay open throughout.",
  ],
  [
    "Can we start with a few stores first?",
    "Yes, that's what Foundation is built for.",
  ],
  [
    "Does this integrate with our existing ERP, POS or e-commerce platform?",
    "Yes, connection is the default, not replacement.",
  ],
  [
    "What happens after go-live?",
    "Hypercare, then continuous optimization, not a handoff.",
  ],
];

function GroceryFAQ() {
  return (
    <section className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <FaqAccordion
          title="Answers for retail leaders"
          intro="Still have questions about how we fit your business? Book a call and we'll walk you through it."
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
      title="Start with One Measurable Outcome. Scale from There."
      subtitle="Whether your priority is checkout speed, inventory accuracy, or a connected omnichannel storefront, Lumovy helps you build the right Microsoft Dynamics 365 Commerce foundation, and give it the agents to catch revenue leaks before they cost you the sale."
      microcopy="A focused, no-obligation session to assess your setup and recommend where to start."
      primary={{ label: "Book a Retail Readiness Call", href: "#contact", icon: true }}
      secondary={{ label: "Download the Transformation Suite Overview", href: "#suite" }}
    />
  );
}
