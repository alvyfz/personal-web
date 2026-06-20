import Head from "next/head";
import { ReactElement, useEffect } from "react";
import { useRouter } from "next/router";
import { getLocalizedPath } from "@/lib/i18n";
import {
  detectPreferredLocale,
  persistLocale,
  readStoredLocale,
} from "@/lib/localeDetection";

interface LocaleRedirectPageProps {
  path: string;
}

export default function LocaleRedirectPage({
  path,
}: LocaleRedirectPageProps): ReactElement {
  const router = useRouter();

  useEffect(() => {
    const storedLocale = readStoredLocale();
    const detectedLocale =
      storedLocale ||
      detectPreferredLocale(
        typeof navigator !== "undefined" ? navigator.language : undefined,
      );

    persistLocale(detectedLocale);
    router.replace(getLocalizedPath(detectedLocale, path));
  }, [path, router]);

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <main className="flex min-h-screen items-center justify-center bg-brand-canvas px-6 text-center text-brand-body">
        Redirecting to your language preference...
      </main>
    </>
  );
}
