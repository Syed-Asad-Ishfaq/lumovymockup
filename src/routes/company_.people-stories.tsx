import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, TrendingUp, ShieldCheck, Globe2, Briefcase } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Nav, Footer } from "./index";
import lifeHeroImg from "@/assets/life at lumovy - hero.jpg";
import whoWeAreImg from "@/assets/about/who-we-are.jpg";
import ctaImg from "@/assets/about/cta.jpg";
import culture1Img from "@/assets/about/culture-1.jpg";
import culture2Img from "@/assets/about/culture-2.jpg";
import culture3Img from "@/assets/about/culture-3.jpg";
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

export const Route = createFileRoute("/company_/people-stories")({
  component: LifeAtLumovyPage,
  head: () => ({
    meta: [
      { title: "Life at Lumovy | A Company of Owners" },
      {
        name: "description",
        content:
          "We are building a company where people can speak honestly, take responsibility with confidence, and grow through meaningful work.",
      },
    ],
  }),
});

/* Scroll-reveal — identical to the homepage's and About page's. */
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

function LifeAtLumovyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <LifeHero />
      <CompanyOfOwners />
      <TeamGallery />
      <OurCulture />
      <OpenRolesCTA />
      <AboutReturnLink />
      <Footer />
    </div>
  );
}

/* ───────────────────────────── 1. HERO — team photo, same static blue treatment as the homepage & About ───────────────────────────── */
function LifeHero() {
  return (
    <section className="relative overflow-hidden">
      <Reveal>
        <figure className="relative">
          <img
            src={lifeHeroImg}
            alt="The Lumovy team"
            loading="eager"
            className="aspect-[21/9] w-full object-cover object-top sm:aspect-[3/1]"
          />
          <div aria-hidden className="absolute inset-0 bg-black/35" />
        </figure>
      </Reveal>
    </section>
  );
}

/* ───────────────────────────── 2. A COMPANY OF OWNERS — hero copy moved here, as the first section after the hero ───────────────────────────── */
function CompanyOfOwners() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container-enterprise">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Life at Lumovy</Eyebrow>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-tight text-[var(--navy-deep)] sm:text-5xl">
            A company of owners.
          </h1>
          <div className="mx-auto mt-6 space-y-4 text-base leading-relaxed text-[var(--blue-gray)]">
            <p>
              We want every person at Lumovy to feel invested in what we are building and trusted to help
              shape it. Working like owners means understanding the bigger picture, using sound judgment,
              and caring about what happens after our part of the work is done.
            </p>
            <p>
              We follow through, bring the right people together, and help resolve problems across team
              boundaries. We ask for support when we need it and take responsibility for the commitments
              we make.
            </p>
            <p>
              Our leaders make that ownership possible through clear priorities, room to make decisions,
              and support to learn and grow.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────────── 3. TEAM GALLERY — animated marquee, mixed small/large photos, opposing directions ───────────────────────────── */
const GALLERY_ROW_1 = [
  { src: leader1, size: "lg" as const },
  { src: leader2, size: "sm" as const },
  { src: culture2Img, size: "lg" as const },
  { src: leader3, size: "sm" as const },
  { src: leader4, size: "lg" as const },
  { src: culture3Img, size: "sm" as const },
  { src: leader5, size: "lg" as const },
  { src: leader6, size: "sm" as const },
];

const GALLERY_ROW_2 = [
  { src: culture1Img, size: "sm" as const },
  { src: leader7, size: "lg" as const },
  { src: leader8, size: "sm" as const },
  { src: whoWeAreImg, size: "lg" as const },
  { src: leader9, size: "sm" as const },
  { src: leader10, size: "lg" as const },
  { src: leader11, size: "sm" as const },
  { src: leader12, size: "lg" as const },
];

