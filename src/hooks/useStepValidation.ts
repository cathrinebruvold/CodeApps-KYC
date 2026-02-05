import { useCallback } from "react";
import type { QuestionnaireConfig, AnswerMap, Question } from "@/types/index.ts";

export function useStepValidation() {
  const isConfigComplete = useCallback((config: QuestionnaireConfig): boolean => {
    return (
      config.riskLevel !== null &&
      config.customerType !== null &&
      config.controlType !== null
    );
  }, []);

  const isCategoryComplete = useCallback(
    (questions: Question[], answers: AnswerMap): boolean => {
      return questions
        .filter((q) => q.required)
        .every((q) => {
          const answer = answers[q.id];
          if (answer === null || answer === undefined) return false;
          if (typeof answer === "string" && answer.trim() === "") return false;
          if (Array.isArray(answer) && answer.length === 0) return false;
          return true;
        });
    },
    [],
  );

  return { isConfigComplete, isCategoryComplete };
}
