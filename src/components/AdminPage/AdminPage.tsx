import { useState, useMemo, useCallback } from "react";
import { useTranslation } from "@/i18n/index.tsx";
import { useAdmin } from "@/context/AdminContext.tsx";
import { LanguageSwitcher } from "@/components/LanguageSwitcher/LanguageSwitcher.tsx";
import { AdminToggle } from "@/components/AdminToggle/AdminToggle.tsx";
import { AdminFilterBar } from "@/components/AdminFilterBar/AdminFilterBar.tsx";
import { AdminCategoryPanel } from "@/components/AdminCategoryPanel/AdminCategoryPanel.tsx";
import { ConfirmDialog } from "@/components/ConfirmDialog/ConfirmDialog.tsx";
import type { RiskLevel, CustomerType, ControlType, Question } from "@/types/index.ts";
import "./AdminPage.css";

function matchesFilter(
  question: Question,
  activeRiskLevels: RiskLevel[],
  activeCustomerTypes: CustomerType[],
  activeControlTypes: ControlType[],
): boolean {
  const riskMatch =
    activeRiskLevels.length === 0 ||
    question.riskLevels.some((r) => activeRiskLevels.includes(r));

  const customerMatch =
    activeCustomerTypes.length === 0 ||
    question.customerTypes.some((c) => activeCustomerTypes.includes(c));

  const controlMatch =
    activeControlTypes.length === 0 ||
    question.controlTypes.some((c) => activeControlTypes.includes(c));

  return riskMatch && customerMatch && controlMatch;
}

export function AdminPage() {
  const { t } = useTranslation();
  const { state, resetToDefaults, getQuestionsForCategory } = useAdmin();

  // Filter state
  const [activeRiskLevels, setActiveRiskLevels] = useState<RiskLevel[]>([]);
  const [activeCustomerTypes, setActiveCustomerTypes] = useState<CustomerType[]>([]);
  const [activeControlTypes, setActiveControlTypes] = useState<ControlType[]>([]);

  // Reset confirmation dialog
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  // Toggle handlers
  const handleRiskLevelToggle = useCallback((level: RiskLevel) => {
    setActiveRiskLevels((prev) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level],
    );
  }, []);

  const handleCustomerTypeToggle = useCallback((type: CustomerType) => {
    setActiveCustomerTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
  }, []);

  const handleControlTypeToggle = useCallback((type: ControlType) => {
    setActiveControlTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
  }, []);

  const handleResetFilters = useCallback(() => {
    setActiveRiskLevels([]);
    setActiveCustomerTypes([]);
    setActiveControlTypes([]);
  }, []);

  // Sort categories by sortOrder
  const sortedCategories = useMemo(
    () => [...state.categories].sort((a, b) => a.sortOrder - b.sortOrder),
    [state.categories],
  );

  // Filter questions per category
  const filteredQuestionsMap = useMemo(() => {
    const map = new Map<string, Question[]>();
    for (const category of sortedCategories) {
      const categoryQuestions = getQuestionsForCategory(category.id);
      const filtered = categoryQuestions.filter((q) =>
        matchesFilter(q, activeRiskLevels, activeCustomerTypes, activeControlTypes),
      );
      map.set(category.id, filtered);
    }
    return map;
  }, [sortedCategories, getQuestionsForCategory, activeRiskLevels, activeCustomerTypes, activeControlTypes]);

  // Counts
  const totalCount = state.questions.length;
  const filteredCount = useMemo(() => {
    let count = 0;
    for (const questions of filteredQuestionsMap.values()) {
      count += questions.length;
    }
    return count;
  }, [filteredQuestionsMap]);

  // Reset handlers
  const handleResetConfirm = useCallback(() => {
    resetToDefaults();
    setShowResetConfirm(false);
    handleResetFilters();
  }, [resetToDefaults, handleResetFilters]);

  return (
    <div className="admin-page">
      <header className="admin-page-header">
        <div className="admin-page-header-inner">
          <div className="admin-page-title-group">
            <h1 className="admin-page-header-title">{t("app.title")}</h1>
            <p className="admin-page-header-subtitle">{t("app.subtitle")}</p>
          </div>
          <div className="admin-page-header-actions">
            <AdminToggle />
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <div className="admin-page-body">
        <div className="admin-page-title-section">
          <h2 className="admin-page-title">{t("admin.page.title")}</h2>
          <p className="admin-page-subtitle">{t("admin.page.subtitle")}</p>
        </div>

        <AdminFilterBar
          activeRiskLevels={activeRiskLevels}
          activeCustomerTypes={activeCustomerTypes}
          activeControlTypes={activeControlTypes}
          onRiskLevelToggle={handleRiskLevelToggle}
          onCustomerTypeToggle={handleCustomerTypeToggle}
          onControlTypeToggle={handleControlTypeToggle}
          onResetFilters={handleResetFilters}
          filteredCount={filteredCount}
          totalCount={totalCount}
        />

        <div className="admin-page-categories">
          {sortedCategories.map((category) => (
            <AdminCategoryPanel
              key={category.id}
              category={category}
              questions={filteredQuestionsMap.get(category.id) ?? []}
            />
          ))}
        </div>

        <div className="admin-page-footer">
          <button
            type="button"
            className="admin-reset-btn"
            onClick={() => setShowResetConfirm(true)}
          >
            {t("admin.reset.button")}
          </button>
        </div>
      </div>

      <ConfirmDialog
        open={showResetConfirm}
        title={t("admin.reset.confirm.title")}
        message={t("admin.reset.confirm.message")}
        confirmLabel={t("admin.reset.confirm.yes")}
        cancelLabel={t("admin.reset.confirm.no")}
        onConfirm={handleResetConfirm}
        onCancel={() => setShowResetConfirm(false)}
        variant="danger"
      />
    </div>
  );
}
