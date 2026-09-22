import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  Target,
  Link2,
  Rocket,
  TrendingUp,
  LifeBuoy,
  ShieldCheck,
  RefreshCw,
  Wrench,
  FlaskConical,
  Lightbulb,
  Headset,
  Radar,
  UploadCloud,
  Puzzle,
  ShoppingCart,
  Boxes,
  Landmark,
  LayoutGrid,
  Sparkles,
  BadgeCheck,
  Gauge,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Nav, Footer, FaqAccordion, FinalCtaSection, CaseStudyCard } from "./index";
import mafLogo from "@/assets/logos/majid-al-futtaim.png";
import mafCaseImg from "@/assets/case-studies/majid-al-futtaim.jpg";
import cavendersLogo from "@/assets/logos/cavenders.png";
import cavendersCaseImg from "@/assets/case-studies/cavenders.jpg";
import mattressFirmLogo from "@/assets/logos/mattress-firm.png";
import mattressFirmCaseImg from "@/assets/case-studies/mattress-firm.jpg";
import retailImg from "@/assets/industries/retail.jpg";
import hospitalityImg from "@/assets/industries/hospitality.jpg";
import engineeringImg from "@/assets/services/engineering.jpg";
import consultingImg from "@/assets/services/consulting.jpg";
import implementationImg from "@/assets/services/implementation.jpg";
import supportImg from "@/assets/services/support.jpg";

