import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  PlayCircle,
  Search,
  Smartphone,
  ShoppingBag,
  ShieldCheck,
  Palette,
  Package,
  CreditCard,
  Store,
  Heart,
  LayoutTemplate,
  Blocks,
  Clock,
  TrendingDown,
  Gauge,
  Rocket,
  Home,
  Grid3x3,
  User,
  Check,
} from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Nav, Footer, CaseStudyCard, FaqAccordion, FinalCtaSection } from "./index";
import d365Logo from "@/assets/Dynamics365.webp";
import testimonialImg from "@/assets/testimonial.webp";
import cavendersCaseImg from "@/assets/case-studies/cavenders.jpg";
import mafCaseImg from "@/assets/case-studies/majid-al-futtaim.jpg";
import mattressFirmCaseImg from "@/assets/case-studies/mattress-firm.jpg";
import mobileScreenImg from "@/assets/mobile screen.png";
import mafLogo from "@/assets/logos/majid-al-futtaim.png";
import cavendersLogo from "@/assets/logos/cavenders.png";
import mattressFirmLogo from "@/assets/logos/mattress-firm.png";

export const Route = createFileRoute("/products/consumer-swift-commerce")({
  component: SwiftCommercePage,
  head: () => ({
    meta: [
      { title: "Consumer Swift Commerce App | Lumovy" },
      {
        name: "description",
        content:
          "Launch a fully branded iOS and Android shopping app for Microsoft Dynamics 365 Commerce in weeks. A production-ready accelerator, not custom development.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
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

function SwiftCommercePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <SwiftHero />
      <SwiftTrust />
      <SwiftProblem />
      <SwiftIntegrates />
      <SwiftCapabilities />
      <SwiftProof />
      <SwiftLaunch />
      <SwiftCaseStudies />
      <SwiftFAQ />
      <SwiftCTA />
      <Footer />
    </div>
  );
}

/* ─────────────────────────────  Reusable on-brand phone mockup  ───────────────────────────── */
function PhoneMockup({ className = "" }: { className?: string }) {
  const products = [
    { name: "Alpine Runner", price: "$129", tone: "from-[#2b7fff] to-[#02d1ff]" },
    { name: "Trail Jacket", price: "$189", tone: "from-[#0041a9] to-[#2b7fff]" },
    { name: "Summit Pack", price: "$95", tone: "from-[#02d1ff] to-[#2b7fff]" },
    { name: "Core Tee", price: "$39", tone: "from-[#2b7fff] to-[#0041a9]" },
  ];
  return (
    <div className={"relative mx-auto w-[270px] " + className}>
      {/* Device frame */}
      <div className="relative rounded-[2.6rem] border border-white/15 bg-[#0a1830] p-2.5 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]">
        {/* Notch */}
        <div className="absolute left-1/2 top-2.5 z-20 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-[#0a1830]" />
        <div className="relative overflow-hidden rounded-[2.1rem] bg-white">
          {/* Status bar */}
          <div className="flex items-center justify-between px-5 pt-3.5 text-[9px] font-semibold text-[var(--navy-deep)]">
            <span>9:41</span>
            <span className="flex items-center gap-1">
              <span className="h-2 w-3 rounded-[2px] border border-[var(--navy-deep)]/50" />
            </span>
          </div>
          {/* App header */}
          <div className="px-5 pt-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[9px] text-[var(--blue-gray)]">Good morning</div>
                <div className="text-sm font-bold text-[var(--navy-deep)]">Discover</div>
              </div>
              <div className="grid h-8 w-8 place-items-center rounded-full bg-[var(--blue-light)]">
                <ShoppingBag className="h-3.5 w-3.5 text-[var(--royal)]" />
              </div>
            </div>
            {/* Search */}
            <div className="mt-3 flex items-center gap-2 rounded-xl bg-[var(--blue-light)]/70 px-3 py-2">
              <Search className="h-3 w-3 text-[var(--blue-gray)]" />
              <span className="text-[9px] text-[var(--blue-gray)]">Search products</span>
            </div>
          </div>
          {/* Hero promo card */}
          <div className="mx-5 mt-3 overflow-hidden rounded-xl bg-gradient-to-br from-[var(--royal)] to-[var(--azure)] p-3.5">
            <div className="text-[8px] font-semibold uppercase tracking-wider text-[var(--cyan-soft)]">New season</div>
            <div className="mt-1 text-xs font-bold leading-tight text-white">Up to 30% off<br />outdoor gear</div>
            <div className="mt-2 inline-flex rounded-full bg-white px-2.5 py-1 text-[8px] font-semibold text-[var(--royal)]">Shop now</div>
          </div>
          {/* Product grid */}
          <div className="grid grid-cols-2 gap-2.5 px-5 pt-3">
            {products.map((p) => (
              <div key={p.name} className="overflow-hidden rounded-xl border border-border">
                <div className={"aspect-[4/3] w-full bg-gradient-to-br " + p.tone} />
                <div className="p-2">
                  <div className="truncate text-[9px] font-semibold text-[var(--navy-deep)]">{p.name}</div>
                  <div className="mt-0.5 flex items-center justify-between">
                    <span className="text-[9px] font-bold text-[var(--royal)]">{p.price}</span>
                    <Heart className="h-2.5 w-2.5 text-[var(--blue-gray)]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Bottom tab bar */}
          <div className="mt-4 flex items-center justify-around border-t border-border px-6 py-3">
            <Home className="h-4 w-4 text-[var(--royal)]" />
            <Grid3x3 className="h-4 w-4 text-[var(--blue-gray)]" />
            <ShoppingBag className="h-4 w-4 text-[var(--blue-gray)]" />
            <User className="h-4 w-4 text-[var(--blue-gray)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────  1. HERO (solid corporate blue + gradient blobs + phone)  ───────────────────────────── */
function SwiftHero() {
  return (
    <section className="relative overflow-hidden bg-[#003594]">
      <div aria-hidden className="hero-grid" />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[6%] -top-[20rem] h-[42rem] w-[42rem] rounded-full blur-[40px]"
        style={{ background: "radial-gradient(circle, color-mix(in oklch, var(--azure) 55%, #003594) 0%, color-mix(in oklch, var(--azure) 40%, #003594) 60%, transparent 72%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[14rem] top-[6rem] h-[40rem] w-[40rem] rounded-full blur-[40px]"
        style={{ background: "radial-gradient(circle, color-mix(in oklch, var(--azure) 48%, #003594) 0%, color-mix(in oklch, var(--azure) 34%, #003594) 58%, transparent 70%)" }}
      />
      <div className="container-enterprise relative z-10 py-24 lg:py-28">
        {/* Copy */}
        <div className="max-w-3xl">
          <span className="hero-content-in text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--cyan-soft)]">
            Consumer Swift Commerce App
          </span>
          <h1 className="hero-content-in mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]" style={{ animationDelay: "80ms" }}>
            Launch Enterprise Mobile Commerce in Weeks
          </h1>
          <p className="hero-content-in mt-6 max-w-xl text-base leading-relaxed text-white/70" style={{ animationDelay: "160ms" }}>
            Launch a fully branded iOS and Android shopping app for Microsoft Dynamics 365 Commerce
            without the cost, complexity, or timeline of custom development.
          </p>
          <div className="hero-content-in mt-9 flex flex-wrap gap-3" style={{ animationDelay: "240ms" }}>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--navy-deep)] transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30"
            >
              <PlayCircle className="h-4 w-4" />
              See the Accelerator Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Talk to a Commerce Expert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  2. TRUST ANCHOR  ───────────────────────────── */
const HIGHLIGHTS = [
  { icon: Smartphone, label: "Native iOS & Android" },
  { icon: Blocks, label: "Dynamics 365 Commerce Ready" },
  { icon: ShieldCheck, label: "Enterprise-grade Security" },
  { icon: Palette, label: "Highly Brandable" },
];

function SwiftTrust() {
  return (
    <section className="bg-white py-28">
      <div className="container-enterprise">
        <div className="mx-auto max-w-2xl text-center">
          <img src={d365Logo} alt="Microsoft Dynamics 365 Commerce" className="mx-auto h-10 w-auto object-contain" />
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Built for Microsoft Dynamics 365 Commerce
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[var(--blue-gray)]">
            Purpose-built to extend Dynamics 365 Commerce using Microsoft&apos;s headless
            architecture, delivering enterprise-grade mobile experiences with minimal implementation
            effort.
          </p>
        </div>
        <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((h, i) => (
            <Reveal key={h.label} delay={i * 80}>
              <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-white px-5 py-7 text-center transition-all hover:-translate-y-1 hover:shadow-fluent-md">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--blue-light)] text-[var(--royal)]">
                  <h.icon className="h-6 w-6" />
                </span>
                <span className="text-sm font-semibold text-[var(--navy-deep)]">{h.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  3. THE PROBLEM  ───────────────────────────── */
const IMPACTS = [
  "Accelerate time-to-market",
  "Reduce development costs",
  "Extend existing Commerce capabilities",
  "Deliver seamless omnichannel experiences",
];

function SwiftProblem() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-[var(--blue-light)]/40 py-28">
      <div aria-hidden className="mesh-blobs-light opacity-60" />
      <div className="container-enterprise relative grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow">The problem</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Your customers are mobile. Is your commerce platform?
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-[var(--blue-gray)]">
            Customers expect fast, native shopping experiences. Yet many retailers still rely on
            mobile websites because building a custom app is expensive, time-consuming, and difficult
            to maintain.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-[var(--blue-gray)]">
            Consumer Swift Commerce App removes that barrier with a production-ready accelerator that
            helps retailers launch mobile commerce faster while maximizing their Dynamics 365
            investment.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {IMPACTS.map((b) => (
              <li key={b} className="flex items-start gap-2.5 rounded-xl border border-[var(--royal)]/10 bg-white px-4 py-3.5 text-sm font-medium text-[var(--navy-deep)]">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--royal)]" />
                {b}
              </li>
            ))}
          </ul>
        </div>
        <Reveal delay={80} className="flex justify-center">
          <div className="animate-float-slow">
            <PhoneMockup />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────  4. CORE CAPABILITIES (auto-cycling, suite-style)  ───────────────────────────── */
const CAPABILITIES = [
  { icon: Search, name: "Product Discovery", body: "Help customers find products faster with rich search, filtering and merchandised browsing." },
  { icon: Smartphone, name: "Native Shopping", body: "Deliver intuitive, fast mobile experiences that feel built for the device, not bolted on." },
  { icon: CreditCard, name: "Secure Checkout", body: "Increase conversion with frictionless, tokenized purchasing and saved payment methods." },
  { icon: Store, name: "Omnichannel Fulfilment", body: "Connect digital and in-store shopping with click-and-collect and real-time availability." },
  { icon: Heart, name: "Loyalty & Engagement", body: "Drive repeat purchases and retention with points, offers and personalized engagement." },
  { icon: ShieldCheck, name: "Enterprise Security", body: "Protect customer data with Microsoft security and Azure AD B2C authentication." },
  { icon: LayoutTemplate, name: "Content Management", body: "Update promotions, banners and content without shipping a new app release." },
  { icon: Blocks, name: "Scalable Architecture", body: "Built on Microsoft's headless architecture for enterprise growth and high traffic." },
];
const CAP_INTERVAL = 4500; // ms per item

function SwiftCapabilities() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const { ref, shown } = useReveal<HTMLDivElement>();

  // Auto-advance through the capabilities once the section is in view.
  useEffect(() => {
    if (!shown || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => setActive((a) => (a + 1) % CAPABILITIES.length), CAP_INTERVAL);
    return () => clearTimeout(id);
  }, [active, shown, paused]);

  return (
    <section className="relative overflow-hidden bg-white py-28">
      <div ref={ref} className="container-enterprise grid items-start gap-14 lg:grid-cols-2 lg:gap-16">
        {/* Left: copy + auto-cycling capability list */}
        <div>
          <p className="eyebrow">Core capabilities</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Everything a native shopping app needs, out of the box
          </h2>

          <div className="mt-8">
            {CAPABILITIES.map((item, i) => {
              const isActive = active === i;
              return (
                <button
                  key={item.name}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => { setPaused(true); setActive(i); }}
                  onMouseLeave={() => setPaused(false)}
                  className="block w-full py-4 text-left"
                >
                  <span className={"flex items-center gap-3 text-base transition-colors duration-300 " + (isActive ? "font-semibold text-[var(--royal)]" : "font-normal text-[var(--navy-deep)]")}>
                    <item.icon className={"h-5 w-5 shrink-0 transition-colors duration-300 " + (isActive ? "text-[var(--royal)]" : "text-[var(--blue-gray)]")} />
                    {item.name}
                  </span>
                  {/* Description expands in when the item is active (hovered or auto-cycled) */}
                  <span
                    className="grid overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{ gridTemplateRows: isActive ? "1fr" : "0fr", opacity: isActive ? 1 : 0 }}
                  >
                    <span className="min-h-0 overflow-hidden">
                      <span className="mt-2 block pl-8 text-sm leading-relaxed text-[var(--blue-gray)]">
                        {item.body}
                      </span>
                    </span>
                  </span>
                  {/* Single line — grey track that fills blue over the interval when active */}
                  <span className="mt-3 block h-px w-full overflow-hidden bg-[var(--royal)]/12">
                    <span
                      key={`${i}-${active}-${paused}`}
                      className={"block h-full bg-[var(--royal)] " + (isActive && !paused ? "cap-progress" : "")}
                      style={{ width: isActive && paused ? "100%" : isActive ? undefined : "0%" }}
                    />
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: mobile app screenshot.
            Top offset on lg aligns with the H2 (past the eyebrow). */}
        <div className="lg:sticky lg:top-24 lg:mt-[2.1rem]">
          <div className="flex justify-center">
            <img
              src={mobileScreenImg}
              alt="Consumer Swift Commerce mobile shopping app"
              className="animate-float-slow w-[300px] max-w-full drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  5. HOW IT INTEGRATES (architecture)  ───────────────────────────── */
const ARCH_LAYERS = [
  { icon: Smartphone, title: "Consumer Swift Commerce App", sub: "Native iOS & Android storefront", accent: true },
  { icon: Blocks, title: "Commerce Scale Unit", sub: "OData APIs · entity sets & actions", accent: false },
  { icon: Gauge, title: "CDS Sync Jobs", sub: "Channel ↔ HQ data synchronization", accent: false },
  { icon: Package, title: "Dynamics 365 Commerce & Finance", sub: "Pricing · inventory · promotions · loyalty · orders", accent: false },
];

function SwiftIntegrates() {
  return (
    <section className="hero-dark relative overflow-hidden py-28 text-white">
      <div aria-hidden className="hero-orbs opacity-50" />
      <div aria-hidden className="hero-grid" />
      <div className="container-enterprise relative z-10 grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--cyan-soft)]">
            <Blocks className="h-3.5 w-3.5" /> How it integrates
          </span>
          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            Built on your existing commerce platform
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/70">
            Consumer Swift Commerce App connects directly with Microsoft Dynamics 365 Commerce to
            leverage existing pricing, inventory, promotions, loyalty, and order management without
            introducing duplicate business logic or custom integrations.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {["No duplicate business logic", "Standard Commerce APIs", "Real-time inventory", "Unified orders"].map((t) => (
              <li key={t} className="rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm">
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture stack diagram */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-7 backdrop-blur-sm">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[var(--cyan-soft)]">Architecture</p>
          <div className="mt-6 flex flex-col gap-3">
            {ARCH_LAYERS.map((b, i) => (
              <div key={b.title}>
                <div
                  className={
                    "flex items-center gap-3 rounded-xl px-5 py-4 " +
                    (b.accent
                      ? "bg-[var(--royal)] ring-1 ring-[var(--cyan-soft)]/40"
                      : "border border-white/12 bg-white/[0.03]")
                  }
                >
                  <span className={"grid h-10 w-10 shrink-0 place-items-center rounded-lg " + (b.accent ? "bg-white/15 text-[var(--cyan-soft)]" : "bg-white/8 text-white/80")}>
                    <b.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-white">{b.title}</div>
                    <div className="text-xs text-white/55">{b.sub}</div>
                  </div>
                </div>
                {i < ARCH_LAYERS.length - 1 && (
                  <div className="flex justify-center py-1.5">
                    <span className="h-4 w-px bg-[var(--cyan-soft)]/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  6. TIME TO LAUNCH  ───────────────────────────── */
const LAUNCH_BENEFITS = [
  { icon: Rocket, title: "Faster implementation", body: "A production-ready accelerator replaces months of custom development." },
  { icon: ShieldCheck, title: "Lower delivery risk", body: "Proven foundation reduces project risk from day one." },
  { icon: TrendingDown, title: "Reduced development effort", body: "Significantly less build effort than a bespoke app." },
  { icon: Clock, title: "Faster ROI", body: "Get to value in weeks, not quarters." },
];

function SwiftLaunch() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-[var(--blue-light)]/40 py-28">
      <div aria-hidden className="mesh-blobs-light opacity-60" />
      <div className="container-enterprise relative">
        <div className="max-w-2xl">
          <p className="eyebrow">Time to launch</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Faster deployment. Faster value.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[var(--blue-gray)]">
            Replace months of custom development with a production-ready accelerator that
            significantly reduces implementation effort and project risk.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {LAUNCH_BENEFITS.map((b, i) => (
            <Reveal key={b.title} delay={i * 80}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-fluent-md">
                <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-[var(--blue-light)] text-[var(--royal)]">
                  <b.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-[var(--navy-deep)]">{b.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--blue-gray)]">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  7. PROOF KIT  ───────────────────────────── */
function SwiftProof() {
  return (
    <section className="bg-white py-28">
      <div className="container-enterprise">
        <div className="max-w-2xl">
          <p className="eyebrow">Proof kit</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Built to deliver results
          </h2>
        </div>
        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[1.35fr_1fr]">
          <div className="flex min-h-[440px] flex-col justify-between rounded-xl border border-border bg-white p-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--royal)]">
                Retail Enterprise
              </span>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--navy-deep)]">
                Native Mobile Commerce, Without a Custom Build
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[var(--blue-gray)]">
                A retail enterprise launched a native mobile commerce app on top of its existing
                Dynamics 365 Commerce investment using Consumer Swift Commerce, skipping a custom
                app build while keeping catalog, pricing, and orders in sync with the core platform.
              </p>
            </div>
            <div>
              <div className="grid grid-cols-3 gap-3 border-t border-border pt-6">
                {[
                  ["Faster", "Deployment"],
                  ["Lower", "Implementation effort"],
                  ["Higher", "Mobile engagement"],
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
                Talk to us about your launch
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          {/* Testimonial: photo + colorless glass-blur scrim + white text */}
          <figure className="relative overflow-hidden rounded-xl">
            <img src={testimonialImg} alt="Commerce transformation leader" className="absolute inset-0 h-full w-full object-cover object-top" />
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/45 to-transparent" />
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 backdrop-blur-[3px] [mask-image:linear-gradient(to_top,black_35%,transparent)]" />
            <figcaption className="relative z-10 flex h-full min-h-[440px] flex-col justify-end p-8">
              <div className="text-3xl font-bold tracking-tight text-white">Weeks</div>
              <div className="mt-1 text-sm text-white/80">From kickoff to mobile go-live</div>
              <blockquote className="mt-4 text-sm leading-relaxed text-white/90">
                &ldquo;Consumer Swift Commerce App enabled us to launch mobile commerce significantly
                faster while maximizing our Dynamics 365 investment.&rdquo;
              </blockquote>
              <div className="mt-4 border-t border-white/20 pt-3">
                <div className="text-sm font-semibold text-white">Head of Digital Commerce</div>
                <div className="text-xs text-white/70">Retail Enterprise</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  7b. RELATED CASE STUDIES (3-card grid, sitewide pattern)  ───────────────────────────── */
function SwiftCaseStudies() {
  const cases = [
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
  return (
    <section className="relative overflow-hidden bg-white py-28">
      <div className="container-enterprise relative">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow">Case studies</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
              Proven across every channel
            </h2>
          </div>
          <a href="/insights/case-studies" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--royal)]">
            View more
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <CaseStudyCard {...c} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  8. FAQ  ───────────────────────────── */
const FAQS = [
  {
    q: "Is it a custom application?",
    a: "No. It's a configurable accelerator built specifically for Dynamics 365 Commerce.",
  },
  {
    q: "Can it be customized?",
    a: "Yes. Branding, user experience and business capabilities can be extended.",
  },
  {
    q: "Does it support omnichannel commerce?",
    a: "Yes. Including click-and-collect, loyalty, promotions and real-time inventory.",
  },
  {
    q: "Which Dynamics versions are supported?",
    a: "Microsoft Dynamics 365 Commerce using standard Commerce APIs.",
  },
];

function SwiftFAQ() {
  return (
    <section className="border-y border-border bg-[var(--blue-light)]/30 py-28">
      <div className="container-enterprise">
        <FaqAccordion
          title="Frequently asked questions"
          intro="Customization, omnichannel and supported versions: the questions commerce leaders ask."
          items={FAQS.map((f) => [f.q, f.a] as [string, string])}
        />
      </div>
    </section>
  );
}

/* ─────────────────────────────  9. CTA (reuses homepage FinalCtaSection)  ───────────────────────────── */
function SwiftCTA() {
  return (
    <FinalCtaSection
      id="contact"
      title="Launch Mobile Commerce Faster"
      subtitle="Deliver the native shopping experience customers expect without the complexity of building it yourself."
      primary={{ label: "See the Accelerator Demo", href: "#contact" }}
      secondary={{ label: "Talk to a Commerce Expert", href: "#contact" }}
    />
  );
}
