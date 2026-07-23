import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Download,
  Check,
  Store,
  Boxes,
  LifeBuoy,
  Sparkles,
  Cpu,
  CreditCard,
  Layers,
  Workflow,
  BadgeCheck,
  Compass,
  PenTool,
  Settings2,
  Rocket,
  TrendingUp,
  ScanLine,
  Factory,
  ShoppingCart,
  Hotel,
  Landmark,
  Bot,
  MessageSquare,
  ClipboardCheck,
} from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
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
import retailImg from "@/assets/industries/retail.jpg";
import hospitalityImg from "@/assets/industries/hospitality.jpg";
import implementationImg from "@/assets/services/implementation.jpg";
import engineeringImg from "@/assets/services/engineering.jpg";
import consultingImg from "@/assets/services/consulting.jpg";
import supportImg from "@/assets/services/support.jpg";

export const Route = createFileRoute("/industries/retail-omnichannel-commerce")({
  component: RetailPage,
  head: () => ({
    meta: [
      { title: "Retail & Commerce Transformation Suite | Lumovy" },
      {
        name: "description",
        content:
          "MVP-led Microsoft retail solutions for multi-store and omnichannel retailers. Connected commerce, inventory visibility, and long-term support beyond go-live.",
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
function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function RetailPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <RetailHero />
      <RetailKPIs />
      <RetailProblem />
      <RetailSuite />
      <RetailTiers />
      <RetailIndustryAI />
      <RetailWhy />
      <RetailProof />
      <RetailProcess />
      <RetailInsights />
      <RetailFAQ />
      <RetailFinalCTA />
      <Footer />
    </div>
  );
}

/* ─────────────────────────────  1. HERO (dark)  ───────────────────────────── */
const TRUST_STRIP = [
  "Microsoft Dynamics 365 Solutions Partner",
  "Trusted Retail Technology Partner",
  "Clarity RFID Accelerator",
  "Quality Engineering",
];

function RetailHero() {
  return (
    <section className="relative overflow-hidden bg-[#003594]">
      {/* Fine grid lines (like homepage) — color unchanged */}
      <div aria-hidden className="hero-grid" />
      {/* Large soft overlapping light discs (reference style) — top-right cluster */}
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
        {/* Copy */}
        <div className="max-w-3xl">
          <span className="hero-content-in text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--cyan-soft)]">
            Retail &amp; Commerce
          </span>
          <h1 className="hero-content-in mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]" style={{ animationDelay: "80ms" }}>
            MVP-Led Microsoft Retail Solutions Built in{" "}
            <span className="text-[var(--cyan-soft)]">90 Days</span>
          </h1>
          <p className="hero-content-in mt-6 max-w-2xl text-base leading-relaxed text-white/70" style={{ animationDelay: "160ms" }}>
            The Retail &amp; Commerce Transformation Suite is an MVP-led engagement built on
            Microsoft retail solutions for multi-store and omnichannel retailers. Lumovy helps you
            build connected commerce, improve inventory visibility, and provide long-term support
            beyond go-live.
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
              <Download className="h-4 w-4" />
              Download the Suite Overview
            </a>
          </div>
        </div>
      </div>

      {/* Trust strip — bold, logo-like, evenly spaced */}
      <div className="relative z-10 border-t border-white/10">
        <div className="container-enterprise grid grid-cols-2 gap-x-8 gap-y-5 py-8 sm:grid-cols-4">
          {TRUST_STRIP.map((t) => (
            <span key={t} className="text-sm font-bold uppercase leading-tight tracking-wide text-white/45">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  2. KPI STRIP + MS ECOSYSTEM  ───────────────────────────── */
const KPIS = [
  { v: "99.5%", l: "Inventory accuracy" },
  { v: "100 days", l: "To full go-live" },
  { v: "<2 sec", l: "AI checkout recognition" },
  { v: "4 weeks", l: "Payment integration" },
];
const MS_LOGOS = [
  { src: msLogo, alt: "Microsoft", h: "h-6" },
  { src: d365Logo, alt: "Dynamics 365", h: "h-9" },
  { src: powerPlatformLogo, alt: "Power Platform", h: "h-9" },
  { src: azureLogo, alt: "Microsoft Azure", h: "h-9" },
];

function RetailKPIs() {
  return (
    <section className="bg-white pb-8 pt-20">
      <div className="container-enterprise">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-4">
          {KPIS.map((k) => (
            <div key={k.l} className="flex flex-col items-center justify-center bg-white px-6 py-8 text-center">
              <div className="text-2xl font-bold tracking-tight text-[var(--navy-deep)] sm:text-3xl">{k.v}</div>
              <div className="mt-1.5 text-xs font-medium text-[var(--blue-gray)]">{k.l}</div>
            </div>
          ))}
        </div>

        {/* Microsoft ecosystem — standalone band with spacing */}
        <div className="mt-20 py-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--blue-gray)]">
            Built on the Microsoft ecosystem
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {MS_LOGOS.map((l) => (
              <div key={l.alt} className="flex items-center justify-center rounded-lg border border-border bg-white px-9 py-6">
                <img src={l.src} alt={l.alt} loading="lazy" className={`${l.h} w-auto object-contain`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  3. THE CHALLENGE  ───────────────────────────── */
const PROBLEMS = [
  {
    icon: Layers,
    title: "Disconnected Commerce & Omnichannel Experiences",
    body: "Fragmented systems across stores, e-commerce, ERP, inventory and customer data create inconsistent experiences, limited visibility and disconnected omnichannel journeys that impact both customers and operations.",
  },
  {
    icon: Boxes,
    title: "Inefficient Store Operations & Inventory Execution",
    body: "Manual store processes, inaccurate inventory, limited fulfilment visibility and reactive replenishment reduce productivity, increase shrink and make it harder to deliver consistent customer service.",
  },
  {
    icon: Workflow,
    title: "Slow Modernization & Complex Retail Expansion",
    body: "Legacy systems, stalled Dynamics 365 programmes, complex payment integrations and country-specific language and compliance requirements slow transformation and make every rollout more expensive.",
  },
  {
    icon: Cpu,
    title: "Limited AI Driven Growth & Continuous Innovation",
    body: "Retailers often have transactional systems but lack AI powered insights, automation and a long-term innovation partner to continuously optimize operations and unlock new business value.",
  },
];

function RetailProblem() {
  return (
    <section className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <div className="max-w-3xl">
          <p className="eyebrow">The challenge</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Retail complexity grows faster than most retailers can manage alone
          </h2>
        </div>
      </div>

      {/* Horizontal slider — 3 fit per row, 4th peeks on the right edge */}
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
                <h3 className="mt-6 text-xl font-medium leading-snug text-[var(--navy-deep)]">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--blue-gray)]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  4. THE TRANSFORMATION SUITE (auto-cycling)  ───────────────────────────── */
const SUITE_INCLUDED: { label: string; image: string }[] = [
  { label: "Dynamics 365 Commerce foundation", image: retailImg },
  { label: "Modern POS & back-office enablement", image: hospitalityImg },
  { label: "Unified inventory & RFID readiness", image: engineeringImg },
  { label: "Pricing, promotions & loyalty", image: consultingImg },
  { label: "Retail payment integration", image: implementationImg },
  { label: "Omnichannel commerce enablement", image: supportImg },
  { label: "Store associate enablement", image: retailImg },
  { label: "Go-live support & knowledge transfer", image: hospitalityImg },
];
const SUITE_EXTENSIONS = ["Multi-country expansion", "Advanced loyalty", "Legacy modernization", "Managed services", "AI powered innovation"];
const SUITE_INTERVAL = 6000; // ms per item

function RetailSuite() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const { ref, shown } = useReveal<HTMLDivElement>();

  // Auto-advance through the items once the section is in view.
  useEffect(() => {
    if (!shown || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => setActive((a) => (a + 1) % SUITE_INCLUDED.length), SUITE_INTERVAL);
    return () => clearTimeout(id);
  }, [active, shown, paused]);

  return (
    <section id="suite" className="relative overflow-hidden bg-[var(--blue-light)]/30 py-28">
      <div aria-hidden className="mesh-blobs-light opacity-50" />
      <div ref={ref} className="container-enterprise relative grid items-start gap-14 lg:grid-cols-2 lg:gap-16">
        {/* Left: copy + auto-cycling list */}
        <div>
          <p className="eyebrow">The Transformation Suite</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            One structured engagement, built to scale with you
          </h2>

          <div className="mt-8" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            {SUITE_INCLUDED.map((item, i) => {
              const isActive = active === i;
              return (
                <button
                  key={item.label}
                  onClick={() => setActive(i)}
                  className="block w-full py-4 text-left"
                >
                  <span className={"text-base transition-colors duration-300 " + (isActive ? "font-semibold text-[var(--royal)]" : "font-normal text-[var(--navy-deep)]")}>
                    {item.label}
                  </span>
                  {/* Single line — grey track that fills blue over the interval when active */}
                  <span className="mt-3 block h-px w-full overflow-hidden bg-[var(--royal)]/12">
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

        {/* Right: synced image (crossfade) + extensions.
            Top offset on lg aligns the image top with the H2 (past the eyebrow). */}
        <div className="lg:sticky lg:top-24 lg:mt-[2.1rem]">
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
    </section>
  );
}

/* ─────────────────────────────  5. TIERS (pricing-style) + COMPARISON  ───────────────────────────── */
const TIERS = [
  {
    name: "Foundation",
    tag: "Start",
    blurb: "Validate business value through a focused retail MVP, supported by Lumovy from day one.",
    points: ["Connected commerce foundation", "Modern store operations", "Standard payments & checkout", "2-week hypercare"],
    featured: false,
  },
  {
    name: "Growth",
    tag: "Scale up",
    blurb: "Expand capabilities across stores, channels and business functions with ongoing partner support.",
    points: ["Everything in Foundation", "Omnichannel retail", "Inventory intelligence", "Retail accelerators", "4-week hypercare"],
    featured: true,
  },
  {
    name: "Enterprise",
    tag: "Scale wide",
    blurb: "Scale transformation across regions, brands and complex retail ecosystems with dedicated governance.",
    points: ["Everything in Growth", "Multi-country readiness", "AI innovation included", "Advanced inventory", "12-week hypercare"],
    featured: false,
  },
];
function RetailTiers() {
  return (
    <section className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Engagement tiers</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Three ways to begin working with us
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

        {/* Guidance strip — full width, dark navy, left text / right CTA */}
        <div className="mt-16 overflow-hidden rounded-2xl bg-[var(--navy)]">
          <div className="flex flex-col items-start justify-between gap-6 px-8 py-10 sm:flex-row sm:items-center sm:px-12">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                Not sure where to begin?
              </h3>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/70">
                Book a Retail Readiness Call and we&apos;ll recommend the right starting point for your
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

/* ─────────────────────────────  6. INDUSTRY SOLUTIONS & AI AGENTS  ───────────────────────────── */
const INDUSTRIES = [
  { name: "Retail & Omnichannel Commerce", image: retailImg, body: "Connect your POS, payment solution and inventory across stores, web and mobile into one true omnichannel solution." },
  { name: "Manufacturing & Supply Chain", image: implementationImg, body: "End-to-end visibility from production to shelf, keeping supply and demand in sync across every location." },
  { name: "Modern Grocery & Hypermarkets", image: engineeringImg, body: "Rapid replenishment, real-time inventory and a fast, reliable POS built for high-volume, low-margin operations." },
  { name: "Hospitality, Entertainment & Sports", image: hospitalityImg, body: "Fast, integrated checkout for venues and events, with secure payments across concessions, retail and ticketing." },
  { name: "Public Sector", image: consultingImg, body: "Secure, compliant Microsoft retail solutions with centralized inventory for government stores and service outlets." },
];
const AI_AGENTS = [
  { icon: ScanLine, name: "Checkout & Product Recognition", body: "AI powered scan-and-go at the POS, cutting checkout time and reducing shrinkage." },
  { icon: TrendingUp, name: "Inventory & Demand Forecasting", body: "Predicts stock-outs and overstock before they happen, keeping inventory ahead of demand." },
  { icon: MessageSquare, name: "Customer Service Agent", body: "Always-on support across web, app and in-store kiosks, resolving order and loyalty questions instantly." },
  { icon: ClipboardCheck, name: "Store Operations Agent", body: "Automates replenishment triggers, task assignment and compliance checks, freeing staff to focus on customers." },
];

function RetailIndustryAI() {
  return (
    <>
      {/* Industry solutions — picture cards (homepage style) */}
      <section className="relative overflow-hidden border-b border-border bg-[var(--blue-light)]/40 py-28">
        <div aria-hidden className="mesh-blobs-light opacity-60" />
        <div className="container-enterprise relative">
          <div className="max-w-2xl">
            <p className="eyebrow">Industry solutions</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
              Purpose-built for your industry
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((i) => (
              <article key={i.name} className="group card-lift flex flex-col overflow-hidden rounded-xl border border-border bg-white">
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <img src={i.image} alt={i.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold leading-snug text-[var(--navy-deep)]">{i.name}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[var(--blue-gray)]">{i.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AI agents — dark band, distinct treatment */}
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
    </>
  );
}

/* ─────────────────────────────  7. WHY LUMOVY  ───────────────────────────── */
const WHY = [
  { icon: BadgeCheck, title: "Microsoft-focused retail specialists", body: "Trusted Microsoft retail solutions and deep Dynamics 365 Commerce expertise." },
  { icon: ScanLine, title: "Proven retail accelerators", body: "Including Marketplace-listed RFID capabilities that shorten time-to-value." },
  { icon: TrendingUp, title: "Success by Design delivery", body: "An approach focused on adoption, value realization and long-term success." },
  { icon: Sparkles, title: "Integrated Quality Engineering", body: "Embedded throughout delivery so quality is built in, not bolted on." },
  { icon: LifeBuoy, title: "Managed services for retail", body: "We continue to optimize, support and evolve your platform long after go-live." },
];

function RetailWhy() {
  return (
    <section className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <div className="max-w-2xl">
          <p className="eyebrow">Why Lumovy</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Why retailers choose Lumovy as their partner
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
function RetailProof() {
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
          <CaseStudyCard
            sector="Majid Al Futtaim"
            logo={mafLogo}
            logoClass="max-h-10"
            title="Connected Omnichannel Commerce in 100 Days"
            challenge="One of the UAE's fastest-growing discount grocery retailers modernized operations with Dynamics 365 Commerce and Finance & Operations, a connected omnichannel solution across stores, procurement, warehouses and POS, including AI powered checkout and real-time inventory built to support rapid growth."
            results={[
              ["100 days", "D365 Commerce & F&O live"],
              ["<2 sec", "AI product recognition at POS"],
              ["4 weeks", "Secure payment integration"],
            ]}
            cta="Talk to us about your outcomes"
          />
          {/* Testimonial: photo + colorless glass-blur scrim + white text (reference style) */}
          <figure className="relative overflow-hidden rounded-xl">
            <img src={testimonialImg} alt="Retail transformation leader" className="absolute inset-0 h-full w-full object-cover object-top" />
            {/* Colorless darkening + blur gradient rising from the bottom */}
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/45 to-transparent" />
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 backdrop-blur-[3px] [mask-image:linear-gradient(to_top,black_35%,transparent)]" />
            <figcaption className="relative z-10 flex h-full min-h-[440px] flex-col justify-end p-8">
              <div className="text-3xl font-bold tracking-tight text-white">Real-time</div>
              <div className="mt-1 text-sm text-white/80">Centralized, procurement-driven replenishment</div>
              <blockquote className="mt-4 text-sm leading-relaxed text-white/90">
                &ldquo;Lumovy modernized our entire retail operation on Dynamics 365 and gave us a
                platform built to scale with our growth.&rdquo;
              </blockquote>
              <div className="mt-4 border-t border-white/20 pt-3">
                <div className="text-sm font-semibold text-white">Retail Operations Lead</div>
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
  { icon: Compass, title: "Discover", body: "Define business priorities and MVP outcomes." },
  { icon: PenTool, title: "Design", body: "Build the solution blueprint and implementation roadmap." },
  { icon: Settings2, title: "Configure", body: "Integrate and validate your POS, payments and inventory." },
  { icon: Rocket, title: "Launch", body: "Go live with user enablement and hypercare support." },
  { icon: TrendingUp, title: "Optimize", body: "Scale through continuous improvement and managed services." },
];

function RetailProcess() {
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
            From discovery to enterprise scale
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

/* ─────────────────────────────  10. RELATED INSIGHTS  ───────────────────────────── */
const INSIGHTS = [
  { tag: "Guide", title: "The MVP-first path to Dynamics 365 Commerce", read: "6 min read", image: consultingImg },
  { tag: "Case study", title: "How a UAE grocery leader went live in 100 days", read: "4 min read", image: retailImg },
  { tag: "Article", title: "Real-time inventory: from store-led to procurement-driven", read: "5 min read", image: supportImg },
];

function RetailInsights() {
  return (
    <section className="bg-white py-28">
      <div className="container-enterprise">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow">Related insights</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
              Retail thought leadership
            </h2>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--royal)]">
            View all insights
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {INSIGHTS.map((p) => (
            <a key={p.title} href="#" className="group card-lift flex flex-col overflow-hidden rounded-xl border border-border bg-white">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <img src={p.image} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-md bg-white/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--royal)] shadow-sm">
                  {p.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs text-[var(--blue-gray)]">{p.read}</span>
                <h3 className="mt-2 flex-1 text-lg font-semibold leading-snug text-[var(--navy-deep)]">{p.title}</h3>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--royal)]">
                  Read more
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

/* ─────────────────────────────  11. FAQ (reuses homepage FaqAccordion)  ───────────────────────────── */
const RETAIL_FAQS: [string, string][] = [
  [
    "How is the Transformation Suite different from a traditional implementation?",
    "The Suite is MVP-led: we deliver a focused, high-value foundation first, prove business outcomes quickly, and then scale, rather than attempting a single large, high-risk implementation. It comes with proven accelerators and a direct path into managed services, so value continues well beyond go-live.",
  ],
  [
    "Can we expand beyond the initial engagement?",
    "Yes. The Suite is designed to grow with you, from a Foundation MVP through Growth and Enterprise tiers, with extensions for multi-country expansion, advanced loyalty, legacy modernization, managed services and AI powered retail innovation.",
  ],
  [
    "Which retail platforms, POS systems and payment providers can you integrate?",
    "We build on Microsoft Dynamics 365 Commerce and integrate modern POS, payment providers and inventory/RFID capabilities, including our Clarity RFID accelerator and secure retail payment solution integrations.",
  ],
  [
    "What managed services for retail are available after go-live?",
    "Ongoing optimization, proactive support, release management and platform evolution, keeping your retail systems supported, current and continuously improving as your business grows.",
  ],
  [
    "How do we get started with Lumovy as our retail technology partner?",
    "Book a Retail Readiness Call. In a focused discovery session we assess your current retail landscape, identify the highest-value opportunities and recommend the right transformation path, without obligation.",
  ],
];

function RetailFAQ() {
  return (
    <section className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <FaqAccordion
          title="Answers for retail leaders"
          intro="Still have questions about how the Transformation Suite fits your business? Book a call and we'll walk you through it."
          items={RETAIL_FAQS}
        />
      </div>
    </section>
  );
}

/* ─────────────────────────────  12. FINAL CTA (reuses homepage FinalCtaSection)  ───────────────────────────── */
function RetailFinalCTA() {
  return (
    <FinalCtaSection
      id="contact"
      title="Start with measurable outcomes. Scale with a retail technology partner you can trust"
      subtitle="Whether your priority is a modern POS system, a reliable payment solution, stronger inventory services, or a complete omnichannel solution, Lumovy helps you build the right Microsoft Dynamics 365 retail foundation, a practical, MVP-first engagement designed to accelerate business value."
      microcopy="In a focused discovery session, we'll assess your current retail landscape, identify the highest-value opportunities and recommend the right transformation path, without obligation."
      primary={{ label: "Book a Retail Readiness Call", href: "#contact", icon: true }}
      secondary={{ label: "Download the Transformation Suite Overview", href: "#suite" }}
    />
  );
}
