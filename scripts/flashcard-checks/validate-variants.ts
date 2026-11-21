/**
 * Gate for one PART of a set's further card-check questions (variants; see
 * sets.ts and VARIANT-BRIEF.md): every card of the part has the right number
 * of further questions for its kind (calc: 6 more, concept: 2 more), each is
 * well formed with no answer-length tell, the card's questions differ from one
 * another in both wording and correct answer, and none copies a question the
 * student already meets.
 *
 *   npx tsx scripts/flashcard-checks/validate-variants.ts <set>.p<N> <outDir>
 */
import { readFileSync } from 'fs'
import { loadChecks, loadVariantPart } from './sets'
import { CARD_CHECK_QUESTIONS, checkKey, type CardCheck } from '../../src/lib/flashcard-check-core'
import { termsOf } from '../../src/lib/text-terms'

const norm = (s: string) => s.replace(/\s+/g, ' ').trim().toLowerCase()

async function main() {
  const [part, out] = process.argv.slice(2)
  const set = part.split('.p')[0]
  const primary = new Map(Object.entries(await loadChecks(set)).map(([f, c]) => [checkKey(f), c]))
  const variants = new Map(Object.entries(await loadVariantPart(part)).map(([f, v]) => [checkKey(f), v]))
  const fronts = [...new Set((JSON.parse(readFileSync(`${out}/${part}-cards.json`, 'utf8')) as { front: string }[]).map((c) => checkKey(c.front)))]
  const existing = JSON.parse(readFileSync(`${out}/${set}-existing-questions.json`, 'utf8')) as { src: string; question: string }[]
  const exTerms = existing.map((e) => ({ e, t: termsOf(e.question) }))
  const errs: string[] = []
  const warns: string[] = []
  for (const f of fronts) if (!variants.has(f)) errs.push(`MISSING entry for card: ${f}`)
  for (const f of variants.keys()) if (!fronts.includes(f)) errs.push(`NO SUCH CARD in this part: ${f}`)
  const pos = [0, 0, 0, 0]
  const kinds = { calc: 0, concept: 0 }
  const seenQ = new Map<string, string>()
  let n = 0
  for (const [f, v] of variants) {
    const card = `[${f.slice(0, 50)}]`
    const first = primary.get(f)
    if (!first) { errs.push(`${card} has no first question in the set's check file`); continue }
    if (v.kind !== 'calc' && v.kind !== 'concept') { errs.push(`${card} kind must be 'calc' or 'concept'`); continue }
    kinds[v.kind]++
    const want = CARD_CHECK_QUESTIONS[v.kind] - 1
    if (!Array.isArray(v.more) || v.more.length !== want) errs.push(`${card} a ${v.kind} card needs exactly ${want} further questions, has ${v.more?.length ?? 0}`)
    const siblings: CardCheck[] = [first]
    for (const [i, c] of (v.more ?? []).entries()) {
      const tag = `${card} #${i + 1}`
      n++
      if (!c.question || c.question.length < 30) errs.push(`${tag} question too short`)
      if (!Array.isArray(c.options) || c.options.length !== 4) { errs.push(`${tag} needs exactly 4 options`); continue }
      if (new Set(c.options.map(norm)).size !== 4) errs.push(`${tag} duplicate options`)
      if (![0, 1, 2, 3].includes(c.correctAnswer)) { errs.push(`${tag} correctAnswer out of range`); continue }
      if (!c.explanation || c.explanation.length < 80) errs.push(`${tag} explanation too short`)
      if (/all of the above|none of the above|both a and b/i.test(c.options.join(' '))) errs.push(`${tag} "all/none of the above" option`)
      if (/\b(option|choice) [A-D]\b|(?<![\d.]\s)\b[A-D]\)/.test(c.explanation)) errs.push(`${tag} explanation refers to an option letter (options are shuffled)`)
      if (checkKey(c.question) === f) errs.push(`${tag} question repeats the card front`)
      pos[c.correctAnswer]++
      const len = c.options.map((o) => o.length)
      const others = len.filter((_, k) => k !== c.correctAnswer)
      const maxOther = Math.max(...others), minOther = Math.min(...others)
      if (len[c.correctAnswer] > maxOther * 1.15 + 2) errs.push(`${tag} LENGTH TELL: correct option is the longest (${len.join('/')})`)
      if (len[c.correctAnswer] < minOther * 0.8 - 2) errs.push(`${tag} LENGTH TELL: correct option is the shortest (${len.join('/')})`)
      if (Math.max(...len) > Math.min(...len) * 1.6 + 6) warns.push(`${tag} uneven option lengths (${len.join('/')})`)
      // Against the card's other questions: new wording AND a new correct answer, or the answer can be memorised.
      for (const [k, s] of siblings.entries()) {
        const which = k === 0 ? 'its first question' : `#${k}`
        if (norm(s.question) === norm(c.question)) errs.push(`${tag} same question text as ${which}`)
        if (norm(s.options[s.correctAnswer]) === norm(c.options[c.correctAnswer])) errs.push(`${tag} SAME CORRECT ANSWER as ${which} ("${c.options[c.correctAnswer].slice(0, 40)}"): change the numbers or the angle so the answer differs`)
      }
      siblings.push(c)
      const dup = seenQ.get(norm(c.question)); if (dup && dup !== f) errs.push(`${tag} same question as card [${dup.slice(0, 40)}]`); seenQ.set(norm(c.question), f)
      const t = termsOf(c.question)
      for (const { e, t: et } of exTerms) {
        let inter = 0; for (const w of t) if (et.has(w)) inter++
        const j = inter / (t.size + et.size - inter || 1)
        if (j >= 0.6) errs.push(`${tag} TOO CLOSE to an existing ${e.src} question (${j.toFixed(2)}): ${e.question.slice(0, 90)}`)
        else if (j >= 0.45) warns.push(`${tag} similar to an existing ${e.src} question (${j.toFixed(2)}): ${e.question.slice(0, 90)}`)
      }
    }
  }
  pos.forEach((p, i) => { if (n >= 20 && (p < n * 0.18 || p > n * 0.32)) errs.push(`KEY SPREAD: position ${i} holds ${p} of ${n} correct answers (want 18–32% each)`) })
  console.log(`${part}: ${n} further questions for ${variants.size} of ${fronts.length} cards (calc ${kinds.calc}, concept ${kinds.concept}) | key positions ${pos.join('/')}`)
  warns.forEach((w) => console.log('warn  ' + w))
  errs.forEach((e) => console.log('ERROR ' + e))
  console.log(errs.length ? `FAILED: ${errs.length} error(s)` : 'OK')
  process.exit(errs.length ? 1 : 0)
}
main()
