import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Linkedin,
  ShieldCheck,
  Compass,
  Sparkles,
  HeartHandshake,
  Eye,
  Target,
  MapPin,
  Phone,
  Mail,
  Bot,
  MessageCircle,
  Zap,
  Globe2,
  UserCheck,
} from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Nav, Footer, FinalCtaSection } from "./index";
import heroTeamImg from "@/assets/about/hero-team.jpg";
import leader1 from "@/assets/about/leaders/leader-1.webp";
import leader2 from "@/assets/about/leaders/leader-2.webp";
import leader3 from "@/assets/about/leaders/leader-3.webp";
import leader4 from "@/assets/about/leaders/leader-4.webp";
import leader5 from "@/assets/about/leaders/leader-5.webp";
import leader6 from "@/assets/about/leaders/leader-6.webp";
import leader7 from "@/assets/about/leaders/leader-7.webp";
import leader8 from "@/assets/about/leaders/leader-8.webp";
import leader9 from "@/assets/about/leaders/leader-9.webp";
import leader10 from "@/assets/about/leaders/leader-10.webp";
import leader11 from "@/assets/about/leaders/leader-11.webp";
import leader12 from "@/assets/about/leaders/leader-12.webp";

const INK = "#0c2856";
const BLUE = "var(--royal)";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Lumovy | Now & Beyond" },
      {
        name: "description",
        content:
          "Founded by people who have led technology change from within a business, Lumovy brings firsthand understanding, practical expertise, and personal responsibility to your challenges today and the possibilities ahead.",
      },
    ],
  }),
});

/* Scroll-reveal — identical to the homepage's: fades + slides up once, the
   first time an element enters the viewport, then stays put. */
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
function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
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

function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={"text-xs font-semibold uppercase tracking-[0.16em] text-[var(--royal)] " + className}>{children}</p>
  );
}

function Moment({ label, title, sub }: { label?: string; title: string; sub?: string }) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      {label && <Eyebrow>{label}</Eyebrow>}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
        {title}
      </h2>
      {sub && <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-[var(--blue-gray)]">{sub}</p>}
    </Reveal>
  );
}

/* Section anchors — id, label, and the nav-highlight range */
const SECTION_NAV = [
  { id: "our-story", label: "Our Story" },
  { id: "vision-mission", label: "Vision & Mission" },
  { id: "leadership", label: "Leadership" },
  { id: "values", label: "Values & Principles" },
  { id: "global-presence", label: "Global Presence" },
];

/* Sticky in-page section nav — sits beneath the shared header, highlights
   the section currently in view, and stays reachable on mobile as a single
   horizontally-scrollable row. */
