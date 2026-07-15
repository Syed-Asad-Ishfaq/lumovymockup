import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Shield,
  Building2,
  Users,
  Gauge,
  Lock,
  FileCheck2,
  Globe2,
  LineChart,
  Linkedin,
  Phone,
  Mail,
  MapPin,
  Menu,
  Award,
  BadgeCheck,
  Play,
  Hotel,
  Store,
  Compass,
  Rocket,
  Wrench,
  Cog,
  LifeBuoy,
  Layers,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import implementationImg from "@/assets/services/implementation.jpg";
import consultingImg from "@/assets/services/consulting.jpg";
import engineeringImg from "@/assets/services/engineering.jpg";
import supportImg from "@/assets/services/support.jpg";
import retailImg from "@/assets/industries/retail.jpg";
import hospitalityImg from "@/assets/industries/hospitality.jpg";
import gilbarcoLogo from "@/assets/logos/gilbarco.png";
import mafLogo from "@/assets/logos/majid-al-futtaim.png";
import mattressFirmLogo from "@/assets/logos/mattress-firm.png";
import janieJackLogo from "@/assets/logos/janie-and-jack.png";
import fedexLogo from "@/assets/logos/fedex.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Lumovy",
          url: "https://www.lumovy.com",
          description:
            "Microsoft Solutions Partner delivering Dynamics 365, Azure, and Power Platform for regulated enterprises.",
          sameAs: ["https://www.linkedin.com/company/lumovy"],
        }),
      },
    ],
  }),
});

const CLIENT_LOGOS = [
  { src: gilbarcoLogo, alt: "Gilbarco Veeder-Root", sizeClass: "h-10 md:h-12" },
  { src: mafLogo, alt: "Majid Al Futtaim", sizeClass: "h-10 md:h-12" },
  { src: mattressFirmLogo, alt: "Mattress Firm", sizeClass: "h-20 md:h-24" },
  { src: janieJackLogo, alt: "Janie and Jack", sizeClass: "h-14 md:h-16" },
  { src: fedexLogo, alt: "FedEx", sizeClass: "h-10 md:h-12" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <TrustedBy />
      <Solutions />
      <Services />
      <MetricsBand />
      <Industries />
      <WhyLumovy />
      <CaseStudies />
      <Testimonials />
      <Framework />
      <Procurement />
      <Contact />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyCTA />
    </div>
  );
}

/* NAV */
type SubItem = { label: string; href: string };
type NavGroup = { heading: string; items: SubItem[] };
type NavMain = { label: string; groups?: NavGroup[]; href?: string };

