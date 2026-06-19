import Link from "next/link";
import Image from "next/image";
import { ReactElement } from "react";
import { Icon } from "@iconify/react";
import profile from "assets/profile.jpg";
import PageHead from "@/components/PageHead";
import Project from "@/components/Project";
import SectionHeader from "@/components/SectionHeader";
import SiteLayout from "@/components/SiteLayout";
import {
  aboutSummary,
  contactMethods,
  expertiseGroups,
  experienceItems,
  heroContent,
  highlightStats,
  impactItems,
  siteMeta,
} from "@/data/siteContent";

export default function Home(): ReactElement {
  return (
    <>
      <PageHead
        title="Software Engineer with Strong Frontend Expertise"
        description={siteMeta.description}
        path="/"
      />
      <SiteLayout currentPath="/">
        <section className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-12 lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.28em] text-brand-muted">
              {heroContent.eyebrow}
            </p>
            <h1 className="mt-4 max-w-4xl font-primary text-5xl font-medium leading-[1.05] text-brand-ink sm:text-6xl">
              {heroContent.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-brand-body">
              {heroContent.intro}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-brand-body">
              {heroContent.supporting}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/portfolio"
                className="rounded-xl bg-brand-ink px-6 py-3 text-sm font-medium text-brand-canvas"
              >
                View portfolio
              </Link>
              <Link
                href="/experience"
                className="rounded-xl border border-brand-hairline px-6 py-3 text-sm font-medium text-brand-ink"
              >
                Explore experience
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {highlightStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-brand-hairline bg-brand-surfaceSoft p-5"
                >
                  <p className="font-primary text-xl font-medium text-brand-ink">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-brand-body">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <div
              data-aos="fade-left"
              className="rounded-3xl bg-brand-coral p-6 text-brand-canvas shadow-soft"
            >
              <div className="mx-auto max-w-[280px] overflow-hidden rounded-[24px] border border-white/20">
                <Image
                  alt="Profile photo of M. Alvy Eka Fauzi"
                  src={profile}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <p className="mt-6 text-xs uppercase tracking-[0.25em] text-white/70">
                Based in {siteMeta.location}
              </p>
              <h2 className="mt-3 font-primary text-3xl font-medium">
                {siteMeta.shortName}
              </h2>
              <p className="mt-3 text-sm leading-7 text-white/85">
                Software engineer who can work across frontend and backend, with
                strongest depth in frontend product execution, UI quality, and
                production-ready implementation.
              </p>
            </div>

            <div
              data-aos="fade-up"
              className="rounded-3xl bg-brand-cream p-6 text-brand-ink shadow-soft"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-brand-muted">
                Current focus
              </p>
              <p className="mt-3 text-sm leading-7 text-brand-body">
                Handling end-to-end product needs when required, while focusing
                most deeply on frontend engineering with React, Next.js,
                TypeScript, and React Native in close collaboration with
                backend, product, design, and QA teams.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={siteMeta.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-brand-hairline bg-brand-canvas px-4 py-2 text-sm font-medium"
                >
                  <Icon icon="mdi:linkedin" fontSize={18} />
                  LinkedIn
                </a>
                <a
                  href={siteMeta.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-brand-hairline bg-brand-canvas px-4 py-2 text-sm font-medium"
                >
                  <Icon icon="mdi:github" fontSize={18} />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-brand-surfaceDark px-5 py-20 text-brand-canvas sm:px-8 lg:px-12">
          <div className="mx-auto w-full max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs uppercase tracking-[0.25em] text-white/65">
                Core Expertise
              </p>
              <h2 className="mt-3 font-primary text-4xl font-medium">
                A focused stack built around product delivery, not just tools.
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/80 sm:text-base">
                I use modern frontend technologies to create interfaces that are
                not only visually polished, but also maintainable, accessible,
                and practical for production teams.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {expertiseGroups.map((group, index) => (
                <div
                  key={group.title}
                  data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="font-primary text-2xl font-medium">
                    {group.title}
                  </h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/85"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="About"
            title="A clearer professional narrative: software engineer, strongest in frontend."
            description="The structure now makes your technical breadth, strongest specialization, professional experience, and value to teams much easier to understand for recruiters, clients, and collaborators."
            aside={
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-xl border border-brand-hairline px-5 py-3 text-sm font-medium text-brand-ink"
              >
                Read full profile
                <Icon icon="mdi:arrow-right" fontSize={18} />
              </Link>
            }
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl bg-brand-canvas p-8 shadow-soft">
              <div className="space-y-5">
                {aboutSummary.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-base leading-8 text-brand-body"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="grid gap-5">
              {impactItems.map((item) => {
                const surfaceClass =
                  item.surface === "coral"
                    ? "bg-brand-coral text-white"
                    : item.surface === "cream"
                      ? "bg-brand-cream text-brand-ink"
                      : "bg-brand-ink text-white";

                return (
                  <article
                    key={item.title}
                    className={`rounded-3xl p-6 ${surfaceClass}`}
                  >
                    <h3 className="font-primary text-2xl font-medium">
                      {item.title}
                    </h3>
                    <p
                      className={`mt-3 text-sm leading-7 ${
                        item.surface === "cream"
                          ? "text-brand-body"
                          : "text-white/85"
                      }`}
                    >
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-brand-surfaceSoft px-5 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto w-full max-w-7xl">
            <SectionHeader
              eyebrow="Experience Preview"
              title="Professional experience that proves real delivery beyond portfolio projects."
              description="The website now highlights professional roles more explicitly so visitors can see your company background, team context, and the level of responsibility you have handled."
              aside={
                <Link
                  href="/experience"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-ink px-5 py-3 text-sm font-medium text-brand-canvas"
                >
                  See full timeline
                  <Icon icon="mdi:arrow-right" fontSize={18} />
                </Link>
              }
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {experienceItems.slice(0, 4).map((item, index) => (
                <article
                  key={`${item.company}-${item.role}`}
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  className="rounded-3xl bg-brand-canvas p-6 shadow-soft"
                >
                  <p className="text-xs uppercase tracking-[0.22em] text-brand-muted">
                    {item.period}
                  </p>
                  <h3 className="mt-3 font-primary text-2xl font-medium text-brand-ink">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-brand-coral">
                    {item.company}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-brand-body">
                    {item.summary}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
          <Project
            title="Selected work curated to show product thinking, interface quality, and implementation range."
            description="The portfolio now emphasizes why each project matters, not just what technologies were used."
            showArchive={false}
          />
          <div className="mt-8">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-xl border border-brand-hairline px-5 py-3 text-sm font-medium text-brand-ink"
            >
              Browse full portfolio
              <Icon icon="mdi:arrow-right" fontSize={18} />
            </Link>
          </div>
        </section>

        <section className="bg-brand-surfaceStrong px-5 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto grid w-full max-w-7xl gap-8 rounded-3xl bg-brand-canvas p-8 shadow-soft lg:grid-cols-[1fr_0.9fr] lg:p-12">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-brand-muted">
                Contact
              </p>
              <h2 className="mt-3 font-primary text-4xl font-medium text-brand-ink">
                Ready to discuss a software engineering role, frontend-heavy
                collaboration, or a new product build?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-brand-body">
                I am open to conversations around software engineering,
                frontend-focused roles, and collaborative delivery for web or
                mobile products.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-xl bg-brand-ink px-6 py-3 text-sm font-medium text-brand-canvas"
                >
                  Open contact page
                </Link>
                <a
                  href={siteMeta.email}
                  className="rounded-xl border border-brand-hairline px-6 py-3 text-sm font-medium text-brand-ink"
                >
                  Email directly
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    method.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="rounded-2xl border border-brand-hairline bg-brand-surfaceSoft p-5"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-brand-muted">
                    {method.label}
                  </p>
                  <p className="mt-2 text-sm font-medium text-brand-ink">
                    {method.value}
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
