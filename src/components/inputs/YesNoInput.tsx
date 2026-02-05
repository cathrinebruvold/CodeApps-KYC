import { useTranslation } from "@/i18n/index.tsx";
import type { AnswerValue } from "@/types/index.ts";
import "./inputs.css";

interface YesNoInputProps {
  value: AnswerValue;
  onChange: (value: boolean) => void;
}

export function YesNoInput({ value, onChange }: YesNoInputProps) {
  const { t } = useTranslation();

  return (
    <div className="input-yesno">
      <button
        type="button"
        className={`input-yesno-btn input-yesno-btn--yes ${value === true ? "input-yesno-btn--selected" : ""}`}
        onClick={() => onChange(true)}
      >
        {t("common.yes")}
      </button>
      <button
        type="button"
        className={`input-yesno-btn input-yesno-btn--no ${value === false ? "input-yesno-btn--selected" : ""}`}
        onClick={() => onChange(false)}
      >
        {t("common.no")}
      </button>
    </div>
  );
}
