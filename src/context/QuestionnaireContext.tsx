import { createContext, useContext, useState, useCallback } from "react";
import type { ReactNode } from "react";
import type { QuestionnaireConfig, QuestionnaireState, AnswerValue } from "@/types/index.ts";

interface QuestionnaireContextValue {
  state: QuestionnaireState;
  setConfig: (config: Partial<QuestionnaireConfig>) => void;
  setAnswer: (questionId: string, value: AnswerValue) => void;
  goToStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  submit: () => void;
  reset: () => void;
}

function createInitialState(): QuestionnaireState {
  return {
    config: {
      riskLevel: null,
      customerType: null,
      controlType: null,
    },
    answers: {},
    currentStep: 0,
    isSubmitted: false,
    startedAt: new Date().toISOString(),
  };
}

const QuestionnaireContext = createContext<QuestionnaireContextValue | null>(null);

export function QuestionnaireProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<QuestionnaireState>(createInitialState);

  const setConfig = useCallback((partial: Partial<QuestionnaireConfig>) => {
    setState((prev) => ({
      ...prev,
      config: { ...prev.config, ...partial },
    }));
  }, []);

  const setAnswer = useCallback((questionId: string, value: AnswerValue) => {
    setState((prev) => ({
      ...prev,
      answers: { ...prev.answers, [questionId]: value },
    }));
  }, []);

  const goToStep = useCallback((step: number) => {
    setState((prev) => ({ ...prev, currentStep: step }));
  }, []);

  const nextStep = useCallback(() => {
    setState((prev) => ({ ...prev, currentStep: prev.currentStep + 1 }));
  }, []);

  const prevStep = useCallback(() => {
    setState((prev) => ({
      ...prev,
      currentStep: Math.max(0, prev.currentStep - 1),
    }));
  }, []);

  const submit = useCallback(() => {
    setState((prev) => ({ ...prev, isSubmitted: true }));
  }, []);

  const reset = useCallback(() => {
    setState(createInitialState());
  }, []);

  return (
    <QuestionnaireContext value={{ state, setConfig, setAnswer, goToStep, nextStep, prevStep, submit, reset }}>
      {children}
    </QuestionnaireContext>
  );
}

export function useQuestionnaire() {
  const context = useContext(QuestionnaireContext);
  if (!context) {
    throw new Error("useQuestionnaire must be used within QuestionnaireProvider");
  }
  return context;
}
