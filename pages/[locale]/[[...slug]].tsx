import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { ReactElement } from "react";
import {
  AboutView,
  ContactView,
  ExperienceView,
  HomeView,
  PortfolioView,
} from "@/components/LocalizedViews";
import { getDictionary } from "@/lib/getDictionary";
import {
  getPageKeyFromSlug,
  getPathForPageKey,
  isSupportedLocale,
  PAGE_ROUTES,
  SUPPORTED_LOCALES,
} from "@/lib/i18n";

export default function LocalizedPage({
  locale,
  pageKey,
}: InferGetStaticPropsType<typeof getStaticProps>): ReactElement {
  const dictionary = getDictionary(locale);
  const currentPath = getPathForPageKey(pageKey);

  switch (pageKey) {
    case "about":
      return <AboutView locale={locale} dictionary={dictionary} currentPath={currentPath} />;
    case "experience":
      return (
        <ExperienceView
          locale={locale}
          dictionary={dictionary}
          currentPath={currentPath}
        />
      );
    case "portfolio":
      return (
        <PortfolioView
          locale={locale}
          dictionary={dictionary}
          currentPath={currentPath}
        />
      );
    case "contact":
      return (
        <ContactView
          locale={locale}
          dictionary={dictionary}
          currentPath={currentPath}
        />
      );
    case "home":
    default:
      return <HomeView locale={locale} dictionary={dictionary} currentPath={currentPath} />;
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = SUPPORTED_LOCALES.flatMap((locale) => {
    return Object.values(PAGE_ROUTES).map((route) => ({
      params: {
        locale,
        slug: route ? [route] : [],
      },
    }));
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  locale: string;
  pageKey: string;
}> = async ({ params }) => {
  const locale = String(params?.locale || "");

  if (!isSupportedLocale(locale)) {
    return {
      notFound: true,
    };
  }

  const slugParam = Array.isArray(params?.slug) ? params?.slug : [];
  const pageKey = getPageKeyFromSlug(slugParam);

  if (!pageKey) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      locale,
      pageKey,
    },
  };
};
