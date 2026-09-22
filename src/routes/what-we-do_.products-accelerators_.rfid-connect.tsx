import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Calendar,
  ExternalLink,
  ShieldCheck,
  Database,
  ScanLine,
  Radio,
  Cpu,
  Server,
  Users,
  ClipboardList,
  Eye,
  FileCheck2,
  Link2,
  RefreshCw,
  TrendingUp,
  Layers,
} from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Nav, Footer, FaqAccordion, FinalCtaSection } from "./index";
import rfidScanImg from "@/assets/products/rfid-scan.jpg";
import rfidVisualsImg from "@/assets/products/rfid-visuals.jpg";

export const Route = createFileRoute("/what-we-do_/products-accelerators_/rfid-connect")({
  component: RfidConnectPage,
  head: () => ({
    meta: [
      { title: "Clarity RFID Connector | Lumovy" },
      {
        name: "description",
        content:
          "Connect RFID scanning with Microsoft Dynamics 365 Finance & Operations to automate inventory counting, reduce manual effort and give your teams a clearer view of what is actually on hand.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: RFID_FAQS.map(([q, a]) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
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

function RfidConnectPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <RfidHero />
      <RfidTrustAnchor />
      <RfidProblem />
      <RfidCapabilities />
      <RfidIntegration />
      <RfidLaunch />
      <RfidProofKit />
      <RfidFAQ />
      <RfidClosingCTA />
      <Footer />
    </div>
  );
}

/* ─────────────────────────────  01. HERO  ───────────────────────────── */
function RfidHero() {
  return (
    <section className="hero-blue-static overflow-hidden">
      <div aria-hidden className="hero-grid" />
      <div className="container-enterprise relative z-10 py-24 lg:py-28">
        <div className="max-w-3xl">
          <span className="hero-content-in text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--cyan-soft)]">
            Clarity RFID Connector
          </span>
          <h1 className="hero-content-in mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]" style={{ animationDelay: "80ms" }}>
            Turn RFID Data Into Inventory You Can Trust
          </h1>
          <p className="hero-content-in mt-6 max-w-2xl text-base leading-relaxed text-white/70" style={{ animationDelay: "160ms" }}>
            Connect RFID scanning with Microsoft Dynamics 365 Finance &amp; Operations to automate
            inventory counting, reduce manual effort and give your teams a clearer view of what is
            actually on hand.
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
              <ExternalLink className="h-4 w-4" />
              View on Microsoft Marketplace
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  02. TRUST ANCHOR  ───────────────────────────── */
const TRUST_BADGES = [
  { icon: ShieldCheck, label: "Microsoft Marketplace Listed" },
  { icon: Database, label: "Dynamics 365 Finance & Operations Integration" },
  { icon: ScanLine, label: "Built for Automated Inventory Counting" },
];

function RfidTrustAnchor() {
  return (
    <section className="bg-white py-28">
      <div className="container-enterprise">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Listed on Microsoft Marketplace</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Built on Microsoft, ready for your Dynamics 365 environment
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-[var(--blue-gray)]">
            Clarity RFID Connector by Lumovy connects RFID inventory scanning with Microsoft
            Dynamics 365 Finance &amp; Operations, allowing RFID counting results to flow into
            Dynamics 365 for inventory management.
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
        <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--royal)]"
          >
            View on Microsoft Marketplace
            <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  03. THE PROBLEM IT SOLVES  ───────────────────────────── */
const PROBLEM_PAIRS = [
  {
    title: "Automated inventory counting",
    body: "Automate inventory counting without relying on manual item-by-item scanning.",
  },
  {
    title: "RFID data in Dynamics 365",
    body: "Bring RFID data into Dynamics 365 so inventory records can be updated from actual counts.",
  },
  {
    title: "Less manual effort",
    body: "Reduce the effort behind physical inventory checks and make more frequent counting practical.",
  },
  {
    title: "Records closer to reality",
    body: "Keep operational and financial records closer to reality with better inventory visibility.",
  },
  {
    title: "Built for scale",
    body: "Handle high-volume RFID data without adding unnecessary complexity to your Dynamics 365 environment.",
  },
];

function RfidProblem() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-[var(--blue-light)]/40 py-28">
      <div aria-hidden className="mesh-blobs-light opacity-60" />
      <div className="container-enterprise relative">
        <div className="max-w-2xl">
          <p className="eyebrow">The problem it solves</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Still Counting Inventory One Scan at a Time?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--blue-gray)]">
            When inventory moves quickly, manual barcode scanning can make it difficult to keep
            physical stock and your ERP in sync. Teams spend time counting, reconciling and
            updating records, while operations continue moving around them. Clarity RFID Connector
            helps close that gap.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

/* ─────────────────────────────  04. CORE CAPABILITIES  ───────────────────────────── */
const CAPABILITIES = [
  { icon: ScanLine, title: "Automated Inventory Counting", body: "Use RFID scanning to capture inventory counts faster and with less manual intervention." },
  { icon: Eye, title: "Inventory Position Visibility", body: "Export products and current inventory-on-hand positions from Dynamics 365 to support the counting process." },
  { icon: ClipboardList, title: "Counting Journal Creation", body: "Turn RFID counting results into inventory counting journals in Dynamics 365 Finance & Operations, reducing the work required to update inventory records." },
  { icon: Radio, title: "Real-Time Asset Visibility", body: "Move towards more frequent, on-demand inventory visibility instead of relying entirely on periodic physical audits." },
  { icon: FileCheck2, title: "Fixed Asset Governance", body: "Keep operational asset information closer to the financial records that depend on it, helping teams maintain better control and visibility." },
  { icon: Server, title: "High-Volume Data Handling", body: "Process RFID data within a governed Dynamics 365 integration without putting unnecessary pressure on the core system." },
];

function RfidCapabilities() {
  return (
    <section className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <div className="max-w-2xl">
          <p className="eyebrow">Core capabilities</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            From RFID Scan to Dynamics 365
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--blue-gray)]">
            Clarity RFID Connector bridges RFID scanning and Microsoft Dynamics 365 Finance &amp;
            Operations, turning raw counting results into inventory records your finance and
            operations teams can trust.
          </p>
        </div>
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={rfidScanImg}
              alt="RFID scanner reading a tagged garment with live data overlays"
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

/* ─────────────────────────────  05. HOW IT INTEGRATES  ───────────────────────────── */
const INTEGRATION_LAYERS = [
  { icon: Radio, title: "RFID Readers", items: "Capture inventory data from the physical environment", accent: false },
  { icon: Cpu, title: "Clarity RFID Connector", items: "Receives and processes RFID counting results", accent: true },
  { icon: Database, title: "Microsoft Dynamics 365 Finance & Operations", items: "Matches inventory information and creates inventory counting journals", accent: false },
  { icon: Users, title: "Finance & Operations Teams", items: "Work with updated inventory records and clearer operational visibility", accent: false },
];

function RfidIntegration() {
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
            From Physical Inventory to a Dynamics 365 Transaction
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/70">
            The connector is designed to bridge the physical inventory environment with the
            Dynamics 365 system where inventory records are managed.
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
          The result is a connected inventory workflow that helps finance and operations teams
          trust what RFID tells them about physical stock.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────  06. TIME TO LAUNCH  ───────────────────────────── */
const LAUNCH_STEPS = [
  { icon: Link2, title: "Connect", body: "Bring your RFID environment into the Dynamics 365 workflow." },
  { icon: ScanLine, title: "Count", body: "Capture inventory positions without relying entirely on manual counting." },
  { icon: RefreshCw, title: "Update", body: "Create inventory counting journals from RFID results." },
  { icon: TrendingUp, title: "Scale", body: "Extend the approach as your inventory operations and visibility requirements grow." },
];

function RfidLaunch() {
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
            Start With Inventory Counting. Build From There.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--blue-gray)]">
            You don&apos;t need to rethink your entire Dynamics 365 environment to start getting
            more value from RFID. Clarity RFID Connector gives your team a focused way to connect
            RFID counting with Dynamics 365 Finance &amp; Operations and establish a more automated
            inventory workflow.
          </p>
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

/* ─────────────────────────────  07. PROOF KIT  ───────────────────────────── */
function RfidProofKit() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[var(--blue-light)]/40 py-28">
      <div aria-hidden className="mesh-blobs-light opacity-60" />
      <div className="container-enterprise relative">
        <div className="max-w-2xl">
          <p className="eyebrow">Proof kit</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            See What the Accelerator Brings Together
          </h2>
        </div>
        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[1.35fr_1fr]">
          <div className="flex min-h-[440px] flex-col justify-between rounded-xl border border-border bg-white p-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--royal)]">
                The Challenge
              </span>
              <p className="mt-3 text-sm leading-relaxed text-[var(--blue-gray)]">
                Manual inventory counting takes time and creates another point where physical
                stock and ERP records can fall out of sync.
              </p>
              <span className="mt-6 block text-xs font-semibold uppercase tracking-widest text-[var(--royal)]">
                The Lumovy Approach
              </span>
              <p className="mt-3 text-sm leading-relaxed text-[var(--blue-gray)]">
                Lumovy&apos;s Clarity RFID Connector connects RFID scanning with Dynamics 365
                Finance &amp; Operations, allowing products and inventory-on-hand positions to be
                exported and RFID counting results to be used to create inventory counting
                journals.
              </p>
            </div>
            <div>
              <div className="grid grid-cols-3 gap-3 border-t border-border pt-6">
                {[
                  ["Less manual counting", "Automate more of the counting process"],
                  ["Better inventory visibility", "More frequent, on-demand inventory checks"],
                  ["Cleaner ERP updates", "RFID results flow into Dynamics 365"],
                ].map(([v, l]) => (
                  <div key={l} className="min-w-0">
                    <div className="text-[15px] font-bold leading-tight text-[var(--navy-deep)]">{v}</div>
                    <div className="mt-1 text-[11px] font-medium leading-tight text-[var(--blue-gray)]">{l}</div>
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--royal)]"
              >
                Talk to us about your inventory workflow
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          {/* Photo + colorless glass-blur scrim */}
          <figure className="relative overflow-hidden rounded-xl">
            <img src={rfidVisualsImg} alt="RFID tagging, shelf scanning, security-gate detection and warehouse pallet verification" className="absolute inset-0 h-full w-full object-cover" />
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/45 to-transparent" />
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 backdrop-blur-[3px] [mask-image:linear-gradient(to_top,black_35%,transparent)]" />
            <figcaption className="relative z-10 flex h-full min-h-[440px] flex-col justify-end p-8">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur">
                <ShieldCheck className="h-3.5 w-3.5" />
                Better operational control
              </span>
              <div className="mt-4 text-3xl font-bold tracking-tight text-white">Trusted</div>
              <div className="mt-1 text-sm text-white/80">Physical stock and Dynamics 365, kept in sync</div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  08. FAQ  ───────────────────────────── */
const RFID_FAQS: [string, string][] = [
  [
    "What is Clarity RFID Connector?",
    "Clarity RFID Connector is a Lumovy solution that connects RFID-based inventory counting with Microsoft Dynamics 365 Finance & Operations. It is designed to automate inventory counting and make the resulting data usable within Dynamics 365.",
  ],
  [
    "What does the connector do?",
    "The connector can export products and inventory-on-hand positions from Dynamics 365 and create inventory counting journals based on RFID counting results.",
  ],
  [
    "Who is Clarity RFID Connector for?",
    "It is suited to businesses with high-volume inventory environments where manual counting creates operational effort, delays or gaps between physical inventory and ERP records.",
  ],
  [
    "Does it work with Microsoft Dynamics 365 Finance & Operations?",
    "Yes. The connector is specifically designed to integrate RFID inventory data with Microsoft Dynamics 365 Finance & Operations.",
  ],
  [
    "Does it replace RFID hardware?",
    "No. The connector acts as the bridge between the RFID counting environment and Dynamics 365. The RFID hardware and scanning setup remain part of the physical inventory environment.",
  ],
  [
    "Can RFID data be used to update inventory records?",
    "Yes. RFID counting results can be used to create inventory counting journals within Dynamics 365 Finance & Operations.",
  ],
  [
    "Is Clarity RFID Connector available on Microsoft Marketplace?",
    "Yes. Clarity RFID Connector is listed on Microsoft Marketplace by Lumovy Technology Solutions.",
  ],
  [
    "What does Lumovy bring to the implementation?",
    "Lumovy brings the Dynamics 365 integration expertise needed to connect the RFID workflow with the customer's existing Microsoft environment and turn the resulting data into a usable business process.",
  ],
];

function RfidFAQ() {
  return (
    <section className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <FaqAccordion
          title="Frequently asked questions"
          intro="What Clarity RFID Connector does, who it's for and how it fits alongside your existing RFID hardware and Dynamics 365 environment."
          items={RFID_FAQS}
        />
      </div>
    </section>
  );
}

/* ─────────────────────────────  09. FINAL CTA  ───────────────────────────── */
function RfidClosingCTA() {
  return (
    <FinalCtaSection
      id="contact"
      title="Stop Counting. Start Knowing."
      subtitle="Bring RFID into your Dynamics 365 environment and give your teams a faster, clearer way to understand what's actually in stock."
      primary={{ label: "See the Accelerator Demo", href: "#contact", icon: true }}
      secondary={{ label: "View on Microsoft Marketplace", href: "#contact" }}
      blueStatic
    />
  );
}
