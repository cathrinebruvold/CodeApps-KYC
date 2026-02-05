import type { AnswerValue } from "@/types/index.ts";
import "./inputs.css";

interface DateInputProps {
  value: AnswerValue;
  onChange: (value: string) => void;
}

export function DateInput({ value, onChange }: DateInputProps) {
  return (
    <input
      type="date"
      className="input-date"
      value={typeof value === "string" ? value : ""}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
