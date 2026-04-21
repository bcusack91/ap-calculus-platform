export function parseCategoryAndForm(category: string): { baseCategory: string; form: number } | null {
  const match = category.match(/^(.*)-(\d+)$/)
  if (!match) return null

  const form = Number(match[2])
  if (!Number.isFinite(form) || form < 1) return null

  return {
    baseCategory: match[1],
    form,
  }
}

export function getDiagnosticRoute(baseCategory: string): string {
  return `/${baseCategory}`
}

export function getDiagnosticLabel(baseCategory: string): string {
  return baseCategory
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

/**
 * Maps a percentage score (0–100) to a 1–5 performance tier.
 * Used for non-AP diagnostics that don't have a native AP score.
 */
export function percentageToTier(percentage: number): 1 | 2 | 3 | 4 | 5 {
  if (percentage >= 80) return 5
  if (percentage >= 65) return 4
  if (percentage >= 50) return 3
  if (percentage >= 35) return 2
  return 1
}
