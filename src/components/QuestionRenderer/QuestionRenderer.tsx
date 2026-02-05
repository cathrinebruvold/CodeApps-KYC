import { useTranslation } from "@/i18n/index.tsx";
import { useQuestionnaire } from "@/context/QuestionnaireContext.tsx";
import { TextInput } from "@/components/inputs/TextInput.tsx";
import { YesNoInput } from "@/components/inputs/YesNoInput.tsx";
import { DropdownInput } from "@/components/inputs/DropdownInput.tsx";
import { MultiselectInput } from "@/components/inputs/MultiselectInput.tsx";
import { DateInput } from "@/components/inputs/DateInput.tsx";
import { resolveLabel, resolveHelpText } from "@/utils/resolveLabel.ts";
import type { Question } from "@/types/index.ts";
import "./QuestionRenderer.css";

interface QuestionRendererProps {
  question: Question;
}

export function QuestionRenderer({ question }: QuestionRendererProps) {
  const { t } = useTranslation();
  const { state, setAnswer } = useQuestionnaire();
  const value = state.answers[question.id] ?? null;

  const renderInput = () => {
    switch (question.type) {
      case "text":
        return <TextInput value={value} onChange={(v) => setAnswer(question.id, v)} />;
      case "yesno":
        return <YesNoInput value={value} onChange={(v) => setAnswer(question.id, v)} />;
      case "dropdown":
        return (
          <DropdownInput
            value={value}
            onChange={(v) => setAnswer(question.id, v)}
            options={question.options ?? []}
          />
        );
      case "multiselect":
        return (
          <MultiselectInput
            value={value}
            onChange={(v) => setAnswer(question.id, v)}
            options={question.options ?? []}
          />
        );
      case "date":
        return <DateInput value={value} onChange={(v) => setAnswer(question.id, v)} />;
    }
  };

  return (
    <div className="question-renderer">
      <div className="question-header">
        <label className="question-label">{resolveLabel(question, t)}</label>
        <span className={`question-badge ${question.required ? "question-badge--required" : "question-badge--optional"}`}>
          {question.required ? t("common.required") : t("common.optional")}
        </span>
      </div>
      {(() => {
        const helpText = resolveHelpText(question, t);
        return helpText ? <p className="question-help">{helpText}</p> : null;
      })()}
      <div className="question-input">{renderInput()}</div>
    </div>
  );
}
