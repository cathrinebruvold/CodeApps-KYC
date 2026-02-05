import { useMemo } from "react";
import type { Question, QuestionnaireConfig, CategoryId } from "@/types/index.ts";
import { useAdmin } from "@/context/AdminContext.tsx";

export function useFilteredQuestions(config: QuestionnaireConfig) {
  const { state: { questions } } = useAdmin();

  return useMemo(() => {
    if (!config.riskLevel || !config.customerType || !config.controlType) {
      return {} as Partial<Record<CategoryId, Question[]>>;
    }

    const filtered = questions.filter((q) => {
      const matchesRisk = q.riskLevels.includes(config.riskLevel!);
      const matchesCustomer = q.customerTypes.includes(config.customerType!);
      const matchesControl = q.controlTypes.includes(config.controlType!);
      return matchesRisk && matchesCustomer && matchesControl;
    });

    const grouped: Partial<Record<CategoryId, Question[]>> = {};
    for (const q of filtered) {
      if (!grouped[q.categoryId]) {
        grouped[q.categoryId] = [];
      }
      grouped[q.categoryId]!.push(q);
    }

    return grouped;
  }, [questions, config.riskLevel, config.customerType, config.controlType]);
}
