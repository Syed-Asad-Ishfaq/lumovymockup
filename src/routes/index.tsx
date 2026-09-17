import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Users,
  Globe2,
  Linkedin,
  Phone,
  Mail,
  MapPin,
  Menu,
  Play,
  Hotel,
  Store,
  Wrench,
  Cog,
  Cpu,
  Boxes,
  Workflow,
  ShieldCheck,
  RefreshCw,
  X,
  Sparkles,
  Truck,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import implementationImg from "@/assets/services/implementation.jpg";
import consultingImg from "@/assets/services/consulting.jpg";
import engineeringImg from "@/assets/services/engineering.jpg";
import supportImg from "@/assets/services/support.jpg";
import boardroomImg from "@/assets/boardroom.jpg";
import retailImg from "@/assets/industries/retail.jpg";
import mafCaseImg from "@/assets/case-studies/majid-al-futtaim.jpg";
import cavendersCaseImg from "@/assets/case-studies/cavenders.jpg";
import mattressFirmCaseImg from "@/assets/case-studies/mattress-firm.jpg";
import mafLogo from "@/assets/logos/majid-al-futtaim.png";
import mattressFirmLogo from "@/assets/logos/mattress-firm.png";
import janieJackLogo from "@/assets/logos/janie-and-jack.png";
import cavendersLogo from "@/assets/logos/cavenders.png";
import bluecrestLogo from "@/assets/logos/bluecrest.png";
import britaxLogo from "@/assets/logos/britax.png";
import stateOfUtahLogo from "@/assets/logos/state-of-utah.png";
import steMichelleLogo from "@/assets/logos/ste-michelle.png";
import syscoLogo from "@/assets/logos/sysco.png";
import vermontLogo from "@/assets/logos/vermont-country-store.png";
import lumovyLogo from "@/assets/lumovy-logo.png";
import qsrAutomationsLogo from "@/assets/QSR automation.webp";
import smlLogo from "@/assets/SML.png";
import navFeatureImg from "@/assets/feature.jpg";
import leapworkLogo from "@/assets/leapwork.png";
import adyenLogo from "@/assets/Adyen.png";
import shift4Logo from "@/assets/Shift4.png";
import msLogo from "@/assets/microsoft.png";

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

/* Small inline Microsoft Teams mark — lucide-react has no brand icon for it. */
function TeamsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 2228.833 2073.333" className={className} aria-hidden xmlns="http://www.w3.org/2000/svg">
      <path fill="#5059C9" d="M1554.637,777.5h575.713c54.391,0,98.483,44.092,98.483,98.483c0,0,0,0,0,0v524.398 c0,199.901-162.051,361.952-361.952,361.952h0h-1.711c-199.901,0.028-361.975-162-362.004-361.901c0-0.017,0-0.034,0-0.051V828.971 C1503.167,800.544,1526.211,777.5,1554.637,777.5L1554.637,777.5z"/>
      <circle fill="#5059C9" cx="1943.75" cy="440.583" r="233.25"/>
      <circle fill="#7B83EB" cx="1218.083" cy="336.917" r="336.917"/>
      <path fill="#7B83EB" d="M1667.323,777.5H717.01c-53.743,1.33-96.257,45.931-95.01,99.676v598.657 c-7.505,322.519,247.657,590.16,570.167,598.5c322.51-8.34,577.671-276,570.167-598.5V877.176 C1763.579,823.431,1721.066,778.83,1667.323,777.5z"/>
      <path opacity=".1" d="M1244,777.5v838.145c-0.258,38.435-23.549,72.964-59.087,87.598 c-11.316,4.787-23.475,7.254-35.758,7.257H667.613c-6.738-17.105-12.958-34.21-18.142-51.833 c-18.144-59.477-27.402-121.307-27.472-183.49V877.02c-1.246-53.659,41.198-98.19,94.855-99.52H1244z"/>
      <path opacity=".2" d="M1192.167,777.5v889.978c-0.006,12.283-2.472,24.442-7.257,35.758 c-14.634,35.538-49.163,58.829-87.598,59.087H691.975c-8.812-17.105-17.105-34.21-24.362-51.833 c-7.257-17.623-12.958-34.21-18.142-51.833c-18.144-59.476-27.402-121.307-27.472-183.49V877.02 c-1.246-53.659,41.198-98.19,94.855-99.52H1192.167z"/>
      <path opacity=".2" d="M1192.167,777.5v786.312c-0.395,52.223-42.632,94.46-94.855,94.855h-447.84 c-18.144-59.476-27.402-121.307-27.472-183.49V877.02c-1.246-53.659,41.198-98.19,94.855-99.52H1192.167z"/>
      <path opacity=".2" d="M1140.333,777.5v786.312c-0.395,52.223-42.632,94.46-94.855,94.855H649.313 c-18.144-59.476-27.402-121.307-27.472-183.49V877.02c-1.246-53.659,41.198-98.19,94.855-99.52H1140.333z"/>
      <path opacity=".1" d="M1244,509.522v163.275c-8.812,0.518-17.105,1.037-25.917,1.037 c-8.812,0-17.105-0.518-25.917-1.037c-17.496-1.161-34.848-3.937-51.833-8.293c-104.963-24.857-191.679-99.181-233.25-199.598 c-7.153-16.858-12.706-34.352-16.587-52.25h258.648C1201.449,412.792,1243.855,455.377,1244,509.522z"/>
      <path opacity=".2" d="M1192.167,561.372v111.425c-17.496-1.161-34.848-3.937-51.833-8.293 c-104.963-24.857-191.679-99.181-233.25-199.598h190.228C1149.757,464.987,1192.02,507.398,1192.167,561.372z"/>
      <path opacity=".2" d="M1192.167,561.372v111.425c-17.496-1.161-34.848-3.937-51.833-8.293 c-104.963-24.857-191.679-99.181-233.25-199.598h190.228C1149.757,464.987,1192.02,507.398,1192.167,561.372z"/>
      <path opacity=".2" d="M1140.333,561.372v103.132c-104.963-24.857-191.679-99.181-233.25-199.598h138.395 C1097.923,464.987,1140.187,507.398,1140.333,561.372z"/>
      <linearGradient id="teams-a" gradientUnits="userSpaceOnUse" x1="198.099" y1="1683.632" x2="942.234" y2="2401.918" gradientTransform="matrix(1 0 0 -1 0 2075.333)">
        <stop offset="0" stopColor="#5a62c3"/>
        <stop offset=".5" stopColor="#4d55bd"/>
        <stop offset="1" stopColor="#3940ab"/>
      </linearGradient>
      <path fill="url(#teams-a)" d="M95.01,464.833h950.312c52.473,0,95.01,42.538,95.01,95.01v950.312c0,52.473-42.538,95.01-95.01,95.01 H95.01c-52.473,0-95.01-42.538-95.01-95.01V559.844C0,507.371,42.538,464.833,95.01,464.833z"/>
      <path fill="#FFF" d="M820.211,828.257H630.241v517.297H509.211V828.257H320.123V727.775h500.088V828.257z"/>
    </svg>
  );
}

