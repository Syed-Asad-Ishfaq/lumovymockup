import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Calendar,
  PhoneCall,
  Cpu,
  Server,
  ShieldCheck,
  Gauge,
  Layers,
  Boxes,
  LineChart,
  Activity,
  Radar,
  BarChart3,
  Database,
  Wrench,
  ClipboardCheck,
  FileSearch,
} from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Nav, Footer, FaqAccordion, FinalCtaSection } from "./index";
import engineeringImg from "@/assets/services/engineering.jpg";
import testimonialImg from "@/assets/testimonial.webp";

export const Route = createFileRoute("/what-we-do_/products-accelerators_/perflens365")({
  component: PerfLens365Page,
  head: () => ({
    meta: [
      { title: "PerfLens365 | Lumovy" },
      {
        name: "description",
        content:
          "An AI-enabled performance engineering framework and Dynamics 365 monitoring layer that stress-tests your environment, diagnoses the root cause, and hands you a remediation plan, in three to four weeks, not a quarter.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: PERF_FAQS.map((f) => ({
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

function PerfLens365Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <PerfHero />
      <PerfTrustAnchor />
      <PerfProblem />
      <PerfCapabilities />
      <PerfIntegration />
      <PerfTimeToLaunch />
      <PerfProofKit />
      <PerfFAQ />
      <PerfClosingCTA />
      <Footer />
    </div>
  );
}

/* ─────────────────────────────  1. HERO  ───────────────────────────── */
function PerfHero() {
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
            PerfLens365
          </span>
          <h1 className="hero-content-in mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]" style={{ animationDelay: "80ms" }}>
            See Performance Bottlenecks Before Your Users Do
          </h1>
          <p className="hero-content-in mt-6 max-w-2xl text-base leading-relaxed text-white/70" style={{ animationDelay: "160ms" }}>
            An AI powered performance engineering framework and Dynamics 365 monitoring layer
            that stress-tests your Dynamics 365 environment, diagnoses the root cause, and hands
            you a remediation plan, in three to four weeks, not a quarter.
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
              Talk to a Performance Engineer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  2. TRUST ANCHOR  ───────────────────────────── */
const TRUST_BADGES = [
  { icon: Cpu, label: "AI-Enabled Diagnostics" },
  { icon: Gauge, label: "JMeter & Azure App Insights" },
  { icon: Server, label: "Full D365 App Stack Coverage" },
];

function PerfTrustAnchor() {
  return (
    <section className="bg-white py-28">
      <div className="container-enterprise">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Built for the Full Dynamics 365 App Stack</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            One Framework Across Your Entire Environment
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[var(--blue-gray)]">
            Combines JMeter load testing with Azure App Insights for continuous Dynamics 365
            performance monitoring, plus AI-assisted diagnostics that turn raw telemetry into a
            prioritized remediation plan, across Finance and Operations, Commerce, POS, Customer
            Engagement, Power Platform and the Azure integrations around them.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
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
const PROBLEM_BULLETS = [
  {
    title: "Find bottlenecks before go-live",
    body: "Surface issues in FnO, POS, CE and Azure integrations before go-live, not after.",
  },
  {
    title: "Replace guesswork with data",
    body: "Replace guesswork with AI driven performance testing and real telemetry.",
  },
  {
    title: "Turn analysis into a plan",
    body: "Turn root cause analysis into a validated, architect-reviewed remediation plan.",
  },
  {
    title: "Build a reusable baseline",
    body: "Build a reusable Dynamics 365 performance analytics baseline your team can run again.",
  },
  {
    title: "Move beyond one-off testing",
    body: "Move from one-off testing to ongoing performance engineering services.",
  },
];

function PerfProblem() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-[var(--blue-light)]/40 py-28">
      <div aria-hidden className="mesh-blobs-light opacity-60" />
      <div className="container-enterprise relative">
        <div className="max-w-2xl">
          <p className="eyebrow">The problem it solves</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Your Go-Live Date Shouldn&apos;t Be the First Real Load Test
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--blue-gray)]">
            Most Dynamics 365 environments only find their real breaking point once live
            transaction volume hits them, during a peak sale, a new store rollout, or a busy
            period-end close. Traditional performance testing tends to be a one-off event bolted
            onto the end of a project, not a discipline that runs alongside the platform.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {PROBLEM_BULLETS.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="card-lift group relative h-full overflow-hidden rounded-xl border border-border bg-white p-6">
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-[var(--royal)] transition-transform duration-500 group-hover:scale-x-100" />
                <h3 className="text-[15px] font-semibold text-[var(--navy-deep)]">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--blue-gray)]">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  4. CORE CAPABILITIES (with photo)  ───────────────────────────── */
const CAPABILITIES = [
  {
    icon: Wrench,
    title: "AI-Infused Test Generation",
    body: "Automated JMeter script and test data creation through an AI agent plugin, so scripts are ready in days, not weeks.",
  },
  {
    icon: ClipboardCheck,
    title: "Pre-Built D365 Scenarios",
    body: "A jumpstart library of performance scenarios for critical D365 business processes, ready to run from week one.",
  },
  {
    icon: Boxes,
    title: "Full App Stack Coverage",
    body: "Performance assurance across FnO, POS (Store Commerce app and CPOS), Customer Engagement, Power Platform, external APIs and Azure integrations.",
  },
  {
    icon: Layers,
    title: "Advanced Load Simulation",
    body: "Realistic concurrent workload execution across FnO, order channels, middleware and Azure integrations.",
  },
  {
    icon: Radar,
    title: "Continuous Monitoring",
    body: "Deep system observability through Azure performance monitoring and telemetry, not a single snapshot before go-live.",
  },
  {
    icon: LineChart,
    title: "AI Driven Performance Analytics",
    body: "Python-based analysis that flags anomalies and trends directly from JMeter metrics, so patterns surface automatically instead of by hand.",
  },
];

function PerfCapabilities() {
  return (
    <section className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <div className="max-w-2xl">
          <p className="eyebrow">Core capabilities</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Everything a Performance Engineering Programme Needs
          </h2>
        </div>
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={engineeringImg}
              alt="Performance engineers reviewing load test telemetry"
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
  { icon: Database, title: "Dynamics 365 Environment", items: "Finance & Operations · Commerce · POS · Customer Engagement", accent: false },
  { icon: Gauge, title: "PerfLens365 Performance Layer", items: "Load Simulation · Performance Testing · Telemetry", accent: true },
  { icon: Activity, title: "Monitoring & Diagnostics", items: "JMeter · Azure App Insights · AI Driven Diagnostics · Performance Analytics", accent: false },
  { icon: BarChart3, title: "Optimization & Readiness", items: "Remediation Blueprint · Executive Readiness Report", accent: false },
];

function PerfIntegration() {
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
            One Performance Framework Across Your D365 Environment
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/70">
            PerfLens365 works alongside your Dynamics 365 environment to simulate real workloads,
            capture performance telemetry and identify the underlying causes of system slowdowns.
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
          The result is a connected performance framework that helps identify bottlenecks,
          understand their root causes and guide targeted remediation across your Dynamics 365
          environment.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────  6. TIME TO LAUNCH (animated step timeline)  ───────────────────────────── */
const LAUNCH_STEPS = [
  {
    week: "Week 1",
    title: "Discovery and Baseline",
    body: "Map the D365 and Azure architecture, identify high-volume processes, and set the performance baseline.",
    icon: FileSearch,
  },
  {
    week: "Weeks 2-3",
    title: "Framework, Load and Diagnostics",
    body: "Deploy the JMeter framework, run load and stress scenarios, and analyze results with AI driven diagnostics.",
    icon: Gauge,
  },
  {
    week: "Week 4",
    title: "Optimization and Roadmap",
    body: "Root cause analysis, architecture recommendations, and an executive-ready performance engineering report.",
    icon: ShieldCheck,
  },
];

function PerfTimeToLaunch() {
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
            A Performance Engineering Program in Three to Four Weeks
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--blue-gray)]">
            A structured, week-by-week engagement replaces an open-ended performance testing
            project with a defined path from onboarding to a validated remediation plan.
          </p>
        </div>

        <div className="relative mt-16">
          <div aria-hidden className="absolute left-0 right-0 top-7 hidden h-0.5 bg-[var(--blue-light)] lg:block" />
          <div aria-hidden className="absolute left-0 top-7 hidden h-0.5 bg-gradient-to-r from-[var(--royal)] via-[var(--azure)] to-[var(--cyan-soft)] lg:block" style={{ width: `${progress * 100}%`, transition: "width 0.1s linear" }} />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {LAUNCH_STEPS.map((s, i) => {
              const reached = progress >= i / (LAUNCH_STEPS.length - 1) - 0.02;
              return (
                <li key={s.week} className="relative">
                  <span className={"relative z-10 grid h-14 w-14 place-items-center rounded-full border transition-all duration-500 " + (reached ? "border-[var(--cyan-soft)] bg-[var(--royal)] text-white shadow-[0_0_26px_-4px_var(--cyan-soft)]" : "border-border bg-white text-[var(--royal)]")}>
                    <s.icon className="h-6 w-6" />
                  </span>
                  <div className="mt-4">
                    <div className="text-[11px] font-bold uppercase tracking-widest text-[var(--royal)]">{s.week}</div>
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

/* ─────────────────────────────  7. PROOF KIT (challenge/approach + photo panel)  ───────────────────────────── */
const KEY_CAPABILITIES = [
  "Load and Stress Testing (JMeter)",
  "Continuous Telemetry (Azure App Insights)",
  "AI Driven Root Cause Analysis",
  "Executive Readiness Reporting",
];

function PerfProofKit() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[var(--blue-light)]/40 py-28">
      <div aria-hidden className="mesh-blobs-light opacity-60" />
      <div className="container-enterprise relative">
        <div className="max-w-2xl">
          <p className="eyebrow">Proof kit</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            See What the Engagement Delivers
          </h2>
        </div>
        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[1.35fr_1fr]">
          <div className="flex min-h-[440px] flex-col justify-between rounded-xl border border-border bg-white p-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--royal)]">
                The Challenge
              </span>
              <p className="mt-3 text-sm leading-relaxed text-[var(--blue-gray)]">
                Enterprises running Dynamics 365 in high-transaction retail and commerce
                environments often only discover performance limits under real load, frequently
                during peak trading periods when the cost of a slowdown is highest.
              </p>
              <span className="mt-6 block text-xs font-semibold uppercase tracking-widest text-[var(--royal)]">
                The Lumovy Approach
              </span>
              <p className="mt-3 text-sm leading-relaxed text-[var(--blue-gray)]">
                PerfLens365 combines JMeter load testing, Azure performance monitoring, and AI
                driven diagnostics into one closed-loop performance engineering services
                engagement, covering the full D365 app stack rather than a single module. The
                result is a validated performance scorecard, a prioritized remediation blueprint,
                and an observability foundation the team keeps running after the engagement ends.
              </p>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-3 border-t border-border pt-6 sm:grid-cols-4">
                {KEY_CAPABILITIES.map((k) => (
                  <div key={k} className="min-w-0">
                    <div className="text-[11px] font-medium leading-tight text-[var(--blue-gray)]">{k}</div>
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--royal)]"
              >
                Talk to us about your environment
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          {/* Photo + colorless glass-blur scrim */}
          <figure className="relative overflow-hidden rounded-xl">
            <img src={testimonialImg} alt="Performance engineering leader reviewing diagnostics" className="absolute inset-0 h-full w-full object-cover object-top" />
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/45 to-transparent" />
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 backdrop-blur-[3px] [mask-image:linear-gradient(to_top,black_35%,transparent)]" />
            <figcaption className="relative z-10 flex h-full min-h-[440px] flex-col justify-end p-8">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur">
                <ShieldCheck className="h-3.5 w-3.5" />
                Validated before your busiest day
              </span>
              <div className="mt-4 text-3xl font-bold tracking-tight text-white">Ready</div>
              <div className="mt-1 text-sm text-white/80">A performance baseline your team can run again</div>
            </figcaption>
          </figure>
        </div>

        {/* By the numbers strip */}
        <div className="mt-6 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
          {[
            ["3 to 4 Weeks", "From onboarding to remediation plan"],
            ["Full App Stack", "FnO, Commerce, POS, CE and Power Platform"],
            ["AI Driven Diagnostics", "Telemetry turned into a prioritized plan"],
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
const PERF_FAQS = [
  {
    q: "Who is PerfLens365 for?",
    a: "Enterprises running Dynamics 365 Finance and Operations, Commerce, POS or Customer Engagement who need Dynamics 365 performance monitoring before a major release, a peak trading period, or a new store or channel rollout.",
  },
  {
    q: "Does it cover the full D365 app stack, or just one module?",
    a: "The full stack. Coverage spans FnO, POS (Store Commerce app and CPOS), Customer Engagement, Power Platform, external APIs and the Azure integrations around them.",
  },
  {
    q: "How does it use AI in the testing process?",
    a: "AI is used at two points, generating JMeter scripts and test data through an agent plugin, and analyzing performance telemetry afterward to surface anomalies and trends an engineer would otherwise have to find manually. That is the AI driven performance testing layer sitting underneath the whole engagement.",
  },
  {
    q: "Is this a one-time test, or does it run continuously?",
    a: "Both are available. Most engagements start with a focused three to four week programme, then hand over an observability and monitoring foundation the team can run continuously for ongoing performance optimization.",
  },
  {
    q: "What does Lumovy handle versus our own team?",
    a: "Lumovy provides the framework, the AI-assisted diagnostics, and solution architects who validate root cause and recommend remediation. Your team owns the environment, and where needed, Lumovy execution teams can implement the recommended changes directly.",
  },
  {
    q: "Can this help with an already distressed or underperforming environment?",
    a: "Yes. The same framework is used for turnaround engagements, stabilizing a high-risk D365 environment quickly rather than only validating a healthy one before go-live.",
  },
];

function PerfFAQ() {
  return (
    <section className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <FaqAccordion
          title="Frequently asked questions"
          intro="Coverage, AI usage, ongoing monitoring and ownership: the questions performance and platform leaders ask."
          items={PERF_FAQS.map((f) => [f.q, f.a] as [string, string])}
        />
      </div>
    </section>
  );
}

/* ─────────────────────────────  9. FINAL CTA  ───────────────────────────── */
function PerfClosingCTA() {
  return (
    <FinalCtaSection
      id="contact"
      title="See PerfLens365 Against Your Own Environment"
      subtitle="Book a walkthrough and we will show you how the engagement maps to your Dynamics 365 architecture and your next release or peak trading period."
      primary={{ label: "See the Accelerator Demo", href: "#contact", icon: true }}
      secondary={{ label: "Talk to a Performance Engineer", href: "#contact" }}
    />
  );
}
