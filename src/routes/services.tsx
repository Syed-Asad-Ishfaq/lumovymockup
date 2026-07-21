import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  ExternalLink,
  Compass,
  PenTool,
  Hammer,
  CheckCircle2,
  Rocket,
  LifeBuoy,
  Cog,
  RefreshCw,
  Boxes,
  Cpu,
  Workflow,
  ShieldCheck,
  Plus,
  Minus,
  Store,
  Layers3,
  Quote,
} from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Nav, Footer } from "./index";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Dynamics 365 Services | Lumovy" },
      {
        name: "description",
        content:
          "A tightly aligned suite of Microsoft Dynamics 365 services — from first roadmap to day-two operations — for retail, hospitality and commerce businesses.",
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
function ServicesHero() {
  return (
    <section className="hero-dark relative overflow-hidden">
      <div aria-hidden className="hero-beam" />
      <div aria-hidden className="hero-orbs" />
      <div aria-hidden className="hero-grid" />
      <div aria-hidden className="hero-grain" />
      <div className="container-enterprise relative z-10 flex min-h-[78vh] flex-col justify-center py-24">
        <div className="max-w-4xl">
          <span className="hero-content-in inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--cyan-soft)] backdrop-blur">
            <Cog className="h-3.5 w-3.5" />
            Services
          </span>
          <h1
            className="hero-content-in mt-6 text-4xl font-semibold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "80ms" }}
          >
            Microsoft Expertise That Accelerates Your Transformation
          </h1>
          <p
            className="hero-content-in mt-6 max-w-2xl text-lg leading-relaxed text-white/70"
            style={{ animationDelay: "160ms" }}
          >
            A tightly aligned suite of Dynamics 365 services — from first roadmap to day-two
            operations — built for retail, hospitality and commerce businesses.
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
              Book a consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://appsource.microsoft.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              See the RFID connector on Microsoft Marketplace
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
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

/* ─────────────────────────────  3. CATEGORY FRAMING  ───────────────────────────── */
const PILLARS = [
  {
    icon: Compass,
    name: "Advisory & Delivery",
    line: "From roadmap to go-live.",
    n: "01",
  },
  {
    icon: Cpu,
    name: "Engineering & AI",
    line: "Build, connect, and modernize what runs the business.",
    n: "02",
  },
  {
    icon: RefreshCw,
    name: "Run & Scale",
    line: "Keep it running, and keep it growing.",
    n: "03",
  },
];

function CategoryFraming() {
  return (
    <section className="bg-white py-24">
      <div className="container-enterprise">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--royal)]">
            How we work with you
          </p>
        </Reveal>
        <div className="mt-10 divide-y divide-border border-y border-border">
          {PILLARS.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <div className="group flex items-center gap-6 py-8 transition-colors sm:gap-10">
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
              </div>
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
};
const SERVICES: Svc[] = [
  { id: "implementation", cat: "Advisory & Delivery", icon: Rocket, name: "Implementation", outcome: "Achieve quick returns and lasting outcomes.", metric: "100-day rapid go-live track" },
  { id: "legacy-migration", cat: "Advisory & Delivery", icon: RefreshCw, name: "Legacy Migration", outcome: "Break free from on-premise constraints.", metric: "30% faster migration, full continuity" },
  { id: "integrations-modernization", cat: "Engineering & AI", icon: Workflow, name: "Integrations & Modernization", outcome: "Build a connected, future-ready ecosystem.", metric: "50+ live integrations delivered" },
  { id: "agentic-ai", cat: "Engineering & AI", icon: Cpu, name: "Enterprise Agentic AI Solutions", outcome: "Deploy autonomous commerce agents.", metric: "Enterprise AI live in 20–60 days" },
  { id: "quality-engineering", cat: "Engineering & AI", icon: ShieldCheck, name: "Quality Engineering Factory", outcome: "Deliver flawless, performant, best-in-app experiences.", metric: "6× faster validation via Leapwork" },
  { id: "managed-support", cat: "Run & Scale", icon: LifeBuoy, name: "Managed Support & Expansion", outcome: "Pave the path for continuous improvement.", metric: "24/7 global support coverage" },
  { id: "global-capability-centers", cat: "Run & Scale", icon: Boxes, name: "Global Capability Centers", outcome: "Stand up a dedicated hub for talent and innovation.", metric: "Specialized talent deployed in 3 weeks" },
];

function ServiceList() {
  const [active, setActive] = useState<string>(SERVICES[0].id);
  return (
    <section className="border-y border-border bg-[var(--blue-light)]/30 py-24">
      <div className="container-enterprise">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--royal)]">
              Seven ways we deliver
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
              Every engagement is a proof point
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
                            href="#contact"
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
  { icon: Compass, name: "Discovery", note: "Priorities & scope" },
  { icon: PenTool, name: "Blueprint", note: "Solution design" },
  { icon: Hammer, name: "Build", note: "Configure & integrate" },
  { icon: CheckCircle2, name: "Validate", note: "Test & assure quality" },
  { icon: Rocket, name: "Go-Live", note: "Governed launch" },
  { icon: LifeBuoy, name: "Hypercare", note: "Stabilize & optimize" },
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
            The framework
          </span>
          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            The LTS + Success by Design Framework
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/70">
            Every engagement runs on a hybrid delivery framework — Microsoft&apos;s Success by
            Design methodology combined with Lumovy&apos;s own LTS approach. Governed go-lives,
            structured checkpoints, no surprise overruns.
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
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-3">
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
            See how we de-risk your D365 program
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
                  and POS in 100 days — including AI-powered checkout — and gave us a foundation
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
    q: "How do you scope a new engagement?",
    a: "We start with a focused discovery session to define your business priorities and MVP outcomes, then produce a blueprint and roadmap with clear checkpoints — so scope, timeline and investment are agreed before build begins.",
  },
  {
    q: "Do you work with an existing Dynamics 365 implementation, or only new deployments?",
    a: "Both. We take on new deployments as well as existing D365 environments — whether you need optimization, new modules, integrations, or to modernize a legacy or partially-implemented system.",
  },
  {
    q: "What does your typical delivery team look like?",
    a: "A blended team of solution architects, functional and technical consultants, integration and QA engineers, and a delivery lead — the same roles named on our Implementation and Integrations pages, scaled to the engagement.",
  },
  {
    q: "Can you take over support from our current partner?",
    a: "Yes. Our Managed Support & Expansion service includes a structured switch-over — we can assume support of your existing environment, typically within 30 days, with knowledge transfer and no disruption to operations.",
  },
  {
    q: "Do you offer a smaller, lower-commitment starting engagement?",
    a: "Yes. We offer assessment and health-check style entry engagements that give you a clear picture and roadmap before committing to a full program — a low-risk way to start.",
  },
];

function ServicesFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-white py-24">
      <div className="container-enterprise grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--royal)]">FAQ</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Common questions
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-[var(--blue-gray)]">
            Everything you need to know about scoping, teams and getting started. Still unsure? Book
            a consultation and we&apos;ll talk it through.
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

/* ─────────────────────────────  9. CLOSING CTA  ───────────────────────────── */
function ClosingCTA() {
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
          Ready to talk through your Dynamics 365 roadmap?
        </h2>
        <div className="mt-9 flex justify-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--navy-deep)] transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            <Calendar className="h-4 w-4" />
            Book a consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
        <p className="mx-auto mt-6 max-w-xl text-xs text-white/50">
          NDA available on request. Response within 1 business day.
        </p>
      </div>
    </section>
  );
}
