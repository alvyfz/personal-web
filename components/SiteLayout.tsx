import Link from "next/link";
import { ReactElement, ReactNode, useState } from "react";
import { Icon } from "@iconify/react";
import { navItems, siteMeta } from "@/data/siteContent";

interface SiteLayoutProps {
  children: ReactNode;
  currentPath: string;
}

export default function SiteLayout({
  children,
  currentPath,
}: SiteLayoutProps): ReactElement {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-canvas text-brand-ink">
      <header className="sticky top-0 z-50 border-b border-brand-hairline/80 bg-brand-canvas/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <Link
            href="/"
            className="font-display text-xl font-medium tracking-[0.08em] text-brand-ink"
          >
            A F
          </Link>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-hairline text-brand-ink lg:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <Icon icon={menuOpen ? "mdi:close" : "mdi:menu"} fontSize={22} />
          </button>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => {
              const isActive = currentPath === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
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

        {menuOpen && (
          <nav className="border-t border-brand-hairline bg-brand-canvas px-5 py-4 lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
              {navItems.map((item) => {
                const isActive = currentPath === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
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
              {siteMeta.name}
            </p>
            <h2 className="mt-3 max-w-2xl font-primary text-3xl font-medium leading-tight text-brand-ink">
              Frontend engineer focused on shipping reliable interfaces for web
              and mobile products.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-brand-body">
              Built with an editorial visual system inspired by clean canvas,
              dark ink typography, and strong signature content blocks.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-brand-muted">
                Navigation
              </p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-brand-body">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className="hover:text-brand-ink">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-brand-muted">
                Reach Out
              </p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-brand-body">
                <a href={siteMeta.email} className="hover:text-brand-ink">
                  alvyfauzi10@gmail.com
                </a>
                <a
                  href={siteMeta.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-ink"
                >
                  LinkedIn
                </a>
                <a
                  href={siteMeta.github}
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
          © {new Date().getFullYear()} {siteMeta.name}
        </div>
      </footer>
    </div>
  );
}
