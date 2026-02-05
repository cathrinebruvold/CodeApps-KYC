import type { Question } from "@/types/index.ts";
import { QuestionType, RiskLevel } from "@/types/index.ts";
import { useTranslation } from "@/i18n/index.tsx";
import { resolveLabel } from "@/utils/resolveLabel.ts";
import "./AdminQuestionCard.css";

interface AdminQuestionCardProps {
  question: Question;
  onEdit: () => void;
  onDelete: () => void;
}

const questionTypeKeys: Record<string, string> = {
  [QuestionType.Text]: "admin.questionType.text",
  [QuestionType.YesNo]: "admin.questionType.yesno",
  [QuestionType.Dropdown]: "admin.questionType.dropdown",
  [QuestionType.Multiselect]: "admin.questionType.multiselect",
  [QuestionType.Date]: "admin.questionType.date",
};

const riskLevelKeys: Record<string, string> = {
  [RiskLevel.Low]: "config.riskLevel.low",
  [RiskLevel.Medium]: "config.riskLevel.medium",
  [RiskLevel.High]: "config.riskLevel.high",
  [RiskLevel.Critical]: "config.riskLevel.critical",
};

const customerTypeKeys: Record<string, string> = {
  person: "config.customerType.person",
  company: "config.customerType.company",
};

const controlTypeKeys: Record<string, string> = {
  onboarding: "config.controlType.onboarding",
  periodic: "config.controlType.periodic",
  event_driven: "config.controlType.event_driven",
};

function getRiskTagClass(level: string): string {
  switch (level) {
    case RiskLevel.Low:
      return "admin-question-card-tag--risk-low";
    case RiskLevel.Medium:
      return "admin-question-card-tag--risk-medium";
    case RiskLevel.High:
      return "admin-question-card-tag--risk-high";
    case RiskLevel.Critical:
      return "admin-question-card-tag--risk-critical";
    default:
      return "";
  }
}

export function AdminQuestionCard({
  question,
  onEdit,
  onDelete,
}: AdminQuestionCardProps) {
  const { t } = useTranslation();

  const typeLabel = t(questionTypeKeys[question.type] ?? question.type);
  const isRequired = question.required;

  return (
    <div className="admin-question-card">
      <div className="admin-question-card-header">
        <span className="admin-question-card-text">
          {resolveLabel(question, t)}
        </span>
        <div className="admin-question-card-badges">
          <span className="admin-question-card-badge admin-question-card-badge--type">
            {typeLabel}
          </span>
          <span
            className={`admin-question-card-badge ${isRequired ? "admin-question-card-badge--required" : "admin-question-card-badge--optional"}`}
          >
            {isRequired ? t("common.required") : t("common.optional")}
          </span>
          {question.isCustom && (
            <span className="admin-question-card-badge admin-question-card-badge--custom">
              {t("admin.question.custom")}
            </span>
          )}
        </div>
      </div>

      <div className="admin-question-card-tags">
        {question.riskLevels.map((level) => (
          <span
            key={`risk-${level}`}
            className={`admin-question-card-tag ${getRiskTagClass(level)}`}
          >
            {t(riskLevelKeys[level] ?? level)}
          </span>
        ))}
        {question.customerTypes.map((ct) => (
          <span
            key={`ct-${ct}`}
            className="admin-question-card-tag admin-question-card-tag--customer"
          >
            {t(customerTypeKeys[ct] ?? ct)}
          </span>
        ))}
        {question.controlTypes.map((ctrl) => (
          <span
            key={`ctrl-${ctrl}`}
            className="admin-question-card-tag admin-question-card-tag--control"
          >
            {t(controlTypeKeys[ctrl] ?? ctrl)}
          </span>
        ))}
      </div>

      <div className="admin-question-card-actions">
        <button
          className="admin-question-card-action-btn admin-question-card-action-btn--edit"
          onClick={onEdit}
          type="button"
          title={t("admin.question.edit")}
        >
          {"\u270E"} {t("admin.question.edit")}
        </button>
        <button
          className="admin-question-card-action-btn admin-question-card-action-btn--delete"
          onClick={onDelete}
          type="button"
          title={t("admin.question.delete")}
        >
          {"\uD83D\uDDD1"} {t("admin.question.delete")}
        </button>
      </div>
    </div>
  );
}
