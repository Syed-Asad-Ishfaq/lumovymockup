import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  ClipboardCheck,
  Rocket,
  LifeBuoy,
  Globe,
  Compass,
  PenTool,
  Hammer,
  Gauge,
  TrendingUp,
  Target,
  ShieldCheck,
  Users,
  Building2,
  Layers,
  Settings2,
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

export const Route = createFileRoute("/what-we-do_/delivery-support")({
  component: DeliverySupportPage,
  head: () => ({
    meta: [
      { title: "Delivery & Support | Lumovy" },
      {
        name: "description",
        content:
          "Lumovy combines implementation expertise, modernization capabilities and long-term support to help you move from transformation plans to reliable, evolving business systems.",
      },
    ],
  }),
});

function DeliverySupportPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <DsHero />
      <DsDeliveryModel />
      <DsCapabilities />
      <DsWhereAreYouNow />
      <DsAssurance />
      <DsSupportModel />
      <DsGlobalDelivery />
      <DsProof />
      <DsFAQ />
      <DsFinalCTA />
      <Footer />
    </div>
  );
}

/* ─────────────────────────────  1. HERO  ───────────────────────────── */
function DsHero() {
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
            Delivery &amp; Support
          </span>
          <h1 className="hero-content-in mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]" style={{ animationDelay: "80ms" }}>
            From implementation to continuous improvement.
          </h1>
          <p className="hero-content-in mt-6 max-w-2xl text-base leading-relaxed text-white/70" style={{ animationDelay: "160ms" }}>
            Lumovy combines implementation expertise, modernization capabilities and long-term
            support to help you move from transformation plans to reliable, evolving business
            systems.
          </p>
          <div className="hero-content-in mt-9 flex flex-wrap gap-3" style={{ animationDelay: "240ms" }}>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--navy-deep)] transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30"
            >
              <Calendar className="h-4 w-4" />
              Talk to Our Delivery Team
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  2. DELIVERY MODEL (animated timeline)  ───────────────────────────── */
const MODEL_STEPS = [
  { icon: Compass, title: "Assess", body: "Understand your business, technology landscape and priorities." },
  { icon: PenTool, title: "Design", body: "Define the right architecture, roadmap and implementation approach." },
  { icon: Hammer, title: "Build", body: "Configure, integrate, migrate and develop." },
  { icon: Rocket, title: "Launch", body: "Test, train, deploy and stabilize." },
  { icon: TrendingUp, title: "Optimize", body: "Support, improve, scale and evolve." },
];

