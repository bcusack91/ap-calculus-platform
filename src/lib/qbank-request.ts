import { z } from 'zod'
import { QBANK_DIFFICULTIES, QBANK_MAX_COUNT, QBANK_MIN_COUNT, type QbankDifficulty, type QbankFilters } from '@/lib/qbank-types'

/**
 * Request parsing shared by the question-bank routes: the filter lists come
 * as JSON arrays (POST) or comma-separated query params (GET counts).
 */
const list = z.array(z.string().min(1).max(200)).max(200).optional()

export const qbankFilterSchema = z.object({
  sections: list,
  disciplines: list,
  topics: list,
  difficulties: z.array(z.enum(['easy', 'medium', 'hard'])).max(3).optional(),
})

export const qbankCreateSchema = qbankFilterSchema.extend({
  course: z.enum(['mcat', 'sat']),
  count: z.number().int().min(QBANK_MIN_COUNT).max(QBANK_MAX_COUNT),
  mode: z.enum(['timed', 'tutor']),
  pool: z.enum(['all', 'unused', 'incorrect', 'flagged']).default('all'),
})

export function cleanFilters(f: z.infer<typeof qbankFilterSchema>): QbankFilters {
  const uniq = (xs?: string[]) => (xs?.length ? [...new Set(xs)] : undefined)
  return {
    ...(uniq(f.sections) ? { sections: uniq(f.sections) } : {}),
    ...(uniq(f.disciplines) ? { disciplines: uniq(f.disciplines) } : {}),
    ...(uniq(f.topics) ? { topics: uniq(f.topics) } : {}),
    ...(uniq(f.difficulties) ? { difficulties: uniq(f.difficulties) as QbankDifficulty[] } : {}),
  }
}

/** Filters from query params: ?sections=a,b&disciplines=…&topics=…&difficulties=easy,hard */
export function filtersFromParams(params: URLSearchParams): QbankFilters {
  const csv = (k: string) =>
    (params.get(k) ?? '')
      .split(',')
      .map((s) => s.trim())
      .filter((s) => s && s.length <= 200)
      .slice(0, 200)
  return cleanFilters({
    sections: csv('sections'),
    disciplines: csv('disciplines'),
    topics: csv('topics'),
    difficulties: csv('difficulties').filter((d): d is QbankDifficulty => (QBANK_DIFFICULTIES as readonly string[]).includes(d)),
  })
}
