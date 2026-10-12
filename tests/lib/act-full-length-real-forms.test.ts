/**
 * The authored ACT full-length forms (fl1-3) through the real registry: each
 * loads and passes the blueprint checks, the runner's copy carries no keys,
 * every English question's marker is in its passage, every question keys
 * uniquely, review items carry per-option explanations, and the rich-text
 * renderer turns math, escaped currency and tables into markup (no stray
 * `\$` or raw pipe tables reach the student).
 */
import { describe, it, expect, beforeAll } from 'vitest'
import { ACT_FL_FORM_NUMBERS, checkActForm, getActForm, actFormAvailability } from '@/data/act-practice/full-length'
import type { ActFLForm } from '@/data/act-practice/full-length/types'
import { actFlSlots, buildActFlItems, publicActForm } from '@/lib/question-sources/act'
import { englishMarkerNumbers, renderActEnglishHtml } from '@/lib/act-english-markers'
import { renderRichText } from '@/lib/render-rich-text'
import { preloadKatex } from '@/lib/katex-lazy'

const forms: ActFLForm[] = []
beforeAll(async () => {
  await preloadKatex().catch(() => {})
  for (const n of ACT_FL_FORM_NUMBERS) {
    const f = await getActForm(n)
    if (f) forms.push(f)
  }
}, 60_000)

describe('authored ACT full-length forms', () => {
  it('all three forms are available and pass the blueprint checks', async () => {
    expect((await actFormAvailability()).map((f) => f.available)).toEqual([true, true, true])
    expect(forms.map((f) => f.form)).toEqual([1, 2, 3])
    for (const f of forms) {
      const { errors } = checkActForm(f)
      expect(errors, `form ${f.form}`).toEqual([])
      expect(f.reading.filter((p) => p.kind === 'paired'), `form ${f.form} paired`).toHaveLength(1)
    }
  })

  it('every English question with a marker points at a marker in its passage', () => {
    for (const f of forms) {
      for (const p of f.english) {
        const markers = new Set(englishMarkerNumbers(p.text))
        for (const q of p.questions) if (typeof q.marker === 'number') expect(markers.has(q.marker), `${q.id}`).toBe(true)
        const html = renderActEnglishHtml(p.text, p.questions[0].marker ?? null)
        expect(html).not.toMatch(/\{\{|⟦/)
        expect(html).toMatch(/<u class/)
      }
    }
  })

  it('serves the runner no keys and keys every question uniquely across forms', () => {
    const keys = new Set<string>()
    for (const f of forms) {
      expect(JSON.stringify(publicActForm(f))).not.toMatch(/"correctIndex"|"explanation"|"optionExplanations"|"skill"/)
      const items = buildActFlItems(f, true, {})
      expect(items).toHaveLength(171)
      for (const it of items) {
        expect(keys.has(it.questionKey), it.questionKey).toBe(false)
        keys.add(it.questionKey)
        expect(it.optionExplanations, `${f.form}:${it.index}`).toHaveLength(4)
      }
    }
  })

  it('renders math, escaped currency and tables as markup', () => {
    for (const f of forms) {
      for (const s of actFlSlots(f, true)) {
        for (const text of [s.question.question, ...s.question.options]) {
          const html = renderRichText(text)
          expect(html, s.question.id).not.toContain('\\$')
        }
      }
      for (const p of [...f.reading, ...f.science]) {
        if (/^\s*\|?\s*-{3,}/m.test(p.text)) expect(renderRichText(p.text), p.id).toContain('<table')
      }
    }
  })
})