const NAV_MENU: NavMain[] = [
  {
    label: "Products & Accelerators",
    groups: [
      {
        heading: "Retail & Commerce",
        items: [
          { label: "D365 for Hypermarkets", href: "#solutions" },
          { label: "B2B in a Box", href: "#solutions" },
          { label: "Consumer Swift Commerce", href: "#solutions" },
          { label: "In-Store Mobility Suite", href: "#solutions" },
        ],
      },
      {
        heading: "Hospitality & Operations",
        items: [
          { label: "Innovative Hospitality Solution (IHS)", href: "#solutions" },
          { label: "Clarity RFID Connector", href: "#solutions" },
        ],
      },
      {
        heading: "Platform & Performance",
        items: [
          { label: "Optim365", href: "#solutions" },
          { label: "PerfLens365", href: "#solutions" },
        ],
      },
    ],
  },
  {
    label: "Services",
    groups: [
      {
        heading: "Advisory & Delivery",
        items: [
          { label: "Advisory", href: "#services" },
          { label: "Implementation", href: "#services" },
          { label: "Legacy Migration", href: "#services" },
        ],
      },
      {
        heading: "Engineering & AI",
        items: [
          { label: "Integrations & Modernization", href: "#services" },
          { label: "Enterprise Agentic AI Solutions", href: "#services" },
          { label: "Quality Engineering Factory", href: "#services" },
        ],
      },
      {
        heading: "Run & Scale",
        items: [
          { label: "Managed Support & Expansion", href: "#services" },
          { label: "Global Capability Centers", href: "#services" },
        ],
      },
    ],
  },
  {
    label: "Industries",
    groups: [
      {
        heading: "Industries",
        items: [
          { label: "Retail & Omnichannel Commerce", href: "#industries" },
          { label: "Manufacturing & Supply Chain", href: "#industries" },
          { label: "Modern Grocery & Hypermarkets", href: "#industries" },
          { label: "Hospitality, Entertainment & Sports", href: "#industries" },
          { label: "Public Sector", href: "#industries" },
        ],
      },
    ],
  },
  {
    label: "Insights",
    groups: [
      {
        heading: "Insights",
        items: [
          { label: "Case Studies", href: "#case-studies" },
          { label: "Blogs", href: "#insights" },
          { label: "Whitepapers", href: "#insights" },
          { label: "News", href: "#insights" },
        ],
      },
    ],
  },
  { label: "About", href: "#why" },
  { label: "Contact", href: "#contact" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The bar is always solid white with navy text (including at the top, over
  // the dark hero). `scrolled` only adds a stronger shadow once you move.
  const solid = true;

  return (
    <header
      className={
        "sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur-md transition-shadow duration-300 " +
        (scrolled ? "shadow-fluent-sm" : "")
      }
      onMouseLeave={() => setActive(null)}
    >
      <div className="container-enterprise flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-xl bg-[var(--royal)] text-white">
            <span className="text-sm font-bold tracking-tight">L</span>
          </div>
          <span className={"text-[15px] font-bold tracking-tight transition-colors " + (solid ? "text-[var(--navy-deep)]" : "text-white")}>
            Lumovy
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_MENU.map((item) => {
            const hasMenu = !!item.groups;
            const isActive = active === item.label;
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => hasMenu && setActive(item.label)}
              >
                <a
                  href={item.href ?? "#"}
                  className={
                    "group relative inline-flex items-center gap-1 px-3 py-2 text-[13px] font-medium transition-colors " +
                    (isActive
                      ? "text-[var(--royal)]"
                      : solid
                        ? "text-[var(--navy-deep)] hover:text-[var(--royal)]"
                        : "text-white hover:text-white/80")
                  }
                >
                  {item.label}
                  {hasMenu && (
                    <ChevronDown
                      className={
                        "h-3.5 w-3.5 transition-transform duration-200 " +
                        (isActive ? "rotate-180" : "")
                      }
                    />
                  )}
                  <span
                    className={
                      "absolute inset-x-3 -bottom-px h-px bg-[var(--royal)] origin-left transition-transform duration-300 " +
                      (isActive ? "scale-x-100" : "scale-x-0")
                    }
                  />
                </a>
                {hasMenu && isActive && (
                  <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2">
                    <MegaMenu groups={item.groups!} />
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
            className={
              "inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-[13px] font-semibold transition-all hover:-translate-y-0.5 " +
              (solid
                ? "bg-[var(--royal)] text-white hover:bg-[var(--navy)] hover:shadow-lg hover:shadow-[var(--royal)]/25"
                : "bg-white text-[var(--navy-deep)] hover:shadow-lg hover:shadow-black/30")
            }
          >
            <Calendar className="h-3.5 w-3.5" />
            Book a consultation
          </a>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className={
            "grid h-9 w-9 place-items-center rounded-full border transition-colors lg:hidden " +
            (solid ? "border-border text-[var(--navy-deep)]" : "border-white/30 text-white")
          }
          aria-label="Menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div className="max-h-[70vh] overflow-y-auto border-t border-border bg-background lg:hidden">
          <div className="container-enterprise flex flex-col py-3">
            {NAV_MENU.map((item) => (
              <MobileMenuItem key={item.label} item={item} onNavigate={() => setOpen(false)} />
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-full bg-[var(--royal)] px-4 py-3 text-sm font-semibold text-white"
            >
              <Calendar className="h-4 w-4" /> Book a consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function MegaMenu({ groups }: { groups: NavGroup[] }) {
  const cols = Math.min(groups.length, 3);
  return (
    <div
      className="animate-menu-in rounded-3xl border border-border bg-white shadow-fluent-lg"
      style={{ minWidth: cols === 1 ? 280 : cols === 2 ? 480 : 640 }}
    >
      <div className="grid gap-6 p-6" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
        {groups.map((g) => (
          <div key={g.heading}>
            <div className="text-[10px] font-semibold uppercase tracking-widest text-[var(--royal)]">
              {g.heading}
            </div>
            <ul className="mt-3 space-y-1">
              {g.items.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="group flex items-center justify-between rounded-xl px-2 py-1.5 text-sm font-medium text-[var(--navy-deep)] transition-colors hover:bg-[var(--blue-light)]/50 hover:text-[var(--royal)]"
                  >
                    <span>{s.label}</span>
                    <ChevronRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileMenuItem({ item, onNavigate }: { item: NavMain; onNavigate: () => void }) {
  const [expanded, setExpanded] = useState(false);
  if (!item.groups) {
    return (
      <a href={item.href} onClick={onNavigate} className="py-2.5 text-sm font-medium text-[var(--navy-deep)]">
        {item.label}
      </a>
    );
  }
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-between py-3 text-sm font-semibold text-[var(--navy-deep)]"
      >
        {item.label}
        <ChevronDown className={"h-4 w-4 transition-transform " + (expanded ? "rotate-180" : "")} />
      </button>
      {expanded && (
        <div className="pb-3 pl-2">
          {item.groups.map((g) => (
            <div key={g.heading} className="mt-2">
              <div className="text-[10px] font-semibold uppercase tracking-widest text-[var(--royal)]">
                {g.heading}
              </div>
              <ul className="mt-1">
                {g.items.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} onClick={onNavigate} className="block py-1.5 text-sm text-[var(--navy-deep)]">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* HERO */
const HERO_SLIDES = [
  {
    eyebrow: "Microsoft Solutions Partner",
    headline: "Modernize mission-critical systems. Drive measurable business outcomes.",
    subhead:
      "From legacy modernization to AI driven innovation, Lumovy delivers Microsoft Dynamics 365 solutions that help enterprises move faster with less complexity.",
    cta: "See Client Outcomes",
    href: "#case-studies",
  },
  {
    eyebrow: "Agentic AI",
    headline: "AI Agents Designed Around the Way Your Business Runs Every Day.",
    subhead:
      "Purpose-built AI agents that connect with Dynamics 365 to automate processes while people stay in the loop.",
    cta: "Explore the Lumovy AI Factory",
    href: "#services",
  },
  {
    eyebrow: "Rapid Implementation Playbook",
    headline: "From Ideation to Value in 100 Days.",
    subhead:
      "See how Majid Al Futtaim launched Sava from zero infrastructure to a full Dynamics 365 implementation in 100 days.",
    cta: "Read the MAF Case Study",
    href: "#case-studies",
  },
  {
    eyebrow: "Quality & Trust",
    headline: "20,000+ Automated Tests Run Every Single Day, Across the Entire Globe.",
    subhead:
      "From fast test automation services to full QA ownership, our Quality Engineering team redesigns quality itself.",
    cta: "Explore Quality Engineering",
    href: "#services",
  },
  {
    eyebrow: "Microsoft Credentials",
    headline: "Microsoft Expertise That Accelerates Transformation.",
    subhead:
      "A top-rated Microsoft Solutions Partner delivering Microsoft Dynamics 365 Consulting, working directly and closely with Microsoft's product teams to drive business transformation.",
    cta: "See Our Microsoft Credentials",
    href: "#why",
  },
];

const HERO_SLIDE_MS = 6500;

function useHeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [phase, setPhase] = useState<"in" | "out">("in");

  // Auto-advance: fade the current slide OUT, then swap to the next and fade IN.
  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => setPhase("out"), HERO_SLIDE_MS - 400);
    return () => clearTimeout(t);
  }, [active, paused]);

  const handleAnimEnd = () => {
    if (phase === "out") {
      setActive((i) => (i + 1) % HERO_SLIDES.length);
      setPhase("in");
    }
  };

  const goTo = (i: number) => {
    if (i === active) return;
    setActive(i);
    setPhase("in");
  };

  return { active, paused, phase, setPaused, handleAnimEnd, goTo };
}

function HeroSlider({
  active,
  phase,
  setPaused,
  handleAnimEnd,
}: {
  active: number;
  phase: "in" | "out";
  setPaused: (v: boolean) => void;
  handleAnimEnd: () => void;
}) {
  const slide = HERO_SLIDES[active];

  return (
    <div
      className="flex flex-col lg:col-span-7"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Fixed-height wrapper so slide changes never reflow the page.
          Sized to fit the tallest slide (headline + longest subhead). */}
      <div className="relative min-h-[440px] sm:min-h-[420px] lg:min-h-[460px]">
        {/* Slide content — cross-fades in and out between slides */}
        <div
          key={active + phase}
          onAnimationEnd={handleAnimEnd}
          className={phase === "out" ? "hero-content-out" : "hero-content-in"}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--cyan-soft)] animate-soft-pulse" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--cyan-soft)]" />
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/70">
              {slide.eyebrow}
            </span>
          </div>
          <h1 className="mt-8 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-white sm:text-5xl lg:text-[56px] lg:leading-[1.06]">
            {slide.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-white/60">
            {slide.subhead}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={slide.href}
              className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              {slide.cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Tiny, glassy slide indicator — pinned centered at the hero's bottom */
function HeroDots({
  active,
  paused,
  onSelect,
}: {
  active: number;
  paused: boolean;
  onSelect: (i: number) => void;
}) {
  return (
    <div
      className="relative z-10 flex justify-center pt-6"
      role="tablist"
      aria-label="Hero slides"
    >
      <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2 py-1.5 backdrop-blur-md">
        {HERO_SLIDES.map((s, i) => (
          <button
            key={s.eyebrow}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={s.eyebrow}
            onClick={() => onSelect(i)}
            className="group relative h-0.5 w-6 overflow-hidden rounded-full bg-white/20"
          >
            <span
              className={
                "absolute inset-y-0 left-0 rounded-full bg-white/70 " +
                (i < active ? "w-full" : i === active ? "hero-timer-fill" : "w-0")
              }
              style={
                i === active && !paused
                  ? { animationDuration: `${HERO_SLIDE_MS}ms` }
                  : i === active
                    ? { width: "40%" }
                    : undefined
              }
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  const { active, paused, phase, setPaused, handleAnimEnd, goTo } = useHeroSlider();
  return (
    <section className="hero-dark relative overflow-hidden">
      <div aria-hidden className="hero-beam" />
      <div aria-hidden className="hero-orbs" />
      <div aria-hidden className="hero-grid" />
      <div aria-hidden className="hero-grain" />
      <div className="container-enterprise relative z-10 grid gap-14 pt-24 lg:grid-cols-12 lg:gap-10 lg:pt-32">
        <HeroSlider active={active} phase={phase} setPaused={setPaused} handleAnimEnd={handleAnimEnd} />
        <aside className="lg:col-span-5">
          <div className="glass-panel rounded-3xl p-7">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-[var(--cyan-soft)]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--cyan-soft)]">
                Schedule with leadership
              </span>
            </div>
            <h3 className="mt-3 text-xl font-semibold text-white">30-min executive briefing</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">
              Talk directly with a Lumovy engagement principal about what matters for your industry.
            </p>
            <ul className="mt-5 space-y-2.5">
              {[
                "NDA available on request",
                "Response within 1 business day",
                "Reference architecture on the call",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm text-white/80">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--cyan-soft)]" />
                  {t}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-3.5 text-sm font-semibold text-[var(--navy-deep)] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/30"
            >
              <Calendar className="h-4 w-4" />
              Book a consultation
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </aside>
      </div>
      {/* Slide indicator — centered across the full hero width, fixed spot at
          the bottom of the hero (does not move with slide content). */}
      <div className="relative z-10 pb-12 pt-8">
        <HeroDots active={active} paused={paused} onSelect={goTo} />
      </div>
    </section>
  );
}

/* TRUSTED */
function TrustedBy() {
  return (
    <section className="border-b border-border bg-white py-16">
      <div className="container-enterprise">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--blue-gray)]">
          Trusted by regulated enterprises worldwide
        </p>
        <div className="mt-10 grid grid-cols-2 items-center gap-x-8 gap-y-10 border-y border-border py-10 sm:grid-cols-3 lg:grid-cols-5">
          {CLIENT_LOGOS.map((l) => (
            <div key={l.alt} className="group flex items-center justify-center">
              <img
                src={l.src}
                alt={l.alt}
                loading="lazy"
                className={
                  "w-auto max-w-[180px] object-contain opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 " +
                  l.sizeClass
                }
              />
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-[var(--blue-gray)]">
          Additional engagements are covered by NDA. Client references available on qualified request.
        </p>
      </div>
    </section>
  );
}

/* METRICS */
function MetricsBand() {
  const metrics = [
    ["320+", "Completed projects"],
    ["300+", "Dynamics 365 consultants globally"],
    ["50+", "Active customers"],
    ["100 days", "Avg. time to go live"],
    ["99.5%", "Uptime maintained"],
    ["24/7", "Global delivery coverage"],
  ];
  return (
    <section className="relative overflow-hidden bg-[var(--navy-deep)] py-20 text-white">
      <div aria-hidden className="mesh-blobs opacity-50" />
      <div className="container-enterprise relative">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--cyan-soft)]">
            Outcomes at scale
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Measured impact, not vanity metrics.
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {metrics.map(([v, l]) => (
            <div
              key={l}
              className="scale-in-hover rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors hover:bg-white/[0.08]"
            >
              <div className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{v}</div>
              <div className="mt-2 text-xs font-medium leading-relaxed text-white/70">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* PRODUCTS & ACCELERATORS */
function Solutions() {
  const products = [
    {
      name: "D365 for Hypermarkets",
      image: retailImg,
      blurb:
        "A Dynamics 365 solution pre-configured for grocery and hypermarket store operations.",
    },
    {
      name: "Innovative Hospitality Solution",
      image: hospitalityImg,
      blurb:
        "Built on D365 Commerce and Finance, unifying hospitality operators' data and service.",
    },
    {
      name: "Clarity RFID Connector",
      image: engineeringImg,
      blurb:
        "Track inventory accurately and gain real-time visibility with our RFID connector.",
    },
    {
      name: "B2B in a Box",
      image: consultingImg,
      blurb:
        "A ready-made bundle for quote-to-cash on D365 Commerce, storefront to fulfilment.",
    },
    {
      name: "Consumer Swift Commerce",
      image: implementationImg,
      blurb:
        "A white-label React Native app linked to D365 Commerce for fast mobile launches.",
    },
    {
      name: "Optim365",
      image: supportImg,
      blurb:
        "A framework for D365 that governs data, optimizes licensing, and boosts performance.",
    },
    {
      name: "PerfLens365",
      image: consultingImg,
      blurb:
        "A performance toolkit spanning load testing, live monitoring, and D365 diagnostics.",
    },
    {
      name: "In-Store Mobility Suite",
      image: retailImg,
      blurb:
        "A set of Power Apps applications linked to D365 F&O for managing labeling, stock counts, and orders.",
    },
  ];
  return (
    <section id="solutions" className="relative overflow-hidden border-b border-border bg-[var(--blue-light)]/40 py-28">
      <div aria-hidden className="mesh-blobs-light opacity-50" />
      <div className="container-enterprise relative">
        <div className="max-w-2xl">
          <p className="eyebrow">Products &amp; Accelerators</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Shortening time-to-value with pre-built accelerators.
          </h2>
        </div>
      </div>

      {/* Horizontal swipe track — same pattern as Services */}
      <div
        className="container-enterprise relative mt-12"
        style={{
          ["--svc-card" as string]: "calc((min(1272px, 100vw - 3rem) - 3 * 1.5rem) / 4)",
          ["--svc-bleed" as string]: "max(0px, calc((100vw - 1320px) / 2 + 1.5rem))",
        }}
      >
        <div
          className="scroll-hide snap-x snap-mandatory -mx-6 -my-6 overflow-x-auto px-6 py-6"
          style={{ marginRight: "calc(-1 * var(--svc-bleed))" }}
        >
          <div className="flex gap-6 pr-6">
            {products.map((p) => (
              <article
                key={p.name}
                style={{ width: "var(--svc-card)" }}
                className="group card-lift flex min-w-[260px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-border bg-white"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    width={1024}
                    height={640}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="truncate text-base font-semibold leading-snug text-[var(--navy-deep)]">{p.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--blue-gray)]">{p.blurb}</p>
                  <div className="mt-auto pt-6">
                    <LearnMore label="Learn more" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* SERVICES */
function Services() {
  const services = [
    {
      name: "Advisory",
      image: consultingImg,
      approach:
        "We study your processes, uncover the gaps, and design a Business Process Transformation roadmap built around Business Process Automation for growth.",
      outcome: "A clear roadmap, aligned priorities.",
    },
    {
      name: "Implementation",
      image: implementationImg,
      approach:
        "Full Dynamics 365 implementation, from discovery and migration to integrations and deployment.",
      outcome: "Majid Al Futtaim's Sava brand live on ERP-enabled operations in under 100 days.",
    },
    {
      name: "Managed Support & Expansion",
      image: supportImg,
      approach:
        "24×7 Dynamics 365 managed services spanning Azure infrastructure, backed by SLAs and monitoring.",
      outcome: "120+ upgrades, enterprise SLA compliance.",
    },
    {
      name: "Integrations & Modernization",
      image: engineeringImg,
      approach:
        "Simplify operations and speed transformation with Azure and Power Platform tools.",
      outcome: "Unified integrations powered by Azure.",
    },
    {
      name: "Enterprise Agentic AI Solutions",
      image: consultingImg,
      approach:
        "Deploy production-ready AI agents for Enterprise Automation inside Microsoft with Copilot and custom solutions.",
      outcome: "Enterprise AI live in 20–60 days.",
    },
    {
      name: "Legacy Migration",
      image: implementationImg,
      approach:
        "Move from any legacy ERP to a modern Dynamics 365 ERP implementation with a proven, low-disruption framework.",
      outcome: "30% faster migration, full continuity.",
    },
    {
      name: "Quality Engineering Factory",
      image: engineeringImg,
      approach:
        "Deliver every release with confidence through AI driven testing and quality checks.",
      outcome: "6× faster validation, lighter testing.",
    },
    {
      name: "Global Capability Centers",
      image: supportImg,
      approach:
        "We build GCCs that grow into strategic, outcome-driven talent and innovation hubs.",
      outcome: "Specialized talent deployed in 3 weeks.",
    },
  ];
  return (
    <section id="services" className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <div>
          <p className="eyebrow">Services</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            From planning to performance, one partner.
          </h2>
        </div>
      </div>

      {/* Horizontal swipe track. The container-enterprise wrapper fixes the
          LEFT edge to the container (never bleeds left). The inner scroller
          uses a negative right margin to bleed only to the right viewport
          edge, so the 5th card peeks in the outer margin without moving the
          four. Inner padding gives the hover-lift + shadow room on all sides
          so nothing is cropped. */}
      <div
        className="container-enterprise mt-12"
        style={{
          // one card = (container inner width − 3 gaps) / 4
          ["--svc-card" as string]: "calc((min(1272px, 100vw - 3rem) - 3 * 1.5rem) / 4)",
          // distance from container's right edge out to the viewport edge
          ["--svc-bleed" as string]: "max(0px, calc((100vw - 1320px) / 2 + 1.5rem))",
        }}
      >
        <div
          className="scroll-hide snap-x snap-mandatory -mx-6 -my-6 overflow-x-auto px-6 py-6"
          style={{ marginRight: "calc(-1 * var(--svc-bleed))" }}
        >
          <div className="flex gap-6 pr-6">
            {services.map((s) => (
              <article
                key={s.name}
                style={{ width: "var(--svc-card)" }}
                className="group card-lift flex min-w-[240px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-border bg-white"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.name}
                    loading="lazy"
                    width={1024}
                    height={640}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold text-[var(--navy-deep)]">{s.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--blue-gray)]">{s.approach}</p>
                  <p className="mt-3 text-sm font-semibold text-[var(--success)]">{s.outcome}</p>
                  <div className="mt-auto pt-6">
                    <LearnMore />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* INDUSTRIES */
function Industries() {
  const items = [
    {
      name: "Retail & Omnichannel Commerce",
      image: retailImg,
      headline: "Unified Retail, Simplified",
      subhead:
        "Connect digital and physical retail with unified operations, intelligent fulfilment, and personalized customer experiences powered by Microsoft.",
    },
    {
      name: "Manufacturing & Supply Chain",
      image: implementationImg,
      headline: "Smarter Supply Chain Planning",
      subhead:
        "Align production, inventory, and supplier networks with intelligent planning, real-time visibility, and AI driven forecasting.",
    },
    {
      name: "Modern Grocery & Hypermarkets",
      image: engineeringImg,
      headline: "Smarter Grocery Retail",
      subhead:
        "Enable AI powered store operations, optimized supply chains, and intelligent merchandising for modern grocery and discount retail.",
    },
    {
      name: "Hospitality, Entertainment & Sports",
      image: hospitalityImg,
      headline: "Better Guest Experiences, Built In",
      subhead:
        "Our Hospitality technology solutions deliver frictionless dining, concessions, and venue experiences that maximize operational efficiency and revenue.",
    },
    {
      name: "Public Sector",
      image: consultingImg,
      headline: "Government Services, Modernized",
      subhead:
        "Our Government digital transformation and Public Sector digital services modernize operations with secure, compliant platforms that improve service delivery and operational resilience.",
    },
  ];
  return (
    <section id="industries" className="relative overflow-hidden border-b border-border bg-[var(--blue-light)]/40 py-28">
      <div aria-hidden className="mesh-blobs-light opacity-60" />
      <div className="container-enterprise relative">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow">Industries</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
              24/7 Expertise, On Demand.
            </h2>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--royal)]">
            Explore industry hub
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {items.map((i) => (
            <article key={i.name} className="group card-lift flex flex-col overflow-hidden rounded-3xl border border-border bg-white">
              <div className="relative aspect-[21/9] w-full overflow-hidden">
                <img
                  src={i.image}
                  alt={i.name}
                  loading="lazy"
                  width={1024}
                  height={439}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/40 to-transparent" />
                <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[var(--navy-deep)] shadow-sm backdrop-blur">
                  {i.name}
                </span>
              </div>
              <div className="flex flex-1 flex-col px-6 pb-6 pt-7">
                <h3 className="text-xl font-semibold leading-snug text-[var(--navy-deep)]">{i.headline}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--blue-gray)]">{i.subhead}</p>
                <div className="mt-auto pt-6">
                  <LearnMore label="Explore industry" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* WHY */
function WhyLumovy() {
  const pillars = [
    {
      icon: Shield,
      t: "End-to-End Ownership",
      d: "We own outcomes. Dedicated delivery leadership stays accountable for platform success, adoption, and lasting value creation.",
      proofs: ["Outcome accountability", "Executive oversight", "Named delivery principal"],
    },
    {
      icon: LifeBuoy,
      t: "Program Recovery Specialists",
      d: "We rescue distressed transformations. When programmes fall behind, exceed budget, or lose momentum, we restore structure, governance, and pace.",
      proofs: ["Recovery programmes", "Governance reset", "Adoption acceleration"],
    },
    {
      icon: Rocket,
      t: "Unlocking Platform Potential",
      d: "Implementation is just the start. We help organisations optimise processes, elevate experience, and unlock full platform value.",
      proofs: ["Platform optimisation", "User adoption", "Experience elevation"],
    },
    {
      icon: Layers,
      t: "Faster Time-to-Value by Design",
      d: "Configure-first, MVP-led. Our model uses proven accelerators and capability-led modelling to limit customisation, reduce risk, and deliver value quickly.",
      proofs: ["Configure-First", "MVP-Based Delivery", "Capability-Led Solution Design", "Faster Go-Live", "Reduced Risk & Customisation"],
    },
    {
      icon: Award,
      t: "Microsoft-Aligned Innovation",
      d: "Built on Microsoft, proven through execution. As Microsoft Dynamics consultants, we modernise enterprises with expertise across Dynamics 365, Azure, Data, and AI.",
      proofs: ["Microsoft Solutions Partner", "Microsoft FastTrack Portfolio Partner", "Agentic AI Innovation"],
    },
    {
      icon: Globe2,
      t: "Global Scale. Industry Depth.",
      d: "Global delivery, local accountability. Centres across seven countries combine flexible teams, round-the-clock execution, and deep expertise for transformation.",
      proofs: ["7 Global Delivery Locations", "24×7 Delivery Model", "Retail & Commerce", "Grocery & Hypermarkets", "Hospitality & Venues", "Enterprise Agentic AI"],
    },
  ];
  return (
    <section id="why" className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <div className="max-w-3xl">
          <p className="eyebrow">Why Lumovy</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Trusted to Rescue and Elevate Transformation.
          </h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.t} className="card-lift group relative overflow-hidden rounded-3xl border border-border bg-white p-8">
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-[var(--royal)] transition-transform duration-500 group-hover:scale-x-100" />
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[var(--blue-light)] text-[var(--royal)] ring-1 ring-inset ring-[var(--royal)]/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--navy-deep)]">{p.t}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[var(--blue-gray)]">{p.d}</p>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {p.proofs.map((pr) => (
                    <li
                      key={pr}
                      className="inline-flex items-center gap-1.5 rounded-full bg-[var(--blue-light)]/80 px-2.5 py-1 text-[11px] font-semibold text-[var(--navy-deep)] ring-1 ring-inset ring-[var(--royal)]/15"
                    >
                      <CheckCircle2 className="h-3 w-3 text-[var(--success)]" />
                      {pr}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* CASE STUDIES */
function CaseStudies() {
  const cases = [
    {
      sector: "Majid Al Futtaim (Sava)",
      logo: mafLogo,
      title: "Cloud-First Grocery & Discount Launch in Under 100 Days",
      challenge:
        "No existing systems or operational infrastructure; complex ambient/chilled/frozen inventory handling; tight deadlines for store opening.",
      results: [
        ["100 days", "To full ERP-enabled store operations"],
        ["130+", "Business processes, 14 modules"],
        ["1,600+", "SKUs; 160 weekly offers"],
      ],
    },
    {
      sector: "Cavender's",
      logo: janieJackLogo,
      title: "Unified, AI Powered Customer Experience",
      challenge:
        "Disconnected voice, email, and knowledge systems; no automated case routing; no unified 360° view.",
      results: [
        ["+75%", "Agent efficiency"],
        ["-60%", "Case processing time"],
        ["-50%", "Manual effort"],
      ],
    },
    {
      sector: "U.S. Omnichannel Specialty Retailer",
      logo: mattressFirmLogo,
      title: "Intelligent, Omnichannel Order Fulfillment",
      challenge:
        "Fragmented fulfillment and limited inventory visibility; rising order volumes and multi-store complexity.",
      results: [
        ["99%", "Order fulfillment efficiency"],
        ["<1%", "Order cancellations"],
        ["25%", "Upsell via BOPIS"],
      ],
    },
    {
      sector: "Utah DABS",
      logo: gilbarcoLogo,
      title: "From Underutilization to Optimization on Dynamics 365",
      challenge:
        "Manual, spreadsheet-based reconciliation; audit gaps; outdated bailment-inventory costing logic.",
      results: [
        ["Audit-ready", "Bailment valuation & COGS"],
        ["Lower", "Safety stock via forecasting"],
        ["Faster", "Financial close"],
      ],
    },
    {
      sector: "Monumental",
      logo: fedexLogo,
      title: "Enabling Frictionless Commerce at a Next-Generation Venue",
      challenge:
        "Integration gaps between checkout technologies; no end-to-end alignment across apps, POS, and back office; stability risk during live events.",
      results: [
        ["Real-time", "Core integration"],
        ["Event-grade", "High-traffic resilience"],
        ["Multi-year", "Sustained engineering"],
      ],
    },
    {
      sector: "Mattress Firm",
      logo: mattressFirmLogo,
      title: "One-Stop End-to-End Test Automation",
      challenge:
        "Long manual test cycles; fragmented automation across tools; complex D365 integrations; defect leakage during UAT and go-live.",
      results: [
        ["87%", "Manual-effort savings"],
        ["65%", "Cycle-time reduction"],
        ["+60%", "New capabilities per release"],
      ],
    },
  ];
  return (
    <section id="case-studies" className="relative overflow-hidden border-b border-border bg-[var(--blue-light)]/40 py-28">
      <div aria-hidden className="mesh-blobs-light opacity-60" />
      <div className="container-enterprise relative">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow">Case studies</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
              Real engagements. Auditable outcomes. Names masked by policy.
            </h2>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--royal)]">
            Request Full References
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {cases.map((c) => (
            <article key={c.title} className="group card-lift flex flex-col rounded-3xl border border-border bg-white p-8">
              <div className="flex h-14 items-center">
                <img
                  src={c.logo}
                  alt={c.sector}
                  loading="lazy"
                  className={
                    (c.logoClass ?? "max-h-9") +
                    " w-auto max-w-[150px] object-contain opacity-80 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                  }
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold leading-snug text-[var(--navy-deep)]">{c.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-[var(--blue-gray)]">{c.challenge}</p>
              <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-6">
                {c.results.map(([v, l]) => (
                  <div key={l}>
                    <div className="text-lg font-bold text-[var(--navy-deep)]">{v}</div>
                    <div className="mt-1 text-[11px] font-medium leading-tight text-[var(--blue-gray)]">{l}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <LearnMore label="Read the Engagement" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* TESTIMONIALS */
type QuoteItem = {
  kind: "quote";
  quote: string;
  name: string;
  role: string;
  outcome: string;
};
type VideoItem = { kind: "video"; poster: string; name: string; role: string };
type RefItem = QuoteItem | VideoItem;

const REFERENCES: RefItem[] = [
  {
    kind: "quote",
    quote:
      "Lumovy replaced two incumbent vendors and shipped the platform in half the time. Their governance rigor is what set them apart.",
    name: "Chief Information Officer",
    role: "Global Retail Group, Fortune 200",
    outcome: "$28M run-cost saved in Y1",
  },
  { kind: "video", poster: implementationImg, name: "Group CIO", role: "MENA Retail · 4 min" },
  {
    kind: "quote",
    quote:
      "The team operated like our own. Transparent forecasts, honest tradeoffs, and executive-ready reporting every two weeks.",
    name: "SVP, Digital Transformation",
    role: "Regional Hospitality Group",
    outcome: "RevPAR up 12% in 6 months",
  },
  {
    kind: "quote",
    quote:
      "Rare combination of deep Microsoft engineering and enterprise discipline. They pass procurement without friction.",
    name: "Chief Technology Officer",
    role: "European Retail Enterprise",
    outcome: "Passed Big Four audit clean",
  },
  { kind: "video", poster: consultingImg, name: "VP, IT", role: "US Specialty Retail · 3 min" },
];

function QuoteCard({ q }: { q: QuoteItem }) {
  return (
    <figure className="flex h-full flex-col rounded-3xl border border-border bg-white p-8">
      <svg className="h-6 w-6 text-[var(--royal)]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 7H5a2 2 0 00-2 2v4a2 2 0 002 2h2v1a3 3 0 01-3 3v2a5 5 0 005-5V9a2 2 0 00-2-2zm10 0h-4a2 2 0 00-2 2v4a2 2 0 002 2h2v1a3 3 0 01-3 3v2a5 5 0 005-5V9a2 2 0 00-2-2z" />
      </svg>
      <blockquote className="mt-4 flex-1 text-base leading-relaxed text-[var(--navy-deep)]">“{q.quote}”</blockquote>
      <figcaption className="mt-6 border-t border-border pt-5">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-[var(--navy)] text-sm font-semibold text-white">
            {q.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
          </div>
          <div>
            <div className="text-sm font-semibold text-[var(--navy-deep)]">{q.name}</div>
            <div className="text-xs text-[var(--blue-gray)]">{q.role}</div>
          </div>
        </div>
        <div className="mt-4 inline-flex items-center gap-1.5 rounded-sm bg-[var(--blue-light)] px-2.5 py-1 text-[11px] font-semibold text-[var(--navy-deep)]">
          <CheckCircle2 className="h-3 w-3 text-[var(--success)]" />
          {q.outcome}
        </div>
      </figcaption>
    </figure>
  );
}

function VideoCard({ v }: { v: VideoItem }) {
  return (
    <button className="relative flex h-full w-full items-stretch overflow-hidden rounded-3xl border border-border bg-black text-left">
      <div className="relative w-full">
        <img
          src={v.poster}
          alt={v.name}
          loading="lazy"
          className="h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20" />
        <div className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-[var(--royal)] shadow-2xl ring-4 ring-white/30">
          <Play className="ml-1 h-6 w-6 fill-current" />
        </div>
        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
          <div>
            <div className="text-sm font-bold">{v.name}</div>
            <div className="text-xs opacity-80">{v.role}</div>
          </div>
          <span className="rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest backdrop-blur">
            Play
          </span>
        </div>
      </div>
    </button>
  );
}

function Testimonials() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);

  // Scroll-pinned horizontal slider. A tall outer wrapper contains a sticky,
  // full-height viewport. As the page scrolls through the wrapper's extra
  // height, the viewport stays pinned and we translate the track horizontally.
  // Once the track is fully revealed the wrapper ends and the page continues
  // scrolling vertically to the next section.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    const update = () => {
      raf = 0;
      const pin = pinRef.current;
      const track = trackRef.current;
      if (!pin || !track) return;

      const overflow = Math.max(0, track.scrollWidth - track.clientWidth);
      if (reduce) {
        track.style.transform = "none";
        return;
      }

      const rect = pin.getBoundingClientRect();
      // The wrapper is taller than the viewport by exactly `overflow` px, so
      // progress goes 0→1 across that scroll distance while it's pinned.
      const scrollable = pin.offsetHeight - window.innerHeight;
      const scrolled = Math.min(scrollable, Math.max(0, -rect.top));
      const p = scrollable > 0 ? scrolled / scrollable : 0;
      track.style.transform = `translate3d(${-p * overflow}px, 0, 0)`;
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    // Size the tall wrapper so its extra height equals the horizontal overflow.
    const sizeWrapper = () => {
      const pin = pinRef.current;
      const track = trackRef.current;
      if (!pin || !track) return;
      const overflow = Math.max(0, track.scrollWidth - track.clientWidth);
      // extra vertical room = horizontal overflow (1:1 feel), plus one viewport
      // for the sticky element itself.
      pin.style.height = reduce ? "auto" : `${window.innerHeight + overflow}px`;
      update();
    };

    sizeWrapper();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", sizeWrapper);
    // Recalculate once images/fonts settle.
    const t = setTimeout(sizeWrapper, 400);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", sizeWrapper);
    };
  }, []);

  return (
    <section className="border-b border-border bg-white">
      {/* Tall wrapper — its height is set in JS to (100vh + horizontal overflow) */}
      <div ref={pinRef} className="relative">
        {/* Pinned viewport */}
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden py-16">
          <div className="container-enterprise">
            <div className="max-w-2xl">
              <p className="eyebrow">Executive references</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
                What decision-makers say.
              </h2>
            </div>
          </div>

          <div className="relative mt-12">
            <div className="scroll-hide overflow-hidden">
              <div
                ref={trackRef}
                className="flex gap-6 pl-[max(1.5rem,calc((100vw-1320px)/2+1.5rem))] pr-6 will-change-transform"
              >
                {REFERENCES.map((item, idx) => (
                  <div
                    key={idx}
                    className={
                      "shrink-0 " +
                      (item.kind === "video" ? "w-[min(92vw,560px)]" : "w-[min(85vw,380px)]")
                    }
                  >
                    {item.kind === "quote" ? <QuoteCard q={item} /> : <VideoCard v={item} />}
                  </div>
                ))}
              </div>
            </div>
            {/* Right-edge fade to hint there's more to scroll */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* FRAMEWORK */
function Framework() {
  const steps = [
    { no: "01", when: "Assess", title: "Business Value Assessment", desc: "We assess priorities, process maturity, and automation potential, then map a roadmap with clear, measurable outcomes.", icon: Compass },
    { no: "02", when: "Initiate", title: "Solution Blueprinting", desc: "Through hands-on workshops, we shape business processes, solution design, workflows, project scope, and success metrics.", icon: Layers },
    { no: "03", when: "Build & Validate", title: "Iterative Solution Delivery", desc: "We build in agile sprints, configuring first, testing quality, and validating with ongoing business feedback loops.", icon: BadgeCheck },
    { no: "04", when: "Deploy & Adopt", title: "Enterprise Rollout & Hypercare", desc: "We roll out in structured phases, guiding teams through adoption, change, and hands-on support for lasting success.", icon: Rocket },
    { no: "05", when: "Operate & Optimize", title: "Continuous Value Realization", desc: "We manage daily operations, releases, and automation upgrades, keeping your platform sharp through continuous innovation.", icon: LifeBuoy },
  ];
  return (
    <section className="relative overflow-hidden border-b border-border bg-[var(--blue-light)]/40 py-28">
      <div aria-hidden className="mesh-blobs-light opacity-60" />
      <div className="container-enterprise relative">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow">Lumovy Delivery Framework</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
              Human led, AI accelerated.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--blue-gray)]">
              Five stages from assessment to continuous value realization.
            </p>
          </div>
          <div className="hidden gap-2 md:flex">
            <span className="rounded-full border border-border bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-[var(--blue-gray)]">
              Swipe →
            </span>
          </div>
        </div>

        <div className="scroll-hide mt-12 overflow-x-auto pb-4">
          <ol className="flex snap-x snap-mandatory gap-5" style={{ minWidth: "min-content" }}>
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <li
                  key={s.no}
                  className="snap-start"
                  style={{ animation: `fade-up 0.6s ${i * 90}ms both cubic-bezier(0.16,1,0.3,1)` }}
                >
                  <div className="relative flex h-full w-[300px] flex-col overflow-hidden rounded-3xl border border-border bg-white p-7 sm:w-[340px]">
                    <div className="flex items-center justify-between">
                      <span className="text-5xl font-bold tracking-tight text-[var(--navy-deep)]/10">{s.no}</span>
                      <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[var(--royal)] text-white shadow-lg shadow-[var(--royal)]/25">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-[var(--blue-light)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-[var(--royal)] ring-1 ring-inset ring-[var(--royal)]/15">
                      {s.when}
                    </div>
                    <h3 className="mt-4 text-lg font-semibold leading-snug text-[var(--navy-deep)]">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--blue-gray)]">{s.desc}</p>
                    <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-[var(--blue-light)]">
                      <div
                        className="h-full bg-gradient-to-r from-[var(--royal)] to-[var(--azure)]"
                        style={{ width: `${((i + 1) / steps.length) * 100}%` }}
                      />
                    </div>
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

/* PROCUREMENT */
function Procurement() {
  const items = [
    { icon: FileCheck2, t: "NDA in 24 hours", d: "Mutual NDAs turned around within one business day." },
    { icon: Shield, t: "Security compliance", d: "SOC 2, ISO 27001, HIPAA, PCI DSS on request." },
    { icon: Building2, t: "Vendor onboarding", d: "Ariba, Coupa, SAP, and Workday supported." },
    { icon: FileCheck2, t: "MSA & SOW ready", d: "Enterprise templates and DPA available." },
    { icon: LineChart, t: "Transparent invoicing", d: "Milestone or fixed-fee, Net-30 to Net-60." },
    { icon: Globe2, t: "Global entities", d: "Contracting entities across the US, EU, and GCC." },
    { icon: Lock, t: "Insurance", d: "$10M professional indemnity and cyber liability coverage." },
    { icon: Gauge, t: "Response SLAs", d: "Sales < 4 business hours. Security & legal < 1 business day." },
  ];
  return (
    <section className="relative overflow-hidden bg-[var(--navy-deep)] py-28 text-white">
      <div aria-hidden className="mesh-blobs opacity-40" />
      <div className="container-enterprise relative">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--cyan-soft)]">
              Procurement facts
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Built for procurement, not around it.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/70">
              Everything legal and security need to say yes.
            </p>
            <a href="#contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[var(--navy-deep)] transition-all hover:-translate-y-0.5 hover:bg-white/90">
              Request procurement pack
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:col-span-7">
            {items.map((i) => {
              const Icon = i.icon;
              return (
                <div key={i.t} className="scale-in-hover rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors hover:bg-white/[0.08]">
                  <Icon className="h-5 w-5 text-[var(--cyan-soft)]" />
                  <div className="mt-3 text-sm font-semibold text-white">{i.t}</div>
                  <div className="mt-1 text-xs leading-relaxed text-white/70">{i.d}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* COMPARISON */
function Comparison() {
  const rows = [
    ["Communication cadence", "Weekly executive briefing + async daily", "Monthly steering, opaque in between"],
    ["Delivery model", "Outcome-based SOWs with KPIs", "Time & materials, hours billed"],
    ["Team seniority", "80% senior / staff engineers", "Heavy pyramid, junior-led delivery"],
    ["Transparency", "Real-time burn-down, open Jira", "Monthly PDF reports"],
    ["Governance", "Embedded PMO + risk register", "Ad-hoc project management"],
    ["Ramp time", "Productive in 2 weeks", "6–8 week onboarding norm"],
  ];
  return (
    <section className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <div className="max-w-2xl">
          <p className="eyebrow">Why enterprise teams choose Lumovy</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Lumovy vs. traditional vendors.
          </h2>
        </div>
        <div className="mt-14 overflow-hidden rounded-3xl border border-border shadow-fluent-sm">
          <div className="grid grid-cols-3 border-b border-border bg-[var(--blue-light)]/40">
            <div className="p-5 text-xs font-semibold uppercase tracking-widest text-[var(--blue-gray)]">Dimension</div>
            <div className="p-5 text-xs font-semibold uppercase tracking-widest text-[var(--navy-deep)]">Lumovy</div>
            <div className="p-5 text-xs font-semibold uppercase tracking-widest text-[var(--blue-gray)]">Traditional vendors</div>
          </div>
          {rows.map((r) => (
            <div key={r[0]} className="grid grid-cols-3 border-b border-border last:border-b-0">
              <div className="p-5 text-sm font-medium text-[var(--navy-deep)]">{r[0]}</div>
              <div className="flex items-start gap-2 p-5 text-sm text-[var(--navy-deep)]">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--success)]" />
                <span className="font-semibold">{r[1]}</span>
              </div>
              <div className="p-5 text-sm text-[var(--blue-gray)]">{r[2]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* CONTACT */
function Contact() {
  const [intent, setIntent] = useState("sales");
  const intents = [
    { id: "sales", label: "Sales", sla: "Response in 4 business hours" },
    { id: "project", label: "New project", sla: "Response in 1 business day" },
    { id: "partnership", label: "Partnership", sla: "Response in 2 business days" },
    { id: "support", label: "Support", sla: "24/7 for active engagements" },
    { id: "careers", label: "Careers", sla: "Response in 5 business days" },
    { id: "vendor", label: "Vendor / RFP", sla: "Response in 2 business days" },
    { id: "media", label: "Media", sla: "Response in 3 business days" },
  ];
  const active = intents.find((i) => i.id === intent)!;
  return (
    <section id="contact" className="relative overflow-hidden border-b border-border bg-[var(--blue-light)]/40 py-28">
      <div aria-hidden className="mesh-blobs-light opacity-60" />
      <div className="container-enterprise relative">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
              Route your request to the right team.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--blue-gray)]">
              Tell us why you're reaching out, no ticket queues.
            </p>
            <div className="card-lift mt-8 rounded-3xl border border-border bg-white p-6">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-[var(--royal)]" />
                <div>
                  <div className="text-sm font-semibold text-[var(--navy-deep)]">Prefer to book directly?</div>
                  <div className="text-xs text-[var(--blue-gray)]">30-min executive briefing, no obligation.</div>
                </div>
              </div>
              <a
                href="#contact"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--royal)] px-4 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[var(--navy)] hover:shadow-lg hover:shadow-[var(--royal)]/25"
              >
                Book a consultation
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <dl className="mt-8 space-y-3 text-sm">
              <div className="flex items-center gap-3 text-[var(--navy-deep)]">
                <Mail className="h-4 w-4 text-[var(--royal)]" />
                <a href="mailto:info@lumovy.com">info@lumovy.com</a>
              </div>
              <div className="flex items-center gap-3 text-[var(--navy-deep)]">
                <Globe2 className="h-4 w-4 text-[var(--royal)]" />
                <a href="https://www.lumovy.com">www.lumovy.com</a>
              </div>
              <div className="flex items-start gap-3 text-[var(--navy-deep)]">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--royal)]" />
                <span>United States · Canada · United Kingdom · Spain · UAE (Dubai) · India · Pakistan</span>
              </div>
            </dl>
          </div>
          <form className="card-lift rounded-3xl border border-border bg-white p-8 lg:col-span-7">
            <label className="text-xs font-semibold uppercase tracking-widest text-[var(--blue-gray)]">
              What are you looking for?
            </label>
            <div className="mt-3 flex flex-wrap gap-2">
              {intents.map((i) => (
                <button
                  key={i.id}
                  type="button"
                  onClick={() => setIntent(i.id)}
                  className={
                    "rounded-full border px-3.5 py-2 text-xs font-semibold transition-colors " +
                    (intent === i.id
                      ? "border-[var(--royal)] bg-[var(--royal)] text-white"
                      : "border-border bg-white text-[var(--navy-deep)] hover:border-[var(--royal)]")
                  }
                >
                  {i.label}
                </button>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2 rounded-2xl bg-[var(--blue-light)]/50 px-3 py-2 text-xs text-[var(--navy-deep)]">
              <CheckCircle2 className="h-3.5 w-3.5 text-[var(--success)]" />
              <span className="font-semibold">{active.sla}</span>
              <span className="text-[var(--blue-gray)]">· Business hours: 08:00–20:00 across all regions</span>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Full name" placeholder="Jane Doe" />
              <Field label="Work email" placeholder="jane@company.com" type="email" />
              <Field label="Company" placeholder="Acme Corp" />
              <Field label="Role / title" placeholder="Chief Digital Officer" />
              {intent === "project" && (
                <>
                  <Field label="Budget range" placeholder="$250K – $2M+" />
                  <Field label="Target start" placeholder="Q1 2026" />
                </>
              )}
              {intent === "vendor" && (
                <>
                  <Field label="RFP ID" placeholder="Optional" />
                  <Field label="Response deadline" placeholder="MM/DD/YYYY" />
                </>
              )}
              {intent === "careers" && (
                <>
                  <Field label="Role of interest" placeholder="Principal Engineer" />
                  <Field label="Location" placeholder="Remote / NY / London" />
                </>
              )}
            </div>
            <div className="mt-4">
              <label className="text-xs font-semibold uppercase tracking-widest text-[var(--blue-gray)]">
                Tell us about the outcome you want
              </label>
              <textarea
                rows={4}
                placeholder="Short description of the business outcome, timeline, and any procurement constraints."
                className="mt-2 w-full rounded-2xl border border-border bg-white px-3.5 py-3 text-sm text-[var(--navy-deep)] outline-none placeholder:text-[var(--blue-gray)] focus:border-[var(--royal)]"
              />
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-[var(--blue-gray)]">
                By submitting you agree to our <a href="#" className="underline">privacy notice</a>. Data handled under GDPR &amp; CCPA.
              </div>
              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-[var(--royal)] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[var(--navy)] hover:shadow-lg hover:shadow-[var(--royal)]/25">
                Submit request
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-widest text-[var(--blue-gray)]">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-border bg-white px-3.5 py-3 text-sm text-[var(--navy-deep)] outline-none placeholder:text-[var(--blue-gray)] focus:border-[var(--royal)]"
      />
    </label>
  );
}

/* LEARN MORE CTA — filled royal square + label */
function LearnMore({ label = "Learn more", href = "#contact" }: { label?: string; href?: string }) {
  return (
    <a href={href} className="inline-flex items-center gap-2.5">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[9px] bg-[var(--royal)] text-white">
        <ArrowRight className="h-4 w-4" />
      </span>
      <span className="text-sm font-semibold text-[var(--royal)]">
        {label}
      </span>
    </a>
  );
}

/* FAQ */
function FAQ() {
  const items = [
    ["Why choose Lumovy over a traditional implementation partner?", "As a full-service Dynamics 365 implementation partner, we combine strategic advisory, Dynamics 365 consulting services, managed services, quality engineering, AI, and modernization under one Microsoft-focused practice. This allows clients to work with a single partner from strategy through continuous optimization."],
    ["What industries does Lumovy specialize in?", "Our primary focus includes Retail & Omnichannel Commerce, Modern Grocery & Hypermarkets, Hospitality, Sports & Entertainment, Consumer Goods, Public Sector, and complex enterprise operations running on Microsoft technologies."],
    ["Which Microsoft technologies do you specialize in?", "We deliver solutions across Dynamics 365, Dynamics 365 Business Central consulting, Power Platform, Azure, Microsoft Copilot, Fabric, AI, and enterprise integrations, backed by Microsoft's Success by Design methodology and FastTrack engagement where applicable."],
    ["How quickly can Lumovy deliver a Dynamics 365 implementation?", "Delivery timelines depend on business complexity. Using our Configure-First, MVP-based methodology, many organizations realize value significantly faster than traditional phased implementations while maintaining governance and quality."],
    ["Can you modernize our existing Dynamics AX or legacy ERP environment?", "Yes. We help organizations migrate from legacy ERP platforms to Dynamics 365 using phased modernization strategies that reduce operational disruption, preserve business continuity, and optimize licensing investments."],
    ["Can Lumovy integrate Dynamics 365 with our existing systems?", "Absolutely. We design and implement enterprise integrations connecting ERP, CRM, eCommerce, POS, warehouse, payment platforms, ISVs, and legacy applications using Azure Integration Services and modern APIs."],
    ["Do you support highly customized Dynamics 365 environments?", "Yes. Our teams support standard Microsoft capabilities, custom extensions, ISV solutions, legacy customizations, and complex enterprise integrations while following Microsoft's recommended extensibility practices."],
    ["What happens after go-live?", "Our relationship doesn't end at deployment. We provide 24×7 managed support, proactive monitoring, continuous optimization, release management, performance tuning, and platform expansion as business needs evolve."],
    ["How do you ensure implementation quality?", "Quality engineering is embedded throughout every project, not treated as a final phase. We combine automation, performance engineering, regression testing, and continuous validation to reduce release risk and improve deployment confidence."],
    ["How does Lumovy approach AI?", "We focus on practical enterprise AI. Our AI Factory helps organizations deploy Microsoft Copilot, industry-specific agents, and custom AI solutions with governance, security, and human approval built into every workflow."],
    ["Can your team work alongside our internal IT organization?", "Yes. Many clients retain strategic ownership while Lumovy provides specialist expertise, additional delivery capacity, or full end-to-end ownership depending on the engagement model."],
    ["How do you minimize project risk?", "Every engagement begins with business process assessment, architecture validation, governance planning, and Microsoft-aligned delivery practices. Our Configure-First philosophy minimizes unnecessary customization while improving upgradeability and long-term platform health."],
    ["What engagement models do you offer?", "We provide fixed-scope projects, staff augmentation, managed services, outcome-based delivery, Centers of Excellence, and hybrid engagement models tailored to enterprise requirements."],
    ["Do you provide global delivery?", "Yes. Lumovy delivers through a global onshore, nearshore, and offshore model, enabling organizations to scale delivery while maintaining governance, quality, and cost efficiency."],
    ["How do you measure success?", "We measure success by business outcomes not just project completion. Typical KPIs include implementation timelines, platform adoption, release quality, automation coverage, system availability, operational efficiency, and long-term business value."],
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="insights" className="border-b border-border bg-white py-28">
      <div className="container-enterprise grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Questions we get first.
          </h2>
        </div>
        <div className="divide-y divide-border lg:col-span-8">
          {items.map(([q, a], idx) => (
            <div key={q} className="py-5">
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="flex w-full items-start justify-between gap-6 text-left"
              >
                <span className="text-base font-semibold text-[var(--navy-deep)]">{q}</span>
                <ChevronDown className={"h-5 w-5 shrink-0 text-[var(--blue-gray)] transition-transform " + (open === idx ? "rotate-180" : "")} />
              </button>
              {open === idx && <p className="mt-3 text-sm leading-relaxed text-[var(--blue-gray)]">{a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* FINAL CTA */
function FinalCTA() {
  return (
    <section className="hero-dark relative overflow-hidden py-28 text-white">
      <div aria-hidden className="hero-beam" />
      <div aria-hidden className="hero-orbs" />
      <div aria-hidden className="hero-grid" />
      <div aria-hidden className="hero-grain" />
      <div className="container-enterprise relative z-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--cyan-soft)]">Ready when you are</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          From strategy to production.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base text-white/70">
          Book a 30-minute executive briefing. No sales pitch.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--royal)] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-[var(--navy-deep)] hover:shadow-xl"
          >
            <Calendar className="h-4 w-4" />
            Book a consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#case-studies"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
          >
            Review case studies
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* FOOTER */
function Footer() {
  const cols: [string, string[]][] = [
    ["Solutions", ["Commerce", "Finance", "Supply Chain", "Customer Experience", "Inventory Intelligence", "Consumer Swift Commerce"]],
    ["Services", ["Consulting", "Implementation", "Engineering", "AI & Copilot", "Managed Services & Support"]],
    ["Industries", ["Retail", "Hypermarket", "Hospitality"]],
    ["Insights", ["Blogs", "Case Studies", "Whitepapers", "News"]],
    ["Company", ["About", "Contact", "Careers", "Trust Center"]],
  ];
  return (
    <footer className="bg-white text-[var(--navy-deep)]">
      <div className="container-enterprise py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <a href="#" className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-xl bg-[var(--navy)] text-white">
                <span className="text-sm font-bold">L</span>
              </div>
              <span className="text-[15px] font-bold tracking-tight">Lumovy</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--blue-gray)]">
              Microsoft Solutions Partner delivering Dynamics 365, Azure, and Power Platform for
              regulated enterprises.
            </p>
            <div className="mt-6">
              <label className="text-xs font-semibold uppercase tracking-widest text-[var(--blue-gray)]">
                Executive newsletter
              </label>
              <form className="mt-2 flex gap-2">
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="flex-1 rounded-full border border-border px-4 py-2.5 text-sm outline-none focus:border-[var(--royal)]"
                />
                <button className="rounded-full bg-[var(--royal)] px-4 py-2.5 text-xs font-semibold text-white hover:bg-[var(--navy)]">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:col-span-9 lg:grid-cols-5">
            {cols.map(([h, items]) => (
              <div key={h}>
                <div className="text-xs font-semibold uppercase tracking-widest text-[var(--navy-deep)]">{h}</div>
                <ul className="mt-4 space-y-2.5">
                  {items.map((i) => (
                    <li key={i}>
                      <a href="#" className="text-sm text-[var(--blue-gray)] hover:text-[var(--royal)]">
                        {i}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 grid gap-6 border-t border-border pt-6 md:grid-cols-3">
          <div className="flex items-center gap-4 text-xs text-[var(--blue-gray)]">
            <a href="https://www.linkedin.com/company/lumovy" className="inline-flex items-center gap-1.5 hover:text-[var(--royal)]">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a href="mailto:info@lumovy.com" className="inline-flex items-center gap-1.5 hover:text-[var(--royal)]">
              <Mail className="h-4 w-4" /> info@lumovy.com
            </a>
            <a href="https://www.lumovy.com" className="inline-flex items-center gap-1.5 hover:text-[var(--royal)]">
              <Globe2 className="h-4 w-4" /> www.lumovy.com
            </a>
          </div>
          <div className="text-xs text-[var(--blue-gray)] md:text-center">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" /> US · Canada · UK · Spain · UAE · India · Pakistan
            </span>
          </div>
          <div className="flex flex-wrap gap-4 text-xs text-[var(--blue-gray)] md:justify-end">
            <a href="#" className="hover:text-[var(--royal)]">Privacy</a>
            <a href="#" className="hover:text-[var(--royal)]">Terms</a>
            <a href="#" className="hover:text-[var(--royal)]">Trust Center</a>
            <span>© {new Date().getFullYear()} Lumovy Inc.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* STICKY CTA */
function StickyCTA() {
  return (
    <a
      href="#contact"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[var(--royal)] px-5 py-3.5 text-xs font-semibold text-white shadow-[0_20px_50px_-20px_rgba(0,65,169,0.6)] transition-transform hover:-translate-y-0.5 hover:bg-[var(--navy)] lg:hidden"
    >
      <Calendar className="h-4 w-4" />
      Book consultation
    </a>
  );
}
