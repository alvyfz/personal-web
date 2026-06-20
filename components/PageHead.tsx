import Head from "next/head";
import { ReactElement } from "react";
import { getLocalizedPath, SUPPORTED_LOCALES } from "@/lib/i18n";

interface PageHeadProps {
  title: string;
  description: string;
  keywords: string;
  locale: string;
  path: string;
  siteMeta: {
    name: string;
    website: string;
    role: string;
    description: string;
    location: string;
  };
}

export default function PageHead({
  title,
  description,
  keywords,
  locale,
  path,
  siteMeta,
}: PageHeadProps): ReactElement {
  const fullTitle = `${title} | ${siteMeta.name}`;
  const localizedPath = getLocalizedPath(locale, path);
  const cleanBaseUrl = siteMeta.website.replace(/\/$/, "");
  const url = `${cleanBaseUrl}${localizedPath}`;
  const ogLocale = locale === "id" ? "id_ID" : "en_US";

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={siteMeta.name} />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="content-language" content={locale} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${cleanBaseUrl}/profile.jpg`} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={ogLocale} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${cleanBaseUrl}/profile.jpg`} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={url} />
      {SUPPORTED_LOCALES.map((supportedLocale) => (
        <link
          key={supportedLocale}
          rel="alternate"
          hrefLang={supportedLocale === "id" ? "id-ID" : "en"}
          href={`${cleanBaseUrl}${getLocalizedPath(supportedLocale, path)}`}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${cleanBaseUrl}/en`} />
      <link rel="icon" href="/favicon.ico" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: siteMeta.name,
            jobTitle: siteMeta.role,
            description,
            url,
            inLanguage: locale,
            homeLocation: siteMeta.location,
          }),
        }}
      />
    </Head>
  );
}
