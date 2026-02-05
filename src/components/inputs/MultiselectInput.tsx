import { useTranslation } from "@/i18n/index.tsx";
import type { AnswerValue, QuestionOption } from "@/types/index.ts";
import "./inputs.css";

interface MultiselectInputProps {
  value: AnswerValue;
  onChange: (value: string[]) => void;
  options: QuestionOption[];
}

export function MultiselectInput({ value, onChange, options }: MultiselectInputProps) {
  const { t } = useTranslation();
  const selected = Array.isArray(value) ? value : [];

  const handleToggle = (optionValue: string) => {
    if (selected.includes(optionValue)) {
      onChange(selected.filter((v) => v !== optionValue));
    } else {
      onChange([...selected, optionValue]);
    }
  };

  return (
    <div className="input-multiselect">
      {options.map((opt) => (
        <label key={opt.value} className="input-multiselect-option">
          <input
            type="checkbox"
            checked={selected.includes(opt.value)}
            onChange={() => handleToggle(opt.value)}
            className="input-multiselect-checkbox"
          />
          <span className="input-multiselect-label">{opt.label ?? t(opt.labelKey)}</span>
        </label>
      ))}
    </div>
  );
}
