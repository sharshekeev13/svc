// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import engTranslation from "../public/locales/eng/translation.json";
import jpTranslation from "../public/locales/jp/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    eng: {
      translation: engTranslation,
    },
    jp: {
      translation: jpTranslation,
    },
  },
  lng: "jp", // Set default language to Japanese
  fallbackLng: "eng",
  interpolation: {
    escapeValue: false, // React already handles escaping
  },
  detection: {
    order: [
      "queryString",
      "cookie",
      "localStorage",
      "navigator",
      "htmlTag",
      "path",
      "subdomain",
    ],
    caches: ["localStorage", "cookie"],
  },
  react: {
    useSuspense: false, // To avoid dealing with Suspense in React
  },
});

export default i18n;