function DsDeliveryModel() {
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
          <p className="eyebrow">Delivery model</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            One delivery model. From first assessment to what&apos;s next.
          </h2>
        </div>
        <div className="relative mt-16">
          <div aria-hidden className="absolute left-0 right-0 top-7 hidden h-0.5 bg-[var(--blue-light)] lg:block" />
          <div aria-hidden className="absolute left-0 top-7 hidden h-0.5 bg-gradient-to-r from-[var(--royal)] via-[var(--azure)] to-[var(--cyan-soft)] lg:block" style={{ width: `${progress * 100}%`, transition: "width 0.1s linear" }} />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
            {MODEL_STEPS.map((s, i) => {
              const reached = progress >= i / (MODEL_STEPS.length - 1) - 0.02;
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
      </div>
    </section>
  );
}

/* ─────────────────────────────  3. DELIVERY CAPABILITIES  ───────────────────────────── */
const CAPABILITIES = [
  {
    image: engineeringImg,
    name: "Implementation",
    body: "End-to-end implementation across your Microsoft environment.",
    href: "/what-we-do/delivery-support/implementation",
  },
  {
    image: consultingImg,
    name: "Legacy Migration",
    body: "Move away from aging systems without disrupting business continuity.",
    href: "/what-we-do/delivery-support/legacy-migration",
  },
  {
    image: implementationImg,
    name: "Integrations & Modernization",
    body: "Connect systems, modernize architecture and improve technology foundations.",
    href: "/services/integrations-modernization",
  },
  {
    image: retailImg,
    name: "Enterprise AI Solutions",
    body: "Apply AI where it can create measurable business value.",
    href: "/what-we-do/delivery-support/enterprise-agentic-ai",
  },
  {
    image: supportImg,
    name: "Quality Engineering Factory",
    body: "Build quality and reliability into enterprise technology delivery.",
    href: "/what-we-do/delivery-support/quality-engineering-factory",
  },
  {
    image: hospitalityImg,
    name: "Managed Support & Expansion",
    body: "Keep systems healthy, supported and ready for what's next.",
    href: "/what-we-do/delivery-support/managed-support-expansion",
  },
  {
    image: engineeringImg,
    name: "Global Capability Centers",
    body: "Extend your technology capacity with dedicated delivery capabilities.",
    href: "/what-we-do/delivery-support/global-capability-centers",
  },
];

function DsCapabilities() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[var(--blue-light)]/40 py-28">
      <div aria-hidden className="mesh-blobs-light opacity-60" />
      <div className="container-enterprise relative">
        <div className="max-w-2xl">
          <p className="eyebrow">Delivery capabilities</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Whatever stage you&apos;re at, we can meet you there.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((c) => (
            <a key={c.name} href={c.href} className="group card-lift flex flex-col overflow-hidden rounded-xl border border-border bg-white">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/50 to-transparent" />
                <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[var(--navy-deep)] shadow-sm backdrop-blur">
                  {c.name}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="flex-1 text-sm leading-relaxed text-[var(--blue-gray)]">{c.body}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--royal)]">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  4. "WHERE ARE YOU NOW?" CTA BANNER  ───────────────────────────── */
function DsWhereAreYouNow() {
  return (
    <section className="bg-white py-20">
      <div className="container-enterprise">
        <div className="overflow-hidden rounded-2xl bg-[var(--navy)]">
          <div className="flex flex-col items-start justify-between gap-6 px-8 py-10 sm:flex-row sm:items-center sm:px-12">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                Wherever you are in the journey, there&apos;s a path forward.
              </h3>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/70">
                Take the assessment and know your requirements better.
              </p>
            </div>
            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--navy-deep)] transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Take the Assessment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  5. DELIVERY ASSURANCE  ───────────────────────────── */
const ASSURANCE = [
  { icon: Target, title: "Business alignment", body: "Solutions mapped to business priorities." },
  { icon: ShieldCheck, title: "Delivery governance", body: "Clear ownership, milestones and accountability." },
  { icon: CheckCircle2, title: "Quality by design", body: "Testing and validation embedded throughout delivery." },
  { icon: TrendingUp, title: "Continuous improvement", body: "Support doesn't stop at go-live." },
];

function DsAssurance() {
  return (
    <section className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <div className="max-w-2xl">
          <p className="eyebrow">Delivery assurance</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Built for predictable delivery
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ASSURANCE.map((a) => (
            <div key={a.title} className="card-lift group relative overflow-hidden rounded-xl border border-border bg-white p-8">
              <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-[var(--royal)] transition-transform duration-500 group-hover:scale-x-100" />
              <span className="inline-grid h-11 w-11 place-items-center rounded-2xl bg-[var(--blue-light)] text-[var(--royal)] ring-1 ring-inset ring-[var(--royal)]/20">
                <a.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-[var(--navy-deep)]">{a.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--blue-gray)]">{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  6. SUPPORT MODEL (dedicated, dark, distinct from capability cards)  ───────────────────────────── */
const SUPPORT_STAGES = [
  { icon: ShieldCheck, title: "Stabilize", body: "Hypercare and post-launch support." },
  { icon: Settings2, title: "Maintain", body: "Application and platform support." },
  { icon: TrendingUp, title: "Optimize", body: "Performance improvements and enhancements." },
  { icon: Layers, title: "Expand", body: "New modules, capabilities and business requirements." },
];

function DsSupportModel() {
  return (
    <section className="hero-dark relative overflow-hidden py-28 text-white">
      <div aria-hidden className="hero-orbs opacity-50" />
      <div aria-hidden className="hero-grid" />
      <div className="container-enterprise relative z-10">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--cyan-soft)]">
            <LifeBuoy className="h-3.5 w-3.5" /> Support model
          </span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Go-live isn&apos;t the finish line.
          </h2>
        </div>
        <div className="relative mt-14">
          <div aria-hidden className="absolute left-0 right-0 top-7 hidden h-0.5 bg-white/10 lg:block" />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {SUPPORT_STAGES.map((s, i) => (
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
      </div>
    </section>
  );
}

/* ─────────────────────────────  7. GLOBAL DELIVERY  ───────────────────────────── */
const GLOBAL_DELIVERY = [
  { icon: Globe, label: "Global delivery coverage" },
  { icon: Users, label: "Specialized talent" },
  { icon: Building2, label: "Delivery centers" },
  { icon: Layers, label: "Functional + technical expertise" },
  { icon: Settings2, label: "Flexible engagement models" },
];

function DsGlobalDelivery() {
  return (
    <section className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <div className="max-w-2xl">
          <p className="eyebrow">Global delivery</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            The capability to deliver at global scale.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {GLOBAL_DELIVERY.map((g) => (
            <div key={g.label} className="flex flex-col items-start gap-4 rounded-xl border border-border bg-white p-6">
              <span className="inline-grid h-11 w-11 place-items-center rounded-2xl bg-[var(--blue-light)] text-[var(--royal)] ring-1 ring-inset ring-[var(--royal)]/20">
                <g.icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold leading-snug text-[var(--navy-deep)]">{g.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  8. PROOF  ───────────────────────────── */
const PROOF_STATS: [string, string][] = [
  ["320+", "Projects"],
  ["300+", "Dynamics 365 consultants"],
  ["50+", "Active customers"],
  ["24/7", "Global delivery"],
];

const DS_CASE_STUDIES = [
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

function DsProof() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[var(--blue-light)]/40 py-28">
      <div aria-hidden className="mesh-blobs-light opacity-60" />
      <div className="container-enterprise relative">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow">Proof</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
              Delivery that holds up in the real world.
            </h2>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--royal)]">
            View more
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
          {PROOF_STATS.map(([v, l]) => (
            <div key={l} className="bg-white px-6 py-8 text-center">
              <div className="text-3xl font-bold tracking-tight text-[var(--navy-deep)]">{v}</div>
              <div className="mt-1.5 text-xs font-medium leading-tight text-[var(--blue-gray)]">{l}</div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {DS_CASE_STUDIES.map((c) => (
            <CaseStudyCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  9. FAQ  ───────────────────────────── */
const DS_FAQS: [string, string][] = [
  [
    "How long does implementation take?",
    "It depends on scope and complexity, a phased approach means value can start showing before the full rollout is complete.",
  ],
  [
    "Can Lumovy take over an existing implementation?",
    "Yes. This is a common starting point, especially where an existing implementation isn't delivering as expected.",
  ],
  [
    "Can you migrate from legacy ERP systems?",
    "Yes, Lumovy's legacy system migration services is built specifically around moving off aging systems without disrupting business continuity.",
  ],
  [
    "What happens after go-live?",
    "Go-live moves into the support model, stabilize, maintain, optimize, expand, so the relationship continues rather than ending at deployment.",
  ],
  [
    "What does managed support include?",
    "Ongoing application and platform support, performance improvements, and room to expand as new requirements come up, delivered as part of Lumovy's Microsoft 365 managed service for Dynamics 365 environments.",
  ],
  [
    "Can Lumovy work alongside an internal IT team?",
    "Yes, engagement models are flexible enough to complement an existing team rather than replace it.",
  ],
  [
    "Can delivery be phased?",
    "Yes, the Assess-Design-Build-Launch-Optimize model is built to support phased rollouts rather than one big-bang deployment.",
  ],
  [
    "Do you provide global delivery?",
    "Yes, through Global Capability Centers, combining specialized talent with flexible engagement models across regions.",
  ],
];

function DsFAQ() {
  return (
    <section className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <FaqAccordion
          title="Frequently asked questions"
          intro="Implementation timelines, migration, support and global delivery: the questions delivery leaders ask."
          items={DS_FAQS}
        />
      </div>
    </section>
  );
}

/* ─────────────────────────────  10. FINAL CTA  ───────────────────────────── */
function DsFinalCTA() {
  return (
    <FinalCtaSection
      id="contact"
      title="Let's move your roadmap forward."
      subtitle="Whether you're implementing, migrating, modernizing or scaling, let's determine the right path."
      primary={{ label: "Book a Consultation", href: "#contact", icon: true }}
    />
  );
}
