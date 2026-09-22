import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Compass,
  Hammer,
  CheckCircle2,
  Rocket,
  LifeBuoy,
  Cog,
  RefreshCw,
  Boxes,
  Workflow,
  ShieldCheck,
  Plus,
  Minus,
  Store,
  Layers3,
  Quote,
  TrendingUp,
} from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Nav, Footer, FaqAccordion, FinalCtaSection } from "./index";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Microsoft Dynamics 365 Services | Lumovy" },
      {
        name: "description",
        content:
          "Lumovy helps you implement, improve and extend Microsoft Dynamics 365 across Finance & Operations, supply chain, retail and commerce, and customer engagement — with Copilot and AI agents put to work where they make a measurable difference.",
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

/* ─────────────  Scroll-reveal hook (one-time, respects reduced motion)  ───────────── */
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

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(22px)",
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <ServicesHero />
      <TrustStrip />
      <CategoryFraming />
      <ServiceList />
      <MethodologyBand />
      <FeaturedCase />
      <CrossSell />
      <ServicesFAQ />
      <ClosingCTA />
      <Footer />
    </div>
  );
}

/* ─────────────────────────────  1. HERO  ───────────────────────────── */
const HERO_CHECKS = [
  "Finance & Operations",
  "Supply chain",
  "Retail & commerce",
  "Customer engagement",
];

