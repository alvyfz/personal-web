import Link from "next/link";
import Image from "next/image";
import { ReactElement } from "react";
import { Icon } from "@iconify/react";
import profile from "assets/profile.jpg";
import PageHead from "@/components/PageHead";
import Project from "@/components/Project";
import SectionHeader from "@/components/SectionHeader";
import SiteLayout from "@/components/SiteLayout";
import { getLocalizedPath } from "@/lib/i18n";

interface ViewProps {
  locale: string;
  dictionary: any;
  currentPath: string;
}

function getSurfaceClass(surface: string): string {
  if (surface === "coral") {
    return "bg-brand-coral text-white";
  }

  if (surface === "cream") {
    return "bg-brand-cream text-brand-ink";
  }

  return "bg-brand-ink text-white";
}

export function HomeView({
  locale,
  dictionary,
  currentPath,
}: ViewProps): ReactElement {
  const { siteMeta, seo, home, content, common } = dictionary;

  return (
    <>
      <PageHead
        title={seo.pages.home.title}
        description={seo.pages.home.description}
        keywords={seo.keywords}
        locale={locale}
        path={currentPath}
        siteMeta={siteMeta}
      />
      <SiteLayout currentPath={currentPath} locale={locale} dictionary={dictionary}>
        <section className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-12 lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.28em] text-brand-muted">
              {home.hero.eyebrow}
            </p>
            <h1 className="mt-4 max-w-4xl font-primary text-5xl font-medium leading-[1.05] text-brand-ink sm:text-6xl">
              {home.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-brand-body">
              {home.hero.intro}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-brand-body">
              {home.hero.supporting}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={getLocalizedPath(locale, "/portfolio")}
                locale={false}
                className="rounded-xl bg-brand-ink px-6 py-3 text-sm font-medium text-brand-canvas"
              >
                {common.viewPortfolio}
              </Link>
              <Link
                href={getLocalizedPath(locale, "/experience")}
                locale={false}
                className="rounded-xl border border-brand-hairline px-6 py-3 text-sm font-medium text-brand-ink"
              >
                {common.exploreExperience}
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {content.highlightStats.map((item: any) => (
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
                  alt={home.hero.profileAlt}
                  src={profile}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <p className="mt-6 text-xs uppercase tracking-[0.25em] text-white/70">
                {common.basedIn} {siteMeta.location}
              </p>
              <h2 className="mt-3 font-primary text-3xl font-medium">
                {siteMeta.shortName}
              </h2>
              <p className="mt-3 text-sm leading-7 text-white/85">
                {home.hero.profileCard}
              </p>
            </div>

            <div
              data-aos="fade-up"
              className="rounded-3xl bg-brand-cream p-6 text-brand-ink shadow-soft"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-brand-muted">
                {common.currentFocus}
              </p>
              <p className="mt-3 text-sm leading-7 text-brand-body">
                {home.hero.focus}
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
                {home.expertise.eyebrow}
              </p>
              <h2 className="mt-3 font-primary text-4xl font-medium">
                {home.expertise.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/80 sm:text-base">
                {home.expertise.description}
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-4">
              {content.expertiseGroups.map((group: any, index: number) => (
                <div
                  key={group.title}
                  data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="font-primary text-2xl font-medium">
                    {group.title}
                  </h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item: string) => (
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
            eyebrow={home.about.eyebrow}
            title={home.about.title}
            description={home.about.description}
            aside={
              <Link
                href={getLocalizedPath(locale, "/about")}
                locale={false}
                className="inline-flex items-center gap-2 rounded-xl border border-brand-hairline px-5 py-3 text-sm font-medium text-brand-ink"
              >
                {common.readFullProfile}
                <Icon icon="mdi:arrow-right" fontSize={18} />
              </Link>
            }
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl bg-brand-canvas p-8 shadow-soft">
              <div className="space-y-5">
                {content.aboutSummary.map((paragraph: string) => (
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
              {content.impactItems.map((item: any) => (
                <article
                  key={item.title}
                  className={`rounded-3xl p-6 ${getSurfaceClass(item.surface)}`}
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
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-surfaceSoft px-5 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto w-full max-w-7xl">
            <SectionHeader
              eyebrow={home.experiencePreview.eyebrow}
              title={home.experiencePreview.title}
              description={home.experiencePreview.description}
              aside={
                <Link
                  href={getLocalizedPath(locale, "/experience")}
                  locale={false}
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-ink px-5 py-3 text-sm font-medium text-brand-canvas"
                >
                  {common.seeFullTimeline}
                  <Icon icon="mdi:arrow-right" fontSize={18} />
                </Link>
              }
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {content.experienceItems.slice(0, 4).map((item: any, index: number) => (
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
            title={home.portfolio.title}
            description={home.portfolio.description}
            locale={locale}
            dictionary={dictionary}
            showArchive={false}
          />
          <div className="mt-8">
            <Link
              href={getLocalizedPath(locale, "/portfolio")}
              locale={false}
              className="inline-flex items-center gap-2 rounded-xl border border-brand-hairline px-5 py-3 text-sm font-medium text-brand-ink"
            >
              {common.browseFullPortfolio}
              <Icon icon="mdi:arrow-right" fontSize={18} />
            </Link>
          </div>
        </section>

        <section className="bg-brand-surfaceStrong px-5 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto grid w-full max-w-7xl gap-8 rounded-3xl bg-brand-canvas p-8 shadow-soft lg:grid-cols-[1fr_0.9fr] lg:p-12">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-brand-muted">
                {home.contact.eyebrow}
              </p>
              <h2 className="mt-3 font-primary text-4xl font-medium text-brand-ink">
                {home.contact.title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-brand-body">
                {home.contact.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={getLocalizedPath(locale, "/contact")}
                  locale={false}
                  className="rounded-xl bg-brand-ink px-6 py-3 text-sm font-medium text-brand-canvas"
                >
                  {common.openContactPage}
                </Link>
                <a
                  href={siteMeta.email}
                  className="rounded-xl border border-brand-hairline px-6 py-3 text-sm font-medium text-brand-ink"
                >
                  {common.emailDirectly}
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              {content.contactMethods.map((method: any) => (
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

export function AboutView({
  locale,
  dictionary,
  currentPath,
}: ViewProps): ReactElement {
  const { siteMeta, seo, about, home, content, common } = dictionary;

  return (
    <>
      <PageHead
        title={seo.pages.about.title}
        description={seo.pages.about.description}
        keywords={seo.keywords}
        locale={locale}
        path={currentPath}
        siteMeta={siteMeta}
      />
      <SiteLayout currentPath={currentPath} locale={locale} dictionary={dictionary}>
        <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-brand-muted">
                {about.eyebrow}
              </p>
              <h1 className="mt-4 font-primary text-5xl font-medium leading-[1.08] text-brand-ink sm:text-6xl">
                {about.title}
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-brand-body">
                {home.hero.intro}
              </p>
            </div>

            <div className="rounded-3xl bg-brand-cream p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-brand-muted">
                {common.professionalIdentity}
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
              eyebrow={about.perspective.eyebrow}
              title={about.perspective.title}
              description={about.perspective.description}
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {content.aboutSummary.map((paragraph: string, index: number) => (
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
            eyebrow={about.capabilities.eyebrow}
            title={about.capabilities.title}
            description={about.capabilities.description}
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {content.expertiseGroups.map((group: any, index: number) => (
              <article
                key={group.title}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                className="rounded-3xl border border-brand-hairline bg-brand-canvas p-8"
              >
                <h2 className="font-primary text-2xl font-medium text-brand-ink">
                  {group.title}
                </h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item: string) => (
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

export function ExperienceView({
  locale,
  dictionary,
  currentPath,
}: ViewProps): ReactElement {
  const { siteMeta, seo, experiencePage, content } = dictionary;

  return (
    <>
      <PageHead
        title={seo.pages.experience.title}
        description={seo.pages.experience.description}
        keywords={seo.keywords}
        locale={locale}
        path={currentPath}
        siteMeta={siteMeta}
      />
      <SiteLayout currentPath={currentPath} locale={locale} dictionary={dictionary}>
        <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <SectionHeader
            eyebrow={experiencePage.eyebrow}
            title={experiencePage.title}
            description={experiencePage.description}
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {content.impactItems.map((item: any) => (
              <article
                key={item.title}
                className={`rounded-3xl p-8 ${getSurfaceClass(item.surface)}`}
              >
                <h2 className="font-primary text-2xl font-medium">{item.title}</h2>
                <p
                  className={`mt-4 text-sm leading-7 ${
                    item.surface === "cream" ? "text-brand-body" : "text-white/85"
                  }`}
                >
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-brand-surfaceSoft px-5 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto w-full max-w-7xl">
            <div className="grid gap-6">
              {content.experienceItems.map((item: any, index: number) => (
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
                        {item.points.map((point: string) => (
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

export function PortfolioView({
  locale,
  dictionary,
  currentPath,
}: ViewProps): ReactElement {
  const { siteMeta, seo, portfolioPage } = dictionary;

  return (
    <>
      <PageHead
        title={seo.pages.portfolio.title}
        description={seo.pages.portfolio.description}
        keywords={seo.keywords}
        locale={locale}
        path={currentPath}
        siteMeta={siteMeta}
      />
      <SiteLayout currentPath={currentPath} locale={locale} dictionary={dictionary}>
        <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <Project
            title={portfolioPage.title}
            description={portfolioPage.description}
            locale={locale}
            dictionary={dictionary}
            showArchive
          />
        </section>
      </SiteLayout>
    </>
  );
}

export function ContactView({
  locale,
  dictionary,
  currentPath,
}: ViewProps): ReactElement {
  const { siteMeta, seo, contactPage, content, common } = dictionary;

  return (
    <>
      <PageHead
        title={seo.pages.contact.title}
        description={seo.pages.contact.description}
        keywords={seo.keywords}
        locale={locale}
        path={currentPath}
        siteMeta={siteMeta}
      />
      <SiteLayout currentPath={currentPath} locale={locale} dictionary={dictionary}>
        <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <SectionHeader
            eyebrow={contactPage.eyebrow}
            title={contactPage.title}
            description={contactPage.description}
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl bg-brand-ink p-8 text-white">
              <p className="text-xs uppercase tracking-[0.25em] text-white/65">
                {contactPage.bestFit}
              </p>
              <h2 className="mt-3 font-primary text-3xl font-medium">
                {contactPage.bestFitTitle}
              </h2>
              <ul className="mt-6 grid gap-4">
                {content.serviceList.map((item: string) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-white/85">
                    <Icon icon="mdi:check-circle-outline" fontSize={18} className="mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-4">
              {content.contactMethods.map((method: any, index: number) => (
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
                    {common.methodHelp}
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
