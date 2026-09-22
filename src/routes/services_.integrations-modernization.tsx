import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Download,
  CreditCard,
  Store,
  Utensils,
  Search,
  PenTool,
  Cable,
  CheckCircle2,
  LifeBuoy,
  Database,
  ArrowRightLeft,
  Cloud,
  Cpu,
  Workflow,
} from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Nav, Footer, FaqAccordion, FinalCtaSection } from "./index";
import d365Logo from "@/assets/Dynamics365.webp";
import powerPlatformLogo from "@/assets/PowerPlatform.png";
import azureLogo from "@/assets/azure-logo.png";
import adyenLogo from "@/assets/Adyen.png";
import shift4Logo from "@/assets/Shift4.png";
import clarityRfidLogo from "@/assets/ClarityRFID.webp";
import testimonialImg from "@/assets/testimonial.webp";
import retailImg from "@/assets/industries/retail.jpg";
import hospitalityImg from "@/assets/industries/hospitality.jpg";
import implementationImg from "@/assets/services/implementation.jpg";
import engineeringImg from "@/assets/services/engineering.jpg";
import consultingImg from "@/assets/services/consulting.jpg";
import supportImg from "@/assets/services/support.jpg";

export const Route = createFileRoute("/services_/integrations-modernization")({
  component: IntegrationsPage,
  head: () => ({
    meta: [
      { title: "Integrations & Modernization | Lumovy" },
      {
        name: "description",
        content:
          "Connect systems and modernize applications. Integrate Microsoft Dynamics 365 with payment platforms, retail technologies, ERP, and business systems into one connected, scalable enterprise.",
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

function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <IntHero />
      <IntEcosystem />
      <IntExpertise />
      <IntProcess />
      <IntProofKit />
      <IntTechnical />
      <IntFAQ />
      <IntInsights />
      <IntClosingCTA />
      <Footer />
    </div>
  );
}

/* ─────────────────────────────  1. HERO (solid corporate blue + gradient blobs)  ───────────────────────────── */
function IntHero() {
  return (
    <section className="hero-blue-static overflow-hidden">
      <div aria-hidden className="hero-grid" />
      <div className="container-enterprise relative z-10 py-24 lg:py-28">
        <div className="max-w-3xl">
          <span className="hero-content-in text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--cyan-soft)]">
            Integrations &amp; Modernization
          </span>
          <h1 className="hero-content-in mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]" style={{ animationDelay: "80ms" }}>
            Connect Systems. Modernize Applications. Move Business Forward.
          </h1>
          <p className="hero-content-in mt-6 max-w-2xl text-base leading-relaxed text-white/70" style={{ animationDelay: "160ms" }}>
            Disconnected systems slow decisions, increase costs, and limit growth. Modernize legacy
            applications and integrate Microsoft Dynamics 365 with payment platforms, retail
            technologies, ERP, and business systems, creating one connected, scalable enterprise.
          </p>
          <div className="hero-content-in mt-9 flex flex-wrap gap-3" style={{ animationDelay: "240ms" }}>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--navy-deep)] transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30"
            >
              <Calendar className="h-4 w-4" />
              Get an Integration Architecture Review
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#expertise"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              <Download className="h-4 w-4" />
              Explore Integration Accelerators
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  2. TRUSTED INTEGRATION ECOSYSTEM  ───────────────────────────── */
const ECOSYSTEM_LOGOS = [
  { src: d365Logo, alt: "Microsoft Dynamics 365", h: "h-9" },
  { src: azureLogo, alt: "Azure", h: "h-9" },
  { src: powerPlatformLogo, alt: "Power Platform", h: "h-9" },
  { src: adyenLogo, alt: "Adyen", h: "h-6" },
  { src: shift4Logo, alt: "Shift4", h: "h-6" },
  { src: clarityRfidLogo, alt: "Clarity RFID", h: "h-8" },
];

function IntEcosystem() {
  return (
    <section className="bg-white py-28">
      <div className="container-enterprise">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Trusted Integration Ecosystem
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[var(--blue-gray)]">
            Built on Microsoft technologies with proven integration experience across commerce,
            payments, inventory, and business operations.
          </p>
        </div>

        {/* Single logo strip — all ecosystem + partner logos in white boxes */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
          {ECOSYSTEM_LOGOS.map((l) => (
            <div key={l.alt} className="flex items-center justify-center rounded-lg border border-border bg-white px-9 py-6">
              <img src={l.src} alt={l.alt} loading="lazy" className={`${l.h} w-auto object-contain`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  3. INTEGRATION EXPERTISE (picture cards)  ───────────────────────────── */
const EXPERTISE = [
  {
    icon: CreditCard,
    name: "Payments Without Complexity",
    image: implementationImg,
    body: "Integrate leading payment providers with Dynamics 365 Commerce to deliver secure omnichannel payments, faster reconciliation, and seamless customer experiences.",
  },
  {
    icon: Store,
    name: "Connect Stores to Your Business",
    image: retailImg,
    body: "Connect RFID, POS, warehouse, inventory, and store systems to improve inventory accuracy, fulfillment, and operational visibility.",
  },
  {
    icon: Utensils,
    name: "Hospitality & Kitchen Integration",
    image: hospitalityImg,
    body: "Integrate kitchen display systems, POS, order management, and finance to streamline operations and improve guest experiences.",
  },
  {
    icon: Cloud,
    name: "Microsoft Enterprise Integration",
    image: engineeringImg,
    body: "Use Azure Integration Services and Power Platform to connect ERP, CRM, WMS, finance, eCommerce, and third-party applications while enabling workflow automation, customer portals, and real-time analytics.",
  },
];

function IntExpertise() {
  return (
    <section id="expertise" className="relative overflow-hidden border-y border-border bg-[var(--blue-light)]/40 py-28">
      <div aria-hidden className="mesh-blobs-light opacity-60" />
      <div className="container-enterprise relative">
        <div className="max-w-2xl">
          <p className="eyebrow">Integration expertise</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Named, proven integration paths, not a generic promise
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {EXPERTISE.map((e, i) => (
            <Reveal key={e.name} delay={(i % 2) * 90}>
              <article className="group card-lift flex h-full flex-col overflow-hidden rounded-xl border border-border bg-white">
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <img src={e.image} alt={e.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 inline-grid h-11 w-11 place-items-center rounded-xl bg-white/95 text-[var(--royal)] shadow-sm">
                    <e.icon className="h-5 w-5" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-lg font-semibold leading-snug text-[var(--navy-deep)]">{e.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--blue-gray)]">{e.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  4. HOW WE INTEGRATE (animated process)  ───────────────────────────── */
const PHASES = [
  { icon: Search, title: "Discover", body: "Assess applications, business processes, and integration opportunities." },
  { icon: PenTool, title: "Design", body: "Create a scalable integration architecture aligned with business goals." },
  { icon: Cable, title: "Connect", body: "Build secure integrations using Microsoft best practices and reusable accelerators." },
  { icon: CheckCircle2, title: "Validate", body: "Perform comprehensive end-to-end testing before deployment." },
  { icon: LifeBuoy, title: "Optimize & Support", body: "Proactive monitoring, managed services, and continuous improvement." },
];

function IntProcess() {
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
          <p className="eyebrow">How we integrate</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            A phased approach, from discovery to managed support
          </h2>
        </div>
        <div className="relative mt-16">
          <div aria-hidden className="absolute left-0 right-0 top-7 hidden h-0.5 bg-[var(--blue-light)] lg:block" />
          <div aria-hidden className="absolute left-0 top-7 hidden h-0.5 bg-gradient-to-r from-[var(--royal)] via-[var(--azure)] to-[var(--cyan-soft)] lg:block" style={{ width: `${progress * 100}%`, transition: "width 0.1s linear" }} />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
            {PHASES.map((s, i) => {
              const reached = progress >= i / (PHASES.length - 1) - 0.02;
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

/* ─────────────────────────────  5. PROOF KIT (case study + testimonial)  ───────────────────────────── */
function IntProofKit() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[var(--blue-light)]/40 py-28">
      <div aria-hidden className="mesh-blobs-light opacity-60" />
      <div className="container-enterprise relative">
        <div className="max-w-2xl">
          <p className="eyebrow">Proof kit</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            A complex landscape, simplified and connected
          </h2>
        </div>
        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[1.35fr_1fr]">
          <div className="flex min-h-[440px] flex-col justify-between rounded-xl border border-border bg-white p-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--royal)]">
                Retail Enterprise
              </span>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--navy-deep)]">
                Disconnected Systems, Unified into One Platform
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[var(--blue-gray)]">
                A retail enterprise running a patchwork of disconnected systems partnered with Lumovy
                to integrate its ERP, POS, and e-commerce platforms into one connected foundation,
                cutting manual reconciliation and giving every team the same real-time data.
              </p>
            </div>
            <div>
              <div className="grid grid-cols-3 gap-3 border-t border-border pt-6">
                {[
                  ["Faster", "Business processes"],
                  ["Improved", "Inventory visibility"],
                  ["Reduced", "Manual effort"],
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
                Talk to us about your integration
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          {/* Testimonial: photo + colorless glass-blur scrim + white text (reference style) */}
          <figure className="relative overflow-hidden rounded-xl">
            <img src={testimonialImg} alt="Integration transformation leader" className="absolute inset-0 h-full w-full object-cover object-top" />
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/45 to-transparent" />
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 backdrop-blur-[3px] [mask-image:linear-gradient(to_top,black_35%,transparent)]" />
            <figcaption className="relative z-10 flex h-full min-h-[440px] flex-col justify-end p-8">
              <div className="text-3xl font-bold tracking-tight text-white">Scalable</div>
              <div className="mt-1 text-sm text-white/80">A foundation built for future growth</div>
              <blockquote className="mt-4 text-sm leading-relaxed text-white/90">
                &ldquo;Lumovy simplified a complex integration landscape while creating a scalable
                foundation for future growth.&rdquo;
              </blockquote>
              <div className="mt-4 border-t border-white/20 pt-3">
                <div className="text-sm font-semibold text-white">Director of IT</div>
                <div className="text-xs text-white/70">Retail Enterprise</div>
              </div>
            </figcaption>
          </figure>
        </div>

        {/* By the numbers strip */}
        <div className="mt-6 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
          {[
            ["Microsoft Dynamics 365", "Specialists across commerce & finance"],
            ["Retail & Hospitality", "Pre-built integration accelerators"],
            ["End-to-end", "Implementation & managed services"],
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

/* ─────────────────────────────  6. TECHNICAL CREDIBILITY (architecture)  ───────────────────────────── */
const TECH_STACK = [
  { icon: Cloud, label: "Azure Integration Services" },
  { icon: Cable, label: "APIs & connectors" },
  { icon: Workflow, label: "Power Platform automation" },
  { icon: Database, label: "Dynamics 365 core" },
];

function IntTechnical() {
  return (
    <section className="hero-dark relative overflow-hidden py-28 text-white">
      <div aria-hidden className="hero-orbs opacity-50" />
      <div aria-hidden className="hero-grid" />
      <div className="container-enterprise relative z-10 grid items-center gap-14 lg:grid-cols-2">
        {/* Left: copy + stack */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--cyan-soft)]">
            <Cpu className="h-3.5 w-3.5" /> Technical credibility
          </span>
          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            Secure, scalable integrations built on Microsoft
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/70">
            Lumovy uses Azure Integration Services, APIs, Power Platform, and Microsoft Dynamics 365
            to build secure, scalable enterprise integrations, resilient by design, with idempotent
            sync and automated reconciliation.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {TECH_STACK.map((t) => (
              <li key={t.label} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 backdrop-blur-sm">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/10 text-[var(--cyan-soft)]">
                  <t.icon className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium text-white/85">{t.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: featured architecture pattern diagram */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-7 backdrop-blur-sm">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[var(--cyan-soft)]">
            Featured pattern
          </p>
          <p className="mt-2 text-sm text-white/60">
            Payments flowing securely from processor to commerce, reconciled automatically.
          </p>
          <div className="mt-7 flex flex-col gap-3">
            {[
              { label: "Adyen", sub: "Payment processor", icon: CreditCard, accent: false },
              { label: "Azure Integration Services", sub: "Idempotent integration layer", icon: Cloud, accent: true },
              { label: "Dynamics 365 Commerce", sub: "Unified ledger & reconciliation", icon: Database, accent: false },
            ].map((b, i) => (
              <div key={b.label}>
                <div
                  className={
                    "flex items-center gap-3 rounded-xl px-5 py-4 " +
                    (b.accent
                      ? "bg-[var(--royal)] ring-1 ring-[var(--cyan-soft)]/40"
                      : "border border-white/12 bg-white/[0.03]")
                  }
                >
                  <span className={"grid h-10 w-10 shrink-0 place-items-center rounded-lg " + (b.accent ? "bg-white/15 text-[var(--cyan-soft)]" : "bg-white/8 text-white/80")}>
                    <b.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-white">{b.label}</div>
                    <div className="text-xs text-white/55">{b.sub}</div>
                  </div>
                </div>
                {i < 2 && (
                  <div className="flex justify-center py-1.5">
                    <ArrowRightLeft className="h-4 w-4 rotate-90 text-[var(--cyan-soft)]/60" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  7. FAQ  ───────────────────────────── */
const FAQS = [
  {
    q: "Can you integrate with our existing systems?",
    a: "Yes. We integrate Dynamics 365 with ERP, CRM, WMS, finance, payment, and third-party applications.",
  },
  {
    q: "Can you automate business processes?",
    a: "Yes. We automate approvals, document processing, notifications, reporting, and operational workflows using Microsoft Power Platform.",
  },
  {
    q: "Do you replace existing systems?",
    a: "Not always. We maximize existing investments while modernizing where it creates the most value.",
  },
  {
    q: "How do you ensure quality?",
    a: "Every project includes structured testing, validation, and deployment planning.",
  },
  {
    q: "Do you provide post-go-live support?",
    a: "Yes. Our Managed Services team provides ongoing optimization and support.",
  },
];

function IntFAQ() {
  return (
    <section className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <FaqAccordion
          title="Frequently asked questions"
          intro="Existing systems, automation, quality and support: the questions integration leaders ask."
          items={FAQS.map((f) => [f.q, f.a] as [string, string])}
        />
      </div>
    </section>
  );
}

/* ─────────────────────────────  8. INSIGHTS  ───────────────────────────── */
const INSIGHTS = [
  { tag: "Connector", title: "Adyen Connector: unified omnichannel payments on Dynamics 365 Commerce", read: "6 min read", image: consultingImg },
  { tag: "Integration", title: "Shopify integration: syncing storefronts with Dynamics 365 in real time", read: "5 min read", image: supportImg },
  { tag: "Capability", title: "Digital signature workflows: faster approvals across the business", read: "4 min read", image: engineeringImg },
];

function IntInsights() {
  return (
    <section className="bg-white py-28">
      <div className="container-enterprise">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow">Related insights</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
              Integration thought leadership
            </h2>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--royal)]">
            View all insights
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {INSIGHTS.map((p) => (
            <a key={p.title} href="#" className="group card-lift flex flex-col overflow-hidden rounded-xl border border-border bg-white">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <img src={p.image} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-md bg-white/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--royal)] shadow-sm">
                  {p.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs text-[var(--blue-gray)]">{p.read}</span>
                <h3 className="mt-2 flex-1 text-lg font-semibold leading-snug text-[var(--navy-deep)]">{p.title}</h3>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--royal)]">
                  Read more
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

/* ─────────────────────────────  10. CLOSING CTA (reuses homepage FinalCtaSection)  ───────────────────────────── */
function IntClosingCTA() {
  return (
    <FinalCtaSection
      id="contact"
      title="Ready to Modernize Your Business Ecosystem?"
      subtitle="Whether you're modernizing legacy applications or connecting enterprise systems, Lumovy delivers secure, scalable integrations that accelerate business growth."
      microcopy="Connect with our experts and receive tailored recommendations within one business day."
      primary={{ label: "Schedule an Integration Assessment", href: "#contact", icon: true }}
      secondary={{ label: "Explore Integration Accelerators", href: "#expertise" }}
      blueStatic
    />
  );
}
