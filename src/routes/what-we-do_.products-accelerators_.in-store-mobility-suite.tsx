import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Calendar,
  Download,
  Truck,
  Building2,
  Tag,
  Trash2,
  ClipboardList,
  ClipboardCheck,
  ScanLine,
  ShieldCheck,
  Layers,
  Boxes,
  Users,
  Database,
  Rocket,
  Search,
  Settings,
  FlaskConical,
} from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Nav, Footer, FaqAccordion, FinalCtaSection } from "./index";
import handheldImg from "@/assets/products/hypermarket-handheld.jpg";
import testimonialImg from "@/assets/testimonial.webp";

export const Route = createFileRoute(
  "/what-we-do_/products-accelerators_/in-store-mobility-suite",
)({
  component: InStoreMobilityPage,
  head: () => ({
    meta: [
      { title: "In-Store Mobility Suite | Lumovy" },
      {
        name: "description",
        content:
          "Lumovy's In-Store Mobility Suite puts ordering, shelf labelling, write-offs and counting into five integrated Power Apps, natively connected to Dynamics 365 Finance and Operations, on the handheld device your associates already carry.",
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

function InStoreMobilityPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <SuiteHero />
      <SuiteTrustAnchor />
      <SuiteProblem />
      <SuiteCapabilities />
      <SuiteIntegration />
      <SuiteTimeline />
      <SuiteProofKit />
      <SuiteFAQ />
      <SuiteClosingCTA />
      <Footer />
    </div>
  );
}

/* ─────────────────────────────  01. HERO  ───────────────────────────── */
function SuiteHero() {
  return (
    <section className="hero-blue-static overflow-hidden">
      <div aria-hidden className="hero-grid" />
      <div className="container-enterprise relative z-10 py-24 lg:py-28">
        <div className="max-w-3xl">
          <span className="hero-content-in text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--cyan-soft)]">
            In-Store Mobility Suite
          </span>
          <h1 className="hero-content-in mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]" style={{ animationDelay: "80ms" }}>
            Run the Store From the Shop Floor
          </h1>
          <p className="hero-content-in mt-6 max-w-2xl text-base leading-relaxed text-white/70" style={{ animationDelay: "160ms" }}>
            Lumovy's In-Store Mobility Suite puts ordering, shelf labelling, write-offs and
            counting into five integrated Power Apps, natively connected to Dynamics 365
            Finance and Operations, on the handheld device your associates already carry.
          </p>
          <div className="hero-content-in mt-9 flex flex-wrap gap-3" style={{ animationDelay: "240ms" }}>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--navy-deep)] transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30"
            >
              <Calendar className="h-4 w-4" />
              Book a Suite Walkthrough
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  02. TRUST ANCHOR  ───────────────────────────── */
const TRUST_BADGES = [
  { icon: Layers, label: "5 Integrated Apps" },
  { icon: ShieldCheck, label: "1 Secure Landing Page" },
  { icon: Boxes, label: "D365 F&O Native Integration" },
];

function SuiteTrustAnchor() {
  return (
    <section className="bg-white py-28">
      <div className="container-enterprise">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Built on Power Apps</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Integrated With Dynamics 365 Finance and Operations
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[var(--blue-gray)]">
            Five integrated apps behind one secure landing page, natively connected to D365
            F&amp;O, so store teams run ordering, labelling, write-offs and counting from a
            handheld device with accuracy, speed and compliance.
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
            Download the In-Store Mobility Suite Overview
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  03. THE PROBLEM IT SOLVES  ───────────────────────────── */
const PROBLEM_POINTS = [
  {
    title: "Replenishment that doesn't wait for a shift to end",
    body: "Orders raised from the shop floor in real time, instead of at the end of a shift or from a back-office terminal.",
  },
  {
    title: "Fewer errors reaching the ERP",
    body: "Validation at the point of entry catches incorrect quantities and duplicate orders before they land in D365.",
  },
  {
    title: "Prices that match what's on the shelf",
    body: "Shelf labels generated from live price and promotion data, closing the gap between the system and the shop floor.",
  },
  {
    title: "Stock adjustments recorded as they happen",
    body: "Write-offs captured and posted in real time, instead of informally or after the fact.",
  },
  {
    title: "Counting without the transcription step",
    body: "Counts captured directly on the handheld against live on-hand data, instead of on a count sheet transcribed later.",
  },
  {
    title: "Less dependency on head office",
    body: "Store teams complete routine tasks themselves, instead of escalating and waiting on back-office capacity.",
  },
];

function SuiteProblem() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-[var(--blue-light)]/40 py-28">
      <div aria-hidden className="mesh-blobs-light opacity-60" />
      <div className="container-enterprise relative">
        <div className="max-w-2xl">
          <p className="eyebrow">The problem it solves</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Your Store Systems Stop at the Back Office
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-[var(--blue-gray)]">
            Store-level execution is where retail margin is won or lost, yet it's often the least
            digitized part of the estate. The tasks that decide shelf availability, price accuracy
            and stock integrity are still run on paper, spreadsheets or a shared back-office PC.
            The In-Store Mobility Suite moves them onto the device your associates already carry.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEM_POINTS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 90}>
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

/* ─────────────────────────────  04. CORE CAPABILITIES (5 apps, centerpiece)  ───────────────────────────── */
const APPS = [
  {
    icon: Truck,
    name: "DC / Warehouse Store Ordering",
    body: "Create and submit transfer orders from the distribution centre, with smart product filtering, barcode scanning and auto-suggested quantities based on sales history and on-hand stock.",
  },
  {
    icon: Building2,
    name: "Direct Store Ordering",
    body: "Raise purchase orders straight to vendors, with item and vendor data pulled live from D365 F&O and auto-suggested quantities from past sales and stock levels.",
  },
  {
    icon: Tag,
    name: "Shelf Label",
    body: "Generate and print brand-compliant labels in multiple formats and sizes, using real-time product, price and promotion data, centrally or store-by-store.",
  },
  {
    icon: Trash2,
    name: "Stock Write-Off",
    body: "Record damaged, expired or unsellable stock against predefined reason codes, with a preview before submission and automatic write-off journals in D365 F&O.",
  },
  {
    icon: ClipboardList,
    name: "Counting",
    body: "Run scheduled or ad-hoc cycle counts on the shop floor, capturing quantities against live on-hand data and posting results into D365 F&O for variance review.",
  },
];

const ENTRY_POINT = {
  icon: ScanLine,
  name: "Single Secure Entry Point",
  body: "One landing page, badge-scan identification, and role and store-based access, so associates learn one navigation pattern across all five apps.",
};

function SuiteCapabilities() {
  const items = [...APPS, ENTRY_POINT];
  return (
    <section id="capabilities" className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <div className="max-w-2xl">
          <p className="eyebrow">Core capabilities</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Five Apps. One Landing Page. One Login Scan.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--blue-gray)]">
            The In-Store Mobility Suite puts ordering, labelling, write-offs and counting on the
            handheld device your associates already carry, behind one secure entry point.
          </p>
        </div>
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={handheldImg}
              alt="Store associate using a handheld device on the shop floor"
              loading="lazy"
              className="h-full max-h-[560px] w-full object-cover"
            />
          </div>
          <ul className="space-y-5">
            {items.map((c, i) => (
              <Reveal key={c.name} delay={i * 70}>
                <li className="flex gap-4 rounded-xl border border-border bg-white p-5 card-lift">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[var(--blue-light)] text-[var(--royal)] ring-1 ring-inset ring-[var(--royal)]/20">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-[15px] font-semibold text-[var(--navy-deep)]">{c.name}</h3>
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

/* ─────────────────────────────  05. HOW IT INTEGRATES  ───────────────────────────── */
const INTEGRATION_LAYERS = [
  { icon: Users, title: "Store Associate", items: "Badge Scan · Product Search · Scan or Manual Entry · Preview Before Submit", accent: false },
  { icon: Boxes, title: "In-Store Mobility Suite", items: "DC Ordering · Direct Ordering · Shelf Label · Write-Off · Counting", accent: true },
  { icon: Database, title: "Dynamics 365 Finance and Operations", items: "Products · Prices · Promotions · On-Hand Stock · Vendors · Storage Assignments", accent: false },
  { icon: ClipboardCheck, title: "Records Created in D365 F&O", items: "Transfer Orders · Purchase Orders · Write-Off Journals · Count Results, With Full Audit Trail", accent: false },
];

function SuiteIntegration() {
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
            One Landing Page. Every Transaction, Connected to D365.
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/70">
            Every transaction raised on the shop floor flows through the suite into Dynamics 365
            Finance and Operations, with the ERP as the single source of truth throughout.
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
          Validation and business rules are applied before anything is submitted, and approval
          hierarchies configured in D365 F&amp;O are respected, not bypassed.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────  06. TIME TO LAUNCH  ───────────────────────────── */
const PHASES = [
  {
    icon: Search,
    title: "Discover",
    body: "Map current store processes, devices, D365 F&O configuration and integration points.",
    deliverables: "Process and fit-gap assessment, app scope and rollout sequence.",
  },
  {
    icon: Settings,
    title: "Configure",
    body: "Set up the landing page, badge scanning, reason codes, label formats and approval hierarchies.",
    deliverables: "Configured suite in a test environment, integration validated against D365 F&O.",
  },
  {
    icon: FlaskConical,
    title: "Pilot",
    body: "Run the suite in a pilot store or cluster with real transactions and real associates.",
    deliverables: "Pilot results and adoption feedback, refined configuration and training material.",
  },
  {
    icon: Rocket,
    title: "Roll Out and Sustain",
    body: "Deploy across the estate, train store teams and hand over support.",
    deliverables: "Estate-wide deployment, training pack, support model and extension roadmap.",
  },
];

function SuiteTimeline() {
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
            Deployed in Waves. Value From the First Store.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-[var(--blue-gray)]">
            The suite is rolled out in waves so stores see value early and adoption is proven
            before the estate-wide rollout.
          </p>
        </div>
        <div className="relative mt-16">
          <div aria-hidden className="absolute left-0 right-0 top-7 hidden h-0.5 bg-[var(--blue-light)] lg:block" />
          <div aria-hidden className="absolute left-0 top-7 hidden h-0.5 bg-gradient-to-r from-[var(--royal)] via-[var(--azure)] to-[var(--cyan-soft)] lg:block" style={{ width: `${progress * 100}%`, transition: "width 0.1s linear" }} />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {PHASES.map((s, i) => {
              const reached = progress >= i / (PHASES.length - 1) - 0.02;
              return (
                <li key={s.title} className="relative">
                  <span className={"relative z-10 grid h-14 w-14 place-items-center rounded-full border transition-all duration-500 " + (reached ? "border-[var(--cyan-soft)] bg-[var(--royal)] text-white shadow-[0_0_26px_-4px_var(--cyan-soft)]" : "border-border bg-white text-[var(--royal)]")}>
                    <s.icon className="h-6 w-6" />
                  </span>
                  <div className="mt-4">
                    <div className="text-[11px] font-bold uppercase tracking-widest text-[var(--royal)]">Phase {i + 1}</div>
                    <h3 className="mt-1 text-lg font-semibold text-[var(--navy-deep)]">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--blue-gray)]">{s.body}</p>
                    <p className="mt-3 border-t border-border pt-3 text-xs leading-relaxed text-[var(--blue-gray)]">
                      <span className="font-semibold text-[var(--navy-deep)]">Deliverables: </span>
                      {s.deliverables}
                    </p>
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

/* ─────────────────────────────  07. PROOF KIT  ───────────────────────────── */
function SuiteProofKit() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[var(--blue-light)]/40 py-28">
      <div aria-hidden className="mesh-blobs-light opacity-60" />
      <div className="container-enterprise relative">
        <div className="max-w-2xl">
          <p className="eyebrow">Proof kit</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            See What Changes When the Store Stops Reporting and Starts Transacting
          </h2>
        </div>
        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[1.35fr_1fr]">
          <div className="flex min-h-[440px] flex-col justify-between rounded-xl border border-border bg-white p-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--royal)]">
                The Challenge
              </span>
              <p className="mt-3 text-sm leading-relaxed text-[var(--blue-gray)]">
                Store-level tasks that decide shelf availability, price accuracy and stock
                integrity are still run on paper, spreadsheets or a shared back-office terminal,
                creating delays, errors and disconnects from the ERP.
              </p>
              <span className="mt-6 block text-xs font-semibold uppercase tracking-widest text-[var(--royal)]">
                The Lumovy Approach
              </span>
              <p className="mt-3 text-sm leading-relaxed text-[var(--blue-gray)]">
                Five integrated Power Apps behind one secure landing page, natively connected to
                D365 F&amp;O, moving ordering, labelling, write-offs and counting onto the handheld
                device.
              </p>
            </div>
            <div>
              <div className="grid grid-cols-3 gap-3 border-t border-border pt-6">
                {[
                  ["Efficiency", "Paper tasks become guided digital workflows"],
                  ["Accuracy", "Stock and price stay correct at the source"],
                  ["Control", "Rules and approvals enforced with an audit trail"],
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
                Talk to us about the suite
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          {/* Photo + colorless glass-blur scrim */}
          <figure className="relative overflow-hidden rounded-xl">
            <img src={testimonialImg} alt="Store team member on the shop floor" className="absolute inset-0 h-full w-full object-cover object-top" />
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/45 to-transparent" />
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 backdrop-blur-[3px] [mask-image:linear-gradient(to_top,black_35%,transparent)]" />
            <figcaption className="relative z-10 flex h-full min-h-[440px] flex-col justify-end p-8">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur">
                <ShieldCheck className="h-3.5 w-3.5" />
                Store-ready, device by device
              </span>
              <div className="mt-4 text-3xl font-bold tracking-tight text-white">Transacting</div>
              <div className="mt-1 text-sm text-white/80">Ordering, labelling, write-offs and counting, one handheld</div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  08. FAQ  ───────────────────────────── */
const FAQS = [
  {
    q: "Do we have to deploy all five apps?",
    a: "No. Each app is independently deployable and delivers value on its own. Most customers start with the app addressing their sharpest pain, usually ordering or write-offs, and add the rest in waves.",
  },
  {
    q: "What devices does the suite run on?",
    a: "The apps are built in Power Apps for handheld devices used on the shop floor, and run on the standard Power Apps mobile client. Barcode scanning is used throughout, with manual entry always available.",
  },
  {
    q: "How does it integrate with Dynamics 365 Finance and Operations?",
    a: "Natively. The apps read live master and transactional data, products, prices, promotions, on-hand stock, vendors and storage assignments, and write back transfer orders, purchase orders, write-off journals and counts. D365 F&O remains the single source of truth.",
  },
  {
    q: "Will store associates need training?",
    a: "Very little. One landing page and a consistent scan-first interaction model across all five apps means an associate who can use one can use the others. Training material and a pilot-based adoption approach are part of the engagement.",
  },
  {
    q: "How do we control who can do what?",
    a: "Access follows the user's role and store assignment. Badge scanning identifies the user on shared devices, and the approval and fulfilment hierarchies configured in D365 F&O are enforced by the apps.",
  },
  {
    q: "Can it be extended to other store processes?",
    a: "Yes. The same Power Platform foundation extends to returns, transfers, demand forecasting and other store workflows without a new platform decision.",
  },
  {
    q: "Does it work for a multi-store, multi-region estate?",
    a: "Yes. Product filtering, label formats, reason codes and workflows are configurable by store, and the shelf label app is built specifically for multi-store, multi-region in store operations.",
  },
];

function SuiteFAQ() {
  return (
    <section className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <FaqAccordion
          title="Frequently asked questions"
          intro="Deployment, devices, integration and access: the questions retail IT leaders ask about the In-Store Mobility Suite."
          items={FAQS.map((f) => [f.q, f.a] as [string, string])}
        />
      </div>
    </section>
  );
}

/* ─────────────────────────────  09. FINAL CTA  ───────────────────────────── */
function SuiteClosingCTA() {
  return (
    <FinalCtaSection
      id="contact"
      title="See the Suite on a Handheld"
      subtitle="We'll walk the In-Store Mobility Suite through your own store processes and Dynamics 365 Finance and Operations configuration, and agree which app to deploy first."
      primary={{ label: "Book a Suite Walkthrough", href: "#contact", icon: true }}
      secondary={{ label: "Explore Products & Accelerators", href: "/what-we-do/products-accelerators" }}
      blueStatic
    />
  );
}