function SectionNav() {
  const [active, setActive] = useState(SECTION_NAV[0].id);

  useEffect(() => {
    const els = SECTION_NAV.map((s) => document.getElementById(s.id)).filter((e): e is HTMLElement => !!e);
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-140px 0px -70% 0px", threshold: 0 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="sticky top-16 z-30 border-b border-border bg-white/95 backdrop-blur-md">
      <div className="container-enterprise">
        <nav aria-label="About Us sections" className="scroll-hide flex justify-center gap-1 overflow-x-auto">
          {SECTION_NAV.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={
                "relative shrink-0 px-4 py-3.5 text-[13px] font-semibold transition-colors " +
                (active === s.id ? "text-[var(--royal)]" : "text-[var(--blue-gray)] hover:text-[var(--navy-deep)]")
              }
            >
              {s.label}
              <span
                className={
                  "absolute inset-x-4 -bottom-px h-0.5 rounded-full bg-[var(--royal)] transition-opacity " +
                  (active === s.id ? "opacity-100" : "opacity-0")
                }
              />
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <AboutHero />
      <SectionNav />
      <OurStory />
      <WeAreProudOf />
      <VisionMission />
      <Leadership />
      <Values />
      <Principles />
      <GlobalPresence />
      <LifeAtLumovyTeaser />
      <AboutCTA />
      <Footer />
    </div>
  );
}

/* ───────────────────────────── 1. HERO — exact About/"Our History" blue treatment ───────────────────────────── */
function AboutHero() {
  return (
    <section className="hero-blue-static overflow-hidden">
      <div aria-hidden className="hero-grid" />
      <div className="container-enterprise relative z-10 flex flex-col items-center py-28 text-center lg:py-32">
        <Eyebrow className="hero-content-in text-white/70">About Lumovy</Eyebrow>
        <h1 className="hero-content-in mt-4 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]" style={{ animationDelay: "60ms" }}>
          Now &amp; Beyond
        </h1>
        <p className="hero-content-in mt-6 max-w-2xl text-base leading-relaxed text-white/70" style={{ animationDelay: "140ms" }}>
          We solve what matters now while building for what comes beyond. Founded by people who have led
          technology change from within a business, Lumovy brings firsthand understanding, practical
          expertise, and personal responsibility to your challenges today and the possibilities ahead.
        </p>
        <div className="hero-content-in mt-9" style={{ animationDelay: "220ms" }}>
          <a
            href="#our-story"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--navy-deep)] transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30"
          >
            Discover our story
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── 2. OUR STORY — founder narrative + the meaning behind Lumovy ───────────────────────────── */
function OurStory() {
  return (
    <section id="our-story" className="scroll-mt-32 bg-white py-28">
      <div className="container-enterprise">
        <Reveal className="max-w-3xl">
          <Eyebrow>Our story</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Built from experience. Founded on responsibility.
          </h2>
        </Reveal>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={100}>
            <div className="overflow-hidden rounded-2xl">
              <img
                src={heroTeamImg}
                alt="Early Lumovy team working together"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={150} className="space-y-5 text-[15px] leading-relaxed text-[var(--blue-gray)]">
            <p>
              Our founder &amp; CEO, Waseem Uddin, spent years leading retail technology programs. He knew
              what it meant to commit an investment, help teams navigate change, and carry responsibility
              for the result. He saw how costs could grow, timelines could stretch, and important work
              could remain after a system went live.
            </p>
            <p>
              In 2021, he brought together trusted people who had faced those realities alongside him. Some
              of their earliest meetings happened in his garage in Portland, where they still gather at
              times. They shared a conviction: their experience could give businesses a better path
              forward.
            </p>
            <p>
              Microsoft Dynamics became part of that journey through a shared commitment: Waseem and the
              team brought firsthand understanding of the business challenges, and Microsoft invested in
              working with them to address those needs. That experience shaped Lumovy's founding
              conviction: meaningful transformation takes deep industry understanding, carefully chosen
              technology partnerships, and people who take personal responsibility for making it work.
            </p>
          </Reveal>
        </div>

        {/* The meaning behind Lumovy — supporting feature within Our Story */}
        <Reveal delay={100}>
          <div className="mt-16 overflow-hidden rounded-2xl px-6 py-14 sm:px-12 lg:px-16" style={{ background: INK }}>
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-[var(--cyan-soft)]">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                The meaning behind Lumovy
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-white/70">
                Lumovy draws from lumen, meaning light. The lighthouse behind our identity expresses our
                purpose: helping customers see their options, recognize the risks, and find direction
                through complexity. We bring that belief to the decisions we help make and the work we
                carry forward. "Now &amp; Beyond" carries that purpose forward: bringing clarity to the
                challenges customers face today and helping them build toward the possibilities ahead.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────────── 3. WE ARE PROUD OF — four stats, clean editorial row ───────────────────────────── */
function WeAreProudOf() {
  const stats = [
    ["320+", "Completed Dynamics 365 projects"],
    ["300+", "Consultants worldwide"],
    ["50+", "Active customers, 95% retention"],
    ["100 Days", "Average go-live"],
  ];
  return (
    <section className="border-y border-border bg-[var(--blue-light)]/40 py-20">
      <div className="container-enterprise">
        <Reveal>
          <Eyebrow className="text-center">We are proud of</Eyebrow>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6">
          {stats.map(([v, l], idx) => (
            <Reveal key={l} delay={idx * 90} className="text-center">
              <div className="text-4xl font-bold tracking-tight text-[var(--navy-deep)] sm:text-5xl">{v}</div>
              <div className="mt-2 text-sm font-medium leading-relaxed text-[var(--blue-gray)]">{l}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── 4. VISION & MISSION ───────────────────────────── */
function VisionMission() {
  const items = [
    {
      icon: Eye,
      tag: "Vision",
      body: "A future where businesses have the clarity, confidence, and capability to turn change into lasting progress.",
    },
    {
      icon: Target,
      tag: "Mission",
      body: "To help customers solve their most important challenges and build the capabilities for what comes next, through deep business understanding, thoughtful use of technology, and ownership of outcomes.",
    },
  ];
  return (
    <section id="vision-mission" className="scroll-mt-32 bg-white py-28">
      <div className="container-enterprise">
        <div className="overflow-hidden rounded-2xl px-6 py-20 sm:px-12 lg:px-16" style={{ background: INK }}>
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--cyan-soft)]">
              Our vision &amp; mission
            </p>
          </Reveal>
          <div className="mx-auto mt-14 grid max-w-4xl gap-6 lg:grid-cols-2">
            {items.map((it, i) => (
              <Reveal key={it.tag} delay={i * 100}>
                <div className="h-full rounded-2xl bg-white/[0.06] p-8 ring-1 ring-inset ring-white/10 lg:p-10">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 text-[var(--cyan-soft)]">
                    <it.icon className="h-5 w-5" />
                  </div>
                  <div className="mt-6 text-xs font-semibold uppercase tracking-widest text-[var(--cyan-soft)]">
                    Our {it.tag}
                  </div>
                  <p className="mt-3 text-lg leading-relaxed text-white/90">{it.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── 5. LEADERSHIP ───────────────────────────── */
type Leader = { name: string; role: string; linkedin: string; photo: string };
const LEADERS: Leader[] = [
  { name: "Waseem Uddin", role: "Chief Executive Officer", linkedin: "https://linkedin.com/in/waseem-uddin-324b26", photo: leader1 },
  { name: "Sumit Kar Mazumder", role: "Chief Growth Officer", linkedin: "https://linkedin.com/in/skmaz", photo: leader2 },
  { name: "Andrew Alpert", role: "Chief Revenue Officer", linkedin: "https://linkedin.com/in/andrew-alpert-0835393", photo: leader3 },
  { name: "Arun Gopalakrishnan", role: "Chief Operating Officer", linkedin: "https://linkedin.com/in/arun-gopalakrishnan", photo: leader4 },
  { name: "Sujoy Chakraborty", role: "Chief Customer Officer", linkedin: "https://linkedin.com/in/sujoy-chakraborty-38099912", photo: leader5 },
  { name: "Deepak Das", role: "SVP Global Sales", linkedin: "https://linkedin.com/in/deepakdas", photo: leader6 },
  { name: "Eric Miller", role: "VP Commerce", linkedin: "https://linkedin.com/in/eric-miller-665b506", photo: leader7 },
  { name: "Muhammad Umer", role: "Head of Pakistan", linkedin: "https://linkedin.com/in/umersprofile", photo: leader8 },
  { name: "Ritwick Sen Sarma", role: "Head of India", linkedin: "https://linkedin.com/in/rsensarma", photo: leader9 },
  { name: "Hassan Waheed", role: "Head of MEA", linkedin: "https://linkedin.com/in/hassanwaheed", photo: leader10 },
  { name: "Eesha Arshad", role: "Global HR Head", linkedin: "https://linkedin.com/in/eesha-arshad", photo: leader11 },
  { name: "Laura Prochaska", role: "Operations Manager", linkedin: "https://linkedin.com/in/laura-prochaska-4593342", photo: leader12 },
];

function Leadership() {
  return (
    <section id="leadership" className="scroll-mt-32 border-t border-border bg-white py-28">
      <div className="container-enterprise">
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow>Our leadership</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
              Chosen for their conviction. Committed to building together.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[var(--blue-gray)]">
              Our leaders are handpicked for their experience and their belief in what Lumovy can become.
              Knowledge can deepen, and skills can grow through coaching. What we look for from the
              beginning is the passion to build, the willingness to invest their abilities in a shared
              purpose, and the commitment to help our customers, our people, and our company move forward
              together.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {LEADERS.map((l, i) => (
            <Reveal key={l.name} delay={(i % 4) * 70}>
              <a href={l.linkedin} target="_blank" rel="noopener noreferrer" className="group block">
                <div className="relative overflow-hidden rounded-2xl bg-[var(--blue-light)]/50">
                  <img
                    src={l.photo}
                    alt={l.name}
                    loading="lazy"
                    className="aspect-square w-full object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0"
                  />
                  <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/95 opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100" style={{ color: BLUE }}>
                    <Linkedin className="h-4 w-4" />
                  </span>
                </div>
                <div className="mt-4">
                  <div className="text-base font-semibold text-[var(--navy-deep)]">{l.name}</div>
                  <div className="mt-1 text-sm text-[var(--blue-gray)]">{l.role}</div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── 6. OUR VALUES — four value cards, subtle Microsoft-style tints ───────────────────────────── */
const VALUE_TINTS = {
  blue: "bg-[var(--blue-light)] text-[var(--royal)]",
  green: "bg-[#e8f5ea] text-[#1e7b34]",
  orange: "bg-[#fdf1e6] text-[#c2650a]",
  purple: "bg-[#f1edfb] text-[#6b46c1]",
} as const;

const VALUES = [
  {
    icon: UserCheck,
    name: "Ownership",
    body: "We take responsibility for our commitments and stay connected to the outcomes we help shape.",
    tint: "blue" as const,
  },
  {
    icon: ShieldCheck,
    name: "Integrity",
    body: "We act honestly and fairly with our customers, colleagues, and partners. We give candid advice and stand by what is right, even when it means a smaller engagement or a difficult conversation.",
    tint: "green" as const,
  },
  {
    icon: Compass,
    name: "Thoughtful progress",
    body: "We combine curiosity with judgment, choosing improvements that create meaningful value for the business and its people.",
    tint: "orange" as const,
  },
  {
    icon: HeartHandshake,
    name: "Shared success",
    body: "We share knowledge and opportunity, recognising that our customers' progress and our colleagues' growth deserve our investment.",
    tint: "purple" as const,
  },
];

function Values() {
  return (
    <section id="values" className="scroll-mt-32 border-y border-border bg-[var(--blue-light)]/40 py-28">
      <div className="container-enterprise">
        <Moment label="Our values" title="What matters to us" />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <Reveal key={v.name} delay={i * 90} className="h-full">
              <div className="flex h-full flex-col rounded-xl border border-border bg-white p-7">
                <div className={"grid h-12 w-12 place-items-center rounded-xl " + VALUE_TINTS[v.tint]}>
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-[var(--navy-deep)]">{v.name}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[var(--blue-gray)]">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── 7. OUR PRINCIPLES — six numbered principles ───────────────────────────── */
const PRINCIPLE_TINTS = {
  blue: "bg-[var(--blue-light)] text-[var(--royal)]",
  green: "bg-[#e8f5ea] text-[#1e7b34]",
  orange: "bg-[#fdf1e6] text-[#c2650a]",
} as const;

const PRINCIPLES = [
  {
    icon: Compass,
    title: "Think Like Owners",
    body: "Understand the bigger picture, use sound judgment, and take responsibility for the result. Consider what each decision means for the business today and the possibilities it creates for tomorrow.",
    tint: "blue" as const,
  },
  {
    icon: Zap,
    title: "Execute With Urgency",
    body: "Focus on what matters most and act promptly. Set clear priorities, remove obstacles early, and make realistic commitments. When priorities change, agree the trade-offs openly and keep the work moving.",
    tint: "orange" as const,
  },
  {
    icon: MessageCircle,
    title: "Communicate Openly",
    body: "Raise concerns early, share context, and challenge ideas respectfully. Listen seriously and with the willingness to change your mind, so people can make informed decisions and act with confidence.",
    tint: "green" as const,
  },
  {
    icon: Bot,
    title: "Put AI to Work. Bring Human Judgment.",
    body: "Look for opportunities across our work to use AI to solve problems, improve experiences, and create new possibilities. Apply it with purpose and human judgment: check outputs, protect entrusted information, and keep people accountable for decisions and results.",
    tint: "blue" as const,
  },
  {
    icon: Globe2,
    title: "Operate as One Global Team",
    body: "Bring the right expertise together across locations, make knowledge accessible, and share credit generously. Work as One Lumovy to help our customers and one another succeed.",
    tint: "green" as const,
  },
  {
    icon: HeartHandshake,
    title: "Own the Customer Experience",
    body: "Begin with the customer's reality and stay connected through delivery and everyday use. Carry context across handovers, close gaps between teams, and make sure today's solution supports the customer's next steps.",
    tint: "orange" as const,
  },
];

function Principles() {
  return (
    <section className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <Moment label="Our principles" title="How we put our values to work" />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 90} className="h-full">
              <div className="flex h-full flex-col rounded-xl border border-border bg-white p-7">
                <div className={"grid h-12 w-12 place-items-center rounded-xl " + PRINCIPLE_TINTS[p.tint]}>
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-[var(--navy-deep)]">
                  {i + 1}. {p.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[var(--blue-gray)]">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── 8. GLOBAL PRESENCE ───────────────────────────── */
const LOCATIONS = [
  { country: "United States", address: "10260 SW Greenburg Rd, 4th floor, Portland, OR 97223", phone: "+1-971-800-2378", email: "info@lumovy.com" },
  { country: "Canada", address: "4230 Sherwoodtowne Blvd, Mississauga, ON L4Z 2G6", phone: "+1-249-503-5590", email: "info@lumovy.com" },
  { country: "Dubai", address: "532 Saaha Offices B, Souk Al Bahar, Downtown Dubai", phone: "+971-50-751-1636", email: "info@lumovy.com" },
  { country: "Pakistan", address: "1st Floor, Business HUB, DHA Phase 8, Lahore, Punjab", phone: "+92-42-3455-1557", email: "info@lumovy.com" },
  { country: "India", address: "2A Trendz Sapphire, HiTech City, Hyderabad, Telangana", phone: "+91-739-627-7655", email: "info@lumovy.com" },
];

function GlobalPresence() {
  return (
    <section id="global-presence" className="scroll-mt-32 border-t border-border bg-white pt-28">
      <div className="container-enterprise">
        <Moment
          label="Our global presence"
          title="Wherever our clients are, we're there too"
          sub="Operating across five countries and three continents, giving clients local delivery teams backed by one consistent delivery methodology."
        />
      </div>

      <div className="mt-14 border-t border-border bg-[var(--blue-light)]/40 py-20">
        <div className="container-enterprise">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {LOCATIONS.map((loc, i) => (
              <Reveal key={loc.country} delay={(i % 3) * 90}>
                <div className="h-full rounded-xl border border-border bg-white p-7">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="h-4 w-4" style={{ color: BLUE }} />
                    <h4 className="text-lg font-semibold text-[var(--navy-deep)]">{loc.country}</h4>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--blue-gray)]">{loc.address}</p>
                  <div className="mt-5 space-y-2 border-t border-border pt-4">
                    <a href={`tel:${loc.phone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-2 text-sm text-[var(--blue-gray)] transition-colors hover:text-[var(--royal)]">
                      <Phone className="h-3.5 w-3.5 shrink-0" />
                      {loc.phone}
                    </a>
                    <a href={`mailto:${loc.email}`} className="flex items-center gap-2 text-sm text-[var(--blue-gray)] transition-colors hover:text-[var(--royal)]">
                      <Mail className="h-3.5 w-3.5 shrink-0" />
                      {loc.email}
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── 9. LIFE AT LUMOVY — short teaser, links to the separate page ───────────────────────────── */
function LifeAtLumovyTeaser() {
  return (
    <section className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Life at Lumovy</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            We are building a company where people can speak honestly
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-[var(--blue-gray)]">
            We are building a company where people can speak honestly, take responsibility with
            confidence, and grow through meaningful work, with colleagues who respect their perspective
            and support their progress.
          </p>
          <a
            href="/company/people-stories"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--royal)] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[var(--navy)] hover:shadow-lg hover:shadow-[var(--royal)]/25"
          >
            Explore life at Lumovy
            <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────────── 10. CLOSING CTA (reuses homepage FinalCtaSection) ───────────────────────────── */
function AboutCTA() {
  return (
    <FinalCtaSection
      id="contact"
      title="Let's talk about what your business needs next."
      primary={{ label: "Talk to our team", href: "#contact" }}
      blueStatic
    />
  );
}
