import i18next, { loadNamespaces } from "i18next";
import { initReactI18next } from "react-i18next";
import I18NextHttpBackend from "i18next-http-backend";
import i18nextBrowserLanguagedetector from "i18next-browser-languagedetector";
import react from "@vitejs/plugin-react-swc";

i18next
  .use(I18NextHttpBackend)
  .use(i18nextBrowserLanguagedetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "es"],
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
