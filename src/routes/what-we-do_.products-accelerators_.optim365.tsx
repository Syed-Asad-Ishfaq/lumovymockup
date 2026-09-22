import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Calendar,
  Download,
  Database,
  HardDrive,
  Gauge,
  Users,
  Search,
  PenTool,
  Cog,
  Repeat,
  CheckCircle2,
  TrendingDown,
  Layers,
} from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Nav, Footer, FaqAccordion, FinalCtaSection } from "./index";
import engineeringImg from "@/assets/services/engineering.jpg";
import testimonialImg from "@/assets/testimonial.webp";

export const Route = createFileRoute("/what-we-do_/products-accelerators_/optim365")({
  component: Optim365Page,
  head: () => ({
    meta: [
      { title: "Optim365 | Lumovy" },
      {
        name: "description",
        content:
          "Cut costs, boost performance and control licence spend. Lumovy's Optim365 brings Dynamics 365 optimization, database archiving and licence optimization into one accelerator for Finance, Supply Chain and Commerce.",
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
            name: f[0],
            acceptedAnswer: { "@type": "Answer", text: f[1] },
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

function Optim365Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <OptimHero />
      <OptimTrustAnchor />
      <OptimProblem />
      <OptimCapabilities />
      <OptimIntegration />
      <OptimLaunch />
      <OptimProofKit />
      <OptimFAQ />
      <OptimFinalCTA />
      <Footer />
    </div>
  );
}

/* ─────────────────────────────  1. HERO  ───────────────────────────── */
function OptimHero() {
  return (
    <section className="hero-blue-static overflow-hidden">
      <div aria-hidden className="hero-grid" />
      <div className="container-enterprise relative z-10 py-24 lg:py-28">
        <div className="max-w-3xl">
          <span className="hero-content-in text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--cyan-soft)]">
            Optim365
          </span>
          <h1 className="hero-content-in mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]" style={{ animationDelay: "80ms" }}>
            Make Your Dynamics 365 Platform Lean Again
          </h1>
          <p className="hero-content-in mt-6 max-w-2xl text-base leading-relaxed text-white/70" style={{ animationDelay: "160ms" }}>
            Cut costs, boost performance and control licence spend. Lumovy's Optim365 brings
            Dynamics 365 optimization, database archiving and licence optimization into one
            accelerator for Finance, Supply Chain and Commerce.
          </p>
          <div className="hero-content-in mt-9 flex flex-wrap gap-3" style={{ animationDelay: "240ms" }}>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--navy-deep)] transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30"
            >
              <Calendar className="h-4 w-4" />
              Book an Optim365 Assessment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              <Download className="h-4 w-4" />
              Download the Optim365 Overview
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  2. TRUST ANCHOR  ───────────────────────────── */
const TRUST_BADGES = [
  { icon: HardDrive, label: "30-50% Database Size Reduction" },
  { icon: Gauge, label: "30-40% Performance Gain" },
  { icon: TrendingDown, label: "30%+ Cost Savings" },
];

function OptimTrustAnchor() {
  return (
    <section className="bg-white py-28">
      <div className="container-enterprise">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Built on Microsoft-Native Capabilities</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            No Black-Box Tooling
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[var(--blue-gray)]">
            Optim365 is delivered through standard D365 archival, Dataverse, the Microsoft-managed
            data lake, Power BI and the License Usage Summary report, plus configurable batch jobs.
            There's no proprietary platform to license or maintain.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TRUST_BADGES.map((b) => (
            <div key={b.label} className="flex items-center gap-3 rounded-xl border border-border bg-white px-5 py-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[var(--blue-light)] text-[var(--royal)] ring-1 ring-inset ring-[var(--royal)]/20">
                <b.icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold leading-snug text-[var(--navy-deep)]">{b.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--royal)]"
          >
            <Download className="h-4 w-4" />
            Download the Optim365 Overview
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  3. THE PROBLEM IT SOLVES  ───────────────────────────── */
const PROBLEM_CAUSES = [
  {
    title: "Data accumulates faster than anyone notices",
    body: "General ledger entries, invoices, sales orders and inventory transactions grow daily and are almost never removed, and in retail, POS and Commerce volumes dominate the footprint.",
  },
  {
    title: "Operational residue never gets cleared",
    body: "Logs, staging tables, integration history and superseded journals persist long after their value has expired, inflating index sizes and slowing every scan that touches them.",
  },
  {
    title: "Batch jobs pile up over years",
    body: "Different teams add jobs incrementally, creating overlapping schedules and heavy processing running inside business hours, visible to users as slow inquiries and to finance as an extended close.",
  },
  {
    title: "Licence spend reflects yesterday's organisation",
    body: "Users leave, roles change, and inactive accounts stay assigned, so licence consumption tracks a historical headcount rather than the current one.",
  },
];

function OptimProblem() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-[var(--blue-light)]/40 py-28">
      <div aria-hidden className="mesh-blobs-light opacity-60" />
      <div className="container-enterprise relative">
        <div className="max-w-2xl">
          <p className="eyebrow">The problem it solves</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Your Platform Didn't Get Slower. It Got Heavier.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--blue-gray)]">
            Dynamics 365 environments rarely slow down because of bad implementation. They slow
            down because they succeed, years of transactions, batch jobs and unused licences
            quietly add weight.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEM_CAUSES.map((p, i) => (
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

/* ─────────────────────────────  4. CORE CAPABILITIES (with photo)  ───────────────────────────── */
const CAPABILITIES = [
  {
    icon: Database,
    title: "Data Archival & Lifecycle Management",
    body: "Policy-driven archival across Finance, SCM and Retail, separating active from historical data with continuous monitoring to prevent regrowth.",
  },
  {
    icon: HardDrive,
    title: "Database Cleanup & Footprint Reduction",
    body: "Removal of obsolete logs, journals and history tables, ranked by real table growth and usage, including POS offline database and Commerce transaction optimization.",
  },
  {
    icon: Cog,
    title: "Batch Job & Processing Optimization",
    body: "Rationalization of redundant and overlapping jobs, rescheduling away from business peak hours, and tuning of the jobs that determine how fast finance can close.",
  },
  {
    icon: Gauge,
    title: "System & Performance Optimization",
    body: "Query, index and execution plan improvements, targeted at real workload, with before-and-after benchmarking so gains are evidenced, not asserted.",
  },
  {
    icon: Users,
    title: "Licence Optimization & Security Governance",
    body: "Usage-based licence analysis, role rationalization, cleanup of inactive and non-AAD users, and ongoing monitoring for audit readiness.",
  },
];

function OptimCapabilities() {
  return (
    <section className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <div className="max-w-2xl">
          <p className="eyebrow">Core capabilities</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Five Disciplines, Optimized Together
          </h2>
        </div>
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={engineeringImg}
              alt="Engineers optimizing a Dynamics 365 platform"
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

/* ─────────────────────────────  5. HOW IT INTEGRATES (compounding flow)  ───────────────────────────── */
const INTEGRATION_STEPS = [
  { title: "Data & Batch", body: "Years of accumulated transactions and overlapping batch jobs inflate the database and slow every scan that touches it.", accent: false },
  { title: "Performance", body: "A larger, heavier database makes every query, batch job, backup and environment refresh slower, pushing period-close later.", accent: true },
  { title: "Licence & Governance", body: "Storage and licence costs rise on a base that no longer reflects the business, while inactive accounts stay assigned.", accent: false },
];

function OptimIntegration() {
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
            One Programme. Effects That Compound Each Other.
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/70">
            Optimizing any one of these in isolation delivers a fraction of the available benefit,
            which is why Optim365 treats them as one programme, not separate projects.
          </p>
        </div>

        <div className="mx-auto mt-14 flex max-w-2xl flex-col gap-3">
          {INTEGRATION_STEPS.map((s, i) => (
            <div key={s.title}>
              <div
                className={
                  "flex items-center gap-4 rounded-xl px-6 py-5 " +
                  (s.accent
                    ? "bg-[var(--royal)] ring-1 ring-[var(--cyan-soft)]/40"
                    : "border border-white/12 bg-white/[0.04]")
                }
              >
                <div>
                  <div className="text-base font-semibold text-white">{s.title}</div>
                  <div className="mt-0.5 text-xs text-white/60">{s.body}</div>
                </div>
              </div>
              {i < INTEGRATION_STEPS.length - 1 && (
                <div className="flex justify-center py-1.5">
                  <ArrowRight className="h-4 w-4 rotate-90 text-[var(--cyan-soft)]/60" />
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-white/60">
          Monitored continuously, so none of it regrows.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────  6. TIME TO LAUNCH (animated step timeline)  ───────────────────────────── */
const LAUNCH_STEPS = [
  {
    icon: Search,
    title: "Assess",
    body: "Baseline the environment, table growth, batch inventory, performance benchmarks, licence usage.",
    deliverable: "Optimization assessment report with quantified savings opportunity.",
  },
  {
    icon: PenTool,
    title: "Design",
    body: "Define retention and archival policy, cleanup scope, batch schedule and licence remediation plan.",
    deliverable: "Data lifecycle policy, remediation and rollout plan.",
  },
  {
    icon: Cog,
    title: "Execute",
    body: "Implement archival, cleanup, batch rationalization, performance tuning and licence remapping.",
    deliverable: "Configured jobs, optimized schedule, completed licence remediation.",
  },
  {
    icon: Repeat,
    title: "Sustain",
    body: "Continuous monitoring so the footprint, performance and licence position hold.",
    deliverable: "Power BI monitoring dashboards, governance model and periodic health check.",
  },
];

function OptimLaunch() {
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
            Delivered in Four Phases. Each One Keeps.
          </h2>
        </div>
        <div className="relative mt-16">
          <div aria-hidden className="absolute left-0 right-0 top-7 hidden h-0.5 bg-[var(--blue-light)] lg:block" />
          <div aria-hidden className="absolute left-0 top-7 hidden h-0.5 bg-gradient-to-r from-[var(--royal)] via-[var(--azure)] to-[var(--cyan-soft)] lg:block" style={{ width: `${progress * 100}%`, transition: "width 0.1s linear" }} />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {LAUNCH_STEPS.map((s, i) => {
              const reached = progress >= i / (LAUNCH_STEPS.length - 1) - 0.02;
              return (
                <li key={s.title} className="relative">
                  <span className={"relative z-10 grid h-14 w-14 place-items-center rounded-full border transition-all duration-500 " + (reached ? "border-[var(--cyan-soft)] bg-[var(--royal)] text-white shadow-[0_0_26px_-4px_var(--cyan-soft)]" : "border-border bg-white text-[var(--royal)]")}>
                    <s.icon className="h-6 w-6" />
                  </span>
                  <div className="mt-4">
                    <div className="text-[11px] font-bold uppercase tracking-widest text-[var(--royal)]">Phase {i + 1}</div>
                    <h3 className="mt-1 text-lg font-semibold text-[var(--navy-deep)]">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--blue-gray)]">{s.body}</p>
                    <p className="mt-1.5 text-xs font-medium text-[var(--royal)]">Deliverable: {s.deliverable}</p>
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
const CASE_STUDIES = [
  {
    tag: "Large retail customer",
    body: "Archived GL data (5 years), sales orders (3 years) and WIP transactions annually.",
    stats: [
      ["1.1 TB", "reduction"],
      ["35%", "query improvement"],
      ["$180K", "annual storage savings"],
    ],
  },
  {
    tag: "Specialty outdoor retailer",
    body: "Archived POS transactions and sales orders by store, cleaned up tables, deployed custom configurable batch jobs.",
    stats: [
      ["30%", "reduction in footprint"],
      ["Lower", "storage licence cost"],
      ["Faster", "data refresh to environments"],
    ],
  },
];

function OptimProofKit() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[var(--blue-light)]/40 py-28">
      <div aria-hidden className="mesh-blobs-light opacity-60" />
      <div className="container-enterprise relative">
        <div className="max-w-2xl">
          <p className="eyebrow">Proof kit</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            See What Changes When the Weight Comes Off
          </h2>
        </div>
        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[1.35fr_1fr]">
          <div className="flex min-h-[440px] flex-col justify-between rounded-xl border border-border bg-white p-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--royal)]">
                The Challenge
              </span>
              <p className="mt-3 text-sm leading-relaxed text-[var(--blue-gray)]">
                Years of accumulated data, batch sprawl and licence drift make Dynamics 365
                environments slower and more expensive to run, without anyone having made a single
                bad decision.
              </p>
              <span className="mt-6 block text-xs font-semibold uppercase tracking-widest text-[var(--royal)]">
                The Lumovy Approach
              </span>
              <p className="mt-3 text-sm leading-relaxed text-[var(--blue-gray)]">
                Optim365 addresses data, batch, performance and licensing as one integrated,
                policy-driven programme, delivered entirely through Microsoft-native capabilities.
              </p>
            </div>
            <div>
              <div className="grid grid-cols-3 gap-3 border-t border-border pt-6">
                {[
                  ["30-50%", "database size reduction"],
                  ["30-40%", "performance improvement"],
                  ["30%+", "cost savings"],
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
                Talk to us about your platform
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          {/* Photo + colorless glass-blur scrim */}
          <figure className="relative overflow-hidden rounded-xl">
            <img src={testimonialImg} alt="Dynamics 365 platform optimization leader" className="absolute inset-0 h-full w-full object-cover object-top" />
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/45 to-transparent" />
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 backdrop-blur-[3px] [mask-image:linear-gradient(to_top,black_35%,transparent)]" />
            <figcaption className="relative z-10 flex h-full min-h-[440px] flex-col justify-end p-8">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur">
                Leaner, by design
              </span>
              <div className="mt-4 text-3xl font-bold tracking-tight text-white">Leaner</div>
              <div className="mt-1 text-sm text-white/80">A platform sized for the business it runs today</div>
            </figcaption>
          </figure>
        </div>

        {/* Client case studies */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {CASE_STUDIES.map((c) => (
            <div key={c.tag} className="rounded-xl border border-border bg-white p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[var(--royal)] text-white">
                  <CheckCircle2 className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold tracking-tight text-[var(--navy-deep)]">{c.tag}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[var(--blue-gray)]">{c.body}</p>
              <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-6">
                {c.stats.map(([v, l]) => (
                  <div key={l} className="min-w-0">
                    <div className="text-[15px] font-bold leading-tight text-[var(--navy-deep)]">{v}</div>
                    <div className="mt-1 text-[11px] font-medium leading-tight text-[var(--blue-gray)]">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  8. FAQ  ───────────────────────────── */
const FAQS: [string, string][] = [
  [
    "Will archiving data mean we lose access to history?",
    "No. Archived data stays accessible through lightweight history tables, Dataverse and Power BI reporting. What changes is that history no longer sits in the live tables slowing everything down.",
  ],
  [
    "Is this a custom tool we then have to maintain?",
    "No. Optim365 runs on standard D365 archival, Dataverse, the Microsoft-managed data lake, Power BI and the License Usage Summary report. There's no proprietary platform to license.",
  ],
  [
    "How disruptive is the engagement to business operations?",
    "Cleanup and archival run as scheduled batch jobs outside business peak hours, and every change is validated in a non-production environment first. Most customers experience it as improved daytime performance, not disruption.",
  ],
  [
    "Can we do only the licensing audit?",
    "Yes. The licensing module is available standalone. Customers often start there since the saving is fastest to quantify, then extend into archival and performance.",
  ],
  [
    "How quickly do we see results?",
    "The assessment phase quantifies the opportunity within weeks. Storage, performance and licence savings begin appearing as soon as the first archival and remediation waves complete.",
  ],
  [
    "Does this help with compliance and audit?",
    "Directly. Policy-driven retention, GDPR-ready purge with audit trails, documented licence remediation and Power BI monitoring dashboards all strengthen audit readiness.",
  ],
  [
    "What if our database grows back?",
    "That's what the Sustain phase exists to prevent, retention policy, configurable cleanup jobs and monitoring dashboards keep growth inside agreed thresholds.",
  ],
];

function OptimFAQ() {
  return (
    <section className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <FaqAccordion
          title="Frequently asked questions"
          intro="Archival, disruption, licensing and compliance: the questions platform owners ask before starting."
          items={FAQS}
        />
      </div>
    </section>
  );
}

/* ─────────────────────────────  9. FINAL CTA  ───────────────────────────── */
function OptimFinalCTA() {
  return (
    <FinalCtaSection
      id="contact"
      title="Find Out What Your Platform Is Carrying"
      subtitle="Start with an Optim365 assessment and get a quantified storage, performance and licence savings opportunity before any change is made."
      microcopy="Connect with our experts and receive tailored recommendations within one business day."
      primary={{ label: "Book an Optim365 Assessment", href: "#contact", icon: true }}
      secondary={{ label: "Download the Optim365 Overview", href: "#contact" }}
      blueStatic
    />
  );
}
