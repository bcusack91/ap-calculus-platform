/**
 * Gate for a video deck's card-check questions (src/data/flashcard-checks/<key>.ts):
 * one question per card, well formed, no answer-length tell, keys spread over
 * the four positions, and not a copy of a question the student already meets
 * (run dump-context.ts first; it writes <outDir>/<key>-existing-questions.json).
 *
 *   npx tsx scripts/flashcard-checks/validate.ts mcat-circ1 <outDir>
 */
import { readFileSync } from 'fs'
import { REVIEW_DECKS } from '../../src/data/video-lesson-flashcards'
import { checkKey, type CardCheck } from '../../src/lib/flashcard-check-core'
import { termsOf } from '../../src/lib/text-terms'

async function main() {
  const [key, out] = process.argv.slice(2)
  const { checks } = (await import(`../../src/data/flashcard-checks/${key}`)) as { checks: Record<string, CardCheck> }
  const existing = JSON.parse(readFileSync(`${out}/${key}-existing-questions.json`, 'utf8')) as { src: string; question: string }[]
  const fronts = [...new Set(Object.values(REVIEW_DECKS[key]).flat().map((c) => checkKey(c.front)))]
  const byKey = new Map(Object.entries(checks).map(([f, c]) => [checkKey(f), c]))
  const errs: string[] = []
  const warns: string[] = []
  for (const f of fronts) if (!byKey.has(f)) errs.push(`MISSING check for card: ${f}`)
  for (const f of byKey.keys()) if (!fronts.includes(f)) errs.push(`NO SUCH CARD: ${f}`)
  const pos = [0, 0, 0, 0]
  const seenQ = new Map<string, string>()
  const exTerms = existing.map((e) => ({ e, t: termsOf(e.question) }))
  for (const [f, c] of byKey) {
    const tag = `[${f.slice(0, 60)}]`
    if (!c.question || c.question.length < 30) errs.push(`${tag} question too short`)
    if (!Array.isArray(c.options) || c.options.length !== 4) { errs.push(`${tag} needs exactly 4 options`); continue }
    if (new Set(c.options.map((o) => o.trim().toLowerCase())).size !== 4) errs.push(`${tag} duplicate options`)
    if (![0, 1, 2, 3].includes(c.correctAnswer)) { errs.push(`${tag} correctAnswer out of range`); continue }
    if (!c.explanation || c.explanation.length < 80) errs.push(`${tag} explanation too short`)
    if (/all of the above|none of the above|both a and b/i.test(c.options.join(' '))) errs.push(`${tag} "all/none of the above" option`)
    if (/\b(option|choice) [A-D]\b|(?<![\d.]\s)\b[A-D]\)/.test(c.explanation)) errs.push(`${tag} explanation refers to an option letter (options are shuffled)`)
    if (checkKey(c.question) === f) errs.push(`${tag} question repeats the card front`)
    pos[c.correctAnswer]++
    const len = c.options.map((o) => o.length)
    const others = len.filter((_, i) => i !== c.correctAnswer)
    const maxOther = Math.max(...others), minOther = Math.min(...others)
    if (len[c.correctAnswer] > maxOther * 1.15 + 2) errs.push(`${tag} LENGTH TELL: correct option is the longest (${len.join('/')})`)
    if (len[c.correctAnswer] < minOther * 0.8 - 2) errs.push(`${tag} LENGTH TELL: correct option is the shortest (${len.join('/')})`)
    if (Math.max(...len) > Math.min(...len) * 1.6 + 6) warns.push(`${tag} uneven option lengths (${len.join('/')})`)
    const dup = seenQ.get(checkKey(c.question)); if (dup) errs.push(`${tag} same question as card [${dup.slice(0, 40)}]`); seenQ.set(checkKey(c.question), f)
    const t = termsOf(c.question)
    for (const { e, t: et } of exTerms) {
      let inter = 0; for (const w of t) if (et.has(w)) inter++
      const j = inter / (t.size + et.size - inter || 1)
      if (j >= 0.6) errs.push(`${tag} TOO CLOSE to an existing ${e.src} question (${j.toFixed(2)}): ${e.question.slice(0, 90)}`)
      else if (j >= 0.45) warns.push(`${tag} similar to an existing ${e.src} question (${j.toFixed(2)}): ${e.question.slice(0, 90)}`)
    }
  }
  const n = byKey.size
  pos.forEach((p, i) => { if (n >= 20 && (p < n * 0.18 || p > n * 0.32)) errs.push(`KEY SPREAD: position ${i} holds ${p} of ${n} correct answers (want 18–32% each)`) })
  console.log(`${key}: ${n} checks for ${fronts.length} cards | key positions ${pos.join('/')}`)
  warns.forEach((w) => console.log('warn  ' + w))
  errs.forEach((e) => console.log('ERROR ' + e))
  console.log(errs.length ? `FAILED: ${errs.length} error(s)` : 'OK')
  process.exit(errs.length ? 1 : 0)
}
main()
