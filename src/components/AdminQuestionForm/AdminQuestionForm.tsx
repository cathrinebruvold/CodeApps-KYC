import type { Question } from "@/types/index.ts";
import "./AdminQuestionForm.css";

interface AdminQuestionFormProps {
  question: Question;
  onSave: () => void;
  onCancel: () => void;
}

export function AdminQuestionForm({
  question,
  onSave,
  onCancel,
}: AdminQuestionFormProps) {
  return (
    <div className="admin-question-form">
      <form onSubmit={(e) => { e.preventDefault(); onSave(); }}>
        <input type="text" placeholder="Question label" defaultValue={question.labelKey} />
        <div className="admin-question-form-actions">
          <button type="submit">Save</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
