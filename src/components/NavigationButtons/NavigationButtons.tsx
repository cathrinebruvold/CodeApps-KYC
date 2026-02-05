import { useTranslation } from "@/i18n/index.tsx";
import { useQuestionnaire } from "@/context/QuestionnaireContext.tsx";
import { useFilteredQuestions } from "@/hooks/useFilteredQuestions.ts";
import { useStepValidation } from "@/hooks/useStepValidation.ts";
import { useAdmin } from "@/context/AdminContext.tsx";
import type { CategoryId } from "@/types/index.ts";
import "./NavigationButtons.css";

export function NavigationButtons() {
  const { t } = useTranslation();
  const { state, nextStep, prevStep, submit } = useQuestionnaire();
  const filteredQuestions = useFilteredQuestions(state.config);
  const { isConfigComplete, isCategoryComplete } = useStepValidation();
  const { steps } = useAdmin();

  const currentStepDef = steps[state.currentStep];
  const isFirstStep = state.currentStep === 0;
  const isLastStep = state.currentStep === steps.length - 1;

  const canProceed = (): boolean => {
    if (currentStepDef.type === "configuration") {
      return isConfigComplete(state.config);
    }
    // Category steps always allow proceeding (required validation is informational)
    return true;
  };

  const getQuestionCount = (): string | null => {
    if (currentStepDef.type !== "category" || !currentStepDef.categoryId) return null;
    const questions = filteredQuestions[currentStepDef.categoryId as CategoryId] ?? [];
    if (questions.length === 0) return null;

    const answered = questions.filter((q) => {
      const answer = state.answers[q.id];
      if (answer === null || answer === undefined) return false;
      if (typeof answer === "string" && answer.trim() === "") return false;
      if (Array.isArray(answer) && answer.length === 0) return false;
      return true;
    }).length;

    return t("summary.questionsAnswered", {
      answered: String(answered),
      total: String(questions.length),
    });
  };

  // Check if all required questions in current category are answered
  const hasRequiredUnanswered = (): boolean => {
    if (currentStepDef.type !== "category" || !currentStepDef.categoryId) return false;
    const questions = filteredQuestions[currentStepDef.categoryId as CategoryId] ?? [];
    return !isCategoryComplete(questions, state.answers);
  };

  const questionCount = getQuestionCount();

  return (
    <div className="navigation-buttons">
      <div className="navigation-info">
        {questionCount && (
          <span className={`navigation-count ${hasRequiredUnanswered() ? "navigation-count--incomplete" : "navigation-count--complete"}`}>
            {questionCount}
          </span>
        )}
      </div>
      <div className="navigation-actions">
        {!isFirstStep && (
          <button className="nav-btn nav-btn--secondary" onClick={prevStep}>
            {t("nav.back")}
          </button>
        )}
        {isLastStep ? (
          <button className="nav-btn nav-btn--primary" onClick={submit}>
            {t("nav.submit")}
          </button>
        ) : (
          <button
            className="nav-btn nav-btn--primary"
            onClick={nextStep}
            disabled={!canProceed()}
          >
            {t("nav.next")}
          </button>
        )}
      </div>
    </div>
  );
}
