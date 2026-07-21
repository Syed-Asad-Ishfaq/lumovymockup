import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  ArrowLeft,
  ExternalLink,
  CreditCard,
  Utensils,
  ScanLine,
  ShoppingCart,
  Search,
  PenTool,
  Cable,
  CheckCircle2,
  LifeBuoy,
  Quote,
  Plus,
  Minus,
  Code2,
  Boxes,
  Database,
  ArrowRightLeft,
} from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Nav, Footer } from "./index";
import adyenLogo from "@/assets/Adyen.png";
import shift4Logo from "@/assets/Shift4.png";
import clarityRfidLogo from "@/assets/ClarityRFID.webp";
import officeImg from "@/assets/services/integrations/office.jpg";

export const Route = createFileRoute("/services_/integrations-modernization")({
  component: IntegrationsPage,
  head: () => ({
    meta: [
      { title: "Integrations & Modernization | Lumovy" },
      {
        name: "description",
        content:
          "Pre-architected Dynamics 365 connectors for Adyen, Shift4, QSR Automations and SML RFID — named, proven integration paths into D365 Commerce and Finance.",
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
        transform: shown ? "translateY(0)" : "translateY(22px)",
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <IntHero />
      <PartnerStrip />
      <PerIntegration />
      <HowWeIntegrate />
      <ProofKit />
      <EngineeringExcerpt />
      <IntFAQ />
      <CrossLinks />
      <ClosingCTA />
      <Footer />
    </div>
  );
}

/* ─────────────────────────────  1. HERO (dark)  ───────────────────────────── */
function IntHero() {
  return (
    <section className="hero-dark relative overflow-hidden">
      <div aria-hidden className="hero-beam" />
      <div aria-hidden className="hero-orbs" />
      <div aria-hidden className="hero-grid" />
      <div aria-hidden className="hero-grain" />
      <div className="container-enterprise relative z-10 py-20 lg:py-28">
        <a
          href="/services"
          className="hero-content-in inline-flex items-center gap-1.5 text-xs font-semibold text-white/60 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          All services
        </a>
        <div className="mt-6 max-w-4xl">
          <span className="hero-content-in inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--cyan-soft)] backdrop-blur">
            <ArrowRightLeft className="h-3.5 w-3.5" />
            Engineering &amp; AI
          </span>
          <h1
            className="hero-content-in mt-6 text-4xl font-semibold leading-[1.07] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]"
            style={{ animationDelay: "80ms" }}
          >
            Dynamics 365 Integrations Built for Adyen, Shift4, QSR Automations &amp; SML RFID
          </h1>
          <p
            className="hero-content-in mt-6 max-w-2xl text-lg leading-relaxed text-white/70"
            style={{ animationDelay: "160ms" }}
          >
            Pre-architected connectors for the platforms your business already runs on — not a
            generic &ldquo;hyper-connected ecosystem,&rdquo; but named, proven integration paths into
            D365 Commerce and Finance.
          </p>
          <div className="hero-content-in mt-9 flex flex-wrap gap-3" style={{ animationDelay: "240ms" }}>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--navy-deep)] transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30"
            >
              Get an integration architecture review
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#partners"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              See our integration partners
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  2. PARTNER STRIP  ───────────────────────────── */
const PARTNERS = [
  { key: "adyen", name: "Adyen", logo: adyenLogo, h: "h-7" },
  { key: "shift4", name: "Shift4", logo: shift4Logo, h: "h-7" },
  { key: "qsr", name: "QSR Automations", logo: null, h: "" },
  { key: "sml", name: "SML RFID", logo: clarityRfidLogo, h: "h-8" },
];

function PartnerStrip() {
  return (
    <section id="partners" className="border-b border-border bg-white py-14">
      <div className="container-enterprise">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--royal)]">
          Integration partners
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {PARTNERS.map((p) =>
            p.logo ? (
              <img
                key={p.key}
                src={p.logo}
                alt={p.name}
                className={`${p.h} w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0`}
              />
            ) : (
              <span key={p.key} className="text-lg font-bold tracking-tight text-[var(--navy-deep)]/70">
                {p.name}
              </span>
            ),
          )}
        </div>
        <p className="mt-8 text-center text-sm text-[var(--blue-gray)]">
          Pre-built, production-proven integrations — not a custom build every time.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────  3. PER-INTEGRATION DEEP SECTIONS  ───────────────────────────── */
type Integration = {
  id: string;
  icon: typeof CreditCard;
  name: string;
  role: string;
  what: string;
  prebuilt: string[];
  timeline: string;
  proof: string;
  diagram: [string, string, string];
  link?: { label: string; href: string };
};
const INTEGRATIONS: Integration[] = [
  {
    id: "adyen",
    icon: CreditCard,
    name: "Adyen",
    role: "Payments integration for D365 Commerce",
    what: "Connects Adyen's payment processing directly into D365 Commerce, unifying online and in-store transactions under one reconciliation layer.",
    prebuilt: ["Tokenized payment capture", "Refund & chargeback sync", "Settlement reconciliation", "Online + in-store under one ledger"],
    timeline: "4–6 weeks kickoff to go-live",
    proof: "Deployed across multi-location retail estates",
    diagram: ["Adyen", "Integration Layer", "D365 Commerce"],
  },
  {
    id: "shift4",
    icon: ShoppingCart,
    name: "Shift4",
    role: "Unified commerce payments",
    what: "Integrates Shift4's payment stack for unified commerce environments, syncing transaction data across POS and D365.",
    prebuilt: ["POS ↔ D365 transaction sync", "Tokenization & secure capture", "End-of-day settlement", "Multi-store reconciliation"],
    timeline: "4–6 weeks kickoff to go-live",
    proof: "Unified POS + back-office transaction data",
    diagram: ["Shift4 POS", "Integration Layer", "D365 Finance"],
  },
  {
    id: "qsr-automations",
    icon: Utensils,
    name: "QSR Automations",
    role: "Kitchen & order integration",
    what: "Links kitchen display systems and order management into D365, closing the loop between front-of-house orders and back-office inventory and finance.",
    prebuilt: ["Order-throughput sync", "Menu & item mapping", "KDS order routing", "Inventory depletion posting"],
    timeline: "5–7 weeks kickoff to go-live",
    proof: "Front-of-house to back-office, in real time",
    diagram: ["QSR Automations", "Integration Layer", "D365 Supply Chain"],
  },
  {
    id: "sml-rfid",
    icon: ScanLine,
    name: "SML RFID",
    role: "Inventory & asset intelligence",
    what: "Connects SML RFID's tag and reader infrastructure into D365 for real-time inventory accuracy, cycle counts, and shrinkage reduction.",
    prebuilt: ["Real-time inventory accuracy", "Automated cycle counts", "Shrinkage detection", "Marketplace-listed RFID connector"],
    timeline: "6–8 weeks kickoff to go-live",
    proof: "Listed on Microsoft AppSource",
    diagram: ["SML RFID", "Clarity Connector", "D365 Commerce"],
    link: { label: "See it on Microsoft AppSource", href: "https://appsource.microsoft.com/" },
  },
];

function ArchDiagram({ boxes }: { boxes: [string, string, string] }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-border bg-[var(--blue-light)]/30 p-4">
      {boxes.map((b, i) => (
        <div key={b} className="flex flex-1 items-center gap-2">
          <div
            className={
              "flex-1 rounded-lg px-2 py-3 text-center text-[11px] font-semibold leading-tight " +
              (i === 1
                ? "bg-[var(--royal)] text-white"
                : "border border-border bg-white text-[var(--navy-deep)]")
            }
          >
            {i === 1 && <Cable className="mx-auto mb-1 h-3.5 w-3.5" />}
            {b}
          </div>
          {i < boxes.length - 1 && (
            <ArrowRight className="h-4 w-4 shrink-0 text-[var(--royal)]" />
          )}
        </div>
      ))}
    </div>
  );
}

function PerIntegration() {
  return (
    <section className="bg-white py-24">
      <div className="container-enterprise">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--royal)]">
              Named, proven paths
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
              Four integrations, pre-architected for D365
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 space-y-6">
          {INTEGRATIONS.map((it, i) => (
            <Reveal key={it.id} delay={(i % 2) * 80}>
              <div
                id={it.id}
                className="scroll-mt-24 grid gap-8 rounded-2xl border border-border bg-white p-7 shadow-fluent-sm sm:p-9 lg:grid-cols-[1.15fr_0.85fr] lg:items-center"
              >
                {/* Left: copy */}
                <div>
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--royal)] text-white">
                      <it.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-[var(--navy-deep)]">{it.name}</h3>
                      <p className="text-xs font-medium uppercase tracking-wider text-[var(--royal)]">
                        {it.role}
                      </p>
                    </div>
                  </div>
                  <p className="mt-5 text-[15px] leading-relaxed text-[var(--blue-gray)]">{it.what}</p>
                  <ul className="mt-5 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                    {it.prebuilt.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-[var(--navy-deep)]">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--royal)]" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--blue-light)]/60 px-3 py-1.5 text-xs font-semibold text-[var(--navy-deep)]">
                      ⏱ {it.timeline}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--cyan-soft)]/15 px-3 py-1.5 text-xs font-semibold text-[var(--royal)]">
                      <CheckCircle2 className="h-3.5 w-3.5" /> {it.proof}
                    </span>
                    {it.link && (
                      <a
                        href={it.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--royal)]"
                      >
                        {it.link.label}
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right: architecture diagram */}
                <div>
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-[var(--blue-gray)]">
                    Integration architecture
                  </p>
                  <ArchDiagram boxes={it.diagram} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={100}>
          <p className="mt-8 text-center text-sm text-[var(--blue-gray)]">
            Need a payment or POS system not listed here? These four are proven, not exhaustive —{" "}
            <a href="#contact" className="font-semibold text-[var(--royal)]">talk to our architects</a>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────  4. HOW WE INTEGRATE  ───────────────────────────── */