function GalleryRow({ items, reverse }: { items: typeof GALLERY_ROW_1; reverse?: boolean }) {
  const track = [...items, ...items];
  return (
    <div className="group overflow-hidden">
      <div
        className={
          "marquee-track flex w-max items-center gap-4 group-hover:[animation-play-state:paused] " +
          (reverse ? "[animation-direction:reverse]" : "")
        }
        style={{ animationDuration: "38s" }}
      >
        {track.map((item, i) => (
          <div
            key={i}
            className={
              "shrink-0 overflow-hidden rounded-xl bg-[var(--blue-light)]/50 " +
              (item.size === "lg" ? "h-52 w-64" : "h-36 w-44")
            }
          >
            <img src={item.src} alt="" aria-hidden loading="lazy" className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

function TeamGallery() {
  return (
    <section className="border-t border-border bg-white py-20">
      <div className="space-y-4">
        <GalleryRow items={GALLERY_ROW_1} />
        <GalleryRow items={GALLERY_ROW_2} reverse />
      </div>
    </section>
  );
}

/* ───────────────────────────── 3. OUR CULTURE — five topics, in the supplied order ───────────────────────────── */
const CULTURE = [
  {
    image: culture2Img,
    title: "Open conversations. Mutual trust.",
    body: [
      "We want people to ask difficult questions, offer a different view, and seek help early. We share the context behind decisions and address concerns respectfully. Leaders have a responsibility to listen and respond constructively, so speaking openly leads to understanding and action.",
      "We are committed to diversity and inclusion. Our people bring different backgrounds, cultures, and perspectives, and we want those differences to shape our work. We make room for every voice and build a Lumovy where everyone belongs and has the opportunity to contribute and grow.",
    ],
    icon: MessageCircle,
  },
  {
    image: culture3Img,
    title: "Invested in growth.",
    body: [
      "Growth takes opportunity, feedback, and support. We help one another develop through shared expertise, thoughtful guidance, and new challenges. As our people build their capabilities, we want them to gain the confidence to take on greater responsibility and shape what comes next.",
    ],
    icon: TrendingUp,
  },
  {
    image: whoWeAreImg,
    title: "High standards. Care for people.",
    body: [
      "We believe high standards depend on clear expectations and realistic commitments. We plan thoughtfully, discuss capacity honestly, and respect time off and responsibilities beyond work. Taking ownership includes asking for support, and making it possible for others to do the same.",
    ],
    icon: ShieldCheck,
  },
  {
    image: culture1Img,
    title: "One Lumovy, across locations.",
    body: [
      "Our teams bring different experiences to shared challenges. Working as One Lumovy means making knowledge accessible, involving colleagues across boundaries, and taking the time to understand one another.",
      "It is built in everyday moments: a colleague explaining something new, a team making space for a different perspective, or someone stepping forward to help solve a problem. Those moments shape the company we become.",
    ],
    icon: Globe2,
  },
];

function OurCulture() {
  return (
    <section className="border-t border-border bg-white py-20 lg:py-28">
      <div className="container-enterprise">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Our culture</Eyebrow>
        </Reveal>
        <div className="mt-16 space-y-24 lg:space-y-32">
          {CULTURE.map((c, i) => {
            const flip = i % 2 === 1;
            return (
              <div key={c.title} className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                <Reveal className={flip ? "lg:order-2" : ""}>
                  <div className="overflow-hidden rounded-[1.75rem]">
                    <img src={c.image} alt={c.title} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                  </div>
                </Reveal>
                <Reveal delay={100} className={flip ? "lg:order-1" : ""}>
                  <div className="max-w-md">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[var(--blue-light)] text-[var(--royal)] ring-1 ring-inset ring-[var(--royal)]/20">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-3xl">
                      {c.title}
                    </h3>
                    <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-[var(--blue-gray)]">
                      {c.body.map((p, pi) => (
                        <p key={pi}>{p}</p>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── 4. OPEN ROLES CTA ───────────────────────────── */
function OpenRolesCTA() {
  return (
    <section className="border-t border-border bg-[var(--blue-light)]/40 py-20">
      <div className="container-enterprise">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center rounded-2xl border border-border bg-white p-10 text-center shadow-fluent-md sm:p-14">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[var(--blue-light)] text-[var(--royal)]">
            <Briefcase className="h-7 w-7" />
          </div>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Build your next chapter with Lumovy.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-[var(--blue-gray)]">
            Bring your experience, and your willingness to learn. Explore opportunities to contribute to
            meaningful customer work and grow alongside people who care about doing it well.
          </p>
          <a
            href="/company/careers"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--royal)] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[var(--navy)] hover:shadow-lg hover:shadow-[var(--royal)]/25"
          >
            View open roles
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────────── 5. ABOUT US RETURN LINK ───────────────────────────── */
function AboutReturnLink() {
  return (
    <section className="border-t border-border bg-white py-20">
      <div className="container-enterprise">
        <Reveal>
          <div className="group flex flex-col items-center gap-6 rounded-2xl border border-border bg-[var(--blue-light)]/40 p-10 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="flex items-center gap-5">
              <img src={ctaImg} alt="" aria-hidden className="hidden h-16 w-16 rounded-xl object-cover sm:block" />
              <div>
                <h3 className="text-xl font-semibold text-[var(--navy-deep)]">
                  Get to know the company behind the culture.
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--blue-gray)]">
                  Discover why Lumovy began and the people helping shape its future.
                </p>
              </div>
            </div>
            <a
              href="/about"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[var(--royal)] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[var(--navy)] hover:shadow-lg hover:shadow-[var(--royal)]/25"
            >
              About Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
