import { createContext, useContext, useState, useCallback, useEffect, useMemo } from "react";
import type { ReactNode } from "react";
import type { Question, Category, CategoryId, StepDefinition } from "@/types/index.ts";
import { ALL_QUESTIONS, CATEGORIES } from "@/data/questions.ts";
import { loadAdminState, saveAdminState, clearAdminState } from "@/utils/localStorage.ts";

interface AdminState {
  questions: Question[];
  categories: Category[];
  isAdminMode: boolean;
}

interface AdminContextValue {
  state: AdminState;
  steps: StepDefinition[];
  toggleAdminMode: () => void;
  addQuestion: (question: Question) => void;
  updateQuestion: (id: string, updates: Partial<Question>) => void;
  deleteQuestion: (id: string) => void;
  updateCategory: (id: CategoryId, updates: Partial<Omit<Category, "id">>) => void;
  reorderCategories: (orderedIds: CategoryId[]) => void;
  resetToDefaults: () => void;
  getQuestionsForCategory: (categoryId: CategoryId) => Question[];
}

function createInitialState(): AdminState {
  const persisted = loadAdminState();
  return {
    questions: persisted?.questions ?? [...ALL_QUESTIONS],
    categories: persisted?.categories ?? CATEGORIES.map((c) => ({ ...c })),
    isAdminMode: false,
  };
}

const AdminContext = createContext<AdminContextValue | null>(null);

export function AdminProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AdminState>(createInitialState);

  // Persist on change
  useEffect(() => {
    saveAdminState(state.questions, state.categories);
  }, [state.questions, state.categories]);

  // Compute steps from categories
  const steps = useMemo((): StepDefinition[] => {
    const sorted = [...state.categories].sort((a, b) => a.sortOrder - b.sortOrder);
    return [
      { id: "config", labelKey: "steps.configuration", type: "configuration" as const },
      ...sorted.map((cat) => ({
        id: cat.id,
        labelKey: cat.labelKey,
        type: "category" as const,
        categoryId: cat.id as CategoryId,
      })),
      { id: "summary", labelKey: "steps.summary", type: "summary" as const },
    ];
  }, [state.categories]);

  const toggleAdminMode = useCallback(() => {
    setState((prev) => ({ ...prev, isAdminMode: !prev.isAdminMode }));
  }, []);

  const addQuestion = useCallback((question: Question) => {
    setState((prev) => ({ ...prev, questions: [...prev.questions, question] }));
  }, []);

  const updateQuestion = useCallback((id: string, updates: Partial<Question>) => {
    setState((prev) => ({
      ...prev,
      questions: prev.questions.map((q) => (q.id === id ? { ...q, ...updates } : q)),
    }));
  }, []);

  const deleteQuestion = useCallback((id: string) => {
    setState((prev) => ({
      ...prev,
      questions: prev.questions.filter((q) => q.id !== id),
    }));
  }, []);

  const updateCategory = useCallback((id: CategoryId, updates: Partial<Omit<Category, "id">>) => {
    setState((prev) => ({
      ...prev,
      categories: prev.categories.map((c) =>
        c.id === id ? { ...c, ...updates } : c,
      ),
    }));
  }, []);

  const reorderCategories = useCallback((orderedIds: CategoryId[]) => {
    setState((prev) => ({
      ...prev,
      categories: prev.categories.map((c) => ({
        ...c,
        sortOrder: orderedIds.indexOf(c.id),
      })),
    }));
  }, []);

  const resetToDefaults = useCallback(() => {
    clearAdminState();
    setState({
      questions: [...ALL_QUESTIONS],
      categories: CATEGORIES.map((c) => ({ ...c })),
      isAdminMode: true,
    });
  }, []);

  const getQuestionsForCategory = useCallback(
    (categoryId: CategoryId) =>
      state.questions.filter((q) => q.categoryId === categoryId),
    [state.questions],
  );

  return (
    <AdminContext value={{
      state,
      steps,
      toggleAdminMode,
      addQuestion,
      updateQuestion,
      deleteQuestion,
      updateCategory,
      reorderCategories,
      resetToDefaults,
      getQuestionsForCategory,
    }}>
      {children}
    </AdminContext>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("useAdmin must be used within AdminProvider");
  }
  return context;
}
