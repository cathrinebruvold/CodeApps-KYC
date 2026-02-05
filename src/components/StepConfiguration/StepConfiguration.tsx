import { useTranslation } from "@/i18n/index.tsx";
import { useQuestionnaire } from "@/context/QuestionnaireContext.tsx";
import { RiskLevel, CustomerType, ControlType } from "@/types/index.ts";
import "./StepConfiguration.css";

interface OptionCardProps<T extends string> {
  value: T;
  labelKey: string;
  selected: boolean;
  onSelect: (value: T) => void;
  variant?: string;
}

function OptionCard<T extends string>({ value, labelKey, selected, onSelect, variant }: OptionCardProps<T>) {
  const { t } = useTranslation();

  return (
    <button
      className={`option-card ${selected ? "option-card--selected" : ""} ${variant ? `option-card--${variant}` : ""}`}
      onClick={() => onSelect(value)}
      type="button"
    >
      <span className="option-card-label">{t(labelKey)}</span>
    </button>
  );
}

export function StepConfiguration() {
  const { t } = useTranslation();
  const { state, setConfig } = useQuestionnaire();
  const { config } = state;

  const riskOptions = [
    { value: RiskLevel.Low, labelKey: "config.riskLevel.low", variant: "low" },
    { value: RiskLevel.Medium, labelKey: "config.riskLevel.medium", variant: "medium" },
    { value: RiskLevel.High, labelKey: "config.riskLevel.high", variant: "high" },
    { value: RiskLevel.Critical, labelKey: "config.riskLevel.critical", variant: "critical" },
  ];

  const customerOptions = [
    { value: CustomerType.Person, labelKey: "config.customerType.person" },
    { value: CustomerType.Company, labelKey: "config.customerType.company" },
  ];

  const controlOptions = [
    { value: ControlType.Onboarding, labelKey: "config.controlType.onboarding" },
    { value: ControlType.Periodic, labelKey: "config.controlType.periodic" },
    { value: ControlType.EventDriven, labelKey: "config.controlType.event_driven" },
  ];

  return (
    <div className="step-configuration">
      <div className="step-header">
        <h2 className="step-title">{t("config.title")}</h2>
        <p className="step-subtitle">{t("config.subtitle")}</p>
      </div>

      <div className="config-section">
        <h3 className="config-section-title">{t("config.riskLevel")}</h3>
        <div className="option-grid option-grid--4">
          {riskOptions.map((opt) => (
            <OptionCard
              key={opt.value}
              value={opt.value}
              labelKey={opt.labelKey}
              selected={config.riskLevel === opt.value}
              onSelect={(v) => setConfig({ riskLevel: v })}
              variant={opt.variant}
            />
          ))}
        </div>
      </div>

      <div className="config-section">
        <h3 className="config-section-title">{t("config.customerType")}</h3>
        <div className="option-grid option-grid--2">
          {customerOptions.map((opt) => (
            <OptionCard
              key={opt.value}
              value={opt.value}
              labelKey={opt.labelKey}
              selected={config.customerType === opt.value}
              onSelect={(v) => setConfig({ customerType: v })}
            />
          ))}
        </div>
      </div>

      <div className="config-section">
        <h3 className="config-section-title">{t("config.controlType")}</h3>
        <div className="option-grid option-grid--3">
          {controlOptions.map((opt) => (
            <OptionCard
              key={opt.value}
              value={opt.value}
              labelKey={opt.labelKey}
              selected={config.controlType === opt.value}
              onSelect={(v) => setConfig({ controlType: v })}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