const PHASES = [
  { icon: Search, name: "Assess", note: "Audit current systems, data flows and integration debt." },
  { icon: PenTool, name: "Architect", note: "Design the pattern: API-led, event-driven or middleware-based." },
  { icon: Cable, name: "Connect", note: "Build and configure using pre-existing connectors where available." },
  { icon: CheckCircle2, name: "Validate", note: "End-to-end testing, including refunds, partial syncs and failure recovery." },
  { icon: LifeBuoy, name: "Handoff", note: "Monitoring and support transitions to Managed Support & Expansion." },
];

function HowWeIntegrate() {
  return (
    <section className="hero-dark relative overflow-hidden py-24 text-white">
      <div aria-hidden className="hero-orbs opacity-50" />
      <div aria-hidden className="hero-grid" />
      <div className="container-enterprise relative z-10">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--cyan-soft)]">
            How we integrate
          </span>
          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            A phased approach, from assessment to managed support
          </h2>
        </div>
        <div className="relative mt-16">
          <div aria-hidden className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-[var(--royal)]/30 via-[var(--azure)]/40 to-[var(--cyan-soft)]/50 lg:block" />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {PHASES.map((p, i) => (
              <li key={p.name} className="relative">
                <span className="relative z-10 grid h-14 w-14 place-items-center rounded-full border border-white/15 bg-[var(--navy-deep)] text-[var(--cyan-soft)]">
                  <p.icon className="h-6 w-6" />
                </span>
                <div className="mt-4">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-[var(--cyan-soft)]">
                    Step {i + 1}
                  </div>
                  <h3 className="mt-1 text-base font-semibold text-white">{p.name}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/60">{p.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <p className="mt-12 text-sm text-white/55">
          Typical core team: Integration Architect · Solution Architect · QA Lead.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────  5. PROOF KIT  ───────────────────────────── */
