import { useTranslation } from "@/i18n/index.tsx";
import { useQuestionnaire } from "@/context/QuestionnaireContext.tsx";
import { useAdmin } from "@/context/AdminContext.tsx";
import { useFilteredQuestions } from "@/hooks/useFilteredQuestions.ts";
import { QuestionRenderer } from "@/components/QuestionRenderer/QuestionRenderer.tsx";
import { resolveLabel, resolveDescription } from "@/utils/resolveLabel.ts";
import type { CategoryId } from "@/types/index.ts";
import "./StepCategory.css";

interface StepCategoryProps {
  categoryId: CategoryId;
}

export function StepCategory({ categoryId }: StepCategoryProps) {
  const { t } = useTranslation();
  const { state } = useQuestionnaire();
  const { state: { categories } } = useAdmin();
  const filteredQuestions = useFilteredQuestions(state.config);

  const category = categories.find((c) => c.id === categoryId);
  const questions = filteredQuestions[categoryId] ?? [];

  if (!category) return null;

  return (
    <div className="step-category">
      <div className="category-header">
        <span className="category-icon">{category.icon}</span>
        <div className="category-header-text">
          <h2 className="category-title">{resolveLabel(category, t)}</h2>
          <p className="category-description">{resolveDescription(category, t)}</p>
        </div>
      </div>

      {questions.length === 0 ? (
        <div className="category-empty">
          <p>{t("common.noQuestions")}</p>
        </div>
      ) : (
        <div className="category-questions">
          {questions.map((question) => (
            <QuestionRenderer key={question.id} question={question} />
          ))}
        </div>
      )}
    </div>
  );
}