function ServicesHero() {
  return (
    <section className="hero-blue-static overflow-hidden">
      <div aria-hidden className="hero-grid" />
      <div className="container-enterprise relative z-10 py-24 lg:py-28">
        <div className="max-w-3xl">
          <span className="hero-content-in inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--cyan-soft)]">
            <Cog className="h-3.5 w-3.5" />
            Microsoft Dynamics 365 Services
          </span>
          <h1
            className="hero-content-in mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]"
            style={{ animationDelay: "80ms" }}
          >
            Make your next Dynamics decision a better business decision.
          </h1>
          <p
            className="hero-content-in mt-6 max-w-2xl text-base leading-relaxed text-white/70"
            style={{ animationDelay: "160ms" }}
          >
            Improve how your business runs today. Build the capabilities it needs next. Lumovy
            helps you implement, improve and extend Microsoft Dynamics 365 across Finance &amp;
            Operations, supply chain, retail and commerce, and customer engagement — connecting
            processes, applications and data, and putting Copilot and AI agents to work where
            they make a measurable difference.
          </p>
          <div
            className="hero-content-in mt-9 flex flex-wrap gap-3"
            style={{ animationDelay: "240ms" }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--navy-deep)] transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30"
            >
              <Calendar className="h-4 w-4" />
              Find my starting point
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#services-list"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Explore our services
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Proof bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="container-enterprise grid grid-cols-2 gap-x-8 gap-y-5 py-8 sm:grid-cols-4">
          {HERO_CHECKS.map((c) => (
            <span key={c} className="flex items-center gap-2.5 text-sm font-semibold text-white/70">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--cyan-soft)]" />
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  2. TRUST STRIP  ───────────────────────────── */
const TRUST_NUMBERS = [
  { v: "300+", l: "D365 professionals globally" },
  { v: "320+", l: "Completed projects" },
  { v: "100 days", l: "Avg. go-live time" },
  { v: "Solutions Partner", l: "Microsoft, Business Applications" },
];

function TrustStrip() {
  return (
    <section className="border-b border-border bg-white">
      <div className="container-enterprise py-14">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--royal)]">
            Backed by Microsoft, proven at scale
          </p>
        </Reveal>
        <div className="mt-9 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
          {TRUST_NUMBERS.map((n, i) => (
            <Reveal key={n.l} delay={i * 90} className="bg-white">
              <div className="flex h-full flex-col items-center justify-center px-6 py-8 text-center">
                <div className="text-2xl font-bold tracking-tight text-[var(--navy-deep)] sm:text-3xl">
                  {n.v}
                </div>
                <div className="mt-2 text-xs font-medium leading-relaxed text-[var(--blue-gray)]">
                  {n.l}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <div className="mt-6 flex justify-center">
            <a
              href="https://appsource.microsoft.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--blue-light)]/60 px-4 py-2 text-xs font-semibold text-[var(--royal)] transition-colors hover:bg-[var(--blue-light)]"
            >
              <ShieldCheck className="h-4 w-4" />
              Clarity RFID Connector — listed on Microsoft AppSource
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────  3. CATEGORY FRAMING (business areas)  ───────────────────────────── */
const PILLARS = [
  {
    icon: TrendingUp,
    name: "Finance & Operations",
    line: "Bring greater clarity to financial control, multi-entity operations and reporting.",
    n: "01",
    href: "#contact",
  },
  {
    icon: Boxes,
    name: "Supply Chain",
    line: "Connect procurement, inventory, warehousing and fulfillment around a clearer view of operations.",
    n: "02",
    href: "#contact",
  },
  {
    icon: Store,
    name: "Retail & Commerce",
    line: "Make buying, selling and fulfillment work across stores and digital channels.",
    n: "03",
    href: "#contact",
  },
  {
    icon: Layers3,
    name: "Customer Engagement",
    line: "Help sales and service teams act with the right customer context.",
    n: "04",
    href: "#contact",
  },
];

function CategoryFraming() {
  return (
    <section className="bg-white py-24">
      <div className="container-enterprise">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--royal)]">
            Start with what needs to work better
          </p>
        </Reveal>
        <div className="mt-10 divide-y divide-border border-y border-border">
          {PILLARS.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <a
                href={p.href}
                className="group flex items-center gap-6 py-8 transition-colors sm:gap-10"
              >
                <span className="text-3xl font-bold tabular-nums text-[var(--blue-light)] transition-colors group-hover:text-[var(--royal)] sm:text-5xl">
                  {p.n}
                </span>
                <span className="inline-grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[var(--blue-light)]/60 text-[var(--royal)] transition-all group-hover:scale-105 group-hover:bg-[var(--royal)] group-hover:text-white sm:h-16 sm:w-16">
                  <p.icon className="h-7 w-7" />
                </span>
                <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                  <h3 className="text-xl font-semibold text-[var(--navy-deep)] sm:text-2xl">
                    {p.name}
                  </h3>
                  <p className="text-[15px] text-[var(--blue-gray)] sm:max-w-md sm:text-right">
                    {p.line}
                  </p>
                </div>
                <ArrowRight className="hidden h-5 w-5 shrink-0 text-[var(--blue-light)] transition-colors group-hover:text-[var(--royal)] sm:block" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  4. SERVICE LIST (expanding rows)  ───────────────────────────── */
type Svc = {
  id: string;
  name: string;
  outcome: string;
  metric: string;
  icon: typeof Compass;
  cat: string;
  href?: string;
};
const SERVICES: Svc[] = [
  { id: "discovery-advisory", cat: "Know what's next", icon: Compass, name: "Discovery & Advisory", outcome: "Know what to do next, and why — our Horizon Model organizes findings into stabilize, extend and transformation decisions.", metric: "H1 · H2 · H3 Horizon Model" },
  { id: "implementation", cat: "Build it right", icon: Rocket, name: "Implementation", outcome: "Build around how the business needs to run, through Initiate, Implement, Prepare and Operate.", metric: "100-day rapid go-live track" },
  { id: "implementation-recovery", cat: "Restore confidence", icon: ShieldCheck, name: "Implementation Recovery & Re-implementation", outcome: "Restore confidence before adding more change — diagnose, contain, correct and prove.", metric: "Diagnose → Contain → Correct → Prove" },
  { id: "legacy-migration", cat: "Move forward", icon: RefreshCw, name: "Migration & Upgrade", outcome: "Decide what should move forward with you, then assess, rationalize, rehearse and transition.", metric: "30% faster migration, full continuity" },
  { id: "integrations-modernization", cat: "Connect the business", icon: Workflow, name: "Integrations & Modernization", outcome: "Make the whole business journey work — connect Dynamics 365 with the systems the business depends on.", metric: "50+ live integrations delivered", href: "/services/integrations-modernization" },
  { id: "managed-support", cat: "Keep improving", icon: LifeBuoy, name: "Managed Services & Optimization", outcome: "Keep everyday support connected to lasting improvement, with a visible backlog and clear communication.", metric: "24/7 global support coverage" },
];

function ServiceList() {
  const [active, setActive] = useState<string>(SERVICES[0].id);
  return (
    <section id="services-list" className="scroll-mt-20 border-y border-border bg-[var(--blue-light)]/30 py-24">
      <div className="container-enterprise">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--royal)]">
              The right service starts with the right diagnosis
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
              A new implementation, a targeted improvement and a platform transformation solve different problems.
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-white shadow-fluent-sm">
          {SERVICES.map((s, i) => {
            const isOpen = active === s.id;
            return (
              <div
                key={s.id}
                id={s.id}
                className={
                  "scroll-mt-24 border-b border-border last:border-b-0 transition-colors " +
                  (isOpen ? "bg-[var(--blue-light)]/25" : "bg-white")
                }
                onMouseEnter={() => setActive(s.id)}
              >
                <button
                  onClick={() => setActive(s.id)}
                  className="flex w-full items-center gap-5 px-6 py-6 text-left sm:px-8"
                  aria-expanded={isOpen}
                >
                  <span
                    className={
                      "grid h-12 w-12 shrink-0 place-items-center rounded-xl transition-all " +
                      (isOpen
                        ? "bg-[var(--royal)] text-white"
                        : "bg-[var(--blue-light)]/60 text-[var(--royal)]")
                    }
                  >
                    <s.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h3 className="text-lg font-semibold text-[var(--navy-deep)]">{s.name}</h3>
                      <span className="rounded-full bg-[var(--blue-light)]/70 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--royal)]">
                        {s.cat}
                      </span>
                    </div>
                    {/* Expanding detail */}
                    <div
                      className={
                        "grid transition-all duration-400 ease-out " +
                        (isOpen ? "mt-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")
                      }
                    >
                      <div className="overflow-hidden">
                        <p className="text-[15px] leading-relaxed text-[var(--blue-gray)]">
                          {s.outcome}
                        </p>
                        <div className="mt-3 flex flex-wrap items-center gap-4">
                          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--cyan-soft)]/15 px-3 py-1.5 text-xs font-semibold text-[var(--royal)]">
                            <CheckCircle2 className="h-3.5 w-3.5" />
                            {s.metric}
                          </span>
                          <a
                            href={s.href ?? "#contact"}
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--royal)]"
                          >
                            Learn more
                            <ArrowRight className="h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="hidden shrink-0 text-sm font-bold tabular-nums text-[var(--blue-light)] sm:block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  5. METHODOLOGY BAND (flagship)  ───────────────────────────── */
const PHASES = [
  { icon: Compass, name: "Initiate", note: "Agree outcomes, scope and blueprint" },
  { icon: Hammer, name: "Implement", note: "Design, configure, build and test" },
  { icon: CheckCircle2, name: "Prepare", note: "Validate readiness, prepare users" },
  { icon: Rocket, name: "Operate", note: "Deploy, hypercare, transition to support" },
];

function MethodologyBand() {
  const pinRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = pinRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the band's top hits ~80% viewport, 1 when its bottom passes ~40%
      const start = vh * 0.85;
      const end = vh * 0.3;
      const p = (start - rect.top) / (start - end + rect.height);
      setProgress(Math.min(1, Math.max(0, p)));
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

  return (
    <section className="hero-dark relative overflow-hidden py-28 text-white">
      <div aria-hidden className="hero-orbs opacity-50" />
      <div aria-hidden className="hero-grid" />
      <div ref={pinRef} className="container-enterprise relative z-10">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--cyan-soft)]">
            The delivery framework
          </span>
          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            Initiate. Implement. Prepare. Operate.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/70">
            Lumovy translates business priorities into a configured, tested and operationally
            prepared solution through four stages — with business capabilities first,
            configuration before customization and early user validation built in throughout.
          </p>
        </div>

        {/* Phase diagram with a scroll-driven progress line */}
        <div className="relative mt-16">
          {/* Track */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-7 hidden h-0.5 bg-white/10 lg:block"
          />
          {/* Progress fill */}
          <div
            aria-hidden
            className="absolute left-0 top-7 hidden h-0.5 bg-gradient-to-r from-[var(--royal)] via-[var(--azure)] to-[var(--cyan-soft)] lg:block"
            style={{ width: `${progress * 100}%`, transition: "width 0.1s linear" }}
          />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {PHASES.map((ph, i) => {
              const reached = progress >= i / (PHASES.length - 1) - 0.02;
              return (
                <li key={ph.name} className="relative">
                  <span
                    className={
                      "relative z-10 grid h-14 w-14 place-items-center rounded-full border transition-all duration-500 " +
                      (reached
                        ? "border-[var(--cyan-soft)] bg-[var(--royal)] text-white shadow-[0_0_28px_-4px_var(--cyan-soft)]"
                        : "border-white/15 bg-[var(--navy-deep)] text-white/50")
                    }
                  >
                    <ph.icon className="h-6 w-6" />
                  </span>
                  <div className="mt-4">
                    <div className="text-[11px] font-bold uppercase tracking-widest text-[var(--cyan-soft)]">
                      Phase {i + 1}
                    </div>
                    <h3 className="mt-1 text-base font-semibold text-white">{ph.name}</h3>
                    <p className="mt-1 text-xs text-white/55">{ph.note}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="mt-14">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
          >
            Explore Discovery & Advisory
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  6. FEATURED CASE  ───────────────────────────── */
const CASE_METRICS = [
  { v: "100", u: "days", l: "to full go-live" },
  { v: "<2", u: "sec", l: "AI product recognition" },
  { v: "4", u: "wks", l: "payment integration" },
];

function FeaturedCase() {
  return (
    <section className="bg-white py-24">
      <div className="container-enterprise">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--royal)]">
            Proof, not promises
          </p>
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-[var(--navy-deep)] text-white">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              {/* Quote side */}
              <div className="relative p-9 sm:p-12">
                <Quote className="h-9 w-9 text-[var(--cyan-soft)]/50" />
                <blockquote className="mt-5 text-xl font-medium leading-relaxed text-white sm:text-2xl">
                  “Lumovy delivered a connected omnichannel platform across our stores, procurement
                  and POS in 100 days — including AI powered checkout — and gave us a foundation
                  built to scale with our growth.”
                </blockquote>
                <div className="mt-7 text-sm">
                  <div className="font-semibold text-white">Leading Grocery Retailer</div>
                  <div className="text-white/60">UAE · Dynamics 365 Commerce & Finance &amp; Operations</div>
                </div>
              </div>
              {/* Metrics side */}
              <div className="grid grid-cols-3 divide-x divide-white/10 border-t border-white/10 lg:grid-cols-1 lg:divide-x-0 lg:divide-y lg:border-l lg:border-t-0">
                {CASE_METRICS.map((m) => (
                  <div key={m.l} className="flex flex-col justify-center p-6 text-center lg:p-8 lg:text-left">
                    <div className="flex items-baseline justify-center gap-1 lg:justify-start">
                      <span className="text-3xl font-bold tracking-tight text-[var(--cyan-soft)] sm:text-4xl">
                        {m.v}
                      </span>
                      <span className="text-base font-semibold text-white/70">{m.u}</span>
                    </div>
                    <div className="mt-1.5 text-xs text-white/60">{m.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-white/10 px-9 py-5 sm:px-12">
              <a
                href="/industries/retail-omnichannel-commerce"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white"
              >
                Read the full case study
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────  7. CROSS-SELL  ───────────────────────────── */
const CROSS = [
  {
    icon: Store,
    tag: "By industry",
    title: "Not sure where to start? Find your industry.",
    href: "/industries/retail-omnichannel-commerce",
    cta: "Explore industries",
  },
  {
    icon: Layers3,
    tag: "By platform",
    title: "Looking for a specific Dynamics 365 module?",
    href: "/#solutions",
    cta: "Explore the platform",
  },
];

function CrossSell() {
  return (
    <section className="border-y border-border bg-[var(--blue-light)]/30 py-24">
      <div className="container-enterprise">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--royal)]">
            Explore by industry or platform
          </p>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {CROSS.map((c, i) => (
            <Reveal key={c.tag} delay={i * 110}>
              <a
                href={c.href}
                className="group flex h-full items-center justify-between gap-6 rounded-2xl border border-border bg-white p-8 transition-all hover:-translate-y-1 hover:border-[var(--royal)]/30 hover:shadow-fluent-md"
              >
                <div>
                  <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-[var(--blue-light)]/60 text-[var(--royal)] transition-colors group-hover:bg-[var(--royal)] group-hover:text-white">
                    <c.icon className="h-6 w-6" />
                  </span>
                  <div className="mt-5 text-xs font-semibold uppercase tracking-widest text-[var(--royal)]">
                    {c.tag}
                  </div>
                  <h3 className="mt-2 max-w-xs text-lg font-semibold text-[var(--navy-deep)]">
                    {c.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--royal)]">
                    {c.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </a>
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
    q: "What Microsoft Dynamics 365 services does Lumovy provide?",
    a: "Lumovy provides Discovery & Advisory, implementation, implementation recovery, migration and upgrade, integrations and modernization, and managed services. These services support Finance & Operations, supply chain, retail and commerce, and customer engagement, with AI enablement incorporated where relevant.",
  },
  {
    q: "Can Lumovy improve our current Dynamics environment without replacing it?",
    a: "Yes. Lumovy assesses immediate improvements and extension opportunities alongside the case for transformation. The recommendation depends on business value, platform constraints and readiness.",
  },
  {
    q: "What is Lumovy's Horizon Model?",
    a: "The Horizon Model structures discovery into H1 — Stabilize & Optimize, H2 — Extend & Enable, and H3 — Evaluate Transformation. It helps leaders decide what to fix now, what capabilities to add and when platform transformation merits deeper assessment.",
  },
  {
    q: "Does Discovery & Advisory commit us to migration?",
    a: "No. The engagement produces findings, priorities and recommendations. Migration is investigated when the evidence supports it; it is not the assumed outcome.",
  },
  {
    q: "How does Lumovy approach Dynamics 365 implementation?",
    a: "Lumovy follows four stages: Initiate, Implement, Prepare and Operate. The approach includes iterative delivery, business reviews, testing, user preparation, cutover and hypercare.",
  },
  {
    q: "Can Lumovy recover a struggling implementation?",
    a: "Yes. Lumovy can assess an in-flight or live implementation and recommend a recovery approach. The findings determine whether targeted correction or broader re-implementation is appropriate.",
  },
  {
    q: "How can Lumovy help us adopt AI in Dynamics 365?",
    a: "Lumovy helps identify use cases, assess prerequisites, configure or extend suitable capabilities, connect systems and validate outcomes. Each use case starts with a defined business task and a measure of improvement.",
  },
  {
    q: "How long will an engagement take?",
    a: "Timing depends on scope, complexity, dependencies and business readiness. The delivery plan is established after these are understood — the Horizon Model does not impose fixed timelines.",
  },
];

function ServicesFAQ() {
  return (
    <section className="bg-white py-24">
      <div className="container-enterprise">
        <FaqAccordion
          title="Common questions"
          intro="Everything you need to know about scoping, teams and getting started. Still unsure? Book a consultation and we'll talk it through."
          items={FAQS.map((f) => [f.q, f.a] as [string, string])}
        />
      </div>
    </section>
  );
}

/* ─────────────────────────────  9. CLOSING CTA (reuses homepage FinalCtaSection)  ───────────────────────────── */
function ClosingCTA() {
  return (
    <FinalCtaSection
      id="contact"
      title="What should work better next?"
      subtitle="A stronger platform. A connected process. An AI capability that earns its place in the business. Let's identify the next move around your priorities."
      microcopy="NDA available on request. Response within 1 business day."
      primary={{ label: "Discuss my Dynamics priorities", href: "#contact", icon: true }}
      secondary={{ label: "Find my starting point", href: "#services-list" }}
      blueStatic
    />
  );
}
