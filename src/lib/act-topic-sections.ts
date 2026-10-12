/**
 * Which ACT section an ACT lesson topic's questions belong to (question bank,
 * mistake log). Pure and light: no banks imported.
 */

/**
 * The ACT section a topic's questions belong to; null = not exam content
 * (test-day logistics). The mixed Reading + Science tips pool is split per
 * question (actMixedItemSection).
 */
export function actTopicSection(slug: string): 'english' | 'math' | 'reading' | 'science' | 'mixed' | null {
  if (!/^act-.*-act$/.test(slug)) return null
  if (/test-day-strategy/.test(slug)) return null
  if (slug === 'act-reading-science-tips-act') return 'mixed'
  if (slug.startsWith('act-english-')) return 'english'
  if (slug.startsWith('act-reading-')) return 'reading'
  if (slug.startsWith('act-science-')) return 'science'
  return 'math'
}

/** A Reading + Science tips item: Reading when it asks about a passage or its author, else Science. */
export function actMixedItemSection(question: string): 'reading' | 'science' {
  return /\bthe passage\b|\bauthor\b|\bSentence \d|\bAs it is used\b/i.test(question) ? 'reading' : 'science'
}

/** Section label ('English' | 'Math' | 'Reading' | 'Science') of an ACT topic; '' when unknown or mixed. */
export function actSectionLabelForTopic(slug: string): string {
  const s = actTopicSection(slug)
  return s === 'english' ? 'English' : s === 'math' ? 'Math' : s === 'reading' ? 'Reading' : s === 'science' ? 'Science' : ''
}
