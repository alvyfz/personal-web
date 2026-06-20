const en = require("../locales/en");
const id = require("../locales/id");
const { DEFAULT_LOCALE } = require("./i18n");

const dictionaries = {
  en,
  id,
};

function getDictionary(locale) {
  return dictionaries[locale] || dictionaries[DEFAULT_LOCALE];
}

module.exports = {
  getDictionary,
};
