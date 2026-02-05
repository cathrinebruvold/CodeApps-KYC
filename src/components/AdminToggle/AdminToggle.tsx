import { useTranslation } from "@/i18n/index.tsx";
import { useAdmin } from "@/context/AdminContext.tsx";
import "./AdminToggle.css";

export function AdminToggle() {
  const { t } = useTranslation();
  const { state, toggleAdminMode } = useAdmin();

  return (
    <button className="admin-toggle" onClick={toggleAdminMode} title={state.isAdminMode ? t("admin.toggle.exit") : t("admin.toggle.enter")}>
      {state.isAdminMode ? (
        <>{"\u2190"} {t("admin.toggle.exit")}</>
      ) : (
        <>{"\u2699"} {t("admin.toggle.enter")}</>
      )}
    </button>
  );
}
