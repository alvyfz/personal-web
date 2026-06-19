import Head from "next/head";
import { ReactElement } from "react";
import { siteMeta } from "@/data/siteContent";

interface PageHeadProps {
  title: string;
  description: string;
  path: string;
}

export default function PageHead({
  title,
  description,
  path,
}: PageHeadProps): ReactElement {
  const fullTitle = `${title} | ${siteMeta.name}`;
  const url = `${siteMeta.website}${path.replace(/^\//, "")}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Frontend Engineer, React, Next.js, TypeScript, React Native, Portfolio, Web Developer, Indonesia"
      />
      <meta name="author" content={siteMeta.name} />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteMeta.website}profile.jpg`} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteMeta.website}profile.jpg`} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={url} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
