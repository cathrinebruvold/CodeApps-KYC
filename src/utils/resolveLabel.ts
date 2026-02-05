type TranslateFn = (key: string, params?: Record<string, string>) => string;

export function resolveLabel(
  item: { label?: string; labelKey: string },
  t: TranslateFn,
): string {
  return item.label ?? t(item.labelKey);
}

export function resolveHelpText(
  item: { helpText?: string; helpTextKey?: string },
  t: TranslateFn,
): string | undefined {
  if (item.helpText) return item.helpText;
  if (item.helpTextKey) return t(item.helpTextKey);
  return undefined;
}

export function resolveDescription(
  item: { description?: string; descriptionKey: string },
  t: TranslateFn,
): string {
  return item.description ?? t(item.descriptionKey);
}
