import type { AnswerValue } from "@/types/index.ts";
import "./inputs.css";

interface TextInputProps {
  value: AnswerValue;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function TextInput({ value, onChange, placeholder }: TextInputProps) {
  return (
    <textarea
      className="input-text"
      value={typeof value === "string" ? value : ""}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={3}
    />
  );
}
