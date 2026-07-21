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
  ChevronDown,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
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

/* ─────────────────────────────  HERO (scroll-pinned reveal)  ───────────────────────────── */
const TRUST_STRIP = [
  "Microsoft Dynamics 365 Solutions Partner",
  "Trusted Retail Technology Partner",
  "Clarity RFID Accelerator",
  "Quality Engineering",
];

function RetailHero() {
  const pinRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0); // 0..1 across the pinned reveal

  // While the tall wrapper is pinned, translate scroll into a 0..1 value that
  // slides the glass panel + copy up over the full-bleed image. Once complete,
  // the page continues scrolling normally.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setProgress(1);
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const pin = pinRef.current;
      if (!pin) return;
      const scrollable = pin.offsetHeight - window.innerHeight;
      const scrolled = Math.min(scrollable, Math.max(0, -pin.getBoundingClientRect().top));
      setProgress(scrollable > 0 ? scrolled / scrollable : 1);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Copy rises and fades in over the first ~70% of the pinned scroll.
  const reveal = Math.min(1, progress / 0.7);
  const panelTranslate = (1 - reveal) * 22; // vh-ish translate for the panel
  const scrollHint = 1 - Math.min(1, progress / 0.12); // fades out as soon as you move

  return (
    <div ref={pinRef} className="relative h-[220vh]">
      <section className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Full-bleed image */}
        <img
          src={retailHero}
          alt="Connected omnichannel retail operations"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Ambient darkening so the bar text is always legible even before reveal */}
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-[var(--navy-deep)]/25 via-transparent to-[var(--navy-deep)]/30" />

        {/* Scroll hint — visible before the reveal begins */}
        <div
          className="pointer-events-none absolute inset-x-0 top-28 flex flex-col items-center gap-2 text-white/80 transition-opacity duration-300"
          style={{ opacity: scrollHint }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] backdrop-blur">
            <Store className="h-3.5 w-3.5" />
            Retail &amp; Commerce
          </span>
          <span className="mt-2 text-xs font-medium">Scroll to explore</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </div>

        {/* Glass-blur panel with copy — rises from the bottom on scroll */}
        <div
          className="absolute inset-x-0 bottom-0"
          style={{
            transform: `translateY(${panelTranslate}vh)`,
            opacity: reveal,
          }}
        >
          {/* Blur + gradient scrim */}
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)] via-[var(--navy-deep)]/85 to-transparent"
              style={{ backdropFilter: `blur(${reveal * 14}px)`, WebkitBackdropFilter: `blur(${reveal * 14}px)` }}
            />
            <div className="container-enterprise relative z-10 pb-14 pt-24">
              <div className="max-w-3xl" style={{ transform: `translateY(${(1 - reveal) * 16}px)` }}>
                <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
                  MVP-Led Microsoft Retail Solutions Built for Modern Commerce in{" "}
                  <span className="text-[var(--cyan-soft)]">90 Days</span>
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75">
                  An MVP-led engagement built on Microsoft retail solutions for multi-store and
                  omnichannel retailers. As your long-term retail technology partner, Lumovy helps you
                  establish a connected commerce foundation, improve inventory visibility, and deliver
                  managed services that extend value well beyond go-live.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
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
                {/* Trust strip */}
                <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-2.5 border-t border-white/10 pt-6">
                  {TRUST_STRIP.map((t) => (
                    <span key={t} className="inline-flex items-center gap-2 text-xs font-medium text-white/60">
                      <BadgeCheck className="h-4 w-4 text-[var(--cyan-soft)]" />
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─────────────────────────────  SECTION HEADER (shared)  ───────────────────────────── */
function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-[var(--blue-light)]/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--royal)]">
      {children}
    </span>
  );
}

