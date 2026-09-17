import { createFileRoute } from "@tanstack/react-router";
import { Mail, ChevronRight } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Nav, Footer } from "./index";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy | Lumovy Technology Solutions" },
      {
        name: "description",
        content:
          "How Lumovy Technology Solutions collects, uses, maintains, and discloses information from users of its add-ons for Dynamics 365 Finance and Operations.",
      },
    ],
  }),
});

const LAST_UPDATED = "July 29, 2026";

type Section = { id: string; n: number; title: string; body: ReactNode };

const SECTIONS: Section[] = [
  {
    id: "overview",
    n: 1,
    title: "Overview",
    body: (
      <p>
        This Privacy Policy governs the manner in which Lumovy Technology Solutions (&ldquo;LTS,&rdquo;
        &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, maintains, and discloses
        information collected from users (&ldquo;User&rdquo; or &ldquo;Users&rdquo;) of any LTS add-on for
        Dynamics 365 Finance and Operations (the &ldquo;Add-On&rdquo;). This Privacy Policy applies to the Add-On
        and all products and services offered by LTS.
      </p>
    ),
  },
  {
    id: "information-we-collect",
    n: 2,
    title: "Information We Collect",
    body: (
      <div className="space-y-8">
        <div>
          <h3 className="text-base font-semibold text-[var(--navy-deep)]">
            2.1 Personal Identification Information
          </h3>
          <p className="mt-3">
            We may collect personal identification information from Users in a variety of ways, including but not
            limited to when Users visit our website, register on the Add-On, place an order, fill out a form,
            respond to a survey, or engage in other activities, services, features, or resources we make
            available. As appropriate, Users may be asked for their name, email address, mailing address, phone
            number, and other relevant information.
          </p>
        </div>
        <div>
          <h3 className="text-base font-semibold text-[var(--navy-deep)]">
            2.2 Non-Personal Identification Information
          </h3>
          <p className="mt-3">
            We may also collect non-personal identification information whenever Users interact with the Add-On.
            This may include the browser name, type of computer, and technical information about a User&apos;s
            means of connection to our Add-On, such as the operating system, the internet service provider used,
            and other similar information.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "how-we-use",
    n: 3,
    title: "How We Use Collected Information",
    body: (
      <>
        <p>We may collect and use Users&apos; personal information for the following purposes:</p>
        <dl className="mt-6 space-y-4">
          {[
            ["To improve customer service", "Information provided helps us respond to Users' customer service requests and support needs more efficiently."],
            ["To personalize the User experience", "We may use aggregated information to understand how our Users, as a group, use the services and resources provided on our Add-On."],
            ["To improve our Add-On(s)", "We continually strive to improve our product offerings based on the information and feedback we receive from Users."],
            ["To process transactions", "We may use the information Users provide when placing an order solely to fulfill that order. We do not share this information with outside parties except to the extent necessary to provide the service."],
            ["To send periodic emails", "We may use a User's email address to send information and updates related to their order, and to respond to inquiries, questions, or other requests. Users who opt in to our mailing list will receive emails that may include company news, updates, and related product or service information. Users may unsubscribe from future emails at any time using the unsubscribe instructions included at the bottom of each email."],
          ].map(([term, def]) => (
            <div key={term} className="flex gap-3.5">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--royal)]" />
              <div>
                <dt className="inline font-semibold text-[var(--navy-deep)]">{term}: </dt>
                <dd className="inline">{def}</dd>
              </div>
            </div>
          ))}
        </dl>
      </>
    ),
  },
  {
    id: "how-we-protect",
    n: 4,
    title: "How We Protect Your Information",
    body: (
      <p>
        We adopt appropriate data collection, storage, and processing practices, along with security measures, to
        protect against unauthorized access, alteration, disclosure, or destruction of Users&apos; personal
        information, username, password, transaction information, and data stored on our Add-On.
      </p>
    ),
  },
  {
    id: "sharing",
    n: 5,
    title: "Sharing Your Information",
    body: (
      <p>
        We do not sell, trade, or rent Users&apos; personal identification information to others. We may share
        generic, aggregated demographic information, not linked to any personal identification information,
        regarding visitors and Users with our business partners, trusted affiliates, and advertisers for the
        purposes described in this Policy.
      </p>
    ),
  },
  {
    id: "changes",
    n: 6,
    title: "Changes to This Privacy Policy",
    body: (
      <p>
        LTS may update this Privacy Policy at any time, at our discretion. When we do, we will revise the
        effective date at the bottom of this page. We encourage Users to check this page periodically for any
        changes to stay informed about how we help protect the personal information we collect. You acknowledge
        and agree that it is your responsibility to review this Privacy Policy periodically and remain aware of
        any modifications.
      </p>
    ),
  },
  {
    id: "acceptance",
    n: 7,
    title: "Your Acceptance of These Terms",
    body: (
      <p>
        By using the Add-On, you signify your acceptance of this Privacy Policy. If you do not agree to this
        policy, please do not use our Add-On. Your continued use of the Add-On following the posting of changes to
        this Policy will be deemed acceptance of those changes.
      </p>
    ),
  },
  {
    id: "contact",
    n: 8,
    title: "Contact Us",
    body: (
      <>
        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
        <a
          href="mailto:supportappsource@lumovy.com"
          className="mt-5 inline-flex items-center gap-2.5 rounded-xl border border-border bg-white px-5 py-3.5 text-sm font-semibold text-[var(--royal)] transition-colors hover:border-[var(--royal)]/30 hover:bg-[var(--blue-light)]/30"
        >
          <Mail className="h-4 w-4" />
          supportappsource@lumovy.com
        </a>
      </>
    ),
  },
];

/* Scroll-spy for the sticky table of contents */
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

function PrivacyPage() {
  const ids = SECTIONS.map((s) => s.id);
  const active = useScrollSpy(ids);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* Compact document header */}
      <header id="top" className="scroll-mt-24 border-b border-border bg-[var(--blue-light)]/30">
        <div className="container-enterprise py-16 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--royal)]">Legal</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[var(--blue-gray)]">
            How Lumovy Technology Solutions collects, uses, maintains, and discloses information from users of its
            add-ons for Dynamics 365 Finance and Operations.
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

          <div className="max-w-[68ch]">
            {SECTIONS.map((s, i) => (
              <section key={s.id} id={s.id} className={"scroll-mt-28 " + (i > 0 ? "mt-14 border-t border-border pt-14" : "")}>
                <h2 className="flex items-baseline gap-3 text-xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-2xl">
                  <span className="text-base font-semibold text-[var(--royal)]">{s.n}.</span>
                  {s.title}
                </h2>
                <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-[var(--blue-gray)]">
                  {s.body}
                </div>
              </section>
            ))}

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
