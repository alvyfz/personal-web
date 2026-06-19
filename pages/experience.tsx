import { ReactElement } from "react";
import PageHead from "@/components/PageHead";
import SectionHeader from "@/components/SectionHeader";
import SiteLayout from "@/components/SiteLayout";
import { experienceItems, impactItems } from "@/data/siteContent";

export default function ExperiencePage(): ReactElement {
  return (
    <>
      <PageHead
        title="Experience"
        description="Professional experience across enterprise, consulting, and consumer-facing teams, showing a software engineer profile with strong frontend specialization."
        path="/experience"
      />
      <SiteLayout currentPath="/experience">
        <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <SectionHeader
            eyebrow="Experience"
            title="Professional experience across enterprise, consulting, and product environments."
            description="This page presents your professional background more clearly by showing the roles, team context, and delivery responsibilities that support your positioning as a software engineer with strong frontend expertise."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {impactItems.map((item) => {
              const surfaceClass =
                item.surface === "coral"
                  ? "bg-brand-coral text-white"
                  : item.surface === "cream"
                    ? "bg-brand-cream text-brand-ink"
                    : "bg-brand-ink text-white";

              return (
                <article key={item.title} className={`rounded-3xl p-8 ${surfaceClass}`}>
                  <h2 className="font-primary text-2xl font-medium">{item.title}</h2>
                  <p
                    className={`mt-4 text-sm leading-7 ${
                      item.surface === "cream" ? "text-brand-body" : "text-white/85"
                    }`}
                  >
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="bg-brand-surfaceSoft px-5 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto w-full max-w-7xl">
            <div className="grid gap-6">
              {experienceItems.map((item, index) => (
                <article
                  key={`${item.company}-${item.role}`}
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  className="rounded-3xl bg-brand-canvas p-8 shadow-soft"
                >
                  <div className="grid gap-6 lg:grid-cols-[0.28fr_0.72fr]">
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-brand-muted">
                        {item.period}
                      </p>
                    </div>
                    <div>
                      <h2 className="font-primary text-3xl font-medium text-brand-ink">
                        {item.role}
                      </h2>
                      <p className="mt-2 text-sm font-medium text-brand-coral">
                        {item.company}
                      </p>
                      <p className="mt-4 text-base leading-8 text-brand-body">
                        {item.summary}
                      </p>
                      <ul className="mt-6 grid gap-3">
                        {item.points.map((point) => (
                          <li key={point} className="flex gap-3 text-sm leading-7 text-brand-body">
                            <span className="mt-3 h-2 w-2 rounded-full bg-brand-ink" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
