/**
 * Rarity-weighted term matching, shared by the slide-deck generator (which
 * segment taught a poll / worked example) and the exit quiz (which lesson part
 * teaches a question, when the pool doesn't say). Pure; safe on the client.
 */
const STOPWORDS = new Set([
  'the', 'and', 'for', 'that', 'with', 'this', 'which', 'what', 'from', 'are', 'was',
  'were', 'has', 'have', 'had', 'not', 'but', 'can', 'will', 'when', 'where', 'how',
  'why', 'all', 'each', 'any', 'its', 'his', 'her', 'their', 'they', 'them', 'there',
  'then', 'than', 'these', 'those', 'also', 'into', 'onto', 'upon', 'about', 'between',
  'after', 'before', 'because', 'while', 'over', 'under', 'more', 'less', 'most',
  'least', 'only', 'some', 'such', 'same', 'other', 'both', 'may', 'might', 'per',
  'via', 'you', 'your', 'one', 'two', 'three', 'first', 'second', 'third', 'use',
  'used', 'using', 'uses', 'does', 'did', 'been', 'being', 'would', 'could', 'should',
  'must', 'many', 'much', 'very', 'just', 'like', 'following', 'value', 'values',
  'answer', 'question', 'true', 'false', 'correct', 'best', 'find', 'given', 'shown',
  'example', 'consider', 'suppose', 'let', 'new', 'way', 'means', 'called',
])

/** Meaningful lowercase terms of a chunk of slide/poll text (LaTeX stripped). */
export function termsOf(text: string): Set<string> {
  const cleaned = text
    .replace(/\\[a-zA-Z]+/g, ' ') // LaTeX commands (\frac, \pi, …) are noise
    .replace(/[${}^_|]/g, ' ')
    .toLowerCase()
  const out = new Set<string>()
  for (const raw of cleaned.split(/[^a-z]+/)) {
    if (raw.length < 3 || STOPWORDS.has(raw)) continue
    // Light stemming: "aldehydes" and "aldehyde" are one term, so a question
    // phrased in the singular still finds the part that taught the plural.
    const w = raw.length >= 5 && raw.endsWith('s') && !raw.endsWith('ss') ? raw.slice(0, -1) : raw
    out.add(w)
  }
  return out
}

/**
 * Best segment for a poll/example: rarity-weighted term overlap (a term that
 * appears in only one segment is a much stronger signal than one that appears
 * everywhere). Ties break toward the LATER segment so the concept is
 * guaranteed to have been covered. Returns -1 when nothing overlaps enough to
 * trust (< 2 shared terms) — the caller sends those to the end-of-deck review
 * run rather than risk asking before teaching.
 */
export function bestSegment(itemTerms: Set<string>, segTerms: Set<string>[]): number {
  let bestIdx = -1
  let bestScore = 0
  for (let i = 0; i < segTerms.length; i++) {
    let overlap = 0
    let score = 0
    for (const t of itemTerms) {
      if (!segTerms[i].has(t)) continue
      overlap++
      let df = 0
      for (const seg of segTerms) if (seg.has(t)) df++
      score += 1 / df
    }
    if (overlap >= 2 && score >= bestScore) {
      bestScore = score
      bestIdx = i
    }
  }
  return bestIdx
}
