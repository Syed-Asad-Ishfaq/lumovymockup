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
  Cpu,
  Boxes,
  Workflow,
  ShieldCheck,
  RefreshCw,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import implementationImg from "@/assets/services/implementation.jpg";
import consultingImg from "@/assets/services/consulting.jpg";
import engineeringImg from "@/assets/services/engineering.jpg";
import supportImg from "@/assets/services/support.jpg";
import retailImg from "@/assets/industries/retail.jpg";
import hospitalityImg from "@/assets/industries/hospitality.jpg";
import mafLogo from "@/assets/logos/majid-al-futtaim.png";
import mattressFirmLogo from "@/assets/logos/mattress-firm.png";
import janieJackLogo from "@/assets/logos/janie-and-jack.png";
import cavendersLogo from "@/assets/logos/cavenders.png";
import utahDabsLogo from "@/assets/logos/utah-dabs.png";
import monumentalLogo from "@/assets/logos/monumental.png";
import bluecrestLogo from "@/assets/logos/bluecrest.png";
import britaxLogo from "@/assets/logos/britax.png";
import stateOfUtahLogo from "@/assets/logos/state-of-utah.png";
import steMichelleLogo from "@/assets/logos/ste-michelle.png";
import syscoLogo from "@/assets/logos/sysco.png";
import vermontLogo from "@/assets/logos/vermont-country-store.png";
import lumovyLogo from "@/assets/lumovy-logo.png";
import svcShape1 from "@/assets/services/shape1.webp";
import svcShape2 from "@/assets/services/shape2.webp";
import svcShape3 from "@/assets/services/shape3.webp";
import svcShape4 from "@/assets/services/shape4.webp";

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
  { src: mafLogo, alt: "Majid Al Futtaim", sizeClass: "h-12" },
  { src: mattressFirmLogo, alt: "Mattress Firm", sizeClass: "h-9" },
  { src: janieJackLogo, alt: "Janie and Jack", sizeClass: "h-7" },
  { src: bluecrestLogo, alt: "BlueCrest", sizeClass: "h-8" },
  { src: britaxLogo, alt: "Britax", sizeClass: "h-12" },
  { src: stateOfUtahLogo, alt: "State of Utah", sizeClass: "h-14" },
  { src: steMichelleLogo, alt: "Ste Michelle Wine Estates", sizeClass: "h-14" },
  { src: syscoLogo, alt: "Sysco", sizeClass: "h-9" },
  { src: vermontLogo, alt: "The Vermont Country Store", sizeClass: "h-7" },
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
        <a href="#" className="flex items-center">
          <img src={lumovyLogo} alt="Lumovy Technology Solutions" className="h-9 w-auto" />
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
      className="animate-menu-in rounded-xl border border-border bg-white shadow-fluent-lg"
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
    headline: "Modernize Mission-Critical Systems. Drive Measurable Outcomes",
    subhead:
      "Microsoft Dynamics 365 solutions built around your business, so you move faster, with less complexity.",
    cta: "See Client Outcomes",
    href: "#case-studies",
  },
  {
    eyebrow: "Agentic AI",
    headline: "AI Agents Built Around How Your Business Runs",
    subhead:
      "Our AI agents connect with Dynamics 365 to automate your processes. Your team always stays in control.",
    cta: "Explore Our AI Factory",
    href: "#services",
  },
  {
    eyebrow: "Rapid Implementation Playbook",
    headline: "From Idea to Value in 100 Days",
    subhead:
      "See how we helped Majid Al Futtaim launch Sava in just 100 days, from zero infrastructure to a full Dynamics 365 platform.",
    cta: "Read the MAF Case Study",
    href: "#case-studies",
  },
  {
    eyebrow: "Quality & Trust",
    headline: "20,000+ Automated Tests, Run Every Day, Across the Globe",
    subhead:
      "Test automation and full QA ownership, end to end. Our Quality Engineering team redefines what quality means for you.",
    cta: "Explore Quality Engineering",
    href: "#services",
  },
  {
    eyebrow: "Microsoft Credentials",
    headline: "Microsoft Expertise That Accelerates Your Transformation",
    subhead:
      "A top-rated Microsoft Solutions Partner, working closely with Microsoft's product teams to drive your transformation.",
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
          <div className="glass-panel rounded-xl p-7">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-[var(--cyan-soft)]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--cyan-soft)]">
                Schedule with leadership
              </span>
            </div>
            <h3 className="mt-3 text-xl font-semibold text-white">30-min executive briefing</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">
              Talk directly with one of our engagement principals about what matters to you.
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
  // Duplicate the list so the marquee loops seamlessly (-50% shift).
  const track = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
  return (
    <section className="border-b border-border bg-white py-16">
      <div className="container-enterprise">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--blue-gray)]">
          Trusted by regulated enterprises worldwide
        </p>
      </div>
      <div className="group mt-10 overflow-hidden border-y border-border py-10">
        <div className="marquee-track flex w-max items-center gap-28 group-hover:[animation-play-state:paused]">
          {track.map((l, i) => (
            <div key={l.alt + i} className="flex shrink-0 items-center justify-center">
              <img
                src={l.src}
                alt={l.alt}
                loading="lazy"
                className={
                  "w-auto object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 " +
                  l.sizeClass
                }
              />
            </div>
          ))}
        </div>
      </div>
      <div className="container-enterprise">
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
    ["100 days", "Avg. go-live time"],
    ["99.5%", "Uptime maintained"],
    ["24/7", "Global delivery coverage"],
  ];
  const pinRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0); // 0..1 across the pinned scroll

  // Scroll-pinned reveal: while this section is pinned to the viewport, the
  // page's vertical scroll is translated into a 0..1 progress value that
  // reveals the metric cards one-by-one, left to right.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setProgress(1);
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const pin = pinRef.current;
      if (!pin) return;
      const scrollable = pin.offsetHeight - window.innerHeight;
      const scrolled = Math.min(scrollable, Math.max(0, -pin.getBoundingClientRect().top));
      setProgress(scrollable > 0 ? scrolled / scrollable : 1);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
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
    // Tall wrapper: extra height (relative to viewport) is the scroll distance
    // consumed while pinned. ~55vh per card gives a comfortable reveal pace.
    <div ref={pinRef} className="relative" style={{ height: `${100 + metrics.length * 55}vh` }}>
      <section className="sticky top-0 flex h-screen items-center overflow-hidden bg-[var(--navy-deep)] text-white">
        <div aria-hidden className="mesh-blobs opacity-50" />
        <div className="container-enterprise relative w-full">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--cyan-soft)]">
              Outcomes at scale
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Measured impact, not vanity metrics
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {metrics.map(([v, l], idx) => {
              // Each card gets a slice of the progress; it reveals across its
              // own window so they appear one after another, left to right.
              const start = idx / metrics.length;
              const span = 1 / metrics.length;
              const local = Math.min(1, Math.max(0, (progress - start) / span));
              return (
                <div
                  key={l}
                  className="rounded-lg border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
                  style={{
                    opacity: local,
                    transform: `translateY(${(1 - local) * 28}px)`,
                    transition: "opacity 0.5s ease-out, transform 0.5s cubic-bezier(0.16,1,0.3,1)",
                  }}
                >
                  <div className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{v}</div>
                  <div className="mt-2 text-xs font-medium leading-relaxed text-white/70">{l}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

/* PRODUCTS & ACCELERATORS */
function Solutions() {
  const products = [
    {
      name: "D365 for Hypermarkets",
      image: retailImg,
      blurb:
        "A Dynamics 365 solution we've pre-configured for your grocery and hypermarket store operations.",
    },
    {
      name: "Innovative Hospitality Solution",
      image: hospitalityImg,
      blurb:
        "Built on D365 Commerce and Finance, unifying your hospitality data and service.",
    },
    {
      name: "Clarity RFID Connector",
      image: engineeringImg,
      blurb:
        "Track your inventory accurately and gain real-time visibility with our RFID connector.",
    },
    {
      name: "B2B in a Box",
      image: consultingImg,
      blurb:
        "A ready-made bundle that takes your quote-to-cash on D365 Commerce, from storefront to fulfillment.",
    },
    {
      name: "Consumer Swift Commerce",
      image: implementationImg,
      blurb:
        "A white-label app linked to D365 Commerce, built so you can launch mobile fast.",
    },
    {
      name: "Optim365",
      image: supportImg,
      blurb:
        "A framework that governs your data, optimizes your licensing, and boosts your D365 performance.",
    },
    {
      name: "PerfLens365",
      image: consultingImg,
      blurb:
        "A performance toolkit covering load testing, live monitoring, and diagnostics for your D365 platform.",
    },
    {
      name: "In-Store Mobility Suite",
      image: retailImg,
      blurb:
        "A set of Power Apps linked to D365 F&O, so you can manage labeling, stock counts, and orders.",
    },
  ];
  return (
    <section id="solutions" className="relative overflow-hidden border-b border-border bg-[var(--blue-light)]/40 py-28">
      <div aria-hidden className="mesh-blobs-light opacity-50" />
      <div className="container-enterprise relative">
        <div className="max-w-none">
          <p className="eyebrow">Products &amp; Accelerators</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl lg:whitespace-nowrap">
            Pre-built accelerators that shorten your time-to-value
          </h2>
        </div>
      </div>

      {/* Horizontal swipe track — same pattern as Services */}
      <div
        className="container-enterprise relative mt-12"
        style={{
          ["--svc-card" as string]: "calc((min(1272px, 100vw - 3rem) - 2 * 1.5rem) / 3)",
          ["--svc-bleed" as string]: "max(0px, calc((100vw - 1320px) / 2 + 1.5rem))",
        }}
      >
        <div
          className="scroll-hide snap-x snap-mandatory -my-6 overflow-x-auto py-6"
          style={{ marginRight: "calc(-1 * var(--svc-bleed))" }}
        >
          <div className="flex gap-6 pr-6">
            {products.map((p) => (
              <article
                key={p.name}
                style={{ width: "var(--svc-card)" }}
                className="group card-lift flex min-w-[300px] shrink-0 snap-start flex-col overflow-hidden rounded-lg border border-border bg-white"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden">
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
                  <h3 className="truncate text-xl font-semibold leading-snug text-[var(--navy-deep)]">{p.name}</h3>
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
// The 4 provided abstract blue shapes, cycled across the service cards.
const SERVICE_SHAPES = [svcShape1, svcShape2, svcShape3, svcShape4];

function Services() {
  const services = [
    {
      name: "Implementation",
      shape: "refresh",
      approach: "Your full Dynamics 365 implementation, handled from discovery to deployment.",
      outcome: "Sava went live on Dynamics 365 in under 100 days.",
    },
    {
      name: "Managed Support & Expansion",
      shape: "shield",
      approach: "24/7 managed services for your Dynamics 365 and Azure infrastructure, backed by SLAs and monitoring.",
      outcome: "120+ upgrades, enterprise SLA compliance.",
    },
    {
      name: "Integrations & Modernization",
      shape: "quad",
      approach: "Simpler operations, faster transformation, using Azure and Power Platform.",
      outcome: "Unified integrations powered by Azure.",
    },
    {
      name: "Enterprise Agentic AI Solutions",
      shape: "spark",
      approach: "AI agents built for your business, deployed using Copilot and custom solutions.",
      outcome: "Enterprise AI live in 20-60 days.",
    },
    {
      name: "Legacy Migration",
      shape: "ring",
      approach: "A proven, low-disruption path from any legacy ERP to Dynamics 365.",
      outcome: "30% faster migration, full continuity.",
    },
    {
      name: "Quality Engineering Factory",
      shape: "cpu",
      approach: "Release with confidence, backed by AI driven testing and quality checks.",
      outcome: "6x faster validation, lighter testing.",
    },
    {
      name: "Global Capability Centers",
      shape: "boxes",
      approach: "A capability center built to grow into your hub for talent and innovation.",
      outcome: "Specialized talent deployed in 3 weeks.",
    },
  ];
  return (
    <section id="services" className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <div className="max-w-none">
          <p className="eyebrow">Services</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl lg:whitespace-nowrap">
            From Planning to Performance, We're Your One Partner
          </h2>
        </div>
      </div>

      {/* Glow-mark cards on a horizontal swipe track. Only the title shows by
          default; hovering a card reveals the details + CTA. */}
      <div
        className="container-enterprise mt-12"
        style={{
          ["--svc-card" as string]: "calc((min(1272px, 100vw - 3rem) - 2 * 1.5rem) / 3)",
          ["--svc-bleed" as string]: "max(0px, calc((100vw - 1320px) / 2 + 1.5rem))",
        }}
      >
        <div
          className="scroll-hide snap-x snap-mandatory -my-6 overflow-x-auto py-6"
          style={{ marginRight: "calc(-1 * var(--svc-bleed))" }}
        >
          <div className="flex gap-6 pr-6">
            {services.map((s, i) => (
              <article
                key={s.name}
                style={{ width: "var(--svc-card)" }}
                className="group relative h-[300px] min-w-[300px] shrink-0 snap-start overflow-hidden rounded-lg border border-border bg-white"
              >
                {/* Blue gradient fill fades in on hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[#003594] opacity-0 transition-opacity duration-[580ms] ease-out group-hover:opacity-100"
                />

                {/* Glow mark — sits in the upper area, away from the title;
                    blurs on hover. */}
                <div className="pointer-events-none absolute inset-x-0 top-8 flex h-40 items-center justify-center">
                  <img
                    src={SERVICE_SHAPES[i % SERVICE_SHAPES.length]}
                    alt=""
                    aria-hidden
                    className="h-40 w-40 object-contain transition-opacity duration-[400ms] ease-out group-hover:opacity-0"
                  />
                </div>

                {/* Content — anchored so the TITLE sits at the card's bottom
                    padding at rest, with the details extending below (clipped).
                    On hover the whole block slides up by the details' height,
                    then returns exactly to rest. Text turns white over the blue. */}
                <div className="absolute inset-x-0 bottom-8 px-8 transition-transform duration-[580ms] ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:-translate-y-[152px] group-focus-within:-translate-y-[152px]">
                  <h3 className="text-xl font-semibold text-[var(--navy-deep)] transition-colors duration-[580ms] group-hover:text-white">{s.name}</h3>
                  <div className="absolute inset-x-8 top-full pt-3 opacity-0 transition-opacity duration-[480ms] delay-100 ease-out group-hover:opacity-100 group-focus-within:opacity-100">
                    <p className="text-sm leading-relaxed text-[var(--blue-gray)] group-hover:text-white/85">{s.approach}</p>
                    <p className="mt-3 text-sm font-semibold text-[var(--success)] group-hover:text-[var(--cyan-soft)]">{s.outcome}</p>
                    <div className="pt-5 group-hover:[&_a>span:first-child]:bg-white group-hover:[&_a>span:first-child]:text-[var(--royal)] group-hover:[&_a>span:last-child]:text-white">
                      <LearnMore />
                    </div>
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
        "Your digital and physical retail, connected. Unified operations, smart fulfillment, and personalized experiences, powered by Microsoft.",
    },
    {
      name: "Manufacturing & Supply Chain",
      image: implementationImg,
      headline: "Smarter Supply Chain Planning",
      subhead:
        "Your production, inventory, and suppliers, aligned. Real-time visibility and smarter, AI driven forecasting, built in.",
    },
    {
      name: "Modern Grocery & Hypermarkets",
      image: engineeringImg,
      headline: "Smarter Grocery Retail",
      subhead:
        "Your store operations, supply chain, and merchandising, powered by AI, built for modern grocery and discount retail.",
    },
    {
      name: "Hospitality, Entertainment & Sports",
      image: hospitalityImg,
      headline: "Better Guest Experiences, Built In",
      subhead:
        "Our technology gives your guests frictionless dining, concessions, and venue experiences. You gain efficiency and revenue.",
    },
    {
      name: "Public Sector",
      image: consultingImg,
      headline: "Government Services, Modernized",
      subhead:
        "Your operations, modernized with secure, compliant platforms, for better service delivery and stronger resilience.",
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
            <article key={i.name} className="group card-lift flex flex-col overflow-hidden rounded-xl border border-border bg-white">
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
      d: "Your outcomes are ours to own. Our delivery leaders stay accountable for your platform's success and long-term value.",
      proofs: ["Outcome accountability", "Executive oversight", "Named delivery principal"],
    },
    {
      icon: LifeBuoy,
      t: "Program Recovery Specialists",
      d: "Struggling transformations, rescued. If your program falls behind or loses momentum, our team restores structure and pace.",
      proofs: ["Recovery programmes", "Governance reset", "Adoption acceleration"],
    },
    {
      icon: Rocket,
      t: "Unlocking Platform Potential",
      d: "Implementation is just the start. Our team helps you optimize processes, elevate experience, and unlock your platform's full value.",
      proofs: ["Platform optimisation", "User adoption", "Experience elevation"],
    },
    {
      icon: Layers,
      t: "Faster Time-to-Value by Design",
      d: "Configure-first, MVP-led delivery is where it starts. Our accelerators limit customization, reduce risk, and get you to value fast.",
      proofs: ["Configure-First", "MVP-Based Delivery", "Capability-Led Solution Design", "Faster Go-Live", "Reduced Risk & Customisation"],
    },
    {
      icon: Award,
      t: "Microsoft-Aligned Innovation",
      d: "Built on Microsoft, proven through execution. Your business, modernized with expertise across Dynamics 365, Azure, Data, and AI.",
      proofs: ["Microsoft Solutions Partner", "Microsoft FastTrack Portfolio Partner", "Agentic AI Innovation"],
    },
    {
      icon: Globe2,
      t: "Global Scale. Industry Depth.",
      d: "Global delivery, local accountability. Teams across seven countries provide round-the-clock execution and deep transformation expertise.",
      proofs: ["7 Global Delivery Locations", "24x7 Delivery Model", "Retail & Commerce", "Grocery & Hypermarkets", "Hospitality & Venues", "Enterprise Agentic AI"],
    },
  ];
  return (
    <section id="why" className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <div className="max-w-none">
          <p className="eyebrow">Why Lumovy</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl lg:whitespace-nowrap">
            Trusted to Rescue and Elevate Your Transformation
          </h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.t} className="card-lift group relative overflow-hidden rounded-xl border border-border bg-white p-8">
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
        "Sava was launching from scratch. They faced complex chilled and frozen inventory, and a tight store-opening deadline.",
      results: [
        ["100 days", "To full ERP-enabled store operations"],
        ["130+", "Business processes, 14 modules"],
        ["1,600+", "SKUs; 160 weekly offers"],
      ],
    },
    {
      sector: "Cavender's",
      logo: cavendersLogo,
      logoClass: "max-h-8",
      title: "Unified, AI Powered Customer Experience",
      challenge:
        "Voice, email, and knowledge systems ran separately. Agents had no automated routing or unified visibility.",
      results: [
        ["+75%", "Agent efficiency"],
        ["-60%", "Case processing time"],
        ["-50%", "Manual effort"],
      ],
    },
    {
      sector: "U.S. Omnichannel Specialty Retailer",
      logo: cavendersLogo,
      logoClass: "max-h-8",
      title: "Intelligent, Omnichannel Order Fulfillment",
      challenge:
        "Fulfillment was fragmented and inventory visibility was low. Rising order volumes strained their multi-store operations.",
      results: [
        ["99%", "Order fulfillment efficiency"],
        ["<1%", "Order cancellations"],
        ["25%", "Upsell via BOPIS"],
      ],
    },
    {
      sector: "Utah DABS",
      logo: utahDabsLogo,
      logoClass: "max-h-12",
      title: "From Underutilization to Optimization on Dynamics 365",
      challenge:
        "Manual, spreadsheet-based reconciliation left audit gaps. Their bailment-inventory costing logic was outdated and inefficient.",
      results: [
        ["Audit-ready", "Bailment valuation & COGS"],
        ["Lower", "Safety stock via forecasting"],
        ["Faster", "Financial close"],
      ],
    },
    {
      sector: "Monumental",
      logo: monumentalLogo,
      logoClass: "max-h-12",
      title: "Enabling Frictionless Commerce at a Next-Generation Venue",
      challenge:
        "Checkout technologies were loosely integrated. This created stability risk across apps, POS, and back-office systems during events.",
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
        "Manual test cycles ran long. Automation was fragmented, and integrations caused defect leakage.",
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
              Real engagements. Auditable outcomes
            </h2>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--royal)]">
            Request Full References
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {cases.map((c) => (
            <article key={c.title} className="group card-lift flex flex-col rounded-xl border border-border bg-white p-8">
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
                  <div key={l} className="min-w-0">
                    <div className="whitespace-nowrap text-[15px] font-bold leading-tight text-[var(--navy-deep)]">{v}</div>
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
    <figure className="flex h-full flex-col rounded-xl border border-border bg-white p-8">
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
    <button className="relative flex h-full w-full items-stretch overflow-hidden rounded-xl border border-border bg-black text-left">
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
                What decision-makers say
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
              Human Led, AI Accelerated
            </h2>
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
                  <div className="relative flex h-full w-[300px] flex-col overflow-hidden rounded-xl border border-border bg-white p-7 sm:w-[340px]">
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
              Built for procurement, not around it
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/70">
              Everything legal and security need to say yes.
            </p>
            <a href="#contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[var(--navy-deep)] transition-all hover:-translate-y-0.5 hover:bg-white/90">
              Book a Consultation
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:col-span-7">
            {items.map((i) => {
              const Icon = i.icon;
              return (
                <div key={i.t} className="scale-in-hover rounded-lg border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors hover:bg-white/[0.08]">
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
            Lumovy vs. traditional vendors
          </h2>
        </div>
        <div className="mt-14 overflow-hidden rounded-xl border border-border shadow-fluent-sm">
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
              Route your request to the right team
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--blue-gray)]">
              Tell us why you're reaching out, no ticket queues.
            </p>
            <div className="card-lift mt-8 rounded-xl border border-border bg-white p-6">
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
                <span>North America · Europe · UAE · India · Pakistan</span>
              </div>
            </dl>
          </div>
          <form className="card-lift rounded-xl border border-border bg-white p-8 lg:col-span-7">
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
                className="mt-2 w-full rounded-lg border border-border bg-white px-3.5 py-3 text-sm text-[var(--navy-deep)] outline-none placeholder:text-[var(--blue-gray)] focus:border-[var(--royal)]"
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
        className="mt-2 w-full rounded-lg border border-border bg-white px-3.5 py-3 text-sm text-[var(--navy-deep)] outline-none placeholder:text-[var(--blue-gray)] focus:border-[var(--royal)]"
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
    ["Why choose Lumovy over a traditional implementation partner?", "Strategic advisory, Dynamics 365 consulting, managed services, quality engineering, AI, and modernization, all under one Microsoft-focused practice. You work with a single partner from strategy through continuous optimization."],
    ["What industries does Lumovy specialize in?", "Our focus includes Retail & Omnichannel Commerce, Modern Grocery & Hypermarkets, Hospitality, Sports & Entertainment, Consumer Goods, Public Sector, and complex enterprise operations running on Microsoft technologies."],
    ["Which Microsoft technologies do you specialize in?", "Our solutions span Dynamics 365, Dynamics 365 Business Central, Power Platform, Azure, Microsoft Copilot, Fabric, and AI, backed by Microsoft's Success by Design methodology and FastTrack engagement where applicable."],
    ["How quickly can Lumovy deliver a Dynamics 365 implementation?", "Your timeline depends on your business complexity. With our configure-first, MVP-based approach, you can realize value faster than with traditional phased implementations, while we maintain governance and quality."],
    ["Can you modernize our existing Dynamics AX or legacy ERP environment?", "Yes. Your migration from legacy ERP platforms to Dynamics 365 uses phased strategies that reduce disruption, preserve continuity, and optimize licensing."],
    ["Can Lumovy integrate Dynamics 365 with our existing systems?", "Absolutely. Our team designs and builds integrations connecting your ERP, CRM, eCommerce, POS, warehouse, and payment platforms, using Azure Integration Services and modern APIs."],
    ["Do you support highly customized Dynamics 365 environments?", "Yes. Our team supports standard Microsoft capabilities, custom extensions, ISV solutions, and complex integrations, following Microsoft's recommended practices."],
    ["What happens after go-live?", "Our relationship doesn't end at deployment. You get 24/7 managed support, proactive monitoring, continuous optimization, and platform expansion as your needs evolve."],
    ["How do you ensure implementation quality?", "Quality engineering is embedded throughout your project, not just at the end, combining automation, performance testing, and continuous validation to reduce risk."],
    ["How does Lumovy approach AI?", "Our focus is practical, enterprise AI. The Lumovy AI Factory helps you deploy Microsoft Copilot and custom agents, with governance and human approval built into every workflow."],
    ["Can your team work alongside our internal IT organization?", "Yes. You can retain strategic ownership while we provide specialist expertise and extra delivery capacity, or take on full end-to-end ownership."],
    ["How do you minimize project risk?", "Every engagement begins with a business process assessment, architecture review, and governance plan. Our configure-first approach limits customization and protects your platform's long-term health."],
    ["What engagement models do you offer?", "Our engagement options include fixed-scope projects, staff augmentation, managed services, outcome-based delivery, Centers of Excellence, and hybrid models built around your needs."],
    ["Do you provide global delivery?", "Yes. Our global onshore, nearshore, and offshore model lets you scale delivery while maintaining governance, quality, and cost efficiency."],
    ["How do you measure success?", "Success is measured by your business outcomes, not just project completion. Typical KPIs include implementation timelines, platform adoption, release quality, and long-term value."],
  ];
  const [open, setOpen] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);
  const VISIBLE = 6;
  const visibleItems = showAll ? items : items.slice(0, VISIBLE);
  return (
    <section id="insights" className="border-b border-border bg-white py-28">
      <div className="container-enterprise grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Questions we get first
          </h2>
        </div>
        <div className="lg:col-span-8">
          <div className="divide-y divide-border">
            {visibleItems.map(([q, a], idx) => (
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
          {items.length > VISIBLE && (
            <button
              onClick={() => {
                setShowAll((v) => !v);
                if (showAll) setOpen(0);
              }}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold text-[var(--royal)] transition-all hover:-translate-y-0.5 hover:border-[var(--royal)]"
            >
              {showAll ? "Show fewer" : "View more"}
              <ChevronDown className={"h-4 w-4 transition-transform " + (showAll ? "rotate-180" : "")} />
            </button>
          )}
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
          From strategy to production
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
  const cols: [string, string, string[]][] = [
    ["Products & Accelerators", "#solutions", [
      "D365 for Hypermarkets",
      "Innovative Hospitality Solution",
      "Clarity RFID Connector",
      "B2B in a Box",
      "Consumer Swift Commerce",
      "Optim365",
      "PerfLens365",
      "In-Store Mobility Suite",
    ]],
    ["Services", "#services", [
      "Implementation",
      "Managed Support & Expansion",
      "Integrations & Modernization",
      "Enterprise Agentic AI Solutions",
      "Legacy Migration",
      "Quality Engineering Factory",
      "Global Capability Centers",
    ]],
    ["Industries", "#industries", [
      "Retail & Omnichannel Commerce",
      "Manufacturing & Supply Chain",
      "Modern Grocery & Hypermarkets",
      "Hospitality, Entertainment & Sports",
      "Public Sector",
    ]],
    ["Insights", "#insights", ["Case Studies", "Blogs", "Whitepapers", "News", "FAQ"]],
    ["Company", "#contact", ["About", "Why Lumovy", "Delivery Framework", "Contact"]],
  ];
  return (
    <footer className="bg-white text-[var(--navy-deep)]">
      <div className="container-enterprise py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <a href="#" className="flex items-center">
              <img src={lumovyLogo} alt="Lumovy Technology Solutions" className="h-10 w-auto" />
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
            {cols.map(([h, href, items]) => (
              <div key={h}>
                <div className="text-xs font-semibold uppercase tracking-widest text-[var(--navy-deep)]">{h}</div>
                <ul className="mt-4 space-y-2.5">
                  {items.map((i) => (
                    <li key={i}>
                      <a href={href} className="text-sm text-[var(--blue-gray)] hover:text-[var(--royal)]">
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
              <MapPin className="h-3.5 w-3.5" /> North America · Europe · UAE · India · Pakistan
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
