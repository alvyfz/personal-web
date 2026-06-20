const LOCALE_COOKIE_KEY = "preferred_locale";
const DEFAULT_LOCALE = "en";
const INDONESIAN_LOCALE = "id";

/**
 * Detects the UI locale from the client device language.
 *
 * Business rule:
 * - Indonesian device language => use Indonesian UI.
 * - English and every other non-Indonesian language => use English UI.
 *
 * This guarantees the site never attempts to render an unsupported language.
 *
 * @param {string | undefined | null} language
 * @returns {"id" | "en"}
 */
function detectPreferredLocale(language) {
  const normalized = String(language || "").toLowerCase();

  if (normalized.startsWith("id")) {
    return INDONESIAN_LOCALE;
  }

  return DEFAULT_LOCALE;
}

/**
 * Reads the user's stored locale preference from cookie first, then localStorage.
 * Cookie is preferred because it is easier to share between page loads.
 *
 * @returns {"id" | "en" | null}
 */
function readStoredLocale() {
  if (typeof document === "undefined") {
    return null;
  }

  const cookieMatch = document.cookie
    .split("; ")
    .find((item) => item.startsWith(`${LOCALE_COOKIE_KEY}=`));

  if (cookieMatch) {
    const cookieValue = cookieMatch.split("=")[1];

    if (cookieValue === "id" || cookieValue === "en") {
      return cookieValue;
    }
  }

  if (typeof window !== "undefined") {
    const stored = window.localStorage.getItem(LOCALE_COOKIE_KEY);

    if (stored === "id" || stored === "en") {
      return stored;
    }
  }

  return null;
}

/**
 * Persists the chosen locale in both cookie and localStorage so the preference
 * survives reloads and future visits.
 *
 * @param {"id" | "en"} locale
 */
function persistLocale(locale) {
  if (typeof document !== "undefined") {
    document.cookie = `${LOCALE_COOKIE_KEY}=${locale}; path=/; max-age=31536000; SameSite=Lax`;
  }

  if (typeof window !== "undefined") {
    window.localStorage.setItem(LOCALE_COOKIE_KEY, locale);
  }
}

module.exports = {
  DEFAULT_LOCALE,
  INDONESIAN_LOCALE,
  LOCALE_COOKIE_KEY,
  detectPreferredLocale,
  readStoredLocale,
  persistLocale,
};
