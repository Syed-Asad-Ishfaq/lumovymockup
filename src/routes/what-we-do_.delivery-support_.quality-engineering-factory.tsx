import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Calendar,
  Check,
  ArrowUpRight,
  Bot,
  ClipboardCheck,
  Settings2,
  Gauge,
  BadgeCheck,
  Target,
  Sparkles,
  LifeBuoy,
  Compass,
  Link2,
  Rocket,
  TrendingUp,
  Workflow,
  Boxes,
  Cpu,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  Nav,
  Footer,
  CaseStudyCard,
  FaqAccordion,
  FinalCtaSection,
} from "./index";
import mafLogo from "@/assets/logos/majid-al-futtaim.png";
import mafCaseImg from "@/assets/case-studies/majid-al-futtaim.jpg";
import cavendersLogo from "@/assets/logos/cavenders.png";
import cavendersCaseImg from "@/assets/case-studies/cavenders.jpg";
import mattressFirmLogo from "@/assets/logos/mattress-firm.png";
import mattressFirmCaseImg from "@/assets/case-studies/mattress-firm.jpg";
import implementationImg from "@/assets/services/implementation.jpg";
import engineeringImg from "@/assets/services/engineering.jpg";
import consultingImg from "@/assets/services/consulting.jpg";
import supportImg from "@/assets/services/support.jpg";

