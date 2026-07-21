import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
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
} from "lucide-react";
import { useState } from "react";
import { Nav, Footer } from "./index";
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
      <RetailProblem />
      <RetailSuite />
      <RetailTiers />
      <RetailWhy />
      <RetailProof />
      <RetailProcess />
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
    <section className="border-b border-border bg-white py-24">
      <div className="container-enterprise">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow">Proof</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
              Transformation delivered with measurable outcomes
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[var(--blue-gray)]">
              One of the UAE&apos;s fastest-growing discount grocery retailers partnered with Lumovy
              to modernize its retail operations using Microsoft Dynamics 365 Commerce and Finance
              &amp; Operations. The engagement delivered a connected omnichannel solution across
              stores, procurement, warehouses and POS — including AI-powered checkout and a
              streamlined, real-time approach to inventory built to support rapid growth.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--royal)]"
            >
              Talk to us about your retail outcomes
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {PROOF_METRICS.map((m) => (
              <div
                key={m.l}
                className="rounded-xl border border-border bg-[var(--blue-light)]/40 p-6"
              >
                <div className="text-2xl font-bold tracking-tight text-[var(--royal)] sm:text-3xl">
                  {m.v}
                </div>
                <div className="mt-2 text-xs leading-relaxed text-[var(--blue-gray)]">{m.l}</div>
              </div>
            ))}
            <div className="col-span-2 flex items-center gap-3 rounded-xl border border-[var(--royal)]/15 bg-white p-5">
              <CreditCard className="h-5 w-5 shrink-0 text-[var(--royal)]" />
              <p className="text-sm text-[var(--navy-deep)]">
                Established a scalable retail technology platform built to support continued business
                growth.
              </p>
            </div>
          </div>
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

/* ─────────────────────────────  FAQ  ───────────────────────────── */
const FAQS = [
  {
    q: "How is the Transformation Suite different from a traditional implementation?",
    a: "The Suite is MVP-led: we deliver a focused, high-value foundation first, prove business outcomes quickly, and then scale — rather than attempting a single large, high-risk implementation. It comes with proven accelerators and a direct path into managed services, so value continues well beyond go-live.",
  },
  {
    q: "Can we expand beyond the initial engagement?",
    a: "Yes. The Suite is designed to grow with you — from a Foundation MVP through Growth and Enterprise tiers, with extensions for multi-country expansion, advanced loyalty, legacy modernization, managed services and AI-powered retail innovation.",
  },
  {
    q: "Which retail platforms, POS systems and payment providers can you integrate?",
    a: "We build on Microsoft Dynamics 365 Commerce and integrate modern POS, payment providers and inventory/RFID capabilities, including our Clarity RFID accelerator and secure retail payment solution integrations.",
  },
  {
    q: "What managed services for retail are available after go-live?",
    a: "Ongoing optimization, proactive support, release management and platform evolution — keeping your retail systems supported, current and continuously improving as your business grows.",
  },
  {
    q: "How do we get started with Lumovy as our retail technology partner?",
    a: "Book a Retail Readiness Call. In a focused discovery session we assess your current retail landscape, identify the highest-value opportunities and recommend the right transformation path — without obligation.",
  },
];

function RetailFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="border-b border-border bg-white py-24">
      <div className="container-enterprise grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Answers for retail leaders
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-[var(--blue-gray)]">
            Still have questions about how the Transformation Suite fits your business? Book a call
            and we&apos;ll walk you through it.
          </p>
        </div>
        <div>
          <ul className="divide-y divide-border">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold text-[var(--navy-deep)]">{f.q}</span>
                    <span
                      className={
                        "grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-colors " +
                        (isOpen
                          ? "border-[var(--royal)] bg-[var(--royal)] text-white"
                          : "border-border text-[var(--royal)]")
                      }
                    >
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <div
                    className={
                      "grid transition-all duration-300 ease-out " +
                      (isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0")
                    }
                  >
                    <div className="overflow-hidden">
                      <p className="pr-10 text-sm leading-relaxed text-[var(--blue-gray)]">{f.a}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  FINAL CTA  ───────────────────────────── */
function RetailFinalCTA() {
  return (
    <section id="contact" className="hero-dark relative overflow-hidden py-28 text-white">
      <div aria-hidden className="hero-beam" />
      <div aria-hidden className="hero-orbs" />
      <div aria-hidden className="hero-grid" />
      <div aria-hidden className="hero-grain" />
      <div className="container-enterprise relative z-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--cyan-soft)]">
          Ready when you are
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Start with measurable outcomes. Scale with a retail technology partner you can trust
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70">
          Whether your priority is a modern POS system, a reliable payment solution, stronger
          inventory services, or a complete omnichannel solution, Lumovy helps you build the right
          Microsoft Dynamics 365 retail foundation — a practical, MVP-first engagement designed to
          accelerate business value and support long-term transformation.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--navy-deep)] transition-all hover:-translate-y-0.5 hover:shadow-xl"
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
            Download the Transformation Suite Overview
          </a>
        </div>
        <p className="mx-auto mt-6 max-w-xl text-xs text-white/50">
          In a focused discovery session, we&apos;ll assess your current retail landscape, identify
          the highest-value opportunities and recommend the right transformation path — without
          obligation.
        </p>
      </div>
    </section>
  );
}
