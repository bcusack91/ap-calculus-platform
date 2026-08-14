/**
 * Topic-aware pool selection for course-wide exit-quiz banks.
 *
 * The old behavior in every bank was `filtered.length > 0 ? filtered : pool`:
 * a topic slug with no exactly-tagged questions silently fell back to RANDOM
 * whole-course questions — which is how the Lipids exit quiz (and its in-class
 * polls) served Okazaki-fragment questions. Owner directive: quizzes/polls
 * must align with the topic.
 *
 * Selection order:
 *  1. Questions tagged with the exact topicSlug (unchanged fast path).
 *  2. Relevance fallback: questions whose text mentions the slug's meaningful
 *     terms ("lipids" → lipid…). Used only when it yields enough for a real
 *     quiz (≥ MIN_RELEVANT), so a couple of stray keyword hits can't shrink
 *     the quiz to 2 questions.
 *  3. Whole-course pool (last resort — a broad quiz beats no quiz).
 */

interface BankQuestion {
  topicSlug?: string
  question: string
  options: string[]
  explanation?: string
  category?: string
}

const MIN_RELEVANT = 4

/** Slug fragments that carry no topical meaning (course prefixes, filler). */
const SLUG_NOISE = new Set([
  'the', 'and', 'for', 'with', 'intro', 'introduction', 'basics', 'basic',
  'advanced', 'part', 'unit', 'review', 'overview', 'fundamentals',
  'ap', 'sat', 'act', 'mcat', 'bio', 'chem', 'psych', 'calcab', 'calcbc',
  'calculus', 'algebra', 'geometry', 'precalculus', 'statistics', 'stats',
  'physics', 'chemistry', 'biology', 'psychology', 'history', 'english',
  'grade', 'math', 'prep', 'general', 'organic', 'molecular', 'organ',
  'anatomy', 'physiology', 'form', 'cell',
])

function slugTerms(topicSlug: string): string[] {
  return topicSlug
    .toLowerCase()
    .split('-')
    .filter((t) => t.length >= 3 && !SLUG_NOISE.has(t) && !/^\d+$/.test(t))
}

/**
 * Does this question/template text mention any of the slug's meaningful terms?
 * Whole-word matching ("form" must not match "formula"), with singular/plural
 * tolerance ("lipids" matches "lipid bilayer").
 */
export function textMatchesSlug(text: string, topicSlug: string): boolean {
  const lower = text.toLowerCase()
  return slugTerms(topicSlug).some((term) => {
    const base = term.endsWith('s') && term.length >= 4 ? term.slice(0, -1) : term
    const re = new RegExp(`\\b${base.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(s|es)?\\b`)
    return re.test(lower)
  })
}

export function relevantPool<T extends BankQuestion>(pool: T[], topicSlug: string): T[] {
  const exact = pool.filter((q) => q.topicSlug === topicSlug)
  if (exact.length > 0) return exact

  // Two-tier matching. STRONG = the question/explanation/category mentions the
  // topic. WEAK = only the options mention it — distractors name wrong-topic
  // concepts by design ("tRNA carries: … / Lipids / …"), so option matches are
  // used only as top-up when strong matches alone can't fill a quiz.
  const strong: T[] = []
  const weak: T[] = []
  for (const q of pool) {
    if (textMatchesSlug(`${q.question} ${q.explanation ?? ''} ${q.category ?? ''}`, topicSlug)) strong.push(q)
    else if (textMatchesSlug(q.options.join(' '), topicSlug)) weak.push(q)
  }
  if (strong.length >= MIN_RELEVANT) return strong
  if (strong.length + weak.length >= MIN_RELEVANT) return [...strong, ...weak]

  return pool
}
