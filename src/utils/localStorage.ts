import type { Question, Category } from "@/types/index.ts";

const STORAGE_KEY = "aml-admin-state";
const STORAGE_VERSION = 1;

interface PersistedAdminState {
  version: number;
  questions: Question[];
  categories: Category[];
}

export function loadAdminState(): { questions: Question[]; categories: Category[] } | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as PersistedAdminState;
    if (parsed.version !== STORAGE_VERSION) return null;
    return { questions: parsed.questions, categories: parsed.categories };
  } catch {
    return null;
  }
}

export function saveAdminState(questions: Question[], categories: Category[]): void {
  try {
    const data: PersistedAdminState = {
      version: STORAGE_VERSION,
      questions,
      categories,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // Storage full or unavailable; fail silently
  }
}

export function clearAdminState(): void {
  localStorage.removeItem(STORAGE_KEY);
}
