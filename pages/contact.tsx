import { ReactElement } from "react";
import { Icon } from "@iconify/react";
import PageHead from "@/components/PageHead";
import SectionHeader from "@/components/SectionHeader";
import SiteLayout from "@/components/SiteLayout";
import { contactMethods, serviceList } from "@/data/siteContent";

export default function ContactPage(): ReactElement {
  return (
    <>
      <PageHead
        title="Contact"
        description="Contact M. Alvy Eka Fauzi for frontend engineering, product implementation, and collaboration opportunities."
        path="/contact"
      />
      <SiteLayout currentPath="/contact">
        <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <SectionHeader
            eyebrow="Contact"
            title="Open for conversations around frontend engineering and product delivery."
            description="This contact page keeps the call to action clear: who should reach out, what kinds of work fit best, and where to connect quickly."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl bg-brand-ink p-8 text-white">
              <p className="text-xs uppercase tracking-[0.25em] text-white/65">
                Best fit
              </p>
              <h2 className="mt-3 font-primary text-3xl font-medium">
                The kinds of collaboration I am best suited for
              </h2>
              <ul className="mt-6 grid gap-4">
                {serviceList.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-white/85">
                    <Icon icon="mdi:check-circle-outline" fontSize={18} className="mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-4">
              {contactMethods.map((method, index) => (
                <a
                  key={method.label}
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    method.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="rounded-3xl border border-brand-hairline bg-brand-canvas p-6 shadow-soft"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-brand-muted">
                    {method.label}
                  </p>
                  <p className="mt-3 font-primary text-2xl font-medium text-brand-ink">
                    {method.value}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-brand-body">
                    Reach out through this channel for introductions, project
                    discussions, or hiring conversations.
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
