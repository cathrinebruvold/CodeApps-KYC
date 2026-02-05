import { useTranslation } from "@/i18n/index.tsx";
import { useQuestionnaire } from "@/context/QuestionnaireContext.tsx";
import { useAdmin } from "@/context/AdminContext.tsx";
import { useFilteredQuestions } from "@/hooks/useFilteredQuestions.ts";
import { resolveLabel } from "@/utils/resolveLabel.ts";
import type { CategoryId, Question } from "@/types/index.ts";
import "./StepSummary.css";

export function StepSummary() {
  const { t } = useTranslation();
  const { state, reset } = useQuestionnaire();
  const { state: { categories } } = useAdmin();
  const filteredQuestions = useFilteredQuestions(state.config);

  if (state.isSubmitted) {
    return (
      <div className="summary-submitted">
        <div className="summary-submitted-icon">&#10003;</div>
        <h2 className="summary-submitted-title">{t("summary.submitted")}</h2>
        <p className="summary-submitted-desc">{t("summary.submittedDesc")}</p>
        <button className="summary-restart-btn" onClick={reset}>
          {t("nav.startOver")}
        </button>
      </div>
    );
  }

  const formatAnswer = (question: Question, value: unknown): string => {
    if (value === null || value === undefined) return t("summary.notAnswered");

    switch (question.type) {
      case "yesno":
        return value === true ? t("common.yes") : value === false ? t("common.no") : t("summary.notAnswered");
      case "dropdown": {
        const option = question.options?.find((o) => o.value === value);
        return option ? (option.label ?? t(option.labelKey)) : String(value);
      }
      case "multiselect": {
        if (!Array.isArray(value) || value.length === 0) return t("summary.notAnswered");
        return "multiselect"; // Return a marker for multiselect
      }
      case "text":
        return typeof value === "string" && value.trim() !== "" ? value : t("summary.notAnswered");
      case "date":
        return typeof value === "string" && value !== "" ? value : t("summary.notAnswered");
      default:
        return String(value);
    }
  };

  const getMultiselectValues = (question: Question, value: unknown): string[] => {
    if (!Array.isArray(value) || value.length === 0) return [];
    return value
      .map((v) => {
        const option = question.options?.find((o) => o.value === v);
        return option ? (option.label ?? t(option.labelKey)) : v;
      });
  };


  return (
    <div className="step-summary">
      <div className="summary-header">
        <h2 className="summary-title">{t("summary.title")}</h2>
        <p className="summary-subtitle">{t("summary.subtitle")}</p>
      </div>

      {/* Configuration summary */}
      <div className="summary-section">
        <h3 className="summary-section-title">{t("steps.configuration")}</h3>
        <div className="summary-config-grid">
          <div className="summary-config-item">
            <span className="summary-config-label">{t("config.riskLevel")}</span>
            <span className="summary-config-value">
              {state.config.riskLevel ? t(`config.riskLevel.${state.config.riskLevel}`) : "—"}
            </span>
          </div>
          <div className="summary-config-item">
            <span className="summary-config-label">{t("config.customerType")}</span>
            <span className="summary-config-value">
              {state.config.customerType ? t(`config.customerType.${state.config.customerType}`) : "—"}
            </span>
          </div>
          <div className="summary-config-item">
            <span className="summary-config-label">{t("config.controlType")}</span>
            <span className="summary-config-value">
              {state.config.controlType ? t(`config.controlType.${state.config.controlType}`) : "—"}
            </span>
          </div>
        </div>
      </div>

      {/* Category summaries */}
      {categories.map((category) => {
        const questions = filteredQuestions[category.id as CategoryId] ?? [];
        if (questions.length === 0) return null;

        return (
          <div key={category.id} className="summary-section">
            <h3 className="summary-section-title">
              <span className="summary-section-icon">{category.icon}</span>
              {resolveLabel(category, t)}
            </h3>
            <div className="summary-answers">
              {questions.map((question) => {
                const value = state.answers[question.id];
                const isUnanswered =
                  value === null ||
                  value === undefined ||
                  (typeof value === "string" && value.trim() === "") ||
                  (Array.isArray(value) && value.length === 0);

                // Handle multiselect separately to display as bullet list
                if (question.type === "multiselect" && !isUnanswered) {
                  const multiselectValues = getMultiselectValues(question, value);
                  return (
                    <div key={question.id} className="summary-answer">
                      <div className="summary-answer-question">{question.label ?? t(question.labelKey)}</div>
                      <div className="summary-answer-value">
                        <ul className="summary-answer-value-list">
                          {multiselectValues.map((val, idx) => (
                            <li key={idx}>{val}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                }

                const formattedValue = formatAnswer(question, value);
                return (
                  <div key={question.id} className="summary-answer">
                    <div className="summary-answer-question">{question.label ?? t(question.labelKey)}</div>
                    <div className={`summary-answer-value ${isUnanswered ? "summary-answer-value--empty" : ""}`}>
                      {formattedValue}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