/* ─────────────────────────────  PROBLEM  ───────────────────────────── */
const PROBLEMS = [
  {
    icon: Layers,
    title: "Fragmented commerce operations",
    body: "Disconnected stores, e-commerce, ERP, inventory and customer data create inconsistent experiences, slower decisions and higher operating costs — often the result of not having a dedicated retail technology partner.",
  },
  {
    icon: Boxes,
    title: "Limited inventory visibility",
    body: "Without real-time inventory accuracy, retailers struggle with stock discrepancies, inefficient fulfillment, lost sales opportunities and reduced customer confidence.",
  },
  {
    icon: LifeBuoy,
    title: "No support beyond go-live",
    body: "Many implementations end at launch. Retailers need managed services for retail that keep systems optimized, supported and evolving as the business grows.",
  },
];

function RetailProblem() {
  return (
    <section className="bg-white py-28">
      <div className="container-enterprise">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow>The challenge</SectionEyebrow>
          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-[var(--navy-deep)] sm:text-[2.6rem]">
            Retail complexity grows faster than most retailers can manage alone
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
          {PROBLEMS.map((p) => (
            <div
              key={p.title}
              className="group rounded-2xl bg-[var(--blue-light)]/25 p-7 transition-all hover:bg-white hover:shadow-fluent-md"
            >
              <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-white text-[var(--royal)] shadow-fluent-sm">
                <p.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-lg font-semibold text-[var(--navy-deep)]">{p.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--blue-gray)]">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  SUITE (split: details left, stat card right)  ───────────────────────────── */
const SUITE_INCLUDED = [
  "Dynamics 365 Commerce foundation",
  "Modern POS & back-office enablement",
  "Unified inventory & RFID readiness",
  "Pricing, promotions & loyalty",
  "Retail payment integration",
  "Omnichannel commerce enablement",
  "Store associate enablement",
  "Go-live support & knowledge transfer",
];
const SUITE_EXTENSIONS = [
  { icon: Compass, label: "Multi-country expansion" },
  { icon: Sparkles, label: "Advanced loyalty" },
  { icon: Workflow, label: "Legacy modernization" },
  { icon: LifeBuoy, label: "Managed services" },
  { icon: Cpu, label: "AI-powered innovation" },
];

function RetailSuite() {
  return (
    <section id="suite" className="border-y border-border bg-[var(--blue-light)]/30 py-28">
      <div className="container-enterprise grid items-center gap-16 lg:grid-cols-2">
        {/* Left: copy */}
        <div>
          <SectionEyebrow>The Transformation Suite</SectionEyebrow>
          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            One structured engagement, built to scale with you
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-[var(--blue-gray)]">
            The Retail &amp; Commerce Transformation Suite combines Microsoft retail solutions with
            Lumovy&apos;s proven delivery approach and implementation accelerators to establish a
            scalable commerce foundation — backed by ongoing managed services that reduce delivery
            risk and accelerate business outcomes.
          </p>
          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--royal)]">
              Available extensions
            </p>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {SUITE_EXTENSIONS.map((e) => (
                <li
                  key={e.label}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3.5 py-2 text-xs font-medium text-[var(--navy-deep)]"
                >
                  <e.icon className="h-3.5 w-3.5 text-[var(--royal)]" />
                  {e.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: "what's included" stat-style card */}
        <div className="rounded-2xl border border-border bg-white p-8 shadow-fluent-md">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-[var(--navy-deep)]">What&apos;s included</h3>
            <span className="rounded-full bg-[var(--cyan-soft)]/15 px-3 py-1 text-xs font-semibold text-[var(--royal)]">
              MVP scope
            </span>
          </div>
          <ul className="mt-6 grid gap-x-6 gap-y-3.5 sm:grid-cols-2">
            {SUITE_INCLUDED.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--royal)]/10 text-[var(--royal)]">
                  <Check className="h-3 w-3" />
                </span>
                <span className="text-sm leading-snug text-[var(--navy-deep)]">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-7 flex items-center gap-3 rounded-xl bg-[var(--blue-light)]/40 p-4">
            <Rocket className="h-5 w-5 shrink-0 text-[var(--royal)]" />
            <p className="text-xs leading-relaxed text-[var(--blue-gray)]">
              Every engagement includes a direct path into managed services for retail — value that
              continues long after go-live.
            </p>
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
    body: "Scale transformation across regions, brands and complex retail ecosystems with dedicated governance and managed services.",
    featured: false,
  },
];

function RetailTiers() {
  return (
    <section className="bg-white py-28">
      <div className="container-enterprise">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Engagement tiers</SectionEyebrow>
          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Three ways to begin working with us
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl items-stretch gap-6 md:grid-cols-3">
          {TIERS.map((t, i) => (
            <div
              key={t.name}
              className={
                "relative flex flex-col rounded-2xl p-8 transition-all hover:-translate-y-1.5 " +
                (t.featured
                  ? "bg-[var(--navy-deep)] text-white shadow-fluent-lg ring-1 ring-[var(--royal)]/40"
                  : "border border-border bg-white text-[var(--navy-deep)] hover:shadow-fluent-md")
              }
            >
              {t.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--cyan-soft)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--navy-deep)]">
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
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">{t.name}</h3>
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
                  "mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all " +
                  (t.featured
                    ? "bg-white text-[var(--navy-deep)] hover:bg-white/90"
                    : "border border-border text-[var(--royal)] hover:border-[var(--royal)]/40 hover:bg-[var(--blue-light)]/40")
                }
              >
                Explore this tier
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-8 flex max-w-5xl flex-col items-center justify-between gap-5 rounded-2xl bg-[var(--blue-light)]/40 p-7 text-center sm:flex-row sm:text-left">
          <p className="text-[15px] font-medium text-[var(--navy-deep)]">
            Not sure where to begin? We&apos;ll recommend the right starting point for your business.
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

/* ─────────────────────────────  WHY (dark)  ───────────────────────────── */
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
    <section className="hero-dark relative overflow-hidden py-28 text-white">
      <div aria-hidden className="hero-orbs opacity-50" />
      <div aria-hidden className="hero-grid" />
      <div className="container-enterprise relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--cyan-soft)]">
            Why Lumovy
          </span>
          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            Why retailers choose Lumovy as their partner
          </h2>
        </div>
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w) => (
            <div
              key={w.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-colors hover:border-[var(--cyan-soft)]/40 hover:bg-white/[0.07]"
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

/* ─────────────────────────────  PROOF (split: details left, SaaS stat card right)  ───────────────────────────── */
const PROOF_METRICS = [
  { v: "100", unit: "days", l: "D365 Commerce & F&O delivered", up: null },
  { v: "<2", unit: "sec", l: "AI product recognition at POS", up: null },
  { v: "4", unit: "wks", l: "Secure payment integration", up: null },
  { v: "Real", unit: "-time", l: "Centralized replenishment", up: null },
];

function RetailProof() {
  return (
    <section className="bg-white py-28">
      <div className="container-enterprise grid items-center gap-16 lg:grid-cols-[1fr_1.05fr]">
        {/* Left: story */}
        <div>
          <SectionEyebrow>Proof</SectionEyebrow>
          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Transformation delivered with measurable outcomes
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-[var(--blue-gray)]">
            One of the UAE&apos;s fastest-growing discount grocery retailers partnered with Lumovy to
            modernize retail operations using Microsoft Dynamics 365 Commerce and Finance &amp;
            Operations. The engagement delivered a connected omnichannel solution across stores,
            procurement, warehouses and POS — including AI-powered checkout and a real-time approach
            to inventory built to support rapid growth.
          </p>
          <ul className="mt-7 space-y-3">
            {[
              "Moved from store-led ordering to centralized, procurement-driven replenishment",
              "Established a scalable retail platform built for continued growth",
            ].map((li) => (
              <li key={li} className="flex items-start gap-2.5 text-sm text-[var(--navy-deep)]">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--royal)]/10 text-[var(--royal)]">
                  <Check className="h-3 w-3" />
                </span>
                {li}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: SaaS-style performance card */}
        <div className="rounded-2xl border border-border bg-white p-7 shadow-fluent-md sm:p-8">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-[var(--navy-deep)]">Engagement outcomes</h3>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--cyan-soft)]/15 px-3 py-1 text-xs font-semibold text-[var(--royal)]">
              <TrendingUp className="h-3.5 w-3.5" />
              UAE grocery
            </span>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {PROOF_METRICS.map((m) => (
              <div key={m.l} className="rounded-xl bg-[var(--blue-light)]/40 p-5">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold tracking-tight text-[var(--navy-deep)]">{m.v}</span>
                  <span className="text-base font-semibold text-[var(--blue-gray)]">{m.unit}</span>
                </div>
                <div className="mt-2 text-xs leading-relaxed text-[var(--blue-gray)]">{m.l}</div>
              </div>
            ))}
          </div>
          {/* Mini timeline bar */}
          <div className="mt-6 rounded-xl border border-border p-4">
            <div className="flex items-center justify-between text-[11px] font-medium text-[var(--blue-gray)]">
              <span>Discovery</span>
              <span>Go-live</span>
              <span>Scale</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-[var(--blue-light)]/70">
              <div className="h-full w-full rounded-full bg-gradient-to-r from-[var(--royal)] to-[var(--cyan-soft)]" />
            </div>
            <p className="mt-3 flex items-center gap-2 text-xs text-[var(--navy-deep)]">
              <CreditCard className="h-4 w-4 text-[var(--royal)]" />
              Secure payment integration completed in just 4 weeks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  PROCESS  ───────────────────────────── */
const STEPS = [
  { icon: Compass, title: "Discover", body: "Define business priorities and MVP outcomes." },
  { icon: PenTool, title: "Design", body: "Build the solution blueprint and roadmap." },
  { icon: Settings2, title: "Configure", body: "Integrate and validate POS, payments and inventory." },
  { icon: Rocket, title: "Launch", body: "Go live with user enablement and hypercare." },
  { icon: TrendingUp, title: "Optimize", body: "Scale through continuous improvement." },
];

function RetailProcess() {
  return (
    <section className="border-y border-border bg-[var(--blue-light)]/30 py-28">
      <div className="container-enterprise">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>How it works</SectionEyebrow>
          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            From discovery to enterprise scale
          </h2>
        </div>
        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-[var(--royal)]/20 via-[var(--royal)]/40 to-[var(--cyan-soft)]/50 lg:block"
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
                <h3 className="mt-3 text-lg font-semibold text-[var(--navy-deep)] lg:mt-2">{s.title}</h3>
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
    <section className="bg-white py-28">
      <div className="container-enterprise grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <SectionEyebrow>FAQ</SectionEyebrow>
          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Answers for retail leaders
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-[var(--blue-gray)]">
            Still have questions about how the Transformation Suite fits your business? Book a call
            and we&apos;ll walk you through it.
          </p>
        </div>
        <div>
          <ul className="space-y-3">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <li
                  key={f.q}
                  className={
                    "rounded-2xl border px-6 transition-colors " +
                    (isOpen ? "border-[var(--royal)]/25 bg-[var(--blue-light)]/25" : "border-border bg-white")
                  }
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold text-[var(--navy-deep)]">{f.q}</span>
                    <span
                      className={
                        "grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-colors " +
                        (isOpen ? "border-[var(--royal)] bg-[var(--royal)] text-white" : "border-border text-[var(--royal)]")
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
                      <p className="pr-8 text-sm leading-relaxed text-[var(--blue-gray)]">{f.a}</p>
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
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--cyan-soft)]">Ready when you are</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Start with measurable outcomes. Scale with a partner you can trust
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70">
          Whether your priority is a modern POS system, a reliable payment solution, stronger
          inventory services, or a complete omnichannel solution, Lumovy helps you build the right
          Microsoft Dynamics 365 retail foundation — a practical, MVP-first engagement designed to
          accelerate business value.
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