const NUMBERS = [
  { v: "50+", l: "Live integrations delivered" },
  { v: "4–8", l: "Weeks typical go-live" },
  { v: "99.5%", l: "Sync reliability maintained" },
];

function ProofKit() {
  return (
    <section className="bg-white py-24">
      <div className="container-enterprise">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--royal)]">
            Proof, not promises
          </p>
        </Reveal>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Case study */}
          <Reveal>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-[var(--blue-light)]/25 p-8">
              <span className="inline-flex w-fit items-center rounded-full bg-white px-3 py-1 text-xs font-semibold text-[var(--royal)]">
                Case study
              </span>
              <h3 className="mt-5 text-lg font-semibold text-[var(--navy-deep)]">
                Multi-location QSR chain, North America
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--blue-gray)]">
                A growing quick-service chain needed kitchen, POS and payment data to flow into D365
                without a fragile custom build. We connected QSR Automations and the payment stack
                through a single integration layer — orders, inventory depletion and settlement now
                reconcile automatically.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4">
                {[
                  { v: "6 wks", l: "to go-live" },
                  { v: "0", l: "manual re-keying" },
                  { v: "Real-time", l: "inventory posting" },
                ].map((m) => (
                  <div key={m.l} className="rounded-xl bg-white p-4">
                    <div className="text-xl font-bold tracking-tight text-[var(--royal)]">{m.v}</div>
                    <div className="mt-1 text-[11px] leading-tight text-[var(--blue-gray)]">{m.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Testimonial + numbers */}
          <Reveal delay={90}>
            <div className="flex h-full flex-col gap-6">
              <div className="rounded-2xl bg-[var(--navy-deep)] p-8 text-white">
                <Quote className="h-8 w-8 text-[var(--cyan-soft)]/50" />
                <blockquote className="mt-4 text-base font-medium leading-relaxed">
                  “They didn't rip out our stack — they connected it. The integration went live on
                  schedule and just works.”
                </blockquote>
                <div className="mt-5 text-sm">
                  <div className="font-semibold text-white">VP of IT</div>
                  <div className="text-white/60">Regional Grocery Chain</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border bg-border">
                {NUMBERS.map((n) => (
                  <div key={n.l} className="bg-white px-3 py-6 text-center">
                    <div className="text-xl font-bold tracking-tight text-[var(--navy-deep)]">{n.v}</div>
                    <div className="mt-1 text-[10px] leading-tight text-[var(--blue-gray)]">{n.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  6. ENGINEERING EXCERPT  ───────────────────────────── */
function EngineeringExcerpt() {
  return (
    <section className="border-y border-border bg-[var(--blue-light)]/30 py-24">
      <div className="container-enterprise grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-border shadow-fluent-md">
            <img
              src={officeImg}
              alt="Lumovy engineering team"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={90}>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--royal)]">
              <Code2 className="h-3.5 w-3.5" />
              From our engineering team
            </span>
            <h2 className="mt-5 text-2xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-3xl">
              Integrating Adyen with D365 Commerce: the architecture patterns we use
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-[var(--blue-gray)]">
              We favor an API-led pattern with an idempotent integration layer between Adyen and D365
              Commerce — so a retried settlement never double-posts, refunds reconcile against the
              original capture, and a failed sync is replayed, not lost. Tokenized captures keep card
              data out of D365 entirely, and a reconciliation job closes the loop nightly against
              Adyen's settlement report. The same pattern generalizes to Shift4 and other processors:
              named connectors on top of a resilient, event-driven core.
            </p>
            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--royal)]"
            >
              Read the full integration pattern guide
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────  7. FAQ  ───────────────────────────── */
const FAQS = [
  {
    q: "Do you work with our existing middleware, or does this require a full replacement?",
    a: "We work with your existing middleware wherever it's healthy — we assess it first, and only recommend replacing components that are creating integration debt or blocking reliability. The goal is to connect your stack, not rip it out.",
  },
  {
    q: "How do you handle legacy system sunset during an integration project?",
    a: "We run legacy and new systems in parallel through a controlled cutover, validating data parity before decommissioning anything. Where a legacy platform is being retired entirely, we sequence it with our Legacy Migration service so there's continuity, not a hard switch.",
  },
  {
    q: "What's your integration testing approach?",
    a: "Our Validate phase covers end-to-end testing across both systems, explicitly including edge cases — refunds, chargebacks, partial syncs and failure recovery — not just the happy path. Quality Engineering is embedded, so integrations are load- and failure-tested before go-live.",
  },
  {
    q: "Can you integrate a payment or POS system not listed here?",
    a: "Yes. Adyen, Shift4, QSR Automations and SML RFID are our proven, pre-built paths — but they're not exhaustive. We build named connectors on a resilient integration core, so a new processor or POS follows the same pattern.",
  },
  {
    q: "Who supports the integration after go-live?",
    a: "Support transitions to our Managed Support & Expansion team with monitoring, alerting and release management — so your integrations stay healthy and evolve as your platforms update.",
  },
];

function IntFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-white py-24">
      <div className="container-enterprise grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--royal)]">FAQ</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Integration questions
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-[var(--blue-gray)]">
            Middleware, legacy sunset, testing and support — the questions engineering leaders ask.
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

/* ─────────────────────────────  8. CROSS-LINKS  ───────────────────────────── */
const LINKS = [
  {
    icon: Database,
    tag: "Before integration",
    title: "Migrating from a legacy platform? Start here.",
    href: "/services#legacy-migration",
    cta: "Legacy Migration",
  },
  {
    icon: LifeBuoy,
    tag: "After go-live",
    title: "What happens once your integration is live.",
    href: "/services#managed-support",
    cta: "Managed Support & Expansion",
  },
  {
    icon: Boxes,
    tag: "By industry",
    title: "See integrations in a retail & commerce context.",
    href: "/industries/retail-omnichannel-commerce",
    cta: "Retail & Commerce",
  },
];

function CrossLinks() {
  return (
    <section className="border-y border-border bg-[var(--blue-light)]/30 py-24">
      <div className="container-enterprise">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--royal)]">
            Where to go next
          </p>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {LINKS.map((c, i) => (
            <Reveal key={c.tag} delay={i * 90}>
              <a
                href={c.href}
                className="group flex h-full flex-col rounded-2xl border border-border bg-white p-7 transition-all hover:-translate-y-1 hover:border-[var(--royal)]/30 hover:shadow-fluent-md"
              >
                <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-[var(--blue-light)]/60 text-[var(--royal)] transition-colors group-hover:bg-[var(--royal)] group-hover:text-white">
                  <c.icon className="h-5 w-5" />
                </span>
                <div className="mt-5 text-[11px] font-semibold uppercase tracking-widest text-[var(--royal)]">
                  {c.tag}
                </div>
                <h3 className="mt-2 flex-1 text-base font-semibold text-[var(--navy-deep)]">
                  {c.title}
                </h3>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--royal)]">
                  {c.cta}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
            </Reveal>
          ))}
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
          Not sure which integration path fits your stack?
        </h2>
        <div className="mt-9 flex justify-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--navy-deep)] transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            Get an integration architecture review
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
        <p className="mx-auto mt-6 max-w-xl text-xs text-white/50">
          Response within 1 business day. NDA available on request.
        </p>
      </div>
    </section>
  );
}
