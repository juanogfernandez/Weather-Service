import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
//import LanguageDetector  from "i18next-browser-languagedetector";

i18next
  .use(Backend)
  //.use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "es",
    lng: "es",
    supportedLngs: ["es", "en"],
    //detection: {
    //  order: ['localStorage', 'cookie', 'navigator'],
    //  lookupLocalStorage: 'i18nextLng',
    //  caches: ['localStorage'],
    //},
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
  });

export default i18next;
