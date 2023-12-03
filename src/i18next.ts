import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import translationEnglish from "../public/locales/en/translation.json";
import translationRussian from "../public/locales/ru/translation.json";
import translationTurkish from "../public/locales/tr/translation.json";

const resources = {
  en: {
    translation: translationEnglish,
  },
  ru: {
    translation: translationRussian,
  },
  tr: {
    translation: translationTurkish,
  },
};
i18next.use(initReactI18next).init({ resources, lng: "en" });

export default i18next;
