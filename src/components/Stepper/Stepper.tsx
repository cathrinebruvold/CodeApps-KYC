import { useTranslation } from "@/i18n/index.tsx";
import { useQuestionnaire } from "@/context/QuestionnaireContext.tsx";
import type { StepDefinition } from "@/types/index.ts";
import "./Stepper.css";

interface StepperProps {
  steps: StepDefinition[];
  currentStep: number;
}

export function Stepper({ steps, currentStep }: StepperProps) {
  const { t } = useTranslation();
  const { goToStep } = useQuestionnaire();

  return (
    <nav className="stepper" aria-label="Progress">
      <div className="stepper-inner">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isActive = index === currentStep;
          const isClickable = isCompleted;

          let className = "stepper-step";
          if (isCompleted) className += " stepper-step--completed";
          if (isActive) className += " stepper-step--active";

          return (
            <div key={step.id} className={className}>
              {index > 0 && (
                <div
                  className={`stepper-connector ${
                    isCompleted || isActive ? "stepper-connector--filled" : ""
                  }`}
                />
              )}
              <button
                className="stepper-circle"
                onClick={isClickable ? () => goToStep(index) : undefined}
                disabled={!isClickable}
                aria-current={isActive ? "step" : undefined}
                title={t(step.labelKey)}
              >
                {isCompleted ? (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 7L5.5 10.5L12 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <span>{index + 1}</span>
                )}
              </button>
              <span className="stepper-label">{t(step.labelKey)}</span>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
