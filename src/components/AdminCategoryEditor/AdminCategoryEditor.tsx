import { useState } from "react";
import type { Category } from "@/types/index.ts";
import { useAdmin } from "@/context/AdminContext.tsx";
import { useTranslation } from "@/i18n/index.tsx";
import { resolveLabel, resolveDescription } from "@/utils/resolveLabel.ts";
import "./AdminCategoryEditor.css";

interface AdminCategoryEditorProps {
  category: Category;
  onSave: () => void;
  onCancel: () => void;
}

export function AdminCategoryEditor({
  category,
  onSave,
  onCancel,
}: AdminCategoryEditorProps) {
  const { t } = useTranslation();
  const { updateCategory } = useAdmin();

  const [label, setLabel] = useState(() => resolveLabel(category, t));
  const [description, setDescription] = useState(() =>
    resolveDescription(category, t),
  );
  const [icon, setIcon] = useState(category.icon);

  const handleSave = () => {
    updateCategory(category.id, {
      label: label.trim(),
      description: description.trim(),
      icon: icon.trim(),
    });
    onSave();
  };

  return (
    <div className="admin-category-editor">
      <div className="admin-category-editor-fields">
        <div className="admin-category-editor-field">
          <label className="admin-category-editor-label">
            {t("admin.category.label")}
          </label>
          <input
            className="admin-category-editor-input"
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
          />
        </div>
        <div className="admin-category-editor-field">
          <label className="admin-category-editor-label">
            {t("admin.category.description")}
          </label>
          <input
            className="admin-category-editor-input"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="admin-category-editor-field admin-category-editor-field--icon">
          <label className="admin-category-editor-label">
            {t("admin.category.icon")}
          </label>
          <input
            className="admin-category-editor-input admin-category-editor-input--icon"
            type="text"
            value={icon}
            onChange={(e) => setIcon(e.target.value)}
          />
        </div>
      </div>
      <div className="admin-category-editor-actions">
        <button
          className="admin-category-editor-btn admin-category-editor-btn--cancel"
          onClick={onCancel}
          type="button"
        >
          {t("admin.category.cancel")}
        </button>
        <button
          className="admin-category-editor-btn admin-category-editor-btn--save"
          onClick={handleSave}
          type="button"
        >
          {t("admin.category.save")}
        </button>
      </div>
    </div>
  );
}