export const Route = createFileRoute("/what-we-do_/delivery-support_/managed-support-expansion")({
  component: ManagedSupportPage,
  head: () => ({
    meta: [
      { title: "Dynamics 365 Managed Services & Support | Lumovy" },
      {
        name: "description",
        content:
          "Keep Dynamics 365 running and improving with Lumovy managed services for support, integrations, upgrades and demand planning. Check your support readiness.",
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

function ManagedSupportPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <MsHero />
      <MsBusinessCase />
      <MsEcosystem />
      <MsCoverage />
      <MsReadinessBanner />
      <MsIncidentOwnership />
      <MsTransition />
      <MsReleaseManagement />
      <MsKnowledgeReporting />
      <MsProof />
      <MsFAQ />
      <MsFinalCTA />
      <Footer />
    </div>
  );
}

/* ─────────────────────────────  1. HERO (dark)  ───────────────────────────── */
function MsHero() {
  return (
    <section className="hero-blue-static overflow-hidden">
      <div aria-hidden className="hero-grid" />
      <div className="container-enterprise relative z-10 py-24 lg:py-28">
        <div className="max-w-3xl">
          <span className="hero-content-in text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--cyan-soft)]">
            Microsoft Dynamics 365 Managed Services
          </span>
          <h1 className="hero-content-in mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]" style={{ animationDelay: "80ms" }}>
            Keep Dynamics 365 running, improving, and ready for what comes next.
          </h1>
          <p className="hero-content-in mt-6 max-w-2xl text-base leading-relaxed text-white/70" style={{ animationDelay: "160ms" }}>
            When orders, stores, warehouses, finance, and connected applications depend on D365,
            support needs to move faster than tickets alone. Lumovy brings application support,
            integration expertise, release management, and continuous improvement into one managed
            service, helping your team protect today&apos;s operations while preparing for
            tomorrow&apos;s priorities.
          </p>
          <div className="hero-content-in mt-9 flex flex-wrap gap-3" style={{ animationDelay: "240ms" }}>
            <a
              href="#assessment"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--navy-deep)] transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30"
            >
              <Calendar className="h-4 w-4" />
              Check My Support Readiness
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Discuss My Support Needs
            </a>
          </div>
        </div>
      </div>

      {/* Capability strip */}
      <div className="relative z-10 border-t border-white/10">
        <div className="container-enterprise grid grid-cols-2 gap-x-8 gap-y-5 py-8 sm:grid-cols-4">
          {["Application Support", "Connected Systems", "Controlled Releases", "Continuous Improvement"].map((t) => (
            <span key={t} className="text-sm font-bold uppercase leading-tight tracking-wide text-white/45">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  2. THE BUSINESS CASE  ───────────────────────────── */
const BUSINESS_CASE = [
  {
    icon: ShieldCheck,
    title: "Keep operations moving",
    body: "Prioritize issues by business impact, with clear investigation and escalation paths.",
  },
  {
    icon: RefreshCw,
    title: "Make change manageable",
    body: "Coordinate updates, testing, and deployment around the processes people rely on.",
  },
  {
    icon: TrendingUp,
    title: "Create room for improvement",
    body: "Turn recurring incidents, user friction, and technical debt into an agreed improvement plan.",
  },
];

function MsBusinessCase() {
  return (
    <section id="overview" className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <div className="max-w-3xl">
          <p className="eyebrow">The business case</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Support that goes beyond ticket closure.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-[var(--blue-gray)]">
            Resolving today&apos;s issue is only part of support. The bigger value comes from
            understanding why it happened, what else it affects, and how to prevent it from
            returning. For D365 environments, incidents, releases, integrations, and enhancements
            are connected decisions, not separate workstreams. Lumovy brings these priorities into
            one managed service, giving your team a clearer view of what needs attention, who owns
            it, and what should happen next.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {BUSINESS_CASE.map((b) => (
            <div key={b.title} className="card-lift group relative overflow-hidden rounded-xl border border-border bg-white p-8">
              <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-[var(--royal)] transition-transform duration-500 group-hover:scale-x-100" />
              <span className="inline-grid h-11 w-11 place-items-center rounded-2xl bg-[var(--blue-light)] text-[var(--royal)] ring-1 ring-inset ring-[var(--royal)]/20">
                <b.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-[var(--navy-deep)]">{b.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--blue-gray)]">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  3. SUPPORT ACROSS YOUR ECOSYSTEM  ───────────────────────────── */
const ECOSYSTEM = [
  {
    icon: ShoppingCart,
    title: "Commerce and customer journeys",
    body: "Support D365-connected ordering, payments, loyalty, portals, digital agreements, and customer communications.",
  },
  {
    icon: Boxes,
    title: "Inventory, warehouses, and delivery",
    body: "Investigate product, order, inventory, RFID, adjustment, and delivery data across D365, warehouse systems, and logistics providers.",
  },
  {
    icon: Landmark,
    title: "Finance and business partners",
    body: "Coordinate issues across D365-connected tax, accounts payable, payment, and electronic data interchange solutions.",
  },
  {
    icon: LayoutGrid,
    title: "Business applications and insights",
    body: "Support D365-related workflows built with Power Platform and Azure, including automation, portals, reporting, messaging, and data integration.",
  },
];

function MsEcosystem() {
  return (
    <section id="ecosystem" className="relative overflow-hidden border-b border-border bg-[var(--blue-light)]/40 py-28">
      <div aria-hidden className="mesh-blobs-light opacity-60" />
      <div className="container-enterprise relative">
        <div className="max-w-3xl">
          <p className="eyebrow">Your ecosystem</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Support the systems behind every customer journey.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-[var(--blue-gray)]">
            A single order can move through storefronts, payment services, D365, warehouse
            platforms, logistics partners, and finance before it reaches the customer. When
            something breaks, the cause may sit anywhere in that chain. Lumovy follows the
            business process across D365 and connected applications, helping identify the
            handoff, coordinate the right specialists, and move issues toward resolution.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ECOSYSTEM.map((e) => (
            <div key={e.title} className="flex flex-col items-start gap-4 rounded-xl border border-border bg-white p-6">
              <span className="inline-grid h-11 w-11 place-items-center rounded-2xl bg-[var(--blue-light)] text-[var(--royal)] ring-1 ring-inset ring-[var(--royal)]/20">
                <e.icon className="h-5 w-5" />
              </span>
              <h3 className="text-base font-semibold leading-snug text-[var(--navy-deep)]">{e.title}</h3>
              <p className="text-sm leading-relaxed text-[var(--blue-gray)]">{e.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm font-semibold text-[var(--navy-deep)]">
          The value to your team: Support that follows the business process, not just the
          application boundary.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────  4. MANAGED SERVICE COVERAGE  ───────────────────────────── */
const COVERAGE = [
  {
    icon: Headset,
    title: "Application support",
    body: "L2/L3 support for escalated D365 issues, with investigation, workarounds, fixes, and specialist coordination where needed.",
  },
  {
    icon: Radar,
    title: "Monitoring and problem management",
    body: "Check agreed application components, integrations, data flows, and batch jobs. Identify recurring issues and define actions to address their causes.",
  },
  {
    icon: UploadCloud,
    title: "Updates and environment management",
    body: "Plan and coordinate D365 updates, patches, environment refreshes, testing, deployment, and post-release monitoring.",
  },
  {
    icon: Wrench,
    title: "Customization maintenance",
    body: "Maintain custom functionality, investigate performance issues, and identify where standard features or configuration can reduce complexity.",
  },
  {
    icon: FlaskConical,
    title: "Quality engineering",
    body: "Validate critical processes through functional, integration, and regression testing, supported by automation where appropriate.",
  },
  {
    icon: Lightbulb,
    title: "Business improvement",
    body: "Assess enhancements, workflow changes, reporting needs, automation opportunities, and digital-experience experiments where relevant.",
  },
];

function MsCoverage() {
  return (
    <section id="coverage" className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <div className="max-w-3xl">
          <p className="eyebrow">Managed service coverage</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Coverage that keeps D365 stable, current, and improving.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {COVERAGE.map((c) => (
            <div key={c.title} className="card-lift group relative overflow-hidden rounded-xl border border-border bg-white p-8">
              <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-[var(--royal)] transition-transform duration-500 group-hover:scale-x-100" />
              <span className="inline-grid h-11 w-11 place-items-center rounded-2xl bg-[var(--blue-light)] text-[var(--royal)] ring-1 ring-inset ring-[var(--royal)]/20">
                <c.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-[var(--navy-deep)]">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--blue-gray)]">{c.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm leading-relaxed text-[var(--blue-gray)]">
          Coverage is shaped around your environment, priorities, and agreed responsibilities.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────  5. SUPPORT READINESS ASSESSMENT CTA BANNER  ───────────────────────────── */
function MsReadinessBanner() {
  return (
    <section id="assessment" className="bg-white py-20">
      <div className="container-enterprise">
        <div className="overflow-hidden rounded-2xl bg-[var(--navy)]">
          <div className="flex flex-col items-start justify-between gap-6 px-8 py-10 sm:flex-row sm:items-center sm:px-12">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--cyan-soft)]">
                <ClipboardCheck className="h-3.5 w-3.5" /> Support readiness assessment
              </span>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                How ready is your support model for what comes next?
              </h3>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/70">
                Answer a few questions about ownership, coverage, dependencies, releases,
                incidents, knowledge, demand, and reporting to see where your current approach is
                established, and where a closer review could help. No contact details required to
                see where you stand.
              </p>
            </div>
            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--navy-deep)] transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Take the Readiness Assessment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  6. INCIDENT OWNERSHIP (animated timeline)  ───────────────────────────── */
const OWNERSHIP_STEPS = [
  { icon: Target, title: "Confirm impact", body: "Identify what is affected: trading, fulfilment, manufacturing, finance, or individual productivity." },
  { icon: Compass, title: "Route and investigate", body: "Assign the right functional or technical specialists, with ownership and escalation paths recorded." },
  { icon: Link2, title: "Restore and coordinate", body: "Work toward a fix or workaround while coordinating customer, Microsoft, vendor, and internal dependencies." },
  { icon: CheckCircle2, title: "Capture and prevent", body: "Document the resolution, review root causes where appropriate, and add preventive actions to the improvement backlog." },
];

function MsIncidentOwnership() {
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
    <section className="relative overflow-hidden border-b border-border bg-[var(--blue-light)]/40 py-28">
      <div aria-hidden className="mesh-blobs-light opacity-60" />
      <div ref={wrapRef} className="container-enterprise relative">
        <div className="max-w-2xl">
          <p className="eyebrow">Incident ownership</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Clear ownership when issues cross teams.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-[var(--blue-gray)]">
            Your service desk captures the issue. Lumovy investigates the escalated D365 problem.
            Microsoft or another vendor joins when product expertise is needed. Those handoffs
            should be agreed before incidents become urgent.
          </p>
        </div>
        <div className="relative mt-16">
          <div aria-hidden className="absolute left-0 right-0 top-7 hidden h-0.5 bg-white lg:block" />
          <div aria-hidden className="absolute left-0 top-7 hidden h-0.5 bg-gradient-to-r from-[var(--royal)] via-[var(--azure)] to-[var(--cyan-soft)] lg:block" style={{ width: `${progress * 100}%`, transition: "width 0.1s linear" }} />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {OWNERSHIP_STEPS.map((s, i) => {
              const reached = progress >= i / (OWNERSHIP_STEPS.length - 1) - 0.02;
              return (
                <li key={s.title} className="relative">
                  <span className={"relative z-10 grid h-14 w-14 place-items-center rounded-full border transition-all duration-500 " + (reached ? "border-[var(--cyan-soft)] bg-[var(--royal)] text-white shadow-[0_0_26px_-4px_var(--cyan-soft)]" : "border-border bg-white text-[var(--royal)]")}>
                    <s.icon className="h-6 w-6" />
                  </span>
                  <div className="mt-4">
                    <div className="text-[11px] font-bold uppercase tracking-widest text-[var(--royal)]">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-1 text-lg font-semibold text-[var(--navy-deep)]">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--blue-gray)]">{s.body}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
        <p className="mt-10 text-sm leading-relaxed text-[var(--blue-gray)]">
          The service model can include business-hours support and 24/7 on-call coverage for
          Severity 1 and 2 incidents under the agreed SLA. Service hours, response targets,
          escalation responsibilities, and resolution expectations are confirmed during engagement
          design. Microsoft escalations use your applicable support subscription.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────  7. TRANSITION  ───────────────────────────── */
const TRANSITION_STAGES = [
  { icon: Radar, title: "Understand", body: "Map critical processes, stakeholders, integrations, customizations, access, documentation, and open risks." },
  { icon: Headset, title: "Observe", body: "Work alongside the current team to follow support activity and identify knowledge or coverage gaps." },
  { icon: ClipboardCheck, title: "Demonstrate", body: "Lead selected support activity under observation to validate understanding and escalation paths." },
  { icon: BadgeCheck, title: "Take ownership", body: "Complete sign-off and move into independent delivery with governance and reporting in place." },
];

function MsTransition() {
  return (
    <section id="transition" className="hero-dark relative overflow-hidden py-28 text-white">
      <div aria-hidden className="hero-orbs opacity-50" />
      <div aria-hidden className="hero-grid" />
      <div className="container-enterprise relative z-10">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--cyan-soft)]">
            <LifeBuoy className="h-3.5 w-3.5" /> Transition
          </span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Move support without losing operating knowledge.
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/70">
            Changing support partners should not mean restarting from zero. Lumovy uses a
            structured transition to learn the environment, observe live support, prove
            readiness, and take ownership with clear sign-off.
          </p>
        </div>
        <div className="relative mt-14">
          <div aria-hidden className="absolute left-0 right-0 top-7 hidden h-0.5 bg-white/10 lg:block" />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {TRANSITION_STAGES.map((s, i) => (
              <li key={s.title} className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors hover:border-[var(--cyan-soft)]/40 hover:bg-white/[0.07]">
                <span className="relative z-10 grid h-14 w-14 place-items-center rounded-full border border-[var(--cyan-soft)]/50 bg-white/10 text-[var(--cyan-soft)] transition-colors group-hover:bg-[var(--cyan-soft)] group-hover:text-[var(--navy-deep)]">
                  <s.icon className="h-6 w-6" />
                </span>
                <div className="mt-5">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-[var(--cyan-soft)]">
                    Stage {i + 1}
                  </div>
                  <h3 className="mt-1 text-lg font-semibold text-white">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/65">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.04] px-8 py-8 backdrop-blur-sm sm:flex-row sm:items-center sm:px-10">
          <p className="max-w-lg text-sm leading-relaxed text-white/70">
            A reference transition plan spans four weeks. The actual schedule depends on scope,
            access, documentation, complexity, and current-team availability.
          </p>
          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--navy-deep)] transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            <Calendar className="h-4 w-4" />
            Discuss My Support Transition
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  8. RELEASE MANAGEMENT & DEMAND (suite-style)  ───────────────────────────── */
const SUITE_INCLUDED: { label: string; image: string }[] = [
  { label: "Run operations: incidents, maintenance, troubleshooting, and agreed minor changes", image: supportImg },
  { label: "Keep D365 current: platform updates, quality updates, patches, and dependent software changes", image: engineeringImg },
  { label: "Improve applications: approved enhancements, integrations, customizations, and reports", image: implementationImg },
  { label: "Rolling 30-, 60-, and 90-day demand planning across priorities, skills, and dependencies", image: consultingImg },
  { label: "Core team continuity with specialist capacity added when needed", image: retailImg },
  { label: "Clarify, estimate, prioritize, and approve requests before they enter delivery", image: hospitalityImg },
];
const SUITE_EXTENSIONS = [
  "Release calendar management",
  "Staged deployment validation",
  "Emergency fix pathway",
  "Cutover planning",
  "Post-release monitoring",
  "Business acceptance support",
];
const SUITE_INTERVAL = 6000;

function MsReleaseManagement() {
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
    <section id="release-management" className="relative overflow-hidden bg-[var(--blue-light)]/30 py-28">
      <div aria-hidden className="mesh-blobs-light opacity-50" />
      <div className="container-enterprise relative">
        <div className="max-w-3xl">
          <p className="eyebrow">Release management &amp; delivery</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Keep updates controlled and business-ready.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-[var(--blue-gray)]">
            D365 updates can affect customizations, integrations, store systems, and third-party
            applications. Every release needs a clear path from technical change to business
            readiness. Lumovy coordinates releases across three priorities, run operations, keep
            D365 current, and improve applications, while helping your teams see what needs to
            happen next, what can wait, and what capacity is needed to deliver.
          </p>
        </div>

        <div ref={ref} className="mt-14 grid items-start gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--royal)]">
              How Lumovy coordinates delivery
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
                From release notes to ready-to-run processes
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

        <p className="mt-10 text-sm leading-relaxed text-[var(--blue-gray)]">
          Staged deployment can validate changes before wider rollout. Emergency fixes follow a
          defined urgent-change path. Release cadence is agreed around your environment, business
          calendar, and platform requirements.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────  9. KNOWLEDGE, REPORTING & CONTINUOUS IMPROVEMENT  ───────────────────────────── */
const KNOWLEDGE_REPORTING = [
  {
    icon: Puzzle,
    title: "Knowledge, training and documentation",
    body: "Maintain configuration details, integration references, workflows, and playbooks. Run role-based training and rehearse workflows in sandbox environments before they reach production.",
  },
  {
    icon: Gauge,
    title: "Reporting and communication",
    body: "Operational coordination, service reviews, and leadership reviews on an agreed cadence, tracking response performance, ticket ageing, hours used, and release progress.",
  },
  {
    icon: Sparkles,
    title: "Continuous improvement",
    body: "Turn recurring failures, unnecessary customizations, and underused D365 capabilities into reviewed improvement work, including process advisory, automation, and Copilot or AI agent opportunities.",
  },
];

function MsKnowledgeReporting() {
  return (
    <section className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <div className="max-w-2xl">
          <p className="eyebrow">Knowledge, reporting &amp; improvement</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Stay informed, and keep getting better.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {KNOWLEDGE_REPORTING.map((k) => (
            <div key={k.title} className="card-lift group relative overflow-hidden rounded-xl border border-border bg-white p-8">
              <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-[var(--royal)] transition-transform duration-500 group-hover:scale-x-100" />
              <span className="inline-grid h-11 w-11 place-items-center rounded-2xl bg-[var(--blue-light)] text-[var(--royal)] ring-1 ring-inset ring-[var(--royal)]/20">
                <k.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-[var(--navy-deep)]">{k.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--blue-gray)]">{k.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm leading-relaxed text-[var(--blue-gray)]">
          What stays with your team: handbooks, procedures, knowledge articles, training
          recordings, and clearer ownership of the supported environment. Tracking can use Azure
          DevOps, ServiceNow, or your preferred platform, with Teams and email for agreed
          communication. Each review ends with recorded decisions, owners, and next steps.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────  10. PROOF  ───────────────────────────── */
const PROOF_STATS: [string, string][] = [
  ["20+", "Customers supported across managed services"],
  ["50+", "Dynamics 365 upgrades supported or delivered"],
];

const MS_CASE_STUDIES = [
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

function MsProof() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[var(--blue-light)]/40 py-28">
      <div aria-hidden className="mesh-blobs-light opacity-60" />
      <div className="container-enterprise relative">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow">Experience</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
              Proven D365 support, upgrade, and integration experience.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-[var(--blue-gray)]">
              Lumovy has worked across D365 environments with different levels of complexity and
              connected retail, apparel, manufacturing, and logistics systems. Each engagement
              brings functional specialists, technical engineers, quality engineers, and delivery
              management together around the agreed service scope.
            </p>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--royal)]">
            View more
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
          {PROOF_STATS.map(([v, l]) => (
            <div key={l} className="bg-white px-6 py-8 text-center">
              <div className="text-3xl font-bold tracking-tight text-[var(--navy-deep)]">{v}</div>
              <div className="mt-1.5 text-xs font-medium leading-tight text-[var(--blue-gray)]">{l}</div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-[var(--blue-gray)]">As of August 2025.</p>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {MS_CASE_STUDIES.map((c) => (
            <CaseStudyCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  11. FAQ  ───────────────────────────── */
const MS_FAQS: [string, string][] = [
  [
    "What are Microsoft Dynamics 365 managed services?",
    "They provide ongoing D365 application support, maintenance, release management, and agreed improvements. Lumovy adds L2/L3 support, integration and customization expertise, knowledge management, and service governance.",
  ],
  [
    "Can Lumovy take over an implementation delivered by another partner?",
    "Yes. Lumovy uses a structured transition to review knowledge, open issues, support activity, and readiness before taking ownership of the agreed scope. Timing depends on access, documentation, complexity, and current-team cooperation.",
  ],
  [
    "Can Lumovy support integrations and customizations?",
    "Yes. The agreed scope can include D365-connected integrations and custom functionality. Lumovy investigates issues across those connections and coordinates with relevant vendors, without implying full third-party application support.",
  ],
  [
    "Does Lumovy provide 24/7 support?",
    "The service model can include 24/7 on-call coverage for Severity 1 and 2 incidents under the agreed SLA. Routine support, response targets, severity definitions, and escalation paths are confirmed during service design.",
  ],
  [
    "How are enhancements balanced with support incidents?",
    "Lumovy reviews demand, prioritizes approved work against capacity, and adds specialist support where needed. Larger changes are scoped separately.",
  ],
  [
    "How does Lumovy manage Dynamics 365 upgrades?",
    "Lumovy assesses impact, coordinates dependencies, prepares environments, tests critical processes, supports business acceptance, plans cutover, and monitors after deployment.",
  ],
  [
    "What training and documentation are included?",
    "The agreed service can include handbooks, procedures, configuration notes, troubleshooting guides, knowledge articles, and recorded training tailored to support, admin, and business roles.",
  ],
  [
    "How will we track managed service performance?",
    "Reporting can cover response performance, ticket ageing, escalations, capacity, release delivery, production defects, and system health. Reviews turn findings into actions with named owners.",
  ],
  [
    "What sits outside the standard application-support scope?",
    "First-line helpdesk support, store networks, hardware, field services, and unrelated business applications sit outside the standard scope. Connected-system responsibilities are agreed during scoping.",
  ],
];

function MsFAQ() {
  return (
    <section id="faqs" className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <FaqAccordion
          title="Dynamics 365 Managed Services FAQs"
          intro="Ownership, transition, integrations, and reporting: the questions support and IT leaders ask before switching managed service partners."
          items={MS_FAQS}
        />
      </div>
    </section>
  );
}

/* ─────────────────────────────  12. FINAL CTA  ───────────────────────────── */
function MsFinalCTA() {
  return (
    <FinalCtaSection
      id="contact"
      title="Ready to make D365 support work harder for your business?"
      subtitle="Start by identifying the issues, releases, and ownership gaps that need clearer attention. Use the self-check to see whether Lumovy managed services could help your current support model."
      primary={{ label: "Check My Support Readiness", href: "#assessment", icon: true }}
      secondary={{ label: "Discuss My Support Needs", href: "#contact" }}
      blueStatic
    />
  );
}
