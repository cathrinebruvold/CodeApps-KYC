import { useTranslation } from "@/i18n/index.tsx";
import { AdminQuestionCard } from "@/components/AdminQuestionCard/AdminQuestionCard.tsx";
import { resolveLabel } from "@/utils/resolveLabel.ts";
import type { Question, Category } from "@/types/index.ts";
import "./AdminCategoryPanel.css";

interface AdminCategoryPanelProps {
  category: Category;
  questions: Question[];
}

export function AdminCategoryPanel({
  category,
  questions,
}: AdminCategoryPanelProps) {
  const { t } = useTranslation();

  const handleDelete = () => {
    // Delete logic would go here
  };

  const categoryName = resolveLabel(category, t);

  return (
    <div className="admin-category-panel">
      <h3 className="admin-category-panel-title">{categoryName}</h3>
      <div className="admin-questions-list">
        {questions.length === 0 ? (
          <p className="admin-questions-empty">{t("admin.noQuestions")}</p>
        ) : (
          questions.map((question) => (
            <AdminQuestionCard
              key={question.id}
              question={question}
              onEdit={() => {}}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  );
}
