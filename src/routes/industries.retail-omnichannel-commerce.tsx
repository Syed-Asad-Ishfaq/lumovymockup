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
  ShieldCheck,
  Sparkles,
  Cpu,
  CreditCard,
  Layers,
  Workflow,
  BadgeCheck,
  Plus,
  Minus,
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
  Warehouse,
  FileText,
} from "lucide-react";
import { useState } from "react";
import { Nav, Footer, CaseStudyCard, QuoteCard, FaqAccordion, FinalCtaSection } from "./index";
import retailHero from "@/assets/industries/retail/retail-hero.jpg";

export const Route = createFileRoute("/industries/retail-omnichannel-commerce")({
  component: RetailPage,
  head: () => ({
    meta: [
      { title: "Retail & Commerce Transformation Suite | Lumovy" },
      {
        name: "description",
        content:
          "MVP-led Microsoft retail solutions for multi-store and omnichannel retailers. Connected commerce, inventory visibility, and managed services for retail — delivered in 90 days.",
      },
    ],
  }),
});

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

/* ─────────────────────────────  HERO  ───────────────────────────── */
const TRUST_STRIP = [
  "Microsoft Dynamics 365 Solutions Partner",
  "Trusted Retail Technology Partner",
  "Clarity RFID Accelerator",
  "Quality Engineering",
];

function RetailHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-white to-[var(--blue-light)]/30">
      <div aria-hidden className="mesh-blobs-light opacity-50" />
      <div className="container-enterprise relative z-10 grid items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        {/* Copy */}
        <div>
          <span className="hero-content-in inline-flex items-center gap-2 rounded-full bg-[var(--blue-light)]/70 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--royal)]">
            <Store className="h-3.5 w-3.5" />
            Retail &amp; Commerce
          </span>
          <h1 className="hero-content-in mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-[var(--navy-deep)] sm:text-5xl lg:text-[3.4rem]" style={{ animationDelay: "80ms" }}>
            MVP-Led Microsoft Retail Solutions Built for Modern Commerce in{" "}
            <span className="relative whitespace-nowrap text-[var(--royal)]">
              90 Days
            </span>
          </h1>
          <p className="hero-content-in mt-6 max-w-xl text-base leading-relaxed text-[var(--blue-gray)]" style={{ animationDelay: "160ms" }}>
            The Retail &amp; Commerce Transformation Suite is an MVP-led engagement built on
            Microsoft retail solutions for multi-store and omnichannel retailers. As your long-term
            retail technology partner, Lumovy helps you establish a connected commerce foundation,
            improve inventory visibility, and deliver managed services that extend value well beyond
            go-live.
          </p>
          <div className="hero-content-in mt-9 flex flex-wrap gap-3" style={{ animationDelay: "240ms" }}>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--royal)] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[var(--navy)] hover:shadow-lg hover:shadow-[var(--royal)]/25"
            >
              <Calendar className="h-4 w-4" />
              Book a Retail Readiness Call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#suite"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3.5 text-sm font-semibold text-[var(--navy-deep)] transition-colors hover:border-[var(--royal)]/40 hover:bg-[var(--blue-light)]/40"
            >
              <Download className="h-4 w-4" />
              Download the Suite Overview
            </a>
          </div>
        </div>

        {/* Visual */}
        <div className="hero-content-in relative" style={{ animationDelay: "200ms" }}>
          <div className="overflow-hidden rounded-2xl border border-border shadow-fluent-lg">
            <img
              src={retailHero}
              alt="Connected omnichannel retail operations"
              width={1600}
              height={1067}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          {/* Floating stat chip */}
          <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-border bg-white px-5 py-4 shadow-fluent-md sm:block">
            <div className="text-2xl font-bold tracking-tight text-[var(--navy-deep)]">100 days</div>
            <div className="mt-0.5 text-xs text-[var(--blue-gray)]">D365 Commerce + F&amp;O, live</div>
          </div>
          <div className="absolute -right-4 -top-4 hidden rounded-xl bg-[var(--royal)] px-4 py-3 shadow-fluent-md sm:block">
            <div className="flex items-center gap-2 text-xs font-semibold text-white">
              <ScanLine className="h-4 w-4 text-[var(--cyan-soft)]" />
              &lt; 2s AI product ID
            </div>
          </div>
        </div>
      </div>

      {/* Trust strip */}
      <div className="relative z-10 border-t border-border">
        <div className="container-enterprise flex flex-wrap items-center gap-x-8 gap-y-3 py-5">
          {TRUST_STRIP.map((t) => (
            <span key={t} className="inline-flex items-center gap-2 text-xs font-medium text-[var(--blue-gray)]">
              <BadgeCheck className="h-4 w-4 text-[var(--royal)]" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  KPI STRIP + MS ECOSYSTEM  ───────────────────────────── */
const KPIS = [
  { v: "99.5%", l: "Inventory accuracy" },
  { v: "100 days", l: "To full go-live" },
  { v: "<2 sec", l: "AI checkout recognition" },
  { v: "4 weeks", l: "Payment integration" },
];
const MS_BADGES = ["Dynamics 365", "Power Platform", "Azure", "Data & AI"];

function RetailKPIs() {
  return (
    <section className="border-b border-border bg-white py-12">
      <div className="container-enterprise">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
          {KPIS.map((k) => (
            <div key={k.l} className="flex flex-col items-center justify-center bg-white px-6 py-7 text-center">
              <div className="text-2xl font-bold tracking-tight text-[var(--navy-deep)] sm:text-3xl">{k.v}</div>
              <div className="mt-1.5 text-xs font-medium text-[var(--blue-gray)]">{k.l}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--blue-gray)]">
            Built on the Microsoft ecosystem
          </span>
          <span className="hidden h-4 w-px bg-border sm:block" />
          {MS_BADGES.map((b) => (
            <span
              key={b}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-[var(--blue-light)]/40 px-3 py-1.5 text-xs font-semibold text-[var(--navy-deep)]"
            >
              <BadgeCheck className="h-3.5 w-3.5 text-[var(--royal)]" />
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  PROBLEM  ───────────────────────────── */
const PROBLEMS = [
  {
    icon: Layers,
    title: "Fragmented Commerce Operations",
    body: "Disconnected stores, e-commerce, ERP, inventory and customer data create inconsistent experiences, slower decisions and higher operating costs — often the result of not having a dedicated retail technology partner.",
  },
  {
    icon: Boxes,
    title: "Limited Inventory Visibility",
    body: "Without real-time inventory accuracy, retailers struggle with stock discrepancies, inefficient fulfillment, lost sales opportunities and reduced customer confidence.",
  },
  {
    icon: LifeBuoy,
    title: "No Long-Term Support Beyond Go-Live",
    body: "Many implementations end at launch. Retailers need managed services for retail that keep systems optimized, supported and evolving as the business grows.",
  },
];

function RetailProblem() {
  return (
    <section className="border-b border-border bg-white py-24">
      <div className="container-enterprise">
        <div className="max-w-3xl">
          <p className="eyebrow">The challenge</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Retail complexity grows faster than most retailers can manage alone
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PROBLEMS.map((p) => (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-white p-7 transition-all hover:-translate-y-1 hover:border-[var(--royal)]/30 hover:shadow-fluent-md"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[var(--royal)] to-[var(--cyan-soft)] transition-transform duration-500 group-hover:scale-x-100"
              />
              <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-[var(--blue-light)]/70 text-[var(--royal)]">
                <p.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-[var(--navy-deep)]">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--blue-gray)]">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  SUITE  ───────────────────────────── */
const SUITE_INCLUDED = [
  "Dynamics 365 Commerce foundation powered by Microsoft retail solutions",
  "Modern POS and back-office enablement",
  "Unified inventory and RFID readiness",
  "Standard pricing, promotions and loyalty",
  "Retail payment solution integration",
  "Omnichannel commerce enablement",
  "Store associate enablement",
  "Go-live support, knowledge transfer and a direct path into managed services",
];
const SUITE_EXTENSIONS = [
  { icon: Compass, label: "Multi-country expansion" },
  { icon: Sparkles, label: "Advanced loyalty experiences" },
  { icon: Workflow, label: "Legacy modernization" },
  { icon: LifeBuoy, label: "Managed services for retail" },
  { icon: Cpu, label: "AI-powered retail innovation" },
];

function RetailSuite() {
  return (
    <section id="suite" className="relative overflow-hidden bg-[var(--blue-light)]/40 py-24">
      <div aria-hidden className="mesh-blobs-light opacity-60" />
      <div className="container-enterprise relative">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left: intro */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="eyebrow">The Transformation Suite</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
              The Retail &amp; Commerce Transformation Suite
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[var(--blue-gray)]">
              A structured engagement that combines Microsoft retail solutions with Lumovy&apos;s
              proven delivery approach, retail expertise and implementation accelerators to establish
              a scalable commerce foundation — backed by ongoing managed services for retail that
              reduce delivery risk and accelerate business outcomes.
            </p>
            <div className="mt-8 rounded-xl border border-[var(--royal)]/15 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--royal)]">
                Available extensions
              </p>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {SUITE_EXTENSIONS.map((e) => (
                  <li
                    key={e.label}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-[var(--blue-light)]/50 px-3.5 py-2 text-xs font-medium text-[var(--navy-deep)]"
                  >
                    <e.icon className="h-3.5 w-3.5 text-[var(--royal)]" />
                    {e.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: what's included checklist */}
          <div className="rounded-2xl border border-border bg-white p-8 shadow-fluent-sm sm:p-10">
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--royal)] text-white">
                <Check className="h-4 w-4" />
              </span>
              <h3 className="text-lg font-semibold text-[var(--navy-deep)]">What&apos;s included</h3>
            </div>
            <ul className="mt-7 divide-y divide-border">
              {SUITE_INCLUDED.map((item, idx) => (
                <li key={item} className="flex items-start gap-4 py-4 first:pt-0">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[var(--cyan-soft)]/15 text-[10px] font-bold text-[var(--royal)]">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-relaxed text-[var(--navy-deep)]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  TIERS  ───────────────────────────── */
const TIERS = [
  {
    name: "Foundation",
    tag: "Start",
    body: "Validate business value through a focused retail MVP, supported by Lumovy from day one.",
    featured: false,
  },
  {
    name: "Growth",
    tag: "Scale up",
    body: "Expand capabilities across stores, channels and business functions with ongoing partner support.",
    featured: true,
  },
  {
    name: "Enterprise",
    tag: "Scale wide",
    body: "Scale transformation across regions, brands and complex retail ecosystems with dedicated governance and managed services for retail.",
    featured: false,
  },
];

// Capability × tier matrix. Cells: "yes" → check, "no" → dash, else literal text.
const TIER_MATRIX: { cap: string; cells: [string, string, string] }[] = [
  { cap: "Connected Commerce", cells: ["yes", "yes", "yes"] },
  { cap: "Modern Store Operations", cells: ["yes", "yes", "yes"] },
  { cap: "Omnichannel Retail", cells: ["no", "yes", "yes"] },
  { cap: "Mobile Commerce Experience", cells: ["no", "6 months", "Included"] },
  { cap: "Retail Accelerators", cells: ["no", "Select", "Complete Suite"] },
  { cap: "Inventory Intelligence", cells: ["no", "yes", "Advanced"] },
  { cap: "Payments & Checkout", cells: ["Standard", "Enhanced", "Enterprise"] },
  { cap: "AI Innovation", cells: ["no", "Add-on", "Included"] },
  { cap: "Multi-Country Readiness", cells: ["Single Country", "Add-on", "Included"] },
  { cap: "Hypercare & Managed Services", cells: ["2 Weeks", "4 Weeks", "12 Weeks"] },
];

function RetailTiers() {
  return (
    <section className="border-b border-border bg-white py-24">
      <div className="container-enterprise">
        <div className="max-w-2xl">
          <p className="eyebrow">Engagement tiers</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Three ways to begin working with your retail technology partner
          </h2>
        </div>
        <div className="mt-14 grid items-stretch gap-6 md:grid-cols-3">
          {TIERS.map((t, i) => (
            <div
              key={t.name}
              className={
                "relative flex flex-col overflow-hidden rounded-xl p-8 transition-all hover:-translate-y-1 " +
                (t.featured
                  ? "bg-[var(--royal)] text-white shadow-fluent-lg"
                  : "border border-border bg-white text-[var(--navy-deep)] hover:shadow-fluent-md")
              }
            >
              {t.featured && (
                <span className="absolute right-5 top-5 rounded-full bg-[var(--cyan-soft)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--navy-deep)]">
                  Most chosen
                </span>
              )}
              <div
                className={
                  "text-xs font-semibold uppercase tracking-widest " +
                  (t.featured ? "text-[var(--cyan-soft)]" : "text-[var(--royal)]")
                }
              >
                Tier {String(i + 1).padStart(2, "0")} · {t.tag}
              </div>
              <h3
                className={
                  "mt-4 text-2xl font-semibold tracking-tight " +
                  (t.featured ? "text-white" : "text-[var(--navy-deep)]")
                }
              >
                {t.name}
              </h3>
              <p
                className={
                  "mt-4 flex-1 text-sm leading-relaxed " +
                  (t.featured ? "text-white/75" : "text-[var(--blue-gray)]")
                }
              >
                {t.body}
              </p>
              <a
                href="#contact"
                className={
                  "mt-8 inline-flex items-center gap-2 text-sm font-semibold " +
                  (t.featured ? "text-white" : "text-[var(--royal)]")
                }
              >
                Explore this tier
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Capability comparison table */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-white shadow-fluent-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-border bg-[var(--blue-light)]/30">
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[var(--blue-gray)]">
                    Transformation capability
                  </th>
                  {["Foundation", "Growth", "Enterprise"].map((h) => (
                    <th
                      key={h}
                      className={
                        "px-5 py-4 text-center text-sm font-semibold " +
                        (h === "Growth" ? "bg-[var(--royal)]/5 text-[var(--royal)]" : "text-[var(--navy-deep)]")
                      }
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TIER_MATRIX.map((row, i) => (
                  <tr key={row.cap} className={i % 2 ? "bg-[var(--blue-light)]/15" : "bg-white"}>
                    <td className="px-6 py-3.5 font-medium text-[var(--navy-deep)]">{row.cap}</td>
                    {row.cells.map((c, j) => (
                      <td
                        key={j}
                        className={
                          "px-5 py-3.5 text-center " +
                          (j === 1 ? "bg-[var(--royal)]/5" : "")
                        }
                      >
                        {c === "yes" ? (
                          <Check className="mx-auto h-4 w-4 text-[var(--royal)]" />
                        ) : c === "no" ? (
                          <span className="text-[var(--gray-neutral)]">—</span>
                        ) : (
                          <span className="text-xs font-semibold text-[var(--navy-deep)]">{c}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Guidance CTA band */}
        <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-xl border border-[var(--royal)]/15 bg-[var(--blue-light)]/50 p-7 sm:flex-row sm:items-center">
          <p className="text-base font-medium text-[var(--navy-deep)]">
            Not sure where to begin? Book a Retail Readiness Call and we&apos;ll recommend the right
            starting point for your business.
          </p>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[var(--royal)] px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[var(--navy)]"
          >
            <Calendar className="h-4 w-4" />
            Book a Retail Readiness Call
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  INDUSTRY SOLUTIONS & AI AGENTS  ───────────────────────────── */
const INDUSTRIES = [
  {
    icon: ShoppingCart,
    name: "Retail & Omnichannel Commerce",
    body: "Connects your POS, payment solution and inventory services across stores, web and mobile into one true omnichannel solution.",
  },
  {
    icon: Factory,
    name: "Manufacturing & Supply Chain",
    body: "End-to-end visibility from production to shelf, keeping supply and demand in sync across every location.",
  },
  {
    icon: Store,
    name: "Modern Grocery & Hypermarkets",
    body: "Rapid replenishment, real-time inventory and a fast, reliable POS built for high-volume, low-margin operations.",
  },
  {
    icon: Hotel,
    name: "Hospitality, Entertainment & Sports",
    body: "Fast, integrated checkout for venues and events, with secure payments across concessions, retail and ticketing.",
  },
  {
    icon: Landmark,
    name: "Public Sector",
    body: "Secure, compliant Microsoft retail solutions with centralized inventory for government stores and service outlets.",
  },
];
const AI_AGENTS = [
  {
    icon: ScanLine,
    name: "Checkout & Product Recognition",
    body: "AI-powered scan-and-go at the POS, cutting checkout time and reducing shrinkage.",
  },
  {
    icon: TrendingUp,
    name: "Inventory & Demand Forecasting",
    body: "Predicts stock-outs and overstock before they happen, keeping inventory a step ahead of demand.",
  },
  {
    icon: MessageSquare,
    name: "Customer Service Agent",
    body: "Always-on support across web, app and in-store kiosks, resolving order and loyalty questions instantly.",
  },
  {
    icon: ClipboardCheck,
    name: "Store Operations Agent",
    body: "Automates replenishment triggers, task assignment and compliance checks, freeing staff to focus on customers.",
  },
];

function RetailIndustryAI() {
  return (
    <section className="border-y border-border bg-[var(--blue-light)]/30 py-28">
      <div className="container-enterprise">
        <div className="max-w-2xl">
          <p className="eyebrow">Industry solutions &amp; AI agents</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Purpose-built for your industry, powered by AI
          </h2>
        </div>

        {/* Industry solutions */}
        <div className="mt-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--royal)]">
            Industry solutions
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((it) => (
              <div
                key={it.name}
                className="group rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:border-[var(--royal)]/30 hover:shadow-fluent-md"
              >
                <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-[var(--blue-light)]/60 text-[var(--royal)] transition-colors group-hover:bg-[var(--royal)] group-hover:text-white">
                  <it.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-[var(--navy-deep)]">{it.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--blue-gray)]">{it.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AI agents — dark tinted cards to differentiate */}
        <div className="mt-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--royal)]">
            AI agents
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {AI_AGENTS.map((a) => (
              <div
                key={a.name}
                className="group relative overflow-hidden rounded-2xl bg-[var(--navy-deep)] p-6 text-white"
              >
                <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-[var(--cyan-soft)] transition-colors group-hover:bg-[var(--cyan-soft)] group-hover:text-[var(--navy-deep)]">
                  <a.icon className="h-5 w-5" />
                </span>
                <div className="mt-5 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[var(--cyan-soft)]">
                  <Bot className="h-3 w-3" /> AI agent
                </div>
                <h3 className="mt-1.5 text-base font-semibold text-white">{a.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  WHY  ───────────────────────────── */
const WHY = [
  {
    icon: BadgeCheck,
    title: "Microsoft-focused retail specialists",
    body: "Trusted Microsoft retail solutions and deep Dynamics 365 Commerce expertise.",
  },
  {
    icon: ScanLine,
    title: "Proven retail accelerators",
    body: "Including Marketplace-listed RFID capabilities that shorten time-to-value.",
  },
  {
    icon: TrendingUp,
    title: "Success by Design delivery",
    body: "An approach focused on adoption, value realization and long-term success.",
  },
  {
    icon: ShieldCheck,
    title: "Integrated Quality Engineering",
    body: "Embedded throughout delivery so quality is built in, not bolted on.",
  },
  {
    icon: LifeBuoy,
    title: "Managed services for retail",
    body: "We continue to optimize, support and evolve your platform long after go-live.",
  },
];

function RetailWhy() {
  return (
    <section className="hero-dark relative overflow-hidden py-24 text-white">
      <div aria-hidden className="hero-orbs opacity-60" />
      <div aria-hidden className="hero-grid" />
      <div className="container-enterprise relative z-10">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--cyan-soft)]">
            Why Lumovy
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Why retailers choose Lumovy as their retail technology partner
          </h2>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w) => (
            <div
              key={w.title}
              className="group rounded-xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors hover:border-[var(--cyan-soft)]/40 hover:bg-white/[0.07]"
            >
              <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-[var(--cyan-soft)] transition-colors group-hover:bg-[var(--cyan-soft)] group-hover:text-[var(--navy-deep)]">
                <w.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold text-white">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{w.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  PROOF  ───────────────────────────── */
const PROOF_METRICS = [
  { v: "100 days", l: "D365 Commerce & F&O delivered" },
  { v: "< 2s", l: "AI product recognition at POS" },
  { v: "4 weeks", l: "Secure payment integration" },
  { v: "Real-time", l: "Centralized, procurement-driven replenishment" },
];

function RetailProof() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[var(--blue-light)]/40 py-24">
      <div aria-hidden className="mesh-blobs-light opacity-60" />
      <div className="container-enterprise relative">
        <div className="max-w-2xl">
          <p className="eyebrow">Proof</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Transformation delivered with measurable outcomes
          </h2>
        </div>
        {/* Reuses the homepage case-study + testimonial components with this page's content */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <CaseStudyCard
              sector="UAE Discount Grocery Retailer"
              title="Connected Omnichannel Commerce in 100 Days"
              challenge="One of the UAE's fastest-growing discount grocery retailers modernized operations with Dynamics 365 Commerce and Finance & Operations — a connected omnichannel solution across stores, procurement, warehouses and POS, including AI-powered checkout and real-time inventory built to support rapid growth."
              results={[
                ["100 days", "D365 Commerce & F&O live"],
                ["<2 sec", "AI product recognition at POS"],
                ["4 weeks", "Secure payment integration"],
              ]}
              cta="Talk to us about your outcomes"
            />
          </div>
          <QuoteCard
            q={{
              kind: "quote",
              quote:
                "Lumovy modernized our entire retail operation on Dynamics 365 and gave us a platform built to scale with our growth.",
              name: "Retail Operations Lead",
              role: "UAE Discount Grocery",
              outcome: "Centralized, procurement-driven replenishment",
            }}
          />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  PROCESS  ───────────────────────────── */
const STEPS = [
  { icon: Compass, title: "Discover", body: "Define business priorities and MVP outcomes." },
  { icon: PenTool, title: "Design", body: "Build the solution blueprint and implementation roadmap." },
  { icon: Settings2, title: "Configure", body: "Integrate and validate your POS, payments and inventory." },
  { icon: Rocket, title: "Launch", body: "Go live with user enablement and hypercare support." },
  { icon: TrendingUp, title: "Optimize", body: "Scale through continuous improvement and managed services." },
];

function RetailProcess() {
  return (
    <section className="relative overflow-hidden bg-[var(--blue-light)]/40 py-24">
      <div aria-hidden className="mesh-blobs-light opacity-50" />
      <div className="container-enterprise relative">
        <div className="max-w-2xl">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            From discovery to enterprise scale
          </h2>
        </div>
        <div className="relative mt-16">
          {/* Connecting line */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-[var(--royal)]/20 via-[var(--royal)]/40 to-[var(--cyan-soft)]/40 lg:block"
          />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
            {STEPS.map((s, i) => (
              <li key={s.title} className="relative">
                <div className="flex items-center gap-3 lg:block">
                  <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full border border-[var(--royal)]/20 bg-white text-[var(--royal)] shadow-fluent-sm">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <span className="mt-4 hidden text-[11px] font-bold uppercase tracking-widest text-[var(--royal)] lg:block">
                    Step {i + 1}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-[var(--navy-deep)] lg:mt-2">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--blue-gray)]">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  RELATED INSIGHTS  ───────────────────────────── */
const INSIGHTS = [
  {
    tag: "Guide",
    title: "The MVP-first path to Dynamics 365 Commerce",
    read: "6 min read",
  },
  {
    tag: "Case study",
    title: "How a UAE grocery leader went live in 100 days",
    read: "4 min read",
  },
  {
    tag: "Article",
    title: "Real-time inventory: from store-led to procurement-driven",
    read: "5 min read",
  },
];

function RetailInsights() {
  return (
    <section className="bg-white py-28">
      <div className="container-enterprise">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow">Related insights</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[var(--navy-deep)] sm:text-4xl">
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
            <a
              key={p.title}
              href="#"
              className="group flex flex-col rounded-2xl border border-border bg-white p-7 transition-all hover:-translate-y-1 hover:border-[var(--royal)]/30 hover:shadow-fluent-md"
            >
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-[var(--blue-light)]/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--royal)]">
                  {p.tag}
                </span>
                <span className="text-xs text-[var(--blue-gray)]">{p.read}</span>
              </div>
              <h3 className="mt-5 flex-1 text-lg font-semibold leading-snug text-[var(--navy-deep)]">
                {p.title}
              </h3>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--royal)]">
                Read more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  FAQ (reuses homepage FaqAccordion)  ───────────────────────────── */
const RETAIL_FAQS: [string, string][] = [
  [
    "How is the Transformation Suite different from a traditional implementation?",
    "The Suite is MVP-led: we deliver a focused, high-value foundation first, prove business outcomes quickly, and then scale — rather than attempting a single large, high-risk implementation. It comes with proven accelerators and a direct path into managed services, so value continues well beyond go-live.",
  ],
  [
    "Can we expand beyond the initial engagement?",
    "Yes. The Suite is designed to grow with you — from a Foundation MVP through Growth and Enterprise tiers, with extensions for multi-country expansion, advanced loyalty, legacy modernization, managed services and AI-powered retail innovation.",
  ],
  [
    "Which retail platforms, POS systems and payment providers can you integrate?",
    "We build on Microsoft Dynamics 365 Commerce and integrate modern POS, payment providers and inventory/RFID capabilities, including our Clarity RFID accelerator and secure retail payment solution integrations.",
  ],
  [
    "What managed services for retail are available after go-live?",
    "Ongoing optimization, proactive support, release management and platform evolution — keeping your retail systems supported, current and continuously improving as your business grows.",
  ],
  [
    "How do we get started with Lumovy as our retail technology partner?",
    "Book a Retail Readiness Call. In a focused discovery session we assess your current retail landscape, identify the highest-value opportunities and recommend the right transformation path — without obligation.",
  ],
];

function RetailFAQ() {
  return (
    <section className="border-b border-border bg-white py-24">
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

/* ─────────────────────────────  FINAL CTA (reuses homepage FinalCtaSection)  ───────────────────────────── */
function RetailFinalCTA() {
  return (
    <FinalCtaSection
      id="contact"
      title="Start with measurable outcomes. Scale with a retail technology partner you can trust"
      subtitle="Whether your priority is a modern POS system, a reliable payment solution, stronger inventory services, or a complete omnichannel solution, Lumovy helps you build the right Microsoft Dynamics 365 retail foundation — a practical, MVP-first engagement designed to accelerate business value."
      microcopy="In a focused discovery session, we'll assess your current retail landscape, identify the highest-value opportunities and recommend the right transformation path — without obligation."
      primary={{ label: "Book a Retail Readiness Call", href: "#contact", icon: true }}
      secondary={{ label: "Download the Transformation Suite Overview", href: "#suite" }}
    />
  );
}
