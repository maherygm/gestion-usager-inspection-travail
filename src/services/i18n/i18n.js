import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector  from 'i18next-browser-languagedetector';


i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'fr',
    fallbackLng: 'fr',
    backend: {
      loadPath: './Components/TraductionApp/locales/{{lng}}/translation.json',
    },
    react: {
      useSuspense: false,
    },
  });
export default i18n;