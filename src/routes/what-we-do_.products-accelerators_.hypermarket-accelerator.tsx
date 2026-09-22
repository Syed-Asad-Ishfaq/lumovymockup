import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Calendar,
  PhoneCall,
  Boxes,
  TrendingUp,
  Eye,
  Tag,
  Truck,
  Store,
  Database,
  Cloud,
  ShieldCheck,
  Timer,
  Layers,
  Link2,
  Rocket,
  Sparkles,
} from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Nav, Footer, FaqAccordion, FinalCtaSection } from "./index";
import checkoutImg from "@/assets/products/hypermarket-checkout.jpg";
import handheldImg from "@/assets/products/hypermarket-handheld.jpg";

export const Route = createFileRoute("/what-we-do_/products-accelerators_/hypermarket-accelerator")({
  component: HypermarketAcceleratorPage,
  head: () => ({
    meta: [
      { title: "D365 for Hypermarkets | Lumovy" },
      {
        name: "description",
        content:
          "A grocery-focused Dynamics 365 foundation covering checkout, inventory, and replenishment, built for practical grocery store management, so retailers can spend less time building and more time improving operations.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: HYPER_FAQS.map((f) => ({
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

function HypermarketAcceleratorPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <HyperHero />
      <HyperTrustAnchor />
      <HyperProblem />
      <HyperCapabilities />
      <HyperIntegration />
      <HyperTimeToLaunch />
      <HyperProofKit />
      <HyperFAQ />
      <HyperClosingCTA />
      <Footer />
    </div>
  );
}

/* ─────────────────────────────  1. HERO  ───────────────────────────── */
function HyperHero() {
  return (
    <section className="hero-blue-static overflow-hidden">
      <div aria-hidden className="hero-grid" />
      <div className="container-enterprise relative z-10 py-24 lg:py-28">
        <div className="max-w-3xl">
          <span className="hero-content-in text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--cyan-soft)]">
            D365 for Hypermarkets
          </span>
          <h1 className="hero-content-in mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]" style={{ animationDelay: "80ms" }}>
            Modern Grocery Retail, Without Starting From Scratch
          </h1>
          <p className="hero-content-in mt-6 max-w-2xl text-base leading-relaxed text-white/70" style={{ animationDelay: "160ms" }}>
            A grocery-focused Dynamics 365 foundation covering checkout, inventory, and
            replenishment, built for practical grocery store management, so retailers can spend
            less time building and more time improving operations.
          </p>
          <div className="hero-content-in mt-9 flex flex-wrap gap-3" style={{ animationDelay: "240ms" }}>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--navy-deep)] transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30"
            >
              <Calendar className="h-4 w-4" />
              See the Accelerator Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              <PhoneCall className="h-4 w-4" />
              Talk to a Grocery Commerce Expert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  2. TRUST ANCHOR  ───────────────────────────── */
const TRUST_BADGES = [
  { icon: Database, label: "Dynamics 365 Commerce Native" },
  { icon: Store, label: "Grocery & Perishables Ready" },
  { icon: Link2, label: "Connected Store-to-Warehouse Stock" },
  { icon: Timer, label: "100-Day Deployment Model" },
];

function HyperTrustAnchor() {
  return (
    <section className="bg-white py-28">
      <div className="container-enterprise">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Built on Microsoft Dynamics 365</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            A platform, not a project from zero
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[var(--blue-gray)]">
            D365 for Hypermarkets runs on Dynamics 365 Commerce and Finance and Operations,
            pairing Microsoft&apos;s platform with proven inventory management solutions and
            delivery patterns.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_BADGES.map((b) => (
            <div key={b.label} className="flex items-center gap-3 rounded-xl border border-border bg-white px-5 py-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[var(--blue-light)] text-[var(--royal)] ring-1 ring-inset ring-[var(--royal)]/20">
                <b.icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold leading-snug text-[var(--navy-deep)]">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  3. THE PROBLEM IT SOLVES  ───────────────────────────── */
const PROBLEM_PAIRS = [
  {
    title: "Faster time to go-live",
    body: "Less time spent configuring what every hypermarket already needs.",
  },
  {
    title: "Less configuration rework",
    body: "Core grocery processes arrive built, not assembled from scratch.",
  },
  {
    title: "Grocery-first foundation",
    body: "Built around grocery operations, not adapted from general retail.",
  },
  {
    title: "Connected from day one",
    body: "Store operations tied to inventory and pricing from the start.",
  },
];

function HyperProblem() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-[var(--blue-light)]/40 py-28">
      <div aria-hidden className="mesh-blobs-light opacity-60" />
      <div className="container-enterprise relative">
        <div className="max-w-2xl">
          <p className="eyebrow">The problem it solves</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Spend Less Time Rebuilding, More Time Improving
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--blue-gray)]">
            Every hypermarket needs the same operational foundations for grocery inventory
            management, from checkout and perishables to replenishment, pricing, and procurement.
            Lumovy provides these capabilities upfront, so your team can focus on stores,
            categories, and customers.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEM_PAIRS.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="card-lift group relative h-full overflow-hidden rounded-xl border border-border bg-white p-7">
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-[var(--royal)] transition-transform duration-500 group-hover:scale-x-100" />
                <h3 className="text-lg font-semibold text-[var(--navy-deep)]">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--blue-gray)]">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  4. CORE CAPABILITIES (with checkout photo)  ───────────────────────────── */
const CAPABILITIES = [
  {
    icon: Boxes,
    title: "Grocery-Ready Inventory Management",
    body: "Manage perishables, weighted items and short shelf-life products with greater control and visibility across stores.",
  },
  {
    icon: TrendingUp,
    title: "Demand-Driven Replenishment",
    body: "Align replenishment with changing demand, shelf availability and store requirements to keep products where customers need them.",
  },
  {
    icon: Eye,
    title: "Connected Stock Visibility",
    body: "Create a single view of inventory across stores, warehouses and distribution, helping teams make faster, more informed decisions.",
  },
  {
    icon: Tag,
    title: "Pricing and Promotions Management",
    body: "Keep pricing and promotions aligned across the shelf, checkout and wider retail operation for a consistent customer experience.",
  },
  {
    icon: Truck,
    title: "Grocery-Paced Procurement",
    body: "Support the frequency and pace of grocery purchasing with procurement processes designed around retail demand and operational needs.",
  },
];

function HyperCapabilities() {
  return (
    <section className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <div className="max-w-2xl">
          <p className="eyebrow">Core capabilities</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            What Lumovy Brings Into the Engagement
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--blue-gray)]">
            As grocery store inventory management software built on Dynamics 365, D365 for
            Hypermarkets covers checkout, inventory, replenishment, pricing, and procurement in
            one connected system.
          </p>
        </div>
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={checkoutImg}
              alt="Grocery checkout and point-of-sale scanning"
              loading="lazy"
              className="h-full max-h-[560px] w-full object-cover"
            />
          </div>
          <ul className="space-y-5">
            {CAPABILITIES.map((c, i) => (
              <Reveal key={c.title} delay={i * 70}>
                <li className="flex gap-4 rounded-xl border border-border bg-white p-5 card-lift">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[var(--blue-light)] text-[var(--royal)] ring-1 ring-inset ring-[var(--royal)]/20">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-[15px] font-semibold text-[var(--navy-deep)]">{c.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--blue-gray)]">{c.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  5. HOW IT INTEGRATES (4-layer flow diagram)  ───────────────────────────── */
const INTEGRATION_LAYERS = [
  { icon: Store, title: "Store Experience", items: "Checkout · POS · Store Operations · Customer Transactions", accent: false },
  { icon: Boxes, title: "D365 for Hypermarkets", items: "Inventory · Replenishment · Pricing · Promotions · Procurement", accent: true },
  { icon: Database, title: "Dynamics 365", items: "Commerce · Finance · Supply Chain · Products · Orders", accent: false },
  { icon: Cloud, title: "Connected Ecosystem", items: "Azure · Power Apps · Warehouses · Distribution · Third-Party Systems", accent: false },
];

function HyperIntegration() {
  return (
    <section className="hero-dark relative overflow-hidden py-28 text-white">
      <div aria-hidden className="hero-orbs opacity-50" />
      <div aria-hidden className="hero-grid" />
      <div className="container-enterprise relative z-10">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--cyan-soft)]">
            <Layers className="h-3.5 w-3.5" /> How it integrates
          </span>
          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            One Connected View. Every Store. Every Operation.
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/70">
            Lumovy D365 for Hypermarkets connects the systems behind your grocery operation,
            giving teams a consistent view of products, inventory, pricing, orders and store
            activity.
          </p>
        </div>

        <div className="mx-auto mt-14 flex max-w-2xl flex-col gap-3">
          {INTEGRATION_LAYERS.map((l, i) => (
            <div key={l.title}>
              <div
                className={
                  "flex items-center gap-4 rounded-xl px-6 py-5 " +
                  (l.accent
                    ? "bg-[var(--royal)] ring-1 ring-[var(--cyan-soft)]/40"
                    : "border border-white/12 bg-white/[0.04]")
                }
              >
                <span className={"grid h-12 w-12 shrink-0 place-items-center rounded-lg " + (l.accent ? "bg-white/15 text-[var(--cyan-soft)]" : "bg-white/8 text-white/80")}>
                  <l.icon className="h-6 w-6" />
                </span>
                <div>
                  <div className="text-base font-semibold text-white">{l.title}</div>
                  <div className="mt-0.5 text-xs text-white/60">{l.items}</div>
                </div>
              </div>
              {i < INTEGRATION_LAYERS.length - 1 && (
                <div className="flex justify-center py-1.5">
                  <ArrowRight className="h-4 w-4 rotate-90 text-[var(--cyan-soft)]/60" />
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-white/60">
          The result is a connected grocery operating layer that helps teams manage stores,
          inventory and supply more effectively across the business.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────  6. TIME TO LAUNCH (animated step timeline)  ───────────────────────────── */
const LAUNCH_STEPS = [
  { icon: Rocket, title: "Start With the Core", body: "Establish essential grocery capabilities across checkout, inventory, replenishment, pricing and procurement." },
  { icon: Layers, title: "Build Value Progressively", body: "Introduce capabilities in focused releases, allowing teams to address priorities without waiting for the full program." },
  { icon: Link2, title: "Connect the Operation", body: "Bring store, inventory, procurement and retail processes together within a connected Dynamics 365 environment." },
  { icon: TrendingUp, title: "Scale With the Business", body: "Extend the foundation as store networks, operational requirements and business priorities evolve." },
  { icon: Sparkles, title: "Focus on What Differentiates You", body: "Spend less effort rebuilding standard grocery capabilities and more time improving the customer, store and commercial experience." },
];

function HyperTimeToLaunch() {
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
          <p className="eyebrow">Time to launch</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Value Starts With the First Release
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--blue-gray)]">
            Lumovy&apos;s grocery-focused Dynamics 365 foundation enables retailers to introduce
            core capabilities progressively, creating value throughout the implementation
            journey.
          </p>
        </div>
        <div className="relative mt-16">
          <div aria-hidden className="absolute left-0 right-0 top-7 hidden h-0.5 bg-[var(--blue-light)] lg:block" />
          <div aria-hidden className="absolute left-0 top-7 hidden h-0.5 bg-gradient-to-r from-[var(--royal)] via-[var(--azure)] to-[var(--cyan-soft)] lg:block" style={{ width: `${progress * 100}%`, transition: "width 0.1s linear" }} />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
            {LAUNCH_STEPS.map((s, i) => {
              const reached = progress >= i / (LAUNCH_STEPS.length - 1) - 0.02;
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

/* ─────────────────────────────  7. PROOF KIT (challenge/approach + photo testimonial)  ───────────────────────────── */
function HyperProofKit() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[var(--blue-light)]/40 py-28">
      <div aria-hidden className="mesh-blobs-light opacity-60" />
      <div className="container-enterprise relative">
        <div className="max-w-2xl">
          <p className="eyebrow">Proof kit</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            A Grocery Transformation Delivered at Pace
          </h2>
        </div>
        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[1.35fr_1fr]">
          <div className="flex min-h-[440px] flex-col justify-between rounded-xl border border-border bg-white p-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--royal)]">
                The Challenge
              </span>
              <p className="mt-3 text-sm leading-relaxed text-[var(--blue-gray)]">
                A growing grocery retailer needed modern store operations, tighter control of
                complex inventory, and a fast path to getting its new model live.
              </p>
              <span className="mt-6 block text-xs font-semibold uppercase tracking-widest text-[var(--royal)]">
                The Lumovy Approach
              </span>
              <p className="mt-3 text-sm leading-relaxed text-[var(--blue-gray)]">
                Lumovy delivered a connected Dynamics 365 foundation across commerce, inventory,
                and finance, giving the retailer a stronger base for day-to-day operations and
                future growth.
              </p>
            </div>
            <div>
              <div className="grid grid-cols-3 gap-3 border-t border-border pt-6">
                {[
                  ["100 Days", "To full ERP-enabled store operations"],
                  ["130+", "Business processes across 14 modules"],
                  ["1,600+", "SKUs with 160 weekly offers"],
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
                Talk to us about your rollout
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          {/* Photo + colorless glass-blur scrim */}
          <figure className="relative overflow-hidden rounded-xl">
            <img src={handheldImg} alt="Store associate scanning produce with a handheld device" className="absolute inset-0 h-full w-full object-cover" />
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/45 to-transparent" />
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 backdrop-blur-[3px] [mask-image:linear-gradient(to_top,black_35%,transparent)]" />
            <figcaption className="relative z-10 flex h-full min-h-[440px] flex-col justify-end p-8">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur">
                <ShieldCheck className="h-3.5 w-3.5" />
                Grocery-ready, store by store
              </span>
              <div className="mt-4 text-3xl font-bold tracking-tight text-white">Connected</div>
              <div className="mt-1 text-sm text-white/80">Stock, pricing and store operations, one operating layer</div>
            </figcaption>
          </figure>
        </div>

        {/* Business value strip */}
        <div className="mt-6 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
          {[
            ["320+ completed projects", "Delivered across retail and hospitality"],
            ["300+ consultants", "Dynamics 365 specialists globally"],
            ["Backed by accelerators", "Lumovy patterns plus Microsoft expertise"],
          ].map(([v, l]) => (
            <div key={l} className="bg-white px-6 py-7 text-center">
              <div className="text-lg font-bold tracking-tight text-[var(--navy-deep)]">{v}</div>
              <div className="mt-1.5 text-xs leading-tight text-[var(--blue-gray)]">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  8. FAQ  ───────────────────────────── */
const HYPER_FAQS = [
  {
    q: "Is this a separate product we buy, or does it run on our existing Dynamics 365 licensing?",
    a: "It runs on standard Dynamics 365 Commerce and Finance and Operations licensing. The accelerator is delivered as part of the implementation, not as a separate software licence.",
  },
  {
    q: "How much can we customize beyond what's included?",
    a: "The core grocery processes can be shaped around your categories and store formats. Anything beyond the accelerator can be handled as part of a broader Dynamics 365 implementation.",
  },
  {
    q: "Which Dynamics 365 version does this support?",
    a: "D365 for Hypermarkets is built for current-release Dynamics 365 Commerce and Finance and Operations, including the inventory management capabilities store and warehouse teams rely on daily. On an older or on-premises environment, Lumovy starts with a compatibility review.",
  },
  {
    q: "Can this work with a Dynamics 365 environment we already have?",
    a: "Yes. It can be introduced into an existing Dynamics 365 Commerce and Finance and Operations environment, or delivered as part of a new implementation.",
  },
];

function HyperFAQ() {
  return (
    <section className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <FaqAccordion
          title="Frequently asked questions"
          intro="Licensing, customization, versions and existing environments: the questions grocery retail leaders ask."
          items={HYPER_FAQS.map((f) => [f.q, f.a] as [string, string])}
        />
      </div>
    </section>
  );
}

/* ─────────────────────────────  9. FINAL CTA  ───────────────────────────── */
function HyperClosingCTA() {
  return (
    <FinalCtaSection
      id="contact"
      title="Move From Implementation to Impact, Faster"
      subtitle="Start with proven grocery foundations and focus your Dynamics 365 program on the decisions that matter to your business."
      primary={{ label: "See the Accelerator Demo", href: "#contact", icon: true }}
      secondary={{ label: "Talk to a Grocery Commerce Expert", href: "#contact" }}
      blueStatic
    />
  );
}
