import { useTranslation } from "@/i18n/index.tsx";
import type { Locale } from "@/i18n/index.tsx";
import "./LanguageSwitcher.css";

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useTranslation();

  const toggleLocale = () => {
    const next: Locale = locale === "nb" ? "en" : "nb";
    setLocale(next);
  };

  return (
    <button
      className="language-switcher"
      onClick={toggleLocale}
      aria-label={t("lang.switch")}
    >
      <span className="language-switcher-flag">{locale === "nb" ? "🇬🇧" : "🇳🇴"}</span>
      <span className="language-switcher-label">{t("lang.switch")}</span>
    </button>
  );
}
