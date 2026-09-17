import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  PlayCircle,
  ClipboardCheck,
  CalendarClock,
  Paperclip,
  Upload,
  RotateCcw,
  ShieldCheck,
  Layers,
  Settings2,
  Cable,
  Rocket,
  MessageSquareQuote,
} from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Nav, Footer, FaqAccordion, FinalCtaSection } from "./index";
import implementationImg from "@/assets/services/implementation.jpg";
import consultingImg from "@/assets/services/consulting.jpg";

export const Route = createFileRoute("/what-we-do_/products-accelerators_/b2b-in-a-box")({
  component: B2BInABoxPage,
  head: () => ({
    meta: [
      { title: "B2B in a Box | Lumovy" },
      {
        name: "description",
        content:
          "Lumovy's B2B in a Box brings quote-to-order conversion, order approvals, delivery date accuracy, document handling and self-service returns into Microsoft Dynamics 365 Commerce, built for the way B2B buyers actually order.",
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

function B2BInABoxPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <B2BHero />
      <B2BTrustAnchor />
      <B2BProblem />
      <B2BCapabilities />
      <B2BIntegration />
      <B2BLaunch />
      <B2BProofKit />
      <B2BFAQ />
      <B2BClosingCTA />
      <Footer />
    </div>
  );
}

/* ─────────────────────────────  01. HERO  ───────────────────────────── */
function B2BHero() {
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
            B2B in a Box
          </span>
          <h1 className="hero-content-in mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]" style={{ animationDelay: "80ms" }}>
            Your B2B Buyers Expect Self-Service. Give Them One That Actually Works.
          </h1>
          <p className="hero-content-in mt-6 max-w-2xl text-base leading-relaxed text-white/70" style={{ animationDelay: "160ms" }}>
            Lumovy's B2B in a Box brings quote-to-order conversion, order approvals, delivery date
            accuracy, document handling and self-service returns into Microsoft Dynamics 365 Commerce,
            built for the way B2B buyers actually order.
          </p>
          <div className="hero-content-in mt-9 flex flex-wrap gap-3" style={{ animationDelay: "240ms" }}>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--navy-deep)] transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30"
            >
              <PlayCircle className="h-4 w-4" />
              See the Accelerator Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#capabilities"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              View Feature Details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  02. TRUST ANCHOR  ───────────────────────────── */
const TRUST_BADGES = [
  { icon: Layers, label: "Microsoft Dynamics 365 Commerce" },
  { icon: Cable, label: "D365 Finance & Operations Integration" },
  { icon: ShieldCheck, label: "Built for B2B Ordering" },
];

function B2BTrustAnchor() {
  return (
    <section className="bg-white py-28">
      <div className="container-enterprise">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Built on Microsoft Dynamics 365</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Built on Dynamics 365 Commerce
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[var(--blue-gray)]">
            B2B in a Box extends Dynamics 365 Commerce with the transaction workflows standard B2B
            commerce doesn't ship with out of the box: quotation, approval, delivery promising,
            document attachments and returns, all working from the same order data already in D365.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TRUST_BADGES.map((b) => (
            <div key={b.label} className="flex items-center gap-3 rounded-xl border border-border bg-white px-5 py-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[var(--blue-light)] text-[var(--royal)] ring-1 ring-inset ring-[var(--royal)]/20">
                <b.icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold leading-snug text-[var(--navy-deep)]">{b.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href="#capabilities" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--royal)]">
            View Feature Details
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  03. THE PROBLEM IT SOLVES  ───────────────────────────── */
const PROBLEM_GAPS = [
  {
    icon: MessageSquareQuote,
    title: "Turn quote requests into orders without leaving the platform",
    body: "Customers submit a request for quote directly from the product page, with comments and requested ship dates tracked automatically into D365.",
  },
  {
    icon: ClipboardCheck,
    title: "Route orders through approval before they're confirmed",
    body: "Enforce internal sign-off on checkout, so every order is reviewed and approved before it moves to fulfilment.",
  },
  {
    icon: CalendarClock,
    title: "Show buyers a delivery date they can trust",
    body: "Calculate available-to-promise dates on the product page and at checkout, based on real inventory and lead times, not a guess.",
  },
  {
    icon: Paperclip,
    title: "Handle the paperwork B2B orders actually need",
    body: "Let customers attach purchase orders, tax certificates and compliance documents directly at checkout, instead of over email.",
  },
  {
    icon: RotateCcw,
    title: "Let customers manage returns themselves",
    body: "Enable return requests from order history, referenced against the original purchase, without a helpline call or a store visit.",
  },
];

function B2BProblem() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-[var(--blue-light)]/40 py-28">
      <div aria-hidden className="mesh-blobs-light opacity-60" />
      <div className="container-enterprise relative">
        <div className="max-w-2xl">
          <p className="eyebrow">The problem it solves</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Standard B2B Commerce Wasn't Built for How B2B Buyers Actually Order
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-[var(--blue-gray)]">
            B2B buyers don't check out like consumers. They request quotes, need approval chains before
            a purchase goes through, expect accurate delivery dates before they commit, have to attach
            purchase orders and compliance documents, and need to return goods without picking up the
            phone. Dynamics 365 Commerce doesn't support these workflows out of the box. B2B in a Box
            closes that gap.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {PROBLEM_GAPS.map((g, i) => (
            <Reveal key={g.title} delay={i * 60}>
              <div className="card-lift group relative h-full overflow-hidden rounded-xl border border-border bg-white p-7">
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-[var(--royal)] transition-transform duration-500 group-hover:scale-x-100" />
                <h3 className="text-lg font-semibold text-[var(--navy-deep)]">{g.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--blue-gray)]">{g.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  04. CORE CAPABILITIES (image + list)  ───────────────────────────── */
const CAPABILITIES = [
  {
    icon: MessageSquareQuote,
    name: "Quote-to-Order Conversion",
    body: "Customers build a quote from product pages, submit it with comments and a requested ship date, and D365 automatically creates the quotation, with sales teams able to track replies and respond, the same way vendor RFQs are already managed in HQ.",
  },
  {
    icon: ClipboardCheck,
    name: "Order Approval Workflows",
    body: 'Replace "Place Order" with "Submit for Approval" when the feature is enabled. Approvers review, comment on and approve or reject orders from a dedicated approvals page, with full history tracked for every user.',
  },
  {
    icon: CalendarClock,
    name: "Available-to-Promise & Delivery Date Accuracy",
    body: "Customers see an estimated delivery date on the product page and in the cart, calculated from the same ATP logic already used in D365 HQ. An availability forecast shows future stock as a graph, viewable by day, week or month.",
  },
  {
    icon: Paperclip,
    name: "Checkout Document Attachments",
    body: "Customers upload purchase orders, tax exemption certificates or technical specifications directly at checkout, in PDF, Word, Excel or image formats. Every attachment flows through to the sales order in D365 for the team to review.",
  },
  {
    icon: Upload,
    name: "Bulk Ordering via CSV Upload",
    body: "Customers download a category's product list as a CSV, then re-upload a completed order file to add multiple items in one action, instead of adding products one at a time.",
  },
  {
    icon: RotateCcw,
    name: "Self-Service Returns",
    body: "Customers initiate a return from their order history, select the invoiced lines and quantities, choose a reason, and submit. D365 creates the return order and RMA automatically, no manual data entry required.",
  },
];

function B2BCapabilities() {
  return (
    <section id="capabilities" className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <div className="max-w-2xl">
          <p className="eyebrow">Core capabilities</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Everything a B2B Buyer Expects, Built into Commerce
          </h2>
        </div>
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={implementationImg}
              alt="B2B commerce implementation team working through order workflows"
              loading="lazy"
              className="h-full max-h-[560px] w-full object-cover"
            />
          </div>
          <ul className="space-y-5">
            {CAPABILITIES.map((c, i) => (
              <Reveal key={c.name} delay={i * 70}>
                <li className="flex gap-4 rounded-xl border border-border bg-white p-5 card-lift">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[var(--blue-light)] text-[var(--royal)] ring-1 ring-inset ring-[var(--royal)]/20">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-[15px] font-semibold text-[var(--navy-deep)]">{c.name}</h3>
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
  {
    label: "Buyer Actions",
    items: "Request Quote · Submit for Approval · Check Delivery Date · Attach Documents · Upload Bulk Order · Initiate Return",
    accent: false,
  },
  {
    label: "B2B in a Box",
    items: "Quote-to-Order · Approval Routing · ATP Calculation · Document Handling · Return Initiation",
    accent: true,
  },
  {
    label: "Microsoft Dynamics 365 Commerce & Finance and Operations",
    items: "Quotations · Sales Orders · Approvals · Inventory · Attachments · Return Orders",
    accent: false,
  },
  {
    label: "Sales & Fulfilment Teams",
    items: "Review quotes, approve orders, process attachments, action returns, all from the same D365 environment",
    accent: false,
  },
];

function B2BIntegration() {
  return (
    <section className="hero-dark relative overflow-hidden py-28 text-white">
      <div aria-hidden className="hero-orbs opacity-50" />
      <div aria-hidden className="hero-grid" />
      <div className="container-enterprise relative z-10">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--cyan-soft)]">
            <Cable className="h-3.5 w-3.5" /> How it integrates
          </span>
          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            One Order. Every Step, Connected to D365.
          </h2>
        </div>
        <div className="mx-auto mt-14 flex max-w-2xl flex-col gap-3">
          {INTEGRATION_LAYERS.map((l, i) => (
            <div key={l.label}>
              <div
                className={
                  "rounded-xl px-6 py-5 " +
                  (l.accent
                    ? "bg-[var(--royal)] ring-1 ring-[var(--cyan-soft)]/40"
                    : "border border-white/12 bg-white/[0.04]")
                }
              >
                <div className="text-sm font-semibold text-white">{l.label}</div>
                <div className="mt-1.5 text-xs leading-relaxed text-white/60">{l.items}</div>
              </div>
              {i < INTEGRATION_LAYERS.length - 1 && (
                <div className="flex justify-center py-2">
                  <ArrowRight className="h-4 w-4 rotate-90 text-[var(--cyan-soft)]/60" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  06. TIME TO LAUNCH  ───────────────────────────── */
const LAUNCH_STEPS = [
  { icon: Rocket, title: "Enable", body: "Turn on the features relevant to how your business sells, quoting, approvals, ATP, attachments or returns, independently or together." },
  { icon: Settings2, title: "Configure", body: "Set approval routing rules, file type and size limits, and ATP parameters to match your business." },
  { icon: Cable, title: "Connect", body: "Every workflow writes back into standard D365 objects, quotations, sales orders, attachments, so nothing sits outside your core system." },
  { icon: Layers, title: "Extend", body: "Add capabilities as your B2B commerce needs grow, without re-platforming." },
];

function B2BLaunch() {
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
            Turn On the Workflows Your B2B Buyers Are Already Asking For
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-[var(--blue-gray)]">
            B2B in a Box doesn't require replacing your commerce platform, it extends the Dynamics 365
            Commerce you already have with the transaction logic B2B buying actually needs.
          </p>
        </div>
        <div className="relative mt-16">
          <div aria-hidden className="absolute left-0 right-0 top-7 hidden h-0.5 bg-[var(--blue-light)] lg:block" />
          <div aria-hidden className="absolute left-0 top-7 hidden h-0.5 bg-gradient-to-r from-[var(--royal)] via-[var(--azure)] to-[var(--cyan-soft)] lg:block" style={{ width: `${progress * 100}%`, transition: "width 0.1s linear" }} />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
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

function B2BProofKit() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[var(--blue-light)]/40 py-28">
      <div aria-hidden className="mesh-blobs-light opacity-60" />
      <div className="container-enterprise relative">
        <div className="max-w-2xl">
          <p className="eyebrow">Proof kit</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            See What Changes When B2B Ordering Works the Way B2B Buyers Expect
          </h2>
        </div>
        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[1.35fr_1fr]">
          <div className="flex min-h-[440px] flex-col justify-between rounded-xl border border-border bg-white p-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--royal)]">
                The Challenge
              </span>
              <p className="mt-3 text-sm leading-relaxed text-[var(--blue-gray)]">
                B2B buyers need to quote, get approval, confirm delivery dates, attach documentation and
                return goods, none of which standard D365 Commerce checkout supports.
              </p>
              <span className="mt-6 block text-xs font-semibold uppercase tracking-widest text-[var(--royal)]">
                The Lumovy Approach
              </span>
              <p className="mt-3 text-sm leading-relaxed text-[var(--blue-gray)]">
                B2B in a Box adds quote-to-order conversion, approval workflows, ATP-based delivery
                accuracy, checkout attachments and self-service returns directly into Dynamics 365
                Commerce.
              </p>
            </div>
            <div>
              <div className="grid grid-cols-3 gap-3 border-t border-border pt-6">
                {[
                  ["Faster", "quote turnaround"],
                  ["Fewer", "unauthorized orders"],
                  ["Lower", "service load"],
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
                Talk to us about your B2B rollout
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          {/* Photo + colorless glass-blur scrim */}
          <figure className="relative overflow-hidden rounded-xl">
            <img src={consultingImg} alt="B2B commerce team reviewing order workflows" className="absolute inset-0 h-full w-full object-cover" />
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/45 to-transparent" />
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 backdrop-blur-[3px] [mask-image:linear-gradient(to_top,black_35%,transparent)]" />
            <figcaption className="relative z-10 flex h-full min-h-[440px] flex-col justify-end p-8">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur">
                <ShieldCheck className="h-3.5 w-3.5" />
                Built for how B2B buyers order
              </span>
              <div className="mt-4 text-3xl font-bold tracking-tight text-white">Connected</div>
              <div className="mt-1 text-sm text-white/80">Quoting, approvals, delivery and returns, one ordering flow</div>
            </figcaption>
          </figure>
        </div>

        {/* Business value strip */}
        <div className="mt-6 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
          {[
            ["Quote to order", "Automated conversion with replies tracked in one place"],
            ["Approval routing", "Every order reviewed before it reaches fulfilment"],
            ["Self-service returns", "Customers submit and track returns without a call"],
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
    q: "What is B2B in a Box?",
    a: "B2B in a Box is a Lumovy accelerator that adds the transaction workflows B2B buyers expect, quoting, approvals, delivery accuracy, document attachments and returns, into Microsoft Dynamics 365 Commerce.",
  },
  {
    q: "Can these features be turned on individually?",
    a: "Yes. Quote-to-order, approvals, ATP, attachments, bulk upload and returns are each independent features and can be enabled based on what your business needs.",
  },
  {
    q: "Does it require a new commerce platform?",
    a: "No. B2B in a Box extends the Dynamics 365 Commerce platform you're already using, it doesn't replace it.",
  },
  {
    q: "How does the approval workflow work?",
    a: 'When enabled, checkout replaces "Place Order" with "Submit for Approval." Approvers review orders on a dedicated page and can approve or reject with comments, and users can track approval history.',
  },
  {
    q: "How accurate is the delivery date shown to customers?",
    a: "Delivery dates use the same available-to-promise logic already configured in D365 HQ, so what a customer sees on the product page reflects real inventory and lead times.",
  },
  {
    q: "What file types can customers attach at checkout?",
    a: "PDF, Word, Excel and common image formats, with file size limits configurable to your business requirements.",
  },
  {
    q: "What does Lumovy bring to the implementation?",
    a: "Lumovy brings the Dynamics 365 Commerce and Finance & Operations integration expertise needed to configure these workflows around your existing environment and approval structure.",
  },
];

function B2BFAQ() {
  return (
    <section className="border-b border-border bg-white py-28">
      <div className="container-enterprise">
        <FaqAccordion
          title="Frequently asked questions"
          intro="Feature scope, approval workflows, delivery accuracy and implementation: the questions B2B commerce leaders ask."
          items={FAQS.map((f) => [f.q, f.a] as [string, string])}
        />
      </div>
    </section>
  );
}

/* ─────────────────────────────  09. FINAL CTA  ───────────────────────────── */
function B2BClosingCTA() {
  return (
    <FinalCtaSection
      id="contact"
      title="Your Buyers Already Order Like This Everywhere Else."
      subtitle="Give them a Dynamics 365 Commerce experience built for how B2B actually buys, quoting, approvals, accurate delivery dates, easy documentation and self-service returns."
      microcopy="Connect with our experts and receive tailored recommendations within one business day."
      primary={{ label: "See the Accelerator Demo", href: "#contact", icon: true }}
      secondary={{ label: "View Feature Details", href: "#capabilities" }}
    />
  );
}
