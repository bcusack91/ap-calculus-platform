/**
 * Shared helpers for the classroom-groups API routes.
 *
 * Groups deploy before their tables exist in prod (migrations are applied
 * manually), so every route catches "table does not exist" and degrades:
 * GET → { groups: [], available: false }, writes → 503 { available: false }.
 */

/** Prisma error codes for "table/column does not exist" (migration not applied). */
export function isMissingSchemaError(e: unknown): boolean {
  const code = (e as { code?: string } | null)?.code
  return code === 'P2021' || code === 'P2022'
}

export const MAX_GROUP_NAME_LENGTH = 40

/** Validate + normalize a group name from a request body. Returns null if invalid. */
export function parseGroupName(raw: unknown): string | null {
  if (typeof raw !== 'string') return null
  const name = raw.trim()
  if (name.length === 0 || name.length > MAX_GROUP_NAME_LENGTH) return null
  return name
}
