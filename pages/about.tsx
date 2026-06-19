import { ReactElement } from "react";
import { Icon } from "@iconify/react";
import PageHead from "@/components/PageHead";
import SectionHeader from "@/components/SectionHeader";
import SiteLayout from "@/components/SiteLayout";
import { aboutSummary, expertiseGroups, heroContent, siteMeta } from "@/data/siteContent";

export default function AboutPage(): ReactElement {
  return (
    <>
      <PageHead
        title="About"
        description="Learn more about M. Alvy Eka Fauzi, a software engineer with strong frontend expertise and working knowledge across backend delivery."
        path="/about"
      />
      <SiteLayout currentPath="/about">
        <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-brand-muted">
                About Me
              </p>
              <h1 className="mt-4 font-primary text-5xl font-medium leading-[1.08] text-brand-ink sm:text-6xl">
                A software engineer who can work end-to-end, with strongest
                depth in frontend quality and product execution.
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-brand-body">
                {heroContent.intro}
              </p>
            </div>

            <div className="rounded-3xl bg-brand-cream p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-brand-muted">
                Professional identity
              </p>
              <p className="mt-4 text-sm leading-7 text-brand-body">
                {siteMeta.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={siteMeta.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-brand-hairline bg-brand-canvas px-4 py-2 text-sm font-medium text-brand-ink"
                >
                  <Icon icon="mdi:linkedin" fontSize={18} />
                  LinkedIn
                </a>
                <a
                  href={siteMeta.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-brand-hairline bg-brand-canvas px-4 py-2 text-sm font-medium text-brand-ink"
                >
                  <Icon icon="mdi:github" fontSize={18} />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-brand-surfaceSoft px-5 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto w-full max-w-7xl">
            <SectionHeader
              eyebrow="Perspective"
            title="How I approach software engineering work with a frontend-first strength."
            description="This page makes the positioning more explicit: capable across frontend and backend needs, but strongest where interface quality, usability, and product delivery matter most."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {aboutSummary.map((paragraph, index) => (
                <article
                  key={paragraph}
                  data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
                  className="rounded-3xl bg-brand-canvas p-8 shadow-soft"
                >
                  <p className="text-sm leading-8 text-brand-body">{paragraph}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Capabilities"
            title="Core expertise shaped by product delivery, collaboration, and frontend depth."
            description="The skills are grouped to show both technical breadth and your strongest specialization, so the website reads more accurately as a professional profile."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {expertiseGroups.map((group, index) => (
              <article
                key={group.title}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                className="rounded-3xl border border-brand-hairline bg-brand-canvas p-8"
              >
                <h2 className="font-primary text-2xl font-medium text-brand-ink">
                  {group.title}
                </h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-brand-surfaceSoft px-3 py-1 text-xs text-brand-body"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
