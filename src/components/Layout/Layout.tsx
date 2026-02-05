import type { ReactNode } from "react";
import { useTranslation } from "@/i18n/index.tsx";
import { useQuestionnaire } from "@/context/QuestionnaireContext.tsx";
import { useAdmin } from "@/context/AdminContext.tsx";
import { LanguageSwitcher } from "@/components/LanguageSwitcher/LanguageSwitcher.tsx";
import { AdminToggle } from "@/components/AdminToggle/AdminToggle.tsx";
import { Stepper } from "@/components/Stepper/Stepper.tsx";
import { NavigationButtons } from "@/components/NavigationButtons/NavigationButtons.tsx";
import "./Layout.css";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { t } = useTranslation();
  const { state } = useQuestionnaire();
  const { steps } = useAdmin();

  return (
    <div className="layout">
      <header className="layout-header">
        <div className="layout-header-inner">
          <div className="layout-title-group">
            <h1 className="layout-title">{t("app.title")}</h1>
            <p className="layout-subtitle">{t("app.subtitle")}</p>
          </div>
          <div className="layout-header-actions">
            <AdminToggle />
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {!state.isSubmitted && (
        <Stepper steps={steps} currentStep={state.currentStep} />
      )}

      <main className="layout-main">
        <div className="layout-content">{children}</div>
      </main>

      {!state.isSubmitted && (
        <footer className="layout-footer">
          <div className="layout-footer-inner">
            <NavigationButtons />
          </div>
        </footer>
      )}
    </div>
  );
}