/* Scroll-reveal — identical to the About page's: fades + slides up once,
   the first time an element enters the viewport, then stays put. */
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
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, shown };
}
function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

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
      <IndustryRouter />
      <ProofStrip />
      <WhatWeDo />
      <PartnersStrip />
      <CaseStudies />
      <Testimonials />
      <Contact />
      <FinalCTA />
      <Footer />
      <StickyCTA />
    </div>
  );
}

/* NAV */
type SubItem = { label: string; href: string; subtitle?: string };
type NavGroup = { heading: string; headingHref?: string; items: SubItem[] };
// Optional highlighted "feature" panel shown on the left of a mega-menu.
type NavFeature = { title: string; image: string; href: string; cta?: string; blurb?: string };
type NavMain = { label: string; groups?: NavGroup[]; href?: string; feature?: NavFeature };

const NAV_MENU: NavMain[] = [
  {
    label: "What We Do",
    feature: {
      title: "Industry Solutions",
      image: navFeatureImg,
      href: "/industries",
      blurb: "Cloud-First Grocery & Discount Launch in Under 100 Days",
      cta: "Explore industries",
    },
    groups: [
      {
        heading: "Industry Solutions",
        headingHref: "/industries",
        items: [
          { label: "Guest Commerce", href: "/industries/hospitality-entertainment-sports" },
          { label: "Retail & Hypermarket", href: "/industries/grocery-hypermarkets" },
          { label: "Distribution & Supply Chain", href: "/what-we-do/practice-areas/supply-chain" },
        ],
      },
      {
        heading: "Services",
        headingHref: "/services",
        items: [
          {
            label: "Microsoft Dynamics 365",
            href: "/services",
            subtitle: "Retail, Supply Chain, Finance & Operations, Customer Experience",
          },
          { label: "Quality Engineering", href: "/what-we-do/delivery-support/quality-engineering-factory" },
          { label: "Managed Services", href: "/what-we-do/delivery-support/managed-support-expansion" },
        ],
      },
    ],
  },
  {
    label: "Insights",
    href: "/insights",
  },
  {
    label: "About Us",
    feature: {
      title: "About Us",
      image: navFeatureImg,
      href: "/about",
      blurb: "The people and purpose behind Lumovy",
      cta: "Discover our story",
    },
    groups: [
      {
        heading: "",
        items: [
          { label: "About Us", href: "/about" },
          { label: "Life at Lumovy", href: "/company/people-stories" },
        ],
      },
    ],
  },
];

/* AI Copilot search — compact input, UI only for now (no backend wired up
   yet). Submits are no-ops so it can drop straight into a real assistant
   later without changing the navbar layout. */