export const Route = createFileRoute("/what-we-do_/delivery-support_/quality-engineering-factory")({
  component: QualityEngineeringPage,
  head: () => ({
    meta: [
      { title: "Quality Engineering Services | Lumovy" },
      {
        name: "description",
        content:
          "Lumovy's quality engineering services combine test automation, performance engineering, and enterprise application expertise to reduce repetitive testing, identify risks earlier, and support confident go-live decisions.",
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

function QualityEngineeringPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <QeHero />
      <QeProblem />
      <QeSuite />
      <QeLeapworkProcess />
      <QePerformance />
      <QeWhy />
      <QeProof />
      <QeCaseStudies />
      <QeDeliveryModels />
      <QeFAQ />
      <QeTechnology />
      <QeFinalCTA />
      <Footer />
    </div>
  );
}

/* ─────────────────────────────  1. HERO (dark)  ───────────────────────────── */
const PROOF_BAR = [
  "Leapwork Partner",
  "Enterprise Test Automation",
  "Performance Engineering",
  "680+ Automated Tests Executed Daily",
];

function QeHero() {
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
            Services / Quality Engineering
          </span>
          <h1 className="hero-content-in mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]" style={{ animationDelay: "80ms" }}>
            Quality Engineering Services for Business-Critical Applications
          </h1>
          <p className="hero-content-in mt-6 max-w-2xl text-base leading-relaxed text-white/70" style={{ animationDelay: "160ms" }}>
            Every release moves your business forward. Quality keeps it running. Lumovy helps you
            validate the business processes behind every release. Our quality engineering
            services combine test automation, performance engineering, and enterprise
            application expertise to reduce repetitive testing, identify risks earlier, and
            support confident go-live decisions.
          </p>
          <p className="hero-content-in mt-4 max-w-2xl text-base leading-relaxed text-white/70" style={{ animationDelay: "200ms" }}>
            From Dynamics 365 and Salesforce to Oracle, SAP, and connected applications, we build
            coverage around the workflows your business depends on.
          </p>
          <div className="hero-content-in mt-9 flex flex-wrap gap-3" style={{ animationDelay: "240ms" }}>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--navy-deep)] transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30"
            >
              <Calendar className="h-4 w-4" />
              Plan My Quality Assessment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#case-studies"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Explore Client Results
            </a>
          </div>
        </div>
      </div>

      {/* Proof bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="container-enterprise grid grid-cols-2 gap-x-8 gap-y-5 py-8 sm:grid-cols-4">
          {PROOF_BAR.map((t) => (
            <span key={t} className="text-sm font-bold uppercase leading-tight tracking-wide text-white/45">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  2. CONNECTED BUSINESS PROCESSES  ───────────────────────────── */
const PROBLEMS = [
  {
    icon: Workflow,
    title: "Protect Critical Operations",
    body: "Prioritize workflows where failure affects revenue, customers, and daily operations. An order can pass checkout and still fail in the warehouse.",
  },
  {
    icon: Boxes,
    title: "Reduce Repetitive Testing",
    body: "Automate repeatable checks so your business experts can focus on new functionality and exceptions instead of retesting what already works.",
  },
  {
    icon: Gauge,
    title: "Make Release Readiness Visible",
    body: "Bring coverage, defects, and performance findings together to help teams decide what is ready and what needs attention before go-live.",
  },
];

function QeProblem() {
  return (
    <section className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <div className="max-w-3xl">
          <p className="eyebrow">Overview</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Your Applications Are Connected. Your Testing Should Be Too.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-[var(--blue-gray)]">
            An order can pass checkout and still fail in the warehouse. A return can complete on
            screen without updating inventory. A release can pass functional checks and struggle
            under peak demand. Lumovy tests across those boundaries by following transactions,
            validating integrations, and checking downstream outcomes.
          </p>
        </div>
      </div>

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
                <h3 className="mt-6 text-xl font-semibold leading-snug text-[var(--navy-deep)]">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--blue-gray)]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  3. SERVICES (Transformation-Suite pattern)  ───────────────────────────── */
const SUITE_INCLUDED: { label: string; image: string }[] = [
  { label: "Continuous test automation with maintainable, reusable regression coverage", image: engineeringImg },
  { label: "End-to-end application and integration testing across ERP, CRM, and commerce", image: implementationImg },
  { label: "Performance engineering and diagnostics using Lumovy's proprietary framework", image: consultingImg },
  { label: "AI assisted test engineering with defined validation and review controls", image: supportImg },
  { label: "Managed quality engineering with release execution and coverage expansion", image: engineeringImg },
];
const SUITE_EXTENSIONS = [
  "Leapwork visual automation",
  "Playwright-based web & API testing",
  "D365 Commerce reusable test assets",
  "Azure DevOps integration",
  "Unattended cloud execution",
  "Test-data generation",
];
const SUITE_INTERVAL = 6000;

function QeSuite() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const { ref, shown } = useReveal<HTMLDivElement>();

  useEffect(() => {
    if (!shown || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => setActive((a) => (a + 1) % SUITE_INCLUDED.length), SUITE_INTERVAL);
    return () => clearTimeout(id);
  }, [active, shown, paused]);

  return (
    <section id="suite" className="relative overflow-hidden bg-[var(--blue-light)]/30 py-28">
      <div aria-hidden className="mesh-blobs-light opacity-50" />
      <div className="container-enterprise relative">
        <div className="max-w-3xl">
          <p className="eyebrow">Services</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Test Automation and Quality Engineering Services
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-[var(--blue-gray)]">
            Five connected capabilities that bring reusable regression coverage, cross-system
            validation, performance diagnostics, and sustainable ownership to the applications
            your business depends on.
          </p>
        </div>

        <div ref={ref} className="mt-14 grid items-start gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Left: what's included — auto-cycling list */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--royal)]">
              What&apos;s included
            </span>
            <div className="mt-4" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
              {SUITE_INCLUDED.map((item, i) => {
                const isActive = active === i;
                return (
                  <button
                    key={item.label}
                    onClick={() => setActive(i)}
                    className="block w-full py-3.5 text-left"
                  >
                    <span className={"text-[15px] transition-colors duration-300 " + (isActive ? "font-semibold text-[var(--royal)]" : "font-normal text-[var(--navy-deep)]")}>
                      {item.label}
                    </span>
                    <span className="mt-2.5 block h-px w-full overflow-hidden bg-[var(--royal)]/12">
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

          {/* Right: synced image + extensions */}
          <div className="lg:sticky lg:top-24 lg:mt-10">
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
                Technology &amp; tooling
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
      </div>
    </section>
  );
}

/* ─────────────────────────────  4. LEAPWORK PARTNERSHIP & EARLY TESTING (animated)  ───────────────────────────── */
const LEAPWORK_STEPS = [
  { icon: Compass, title: "Plan & Prepare", body: "Identify critical workflows, define the test strategy, and establish environments, test data, access, and the Leapwork framework." },
  { icon: Wrench, title: "Build & Validate", body: "Develop and stabilize automated scenarios alongside delivery iterations. Reuse components and run available tests to identify issues earlier." },
  { icon: ShieldCheck, title: "Test & Release", body: "Use the accumulated regression suite during system integration testing, user acceptance testing, and release validation with evidence." },
  { icon: TrendingUp, title: "Maintain & Expand", body: "Keep the suite current through stabilization and updates. Extend coverage as new processes and applications are introduced." },
];
const D365_COMMERCE_SCENARIOS = [
  "Sales Ordering",
  "Product Information",
  "Fulfilment",
  "Payments",
  "Returns",
  "Inventory",
];

function QeLeapworkProcess() {
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
          <p className="eyebrow">Leapwork</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Quality at Speed with Leapwork and Lumovy
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-[var(--blue-gray)]">
            As a Leapwork partner, Lumovy combines visual test automation with deep knowledge of
            enterprise applications and business processes. Leapwork provides the automation
            platform. Lumovy brings the framework design, reusable assets, integration expertise,
            and delivery discipline to put it to work across your business. When regression
            testing accumulates near the end of delivery, defects have less time to be resolved,
            so we start testing earlier and build coverage with every iteration.
          </p>
        </div>
        <div className="relative mt-16">
          <div aria-hidden className="absolute left-0 right-0 top-7 hidden h-0.5 bg-[var(--blue-light)] lg:block" />
          <div aria-hidden className="absolute left-0 top-7 hidden h-0.5 bg-gradient-to-r from-[var(--royal)] via-[var(--azure)] to-[var(--cyan-soft)] lg:block" style={{ width: `${progress * 100}%`, transition: "width 0.1s linear" }} />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {LEAPWORK_STEPS.map((s, i) => {
              const reached = progress >= i / (LEAPWORK_STEPS.length - 1) - 0.02;
              return (
                <li key={s.title} className="relative">
                  <span className={"relative z-10 grid h-14 w-14 place-items-center rounded-full border transition-all duration-500 " + (reached ? "border-[var(--cyan-soft)] bg-[var(--royal)] text-white shadow-[0_0_26px_-4px_var(--cyan-soft)]" : "border-border bg-white text-[var(--royal)]")}>
                    <s.icon className="h-6 w-6" />
                  </span>
                  <div className="mt-4">
                    <div className="text-[11px] font-bold uppercase tracking-widest text-[var(--royal)]">Stage {i + 1}</div>
                    <h3 className="mt-1 text-lg font-semibold text-[var(--navy-deep)]">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--blue-gray)]">{s.body}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Reusable D365 Commerce scenarios */}
        <div className="mt-14 rounded-2xl border border-[var(--royal)]/10 bg-[var(--blue-light)]/30 p-8 lg:p-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--royal)]">
            Accelerate D365 Commerce testing with reusable scenarios
          </p>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-[var(--blue-gray)]">
            Lumovy&apos;s prebuilt D365 Commerce testing assets provide a starting point for
            coverage across sales ordering, product information management, fulfilment, payments,
            returns, and inventory management. We adapt these assets to your configurations,
            integrations, and business rules, then validate them in your environment. For
            suitable web and API testing needs, Lumovy also delivers Playwright-based automation.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {D365_COMMERCE_SCENARIOS.map((s) => (
              <span key={s} className="rounded-md bg-white px-3 py-1.5 text-xs font-medium text-[var(--navy-deep)] ring-1 ring-inset ring-[var(--royal)]/15">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  5. PERFORMANCE ENGINEERING (dark)  ───────────────────────────── */
const PERFORMANCE_POINTS = [
  { icon: Gauge, name: "Performance Scorecard", body: "Understand findings across the relevant application, integration, database, and infrastructure layers." },
  { icon: TrendingUp, name: "Realistic Workload Validation", body: "Assess response times, throughput, and errors against agreed business demand and operating conditions." },
  { icon: Target, name: "Prioritized Improvement Recommendations", body: "Identify bottlenecks and define practical steps to improve performance, capacity, and stability." },
  { icon: ShieldCheck, name: "Release Readiness Assessment", body: "Give business and technology leaders a clear view of performance results, remaining risks, and go-live considerations." },
];

function QePerformance() {
  return (
    <section className="hero-dark relative overflow-hidden py-28 text-white">
      <div aria-hidden className="hero-orbs opacity-50" />
      <div aria-hidden className="hero-grid" />
      <div className="container-enterprise relative z-10">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--cyan-soft)]">
            <Cpu className="h-3.5 w-3.5" /> Performance
          </span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Dynamics 365 Performance Engineering
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-white/70">
            Will your systems keep up when demand peaks? Busy trading periods, concurrent
            transactions, and intensive processing can expose weaknesses that functional testing
            alone will not reveal. Lumovy&apos;s proprietary performance engineering framework
            combines reusable testing assets, realistic workload simulation, monitoring, and
            expert diagnostics to identify where slowdowns originate and what to address first.
            Our approach can cover Dynamics 365 Finance &amp; Operations, Commerce, POS, Customer
            Engagement, Power Platform, and connected Azure services.
          </p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PERFORMANCE_POINTS.map((a) => (
            <div key={a.name} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors hover:border-[var(--cyan-soft)]/40 hover:bg-white/[0.07]">
              <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-[var(--cyan-soft)] transition-colors group-hover:bg-[var(--cyan-soft)] group-hover:text-[var(--navy-deep)]">
                <a.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold text-white">{a.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{a.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--navy-deep)] transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30"
          >
            <Calendar className="h-4 w-4" />
            Assess My D365 Performance
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  6. WHY LUMOVY  ───────────────────────────── */
const WHY = [
  { icon: BadgeCheck, title: "Visual Automation Backed by Enterprise Expertise", body: "As a Leapwork partner, Lumovy combines visual test automation with deep knowledge of enterprise applications and business processes across Dynamics 365, Salesforce, Oracle, and SAP." },
  { icon: Target, title: "Focused on Confident Go-Live Decisions", body: "Every engagement is designed to reduce repetitive testing, identify risks earlier, and give business and technology leaders the evidence they need to release with confidence." },
  { icon: Sparkles, title: "AI Applied with Review Gates", body: "We apply AI to test-case preparation, script generation, test-data creation, and failure analysis where it fits, validating generated outputs against requirements before relying on them." },
  { icon: LifeBuoy, title: "A Delivery Model That Fits Your Team", body: "Build and hand over, co-create alongside your people, or maintain and expand with Lumovy, so testing stays relevant as your applications and release priorities evolve." },
];

function QeWhy() {
  return (
    <section className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <div className="max-w-2xl">
          <p className="eyebrow">Why Lumovy</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Built by people who understand enterprise applications and the business behind them
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
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

/* ─────────────────────────────  7. PROOF  ───────────────────────────── */
function QeProof() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[var(--blue-light)]/40 py-28">
      <div aria-hidden className="mesh-blobs-light opacity-60" />
      <div className="container-enterprise relative">
        <div className="max-w-2xl">
          <p className="eyebrow">Proof</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Quality Engineering in Action
          </h2>
        </div>
        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[1.35fr_1fr]">
          <div className="flex min-h-[440px] flex-col justify-between rounded-xl border border-border bg-white p-8">
            <div>
              {mattressFirmLogo && (
                <img src={mattressFirmLogo} alt="Mattress Firm" className="max-h-8 w-auto object-contain" />
              )}
              <h3 className="mt-6 text-2xl font-semibold tracking-tight text-[var(--navy-deep)]">
                Daily Validation Across a Connected Retail Operation
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[var(--blue-gray)]">
                Lumovy established end-to-end automation spanning D365 Finance &amp; Operations,
                POS, e-commerce, warehouse management, and integrations. Coverage followed
                critical retail workflows from order creation through shipment and invoicing,
                bringing repeatable validation across a complex application landscape.
              </p>
            </div>
            <div>
              <div className="grid grid-cols-3 gap-3 border-t border-border pt-6">
                {[
                  ["87%", "Manual-effort savings"],
                  ["65%", "Cycle-time reduction"],
                  ["+60%", "New capabilities per release"],
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
                Talk to us about your outcomes
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          <figure className="relative overflow-hidden rounded-xl">
            <img src={mattressFirmCaseImg} alt="Mattress Firm quality engineering" className="absolute inset-0 h-full w-full object-cover object-top" />
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/45 to-transparent" />
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 backdrop-blur-[3px] [mask-image:linear-gradient(to_top,black_35%,transparent)]" />
            <figcaption className="relative z-10 flex h-full min-h-[440px] flex-col justify-end p-8">
              <div className="text-3xl font-bold tracking-tight text-white">680</div>
              <div className="mt-1 text-sm text-white/80">Automated tests executed daily</div>
              <blockquote className="mt-4 text-sm leading-relaxed text-white/90">
                &ldquo;Lumovy built repeatable validation across our entire retail application
                landscape, from order creation through shipment and invoicing.&rdquo;
              </blockquote>
              <div className="mt-4 border-t border-white/20 pt-3">
                <div className="text-sm font-semibold text-white">Quality Engineering Lead</div>
                <div className="text-xs text-white/70">Mattress Firm</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  8. CASE STUDIES  ───────────────────────────── */
const QE_CASE_STUDIES = [
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
];

function QeCaseStudies() {
  return (
    <section id="case-studies" className="relative overflow-hidden border-b border-border bg-white py-28">
      <div className="container-enterprise relative">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow">Client results</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
              Real engagements. Auditable outcomes
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--blue-gray)]">
              Vuori delivered 180+ automated tests in 10 weeks. Commercial Bank Qatar automated
              2,376 test cases, saved 6,000 manual hours annually, and lifted coverage from 30% to
              65%. Microsoft supported 10+ releases with 300+ Playwright scripts and a 70%
              reduction in test-cycle time. Results reflect individual engagements and vary by
              scope and application landscape.
            </p>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--royal)]">
            View more
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {QE_CASE_STUDIES.map((c) => (
            <CaseStudyCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  9. DELIVERY MODELS  ───────────────────────────── */
const DELIVERY_MODELS = [
  {
    icon: Rocket,
    name: "Build & Hand Over",
    body: "We establish the framework, deliver agreed coverage, and transition ownership with documentation and focused training.",
  },
  {
    icon: Users,
    name: "Co-create",
    body: "We develop automation alongside your people, combining delivery with practical knowledge transfer.",
  },
  {
    icon: Settings2,
    name: "Maintain & Expand",
    body: "We provide ongoing execution support, maintenance, and coverage growth as your applications and release priorities evolve.",
  },
];

function QeDeliveryModels() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[var(--blue-light)]/40 py-28">
      <div aria-hidden className="mesh-blobs-light opacity-60" />
      <div className="container-enterprise relative">
        <div className="max-w-2xl">
          <p className="eyebrow">Delivery models</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            A Delivery Model That Fits Your Team
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-[var(--blue-gray)]">
            Across each model, we agree on scope, success criteria, responsibilities, and
            reporting from the start.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {DELIVERY_MODELS.map((a) => (
            <div key={a.name} className="card-lift flex flex-col rounded-xl border border-border bg-white p-7">
              <span className="inline-grid h-11 w-11 place-items-center rounded-2xl bg-[var(--blue-light)] text-[var(--royal)] ring-1 ring-inset ring-[var(--royal)]/20">
                <a.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-[var(--navy-deep)]">{a.name}</h3>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-[var(--blue-gray)]">{a.body}</p>
            </div>
          ))}
        </div>

        {/* Guidance strip */}
        <div className="mt-14 overflow-hidden rounded-2xl bg-[var(--navy)]">
          <div className="flex flex-col items-start justify-between gap-6 px-8 py-10 sm:flex-row sm:items-center sm:px-12">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                Not sure where to begin?
              </h3>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/70">
                Bring Lumovy your upcoming changes, testing challenges, and performance concerns
                and we&apos;ll recommend the right assessment scope.
              </p>
            </div>
            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--navy-deep)] transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              <Calendar className="h-4 w-4" />
              Plan My Quality Assessment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  10. FAQ  ───────────────────────────── */
const QE_FAQS: [string, string][] = [
  [
    "What are quality engineering services?",
    "Quality engineering services help teams build and maintain software quality throughout delivery. They include test strategy, functional and regression testing, automation, integration validation, performance testing, and ongoing maintenance. Lumovy applies these services to enterprise applications and the business processes connecting them.",
  ],
  [
    "What does Lumovy's Dynamics 365 testing cover?",
    "Depending on the engagement, coverage can include Finance & Operations, Commerce, POS, Customer Engagement, and connected applications. We validate business workflows, customizations, integrations, and regression scenarios, with performance engineering supported by Lumovy's proprietary framework.",
  ],
  [
    "Can you improve our existing automation?",
    "Yes. We assess coverage, unreliable tests, maintenance effort, and pipeline integration, then recommend what to retain, improve, or extend.",
  ],
  [
    "Does automation replace user acceptance testing?",
    "Business users still play an essential role in confirming that a solution meets operational needs. Automation handles repeatable checks and provides evidence that can help users focus acceptance testing on changes, exceptions, and business suitability.",
  ],
  [
    "How do you decide what to automate?",
    "We consider business impact, repeatability, execution frequency, application stability, and maintenance effort. This helps prioritize useful coverage while retaining manual testing where human judgment adds value.",
  ],
  [
    "Can our internal team own the tests?",
    "Yes. We offer build-and-handover, collaborative delivery, and ongoing support models, with documentation and enablement aligned to your team's responsibilities.",
  ],
];

function QeFAQ() {
  return (
    <section className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <FaqAccordion
          title="Quality Engineering FAQs"
          intro="Still have questions about how our quality engineering services fit your applications? Book a call and we'll walk you through it."
          items={QE_FAQS}
        />
      </div>
    </section>
  );
}

/* ─────────────────────────────  11. TESTING TECHNOLOGY LANDSCAPE  ───────────────────────────── */
const TECHNOLOGIES = ["Leapwork", "Playwright", "Selenium", "SoapUI", "Microsoft RSAT"];

function QeTechnology() {
  return (
    <section className="bg-white py-20">
      <div className="container-enterprise">
        <div className="max-w-2xl">
          <p className="eyebrow">Technology</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            The Right Testing Tools for Your Application Landscape
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-[var(--blue-gray)]">
            Lumovy works across testing technologies to build an approach that fits your
            applications, release processes, and team capabilities. We help you strengthen
            existing automation and select tools for new coverage, with maintainability and
            long-term ownership in mind.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          {TECHNOLOGIES.map((t) => (
            <span key={t} className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-6 py-4 text-sm font-semibold text-[var(--navy-deep)]">
              <ClipboardCheck className="h-4 w-4 text-[var(--royal)]" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  12. FINAL CTA  ───────────────────────────── */
function QeFinalCTA() {
  return (
    <FinalCtaSection
      id="contact"
      title="What Must Not Break in Your Next Release?"
      subtitle="Start with the workflows your business depends on. Bring Lumovy your upcoming changes, testing challenges, and performance concerns. We'll help identify the coverage gaps, automation priorities, and assessment scope that should shape your next step."
      microcopy="Let's focus on your critical workflows, current coverage, and next release."
      primary={{ label: "Plan My Quality Assessment", href: "#contact", icon: true }}
      secondary={{ label: "Explore Client Results", href: "#case-studies" }}
    />
  );
}
