import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarClock,
  Boxes,
  Search,
  CalendarCheck2,
  Smartphone,
  Building2,
  Network,
  Layers,
  Wrench,
  Cable,
  ScaleIcon,
  RefreshCcw,
  BadgeCheck,
  Store,
  Sparkles,
} from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Nav, Footer, FaqAccordion, FinalCtaSection } from "./index";
import hospitalityImg from "@/assets/products/hospitality-tablet.jpg";
import d365Logo from "@/assets/Dynamics365.webp";
import azureLogo from "@/assets/azure-logo.png";

export const Route = createFileRoute("/what-we-do_/products-accelerators_/hospitality-solution")({
  component: HospitalitySolutionPage,
  head: () => ({
    meta: [
      { title: "Innovative Hospitality Solution | Lumovy" },
      {
        name: "description",
        content:
          "Lumovy IHS brings event-driven hospitality operations together on Dynamics 365 Commerce, connecting POS, inventory, menus, pricing and guest experiences across high-volume venues and restaurants.",
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

function HospitalitySolutionPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <IhsHero />
      <IhsTrustAnchor />
      <IhsProblem />
      <IhsCapabilities />
      <IhsIntegration />
      <IhsLaunch />
      <IhsProofKit />
      <IhsFAQ />
      <IhsClosingCTA />
      <Footer />
    </div>
  );
}

/* ─────────────────────────────  01. HERO  ───────────────────────────── */
function IhsHero() {
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
            Lumovy Innovative Hospitality Solution
          </span>
          <h1 className="hero-content-in mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]" style={{ animationDelay: "80ms" }}>
            Run Every Rush Like It Was Planned
          </h1>
          <p className="hero-content-in mt-6 max-w-2xl text-base leading-relaxed text-white/70" style={{ animationDelay: "160ms" }}>
            Lumovy IHS brings event-driven hospitality operations together on Dynamics 365
            Commerce, connecting POS, inventory, menus, pricing and guest experiences across
            high-volume venues and restaurants.
          </p>
          <div className="hero-content-in mt-9 flex flex-wrap gap-3" style={{ animationDelay: "240ms" }}>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--navy-deep)] transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30"
            >
              <CalendarClock className="h-4 w-4" />
              See the Accelerator Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#capabilities"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Explore Core Capabilities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  02. TRUST ANCHOR  ───────────────────────────── */
const TRUST_BADGES = [
  { icon: d365Logo, alt: "Microsoft Dynamics 365 Commerce", label: "Microsoft Dynamics 365 Commerce", isImg: true },
  { icon: BadgeCheck, alt: "", label: "Microsoft Marketplace Listed", isImg: false },
  { icon: azureLogo, alt: "Azure Integration Layer", label: "Azure Integration Layer", isImg: true },
  { icon: BadgeCheck, alt: "", label: "Built on LS Retail's LS First", isImg: false },
];

function IhsTrustAnchor() {
  return (
    <section className="bg-white py-28">
      <div className="container-enterprise">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Built on Microsoft</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Built on Dynamics 365 Commerce, Not a Project From Zero
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[var(--blue-gray)]">
            Lumovy IHS extends the capabilities of Microsoft Dynamics 365 Commerce for
            high-volume hospitality and event-driven environments. Originating from LS
            Retail&rsquo;s LS First solution, it brings together the operational capabilities
            needed to manage changing demand across venues, events and service channels.
          </p>
          <a
            href="#"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--royal)]"
          >
            View on Microsoft Marketplace
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_BADGES.map((b) => (
            <div key={b.label} className="flex items-center gap-3 rounded-xl border border-border bg-white px-5 py-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[var(--blue-light)] text-[var(--royal)] ring-1 ring-inset ring-[var(--royal)]/20">
                {b.isImg ? (
                  <img src={b.icon as string} alt={b.alt} loading="lazy" className="h-5 w-auto object-contain" />
                ) : (
                  <BadgeCheck className="h-5 w-5" />
                )}
              </span>
              <span className="text-sm font-semibold leading-snug text-[var(--navy-deep)]">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  03. THE PROBLEM IT SOLVES  ───────────────────────────── */
const PROBLEMS = [
  {
    title: "Manage event-driven demand",
    body: "Configure menus, pricing and promotions around specific events, locations and demand patterns.",
  },
  {
    title: "Keep front and back office in sync",
    body: "Connect POS activity with inventory and operational data for better visibility across venues.",
  },
  {
    title: "Reduce service friction",
    body: "Support faster ordering across mobile apps, kiosks and pop-ups while giving teams the information they need to serve guests efficiently.",
  },
  {
    title: "Operate consistently across venues",
    body: "Apply menu, pricing and operational strategies across multiple locations while retaining the flexibility each venue requires.",
  },
];

function IhsProblem() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-[var(--blue-light)]/40 py-28">
      <div aria-hidden className="mesh-blobs-light opacity-60" />
      <div className="container-enterprise relative">
        <div className="max-w-2xl">
          <p className="eyebrow">The problem it solves</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            When Demand Changes by the Hour, Your Operations Have to Keep Up.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-[var(--blue-gray)]">
            A sold-out event, a last-minute menu change or a sudden demand spike can put pressure
            on every part of a hospitality operation. Lumovy IHS helps you respond without
            creating more operational complexity.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map((p, i) => (
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
  { icon: CalendarCheck2, title: "Event-Based Menus", body: "Create menus around specific events, venues, customer needs and operating conditions." },
  { icon: ScaleIcon, title: "Dynamic Pricing & Promotions", body: "Configure event-specific price books and promotional strategies that can respond to changing demand." },
  { icon: Boxes, title: "Real-Time Inventory", body: "Keep inventory data synchronized across front-of-house and back-office operations to support accurate fulfillment and reduce stockout risk." },
  { icon: Search, title: "Smart Item Search", body: "Help teams quickly find the right items based on active menu configurations, improving speed of service." },
  { icon: Sparkles, title: "Intelligent Menu Scheduling", body: "Automate menu setups and eligible item assignments so teams spend less time managing repetitive changes." },
  { icon: Smartphone, title: "Frictionless Ordering", body: "Support ordering across mobile apps, kiosks and pop-up environments to improve throughput and guest convenience." },
  { icon: Store, title: "Multi-Venue Operations", body: "Maintain consistent pricing, menu and operational controls across venues while scaling the solution as your business grows." },
  { icon: Cable, title: "Connected Hospitality Ecosystem", body: "Use Lumovy's Azure integration layer to connect third-party systems, eCommerce and external applications into a connected operational ecosystem." },
];

function IhsCapabilities() {
  return (
    <section id="capabilities" className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <div className="max-w-2xl">
          <p className="eyebrow">Core capabilities</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Everything You Need to Run Event-Driven Hospitality
          </h2>
        </div>
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={hospitalityImg}
              alt="Restaurant staff reviewing menu and inventory on a tablet"
              loading="lazy"
              className="h-full max-h-[560px] w-full object-cover"
            />
          </div>
          <ul className="space-y-5">
            {CAPABILITIES.map((c, i) => (
              <Reveal key={c.title} delay={i * 60}>
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
  { icon: Smartphone, title: "Guest Experience", items: "Mobile Apps · Kiosks · POS · Pop-Ups" },
  { icon: Layers, title: "Lumovy IHS", items: "Menus · Pricing · Promotions · Ordering · Event Management" },
  { icon: Boxes, title: "Dynamics 365 Commerce", items: "Products · Inventory · Orders · Customers · Commerce Data" },
  { icon: Network, title: "Connected Ecosystem", items: "Azure · eCommerce · Third-Party Systems · External Applications" },
];

function IhsIntegration() {
  return (
    <section className="hero-dark relative overflow-hidden py-28 text-white">
      <div aria-hidden className="hero-orbs opacity-50" />
      <div aria-hidden className="hero-grid" />
      <div className="container-enterprise relative z-10">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--cyan-soft)]">
            <Network className="h-3.5 w-3.5" /> How it integrates
          </span>
          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            One Operational View. Every Venue. Every Event.
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/70">
            Lumovy IHS connects the systems behind your hospitality operation so teams can act on
            the same information across the business.
          </p>
        </div>

        <div className="mx-auto mt-14 flex max-w-2xl flex-col gap-3">
          {INTEGRATION_LAYERS.map((layer, i) => (
            <div key={layer.title}>
              <div
                className={
                  "flex items-center gap-4 rounded-xl px-6 py-5 " +
                  (i === 1
                    ? "bg-[var(--royal)] ring-1 ring-[var(--cyan-soft)]/40"
                    : "border border-white/12 bg-white/[0.04]")
                }
              >
                <span className={"grid h-12 w-12 shrink-0 place-items-center rounded-lg " + (i === 1 ? "bg-white/15 text-[var(--cyan-soft)]" : "bg-white/8 text-white/80")}>
                  <layer.icon className="h-6 w-6" />
                </span>
                <div>
                  <div className="text-base font-semibold text-white">{layer.title}</div>
                  <div className="mt-0.5 text-xs text-white/60">{layer.items}</div>
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
          The result is a connected operating layer that helps hospitality teams respond to demand
          while maintaining visibility across venues and channels.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────  06. TIME TO LAUNCH  ───────────────────────────── */
const LAUNCH_STEPS = [
  { icon: Wrench, title: "Configure for the event", body: "Set up event-specific menus, pricing, promotions and item availability." },
  { icon: Cable, title: "Connect the operation", body: "Synchronize POS, inventory and commerce data across locations." },
  { icon: Building2, title: "Scale across venues", body: "Apply consistent operational controls and pricing strategies as your footprint grows." },
  { icon: RefreshCcw, title: "Adapt as demand changes", body: "Make changes to menus, inventory and pricing without rebuilding the underlying commerce experience." },
];

function IhsLaunch() {
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
            Be Ready Before the Crowd Arrives.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-[var(--blue-gray)]">
            Lumovy IHS gives hospitality operators a pre-built foundation for event-driven
            commerce, so teams can focus on configuring the experience around their business
            instead of building every capability from scratch.
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
function IhsProofKit() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[var(--blue-light)]/40 py-28">
      <div aria-hidden className="mesh-blobs-light opacity-60" />
      <div className="container-enterprise relative">
        <div className="max-w-2xl">
          <p className="eyebrow">Proof kit</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            See What Changes When Hospitality Operations Work From One Connected System.
          </h2>
        </div>
        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[1.35fr_1fr]">
          <div className="flex min-h-[440px] flex-col justify-between rounded-xl border border-border bg-white p-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--royal)]">
                The Challenge
              </span>
              <p className="mt-3 text-sm leading-relaxed text-[var(--blue-gray)]">
                High-volume hospitality businesses need to manage changing menus, event-driven
                demand, pricing, inventory and guest service across multiple venues without
                creating disconnected operational processes.
              </p>
              <span className="mt-6 block text-xs font-semibold uppercase tracking-widest text-[var(--royal)]">
                The Lumovy Approach
              </span>
              <p className="mt-3 text-sm leading-relaxed text-[var(--blue-gray)]">
                Lumovy IHS extends Dynamics 365 Commerce with event management, dynamic menus,
                real-time inventory, event-specific pricing, intelligent menu scheduling and
                multi-venue capabilities.
              </p>
            </div>
            <div>
              <div className="grid grid-cols-3 gap-3 border-t border-border pt-6">
                {[
                  ["Faster service", "Quicker access to active menu and item data"],
                  ["Synced inventory", "Front-of-house and back-office kept aligned"],
                  ["Responsive pricing", "Adapts to events and demand in real time"],
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
                Talk to us about your hospitality operation
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          {/* Photo + colorless glass-blur scrim */}
          <figure className="relative overflow-hidden rounded-xl">
            <img src={hospitalityImg} alt="Cafe and restaurant staff reviewing service on a tablet" className="absolute inset-0 h-full w-full object-cover" />
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/45 to-transparent" />
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 backdrop-blur-[3px] [mask-image:linear-gradient(to_top,black_35%,transparent)]" />
            <figcaption className="relative z-10 flex h-full min-h-[440px] flex-col justify-end p-8">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur">
                <Network className="h-3.5 w-3.5" />
                One connected system
              </span>
              <div className="mt-4 text-3xl font-bold tracking-tight text-white">Connected</div>
              <div className="mt-1 text-sm text-white/80">Front-of-house and back-office, one system</div>
            </figcaption>
          </figure>
        </div>

        {/* Business value strip */}
        <div className="mt-6 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
          {[
            ["Greater operational consistency", "Consistent control across venues, with location-specific flexibility"],
            ["Better guest experiences", "Frictionless ordering across mobile, kiosks and other channels"],
            ["Multi-venue ready", "Built to scale as your venue footprint grows"],
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

/* ─────────────────────────────  08. FAQ  ───────────────────────────── */
const FAQS = [
  {
    q: "Who is Lumovy IHS designed for?",
    a: "It is designed for hospitality businesses where demand changes quickly, including high-volume restaurants, venues and businesses managing multiple locations or event-driven operations.",
  },
  {
    q: "Can Lumovy IHS support event-specific menus?",
    a: "Yes. The solution supports event-based menus, intelligent menu scheduling and customer-specific menu configurations, allowing operators to adapt offerings around specific events and locations.",
  },
  {
    q: "Can pricing change by event or location?",
    a: "Yes. Lumovy IHS supports event-specific pricing through dynamic price books and promotional strategies tied to event profiles.",
  },
  {
    q: "Does it provide real-time inventory visibility?",
    a: "Yes. The solution synchronizes front-of-house POS and back-office inventory data and supports real-time inventory adjustments to help improve fulfillment and reduce stockout risk.",
  },
  {
    q: "Can it work across multiple venues?",
    a: "Yes. Multi-venue scalability is a core capability, allowing businesses to maintain consistent operational controls and pricing strategies across locations.",
  },
  {
    q: "Does Lumovy IHS integrate with third-party systems?",
    a: "Yes. Lumovy's Azure integration layer is designed to connect third-party systems, eCommerce and external applications with the broader Microsoft ecosystem.",
  },
  {
    q: "Is Lumovy IHS available through Microsoft Marketplace?",
    a: "Yes. The current Lumovy page provides a Microsoft Marketplace listing for the solution.",
  },
];

function IhsFAQ() {
  return (
    <section className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <FaqAccordion
          title="Frequently asked questions"
          intro="Menus, pricing, inventory, multi-venue scale and integration: the questions hospitality operators ask."
          items={FAQS.map((f) => [f.q, f.a] as [string, string])}
        />
      </div>
    </section>
  );
}

/* ─────────────────────────────  09. FINAL CTA  ───────────────────────────── */
function IhsClosingCTA() {
  return (
    <FinalCtaSection
      id="contact"
      title="Your Next Big Event Should Feel Like Business as Usual."
      subtitle="Bring your menus, pricing, inventory and guest experience together with Lumovy IHS. See how Lumovy can help you build a more responsive hospitality operation on Dynamics 365 Commerce."
      primary={{ label: "See the Accelerator Demo", href: "#contact", icon: true }}
      secondary={{ label: "Explore Core Capabilities", href: "#capabilities" }}
    />
  );
}
