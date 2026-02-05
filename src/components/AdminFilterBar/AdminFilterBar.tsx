import { useTranslation } from "@/i18n/index.tsx";
import { RiskLevel, CustomerType, ControlType } from "@/types/index.ts";
import type { RiskLevel as RiskLevelType, CustomerType as CustomerTypeType, ControlType as ControlTypeType } from "@/types/index.ts";
import "./AdminFilterBar.css";

interface AdminFilterBarProps {
  activeRiskLevels: RiskLevelType[];
  activeCustomerTypes: CustomerTypeType[];
  activeControlTypes: ControlTypeType[];
  onRiskLevelToggle: (level: RiskLevelType) => void;
  onCustomerTypeToggle: (type: CustomerTypeType) => void;
  onControlTypeToggle: (type: ControlTypeType) => void;
  onResetFilters: () => void;
  filteredCount: number;
  totalCount: number;
}

const riskChips = [
  { value: RiskLevel.Low, labelKey: "config.riskLevel.low", variant: "low" },
  { value: RiskLevel.Medium, labelKey: "config.riskLevel.medium", variant: "medium" },
  { value: RiskLevel.High, labelKey: "config.riskLevel.high", variant: "high" },
  { value: RiskLevel.Critical, labelKey: "config.riskLevel.critical", variant: "critical" },
] as const;

const customerChips = [
  { value: CustomerType.Person, labelKey: "config.customerType.person" },
  { value: CustomerType.Company, labelKey: "config.customerType.company" },
] as const;

const controlChips = [
  { value: ControlType.Onboarding, labelKey: "config.controlType.onboarding" },
  { value: ControlType.Periodic, labelKey: "config.controlType.periodic" },
  { value: ControlType.EventDriven, labelKey: "config.controlType.event_driven" },
] as const;

export function AdminFilterBar({
  activeRiskLevels,
  activeCustomerTypes,
  activeControlTypes,
  onRiskLevelToggle,
  onCustomerTypeToggle,
  onControlTypeToggle,
  onResetFilters,
  filteredCount,
  totalCount,
}: AdminFilterBarProps) {
  const { t } = useTranslation();

  const hasActiveFilters =
    activeRiskLevels.length > 0 ||
    activeCustomerTypes.length > 0 ||
    activeControlTypes.length > 0;

  return (
    <div className="admin-filter-bar">
      <div className="admin-filter-section">
        <span className="admin-filter-label">{t("admin.filter.riskLevel")}</span>
        <div className="admin-filter-chips">
          {riskChips.map((chip) => {
            const isActive = activeRiskLevels.includes(chip.value);
            return (
              <button
                key={chip.value}
                type="button"
                className={[
                  "admin-filter-chip",
                  `admin-filter-chip--${chip.variant}`,
                  isActive ? "admin-filter-chip--active" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => onRiskLevelToggle(chip.value)}
              >
                {t(chip.labelKey)}
              </button>
            );
          })}
        </div>
      </div>

      <div className="admin-filter-section">
        <span className="admin-filter-label">{t("admin.filter.customerType")}</span>
        <div className="admin-filter-chips">
          {customerChips.map((chip) => {
            const isActive = activeCustomerTypes.includes(chip.value);
            return (
              <button
                key={chip.value}
                type="button"
                className={[
                  "admin-filter-chip",
                  isActive ? "admin-filter-chip--active" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => onCustomerTypeToggle(chip.value)}
              >
                {t(chip.labelKey)}
              </button>
            );
          })}
        </div>
      </div>

      <div className="admin-filter-section">
        <span className="admin-filter-label">{t("admin.filter.controlType")}</span>
        <div className="admin-filter-chips">
          {controlChips.map((chip) => {
            const isActive = activeControlTypes.includes(chip.value);
            return (
              <button
                key={chip.value}
                type="button"
                className={[
                  "admin-filter-chip",
                  isActive ? "admin-filter-chip--active" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => onControlTypeToggle(chip.value)}
              >
                {t(chip.labelKey)}
              </button>
            );
          })}
        </div>
      </div>

      <div className="admin-filter-footer">
        <span className="admin-filter-count">
          {t("admin.filter.showing", {
            filtered: String(filteredCount),
            total: String(totalCount),
          })}
        </span>
        <button
          type="button"
          className="admin-filter-reset-btn"
          onClick={onResetFilters}
          disabled={!hasActiveFilters}
        >
          {t("admin.filter.reset")}
        </button>
      </div>
    </div>
  );
}
