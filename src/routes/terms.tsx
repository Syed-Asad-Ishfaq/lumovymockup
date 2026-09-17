import { createFileRoute } from "@tanstack/react-router";
import { Mail, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Nav, Footer } from "./index";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Terms and Conditions | Lumovy Technology Solutions" },
      {
        name: "description",
        content:
          "The Terms and Conditions governing your access to and use of Lumovy Technology Solutions add-ons, including Hospitality, Advanced Inventory Allocation, RFID Connector, and the LeapWork accelerator.",
      },
    ],
  }),
});

const LAST_UPDATED = "July 29, 2026";

/* ── Section model ─────────────────────────────────────────────── */
type Section = { id: string; n: number; title: string; body: ReactNode };

const SECTIONS: Section[] = [
  {
    id: "acceptance",
    n: 1,
    title: "Introduction and Acceptance of Terms",
    body: (
      <>
        <p>
          Welcome to Lumovy Technology Solutions (&ldquo;LTS,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;our&rdquo;). These Terms and Conditions (&ldquo;Terms&rdquo;) constitute a legally binding
          agreement between you (&ldquo;You&rdquo; or &ldquo;User&rdquo;) and LTS governing your access to and
          use of the add-ons described below (the &ldquo;Add-On&rdquo;).
        </p>
        <p>
          By accessing or using the Add-On, you agree to be bound by these Terms. If you do not agree to these
          Terms, you may not access or use the Add-On.
        </p>
      </>
    ),
  },
  {
    id: "services",
    n: 2,
    title: "Description of Services",
    body: (
      <>
        <p>LTS offers the following Add-Ons:</p>
        <dl className="mt-6 space-y-5">
          {[
            ["Hospitality", "An end-to-end solution for the enterprise hospitality, restaurant, hotel, and discrete manufacturing industries, built on the Dynamics 365 ecosystem."],
            ["Advanced Inventory Allocation", "A solution that helps organizations optimize inventory management by creating and managing allocations within Microsoft Dynamics 365 for Finance and Operations (D365 F&O). It leverages Microsoft's Inventory Visibility service to ringfence inventory and ensure stock is reserved for specific customers."],
            ["RFID Connector", "A tool used in warehouses to streamline and automate the inventory counting process. RFID data is integrated with D365 F&O, enabling seamless updates and improved inventory management by automating inventory counting to enhance efficiency, accuracy, and warehouse productivity."],
            ["LeapWork Automated Regression Testing Accelerator", "Leapwork is an AI powered, codeless, hyper-visual automation platform that helps businesses lower the total cost of quality across their tech stacks. LTS specializes in setting up continuous testing frameworks using Leapwork as a turnkey solution, enabling end-to-end automated testing of cloud ERPs such as Microsoft Dynamics 365, SAP, Salesforce, and other market-leading SaaS platforms."],
          ].map(([term, def]) => (
            <div key={term} className="rounded-xl border border-border bg-[var(--blue-light)]/30 p-5">
              <dt className="font-semibold text-[var(--navy-deep)]">{term}</dt>
              <dd className="mt-1.5 text-[var(--blue-gray)]">{def}</dd>
            </div>
          ))}
        </dl>
      </>
    ),
  },
  {
    id: "accounts",
    n: 3,
    title: "User Accounts",
    body: (
      <>
        <p>You may need to create an account to use the Add-On. You are responsible for:</p>
        <ul className="ml-1 mt-4 list-none space-y-2.5">
          {["Maintaining the confidentiality of your account credentials; and", "All activities that occur under your account."].map((li) => (
            <li key={li} className="flex gap-3">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--royal)]" />
              <span>{li}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          You agree to notify LTS immediately of any unauthorized use of your account or any other breach of
          security.
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    n: 4,
    title: "Acceptable Use",
    body: (
      <p>
        You agree to use the Add-On only for lawful purposes and in accordance with these Terms. You may not use
        the Add-On in any manner that could damage, disable, overburden, or impair the service, or interfere with
        any other party&apos;s use and enjoyment of the Add-On.
      </p>
    ),
  },
  {
    id: "intellectual-property",
    n: 5,
    title: "Intellectual Property",
    body: (
      <p>
        The Add-On, along with its original content, features, and functionality, is owned by LTS and is
        protected by intellectual property and proprietary rights laws.
      </p>
    ),
  },
  {
    id: "fees",
    n: 6,
    title: "Fees and Payment",
    body: (
      <p>
        Use of the Add-On may be subject to fees. By using the Add-On, you agree to pay all applicable fees as
        described on our website or in other documentation provided to you.
      </p>
    ),
  },
  {
    id: "privacy",
    n: 7,
    title: "Privacy",
    body: (
      <p>
        Your use of the Add-On is also governed by our Privacy Policy, which explains how we collect, use, and
        disclose your information. By using the Add-On, you consent to the terms of our Privacy Policy.
      </p>
    ),
  },
  {
    id: "liability",
    n: 8,
    title: "Limitation of Liability",
    body: (
      <>
        <p>
          To the fullest extent permitted by law, LTS, along with its directors, employees, partners, agents,
          suppliers, and affiliates, shall not be liable for any indirect, incidental, special, consequential, or
          punitive damages including, without limitation, loss of profits, data, use, goodwill, or other
          intangible losses, resulting from:
        </p>
        <ul className="ml-1 mt-4 list-none space-y-2.5">
          {[
            "Your access to, use of, or inability to access or use the Add-On;",
            "Any conduct or content of any third party on the Add-On;",
            "Any content obtained from the Add-On; or",
            "Unauthorized access, use, or alteration of your transmissions or content.",
          ].map((li) => (
            <li key={li} className="flex gap-3">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--royal)]" />
              <span>{li}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          This limitation applies whether the claim is based on warranty, contract, tort (including negligence),
          or any other legal theory, whether or not we have been informed of the possibility of such damage, and
          even if a remedy set forth herein is found to have failed of its essential purpose.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    n: 9,
    title: "Changes to These Terms",
    body: (
      <p>
        LTS reserves the right to modify or revise these Terms at any time. Any changes will take effect
        immediately upon posting the revised Terms on the LTS website or through other means of notification. Your
        continued use of the Add-On constitutes acceptance of the revised Terms.
      </p>
    ),
  },
  {
    id: "governing-law",
    n: 10,
    title: "Governing Law",
    body: (
      <p>
        These Terms shall be governed by and construed in accordance with the laws of Portland, Oregon, without
        regard to its conflict of law provisions.
      </p>
    ),
  },
  {
    id: "contact",
    n: 11,
    title: "Contact Us",
    body: (
      <>
        <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
        <a
          href="mailto:supportappsource@lumovy.com"
          className="mt-5 inline-flex items-center gap-2.5 rounded-xl border border-border bg-white px-5 py-3.5 text-sm font-semibold text-[var(--royal)] transition-colors hover:border-[var(--royal)]/30 hover:bg-[var(--blue-light)]/30"
        >
          <Mail className="h-4 w-4" />
          supportappsource@lumovy.com
        </a>
        <p className="mt-6 text-[var(--blue-gray)]">
          By using the Add-On, you acknowledge that you have read, understood, and agree to be bound by these
          Terms and Conditions.
        </p>
      </>
    ),
  },
];

/* ── Scroll-spy for the sticky table of contents ─────────────────── */
function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

function TermsPage() {
  const ids = SECTIONS.map((s) => s.id);
  const active = useScrollSpy(ids);
  const contentRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* Compact document header */}
      <header id="top" className="scroll-mt-24 border-b border-border bg-[var(--blue-light)]/30">
        <div className="container-enterprise py-16 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--royal)]">Legal</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Terms and Conditions
          </h1>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[var(--blue-gray)]">
            These Terms govern your access to and use of the Lumovy Technology Solutions add-ons. Please read them
            carefully.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[var(--blue-gray)]">
            <span>
              <span className="font-medium text-[var(--navy-deep)]">Entity:</span> Lumovy Technology Solutions
            </span>
            <span>
              <span className="font-medium text-[var(--navy-deep)]">Last updated:</span> {LAST_UPDATED}
            </span>
          </div>
        </div>
      </header>

      {/* Body: sticky TOC + readable content */}
      <div className="container-enterprise py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[240px_1fr] lg:gap-16">
          {/* Table of contents */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--blue-gray)]">
              On this page
            </p>
            <nav className="mt-4 space-y-0.5">
              {SECTIONS.map((s) => {
                const isActive = active === s.id;
                return (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className={
                      "group flex items-start gap-2 rounded-lg px-3 py-2 text-sm transition-colors " +
                      (isActive
                        ? "bg-[var(--blue-light)]/60 font-semibold text-[var(--royal)]"
                        : "text-[var(--blue-gray)] hover:bg-[var(--blue-light)]/40 hover:text-[var(--navy-deep)]")
                    }
                  >
                    <span className="mt-px text-[11px] tabular-nums text-[var(--gray-neutral)]">{s.n}</span>
                    <span className="leading-snug">{s.title}</span>
                  </a>
                );
              })}
            </nav>
          </aside>

          {/* Content */}
          <div ref={contentRef} className="max-w-[68ch]">
            {SECTIONS.map((s, i) => (
              <section key={s.id} id={s.id} className={"scroll-mt-28 " + (i > 0 ? "mt-14 border-t border-border pt-14" : "")}>
                <h2 className="flex items-baseline gap-3 text-xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-2xl">
                  <span className="text-base font-semibold text-[var(--royal)]">{s.n}.</span>
                  {s.title}
                </h2>
                <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-[var(--blue-gray)] [&_p]:leading-relaxed">
                  {s.body}
                </div>
              </section>
            ))}

            {/* Back-to-top */}
            <div className="mt-16 border-t border-border pt-8">
              <a href="#top" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--royal)]">
                Back to top
                <ChevronRight className="h-4 w-4 -rotate-90" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
