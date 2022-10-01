import i18n from 'i18next';
import backend from 'i18next-http-backend'
import languageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next';

i18n
  .use(backend)
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/locales/{{lng}}.json'
    },
    // with namespaces, make sure the loadPath is well resolved ../locales/{{ns}}/{{lng}}.json
    // ns: ['common', 'home', 'menu'],
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

export default i18n;