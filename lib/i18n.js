const { DEFAULT_LOCALE } = require("./localeDetection");

const SUPPORTED_LOCALES = ["id", "en"];

const PAGE_ROUTES = {
  home: "",
  about: "about",
  experience: "experience",
  portfolio: "portfolio",
  contact: "contact",
};

function isSupportedLocale(value) {
  return SUPPORTED_LOCALES.includes(value);
}

function normalizePath(path) {
  if (!path || path === "/") {
    return "";
  }

  return path.startsWith("/") ? path : `/${path}`;
}

function getLocalizedPath(locale, path = "") {
  const safeLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
  const normalized = normalizePath(path);

  return normalized ? `/${safeLocale}${normalized}` : `/${safeLocale}`;
}

function getPageKeyFromSlug(slug) {
  if (!slug || slug.length === 0) {
    return "home";
  }

  if (slug.length > 1) {
    return null;
  }

  const rawSlug = slug[0];

  return (
    Object.keys(PAGE_ROUTES).find((key) => PAGE_ROUTES[key] === rawSlug) || null
  );
}

function getPathForPageKey(pageKey) {
  const route = PAGE_ROUTES[pageKey];

  if (route === undefined) {
    return "";
  }

  return route ? `/${route}` : "";
}

module.exports = {
  DEFAULT_LOCALE,
  PAGE_ROUTES,
  SUPPORTED_LOCALES,
  getLocalizedPath,
  getPageKeyFromSlug,
  getPathForPageKey,
  isSupportedLocale,
};
