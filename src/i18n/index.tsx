import { createContext, useContext, useState, useCallback } from "react";
import type { ReactNode } from "react";
import nb from "./nb";
import en from "./en";

export type Locale = "nb" | "en";

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, params?: Record<string, string>) => string;
}

const dictionaries: Record<Locale, Record<string, string>> = { nb, en };

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("nb");

  const t = useCallback(
    (key: string, params?: Record<string, string>): string => {
      let value = dictionaries[locale][key] ?? key;
      if (params) {
        for (const [paramKey, paramValue] of Object.entries(params)) {
          value = value.replace(`{${paramKey}}`, paramValue);
        }
      }
      return value;
    },
    [locale],
  );

  return (
    <I18nContext value={{ locale, setLocale, t }}>
      {children}
    </I18nContext>
  );
}

export function useTranslation() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useTranslation must be used within I18nProvider");
  }
  return context;
}
