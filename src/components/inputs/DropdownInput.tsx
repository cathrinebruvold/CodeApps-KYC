import { useTranslation } from "@/i18n/index.tsx";
import type { AnswerValue, QuestionOption } from "@/types/index.ts";
import "./inputs.css";

interface DropdownInputProps {
  value: AnswerValue;
  onChange: (value: string) => void;
  options: QuestionOption[];
}

export function DropdownInput({ value, onChange, options }: DropdownInputProps) {
  const { t } = useTranslation();

  return (
    <select
      className="input-dropdown"
      value={typeof value === "string" ? value : ""}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">{t("common.selectPlaceholder")}</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label ?? t(opt.labelKey)}
        </option>
      ))}
    </select>
  );
}
