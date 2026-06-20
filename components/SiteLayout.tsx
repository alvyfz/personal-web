import Link from "next/link";
import { ReactElement, ReactNode, useMemo, useState } from "react";
import { Icon } from "@iconify/react";
import { getLocalizedPath, SUPPORTED_LOCALES } from "@/lib/i18n";
import { persistLocale } from "@/lib/localeDetection";

interface SiteLayoutProps {
  children: ReactNode;
  currentPath: string;
  locale: string;
  dictionary: any;
}

export default function SiteLayout({
  children,
  currentPath,
  locale,
  dictionary,
}: SiteLayoutProps): ReactElement {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigationItems = useMemo(
    () => [
      { label: dictionary.navigation.home, href: "" },
      { label: dictionary.navigation.about, href: "/about" },
      { label: dictionary.navigation.experience, href: "/experience" },
      { label: dictionary.navigation.portfolio, href: "/portfolio" },
      { label: dictionary.navigation.contact, href: "/contact" },
    ],
    [dictionary],
  );

  return (
    <div className="min-h-screen bg-brand-canvas text-brand-ink">
      <header className="sticky top-0 z-50 border-b border-brand-hairline/80 bg-brand-canvas/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <Link
            href={getLocalizedPath(locale, "")}
            className="font-display text-xl font-medium tracking-[0.08em] text-brand-ink"
          >
            A F
          </Link>

          <div className="hidden items-center gap-3 lg:flex">
            <div className="inline-flex items-center rounded-full border border-brand-hairline bg-brand-canvas p-1">
              {SUPPORTED_LOCALES.map((supportedLocale) => {
                const isActive = supportedLocale === locale;
                const targetLocale = supportedLocale as "id" | "en";

                return (
                  <Link
                    key={supportedLocale}
                    href={getLocalizedPath(supportedLocale, currentPath)}
                    locale={false}
                    onClick={() => persistLocale(targetLocale)}
                    className={`rounded-full px-3 py-1.5 text-xs font-medium ${
                      isActive
                        ? "bg-brand-ink text-brand-canvas"
                        : "text-brand-muted"
                    }`}
                    aria-label={`${dictionary.common.switchLanguage}: ${
                      supportedLocale === "id"
                        ? dictionary.common.switchToIndonesian
                        : dictionary.common.switchToEnglish
                    }`}
                  >
                    {supportedLocale.toUpperCase()}
                  </Link>
                );
              })}
            </div>

            <nav className="hidden items-center gap-2 lg:flex">
              {navigationItems.map((item) => {
                const isActive =
                  currentPath === `/${item.href.replace(/^\//, "")}` ||
                  (currentPath === "" && item.href === "");

                return (
                  <Link
                    key={item.href || "home"}
                    href={getLocalizedPath(locale, item.href)}
                    locale={false}
                    className={`rounded-full px-4 py-2 text-sm transition-colors ${
                      isActive
                        ? "bg-brand-ink text-brand-canvas"
                        : "text-brand-muted hover:text-brand-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-hairline text-brand-ink lg:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={dictionary.common.toggleNavigation}
            aria-expanded={menuOpen}
          >
            <Icon icon={menuOpen ? "mdi:close" : "mdi:menu"} fontSize={22} />
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-brand-hairline bg-brand-canvas px-5 py-4 lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
              <div className="mb-2 flex items-center gap-2">
                {SUPPORTED_LOCALES.map((supportedLocale) => {
                  const isActive = supportedLocale === locale;
                  const targetLocale = supportedLocale as "id" | "en";

                  return (
                    <Link
                      key={supportedLocale}
                      href={getLocalizedPath(supportedLocale, currentPath)}
                      locale={false}
                      onClick={() => {
                        persistLocale(targetLocale);
                        setMenuOpen(false);
                      }}
                      className={`rounded-full px-3 py-1.5 text-xs font-medium ${
                        isActive
                          ? "bg-brand-ink text-brand-canvas"
                          : "border border-brand-hairline text-brand-muted"
                      }`}
                    >
                      {supportedLocale.toUpperCase()}
                    </Link>
                  );
                })}
              </div>

              {navigationItems.map((item) => {
                const itemPath = item.href
                  ? `/${item.href.replace(/^\//, "")}`
                  : "";
                const isActive = currentPath === itemPath;

                return (
                  <Link
                    key={item.href || "home-mobile"}
                    href={getLocalizedPath(locale, item.href)}
                    locale={false}
                    className={`rounded-2xl px-4 py-3 text-sm ${
                      isActive
                        ? "bg-brand-ink text-brand-canvas"
                        : "bg-brand-surfaceSoft text-brand-ink"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        )}
      </header>

      <main>{children}</main>

      <footer className="border-t border-brand-hairline bg-brand-canvas">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-12">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-brand-muted">
              {dictionary.siteMeta.name}
            </p>
            <h2 className="mt-3 max-w-2xl font-primary text-3xl font-medium leading-tight text-brand-ink">
              {dictionary.footer.title}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-brand-body">
              {dictionary.footer.description}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-brand-muted">
                {dictionary.common.footerNavigation}
              </p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-brand-body">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href || "footer-home"}
                    href={getLocalizedPath(locale, item.href)}
                    locale={false}
                    className="hover:text-brand-ink"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-brand-muted">
                {dictionary.common.footerReachOut}
              </p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-brand-body">
                <a
                  href={dictionary.siteMeta.email}
                  className="hover:text-brand-ink"
                >
                  alvyfauzi10@gmail.com
                </a>
                <a
                  href={dictionary.siteMeta.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-ink"
                >
                  LinkedIn
                </a>
                <a
                  href={dictionary.siteMeta.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-ink"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-brand-hairline px-5 py-4 text-center text-sm text-brand-muted sm:px-8 lg:px-12">
          © {new Date().getFullYear()} {dictionary.siteMeta.name}
        </div>
      </footer>
    </div>
  );
}
