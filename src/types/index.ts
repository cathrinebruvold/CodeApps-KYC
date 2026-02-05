// ---- Constants (as const objects instead of enums due to erasableSyntaxOnly) ----

export const RiskLevel = {
  Low: "low",
  Medium: "medium",
  High: "high",
  Critical: "critical",
} as const;
export type RiskLevel = (typeof RiskLevel)[keyof typeof RiskLevel];

export const CustomerType = {
  Person: "person",
  Company: "company",
} as const;
export type CustomerType = (typeof CustomerType)[keyof typeof CustomerType];

export const ControlType = {
  Onboarding: "onboarding",
  Periodic: "periodic",
  EventDriven: "event_driven",
} as const;
export type ControlType = (typeof ControlType)[keyof typeof ControlType];

export const QuestionType = {
  Text: "text",
  YesNo: "yesno",
  Dropdown: "dropdown",
  Multiselect: "multiselect",
  Date: "date",
} as const;
export type QuestionType = (typeof QuestionType)[keyof typeof QuestionType];

export const CategoryId = {
  KYC: "kyc",
  Transaction: "transaction",
  Risk: "risk",
  PEP: "pep",
  Sanctions: "sanctions",
} as const;
export type CategoryId = (typeof CategoryId)[keyof typeof CategoryId];

// ---- Core data structures ----

export interface QuestionOption {
  value: string;
  labelKey: string;
  label?: string;
}

export interface Question {
  id: string;
  categoryId: CategoryId;
  type: QuestionType;
  labelKey: string;
  label?: string;
  helpTextKey?: string;
  helpText?: string;
  required: boolean;
  options?: QuestionOption[];
  riskLevels: RiskLevel[];
  customerTypes: CustomerType[];
  controlTypes: ControlType[];
  isCustom?: boolean;
  sortOrder?: number;
}

export interface Category {
  id: CategoryId;
  labelKey: string;
  label?: string;
  descriptionKey: string;
  description?: string;
  icon: string;
  sortOrder: number;
}

// ---- Configuration (Step 1 selections) ----

export interface QuestionnaireConfig {
  riskLevel: RiskLevel | null;
  customerType: CustomerType | null;
  controlType: ControlType | null;
}

// ---- Answer types ----

export type AnswerValue = string | boolean | string[] | null;

export type AnswerMap = Record<string, AnswerValue>;

// ---- Questionnaire state ----

export interface QuestionnaireState {
  config: QuestionnaireConfig;
  answers: AnswerMap;
  currentStep: number;
  isSubmitted: boolean;
  startedAt: string;
}

// ---- Step definition ----

export interface StepDefinition {
  id: string;
  labelKey: string;
  type: "configuration" | "category" | "summary";
  categoryId?: CategoryId;
}
