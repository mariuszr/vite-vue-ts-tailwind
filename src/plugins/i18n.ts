import { createI18n } from "vue-i18n";
import pl from "@/locales/pl.json";
import en from "@/locales/en.json";

const { VITE_I18N_LOCALE, VITE_I18N_FALLBACK_LOCALE } = import.meta.env;
const langDefault = "en";

export default createI18n({
  legacy: false,
  globalInjection: true,
  locale: (VITE_I18N_LOCALE as string) || langDefault,
  fallbackLocale: (VITE_I18N_FALLBACK_LOCALE as string) || langDefault,
  messages: { pl, en },
});