function AiCopilotSearch() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="group flex w-[190px] items-center gap-2 rounded-full border border-border bg-[var(--blue-light)]/40 px-3.5 py-2 transition-colors focus-within:border-[var(--royal)]/40 focus-within:bg-white xl:w-[220px]"
    >
      <Sparkles className="h-3.5 w-3.5 shrink-0 text-[var(--royal)]" />
      <input
        type="text"
        placeholder="Ask us anything"
        aria-label="Ask Lumovy anything"
        className="w-full bg-transparent text-[13px] text-[var(--navy-deep)] placeholder:text-[var(--blue-gray)] focus:outline-none"
      />
    </form>
  );
}

export function Nav() {
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
        <a href="/" className="flex items-center">
          <img src={lumovyLogo} alt="Lumovy Technology Solutions" className="h-9 w-auto" />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_MENU.map((item) => {
            const hasMenu = !!item.groups;
            const isActive = active === item.label;
            return (
              <div
                key={item.label}
                onMouseEnter={() => setActive(hasMenu ? item.label : null)}
              >
                <a
                  href={item.href ?? "#"}
                  className={
                    "group relative inline-flex items-center gap-1 px-3 py-2 text-xs font-medium transition-colors " +
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
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <AiCopilotSearch />
          <a
            href="#contact"
            className={
              "inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-[13px] font-semibold transition-all hover:-translate-y-0.5 " +
              (solid
                ? "bg-[var(--royal)] text-white hover:bg-[var(--navy)] hover:shadow-lg hover:shadow-[var(--royal)]/25"
                : "bg-white text-[var(--navy-deep)] hover:shadow-lg hover:shadow-black/30")
            }
          >
            Contact Us
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

      {/* Full-width mega-menu panel (desktop) */}
      {(() => {
        const activeItem = NAV_MENU.find((m) => m.label === active && m.groups);
        if (!activeItem) return null;
        return (
          <div className="mega-menu-panel absolute inset-x-0 top-full hidden border-t border-border bg-white shadow-fluent-lg lg:block">
            <MegaMenu groups={activeItem.groups!} feature={activeItem.feature} />
          </div>
        );
      })()}

      {open && (
        <div className="max-h-[70vh] overflow-y-auto border-t border-border bg-background lg:hidden">
          <div className="container-enterprise flex flex-col py-3">
            {NAV_MENU.map((item) => (
              <MobileMenuItem key={item.label} item={item} onNavigate={() => setOpen(false)} />
            ))}
            <div className="mt-3 flex items-center gap-2 rounded-full border border-border bg-[var(--blue-light)]/40 px-3.5 py-2.5">
              <Sparkles className="h-3.5 w-3.5 shrink-0 text-[var(--royal)]" />
              <input
                type="text"
                placeholder="Ask us anything"
                aria-label="Ask Lumovy anything"
                className="w-full bg-transparent text-sm text-[var(--navy-deep)] placeholder:text-[var(--blue-gray)] focus:outline-none"
              />
            </div>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-full bg-[var(--royal)] px-4 py-3 text-sm font-semibold text-white"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function MegaMenu({ groups, feature }: { groups: NavGroup[]; feature?: NavFeature }) {
  return (
    <div className="animate-menu-in flex items-stretch">
      {/* Optional highlighted feature panel — full height, connected top & bottom.
          Anchored to the left of the viewport (bg + left inset), content aligned
          to the container's left edge via padding. */}
      {feature && (
        <a
          href={feature.href}
          className="group hidden shrink-0 flex-col bg-[var(--blue-light)]/30 py-9 pr-9 transition-colors hover:bg-[var(--blue-light)]/50 xl:flex"
          style={{ width: "calc((100vw - 1320px) / 2 + 1.5rem + 400px)", paddingLeft: "calc((100vw - 1320px) / 2 + 1.5rem)" }}
        >
          <span className="text-base font-bold tracking-tight text-[var(--navy-deep)]">
            {feature.title}
          </span>
          <span className="mt-4 block overflow-hidden">
            <img
              src={feature.image}
              alt={feature.title}
              className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </span>
          {feature.blurb && (
            <span className="mt-4 block text-[15px] font-semibold leading-snug text-[var(--navy-deep)]">
              {feature.blurb}
            </span>
          )}
          <span className="mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-[var(--royal)]">
            <span className="border-b-2 border-[var(--royal)] pb-0.5">{feature.cta ?? "Learn more"}</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </a>
      )}

      {/* Category columns */}
      <div className={"flex items-start gap-3 py-10 " + (feature ? "pl-14" : "container-enterprise")}>
        {groups.map((g, gi) => (
          <div key={g.heading || gi} className="w-[280px]">
            {g.heading ? (
              g.headingHref ? (
                <a
                  href={g.headingHref}
                  className="block bg-[var(--blue-light)] px-4 py-1.5 text-[13px] font-bold tracking-tight text-[var(--navy-deep)] transition-colors hover:text-[var(--royal)]"
                >
                  {g.heading}
                </a>
              ) : (
                <div className="bg-[var(--blue-light)] px-4 py-1.5 text-[13px] font-bold tracking-tight text-[var(--navy-deep)]">
                  {g.heading}
                </div>
              )
            ) : (
              <div className="h-px" aria-hidden />
            )}
            <ul className={"space-y-3.5 " + (g.heading ? "mt-5" : "mt-0")}>
              {g.items.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="block text-[14px] font-medium text-[var(--blue-gray)] transition-colors hover:text-[var(--royal)]"
                  >
                    {s.label}
                  </a>
                  {s.subtitle && (
                    <p className="mt-1 text-[12px] leading-snug text-[var(--gray-neutral)]">{s.subtitle}</p>
                  )}
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
              {g.headingHref ? (
                <a
                  href={g.headingHref}
                  onClick={onNavigate}
                  className="block text-[10px] font-semibold uppercase tracking-widest text-[var(--royal)]"
                >
                  {g.heading}
                </a>
              ) : (
                <div className="text-[10px] font-semibold uppercase tracking-widest text-[var(--royal)]">
                  {g.heading}
                </div>
              )}
              <ul className="mt-1">
                {g.items.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} onClick={onNavigate} className="block py-1.5 text-sm text-[var(--navy-deep)]">
                      {s.label}
                    </a>
                    {s.subtitle && (
                      <p className="-mt-1 pb-1.5 text-xs leading-snug text-[var(--blue-gray)]">{s.subtitle}</p>
                    )}
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
    eyebrow: "Microsoft Dynamics 365 for Guest Commerce, Retail & Finance",
    headline: "We've stood where you're standing.",
    subhead:
      "Founded by people who led technology change from inside a business, not from outside a slide deck. We put Microsoft Dynamics 365 to work as one system, guest experience, commerce, finance and supply chain together.",
    cta: "Talk to Us",
    href: "#contact",
  },
  {
    eyebrow: "Guest Commerce, in Production",
    headline: "An NBA arena runs checkout-free, end to end, on what we built.",
    subhead: "30 food & beverage stands. 9 retail outlets. Zero queues. One Dynamics 365 core behind all of it.",
    cta: "See How Intuit Dome Runs",
    href: "#case-studies",
  },
  {
    eyebrow: "Retail & Hypermarket Commerce",
    headline: "Empty warehouse to 1,600+ SKUs live, in 100 days.",
    subhead:
      "A new grocery chain launched on Dynamics 365 from a standing start, no legacy system, no shortcuts.",
    cta: "See the Retail Story",
    href: "#case-studies",
  },
  {
    eyebrow: "Dynamics 365 Customer Experience",
    headline: "Half the case time. One screen instead of six.",
    subhead: "Cavender's unified its service desk on Dynamics 365 CE and Copilot in under 10 weeks.",
    cta: "See the CX Story",
    href: "#case-studies",
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
    <section className="hero-blue-static overflow-hidden">
      <div aria-hidden className="hero-grid" />
      <div className="container-enterprise relative z-10 grid gap-14 pt-24 lg:grid-cols-12 lg:gap-10 lg:pt-32">
        <HeroSlider active={active} phase={phase} setPaused={setPaused} handleAnimEnd={handleAnimEnd} />
        <aside className="lg:col-span-5 lg:pt-14">
          <div className="rounded-xl bg-white p-7 shadow-2xl shadow-black/30">
            <h3 className="text-xl font-semibold text-[var(--navy-deep)]">Executive Briefing</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--blue-gray)]">
              Talk directly with one of our engagement principals about what matters to you.
            </p>
            <div className="mt-5 flex items-center gap-2 rounded-lg bg-[var(--blue-light)]/50 px-3.5 py-2.5">
              <TeamsIcon className="h-4 w-4 shrink-0" />
              <span className="text-sm font-medium text-[var(--navy-deep)]">Microsoft Teams</span>
            </div>
            <a
              href="#contact"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--royal)] px-4 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[var(--navy)] hover:shadow-lg hover:shadow-black/20"
            >
              Book a 30-Min Strategy Call
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
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--blue-gray)]">
            Trusted by clients worldwide
          </p>
        </Reveal>
      </div>
      <div className="group mt-10 overflow-hidden py-8">
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

/* INDUSTRY ROUTER — primary navigation action on the page: three large,
   image-led cards routing into the industry hubs. */
type IndustryRouteItem = {
  name: string;
  headline: string;
  subhead: string;
  href: string;
  cta: string;
  icon: typeof Hotel;
  tint: "orange" | "green" | "blue";
};

const INDUSTRY_ROUTES: IndustryRouteItem[] = [
  {
    name: "Guest Commerce",
    headline: "Guest Commerce",
    subhead:
      "One system, from the concession stand to the ledger. Built for stadiums, arenas and hospitality groups running live, high-volume guest experiences.",
    href: "/industries/hospitality-entertainment-sports",
    cta: "Explore Guest Commerce",
    icon: Hotel,
    tint: "orange",
  },
  {
    name: "Retail & Hypermarket Commerce",
    headline: "Retail & Hypermarket Commerce",
    subhead:
      "Multi-store, multi-format retail on one Dynamics 365 core, from a single boutique chain to a national hypermarket estate.",
    href: "/industries/grocery-hypermarkets",
    cta: "Explore Retail & Hypermarket Commerce",
    icon: Store,
    tint: "green",
  },
  {
    name: "Distribution & Supply Chain",
    headline: "Distribution & Supply Chain",
    subhead: "Fulfilment and inventory that hold up under real order volume, not just in a pilot.",
    href: "/what-we-do/practice-areas/supply-chain",
    cta: "Explore Distribution & Supply Chain",
    icon: Truck,
    tint: "blue",
  },
];

const ICON_TINTS = {
  orange: "bg-[#fdf1e6] text-[#c2650a]",
  green: "bg-[#e8f5ea] text-[#1e7b34]",
  blue: "bg-[var(--blue-light)] text-[var(--royal)]",
} as const;

function IndustryRouter() {
  return (
    <section id="industries" className="relative overflow-hidden border-b border-border bg-[var(--blue-light)]/40 py-28">
      <div aria-hidden className="mesh-blobs-light opacity-60" />
      <div className="container-enterprise relative">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow">Where we play</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
              Find yourself here first, the platform conversation comes next.
            </h2>
          </div>
          <a href="/industries" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--royal)]">
            Explore industry hub
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {INDUSTRY_ROUTES.map((i, idx) => (
            <Reveal key={i.name} delay={idx * 100} className="h-full">
              <article className="card-lift flex h-full flex-col rounded-xl border border-border bg-white p-7">
                <div className={"grid h-12 w-12 place-items-center rounded-xl " + ICON_TINTS[i.tint]}>
                  <i.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-snug text-[var(--navy-deep)]">{i.headline}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--blue-gray)]">{i.subhead}</p>
                <div className="mt-auto pt-6">
                  <LearnMore label={i.cta} href={i.href} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* PROOF STRIP — named, already-published customer outcomes pulled straight
   from the CaseStudies data below. No invented figures. */
/* Counts up from 0 to the numeric part of `value` once `start` flips true,
   then keeps whatever non-numeric prefix/suffix the label had (e.g. "+",
   " Days"). Runs once; ignored entirely under reduced-motion. */
function CountUpMetric({ value, start, duration = 1400 }: { value: string; start: boolean; duration?: number }) {
  const match = value.match(/[\d,]+/);
  const target = match ? parseInt(match[0].replace(/,/g, ""), 10) : null;
  const prefix = match ? value.slice(0, match.index) : "";
  const suffix = match ? value.slice((match.index ?? 0) + match[0].length) : "";
  const [display, setDisplay] = useState(target === null ? value : "0");

  useEffect(() => {
    if (!start || target === null) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(String(target));
      return;
    }
    let raf: number;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(String(Math.round(eased * target)));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);

  return (
    <>
      {prefix}
      {display}
      {suffix}
    </>
  );
}

function ProofStrip() {
  const metrics = [
    ["320+", "Completed Dynamics 365 projects"],
    ["300+", "Consultants worldwide"],
    ["50+", "Active customers, 95% retention"],
    ["100 Days", "Average go-live"],
  ];
  const sectionRef = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  // One-time staggered reveal: the numbers animate in automatically the
  // first time the section enters the viewport, and stay put afterwards
  // (no replay when scrolling back up).
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setRevealed(true);
      return;
    }
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setRevealed(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0c2856] py-20 text-white sm:py-24">
      <div className="container-enterprise">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6">
          {metrics.map(([v, l], idx) => (
            <div
              key={l}
              className="text-center sm:text-left"
              style={{
                opacity: revealed ? 1 : 0,
                transform: revealed ? "translateY(0)" : "translateY(28px)",
                transition: `opacity 0.6s ease-out ${idx * 110}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${idx * 110}ms`,
              }}
            >
              <div className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                <CountUpMetric value={v} start={revealed} />
              </div>
              <div className="mt-2 text-sm font-medium leading-relaxed text-white/70">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* WHAT WE DO — "Services at a Glance". Single rail + showcase panel (no
   tabs), matching the updated homepage content doc's 5 services exactly. */
type WhatWeDoItem = SubItem & { blurb: string; image: string };

const WHAT_WE_DO_SERVICES: WhatWeDoItem[] = [
  {
    label: "Retail",
    href: "/what-we-do/practice-areas/commerce",
    image: retailImg,
    blurb: "Store Commerce, POS and eCommerce unified on Dynamics 365 Commerce.",
  },
  {
    label: "Supply Chain",
    href: "/what-we-do/practice-areas/supply-chain",
    image: engineeringImg,
    blurb: "Inventory, warehouse and fulfilment that scales with order volume.",
  },
  {
    label: "Finance & Operations",
    href: "/what-we-do/practice-areas/finance",
    image: boardroomImg,
    blurb: "From invoice processing to financial reporting, one unified view.",
  },
  {
    label: "Customer Experience",
    href: "/what-we-do/practice-areas/customer-engagement",
    image: supportImg,
    blurb: "One unified view, from first contact to loyal customer.",
  },
  {
    label: "Quality Engineering",
    href: "/what-we-do/delivery-support/quality-engineering-factory",
    image: consultingImg,
    blurb: "Continuous validation for every Dynamics 365 release.",
  },
];

function WhatWeDo() {
  const [activeLabel, setActiveLabel] = useState(WHAT_WE_DO_SERVICES[0].label);
  const current = WHAT_WE_DO_SERVICES.find((i) => i.label === activeLabel) ?? WHAT_WE_DO_SERVICES[0];

  return (
    <section id="what-we-do" className="bg-white py-28">
      <div className="container-enterprise">
        <Reveal className="max-w-none">
          <p className="eyebrow">What we do</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Services at a glance
          </h2>
        </Reveal>

        {/* Rail + showcase panel */}
        <Reveal delay={100} className="hero-content-in mt-9 grid gap-0 overflow-hidden rounded-2xl border border-border bg-white shadow-fluent-md lg:grid-cols-[320px_1fr]">
          <div className="flex flex-row gap-2 overflow-x-auto border-b border-border p-4 lg:flex-col lg:overflow-visible lg:border-b-0 lg:border-r lg:p-5">
            {WHAT_WE_DO_SERVICES.map((item) => {
              const isActive = item.label === current.label;
              return (
                <button
                  key={item.label}
                  onMouseEnter={() => setActiveLabel(item.label)}
                  onClick={() => setActiveLabel(item.label)}
                  className={
                    "group flex shrink-0 items-center justify-between gap-3 px-4 py-3.5 text-left text-[15px] font-semibold transition-colors lg:shrink " +
                    (isActive
                      ? "bg-[var(--blue-light)] text-[var(--navy-deep)]"
                      : "text-[var(--blue-gray)] hover:bg-[var(--blue-light)]/40 hover:text-[var(--navy-deep)]")
                  }
                >
                  <span className="whitespace-nowrap lg:whitespace-normal">{item.label}</span>
                  <ChevronRight
                    className={
                      "h-4 w-4 shrink-0 transition-transform " +
                      (isActive ? "translate-x-0.5 text-[var(--royal)]" : "text-[var(--gray-neutral)]")
                    }
                  />
                </button>
              );
            })}
          </div>

          <div className="relative p-6 lg:p-9">
            <div className="relative aspect-[16/8] w-full overflow-hidden rounded-lg bg-[#0c2856] lg:aspect-[16/6.5]">
              <img
                src={current.image}
                alt={current.label}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>

            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-[var(--blue-gray)]">{current.blurb}</p>
            <div className="mt-5">
              <LearnMore label="Learn more" href={current.href} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* PARTNERS STRIP — Microsoft first, then the technology partners behind
   every engagement, each with what it's used for. */
type PartnerTile = { name: string; caption: string; logo: string; logoClass?: string };

const PARTNER_TILES: PartnerTile[] = [
  { name: "Microsoft", caption: "Dynamics 365, Azure, and Power Platform, the foundation of every engagement.", logo: msLogo, logoClass: "h-7" },
  { name: "Adyen", caption: "Unified, secure payments across every channel.", logo: adyenLogo, logoClass: "h-8" },
  { name: "Shift4", caption: "Integrated payment processing for retail and hospitality.", logo: shift4Logo, logoClass: "h-8" },
  { name: "QSR Automations", caption: "Kitchen display and order management for high-volume restaurants.", logo: qsrAutomationsLogo, logoClass: "h-14" },
  { name: "SML", caption: "RFID and loss-prevention hardware for retail inventory.", logo: smlLogo, logoClass: "h-8" },
  { name: "Leapwork", caption: "No-code test automation for faster, safer releases.", logo: leapworkLogo, logoClass: "h-8" },
];

function PartnersStrip() {
  return (
    <section className="border-b border-border bg-white py-24">
      <div className="container-enterprise">
        <Reveal className="max-w-none">
          <p className="eyebrow">Technology partners</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl lg:whitespace-nowrap">
            The technology behind every engagement
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {PARTNER_TILES.map((p, idx) => (
            <Reveal key={p.name} delay={(idx % 3) * 90} className="h-full">
              <div className="h-full rounded-xl border border-border bg-white p-7">
                <div className="flex h-14 items-center">
                  <img
                    src={p.logo}
                    alt={p.name}
                    loading="lazy"
                    className={(p.logoClass ?? "h-8") + " w-auto object-contain"}
                  />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[var(--blue-gray)]">{p.caption}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* WHY */
/* CASE STUDIES */
/* Reusable case-study card — used on the homepage and inner pages.
   Same styling/structure; content is passed in. */
export type CaseStudyData = {
  sector: string;
  image: string;
  logo?: string;
  logoClass?: string;
  title: string;
  results: [string, string][];
  cta?: string;
  href?: string;
};

/* Microsoft-customers-style case study card: photo on top with the client's
   logo in a white chip over the top-left corner, title below, then metrics
   and a CTA. No descriptive paragraph, kept consistent everywhere on the
   site (homepage grid and every inner-page Proof/case-study section). */
export function CaseStudyCard({
  sector,
  image,
  logo,
  logoClass,
  title,
  results,
  cta = "Read the Engagement",
  href = "#contact",
}: CaseStudyData) {
  return (
    <article className="group card-lift flex flex-col overflow-hidden rounded-xl border border-border bg-white">
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <img
          src={image}
          alt={sector}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {logo && (
          <span className="absolute left-4 top-4 flex h-11 items-center rounded-lg bg-white px-3.5 shadow-sm">
            <img
              src={logo}
              alt={sector}
              loading="lazy"
              className={(logoClass ?? "max-h-6") + " w-auto max-w-[120px] object-contain"}
            />
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-7">
        <h3 className="line-clamp-2 min-h-11 text-lg font-semibold leading-snug text-[var(--navy-deep)]">{title}</h3>
        <div className="mt-5 grid flex-1 grid-cols-3 items-start gap-3 border-t border-border pt-5">
          {results.map(([v, l]) => (
            <div key={l} className="min-w-0">
              <div className="whitespace-nowrap text-[15px] font-bold leading-tight text-[var(--navy-deep)]">{v}</div>
              <div className="mt-1 text-[11px] font-medium leading-tight text-[var(--blue-gray)]">{l}</div>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <LearnMore label={cta} href={href} />
        </div>
      </div>
    </article>
  );
}

/* Reusable horizontal card slider: shows 3 cards per view on desktop with
   prev/next arrow controls, snap-scrolls one card at a time. Falls back to a
   native swipeable row on smaller screens where 3-up doesn't fit. */
export function CardSlider({ children }: { children: React.ReactNode[] }) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEdges = () => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  };

  useEffect(() => {
    updateEdges();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);
    return () => {
      el.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, []);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-slide]");
    const step = card ? card.getBoundingClientRect().width + 24 : el.clientWidth * 0.9;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="scroll-hide snap-x snap-mandatory overflow-x-auto pb-2"
      >
        <div className="flex gap-6">
          {children.map((child, i) => (
            <div
              key={i}
              data-slide
              className="w-[min(85vw,380px)] shrink-0 snap-start lg:w-[calc((100%-3rem)/3)]"
            >
              {child}
            </div>
          ))}
        </div>
      </div>
      <button
        type="button"
        aria-label="Previous"
        onClick={() => scrollByCard(-1)}
        disabled={atStart}
        className="absolute left-0 top-1/2 hidden -translate-x-5 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white p-2.5 shadow-fluent-md transition-opacity disabled:pointer-events-none disabled:opacity-0 lg:flex"
      >
        <ChevronLeft className="h-5 w-5 text-[var(--navy-deep)]" />
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={() => scrollByCard(1)}
        disabled={atEnd}
        className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-5 items-center justify-center rounded-full border border-border bg-white p-2.5 shadow-fluent-md transition-opacity disabled:pointer-events-none disabled:opacity-0 lg:flex"
      >
        <ChevronRight className="h-5 w-5 text-[var(--navy-deep)]" />
      </button>
    </div>
  );
}

function CaseStudies() {
  const cases = [
    {
      sector: "Majid Al Futtaim (Sava)",
      image: mafCaseImg,
      logo: mafLogo,
      title: "Cloud-First Grocery & Discount Launch in Under 100 Days",
      results: [
        ["100 days", "To full ERP-enabled store operations"],
        ["130+", "Business processes, 14 modules"],
        ["1,600+", "SKUs; 160 weekly offers"],
      ],
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
      ],
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
      ],
    },
  ];
  return (
    <section id="case-studies" className="relative overflow-hidden border-b border-border bg-[var(--blue-light)]/40 py-28">
      <div aria-hidden className="mesh-blobs-light opacity-60" />
      <div className="container-enterprise relative">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow">Case studies</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
              Real engagements. Auditable outcomes
            </h2>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--royal)]">
            View more
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {cases.map((c, idx) => (
            <Reveal key={c.title} delay={idx * 100} className="h-full">
              <CaseStudyCard {...c} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* TESTIMONIALS */
export type QuoteItem = {
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

export function QuoteCard({ q }: { q: QuoteItem }) {
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
            <Reveal className="max-w-2xl">
              <p className="eyebrow">Executive references</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
                What decision-makers say
              </h2>
            </Reveal>
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
          <Reveal className="lg:col-span-5">
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
          </Reveal>
          <Reveal delay={100} className="lg:col-span-7">
            <form className="card-lift rounded-xl border border-border bg-white p-8">
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
          </Reveal>
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
/* Reusable FAQ accordion — heading on the left, questions on the right, with
   an optional "View more" collapse. Used on the homepage and inner pages. */
export function FaqAccordion({
  title,
  intro,
  items,
  visible = 6,
}: {
  title: string;
  intro?: string;
  items: [string, string][];
  visible?: number;
}) {
  const [open, setOpen] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? items : items.slice(0, visible);
  return (
    <div className="grid gap-10 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <p className="eyebrow">FAQ</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
          {title}
        </h2>
        {intro && <p className="mt-5 text-sm leading-relaxed text-[var(--blue-gray)]">{intro}</p>}
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
        {items.length > visible && (
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
  );
}

/* FINAL CTA */
function FinalCTA() {
  return (
    <FinalCtaSection
      eyebrow="Ready when you are"
      title="Tell us what's not talking to what, and we'll tell you what it takes to fix it."
      primary={{ label: "Book a 30-Min Strategy Call", href: "#contact" }}
      secondary={{ label: "Review case studies", href: "#case-studies" }}
      blueStatic
    />
  );
}

/* Reusable dark closing-CTA section — used on the homepage and inner pages. */
export function FinalCtaSection({
  eyebrow = "Ready when you are",
  title,
  subtitle,
  microcopy,
  primary,
  secondary,
  id,
  blueStatic = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  microcopy?: string;
  primary: { label: string; href: string; icon?: boolean };
  secondary?: { label: string; href: string };
  id?: string;
  /* Use the exact static About/"Our History" blue background instead of the
     default animated dark hero. Homepage-only for now. */
  blueStatic?: boolean;
}) {
  return (
    <section
      id={id}
      className={(blueStatic ? "hero-blue-static" : "hero-dark relative") + " overflow-hidden py-28 text-white"}
    >
      {!blueStatic && (
        <>
          <div aria-hidden className="hero-beam" />
          <div aria-hidden className="hero-orbs" />
          <div aria-hidden className="hero-grain" />
        </>
      )}
      <div aria-hidden className="hero-grid" />
      <div className="container-enterprise relative z-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--cyan-soft)]">{eyebrow}</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        {subtitle && <p className="mx-auto mt-5 max-w-2xl text-base text-white/70">{subtitle}</p>}
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a
            href={primary.href}
            className={
              blueStatic
                ? "group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--navy-deep)] transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30"
                : "group inline-flex items-center gap-2 rounded-full bg-[var(--royal)] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-[var(--navy-deep)] hover:shadow-xl"
            }
          >
            {primary.icon && <Calendar className="h-4 w-4" />}
            {primary.label}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          {secondary && (
            <a
              href={secondary.href}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              {secondary.label}
              <ArrowRight className="h-4 w-4" />
            </a>
          )}
        </div>
        {microcopy && <p className="mx-auto mt-6 max-w-xl text-xs text-white/50">{microcopy}</p>}
      </div>
    </section>
  );
}

/* FOOTER */
export function Footer() {
  const cols: [string, string, SubItem[]][] = [
    ["Industry Solutions", "/industries", [
      { label: "Guest Commerce", href: "/industries/hospitality-entertainment-sports" },
      { label: "Retail & Hypermarket", href: "/industries/grocery-hypermarkets" },
      { label: "Distribution & Supply Chain", href: "/what-we-do/practice-areas/supply-chain" },
    ]],
    ["Services", "/services", [
      { label: "Microsoft Dynamics 365", href: "/services" },
      { label: "Quality Engineering", href: "/what-we-do/delivery-support/quality-engineering-factory" },
      { label: "Managed Services", href: "/what-we-do/delivery-support/managed-support-expansion" },
    ]],
    ["Insights", "/insights", [
      { label: "Insights", href: "/insights" },
    ]],
    ["Company", "/about", [
      { label: "About Us", href: "/about" },
      { label: "Life at Lumovy", href: "/company/people-stories" },
    ]],
  ];
  return (
    <footer className="bg-white text-[var(--navy-deep)]">
      <div className="container-enterprise py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <a href="/" className="flex items-center">
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
          <div className="grid grid-cols-2 gap-8 lg:col-span-9 lg:grid-cols-4">
            {cols.map(([h, headingHref, items]) => (
              <div key={h}>
                <a
                  href={headingHref}
                  className="text-xs font-semibold uppercase tracking-widest text-[var(--navy-deep)] hover:text-[var(--royal)]"
                >
                  {h}
                </a>
                <ul className="mt-4 space-y-2.5">
                  {items.map((i) => (
                    <li key={i.label}>
                      <a href={i.href} className="text-sm text-[var(--blue-gray)] hover:text-[var(--royal)]">
                        {i.label}
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
            <a href="/privacy" className="hover:text-[var(--royal)]">Privacy</a>
            <a href="/terms" className="hover:text-[var(--royal)]">Terms</a>
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
